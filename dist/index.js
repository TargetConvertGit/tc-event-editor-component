import { defineComponent as Ae, openBlock as O, createElementBlock as I, createElementVNode as E, toDisplayString as le, ref as ne, watchEffect as ss, computed as M, watch as ke, onBeforeUnmount as Fu, Fragment as te, unref as h, renderList as me, createBlock as Ke, createCommentVNode as J, withDirectives as Ce, isRef as _e, vModelSelect as je, reactive as os, onMounted as fn, onUnmounted as Ir, toRefs as Vu, h as An, provide as Bn, inject as vn, resolveDynamicComponent as Ui, normalizeProps as ji, mergeProps as Cr, renderSlot as Wt, normalizeClass as He, normalizeStyle as gr, withKeys as Zs, createVNode as ve, withCtx as qe, nextTick as Ln, toRef as Ia, resolveComponent as ln, Transition as Bi, createTextVNode as pa, withModifiers as Hi, guardReactiveProps as Uu, resolveDirective as ju, toHandlers as Bu, vModelCheckbox as qr, getCurrentInstance as is, shallowRef as Hu, onBeforeMount as Wu, Text as Gu, Teleport as Wi, createStaticVNode as Ku, pushScopeId as qu, popScopeId as zu } from "vue";
function HI(e) {
}
class Xu {
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
var Xe = /* @__PURE__ */ ((e) => (e[e.Google = 1] = "Google", e[e.Facebook = 2] = "Facebook", e))(Xe || {}), mt = /* @__PURE__ */ ((e) => (e[e.Campaign = 1] = "Campaign", e[e.AdGroup = 2] = "AdGroup", e[e.Ad = 3] = "Ad", e[e.AdTag = 4] = "AdTag", e))(mt || {}), ct = /* @__PURE__ */ ((e) => (e[e.Campaign = 1] = "Campaign", e[e.AdGroup = 2] = "AdGroup", e[e.Ad = 3] = "Ad", e[e.AdTag = 4] = "AdTag", e))(ct || {}), un = /* @__PURE__ */ ((e) => (e[e.ForAll = 1] = "ForAll", e[e.ForID = 2] = "ForID", e[e.ForActive = 3] = "ForActive", e))(un || {}), Sn = /* @__PURE__ */ ((e) => (e[e.Account = 1] = "Account", e[e.Campaign = 2] = "Campaign", e[e.AdGroup = 3] = "AdGroup", e))(Sn || {}), xn = /* @__PURE__ */ ((e) => (e[e.Account = 1] = "Account", e[e.Campaign = 2] = "Campaign", e[e.AdGroup = 3] = "AdGroup", e))(xn || {}), xe = /* @__PURE__ */ ((e) => (e[e.Never = -1] = "Never", e[e.Hour = 1] = "Hour", e[e.Day = 2] = "Day", e[e.Week = 3] = "Week", e[e.Month = 4] = "Month", e[e.Annual = 5] = "Annual", e))(xe || {}), $t = /* @__PURE__ */ ((e) => (e[e.Sunday = 0] = "Sunday", e[e.Monday = 1] = "Monday", e[e.Tuesday = 2] = "Tuesday", e[e.Wednesday = 3] = "Wednesday", e[e.Thursday = 4] = "Thursday", e[e.Friday = 5] = "Friday", e[e.Saturday = 6] = "Saturday", e[e.Weekday = -1] = "Weekday", e[e.Weekend = -2] = "Weekend", e))($t || {}), an = /* @__PURE__ */ ((e) => (e[e.First = 1] = "First", e[e.Second = 2] = "Second", e[e.Third = 3] = "Third", e[e.Fourth = 4] = "Fourth", e[e.Fifth = 5] = "Fifth", e[e.Last = -1] = "Last", e))(an || {}), it = /* @__PURE__ */ ((e) => (e[e.January = 1] = "January", e[e.February = 2] = "February", e[e.March = 3] = "March", e[e.April = 4] = "April", e[e.May = 5] = "May", e[e.June = 6] = "June", e[e.July = 7] = "July", e[e.August = 8] = "August", e[e.September = 9] = "September", e[e.October = 10] = "October", e[e.November = 11] = "November", e[e.December = 12] = "December", e))(it || {}), ae = /* @__PURE__ */ ((e) => (e[e.SetNewBudget = 1] = "SetNewBudget", e[e.IncreaseBudget = 2] = "IncreaseBudget", e[e.LowerBudget = 3] = "LowerBudget", e[e.OpenProject = 4] = "OpenProject", e[e.SuspendProject = 5] = "SuspendProject", e[e.None = -1] = "None", e))(ae || {}), Rn = /* @__PURE__ */ ((e) => (e.DailyBudget = "dailyBudget", e.TotalBudget = "totalBudget", e))(Rn || {}), se = /* @__PURE__ */ ((e) => (e.Value = "value", e.Percentage = "percentage", e))(se || {}), fe = /* @__PURE__ */ ((e) => (e.BudgetRemaining = "budgetRemaining", e.BudgetCap = "budgetCap", e.Clicks = "clicks", e.Impressions = "impressions", e.Cpc = "CPC", e.Spend = "spend", e.Conversions = "conversions", e.ConversionSpend = "conversionSpend", e.ReturnOnADSpending = "roas", e))(fe || {}), _r = /* @__PURE__ */ ((e) => (e[e.Today = 1] = "Today", e[e.Yesterday = 2] = "Yesterday", e[e.Last3Days = 3] = "Last3Days", e[e.Last7Days = 4] = "Last7Days", e[e.ThisMonth = 5] = "ThisMonth", e[e.SpecifiedTime = -1] = "SpecifiedTime", e))(_r || {}), ls = /* @__PURE__ */ ((e) => (e.MoreThan = ">", e.GreaterOrEqualTo = ">=", e.Equal = "==", e.LessThan = "<", e.LessThanOrEqualTo = "<=", e))(ls || {}), us = /* @__PURE__ */ ((e) => (e[e.AbnormalityOrError = 0] = "AbnormalityOrError", e[e.Error = 1] = "Error", e[e.None = -1] = "None", e))(us || {});
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
  EventHelper: Xu,
  FrequencyType: xe,
  MonthType: it,
  OperationType: ls,
  ValueType: se,
  WeekOrdinalWordsType: an,
  WeekdaysType: $t,
  emailType: us
}, Symbol.toStringTag, { value: "Module" })), Zu = { class: "flex" }, Ju = ["checked", "id"], Qu = ["for"], ec = /* @__PURE__ */ Ae({
  __name: "CheckBox",
  props: {
    label: {},
    checked: { type: Boolean },
    fieldId: {}
  },
  emits: ["update:checked"],
  setup(e, { emit: t }) {
    return (n, r) => (O(), I("div", Zu, [
      E("input", {
        onInput: r[0] || (r[0] = (s) => n.$emit("update:checked", s.target.checked)),
        type: "checkbox",
        checked: n.checked,
        id: n.fieldId,
        class: "hidden"
      }, null, 40, Ju),
      E("label", {
        for: n.fieldId,
        class: "p3-r cursor-pointer rounded border hover:bg-light-4 border-dark-5 px-1 py-0.5 flex justify-center items-center text-dark-2 min-w-[1.75rem] min-h-[1.75rem]"
      }, le(n.label), 9, Qu)
    ]));
  }
});
const cs = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, s] of t)
    n[r] = s;
  return n;
}, Js = /* @__PURE__ */ cs(ec, [["__scopeId", "data-v-8bd665ed"]]), tc = {
  key: 0,
  class: "flex gap-1.5 flex-wrap"
}, nc = {
  key: 1,
  class: "flex gap-2 items-center"
}, rc = /* @__PURE__ */ E("span", { class: "p3-r" }, "指定", -1), ac = ["value"], sc = { class: "flex gap-4 flex-wrap" }, oc = /* @__PURE__ */ Ae({
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
      { name: "第一週", id: an.First },
      { name: "第二週", id: an.Second },
      { name: "第三週", id: an.Third },
      { name: "第四週", id: an.Fourth },
      { name: "第五週", id: an.Fifth },
      { name: "最後一週", id: an.Last }
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
    }), f = M(() => n.type === xe.Month || n.type === xe.Annual ? !0 : (r.value = [], s.value = [], a.value = [], o.value = [], !1)), $ = ne([
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
    ), Fu(() => {
      r.value = [], s.value = [], a.value = [], o.value = [];
    }), (D, d) => (O(), I(te, null, [
      D.type === h(xe).Annual ? (O(), I("div", tc, [
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
      h(f) ? (O(), I("div", nc, [
        rc,
        Ce(E("select", {
          class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
          "onUpdate:modelValue": d[0] || (d[0] = (b) => _e(g) ? g.value = b : null)
        }, [
          (O(!0), I(te, null, me(h($), (b, k) => (O(), I("option", {
            key: k,
            value: b
          }, le(b.name), 9, ac))), 128))
        ], 512), [
          [je, h(g)]
        ])
      ])) : J("", !0),
      E("div", sc, [
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
var lt = "top", yt = "bottom", Dt = "right", ut = "left", ds = "auto", Mr = [lt, yt, Dt, ut], Hn = "start", Er = "end", ic = "clippingParents", Gi = "viewport", cr = "popper", lc = "reference", Qs = /* @__PURE__ */ Mr.reduce(function(e, t) {
  return e.concat([t + "-" + Hn, t + "-" + Er]);
}, []), Ki = /* @__PURE__ */ [].concat(Mr, [ds]).reduce(function(e, t) {
  return e.concat([t, t + "-" + Hn, t + "-" + Er]);
}, []), uc = "beforeRead", cc = "read", dc = "afterRead", fc = "beforeMain", vc = "main", pc = "afterMain", mc = "beforeWrite", hc = "write", gc = "afterWrite", _c = [uc, cc, dc, fc, vc, pc, mc, hc, gc];
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
function bc(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var r = t.styles[n] || {}, s = t.attributes[n] || {}, a = t.elements[n];
    !_t(a) || !Yt(a) || (Object.assign(a.style, r), Object.keys(s).forEach(function(o) {
      var i = s[o];
      i === !1 ? a.removeAttribute(o) : a.setAttribute(o, i === !0 ? "" : i);
    }));
  });
}
function yc(e) {
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
const Dc = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: bc,
  effect: yc,
  requires: ["computeStyles"]
};
function Rt(e) {
  return e.split("-")[0];
}
var Dn = Math.max, zr = Math.min, Wn = Math.round;
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
function Gt(e) {
  return ft(e).getComputedStyle(e);
}
function wc(e) {
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
  Gt(e).position === "fixed" ? null : e.offsetParent;
}
function Ec(e) {
  var t = /firefox/i.test(xa()), n = /Trident/i.test(xa());
  if (n && _t(e)) {
    var r = Gt(e);
    if (r.position === "fixed")
      return null;
  }
  var s = ma(e);
  for (fs(s) && (s = s.host); _t(s) && ["html", "body"].indexOf(Yt(s)) < 0; ) {
    var a = Gt(s);
    if (a.transform !== "none" || a.perspective !== "none" || a.contain === "paint" || ["transform", "perspective"].indexOf(a.willChange) !== -1 || t && a.willChange === "filter" || t && a.filter && a.filter !== "none")
      return s;
    s = s.parentNode;
  }
  return null;
}
function Pr(e) {
  for (var t = ft(e), n = eo(e); n && wc(n) && Gt(n).position === "static"; )
    n = eo(n);
  return n && (Yt(n) === "html" || Yt(n) === "body" && Gt(n).position === "static") ? t : n || Ec(e) || t;
}
function ps(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function br(e, t, n) {
  return Dn(e, zr(t, n));
}
function Oc(e, t, n) {
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
var $c = function(t, n) {
  return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
    placement: n.placement
  })) : t, Zi(typeof t != "number" ? t : Ji(t, Mr));
};
function kc(e) {
  var t, n = e.state, r = e.name, s = e.options, a = n.elements.arrow, o = n.modifiersData.popperOffsets, i = Rt(n.placement), l = ps(i), u = [ut, Dt].indexOf(i) >= 0, c = u ? "height" : "width";
  if (!(!a || !o)) {
    var p = $c(s.padding, n), v = vs(a), f = l === "y" ? lt : ut, $ = l === "y" ? yt : Dt, g = n.rects.reference[c] + n.rects.reference[l] - o[l] - n.rects.popper[c], D = o[l] - n.rects.reference[l], d = Pr(a), b = d ? l === "y" ? d.clientHeight || 0 : d.clientWidth || 0 : 0, k = g / 2 - D / 2, _ = p[f], C = b - v[c] - p[$], N = b / 2 - v[c] / 2 + k, x = br(_, N, C), P = l;
    n.modifiersData[r] = (t = {}, t[P] = x, t.centerOffset = x - N, t);
  }
}
function Nc(e) {
  var t = e.state, n = e.options, r = n.element, s = r === void 0 ? "[data-popper-arrow]" : r;
  s != null && (typeof s == "string" && (s = t.elements.popper.querySelector(s), !s) || zi(t.elements.popper, s) && (t.elements.arrow = s));
}
const Tc = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: kc,
  effect: Nc,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function Kn(e) {
  return e.split("-")[1];
}
var Ic = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function Cc(e, t) {
  var n = e.x, r = e.y, s = t.devicePixelRatio || 1;
  return {
    x: Wn(n * s) / s || 0,
    y: Wn(r * s) / s || 0
  };
}
function to(e) {
  var t, n = e.popper, r = e.popperRect, s = e.placement, a = e.variation, o = e.offsets, i = e.position, l = e.gpuAcceleration, u = e.adaptive, c = e.roundOffsets, p = e.isFixed, v = o.x, f = v === void 0 ? 0 : v, $ = o.y, g = $ === void 0 ? 0 : $, D = typeof c == "function" ? c({
    x: f,
    y: g
  }) : {
    x: f,
    y: g
  };
  f = D.x, g = D.y;
  var d = o.hasOwnProperty("x"), b = o.hasOwnProperty("y"), k = ut, _ = lt, C = window;
  if (u) {
    var N = Pr(n), x = "clientHeight", P = "clientWidth";
    if (N === ft(n) && (N = pn(n), Gt(N).position !== "static" && i === "absolute" && (x = "scrollHeight", P = "scrollWidth")), N = N, s === lt || (s === ut || s === Dt) && a === Er) {
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
      f -= S - r.width, f *= l ? 1 : -1;
    }
  }
  var j = Object.assign({
    position: i
  }, u && Ic), Y = c === !0 ? Cc({
    x: f,
    y: g
  }, ft(n)) : {
    x: f,
    y: g
  };
  if (f = Y.x, g = Y.y, l) {
    var X;
    return Object.assign({}, j, (X = {}, X[_] = b ? "0" : "", X[k] = d ? "0" : "", X.transform = (C.devicePixelRatio || 1) <= 1 ? "translate(" + f + "px, " + g + "px)" : "translate3d(" + f + "px, " + g + "px, 0)", X));
  }
  return Object.assign({}, j, (t = {}, t[_] = b ? g + "px" : "", t[k] = d ? f + "px" : "", t.transform = "", t));
}
function Mc(e) {
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
const Pc = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: Mc,
  data: {}
};
var Rr = {
  passive: !0
};
function Ac(e) {
  var t = e.state, n = e.instance, r = e.options, s = r.scroll, a = s === void 0 ? !0 : s, o = r.resize, i = o === void 0 ? !0 : o, l = ft(t.elements.popper), u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return a && u.forEach(function(c) {
    c.addEventListener("scroll", n.update, Rr);
  }), i && l.addEventListener("resize", n.update, Rr), function() {
    a && u.forEach(function(c) {
      c.removeEventListener("scroll", n.update, Rr);
    }), i && l.removeEventListener("resize", n.update, Rr);
  };
}
const Lc = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: Ac,
  data: {}
};
var Sc = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Br(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return Sc[t];
  });
}
var xc = {
  start: "end",
  end: "start"
};
function no(e) {
  return e.replace(/start|end/g, function(t) {
    return xc[t];
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
function Rc(e, t) {
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
function Yc(e) {
  var t, n = pn(e), r = ms(e), s = (t = e.ownerDocument) == null ? void 0 : t.body, a = Dn(n.scrollWidth, n.clientWidth, s ? s.scrollWidth : 0, s ? s.clientWidth : 0), o = Dn(n.scrollHeight, n.clientHeight, s ? s.scrollHeight : 0, s ? s.clientHeight : 0), i = -r.scrollLeft + hs(e), l = -r.scrollTop;
  return Gt(s || n).direction === "rtl" && (i += Dn(n.clientWidth, s ? s.clientWidth : 0) - a), {
    width: a,
    height: o,
    x: i,
    y: l
  };
}
function gs(e) {
  var t = Gt(e), n = t.overflow, r = t.overflowX, s = t.overflowY;
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
function Fc(e, t) {
  var n = Gn(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function ro(e, t, n) {
  return t === Gi ? Ra(Rc(e, n)) : wn(t) ? Fc(t, n) : Ra(Yc(pn(e)));
}
function Vc(e) {
  var t = yr(ma(e)), n = ["absolute", "fixed"].indexOf(Gt(e).position) >= 0, r = n && _t(e) ? Pr(e) : e;
  return wn(r) ? t.filter(function(s) {
    return wn(s) && zi(s, r) && Yt(s) !== "body";
  }) : [];
}
function Uc(e, t, n, r) {
  var s = t === "clippingParents" ? Vc(e) : [].concat(t), a = [].concat(s, [n]), o = a[0], i = a.reduce(function(l, u) {
    var c = ro(e, u, r);
    return l.top = Dn(c.top, l.top), l.right = zr(c.right, l.right), l.bottom = zr(c.bottom, l.bottom), l.left = Dn(c.left, l.left), l;
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
  var n = t, r = n.placement, s = r === void 0 ? e.placement : r, a = n.strategy, o = a === void 0 ? e.strategy : a, i = n.boundary, l = i === void 0 ? ic : i, u = n.rootBoundary, c = u === void 0 ? Gi : u, p = n.elementContext, v = p === void 0 ? cr : p, f = n.altBoundary, $ = f === void 0 ? !1 : f, g = n.padding, D = g === void 0 ? 0 : g, d = Zi(typeof D != "number" ? D : Ji(D, Mr)), b = v === cr ? lc : cr, k = e.rects.popper, _ = e.elements[$ ? b : v], C = Uc(wn(_) ? _ : _.contextElement || pn(e.elements.popper), l, c, o), N = Gn(e.elements.reference), x = el({
    reference: N,
    element: k,
    strategy: "absolute",
    placement: s
  }), P = Ra(Object.assign({}, k, x)), A = v === cr ? P : N, S = {
    top: C.top - A.top + d.top,
    bottom: A.bottom - C.bottom + d.bottom,
    left: C.left - A.left + d.left,
    right: A.right - C.right + d.right
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
function jc(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, s = n.boundary, a = n.rootBoundary, o = n.padding, i = n.flipVariations, l = n.allowedAutoPlacements, u = l === void 0 ? Ki : l, c = Kn(r), p = c ? i ? Qs : Qs.filter(function($) {
    return Kn($) === c;
  }) : Mr, v = p.filter(function($) {
    return u.indexOf($) >= 0;
  });
  v.length === 0 && (v = p);
  var f = v.reduce(function($, g) {
    return $[g] = Or(e, {
      placement: g,
      boundary: s,
      rootBoundary: a,
      padding: o
    })[Rt(g)], $;
  }, {});
  return Object.keys(f).sort(function($, g) {
    return f[$] - f[g];
  });
}
function Bc(e) {
  if (Rt(e) === ds)
    return [];
  var t = Br(e);
  return [no(e), t, no(t)];
}
function Hc(e) {
  var t = e.state, n = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var s = n.mainAxis, a = s === void 0 ? !0 : s, o = n.altAxis, i = o === void 0 ? !0 : o, l = n.fallbackPlacements, u = n.padding, c = n.boundary, p = n.rootBoundary, v = n.altBoundary, f = n.flipVariations, $ = f === void 0 ? !0 : f, g = n.allowedAutoPlacements, D = t.options.placement, d = Rt(D), b = d === D, k = l || (b || !$ ? [Br(D)] : Bc(D)), _ = [D].concat(k).reduce(function(ee, De) {
      return ee.concat(Rt(De) === ds ? jc(t, {
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
      C[U] > N[U] && (Q = Br(Q));
      var W = Br(Q), V = [];
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
const Wc = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: Hc,
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
function Gc(e) {
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
const Kc = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: Gc
};
function qc(e, t, n) {
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
function zc(e) {
  var t = e.state, n = e.options, r = e.name, s = n.offset, a = s === void 0 ? [0, 0] : s, o = Ki.reduce(function(c, p) {
    return c[p] = qc(p, t.rects, a), c;
  }, {}), i = o[t.placement], l = i.x, u = i.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += l, t.modifiersData.popperOffsets.y += u), t.modifiersData[r] = o;
}
const Xc = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: zc
};
function Zc(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = el({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const Jc = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: Zc,
  data: {}
};
function Qc(e) {
  return e === "x" ? "y" : "x";
}
function ed(e) {
  var t = e.state, n = e.options, r = e.name, s = n.mainAxis, a = s === void 0 ? !0 : s, o = n.altAxis, i = o === void 0 ? !1 : o, l = n.boundary, u = n.rootBoundary, c = n.altBoundary, p = n.padding, v = n.tether, f = v === void 0 ? !0 : v, $ = n.tetherOffset, g = $ === void 0 ? 0 : $, D = Or(t, {
    boundary: l,
    rootBoundary: u,
    padding: p,
    altBoundary: c
  }), d = Rt(t.placement), b = Kn(t.placement), k = !b, _ = ps(d), C = Qc(_), N = t.modifiersData.popperOffsets, x = t.rects.reference, P = t.rects.popper, A = typeof g == "function" ? g(Object.assign({}, t.rects, {
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
      var X, K = _ === "y" ? lt : ut, U = _ === "y" ? yt : Dt, F = _ === "y" ? "height" : "width", Q = N[_], W = Q + D[K], V = Q - D[U], w = f ? -P[F] / 2 : 0, q = b === Hn ? x[F] : P[F], pe = b === Hn ? -P[F] : -x[F], Ee = t.elements.arrow, ee = f && Ee ? vs(Ee) : {
        width: 0,
        height: 0
      }, De = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : Xi(), he = De[K], Ie = De[U], Oe = br(0, x[F], ee[F]), be = k ? x[F] / 2 - w - Oe - he - S.mainAxis : q - Oe - he - S.mainAxis, Ye = k ? -x[F] / 2 + w + Oe + Ie + S.mainAxis : pe + Oe + Ie + S.mainAxis, Re = t.elements.arrow && Pr(t.elements.arrow), ze = Re ? _ === "y" ? Re.clientTop || 0 : Re.clientLeft || 0 : 0, y = (X = j == null ? void 0 : j[_]) != null ? X : 0, m = Q + be - y - ze, L = Q + Ye - y, Z = br(f ? zr(W, m) : W, Q, f ? Dn(V, L) : V);
      N[_] = Z, Y[_] = Z - Q;
    }
    if (i) {
      var ie, ge = _ === "x" ? lt : ut, Ze = _ === "x" ? yt : Dt, Ue = N[C], vt = C === "y" ? "height" : "width", Mt = Ue + D[ge], Ne = Ue - D[Ze], R = [lt, ut].indexOf(d) !== -1, H = (ie = j == null ? void 0 : j[C]) != null ? ie : 0, Fe = R ? Mt : Ue - x[vt] - P[vt] - H + S.altAxis, Ve = R ? Ue + x[vt] + P[vt] - H - S.altAxis : Ne, Pt = f && R ? Oc(Fe, Ue, Ve) : br(f ? Fe : Mt, Ue, f ? Ve : Ne);
      N[C] = Pt, Y[C] = Pt - Ue;
    }
    t.modifiersData[r] = Y;
  }
}
const td = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: ed,
  requiresIfExists: ["offset"]
};
function nd(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function rd(e) {
  return e === ft(e) || !_t(e) ? ms(e) : nd(e);
}
function ad(e) {
  var t = e.getBoundingClientRect(), n = Wn(t.width) / e.offsetWidth || 1, r = Wn(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function sd(e, t, n) {
  n === void 0 && (n = !1);
  var r = _t(t), s = _t(t) && ad(t), a = pn(t), o = Gn(e, s, n), i = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = {
    x: 0,
    y: 0
  };
  return (r || !r && !n) && ((Yt(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  gs(a)) && (i = rd(t)), _t(t) ? (l = Gn(t, !0), l.x += t.clientLeft, l.y += t.clientTop) : a && (l.x = hs(a))), {
    x: o.left + i.scrollLeft - l.x,
    y: o.top + i.scrollTop - l.y,
    width: o.width,
    height: o.height
  };
}
function od(e) {
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
function id(e) {
  var t = od(e);
  return _c.reduce(function(n, r) {
    return n.concat(t.filter(function(s) {
      return s.phase === r;
    }));
  }, []);
}
function ld(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function ud(e) {
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
function cd(e) {
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
          reference: wn(i) ? yr(i) : i.contextElement ? yr(i.contextElement) : [],
          popper: yr(l)
        };
        var k = id(ud([].concat(r, c.options.modifiers)));
        return c.orderedModifiers = k.filter(function(_) {
          return _.enabled;
        }), $(), f.update();
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
              reference: sd(b, Pr(k), c.options.strategy === "fixed"),
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
                instance: f
              }) || c);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: ld(function() {
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
    function $() {
      c.orderedModifiers.forEach(function(D) {
        var d = D.name, b = D.options, k = b === void 0 ? {} : b, _ = D.effect;
        if (typeof _ == "function") {
          var C = _({
            state: c,
            name: d,
            instance: f,
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
    return f;
  };
}
var dd = [Lc, Jc, Pc, Dc, Xc, Wc, td, Tc, Kc], fd = /* @__PURE__ */ cd({
  defaultModifiers: dd
}), vd = Object.defineProperty, pd = (e, t, n) => t in e ? vd(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, oe = (e, t, n) => (pd(e, typeof t != "symbol" ? t + "" : t, n), n);
const zt = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, s] of t)
    n[r] = s;
  return n;
}, md = {}, hd = {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  viewBox: "0 0 24 24"
}, gd = /* @__PURE__ */ E("polyline", { points: "9 18 15 12 9 6" }, null, -1), _d = [
  gd
];
function bd(e, t) {
  return O(), I("svg", hd, _d);
}
const yd = /* @__PURE__ */ zt(md, [["render", bd]]), Dd = {}, wd = {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  viewBox: "0 0 24 24"
}, Ed = /* @__PURE__ */ E("polyline", { points: "15 18 9 12 15 6" }, null, -1), Od = [
  Ed
];
function $d(e, t) {
  return O(), I("svg", wd, Od);
}
const kd = /* @__PURE__ */ zt(Dd, [["render", $d]]), Nd = {}, Td = {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  viewBox: "0 0 24 24"
}, Id = /* @__PURE__ */ E("polyline", { points: "6 9 12 15 18 9" }, null, -1), Cd = [
  Id
];
function Md(e, t) {
  return O(), I("svg", Td, Cd);
}
const Pd = /* @__PURE__ */ zt(Nd, [["render", Md]]), Ad = {}, Ld = {
  fill: "none",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  viewBox: "0 0 24 24"
}, Sd = /* @__PURE__ */ E("path", { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" }, null, -1), xd = [
  Sd
];
function Rd(e, t) {
  return O(), I("svg", Ld, xd);
}
const Yd = /* @__PURE__ */ zt(Ad, [["render", Rd]]), Fd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  IconChevronDown: Pd,
  IconChevronLeft: kd,
  IconChevronRight: yd,
  IconClock: Yd
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
    const t = e, n = M(() => t.width || t.size), r = M(() => t.height || t.size), s = M(() => Fd[`Icon${t.name}`]);
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
function Vd(e) {
  return tl() && e in window;
}
function Ud(e) {
  const t = ne(!1), n = M(() => t.value ? "dark" : "light");
  let r, s;
  function a(f) {
    t.value = f.matches;
  }
  function o() {
    Vd("matchMedia") && (r = window.matchMedia("(prefers-color-scheme: dark)"), r.addEventListener("change", a), t.value = r.matches);
  }
  function i() {
    const { selector: f = ":root", darkClass: $ = "dark" } = e.value, g = document.querySelector(f);
    t.value = g.classList.contains($);
  }
  function l(f) {
    const { selector: $ = ":root", darkClass: g = "dark" } = f;
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
var Yr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function jd(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Bd = typeof Yr == "object" && Yr && Yr.Object === Object && Yr, nl = Bd, Hd = nl, Wd = typeof self == "object" && self && self.Object === Object && self, Gd = Hd || Wd || Function("return this")(), Ft = Gd, Kd = Ft, qd = Kd.Symbol, ha = qd, lo = ha, rl = Object.prototype, zd = rl.hasOwnProperty, Xd = rl.toString, dr = lo ? lo.toStringTag : void 0;
function Zd(e) {
  var t = zd.call(e, dr), n = e[dr];
  try {
    e[dr] = void 0;
    var r = !0;
  } catch {
  }
  var s = Xd.call(e);
  return r && (t ? e[dr] = n : delete e[dr]), s;
}
var Jd = Zd, Qd = Object.prototype, ef = Qd.toString;
function tf(e) {
  return ef.call(e);
}
var nf = tf, uo = ha, rf = Jd, af = nf, sf = "[object Null]", of = "[object Undefined]", co = uo ? uo.toStringTag : void 0;
function lf(e) {
  return e == null ? e === void 0 ? of : sf : co && co in Object(e) ? rf(e) : af(e);
}
var Vt = lf;
function uf(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Xt = uf, cf = Vt, df = Xt, ff = "[object AsyncFunction]", vf = "[object Function]", pf = "[object GeneratorFunction]", mf = "[object Proxy]";
function hf(e) {
  if (!df(e))
    return !1;
  var t = cf(e);
  return t == vf || t == pf || t == ff || t == mf;
}
var kn = hf, gf = Array.isArray, It = gf;
function _f(e) {
  return e != null && typeof e == "object";
}
var Ct = _f, bf = Vt, yf = It, Df = Ct, wf = "[object String]";
function Ef(e) {
  return typeof e == "string" || !yf(e) && Df(e) && bf(e) == wf;
}
var St = Ef, Of = Vt, $f = Ct, kf = "[object Boolean]";
function Nf(e) {
  return e === !0 || e === !1 || $f(e) && Of(e) == kf;
}
var Tf = Nf, If = Vt, Cf = Ct, Mf = "[object Number]";
function Pf(e) {
  return typeof e == "number" || Cf(e) && If(e) == Mf;
}
var Tt = Pf, Af = Vt, Lf = Ct, Sf = "[object Date]";
function xf(e) {
  return Lf(e) && Af(e) == Sf;
}
var Rf = xf;
function Yf(e) {
  return function(t) {
    return e(t);
  };
}
var al = Yf, $r = {}, Ff = {
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
})(Ff, $r);
var Vf = Rf, Uf = al, fo = $r, vo = fo && fo.isDate, jf = vo ? Uf(vo) : Vf, Bf = jf, Hf = Vt, Wf = Ct, Gf = "[object Symbol]";
function Kf(e) {
  return typeof e == "symbol" || Wf(e) && Hf(e) == Gf;
}
var _s = Kf, qf = It, zf = _s, Xf = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Zf = /^\w*$/;
function Jf(e, t) {
  if (qf(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || zf(e) ? !0 : Zf.test(e) || !Xf.test(e) || t != null && e in Object(t);
}
var bs = Jf, Qf = Ft, ev = Qf["__core-js_shared__"], tv = ev, Ca = tv, po = function() {
  var e = /[^.]+$/.exec(Ca && Ca.keys && Ca.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function nv(e) {
  return !!po && po in e;
}
var rv = nv, av = Function.prototype, sv = av.toString;
function ov(e) {
  if (e != null) {
    try {
      return sv.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var sl = ov, iv = kn, lv = rv, uv = Xt, cv = sl, dv = /[\\^$.*+?()[\]{}|]/g, fv = /^\[object .+?Constructor\]$/, vv = Function.prototype, pv = Object.prototype, mv = vv.toString, hv = pv.hasOwnProperty, gv = RegExp(
  "^" + mv.call(hv).replace(dv, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function _v(e) {
  if (!uv(e) || lv(e))
    return !1;
  var t = iv(e) ? gv : fv;
  return t.test(cv(e));
}
var bv = _v;
function yv(e, t) {
  return e == null ? void 0 : e[t];
}
var Dv = yv, wv = bv, Ev = Dv;
function Ov(e, t) {
  var n = Ev(e, t);
  return wv(n) ? n : void 0;
}
var Nn = Ov, $v = Nn, kv = $v(Object, "create"), ga = kv, mo = ga;
function Nv() {
  this.__data__ = mo ? mo(null) : {}, this.size = 0;
}
var Tv = Nv;
function Iv(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var Cv = Iv, Mv = ga, Pv = "__lodash_hash_undefined__", Av = Object.prototype, Lv = Av.hasOwnProperty;
function Sv(e) {
  var t = this.__data__;
  if (Mv) {
    var n = t[e];
    return n === Pv ? void 0 : n;
  }
  return Lv.call(t, e) ? t[e] : void 0;
}
var xv = Sv, Rv = ga, Yv = Object.prototype, Fv = Yv.hasOwnProperty;
function Vv(e) {
  var t = this.__data__;
  return Rv ? t[e] !== void 0 : Fv.call(t, e);
}
var Uv = Vv, jv = ga, Bv = "__lodash_hash_undefined__";
function Hv(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = jv && t === void 0 ? Bv : t, this;
}
var Wv = Hv, Gv = Tv, Kv = Cv, qv = xv, zv = Uv, Xv = Wv;
function Qn(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
Qn.prototype.clear = Gv;
Qn.prototype.delete = Kv;
Qn.prototype.get = qv;
Qn.prototype.has = zv;
Qn.prototype.set = Xv;
var Zv = Qn;
function Jv() {
  this.__data__ = [], this.size = 0;
}
var Qv = Jv;
function ep(e, t) {
  return e === t || e !== e && t !== t;
}
var er = ep, tp = er;
function np(e, t) {
  for (var n = e.length; n--; )
    if (tp(e[n][0], t))
      return n;
  return -1;
}
var _a = np, rp = _a, ap = Array.prototype, sp = ap.splice;
function op(e) {
  var t = this.__data__, n = rp(t, e);
  if (n < 0)
    return !1;
  var r = t.length - 1;
  return n == r ? t.pop() : sp.call(t, n, 1), --this.size, !0;
}
var ip = op, lp = _a;
function up(e) {
  var t = this.__data__, n = lp(t, e);
  return n < 0 ? void 0 : t[n][1];
}
var cp = up, dp = _a;
function fp(e) {
  return dp(this.__data__, e) > -1;
}
var vp = fp, pp = _a;
function mp(e, t) {
  var n = this.__data__, r = pp(n, e);
  return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
}
var hp = mp, gp = Qv, _p = ip, bp = cp, yp = vp, Dp = hp;
function tr(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
tr.prototype.clear = gp;
tr.prototype.delete = _p;
tr.prototype.get = bp;
tr.prototype.has = yp;
tr.prototype.set = Dp;
var ba = tr, wp = Nn, Ep = Ft, Op = wp(Ep, "Map"), ys = Op, ho = Zv, $p = ba, kp = ys;
function Np() {
  this.size = 0, this.__data__ = {
    hash: new ho(),
    map: new (kp || $p)(),
    string: new ho()
  };
}
var Tp = Np;
function Ip(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
var Cp = Ip, Mp = Cp;
function Pp(e, t) {
  var n = e.__data__;
  return Mp(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
var ya = Pp, Ap = ya;
function Lp(e) {
  var t = Ap(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
var Sp = Lp, xp = ya;
function Rp(e) {
  return xp(this, e).get(e);
}
var Yp = Rp, Fp = ya;
function Vp(e) {
  return Fp(this, e).has(e);
}
var Up = Vp, jp = ya;
function Bp(e, t) {
  var n = jp(this, e), r = n.size;
  return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
}
var Hp = Bp, Wp = Tp, Gp = Sp, Kp = Yp, qp = Up, zp = Hp;
function nr(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
nr.prototype.clear = Wp;
nr.prototype.delete = Gp;
nr.prototype.get = Kp;
nr.prototype.has = qp;
nr.prototype.set = zp;
var Ds = nr, ol = Ds, Xp = "Expected a function";
function ws(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(Xp);
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
var Zp = ws, Jp = Zp, Qp = 500;
function em(e) {
  var t = Jp(e, function(r) {
    return n.size === Qp && n.clear(), r;
  }), n = t.cache;
  return t;
}
var tm = em, nm = tm, rm = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, am = /\\(\\)?/g, sm = nm(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(rm, function(n, r, s, a) {
    t.push(s ? a.replace(am, "$1") : r || n);
  }), t;
}), om = sm;
function im(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, s = Array(r); ++n < r; )
    s[n] = t(e[n], n, e);
  return s;
}
var lm = im, go = ha, um = lm, cm = It, dm = _s, fm = 1 / 0, _o = go ? go.prototype : void 0, bo = _o ? _o.toString : void 0;
function il(e) {
  if (typeof e == "string")
    return e;
  if (cm(e))
    return um(e, il) + "";
  if (dm(e))
    return bo ? bo.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -fm ? "-0" : t;
}
var vm = il, pm = vm;
function mm(e) {
  return e == null ? "" : pm(e);
}
var hm = mm, gm = It, _m = bs, bm = om, ym = hm;
function Dm(e, t) {
  return gm(e) ? e : _m(e, t) ? [e] : bm(ym(e));
}
var ll = Dm, wm = _s, Em = 1 / 0;
function Om(e) {
  if (typeof e == "string" || wm(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -Em ? "-0" : t;
}
var Da = Om, $m = ll, km = Da;
function Nm(e, t) {
  t = $m(t, e);
  for (var n = 0, r = t.length; e != null && n < r; )
    e = e[km(t[n++])];
  return n && n == r ? e : void 0;
}
var ul = Nm, Tm = ul;
function Im(e, t, n) {
  var r = e == null ? void 0 : Tm(e, t);
  return r === void 0 ? n : r;
}
var bn = Im, Cm = Nn, Mm = function() {
  try {
    var e = Cm(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), cl = Mm, yo = cl;
function Pm(e, t, n) {
  t == "__proto__" && yo ? yo(e, t, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : e[t] = n;
}
var wa = Pm, Am = wa, Lm = er, Sm = Object.prototype, xm = Sm.hasOwnProperty;
function Rm(e, t, n) {
  var r = e[t];
  (!(xm.call(e, t) && Lm(r, n)) || n === void 0 && !(t in e)) && Am(e, t, n);
}
var Ym = Rm, Fm = 9007199254740991, Vm = /^(?:0|[1-9]\d*)$/;
function Um(e, t) {
  var n = typeof e;
  return t = t ?? Fm, !!t && (n == "number" || n != "symbol" && Vm.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var Es = Um;
function jm(e) {
  return function(t, n, r) {
    for (var s = -1, a = Object(t), o = r(t), i = o.length; i--; ) {
      var l = o[e ? i : ++s];
      if (n(a[l], l, a) === !1)
        break;
    }
    return t;
  };
}
var Bm = jm, Hm = Bm, Wm = Hm(), dl = Wm;
function Gm(e, t) {
  for (var n = -1, r = Array(e); ++n < e; )
    r[n] = t(n);
  return r;
}
var Km = Gm, qm = Vt, zm = Ct, Xm = "[object Arguments]";
function Zm(e) {
  return zm(e) && qm(e) == Xm;
}
var Jm = Zm, Do = Jm, Qm = Ct, fl = Object.prototype, eh = fl.hasOwnProperty, th = fl.propertyIsEnumerable, nh = Do(function() {
  return arguments;
}()) ? Do : function(e) {
  return Qm(e) && eh.call(e, "callee") && !th.call(e, "callee");
}, Os = nh, zn = {}, rh = {
  get exports() {
    return zn;
  },
  set exports(e) {
    zn = e;
  }
};
function ah() {
  return !1;
}
var sh = ah;
(function(e, t) {
  var n = Ft, r = sh, s = t && !t.nodeType && t, a = s && !0 && e && !e.nodeType && e, o = a && a.exports === s, i = o ? n.Buffer : void 0, l = i ? i.isBuffer : void 0, u = l || r;
  e.exports = u;
})(rh, zn);
var oh = 9007199254740991;
function ih(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= oh;
}
var $s = ih, lh = Vt, uh = $s, ch = Ct, dh = "[object Arguments]", fh = "[object Array]", vh = "[object Boolean]", ph = "[object Date]", mh = "[object Error]", hh = "[object Function]", gh = "[object Map]", _h = "[object Number]", bh = "[object Object]", yh = "[object RegExp]", Dh = "[object Set]", wh = "[object String]", Eh = "[object WeakMap]", Oh = "[object ArrayBuffer]", $h = "[object DataView]", kh = "[object Float32Array]", Nh = "[object Float64Array]", Th = "[object Int8Array]", Ih = "[object Int16Array]", Ch = "[object Int32Array]", Mh = "[object Uint8Array]", Ph = "[object Uint8ClampedArray]", Ah = "[object Uint16Array]", Lh = "[object Uint32Array]", Le = {};
Le[kh] = Le[Nh] = Le[Th] = Le[Ih] = Le[Ch] = Le[Mh] = Le[Ph] = Le[Ah] = Le[Lh] = !0;
Le[dh] = Le[fh] = Le[Oh] = Le[vh] = Le[$h] = Le[ph] = Le[mh] = Le[hh] = Le[gh] = Le[_h] = Le[bh] = Le[yh] = Le[Dh] = Le[wh] = Le[Eh] = !1;
function Sh(e) {
  return ch(e) && uh(e.length) && !!Le[lh(e)];
}
var xh = Sh, Rh = xh, Yh = al, wo = $r, Eo = wo && wo.isTypedArray, Fh = Eo ? Yh(Eo) : Rh, ks = Fh, Vh = Km, Uh = Os, jh = It, Bh = zn, Hh = Es, Wh = ks, Gh = Object.prototype, Kh = Gh.hasOwnProperty;
function qh(e, t) {
  var n = jh(e), r = !n && Uh(e), s = !n && !r && Bh(e), a = !n && !r && !s && Wh(e), o = n || r || s || a, i = o ? Vh(e.length, String) : [], l = i.length;
  for (var u in e)
    (t || Kh.call(e, u)) && !(o && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    s && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    a && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    Hh(u, l))) && i.push(u);
  return i;
}
var vl = qh, zh = Object.prototype;
function Xh(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || zh;
  return e === n;
}
var Ns = Xh;
function Zh(e, t) {
  return function(n) {
    return e(t(n));
  };
}
var pl = Zh, Jh = pl, Qh = Jh(Object.keys, Object), eg = Qh, tg = Ns, ng = eg, rg = Object.prototype, ag = rg.hasOwnProperty;
function sg(e) {
  if (!tg(e))
    return ng(e);
  var t = [];
  for (var n in Object(e))
    ag.call(e, n) && n != "constructor" && t.push(n);
  return t;
}
var og = sg, ig = kn, lg = $s;
function ug(e) {
  return e != null && lg(e.length) && !ig(e);
}
var Ar = ug, cg = vl, dg = og, fg = Ar;
function vg(e) {
  return fg(e) ? cg(e) : dg(e);
}
var Ts = vg, pg = dl, mg = Ts;
function hg(e, t) {
  return e && pg(e, t, mg);
}
var ml = hg, gg = ba;
function _g() {
  this.__data__ = new gg(), this.size = 0;
}
var bg = _g;
function yg(e) {
  var t = this.__data__, n = t.delete(e);
  return this.size = t.size, n;
}
var Dg = yg;
function wg(e) {
  return this.__data__.get(e);
}
var Eg = wg;
function Og(e) {
  return this.__data__.has(e);
}
var $g = Og, kg = ba, Ng = ys, Tg = Ds, Ig = 200;
function Cg(e, t) {
  var n = this.__data__;
  if (n instanceof kg) {
    var r = n.__data__;
    if (!Ng || r.length < Ig - 1)
      return r.push([e, t]), this.size = ++n.size, this;
    n = this.__data__ = new Tg(r);
  }
  return n.set(e, t), this.size = n.size, this;
}
var Mg = Cg, Pg = ba, Ag = bg, Lg = Dg, Sg = Eg, xg = $g, Rg = Mg;
function rr(e) {
  var t = this.__data__ = new Pg(e);
  this.size = t.size;
}
rr.prototype.clear = Ag;
rr.prototype.delete = Lg;
rr.prototype.get = Sg;
rr.prototype.has = xg;
rr.prototype.set = Rg;
var Is = rr, Yg = "__lodash_hash_undefined__";
function Fg(e) {
  return this.__data__.set(e, Yg), this;
}
var Vg = Fg;
function Ug(e) {
  return this.__data__.has(e);
}
var jg = Ug, Bg = Ds, Hg = Vg, Wg = jg;
function Xr(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.__data__ = new Bg(); ++t < n; )
    this.add(e[t]);
}
Xr.prototype.add = Xr.prototype.push = Hg;
Xr.prototype.has = Wg;
var Gg = Xr;
function Kg(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length; ++n < r; )
    if (t(e[n], n, e))
      return !0;
  return !1;
}
var hl = Kg;
function qg(e, t) {
  return e.has(t);
}
var zg = qg, Xg = Gg, Zg = hl, Jg = zg, Qg = 1, e_ = 2;
function t_(e, t, n, r, s, a) {
  var o = n & Qg, i = e.length, l = t.length;
  if (i != l && !(o && l > i))
    return !1;
  var u = a.get(e), c = a.get(t);
  if (u && c)
    return u == t && c == e;
  var p = -1, v = !0, f = n & e_ ? new Xg() : void 0;
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
    if (f) {
      if (!Zg(t, function(d, b) {
        if (!Jg(f, b) && ($ === d || s($, d, n, r, a)))
          return f.push(b);
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
var gl = t_, n_ = Ft, r_ = n_.Uint8Array, _l = r_;
function a_(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(r, s) {
    n[++t] = [s, r];
  }), n;
}
var s_ = a_;
function o_(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(r) {
    n[++t] = r;
  }), n;
}
var i_ = o_, Oo = ha, $o = _l, l_ = er, u_ = gl, c_ = s_, d_ = i_, f_ = 1, v_ = 2, p_ = "[object Boolean]", m_ = "[object Date]", h_ = "[object Error]", g_ = "[object Map]", __ = "[object Number]", b_ = "[object RegExp]", y_ = "[object Set]", D_ = "[object String]", w_ = "[object Symbol]", E_ = "[object ArrayBuffer]", O_ = "[object DataView]", ko = Oo ? Oo.prototype : void 0, Ma = ko ? ko.valueOf : void 0;
function $_(e, t, n, r, s, a, o) {
  switch (n) {
    case O_:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case E_:
      return !(e.byteLength != t.byteLength || !a(new $o(e), new $o(t)));
    case p_:
    case m_:
    case __:
      return l_(+e, +t);
    case h_:
      return e.name == t.name && e.message == t.message;
    case b_:
    case D_:
      return e == t + "";
    case g_:
      var i = c_;
    case y_:
      var l = r & f_;
      if (i || (i = d_), e.size != t.size && !l)
        return !1;
      var u = o.get(e);
      if (u)
        return u == t;
      r |= v_, o.set(e, t);
      var c = u_(i(e), i(t), r, s, a, o);
      return o.delete(e), c;
    case w_:
      if (Ma)
        return Ma.call(e) == Ma.call(t);
  }
  return !1;
}
var k_ = $_;
function N_(e, t) {
  for (var n = -1, r = t.length, s = e.length; ++n < r; )
    e[s + n] = t[n];
  return e;
}
var T_ = N_, I_ = T_, C_ = It;
function M_(e, t, n) {
  var r = t(e);
  return C_(e) ? r : I_(r, n(e));
}
var P_ = M_;
function A_(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, s = 0, a = []; ++n < r; ) {
    var o = e[n];
    t(o, n, e) && (a[s++] = o);
  }
  return a;
}
var L_ = A_;
function S_() {
  return [];
}
var x_ = S_, R_ = L_, Y_ = x_, F_ = Object.prototype, V_ = F_.propertyIsEnumerable, No = Object.getOwnPropertySymbols, U_ = No ? function(e) {
  return e == null ? [] : (e = Object(e), R_(No(e), function(t) {
    return V_.call(e, t);
  }));
} : Y_, j_ = U_, B_ = P_, H_ = j_, W_ = Ts;
function G_(e) {
  return B_(e, W_, H_);
}
var K_ = G_, To = K_, q_ = 1, z_ = Object.prototype, X_ = z_.hasOwnProperty;
function Z_(e, t, n, r, s, a) {
  var o = n & q_, i = To(e), l = i.length, u = To(t), c = u.length;
  if (l != c && !o)
    return !1;
  for (var p = l; p--; ) {
    var v = i[p];
    if (!(o ? v in t : X_.call(t, v)))
      return !1;
  }
  var f = a.get(e), $ = a.get(t);
  if (f && $)
    return f == t && $ == e;
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
    var _ = e.constructor, C = t.constructor;
    _ != C && "constructor" in e && "constructor" in t && !(typeof _ == "function" && _ instanceof _ && typeof C == "function" && C instanceof C) && (g = !1);
  }
  return a.delete(e), a.delete(t), g;
}
var J_ = Z_, Q_ = Nn, eb = Ft, tb = Q_(eb, "DataView"), nb = tb, rb = Nn, ab = Ft, sb = rb(ab, "Promise"), ob = sb, ib = Nn, lb = Ft, ub = ib(lb, "Set"), cb = ub, db = Nn, fb = Ft, vb = db(fb, "WeakMap"), pb = vb, Ya = nb, Fa = ys, Va = ob, Ua = cb, ja = pb, bl = Vt, ar = sl, Io = "[object Map]", mb = "[object Object]", Co = "[object Promise]", Mo = "[object Set]", Po = "[object WeakMap]", Ao = "[object DataView]", hb = ar(Ya), gb = ar(Fa), _b = ar(Va), bb = ar(Ua), yb = ar(ja), _n = bl;
(Ya && _n(new Ya(new ArrayBuffer(1))) != Ao || Fa && _n(new Fa()) != Io || Va && _n(Va.resolve()) != Co || Ua && _n(new Ua()) != Mo || ja && _n(new ja()) != Po) && (_n = function(e) {
  var t = bl(e), n = t == mb ? e.constructor : void 0, r = n ? ar(n) : "";
  if (r)
    switch (r) {
      case hb:
        return Ao;
      case gb:
        return Io;
      case _b:
        return Co;
      case bb:
        return Mo;
      case yb:
        return Po;
    }
  return t;
});
var Db = _n, Pa = Is, wb = gl, Eb = k_, Ob = J_, Lo = Db, So = It, xo = zn, $b = ks, kb = 1, Ro = "[object Arguments]", Yo = "[object Array]", Fr = "[object Object]", Nb = Object.prototype, Fo = Nb.hasOwnProperty;
function Tb(e, t, n, r, s, a) {
  var o = So(e), i = So(t), l = o ? Yo : Lo(e), u = i ? Yo : Lo(t);
  l = l == Ro ? Fr : l, u = u == Ro ? Fr : u;
  var c = l == Fr, p = u == Fr, v = l == u;
  if (v && xo(e)) {
    if (!xo(t))
      return !1;
    o = !0, c = !1;
  }
  if (v && !c)
    return a || (a = new Pa()), o || $b(e) ? wb(e, t, n, r, s, a) : Eb(e, t, l, n, r, s, a);
  if (!(n & kb)) {
    var f = c && Fo.call(e, "__wrapped__"), $ = p && Fo.call(t, "__wrapped__");
    if (f || $) {
      var g = f ? e.value() : e, D = $ ? t.value() : t;
      return a || (a = new Pa()), s(g, D, n, r, a);
    }
  }
  return v ? (a || (a = new Pa()), Ob(e, t, n, r, s, a)) : !1;
}
var Ib = Tb, Cb = Ib, Vo = Ct;
function yl(e, t, n, r, s) {
  return e === t ? !0 : e == null || t == null || !Vo(e) && !Vo(t) ? e !== e && t !== t : Cb(e, t, n, r, yl, s);
}
var Dl = yl, Mb = Is, Pb = Dl, Ab = 1, Lb = 2;
function Sb(e, t, n, r) {
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
      var p = new Mb();
      if (r)
        var v = r(u, c, l, e, t, p);
      if (!(v === void 0 ? Pb(c, u, Ab | Lb, r, p) : v))
        return !1;
    }
  }
  return !0;
}
var xb = Sb, Rb = Xt;
function Yb(e) {
  return e === e && !Rb(e);
}
var wl = Yb, Fb = wl, Vb = Ts;
function Ub(e) {
  for (var t = Vb(e), n = t.length; n--; ) {
    var r = t[n], s = e[r];
    t[n] = [r, s, Fb(s)];
  }
  return t;
}
var jb = Ub;
function Bb(e, t) {
  return function(n) {
    return n == null ? !1 : n[e] === t && (t !== void 0 || e in Object(n));
  };
}
var El = Bb, Hb = xb, Wb = jb, Gb = El;
function Kb(e) {
  var t = Wb(e);
  return t.length == 1 && t[0][2] ? Gb(t[0][0], t[0][1]) : function(n) {
    return n === e || Hb(n, e, t);
  };
}
var qb = Kb;
function zb(e, t) {
  return e != null && t in Object(e);
}
var Xb = zb, Zb = ll, Jb = Os, Qb = It, ey = Es, ty = $s, ny = Da;
function ry(e, t, n) {
  t = Zb(t, e);
  for (var r = -1, s = t.length, a = !1; ++r < s; ) {
    var o = ny(t[r]);
    if (!(a = e != null && n(e, o)))
      break;
    e = e[o];
  }
  return a || ++r != s ? a : (s = e == null ? 0 : e.length, !!s && ty(s) && ey(o, s) && (Qb(e) || Jb(e)));
}
var Ol = ry, ay = Xb, sy = Ol;
function oy(e, t) {
  return e != null && sy(e, t, ay);
}
var iy = oy, ly = Dl, uy = bn, cy = iy, dy = bs, fy = wl, vy = El, py = Da, my = 1, hy = 2;
function gy(e, t) {
  return dy(e) && fy(t) ? vy(py(e), t) : function(n) {
    var r = uy(n, e);
    return r === void 0 && r === t ? cy(n, e) : ly(t, r, my | hy);
  };
}
var _y = gy;
function by(e) {
  return e;
}
var Cs = by;
function yy(e) {
  return function(t) {
    return t == null ? void 0 : t[e];
  };
}
var Dy = yy, wy = ul;
function Ey(e) {
  return function(t) {
    return wy(t, e);
  };
}
var Oy = Ey, $y = Dy, ky = Oy, Ny = bs, Ty = Da;
function Iy(e) {
  return Ny(e) ? $y(Ty(e)) : ky(e);
}
var Cy = Iy, My = qb, Py = _y, Ay = Cs, Ly = It, Sy = Cy;
function xy(e) {
  return typeof e == "function" ? e : e == null ? Ay : typeof e == "object" ? Ly(e) ? Py(e[0], e[1]) : My(e) : Sy(e);
}
var $l = xy, Ry = wa, Yy = ml, Fy = $l;
function Vy(e, t) {
  var n = {};
  return t = Fy(t), Yy(e, function(r, s, a) {
    Ry(n, s, t(r, s, a));
  }), n;
}
var Uy = Vy;
function jy(e, t, n) {
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
var kl = jy, By = kl, Uo = Math.max;
function Hy(e, t, n) {
  return t = Uo(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var r = arguments, s = -1, a = Uo(r.length - t, 0), o = Array(a); ++s < a; )
      o[s] = r[t + s];
    s = -1;
    for (var i = Array(t + 1); ++s < t; )
      i[s] = r[s];
    return i[t] = n(o), By(e, this, i);
  };
}
var Wy = Hy;
function Gy(e) {
  return function() {
    return e;
  };
}
var Ky = Gy, qy = Ky, jo = cl, zy = Cs, Xy = jo ? function(e, t) {
  return jo(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: qy(t),
    writable: !0
  });
} : zy, Zy = Xy, Jy = 800, Qy = 16, e1 = Date.now;
function t1(e) {
  var t = 0, n = 0;
  return function() {
    var r = e1(), s = Qy - (r - n);
    if (n = r, s > 0) {
      if (++t >= Jy)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
var n1 = t1, r1 = Zy, a1 = n1, s1 = a1(r1), o1 = s1, i1 = Cs, l1 = Wy, u1 = o1;
function c1(e, t) {
  return u1(l1(e, t, i1), e + "");
}
var Ms = c1, d1 = er, f1 = Ar, v1 = Es, p1 = Xt;
function m1(e, t, n) {
  if (!p1(n))
    return !1;
  var r = typeof t;
  return (r == "number" ? f1(n) && v1(t, n.length) : r == "string" && t in n) ? d1(n[t], e) : !1;
}
var Ps = m1;
function h1(e) {
  var t = [];
  if (e != null)
    for (var n in Object(e))
      t.push(n);
  return t;
}
var g1 = h1, _1 = Xt, b1 = Ns, y1 = g1, D1 = Object.prototype, w1 = D1.hasOwnProperty;
function E1(e) {
  if (!_1(e))
    return y1(e);
  var t = b1(e), n = [];
  for (var r in e)
    r == "constructor" && (t || !w1.call(e, r)) || n.push(r);
  return n;
}
var O1 = E1, $1 = vl, k1 = O1, N1 = Ar;
function T1(e) {
  return N1(e) ? $1(e, !0) : k1(e);
}
var As = T1, I1 = Ms, C1 = er, M1 = Ps, P1 = As, Nl = Object.prototype, A1 = Nl.hasOwnProperty, L1 = I1(function(e, t) {
  e = Object(e);
  var n = -1, r = t.length, s = r > 2 ? t[2] : void 0;
  for (s && M1(t[0], t[1], s) && (r = 1); ++n < r; )
    for (var a = t[n], o = P1(a), i = -1, l = o.length; ++i < l; ) {
      var u = o[i], c = e[u];
      (c === void 0 || C1(c, Nl[u]) && !A1.call(e, u)) && (e[u] = a[u]);
    }
  return e;
}), Bo = L1, S1 = wa, x1 = er;
function R1(e, t, n) {
  (n !== void 0 && !x1(e[t], n) || n === void 0 && !(t in e)) && S1(e, t, n);
}
var Tl = R1, Zr = {}, Y1 = {
  get exports() {
    return Zr;
  },
  set exports(e) {
    Zr = e;
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
})(Y1, Zr);
var Ho = _l;
function F1(e) {
  var t = new e.constructor(e.byteLength);
  return new Ho(t).set(new Ho(e)), t;
}
var V1 = F1, U1 = V1;
function j1(e, t) {
  var n = t ? U1(e.buffer) : e.buffer;
  return new e.constructor(n, e.byteOffset, e.length);
}
var B1 = j1;
function H1(e, t) {
  var n = -1, r = e.length;
  for (t || (t = Array(r)); ++n < r; )
    t[n] = e[n];
  return t;
}
var W1 = H1, G1 = Xt, Wo = Object.create, K1 = function() {
  function e() {
  }
  return function(t) {
    if (!G1(t))
      return {};
    if (Wo)
      return Wo(t);
    e.prototype = t;
    var n = new e();
    return e.prototype = void 0, n;
  };
}(), q1 = K1, z1 = pl, X1 = z1(Object.getPrototypeOf, Object), Il = X1, Z1 = q1, J1 = Il, Q1 = Ns;
function eD(e) {
  return typeof e.constructor == "function" && !Q1(e) ? Z1(J1(e)) : {};
}
var tD = eD, nD = Ar, rD = Ct;
function aD(e) {
  return rD(e) && nD(e);
}
var sD = aD, oD = Vt, iD = Il, lD = Ct, uD = "[object Object]", cD = Function.prototype, dD = Object.prototype, Cl = cD.toString, fD = dD.hasOwnProperty, vD = Cl.call(Object);
function pD(e) {
  if (!lD(e) || oD(e) != uD)
    return !1;
  var t = iD(e);
  if (t === null)
    return !0;
  var n = fD.call(t, "constructor") && t.constructor;
  return typeof n == "function" && n instanceof n && Cl.call(n) == vD;
}
var mD = pD;
function hD(e, t) {
  if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__")
    return e[t];
}
var Ml = hD, gD = Ym, _D = wa;
function bD(e, t, n, r) {
  var s = !n;
  n || (n = {});
  for (var a = -1, o = t.length; ++a < o; ) {
    var i = t[a], l = r ? r(n[i], e[i], i, n, e) : void 0;
    l === void 0 && (l = e[i]), s ? _D(n, i, l) : gD(n, i, l);
  }
  return n;
}
var yD = bD, DD = yD, wD = As;
function ED(e) {
  return DD(e, wD(e));
}
var OD = ED, Go = Tl, $D = Zr, kD = B1, ND = W1, TD = tD, Ko = Os, qo = It, ID = sD, CD = zn, MD = kn, PD = Xt, AD = mD, LD = ks, zo = Ml, SD = OD;
function xD(e, t, n, r, s, a, o) {
  var i = zo(e, n), l = zo(t, n), u = o.get(l);
  if (u) {
    Go(e, n, u);
    return;
  }
  var c = a ? a(i, l, n + "", e, t, o) : void 0, p = c === void 0;
  if (p) {
    var v = qo(l), f = !v && CD(l), $ = !v && !f && LD(l);
    c = l, v || f || $ ? qo(i) ? c = i : ID(i) ? c = ND(i) : f ? (p = !1, c = $D(l, !0)) : $ ? (p = !1, c = kD(l, !0)) : c = [] : AD(l) || Ko(l) ? (c = i, Ko(i) ? c = SD(i) : (!PD(i) || MD(i)) && (c = TD(l))) : p = !1;
  }
  p && (o.set(l, c), s(c, l, r, a, o), o.delete(l)), Go(e, n, c);
}
var RD = xD, YD = Is, FD = Tl, VD = dl, UD = RD, jD = Xt, BD = As, HD = Ml;
function Pl(e, t, n, r, s) {
  e !== t && VD(t, function(a, o) {
    if (s || (s = new YD()), jD(a))
      UD(e, t, o, n, Pl, r, s);
    else {
      var i = r ? r(HD(e, o), a, o + "", e, t, s) : void 0;
      i === void 0 && (i = a), FD(e, o, i);
    }
  }, BD);
}
var Al = Pl, WD = Al, Xo = Xt;
function Ll(e, t, n, r, s, a) {
  return Xo(e) && Xo(t) && (a.set(t, e), WD(e, t, void 0, Ll, a), a.delete(t)), e;
}
var GD = Ll, KD = Ms, qD = Ps;
function zD(e) {
  return KD(function(t, n) {
    var r = -1, s = n.length, a = s > 1 ? n[s - 1] : void 0, o = s > 2 ? n[2] : void 0;
    for (a = e.length > 3 && typeof a == "function" ? (s--, a) : void 0, o && qD(n[0], n[1], o) && (a = s < 3 ? void 0 : a, s = 1), t = Object(t); ++r < s; ) {
      var i = n[r];
      i && e(t, i, r, a);
    }
    return t;
  });
}
var XD = zD, ZD = Al, JD = XD, QD = JD(function(e, t, n, r) {
  ZD(e, t, n, r);
}), e0 = QD, t0 = kl, n0 = Ms, r0 = GD, a0 = e0, s0 = n0(function(e) {
  return e.push(void 0, r0), t0(a0, void 0, e);
}), kr = s0, o0 = Object.prototype, i0 = o0.hasOwnProperty;
function l0(e, t) {
  return e != null && i0.call(e, t);
}
var u0 = l0, c0 = u0, d0 = Ol;
function f0(e, t) {
  return e != null && d0(e, t, c0);
}
var Sl = f0, v0 = Ar;
function p0(e, t) {
  return function(n, r) {
    if (n == null)
      return n;
    if (!v0(n))
      return e(n, r);
    for (var s = n.length, a = t ? s : -1, o = Object(n); (t ? a-- : ++a < s) && r(o[a], a, o) !== !1; )
      ;
    return n;
  };
}
var m0 = p0, h0 = ml, g0 = m0, _0 = g0(h0), b0 = _0;
function y0(e) {
  return e && e.length ? e[0] : void 0;
}
var xl = y0;
function D0(e) {
  var t = e == null ? 0 : e.length;
  return t ? e[t - 1] : void 0;
}
var Yn = D0, w0 = b0;
function E0(e, t) {
  var n;
  return w0(e, function(r, s, a) {
    return n = t(r, s, a), !n;
  }), !!n;
}
var O0 = E0, $0 = hl, k0 = $l, N0 = O0, T0 = It, I0 = Ps;
function C0(e, t, n) {
  var r = T0(e) ? $0 : N0;
  return n && I0(e, t, n) && (t = void 0), r(e, k0(t));
}
var M0 = C0;
const P0 = (e) => Object.prototype.toString.call(e).slice(8, -1), Vn = (e) => Bf(e) && !isNaN(e.getTime()), Kt = (e) => P0(e) === "Object", Ls = Sl, Zo = (e, t) => M0(t, (n) => Sl(e, n)), Te = (e, t, n = "0") => {
  for (e = e != null ? String(e) : "", t = t || 2; e.length < t; )
    e = `${n}${e}`;
  return e;
}, bt = (e) => Array.isArray(e), Bt = (e) => bt(e) && e.length > 0, Jr = (e) => e == null ? e ?? null : document && St(e) ? document.querySelector(e) : e.$el ?? e, sn = (e, t, n, r = void 0) => {
  e.removeEventListener(t, n, r);
}, on = (e, t, n, r = void 0) => (e.addEventListener(t, n, r), () => sn(e, t, n, r)), Hr = (e, t) => !!e && !!t && (e === t || e.contains(t)), Vr = (e, t) => {
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
function A0(e, t, n) {
  return Math.min(Math.max(e, t), n);
}
const Qr = () => {
  function e() {
    return ((1 + Math.random()) * 65536 | 0).toString(16).substring(1);
  }
  return `${e() + e()}-${e()}-${e()}-${e()}-${e()}${e()}${e()}`;
}, L0 = ["base", "start", "end", "startEnd"], S0 = [
  "class",
  "wrapperClass",
  "contentClass",
  "style",
  "contentStyle",
  "color",
  "fillMode"
], x0 = { base: {}, start: {}, end: {} };
function Ss(e, t, n = x0) {
  let r = e, s = {};
  t === !0 || St(t) ? (r = St(t) ? t : r, s = { ...n }) : Kt(t) && (Zo(t, L0) ? s = { ...t } : s = {
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
    i === !0 || St(i) ? (l = St(i) ? i : l, a[o] = { color: l }) : Kt(i) && (Zo(i, S0) ? a[o] = { ...i } : a[o] = {}), kr(a[o], { color: l });
  }), a;
}
class R0 {
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
class Y0 extends xs {
  constructor() {
    super("content", "content");
  }
  normalizeConfig(t, n) {
    return Ss("base", n);
  }
}
class F0 extends xs {
  constructor() {
    super("dot", "dots");
  }
}
class V0 extends xs {
  constructor() {
    super("bar", "bars");
  }
}
class U0 {
  constructor(t) {
    oe(this, "color"), oe(this, "renderers", [
      new Y0(),
      new R0(),
      new F0(),
      new V0()
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
const j0 = 300, B0 = 60, H0 = 80, W0 = {
  maxSwipeTime: j0,
  minHorizontalSwipeDistance: B0,
  maxVerticalSwipeDistance: H0
}, G0 = "MMMM YYYY", K0 = "W", q0 = "MMM", z0 = "h A", X0 = [
  "L",
  "YYYY-MM-DD",
  "YYYY/MM/DD"
], Z0 = [
  "L h:mm A",
  "YYYY-MM-DD h:mm A",
  "YYYY/MM/DD h:mm A"
], J0 = [
  "L HH:mm",
  "YYYY-MM-DD HH:mm",
  "YYYY/MM/DD HH:mm"
], Q0 = [
  "h:mm A"
], ew = [
  "HH:mm"
], tw = "WWW, MMM D, YYYY", nw = [
  "L",
  "YYYY-MM-DD",
  "YYYY/MM/DD"
], rw = "iso", aw = "YYYY-MM-DDTHH:mm:ss.SSSZ", sw = {
  title: G0,
  weekdays: K0,
  navMonths: q0,
  hours: z0,
  input: X0,
  inputDateTime: Z0,
  inputDateTime24hr: J0,
  inputTime: Q0,
  inputTime24hr: ew,
  dayPopover: tw,
  data: nw,
  model: rw,
  iso: aw
}, qt = {
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
qt.en = qt["en-US"];
qt.es = qt["es-ES"];
qt.no = qt.nb;
qt.zh = qt["zh-CN"];
const ow = Object.entries(qt).reduce(
  (e, [t, { dow: n, L: r }]) => (e[t] = {
    id: t,
    firstDayOfWeek: n,
    masks: { L: r }
  }, e),
  {}
), iw = {
  componentPrefix: "V",
  color: "blue",
  isDark: !1,
  navVisibility: "click",
  titlePosition: "center",
  transition: "slide-h",
  touch: W0,
  masks: sw,
  locales: ow,
  datePicker: {
    updateOnInput: !0,
    inputDebounce: 1e3,
    popover: {
      visibility: "hover-focus",
      placement: "bottom-start",
      isInteractive: !0
    }
  }
}, Ba = os(iw), lw = M(() => Uy(Ba.locales, (e) => (e.masks = kr(e.masks, Ba.masks), e))), cn = (e) => typeof window < "u" && Ls(window.__vcalendar__, e) ? bn(window.__vcalendar__, e) : bn(Ba, e);
var ea = {}, uw = {
  get exports() {
    return ea;
  },
  set exports(e) {
    ea = e;
  }
}, ta = {}, cw = {
  get exports() {
    return ta;
  },
  set exports(e) {
    ta = e;
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
})(cw, ta);
var na = {}, dw = {
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
    var s = new Date(Date.UTC(r.getFullYear(), r.getMonth(), r.getDate(), r.getHours(), r.getMinutes(), r.getSeconds(), r.getMilliseconds()));
    return s.setUTCFullYear(r.getFullYear()), r.getTime() - s.getTime();
  }
  e.exports = t.default;
})(dw, na);
var ra = {}, fw = {
  get exports() {
    return ra;
  },
  set exports(e) {
    ra = e;
  }
}, aa = {}, vw = {
  get exports() {
    return aa;
  },
  set exports(e) {
    aa = e;
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
})(vw, aa);
var sa = {}, pw = {
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
  function n(r, s, a, o, i, l, u) {
    var c = /* @__PURE__ */ new Date(0);
    return c.setUTCFullYear(r, s, a), c.setUTCHours(o, i, l, u), c;
  }
  e.exports = t.default;
})(pw, sa);
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = l;
  var n = s(aa), r = s(sa);
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
      var C = parseInt(b[2], 10);
      return v(_, C) ? (k = Math.abs(_) * a + C * o, _ > 0 ? -k : k) : NaN;
    }
    if ($(g)) {
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
    var C = c(new Date(k), d);
    return _ === C ? _ : Math.max(_, C);
  }
  function v(g, D) {
    return -23 <= g && g <= 23 && (D == null || 0 <= D && D <= 59);
  }
  var f = {};
  function $(g) {
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
})(fw, ra);
var oa = {}, mw = {
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
  }), t.default = void 0;
  var n = /(Z|[+-]\d{2}(?::?\d{2})?| UTC| [a-zA-Z]+\/[a-zA-Z_]+(?:\/[a-zA-Z_]+)?)$/, r = n;
  t.default = r, e.exports = t.default;
})(mw, oa);
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = p;
  var n = o(ta), r = o(na), s = o(ra), a = o(oa);
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
    var Y = v(P), X = f(Y.date, j), K = X.year, U = X.restDateString, F = $(U, K);
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
})(uw, ea);
const hw = /* @__PURE__ */ jd(ea);
function tt(e, t) {
  if (t.length < e)
    throw new TypeError(e + " argument" + (e > 1 ? "s" : "") + " required, but only " + t.length + " present");
}
function Wr(e) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Wr = function(n) {
    return typeof n;
  } : Wr = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Wr(e);
}
function Zt(e) {
  tt(1, arguments);
  var t = Object.prototype.toString.call(e);
  return e instanceof Date || Wr(e) === "object" && t === "[object Date]" ? new Date(e.getTime()) : typeof e == "number" || t === "[object Number]" ? new Date(e) : ((typeof e == "string" || t === "[object String]") && typeof console < "u" && (console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"), console.warn(new Error().stack)), /* @__PURE__ */ new Date(NaN));
}
function sr(e) {
  if (e === null || e === !0 || e === !1)
    return NaN;
  var t = Number(e);
  return isNaN(t) ? t : t < 0 ? Math.ceil(t) : Math.floor(t);
}
var gw = {};
function Rs() {
  return gw;
}
function En(e, t) {
  var n, r, s, a, o, i, l, u;
  tt(1, arguments);
  var c = Rs(), p = sr((n = (r = (s = (a = t == null ? void 0 : t.weekStartsOn) !== null && a !== void 0 ? a : t == null || (o = t.locale) === null || o === void 0 || (i = o.options) === null || i === void 0 ? void 0 : i.weekStartsOn) !== null && s !== void 0 ? s : c.weekStartsOn) !== null && r !== void 0 ? r : (l = c.locale) === null || l === void 0 || (u = l.options) === null || u === void 0 ? void 0 : u.weekStartsOn) !== null && n !== void 0 ? n : 0);
  if (!(p >= 0 && p <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var v = Zt(e), f = v.getDay(), $ = (f < p ? 7 : 0) + f - p;
  return v.setDate(v.getDate() - $), v.setHours(0, 0, 0, 0), v;
}
function Jo(e) {
  var t = new Date(Date.UTC(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()));
  return t.setUTCFullYear(e.getFullYear()), e.getTime() - t.getTime();
}
var _w = 6048e5;
function bw(e, t, n) {
  tt(2, arguments);
  var r = En(e, n), s = En(t, n), a = r.getTime() - Jo(r), o = s.getTime() - Jo(s);
  return Math.round((a - o) / _w);
}
function yw(e) {
  tt(1, arguments);
  var t = Zt(e), n = t.getMonth();
  return t.setFullYear(t.getFullYear(), n + 1, 0), t.setHours(0, 0, 0, 0), t;
}
function Dw(e) {
  tt(1, arguments);
  var t = Zt(e);
  return t.setDate(1), t.setHours(0, 0, 0, 0), t;
}
function ww(e, t) {
  return tt(1, arguments), bw(yw(e), Dw(e), t) + 1;
}
function Ew(e, t) {
  var n, r, s, a, o, i, l, u;
  tt(1, arguments);
  var c = Zt(e), p = c.getFullYear(), v = Rs(), f = sr((n = (r = (s = (a = t == null ? void 0 : t.firstWeekContainsDate) !== null && a !== void 0 ? a : t == null || (o = t.locale) === null || o === void 0 || (i = o.options) === null || i === void 0 ? void 0 : i.firstWeekContainsDate) !== null && s !== void 0 ? s : v.firstWeekContainsDate) !== null && r !== void 0 ? r : (l = v.locale) === null || l === void 0 || (u = l.options) === null || u === void 0 ? void 0 : u.firstWeekContainsDate) !== null && n !== void 0 ? n : 1);
  if (!(f >= 1 && f <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var $ = /* @__PURE__ */ new Date(0);
  $.setFullYear(p + 1, 0, f), $.setHours(0, 0, 0, 0);
  var g = En($, t), D = /* @__PURE__ */ new Date(0);
  D.setFullYear(p, 0, f), D.setHours(0, 0, 0, 0);
  var d = En(D, t);
  return c.getTime() >= g.getTime() ? p + 1 : c.getTime() >= d.getTime() ? p : p - 1;
}
function Ow(e, t) {
  var n, r, s, a, o, i, l, u;
  tt(1, arguments);
  var c = Rs(), p = sr((n = (r = (s = (a = t == null ? void 0 : t.firstWeekContainsDate) !== null && a !== void 0 ? a : t == null || (o = t.locale) === null || o === void 0 || (i = o.options) === null || i === void 0 ? void 0 : i.firstWeekContainsDate) !== null && s !== void 0 ? s : c.firstWeekContainsDate) !== null && r !== void 0 ? r : (l = c.locale) === null || l === void 0 || (u = l.options) === null || u === void 0 ? void 0 : u.firstWeekContainsDate) !== null && n !== void 0 ? n : 1), v = Ew(e, t), f = /* @__PURE__ */ new Date(0);
  f.setFullYear(v, 0, p), f.setHours(0, 0, 0, 0);
  var $ = En(f, t);
  return $;
}
var $w = 6048e5;
function kw(e, t) {
  tt(1, arguments);
  var n = Zt(e), r = En(n, t).getTime() - Ow(n, t).getTime();
  return Math.round(r / $w) + 1;
}
function ia(e) {
  return tt(1, arguments), En(e, {
    weekStartsOn: 1
  });
}
function Nw(e) {
  tt(1, arguments);
  var t = Zt(e), n = t.getFullYear(), r = /* @__PURE__ */ new Date(0);
  r.setFullYear(n + 1, 0, 4), r.setHours(0, 0, 0, 0);
  var s = ia(r), a = /* @__PURE__ */ new Date(0);
  a.setFullYear(n, 0, 4), a.setHours(0, 0, 0, 0);
  var o = ia(a);
  return t.getTime() >= s.getTime() ? n + 1 : t.getTime() >= o.getTime() ? n : n - 1;
}
function Tw(e) {
  tt(1, arguments);
  var t = Nw(e), n = /* @__PURE__ */ new Date(0);
  n.setFullYear(t, 0, 4), n.setHours(0, 0, 0, 0);
  var r = ia(n);
  return r;
}
var Iw = 6048e5;
function Cw(e) {
  tt(1, arguments);
  var t = Zt(e), n = ia(t).getTime() - Tw(t).getTime();
  return Math.round(n / Iw) + 1;
}
function at(e, t) {
  tt(2, arguments);
  var n = Zt(e), r = sr(t);
  return isNaN(r) ? /* @__PURE__ */ new Date(NaN) : (r && n.setDate(n.getDate() + r), n);
}
function la(e, t) {
  tt(2, arguments);
  var n = Zt(e), r = sr(t);
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
  return la(e, n * 12);
}
var Mn = /* @__PURE__ */ ((e) => (e.Any = "any", e.All = "all", e))(Mn || {}), Fl = /* @__PURE__ */ ((e) => (e.Days = "days", e.Weeks = "weeks", e.Months = "months", e.Years = "years", e))(Fl || {}), Vl = /* @__PURE__ */ ((e) => (e.Days = "days", e.Weekdays = "weekdays", e.Weeks = "weeks", e.Months = "months", e.Years = "years", e))(Vl || {}), Ul = /* @__PURE__ */ ((e) => (e.OrdinalWeekdays = "ordinalWeekdays", e))(Ul || {});
class Mw {
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
        return zw(this.from.date, n) % this.interval === 0;
      case "months":
        return Xw(this.from.date, n) % this.interval === 0;
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
        return new Pw(n);
      case "weekdays":
        return new Aw(n);
      case "weeks":
        return new Lw(n);
      case "months":
        return new Sw(n);
      case "years":
        return new xw(n);
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
class Pw extends or {
  constructor(t) {
    super(
      "days",
      t,
      Fw,
      ({ day: n, dayFromEnd: r }) => [n, -r]
    );
  }
}
class Aw extends or {
  constructor(t) {
    super(
      "weekdays",
      t,
      Ha,
      ({ weekday: n }) => [n]
    );
  }
}
class Lw extends or {
  constructor(t) {
    super(
      "weeks",
      t,
      Vw,
      ({ week: n, weekFromEnd: r }) => [n, -r]
    );
  }
}
class Sw extends or {
  constructor(t) {
    super("months", t, Uw, ({ month: n }) => [
      n
    ]);
  }
}
class xw extends or {
  constructor(t) {
    super("years", t, Tt, ({ year: n }) => [n]);
  }
}
class Rw {
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
class Yw {
  constructor(t) {
    oe(this, "type", "function"), oe(this, "validated", !0), this.fn = t, kn(t) || (console.error(
      "The function rule requires a valid function. This rule will be skipped."
    ), this.validated = !1);
  }
  passes(t) {
    return this.validated ? this.fn(t) : !0;
  }
}
class ua {
  constructor(t, n = {}, r) {
    oe(this, "validated", !0), oe(this, "config"), oe(this, "type", Mn.Any), oe(this, "from"), oe(this, "until"), oe(this, "rules", []), oe(this, "locale", new da()), this.parent = r, n.locale && (this.locale = n.locale), this.config = t, kn(t) ? (this.type = Mn.All, this.rules = [new Yw(t)]) : bt(t) ? (this.type = Mn.Any, this.rules = t.map((s) => new ua(s, n, this))) : Kt(t) ? (this.type = Mn.All, this.from = t.from ? this.locale.getDateParts(t.from) : r == null ? void 0 : r.from, this.until = t.until ? this.locale.getDateParts(t.until) : r == null ? void 0 : r.until, this.rules = this.getObjectRules(t)) : (console.error("Rule group configuration must be an object or an array."), this.validated = !1);
  }
  getObjectRules(t) {
    const n = [];
    if (t.every && (St(t.every) && (t.every = [1, `${t.every}s`]), bt(t.every))) {
      const [r = 1, s = Fl.Days] = t.every;
      n.push(new Mw(s, r, this.from));
    }
    return Object.values(Vl).forEach((r) => {
      r in t && n.push(or.create(r, t[r]));
    }), Object.values(Ul).forEach((r) => {
      r in t && n.push(new Rw(r, t[r]));
    }), t.on != null && (bt(t.on) || (t.on = [t.on]), n.push(
      new ua(t.on, { locale: this.locale }, this.parent)
    )), n;
  }
  passes(t) {
    return this.validated ? this.from && t.dayIndex <= this.from.dayIndex || this.until && t.dayIndex >= this.until.dayIndex ? !1 : this.type === Mn.Any ? this.rules.some((n) => n.passes(t)) : this.rules.every((n) => n.passes(t)) : !0;
  }
}
function Fw(e) {
  return Tt(e) ? e >= 1 && e <= 31 : !1;
}
function Ha(e) {
  return Tt(e) ? e >= 1 && e <= 7 : !1;
}
function Vw(e) {
  return Tt(e) ? e >= -6 && e <= -1 || e >= 1 && e <= 6 : !1;
}
function Uw(e) {
  return Tt(e) ? e >= 1 && e <= 12 : !1;
}
function ei(e) {
  return !(!Tt(e) || e < -5 || e > 5 || e === 0);
}
const jw = {
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
}, Je = 7, Bw = 6, jl = 1e3, Bl = jl * 60, Hl = Bl * 60, Gr = Hl * 24, Hw = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], Ww = ["L", "iso"], mr = {
  milliseconds: [0, 999, 3],
  seconds: [0, 59, 2],
  minutes: [0, 59, 2],
  hours: [0, 23, 2]
}, Wl = /d{1,2}|W{1,4}|M{1,4}|YY(?:YY)?|S{1,3}|Do|Z{1,4}|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g, Gw = /\[([^]*?)\]/gm, ti = {
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
}, en = /\d\d?/, Kw = /\d{3}/, qw = /\d{4}/, fr = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF/]+(\s*?[\u0600-\u06FF]+){1,2}/i, ni = () => {
}, ri = (e) => (t, n, r) => {
  const s = r[e].indexOf(
    n.charAt(0).toUpperCase() + n.substr(1).toLowerCase()
  );
  ~s && (t.month = s);
}, Me = {
  D: [
    en,
    (e, t) => {
      e.day = t;
    }
  ],
  Do: [
    new RegExp(en.source + fr.source),
    (e, t) => {
      e.day = parseInt(t, 10);
    }
  ],
  d: [en, ni],
  W: [fr, ni],
  M: [
    en,
    (e, t) => {
      e.month = t - 1;
    }
  ],
  MMM: [fr, ri("monthNamesShort")],
  MMMM: [fr, ri("monthNames")],
  YY: [
    en,
    (e, t) => {
      const r = +(/* @__PURE__ */ new Date()).getFullYear().toString().substr(0, 2);
      e.year = +`${t > 68 ? r - 1 : r}${t}`;
    }
  ],
  YYYY: [
    qw,
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
    Kw,
    (e, t) => {
      e.milliseconds = t;
    }
  ],
  h: [
    en,
    (e, t) => {
      e.hours = t;
    }
  ],
  m: [
    en,
    (e, t) => {
      e.minutes = t;
    }
  ],
  s: [
    en,
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
  return (Bt(e) && e || [
    St(e) && e || "YYYY-MM-DD"
  ]).map(
    (n) => Ww.reduce(
      (r, s) => r.replace(s, t.masks[s] || ""),
      n
    )
  );
}
function Kl(e) {
  return Kt(e) && "year" in e && "month" in e && "day" in e;
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
  return Math.round((t.getTime() - e.getTime()) / Gr);
}
function zw(e, t) {
  return Math.ceil(Ys(ai(e), ai(t)) / 7);
}
function zl(e, t) {
  return t.getUTCFullYear() - e.getUTCFullYear();
}
function Xw(e, t) {
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
    return hw(c, { timeZone: t });
  }
  return new Date(r, s - 1, a, o, i, l, u);
}
function Zw(e, t) {
  let n = new Date(e.getTime());
  t.timezone && (n = new Date(
    e.toLocaleString("en-US", { timeZone: t.timezone })
  ), n.setMilliseconds(e.getMilliseconds()));
  const r = n.getMilliseconds(), s = n.getSeconds(), a = n.getMinutes(), o = n.getHours(), i = r + s * jl + a * Bl + o * Hl, l = n.getMonth() + 1, u = n.getFullYear(), c = t.getMonthParts(l, u), p = n.getDate(), v = c.numDays - p + 1, f = n.getDay() + 1, $ = Math.floor((p - 1) / 7 + 1), g = Math.floor((c.numDays - p) / 7 + 1), D = Math.ceil(
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
    weekdayOrdinal: $,
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
function Jw(e, t, n) {
  return `${t}-${e}-${n}`;
}
function Qw(e, t, n) {
  const r = t % 4 === 0 && t % 100 !== 0 || t % 400 === 0, s = new Date(t, e - 1, 1), a = s.getDay() + 1, o = e === 2 && r ? 29 : Hw[e - 1], i = n - 1, l = ww(s, {
    weekStartsOn: i
  }), u = [], c = [];
  for (let p = 0; p < l; p++) {
    const v = at(s, p * 7);
    u.push(kw(v, { weekStartsOn: i })), c.push(Cw(v));
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
function eE() {
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
  return eE().map((r) => n.format(r));
}
function tE() {
  const e = [];
  for (let t = 0; t <= 24; t++)
    e.push(new Date(2e3, 0, 1, t));
  return e;
}
function nE(e = void 0) {
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
function rE(e, t, n) {
  return Tt(t) ? t === e : bt(t) ? t.includes(e) : kn(t) ? t(e, n) : !(t.min != null && t.min > e || t.max != null && t.max < e || t.interval != null && e % t.interval !== 0);
}
function hr(e, t, n) {
  const r = [], [s, a, o] = t;
  for (let i = s; i <= a; i++)
    (n == null || rE(i, n, e)) && r.push({
      value: i,
      label: Te(i, o)
    });
  return r;
}
function aE(e, t) {
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
function sE(e, t, n, r) {
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
function oE(e, t) {
  const n = { ...e };
  return Object.entries(t).forEach(([r, s]) => {
    const a = mr[r], o = e[r];
    n[r] = sE(
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
        ~v ? a.replace(p[0], (f) => (p[1](i, f, n), a = a.substr(v + f.length), f)) : o = !1;
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
function iE(e, t, n) {
  if (e == null)
    return "";
  let r = Gl(t, n)[0];
  /Z$/.test(r) && (n.timezone = "utc");
  const s = [];
  r = r.replace(Gw, (o, i) => (s.push(i), "??"));
  const a = n.getDateParts(e);
  return r = r.replace(
    Wl,
    (o) => o in ti ? ti[o](a, n) : o.slice(1, o.length - 1)
  ), r.replace(/\?\?/g, () => s.shift());
}
const lE = {
  daily: ["year", "month", "day"],
  weekly: ["year", "month", "week"],
  monthly: ["year", "month"]
};
function uE({
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
  let v = !0, f = !1, $ = !1, g = 0;
  const D = new Intl.DateTimeFormat(r.id, {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric"
  });
  let d = t.numDays - p + 1, b = t.numDays - d + 1, k = Math.floor((d - 1) / Je + 1), _ = 1, C = t.numWeeks, N = 1, x = t.month, P = t.year;
  const A = /* @__PURE__ */ new Date(), S = A.getDate(), j = A.getMonth() + 1, Y = A.getFullYear();
  for (let X = 1; X <= Bw; X++) {
    for (let K = 1, U = a; K <= Je; K++, U += U === Je ? 1 - Je : 1) {
      v && U === o && (d = 1, b = e.numDays, k = Math.floor((d - 1) / Je + 1), _ = Math.floor((u - d) / Je + 1), C = 1, N = c, x = e.month, P = e.year, v = !1, f = !0);
      const F = r.getDateFromParams(P, x, d, 0, 0, 0, 0), Q = r.getDateFromParams(P, x, d, 12, 0, 0, 0), W = r.getDateFromParams(
        P,
        x,
        d,
        23,
        59,
        59,
        999
      ), V = F, w = `${Te(P, 4)}-${Te(x, 2)}-${Te(d, 2)}`, q = K, pe = Je - K, Ee = l[X - 1], ee = i[X - 1], De = d === S && x === j && P === Y, he = f && d === 1, Ie = f && d === u, Oe = X === 1, be = X === c, Ye = K === 1, Re = K === Je, ze = ql(P, x, d);
      s.push({
        locale: r,
        id: w,
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
        isDisabled: !f,
        isFocusable: !f,
        isFocused: !1,
        inMonth: f,
        inPrevMonth: v,
        inNextMonth: $,
        onTop: Oe,
        onBottom: be,
        onLeft: Ye,
        onRight: Re,
        classes: [
          `id-${w}`,
          `day-${d}`,
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
            "in-month": f,
            "in-prev-month": v,
            "in-next-month": $,
            "on-top": Oe,
            "on-bottom": be,
            "on-left": Ye,
            "on-right": Re
          }
        ]
      }), f && Ie ? (f = !1, $ = !0, d = 1, b = u, k = 1, _ = Math.floor((u - d) / Je + 1), C = 1, N = n.numWeeks, x = n.month, P = n.year) : (d++, b--, k = Math.floor((d - 1) / Je + 1), _ = Math.floor((u - d) / Je + 1));
    }
    C++, N--;
  }
  return s;
}
function cE(e, t, n, r) {
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
function dE(e, t) {
  return e.days.map((n) => ({
    label: t.formatDate(n.date, t.masks.weekdays),
    weekday: n.weekday
  }));
}
function Jl(e, t, n) {
  return Yl(
    n.getDateParts(n.toDate(e)),
    lE[t]
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
    const i = new Date(r, n - 1, 1), l = la(i, s);
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
function ca(e, t) {
  return !xt(e) || !xt(t) ? !1 : (e = e, t = t, e.year !== t.year ? e.year > t.year : e.month && t.month && e.month !== t.month ? e.month > t.month : e.week && t.week && e.week !== t.week ? e.week > t.week : e.day && t.day && e.day !== t.day ? e.day > t.day : !1);
}
function eu(e, t, n) {
  return (e || !1) && !Wa(e, t) && !ca(e, n);
}
function fE(e, t) {
  return !e && t || e && !t ? !1 : !e && !t ? !0 : (e = e, t = t, e.year === t.year && e.month === t.month && e.week === t.week && e.day === t.day);
}
function vE(e, t, n, r) {
  if (!xt(e) || !xt(t))
    return [];
  const s = [];
  for (; !ca(e, t); )
    s.push(e), e = Ql(e, 1, n, r);
  return s;
}
function tu(e) {
  const { day: t, week: n, month: r, year: s } = e;
  let a = `${s}-${Te(r, 2)}`;
  return n && (a = `${a}-w${n}`), t && (a = `${a}-${Te(t, 2)}`), a;
}
function pE(e, t) {
  const { month: n, year: r, showWeeknumbers: s, showIsoWeeknumbers: a } = e, o = new Date(r, n - 1, 15), i = t.getMonthParts(n, r), l = t.getPrevMonthParts(n, r), u = t.getNextMonthParts(n, r), c = uE({ monthComps: i, prevMonthComps: l, nextMonthComps: u }, t), p = cE(c, s, a, t), v = dE(p[0], t);
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
function mE(e, t) {
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
  constructor(t, n = new da()) {
    oe(this, "order"), oe(this, "locale"), oe(this, "start", null), oe(this, "end", null), oe(this, "repeat", null);
    var r;
    this.locale = n;
    const { start: s, end: a, span: o, order: i, repeat: l } = t;
    Vn(s) && (this.start = n.getDateParts(s)), Vn(a) ? this.end = n.getDateParts(a) : this.start != null && o && (this.end = n.getDateParts(at(this.start.date, o - 1))), this.order = i ?? 0, l && (this.repeat = new ua(
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
    return t != null && (bt(t) ? (r.start = t[0] ?? null, r.end = t[1] ?? null) : Kt(t) ? Object.assign(r, t) : (r.start = t, r.end = t)), r.start != null && (r.start = new Date(r.start)), r.end != null && (r.end = new Date(r.end)), new Un(r, n);
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
class hE {
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
        const $ = n.daySpan < 1 / 0 ? n.daySpan : 1;
        l = {
          startDay: p.dayIndex,
          startTime: ((v = n.start) == null ? void 0 : v.time) ?? 0,
          endDay: p.dayIndex + $ - 1,
          endTime: ((f = n.end) == null ? void 0 : f.time) ?? Gr
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
        const l = s === i.startDay, u = s === i.endDay, c = l ? i.startTime : 0, p = new Date(t.startDate.getTime() + c), v = u ? i.endTime : Gr, f = new Date(t.endDate.getTime() + v), $ = c === 0 && v === Gr, g = a.order || 0;
        r.push({
          ...i,
          data: a,
          onStart: l,
          onEnd: u,
          startTime: c,
          startDate: p,
          endTime: v,
          endDate: f,
          allDay: $,
          order: g
        });
      });
    }), r.sort((a, o) => a.order - o.order), r;
  }
}
const gE = 12, _E = 5;
function bE(e, t) {
  const n = new Intl.DateTimeFormat().resolvedOptions().locale;
  let r;
  St(e) ? r = e : Ls(e, "id") && (r = e.id), r = (r || n).toLowerCase();
  const s = Object.keys(t), a = (l) => s.find((u) => u.toLowerCase() === l);
  r = a(r) || a(r.substring(0, 2)) || n;
  const o = {
    ...t["en-IE"],
    ...t[r],
    id: r,
    monthCacheSize: gE,
    pageCacheSize: _E
  };
  return Kt(e) ? kr(e, o) : o;
}
class da {
  constructor(t = void 0, n) {
    oe(this, "id"), oe(this, "daysInWeek"), oe(this, "firstDayOfWeek"), oe(this, "masks"), oe(this, "timezone"), oe(this, "hourLabels"), oe(this, "dayNames"), oe(this, "dayNamesShort"), oe(this, "dayNamesShorter"), oe(this, "dayNamesNarrow"), oe(this, "monthNames"), oe(this, "monthNamesShort"), oe(this, "relativeTimeNames"), oe(this, "amPm", ["am", "pm"]), oe(this, "monthCache"), oe(this, "pageCache");
    const { id: r, firstDayOfWeek: s, masks: a, monthCacheSize: o, pageCacheSize: i } = bE(t, lw.value);
    this.monthCache = new ii(
      o,
      Jw,
      Qw
    ), this.pageCache = new ii(i, tu, pE), this.id = r, this.daysInWeek = Je, this.firstDayOfWeek = A0(s, 1, Je), this.masks = a, this.timezone = n || void 0, this.hourLabels = this.getHourLabels(), this.dayNames = Aa("long", this.id), this.dayNamesShort = Aa("short", this.id), this.dayNamesShorter = this.dayNamesShort.map((l) => l.substring(0, 2)), this.dayNamesNarrow = Aa("narrow", this.id), this.monthNames = si("long", this.id), this.monthNamesShort = si("short", this.id), this.relativeTimeNames = nE(this.id);
  }
  formatDate(t, n) {
    return iE(t, n, this);
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
          this.toDate({ ...c, ...Yl(u, jw[i]) })
        );
      }
      l && (u = oE(u, l)), s = this.getDateFromParts(u);
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
    return Zw(t, this);
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
    return mE(t, n);
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
    return tE().map((t) => this.formatDate(t, this.masks.hours));
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
    this.key || (this.key = Qr()), this.locale = r, n.normalizeGlyphs(this), this.ranges = r.ranges(s ?? []), this.hasRanges = !!Bt(this.ranges), this.maxRepeatSpan = this.ranges.filter((a) => a.hasRepeat).map((a) => a.daySpan).reduce((a, o) => Math.max(a, o), 0);
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
  const t = M(() => e.color ?? ""), n = M(() => e.isDark ?? !1), { displayMode: r } = Ud(n), s = M(() => new U0(t.value)), a = M(() => {
    if (e.locale instanceof da)
      return e.locale;
    const c = Kt(e.locale) ? e.locale : {
      id: e.locale,
      firstDayOfWeek: e.firstDayOfWeek,
      masks: e.masks
    };
    return new da(c, e.timezone);
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
function yE(e) {
  return vn(ru, su(e));
}
const DE = (e, t, {
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
    const v = p.changedTouches[0], f = v.screenX - a, $ = v.screenY - o;
    if ((/* @__PURE__ */ new Date()).getTime() - i < n && Math.abs(f) >= r && Math.abs($) <= s) {
      const D = { toLeft: !1, toRight: !1 };
      f < 0 ? D.toLeft = !0 : D.toRight = !0, t(D);
    }
  }
  return on(e, "touchstart", u, { passive: !0 }), on(e, "touchend", c, { passive: !0 }), () => {
    sn(e, "touchstart", u), sn(e, "touchend", c);
  };
}, Kr = {}, wE = (e, t = 10) => {
  Kr[e] = Date.now() + t;
}, EE = (e, t) => {
  if (e in Kr) {
    const n = Kr[e];
    if (Date.now() < n)
      return;
    delete Kr[e];
  }
  t();
}, OE = {
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
function kE(e, { emit: t, slots: n }) {
  const r = ne(null), s = ne(null), a = ne(null), o = ne((/* @__PURE__ */ new Date()).getDate()), i = ne(!1), l = ne(Qr()), u = ne(Qr()), c = ne(e.view), p = ne([]), v = ne("");
  let f = null, $ = null;
  const {
    theme: g,
    color: D,
    displayMode: d,
    locale: b,
    masks: k,
    disabledAttribute: _,
    disabledDates: C
  } = yE(e), N = M(() => e.rows * e.columns), x = M(() => e.step || N.value), P = M(() => xl(p.value) ?? null), A = M(() => Yn(p.value) ?? null), S = M(
    () => e.minPage || (e.minDate ? q(e.minDate) : null)
  ), j = M(
    () => e.maxPage || (e.maxDate ? q(e.maxDate) : null)
  ), Y = M(() => e.navVisibility), X = M(() => !!e.showWeeknumbers), K = M(() => !!e.showIsoWeeknumbers), U = M(() => c.value === "monthly"), F = M(() => c.value === "weekly"), Q = M(() => c.value === "daily"), W = () => {
    i.value = !0, t("transition-start");
  }, V = () => {
    i.value = !1, t("transition-end"), f && (f.resolve(!0), f = null);
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
  }), Ie = M(() => Bt(he.value)), Oe = M(() => {
    const B = new hE();
    return he.value.forEach((z) => {
      z.ranges.forEach((de) => {
        B.render(z, de, De.value);
      });
    }), B;
  }), be = M(() => De.value.reduce((B, z) => (B[z.dayIndex] = { day: z, cells: [] }, B[z.dayIndex].cells.push(...Oe.value.getCells(z)), B), {})), Ye = (B, z) => {
    const de = e.showWeeknumbers || e.showIsoWeeknumbers;
    return de == null ? "" : Tf(de) ? de ? "left" : "" : de.startsWith("right") ? z > 1 ? "right" : de : B > 1 ? "left" : de;
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
    return G || (Wa(we, S.value) ? we = S.value : ca(We, j.value) && (we = w(j.value, 1 - N.value)), We = w(we, N.value - 1)), { fromPage: we, toPage: We };
  }, m = (B, z, de = "") => {
    if (de === "none" || de === "fade")
      return de;
    if ((B == null ? void 0 : B.view) !== (z == null ? void 0 : z.view))
      return "fade";
    const T = ca(z, B), G = Wa(z, B);
    return !T && !G ? "fade" : de === "slide-v" ? G ? "slide-down" : "slide-up" : G ? "slide-right" : "slide-left";
  }, L = (B = {}) => new Promise((z, de) => {
    const { position: T = 1, force: G = !1, transition: ue } = B, we = xt(B.page) ? B.page : ze(), { fromPage: We } = y(we, {
      position: T,
      force: G
    }), Ot = [];
    for (let st = 0; st < N.value; st++) {
      const Cn = w(We, st), lr = st + 1, Sr = Math.ceil(lr / e.columns), pt = e.rows - Sr + 1, xr = lr % e.columns || e.columns, ur = e.columns - xr + 1, Ta = Ye(xr, ur);
      Ot.push(
        b.value.getPage({
          ...Cn,
          view: c.value,
          titlePosition: e.titlePosition,
          trimWeeks: e.trimWeeks,
          position: lr,
          row: Sr,
          rowFromEnd: pt,
          column: xr,
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
    ), p.value = Ot, v.value && v.value !== "none" ? f = {
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
    ), vE(
      z.fromPage,
      z.toPage,
      c.value,
      b.value
    ).map((G) => eu(G, S.value, j.value)).every((G) => G);
  }, ge = (B, z = {}) => ie(Z(B), z), Ze = M(() => ge(-x.value)), Ue = M(() => ge(x.value)), vt = async (B, z = {}) => !z.force && !ie(B, z) ? !1 : (z.fromPage && !fE(z.fromPage, P.value) && (s.value && s.value.hide({ hideDelay: 0 }), z.view && (wE("view", 10), c.value = z.view), await L({
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
  }, Qt = (B, z) => {
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
        z.altKey ? T = Qo(de, -1) : T = la(de, -1);
        break;
      }
      case "PageDown": {
        z.altKey ? T = Qo(de, 1) : T = la(de, 1);
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
    !e.disablePageSwipe && r.value && ($ = DE(
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
      EE("view", () => {
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
  const Lr = {
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
    onDayMouseleave: Qt,
    onDayFocusin: wt,
    onDayFocusout: Et,
    onWeeknumberClick: Na
  };
  return Bn(ou, Lr), Lr;
}
function Tn() {
  const e = vn(ou);
  if (e)
    return e;
  throw new Error(
    "Calendar context missing. Please verify this component is nested within a valid context provider."
  );
}
const NE = {
  inheritAttrs: !1
}, jn = /* @__PURE__ */ Ae({
  ...NE,
  __name: "CalendarSlot",
  props: {
    name: null
  },
  setup(e) {
    const { slots: t } = Tn();
    return (n, r) => h(t)[e.name] ? (O(), Ke(Ui(h(t)[e.name]), ji(Cr({ key: 0 }, n.$attrs)), null, 16)) : Wt(n.$slots, "default", { key: 1 });
  }
});
function Ga(e) {
  document && document.dispatchEvent(
    new CustomEvent("show-popover", {
      detail: e
    })
  );
}
function fa(e) {
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
    o && (o = !1, (r || s && !i) && fa(e));
  }, p = ($) => {
    i || (i = !0, (a || s) && Ga({
      ...e,
      target: e.target || $.currentTarget
    }));
  }, v = ($) => {
    i && !Hr($.currentTarget, $.relatedTarget) && (i = !1, (a || s && !o) && fa(e));
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
  const t = Jr(e);
  if (t == null)
    return;
  const n = t.popoverHandlers;
  !n || !n.length || (n.forEach((r) => r()), delete t.popoverHandlers);
}, ui = (e, t) => {
  const n = Jr(e);
  if (n == null)
    return;
  const r = [], s = lu(t);
  Object.entries(s).forEach(([a, o]) => {
    r.push(on(n, a, o));
  }), n.popoverHandlers = r;
}, uu = {
  mounted(e, t) {
    const { value: n } = t;
    n && ui(e, n);
  },
  updated(e, t) {
    const { oldValue: n, value: r } = t, s = n == null ? void 0 : n.visibility, a = r == null ? void 0 : r.visibility;
    s !== a && (s && (li(e), a || fa(n)), a && ui(e, r));
  },
  unmounted(e) {
    li(e);
  }
}, TE = ["disabled"], IE = {
  key: 1,
  type: "button",
  class: "vc-title"
}, CE = ["disabled"], cu = /* @__PURE__ */ Ae({
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
    }), c = M(() => t.page.titlePosition.includes("left")), p = M(() => t.page.titlePosition.includes("right")), v = M(() => t.layout ? t.layout : c.value ? "tu-pn" : p.value ? "pn-tu" : "p-tu-n;"), f = M(() => ({
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
      h(f).prev ? (O(), I("button", {
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
      ], 40, TE)) : J("", !0),
      h(f).title ? Ce((O(), I("button", IE, [
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
      h(f).next ? (O(), I("button", {
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
      ], 40, CE)) : J("", !0)
    ], 6));
  }
}), ME = Ae({
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
    } = Tn(), v = M(() => e.day), f = M(() => r.value.getCells(v.value)), $ = M(
      () => f.value.map((U) => U.data)
    ), g = M(() => ({
      ...v.value,
      attributes: $.value,
      attributeCells: f.value
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
    const d = M(() => {
      const U = {
        ...n.value.prepareRender({}),
        popovers: []
      };
      return f.value.forEach((F) => {
        n.value.render(F, U), D(F, U);
      }), U;
    }), b = M(() => d.value.highlights), k = M(() => !!Bt(b.value)), _ = M(() => d.value.content), C = M(() => d.value.dots), N = M(() => !!Bt(C.value)), x = M(() => d.value.bars), P = M(() => !!Bt(x.value)), A = M(() => d.value.popovers), S = M(
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
    })), K = M(() => Bt(A.value) ? Bo(
      {
        id: s.value,
        data: { day: v, attributes: S.value }
      },
      ...A.value
    ) : null);
    return {
      attributes: $,
      attributeCells: f,
      bars: x,
      dayClasses: j,
      dayContentProps: Y,
      dayContentEvents: X,
      dayPopover: K,
      glyphs: d,
      dots: C,
      hasDots: N,
      hasBars: P,
      highlights: b,
      hasHighlights: k,
      locale: t,
      popovers: A
    };
  }
}), PE = {
  key: 0,
  class: "vc-highlights vc-day-layer"
}, AE = {
  key: 1,
  class: "vc-day-layer vc-day-box-center-bottom"
}, LE = { class: "vc-dots" }, SE = {
  key: 2,
  class: "vc-day-layer vc-day-box-center-bottom"
}, xE = { class: "vc-bars" };
function RE(e, t, n, r, s, a) {
  const o = ln("CalendarSlot"), i = ju("popover");
  return O(), I("div", {
    class: He(e.dayClasses)
  }, [
    e.hasHighlights ? (O(), I("div", PE, [
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
        Ce((O(), I("div", Cr(e.dayContentProps, Bu(e.dayContentEvents, !0)), [
          pa(le(e.day.label), 1)
        ], 16)), [
          [i, e.dayPopover]
        ])
      ]),
      _: 1
    }, 8, ["day", "attributes", "attribute-cells", "dayProps", "dayEvents", "locale"]),
    e.hasDots ? (O(), I("div", AE, [
      E("div", LE, [
        (O(!0), I(te, null, me(e.dots, ({ key: l, class: u, style: c }) => (O(), I("span", {
          key: l,
          class: He(u),
          style: gr(c)
        }, null, 6))), 128))
      ])
    ])) : J("", !0),
    e.hasBars ? (O(), I("div", SE, [
      E("div", xE, [
        (O(!0), I(te, null, me(e.bars, ({ key: l, class: u, style: c }) => (O(), I("span", {
          key: l,
          class: He(u),
          style: gr(c)
        }, null, 6))), 128))
      ])
    ])) : J("", !0)
  ], 2);
}
const YE = /* @__PURE__ */ zt(ME, [["render", RE]]), FE = {
  name: "CalendarPane",
  inheritAttrs: !1,
  components: { CalendarHeader: cu, CalendarDay: YE },
  props: {
    page: { type: Object, required: !0 }
  },
  setup() {
    const { onWeeknumberClick: e } = Tn();
    return {
      onWeeknumberClick: e
    };
  }
}, VE = { class: "vc-weekdays" }, UE = ["onClick"];
function jE(e, t, n, r, s, a) {
  const o = ln("CalendarHeader"), i = ln("CalendarDay");
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
      E("div", VE, [
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
          }, le(l.weeknumberDisplay), 9, UE)
        ], 2)) : J("", !0),
        (O(!0), I(te, null, me(l.days, (u) => (O(), Ke(i, {
          key: u.id,
          day: u
        }, null, 8, ["day"]))), 128))
      ]))), 128))
    ], 2)
  ], 2);
}
const BE = /* @__PURE__ */ zt(FE, [["render", jE]]), HE = Ae({
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
        const w = Jr(o.target);
        !w || !r.value || (a && a.state.elements.reference !== w && p(), a ? a.update() : a = fd(
          w,
          r.value,
          u.value
        ));
      });
    }
    function f(w) {
      Object.assign(o, Rl(w, "force"));
    }
    function $(w, q) {
      clearTimeout(n), w > 0 ? n = setTimeout(q, w) : q();
    }
    function g(w) {
      return !w || !a ? !1 : Jr(w) === a.state.elements.reference;
    }
    async function D(w = {}) {
      o.force || (w.force && (o.force = !0), $(w.showDelay ?? e.showDelay, () => {
        o.isVisible && (o.force = !1, t("after-show")), f({
          ...w,
          isVisible: !0
        }), v();
      }));
    }
    function d(w = {}) {
      a && (w.target && !g(w.target) || o.force || (w.force && (o.force = !0), $(w.hideDelay ?? e.hideDelay, () => {
        o.isVisible || (o.force = !1), o.isVisible = !1;
      })));
    }
    function b(w = {}) {
      w.target != null && (o.isVisible && g(w.target) ? d(w) : D(w));
    }
    function k(w) {
      if (!a)
        return;
      const q = a.state.elements.reference;
      if (!r.value || !q)
        return;
      const pe = w.target;
      Hr(r.value, pe) || Hr(q, pe) || d({ force: !0 });
    }
    function _(w) {
      (w.key === "Esc" || w.key === "Escape") && d();
    }
    function C({ detail: w }) {
      !w.id || w.id !== e.id || D(w);
    }
    function N({ detail: w }) {
      !w.id || w.id !== e.id || d(w);
    }
    function x({ detail: w }) {
      !w.id || w.id !== e.id || b(w);
    }
    function P() {
      on(document, "keydown", _), on(document, "click", k), on(document, "show-popover", C), on(document, "hide-popover", N), on(document, "toggle-popover", x);
    }
    function A() {
      sn(document, "keydown", _), sn(document, "click", k), sn(document, "show-popover", C), sn(document, "hide-popover", N), sn(document, "toggle-popover", x);
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
      o.autoHide && !o.isFocused && (!w || w !== document.activeElement) && ["hover", "hover-focus"].includes(o.visibility) && d();
    }
    function Q() {
      o.isFocused = !0, o.isInteractive && ["focus", "hover-focus"].includes(o.visibility) && D();
    }
    function W(w) {
      ["focus", "hover-focus"].includes(o.visibility) && (!w.relatedTarget || !Hr(r.value, w.relatedTarget)) && (o.isFocused = !1, !o.isHovered && o.autoHide && d());
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
      ...Vu(o),
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
function WE(e, t, n, r, s, a) {
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
          Wt(e.$slots, "default", {
            direction: e.direction,
            alignment: e.alignment,
            data: e.data,
            hide: e.hide
          }, () => [
            pa(le(e.data), 1)
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
const Fs = /* @__PURE__ */ zt(HE, [["render", WE]]), GE = {
  value: { type: Object, required: !0 }
}, KE = ["input"], qE = "__vc_calendar_nav_context__";
function zE(e, { emit: t }) {
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
        click: () => f(be)
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
  function d() {
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
    toggleMode: d,
    movePrev: b,
    moveNext: k,
    movePrevYear: _,
    moveNextYear: C,
    movePrevYearGroup: N,
    moveNextYearGroup: x
  };
  return Bn(qE, Ee), Ee;
}
const XE = { class: "vc-nav-header" }, ZE = ["disabled"], JE = ["disabled"], QE = { class: "vc-nav-items" }, eO = ["data-id", "aria-label", "disabled", "onClick", "onKeydown"], tO = /* @__PURE__ */ Ae({
  __name: "CalendarNav",
  props: GE,
  emits: KE,
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
    } = zE(n, { emit: t });
    return (p, v) => (O(), I("div", {
      class: "vc-nav-container",
      ref_key: "navContainer",
      ref: r
    }, [
      E("div", XE, [
        E("button", {
          type: "button",
          class: "vc-nav-arrow is-left vc-focus",
          disabled: !h(a),
          onClick: v[0] || (v[0] = //@ts-ignore
          (...f) => h(u) && h(u)(...f)),
          onKeydown: v[1] || (v[1] = (f) => h(Vr)(f, h(u)))
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
        ], 40, ZE),
        E("button", {
          type: "button",
          class: "vc-nav-title vc-focus",
          onClick: v[2] || (v[2] = //@ts-ignore
          (...f) => h(l) && h(l)(...f)),
          onKeydown: v[3] || (v[3] = (f) => h(Vr)(f, h(l)))
        }, le(h(s)), 33),
        E("button", {
          type: "button",
          class: "vc-nav-arrow is-right vc-focus",
          disabled: !h(o),
          onClick: v[4] || (v[4] = //@ts-ignore
          (...f) => h(c) && h(c)(...f)),
          onKeydown: v[5] || (v[5] = (f) => h(Vr)(f, h(c)))
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
        ], 40, JE)
      ]),
      E("div", QE, [
        (O(!0), I(te, null, me(h(i), (f) => (O(), I("button", {
          key: f.label,
          type: "button",
          "data-id": f.id,
          "aria-label": f.ariaLabel,
          class: He(["vc-nav-item vc-focus", [
            f.isActive ? "is-active" : f.isCurrent ? "is-current" : ""
          ]]),
          disabled: f.isDisabled,
          onClick: f.click,
          onKeydown: ($) => h(Vr)($, f.click)
        }, le(f.label), 43, eO))), 128))
      ])
    ], 512));
  }
}), nO = {
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
        ve(tO, {
          value: l.page,
          onInput: h(a)
        }, null, 8, ["value", "onInput"])
      ]),
      _: 1
    }, 8, ["id", "class"]));
  }
}, rO = Ae({
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
}), aO = { class: "vc-day-popover-row" }, sO = {
  key: 0,
  class: "vc-day-popover-row-indicator"
}, oO = { class: "vc-day-popover-row-label" };
function iO(e, t, n, r, s, a) {
  return O(), I("div", aO, [
    e.indicator ? (O(), I("div", sO, [
      E("span", {
        class: He(e.indicator.class)
      }, null, 2)
    ])) : J("", !0),
    E("div", oO, [
      Wt(e.$slots, "default", {}, () => [
        pa(le(e.attribute.popover ? e.attribute.popover.label : "No content provided"), 1)
      ])
    ])
  ]);
}
const lO = /* @__PURE__ */ zt(rO, [["render", iO]]), uO = { class: "vc-day-popover-container" }, cO = {
  key: 0,
  class: "vc-day-popover-header"
}, dO = /* @__PURE__ */ Ae({
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
        Wt(l.$slots, "default", {
          day: c,
          dayTitle: i(c),
          attributes: p,
          format: o,
          masks: h(s),
          hide: v
        }, () => [
          E("div", uO, [
            h(s).dayPopover ? (O(), I("div", cO, le(i(c)), 1)) : J("", !0),
            (O(!0), I(te, null, me(p, (f) => (O(), Ke(lO, {
              key: f.key,
              attribute: f
            }, null, 8, ["attribute"]))), 128))
          ])
        ])
      ]),
      _: 3
    }, 8, ["id", "class"]));
  }
}), fO = Ae({
  name: "Calendar",
  components: {
    CalendarHeader: cu,
    CalendarPane: BE,
    CalendarNavPopover: nO,
    CalendarDayPopover: dO
  },
  emits: $E,
  props: OE,
  setup(e, { emit: t, slots: n }) {
    return kE(e, { emit: t, slots: n });
  }
}), vO = { class: "vc-pane-header-wrapper" };
function pO(e, t, n, r, s, a) {
  const o = ln("CalendarHeader"), i = ln("CalendarPane"), l = ln("CalendarDayPopover"), u = ln("CalendarNavPopover");
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
        E("div", vO, [
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
        Wt(e.$slots, "footer")
      ], 2)
    ], 16),
    ve(l, null, {
      default: qe((c) => [
        Wt(e.$slots, "day-popover", ji(Uu(c)))
      ]),
      _: 3
    }),
    ve(u)
  ], 64);
}
const mO = /* @__PURE__ */ zt(fO, [["render", pO]]), hO = { class: "vc-base-select" }, gO = ["value"], _O = ["value", "disabled"], bO = {
  inheritAttrs: !1
}, vr = /* @__PURE__ */ Object.assign(bO, {
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
    return (t, n) => (O(), I("div", hO, [
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
        }, le(r.label), 9, _O))), 128))
      ], 16, gO)
    ]));
  }
}), du = "__vc_date_picker_context__", yO = {
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
}, DO = [
  "update:modelValue",
  "drag",
  "dayclick",
  "daykeydown",
  "popover-will-show",
  "popover-did-show",
  "popover-will-hide",
  "popover-did-hide"
];
function wO(e, t) {
  const n = su(e), { locale: r, masks: s, disabledAttribute: a } = n, { emit: o } = t, i = ne(!1), l = ne(Qr()), u = ne(null), c = ne(null), p = ne(["", ""]), v = ne(null), f = ne(null);
  let $, g, D = !0;
  const d = M(() => e.isRange || e.modelModifiers.range === !0), b = M(
    () => d.value && u.value != null ? u.value.start : null
  ), k = M(
    () => d.value && u.value != null ? u.value.end : null
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
  ), F = M(() => d.value ? {
    start: p.value[0],
    end: p.value[1]
  } : p.value[0]), Q = M(() => {
    const T = ["start", "end"].map((G) => ({
      input: Z(G),
      change: ie(G),
      keyup: ge,
      ...e.popover && U.value
    }));
    return d.value ? {
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
    if (!d.value || !he(c.value))
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
    return d.value ? Kt(T) && De(T.start) && De(T.end) : De(T);
  }
  function Ie(T, G) {
    const ue = Vn(T), we = Vn(G);
    return !ue && !we ? !0 : ue !== we ? !1 : T.getTime() === G.getTime();
  }
  function Oe(T, G) {
    if (d.value) {
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
    if (d.value) {
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
    return d.value ? he(T) ? {
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
    const Sr = ee(G);
    let pt = Ye(
      T,
      Sr,
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
      d.value ? p.value = [G && G.start, G && G.end] : p.value = [G, ""];
    });
  }
  function L(T, G, ue) {
    p.value.splice(G === "start" ? 0 : 1, 1, T);
    const we = d.value ? {
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
    return d.value ? [
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
    if (d.value) {
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
  function Qt(T = {}) {
    Ga({
      ...K.value,
      ...T,
      isInteractive: !0,
      id: l.value
    });
  }
  function wt(T = {}) {
    fa({
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
      const G = d.value ? T ? b.value : k.value : u.value;
      return Jl(G, "monthly", r.value);
    }
    return null;
  }
  async function Na(T, G = {}) {
    return f.value == null ? !1 : f.value.move(T, G);
  }
  async function Lr(T, G = {}) {
    return f.value == null ? !1 : f.value.moveBy(T, G);
  }
  async function B(T, G = {}) {
    if (f.value == null)
      return !1;
    const { firstPage: ue, lastPage: we, move: We } = f.value, Ot = T !== "end", st = In(Ot), Cn = Ot ? 1 : -1;
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
      Kt(e.rules) && y(e.modelValue, {
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
    calendarRef: f,
    isRange: d,
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
    moveBy: Lr,
    moveToValue: B,
    updateValue: ze,
    showPopover: Qt,
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
function EO() {
  const e = vn(du);
  if (e)
    return e;
  throw new Error(
    "DatePicker context missing. Please verify this component is nested within a valid context provider."
  );
}
const OO = [
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
], $O = [
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
function kO(e) {
  const t = EO(), {
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
  const v = M(() => e.position === 0), f = M(
    () => a.value[e.position] || { isValid: !1 }
  ), $ = M(() => Kl(f.value)), g = M(() => !!f.value.isValid), D = M(() => !l.value && g.value), d = M(() => {
    if (!$.value)
      return null;
    let Y = n.value.toDate(f.value);
    return f.value.hours === 24 && (Y = new Date(Y.getTime() - 1)), Y;
  }), b = M({
    get() {
      return f.value.hours;
    },
    set(Y) {
      p({ hours: Y });
    }
  }), k = M({
    get() {
      return f.value.minutes;
    },
    set(Y) {
      p({ minutes: Y });
    }
  }), _ = M({
    get() {
      return f.value.seconds;
    },
    set(Y) {
      p({ seconds: Y });
    }
  }), C = M({
    get() {
      return f.value.milliseconds;
    },
    set(Y) {
      p({ milliseconds: Y });
    }
  }), N = M({
    get() {
      return f.value.hours < 12;
    },
    set(Y) {
      Y = String(Y).toLowerCase() == "true";
      let X = b.value;
      Y && X >= 12 ? X -= 12 : !Y && X < 12 && (X += 12), p({ hours: X });
    }
  }), x = M(
    () => aE(f.value, o.value[e.position])
  ), P = M(() => OO.filter(
    (Y) => x.value.hours.some((X) => X.value === Y.value)
  )), A = M(() => $O.filter(
    (Y) => x.value.hours.some((X) => X.value === Y.value)
  )), S = M(() => i.value ? x.value.hours : N.value ? P.value : A.value), j = M(() => {
    const Y = [];
    return Bt(P.value) && Y.push({ value: !0, label: "AM" }), Bt(A.value) && Y.push({ value: !1, label: "PM" }), Y;
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
    milliseconds: C,
    options: x,
    hourOptions: S,
    isAM: N,
    isAMOptions: j,
    is24hr: i
  };
}
const NO = {
  key: 0,
  class: "vc-time-header"
}, TO = { class: "vc-time-weekday" }, IO = { class: "vc-time-month" }, CO = { class: "vc-time-day" }, MO = { class: "vc-time-year" }, PO = { class: "vc-time-select-group" }, AO = /* @__PURE__ */ E("span", { class: "vc-time-colon" }, ":", -1), LO = /* @__PURE__ */ E("span", { class: "vc-time-colon" }, ":", -1), SO = /* @__PURE__ */ E("span", { class: "vc-time-decimal" }, ".", -1), xO = /* @__PURE__ */ Ae({
  __name: "TimePicker",
  props: {
    position: null
  },
  setup(e, { expose: t }) {
    const r = kO(e);
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
      isAM: $,
      isAMOptions: g,
      is24hr: D,
      showHeader: d,
      timeAccuracy: b
    } = r;
    return (k, _) => (O(), I("div", {
      class: He(["vc-time-picker", [{ "vc-invalid": !h(a), "vc-attached": !h(f) }]])
    }, [
      Wt(k.$slots, "time-header", {}, () => [
        h(d) && h(o) ? (O(), I("div", NO, [
          E("span", TO, le(h(s).formatDate(h(o), "WWW")), 1),
          E("span", IO, le(h(s).formatDate(h(o), "MMM")), 1),
          E("span", CO, le(h(s).formatDate(h(o), "D")), 1),
          E("span", MO, le(h(s).formatDate(h(o), "YYYY")), 1)
        ])) : J("", !0)
      ]),
      E("div", PO, [
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
          AO,
          ve(vr, {
            modelValue: h(l),
            "onUpdate:modelValue": _[1] || (_[1] = (C) => _e(l) ? l.value = C : null),
            modelModifiers: { number: !0 },
            options: h(p).minutes,
            "align-left": h(b) === 2
          }, null, 8, ["modelValue", "options", "align-left"])
        ], 64)) : J("", !0),
        h(b) > 2 ? (O(), I(te, { key: 1 }, [
          LO,
          ve(vr, {
            modelValue: h(u),
            "onUpdate:modelValue": _[2] || (_[2] = (C) => _e(u) ? u.value = C : null),
            modelModifiers: { number: !0 },
            options: h(p).seconds,
            "align-left": h(b) === 3
          }, null, 8, ["modelValue", "options", "align-left"])
        ], 64)) : J("", !0),
        h(b) > 3 ? (O(), I(te, { key: 2 }, [
          SO,
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
  emits: DO,
  props: yO,
  setup(e, t) {
    const n = wO(e, t), { slots: r, attrs: s } = t, {
      isTimeMode: a,
      isRange: o,
      isDateTimeMode: i,
      color: l,
      displayMode: u,
      dateParts: c,
      datePickerPopoverId: p,
      attributes: v,
      calendarRef: f,
      popoverRef: $,
      showCalendar: g,
      onDayClick: D,
      onDayMouseEnter: d,
      onDayKeydown: b,
      onPopoverBeforeShow: k,
      onPopoverAfterShow: _,
      onPopoverBeforeHide: C,
      onPopoverAfterHide: N
    } = n;
    t.expose(n);
    const x = os(Rl(n, "calendarRef", "popoverRef")), P = () => (o.value ? [0, 1] : [0]).map((Y) => An(xO, { position: Y })), A = () => {
      if (!c.value)
        return null;
      const j = i.value ? { ...r, footer: P } : r;
      return An(
        mO,
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
const RO = { class: "flex flex-col gap-2" }, YO = { class: "flex items-center gap-2" }, FO = /* @__PURE__ */ E("label", {
  for: "due",
  class: "p3-b"
}, "結束於指定日期", -1), VO = ["onClick"], UO = /* @__PURE__ */ Ae({
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
    }), (a, o) => (O(), I("div", RO, [
      E("div", YO, [
        Ce(E("input", {
          type: "checkbox",
          "onUpdate:modelValue": o[0] || (o[0] = (i) => _e(s) ? s.value = i : null),
          id: "due"
        }, null, 512), [
          [qr, h(s)]
        ]),
        FO,
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
            }, le(l || "請選定結束日期"), 9, VO)
          ]),
          _: 1
        }, 8, ["modelValue", "min-Date"])) : J("", !0)
      ])
    ]));
  }
}), jO = { class: "flex w-auto items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-1.5" }, BO = ["value", "type", "placeholder", "maxLength", "required"], HO = /* @__PURE__ */ Ae({
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
    return (s, a) => (O(), I("div", jO, [
      E("input", {
        value: s.modelValue,
        onInput: r,
        type: s.type,
        class: "p3-b w-full border-none outline-none shadow-none",
        placeholder: s.placeholder,
        maxLength: s.maxLength,
        required: s.required
      }, null, 40, BO)
    ]));
  }
});
const kt = /* @__PURE__ */ cs(HO, [["__scopeId", "data-v-068dea7c"]]), WO = { class: "flex flex-col gap-3" }, GO = /* @__PURE__ */ E("div", { class: "flex items-center justify-center gap-3 my-2" }, [
  /* @__PURE__ */ E("p", { class: "p4-b" }, "日期時間"),
  /* @__PURE__ */ E("div", { class: "h-[1px] flex-1 bg-light-3" })
], -1), KO = { class: "flex flex-col gap-2" }, qO = { class: "flex gap-2 items-center" }, zO = /* @__PURE__ */ E("span", { class: "p4-b" }, "開始", -1), XO = ["onClick"], ZO = ["value"], JO = /* @__PURE__ */ E("div", { class: "flex items-center justify-center gap-3 w-full my-2" }, [
  /* @__PURE__ */ E("p", { class: "p4-b" }, "重複頻率"),
  /* @__PURE__ */ E("div", { class: "h-[1px] flex-1 bg-light-3" })
], -1), QO = { class: "flex space-x-2 items-center" }, e$ = { class: "flex items-center gap-2" }, t$ = /* @__PURE__ */ E("span", { class: "p4-b" }, "重複", -1), n$ = ["value"], r$ = /* @__PURE__ */ E("option", { value: 0 }, "自訂", -1), a$ = { class: "p4-b" }, s$ = {
  key: 0,
  class: "flex items-center gap-2"
}, o$ = { class: "flex items-center gap-2" }, i$ = /* @__PURE__ */ E("span", { class: "p4-b" }, "頻率", -1), l$ = /* @__PURE__ */ E("option", {
  value: "-1",
  disabled: ""
}, "請選擇", -1), u$ = ["value"], c$ = {
  key: 0,
  class: "flex items-center gap-2"
}, d$ = /* @__PURE__ */ E("span", { class: "p4-b" }, "每", -1), f$ = { class: "p4-b" }, ci = 1, v$ = /* @__PURE__ */ Ae({
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
    ke(a, (f) => {
      f || (f = ci), t("update:interval", f);
    });
    const o = ne(n.frequency);
    ke(o, (f) => {
      t("update:frequency", f);
    });
    const i = M({
      get: () => r.value.weekdays ?? [],
      set: (f) => {
        r.value.weekdays = f;
      }
    }), l = M({
      get: () => r.value.weekOrdinal ?? [],
      set: (f) => {
        r.value.weekOrdinal = f;
      }
    }), u = M({
      get: () => r.value.monthDate ?? [],
      set: (f) => {
        r.value.monthDate = f;
      }
    }), c = M({
      get: () => r.value.yearMonths ?? [],
      set: (f) => {
        r.value.yearMonths = f;
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
    ), (f, $) => (O(), I("div", WO, [
      GO,
      E("div", KO, [
        E("div", qO, [
          zO,
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
                }, null, 8, ZO),
                pa(" " + le(D || "請選定執行日期"), 1)
              ], 8, XO)
            ]),
            _: 1
          }, 8, ["modelValue", "min-Date"])
        ])
      ]),
      JO,
      E("div", QO, [
        E("label", e$, [
          t$,
          Ce(E("select", {
            class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
            "onUpdate:modelValue": $[1] || ($[1] = (g) => _e(v) ? v.value = g : null)
          }, [
            (O(!0), I(te, null, me(h(xe), (g, D) => (O(), I(te, { key: D }, [
              Number.isInteger(g) ? (O(), I("option", {
                key: 0,
                value: g
              }, le(f.$t(D)), 9, n$)) : J("", !0)
            ], 64))), 128)),
            r$
          ], 512), [
            [je, h(v)]
          ])
        ]),
        E("span", a$, le(h(p)), 1)
      ]),
      h(xe)[h(v)] == null ? (O(), I("div", s$, [
        E("label", o$, [
          i$,
          Ce(E("select", {
            class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
            "onUpdate:modelValue": $[2] || ($[2] = (g) => _e(o) ? o.value = g : null)
          }, [
            l$,
            (O(!0), I(te, null, me(h(xe), (g, D) => (O(), I(te, { key: D }, [
              g != h(xe).Never && Number.isInteger(g) ? (O(), I("option", {
                key: 0,
                value: g
              }, le(f.$t(D)), 9, u$)) : J("", !0)
            ], 64))), 128))
          ], 512), [
            [je, h(o)]
          ])
        ]),
        h(o) != -1 ? (O(), I("label", c$, [
          d$,
          ve(kt, {
            class: "!w-10 text-center",
            modelValue: h(a),
            "onUpdate:modelValue": $[3] || ($[3] = (g) => _e(a) ? a.value = g : null),
            type: "number"
          }, null, 8, ["modelValue"]),
          E("span", f$, le(f.$t(`s${h(xe)[h(o)]}`)), 1)
        ])) : J("", !0)
      ])) : J("", !0),
      h(xe)[h(v)] == null ? (O(), Ke(oc, {
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
      h(o) !== -1 ? (O(), Ke(UO, {
        key: 2,
        modelValue: h(r).due,
        "onUpdate:modelValue": $[8] || ($[8] = (g) => h(r).due = g)
      }, null, 8, ["modelValue"])) : J("", !0)
    ]));
  }
}), p$ = { class: "relative border rounded border-light-3 py-4 px-3" }, m$ = { class: "p3-b absolute left-2 -top-3 text-dark-3 bg-light-5" }, Dr = /* @__PURE__ */ Ae({
  __name: "OuterBlock",
  props: {
    title: {}
  },
  setup(e) {
    return (t, n) => (O(), I("div", p$, [
      E("div", m$, le(t.title), 1),
      Wt(t.$slots, "default")
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
const h$ = /\{([0-9a-zA-Z]+)\}/g;
function Us(e, ...t) {
  return t.length === 1 && $e(t[0]) && (t = t[0]), (!t || !t.hasOwnProperty) && (t = {}), e.replace(h$, (n, r) => t.hasOwnProperty(r) ? t[r] : "");
}
const Jt = (e, t = !1) => t ? Symbol.for(e) : Symbol(e), g$ = (e, t, n) => _$({ l: e, k: t, s: n }), _$ = (e) => JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027"), Qe = (e) => typeof e == "number" && isFinite(e), b$ = (e) => vu(e) === "[object Date]", Xn = (e) => vu(e) === "[object RegExp]", Ea = (e) => ye(e) && Object.keys(e).length === 0, et = Object.assign;
let di;
const jt = () => di || (di = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function fi(e) {
  return e.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}
const y$ = Object.prototype.hasOwnProperty;
function js(e, t) {
  return y$.call(e, t);
}
const Ge = Array.isArray, Be = (e) => typeof e == "function", re = (e) => typeof e == "string", Pe = (e) => typeof e == "boolean", $e = (e) => e !== null && typeof e == "object", fu = Object.prototype.toString, vu = (e) => fu.call(e), ye = (e) => {
  if (!$e(e))
    return !1;
  const t = Object.getPrototypeOf(e);
  return t === null || t.constructor === Object;
}, D$ = (e) => e == null ? "" : Ge(e) || ye(e) && e.toString === fu ? JSON.stringify(e, null, 2) : String(e);
function w$(e, t = "") {
  return e.reduce((n, r, s) => s === 0 ? n + r : n + t + r, "");
}
const vi = 2;
function E$(e, t = 0, n = e.length) {
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
function O$(e) {
  pi[e] || (pi[e] = !0, mn(e));
}
function $$() {
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
function k$(e, t, n) {
  return { line: e, column: t, offset: n };
}
function Ka(e, t, n) {
  const r = { start: e, end: t };
  return n != null && (r.source = n), r;
}
const N$ = /\{([0-9a-zA-Z]+)\}/g;
function T$(e, ...t) {
  return t.length === 1 && I$(t[0]) && (t = t[0]), (!t || !t.hasOwnProperty) && (t = {}), e.replace(N$, (n, r) => t.hasOwnProperty(r) ? t[r] : "");
}
const pu = Object.assign, mi = (e) => typeof e == "string", I$ = (e) => e !== null && typeof e == "object";
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
}, C$ = {
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
  const { domain: r, messages: s, args: a } = n, o = T$((s || C$)[e] || "", ...a || []), i = new SyntaxError(String(o));
  return i.code = e, t && (i.location = t), i.domain = r, i;
}
function M$(e) {
  throw e;
}
const P$ = /<\/?[\w\s="/.':;#-\/]+>/, A$ = (e) => P$.test(e), Ut = " ", L$ = "\r", nt = `
`, S$ = String.fromCharCode(8232), x$ = String.fromCharCode(8233);
function R$(e) {
  const t = e;
  let n = 0, r = 1, s = 1, a = 0;
  const o = (x) => t[x] === L$ && t[x + 1] === nt, i = (x) => t[x] === nt, l = (x) => t[x] === x$, u = (x) => t[x] === S$, c = (x) => o(x) || i(x) || l(x) || u(x), p = () => n, v = () => r, f = () => s, $ = () => a, g = (x) => o(x) || l(x) || u(x) ? nt : t[x], D = () => g(n), d = () => g(n + a);
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
    column: f,
    peekOffset: $,
    charAt: g,
    currentChar: D,
    currentPeek: d,
    next: b,
    peek: k,
    reset: _,
    resetPeek: C,
    skipToPeek: N
  };
}
const tn = void 0, Y$ = ".", hi = "'", F$ = "tokenizer";
function V$(e, t = {}) {
  const n = t.location !== !1, r = R$(e), s = () => r.index(), a = () => k$(r.line(), r.column(), r.index()), o = a(), i = s(), l = {
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
        domain: F$,
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
  function d(y) {
    if (y === tn)
      return !1;
    const m = y.charCodeAt(0);
    return m >= 97 && m <= 122 || // a-z
    m >= 65 && m <= 90 || // A-Z
    m === 95;
  }
  function b(y) {
    if (y === tn)
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
      return ge === "{" ? d(y.peek()) : ge === "@" || ge === "%" || ge === "|" || ge === ":" || ge === "." || ge === Ut || !ge ? !1 : ge === nt ? (y.peek(), Z()) : d(ge);
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
    return L === tn ? tn : m(L) ? (y.next(), L) : null;
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
    return y.currentChar() === tn && p(ce.UNTERMINATED_CLOSING_BRACE, a(), 0), L;
  }
  function q(y) {
    D(y);
    let m = "";
    return y.currentChar() === "-" ? (y.next(), m += `-${Q(y)}`) : m += Q(y), y.currentChar() === tn && p(ce.UNTERMINATED_CLOSING_BRACE, a(), 0), m;
  }
  function pe(y) {
    D(y), $(y, "'");
    let m = "", L = "";
    const Z = (ge) => ge !== hi && ge !== nt;
    for (; m = X(y, Z); )
      m === "\\" ? L += Ee(y) : L += m;
    const ie = y.currentChar();
    return ie === nt || ie === tn ? (p(ce.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, a(), 0), ie === nt && (y.next(), $(y, "'")), L) : ($(y, "'"), L);
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
      return ie === "{" || ie === "%" || ie === "@" || ie === "|" || ie === "(" || ie === ")" || !ie || ie === Ut ? Z : ie === nt || ie === Y$ ? (Z += ie, y.next(), m(L, Z)) : (Z += ie, y.next(), m(!0, Z));
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
        return m.braceNest > 0 && p(ce.UNTERMINATED_CLOSING_BRACE, a(), 0), L = Ye(y, m) || f(m), m.braceNest = 0, L;
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
    return l.lastType = y, l.lastOffset = m, l.lastStartLoc = L, l.lastEndLoc = Z, l.offset = s(), l.startLoc = a(), r.currentChar() === tn ? v(
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
const U$ = "parser", j$ = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;
function B$(e, t, n) {
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
function H$(e = {}) {
  const t = e.location !== !1, { onError: n } = e;
  function r(d, b, k, _, ...C) {
    const N = d.currentPosition();
    if (N.offset += _, N.column += _, n) {
      const x = t ? Ka(k, N) : null, P = ir(b, x, {
        domain: U$,
        args: C
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
    const k = d.context(), { lastOffset: _, lastStartLoc: C } = k, N = s(5, _, C);
    return N.index = parseInt(b, 10), d.nextToken(), a(N, d.currentOffset(), d.currentPosition()), N;
  }
  function l(d, b) {
    const k = d.context(), { lastOffset: _, lastStartLoc: C } = k, N = s(4, _, C);
    return N.key = b, d.nextToken(), a(N, d.currentOffset(), d.currentPosition()), N;
  }
  function u(d, b) {
    const k = d.context(), { lastOffset: _, lastStartLoc: C } = k, N = s(9, _, C);
    return N.value = b.replace(j$, B$), d.nextToken(), a(N, d.currentOffset(), d.currentPosition()), N;
  }
  function c(d) {
    const b = d.nextToken(), k = d.context(), { lastOffset: _, lastStartLoc: C } = k, N = s(8, _, C);
    return b.type !== 12 ? (r(d, ce.UNEXPECTED_EMPTY_LINKED_MODIFIER, k.lastStartLoc, 0), N.value = "", a(N, _, C), {
      nextConsumeToken: b,
      node: N
    }) : (b.value == null && r(d, ce.UNEXPECTED_LEXICAL_ANALYSIS, k.lastStartLoc, 0, At(b)), N.value = b.value || "", a(N, d.currentOffset(), d.currentPosition()), {
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
      const C = c(d);
      k.modifier = C.node, _ = C.nextConsumeToken || d.nextToken();
    }
    switch (_.type !== 10 && r(d, ce.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, At(_)), _ = d.nextToken(), _.type === 2 && (_ = d.nextToken()), _.type) {
      case 11:
        _.value == null && r(d, ce.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, At(_)), k.key = p(d, _.value || "");
        break;
      case 5:
        _.value == null && r(d, ce.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, At(_)), k.key = l(d, _.value || "");
        break;
      case 6:
        _.value == null && r(d, ce.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, At(_)), k.key = i(d, _.value || "");
        break;
      case 7:
        _.value == null && r(d, ce.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, At(_)), k.key = u(d, _.value || "");
        break;
      default:
        r(d, ce.UNEXPECTED_EMPTY_LINKED_KEY, b.lastStartLoc, 0);
        const C = d.context(), N = s(7, C.offset, C.startLoc);
        return N.value = "", a(N, C.offset, C.startLoc), k.key = N, a(k, C.offset, C.startLoc), {
          nextConsumeToken: _,
          node: k
        };
    }
    return a(k, d.currentOffset(), d.currentPosition()), {
      node: k
    };
  }
  function f(d) {
    const b = d.context(), k = b.currentType === 1 ? d.currentOffset() : b.offset, _ = b.currentType === 1 ? b.endLoc : b.startLoc, C = s(2, k, _);
    C.items = [];
    let N = null;
    do {
      const A = N || d.nextToken();
      switch (N = null, A.type) {
        case 0:
          A.value == null && r(d, ce.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, At(A)), C.items.push(o(d, A.value || ""));
          break;
        case 6:
          A.value == null && r(d, ce.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, At(A)), C.items.push(i(d, A.value || ""));
          break;
        case 5:
          A.value == null && r(d, ce.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, At(A)), C.items.push(l(d, A.value || ""));
          break;
        case 7:
          A.value == null && r(d, ce.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, At(A)), C.items.push(u(d, A.value || ""));
          break;
        case 8:
          const S = v(d);
          C.items.push(S.node), N = S.nextConsumeToken || null;
          break;
      }
    } while (b.currentType !== 14 && b.currentType !== 1);
    const x = b.currentType === 1 ? b.lastOffset : d.currentOffset(), P = b.currentType === 1 ? b.lastEndLoc : d.currentPosition();
    return a(C, x, P), C;
  }
  function $(d, b, k, _) {
    const C = d.context();
    let N = _.items.length === 0;
    const x = s(1, b, k);
    x.cases = [], x.cases.push(_);
    do {
      const P = f(d);
      N || (N = P.items.length === 0), x.cases.push(P);
    } while (C.currentType !== 14);
    return N && r(d, ce.MUST_HAVE_MESSAGES_IN_PLURAL, k, 0), a(x, d.currentOffset(), d.currentPosition()), x;
  }
  function g(d) {
    const b = d.context(), { offset: k, startLoc: _ } = b, C = f(d);
    return b.currentType === 14 ? C : $(d, k, _, C);
  }
  function D(d) {
    const b = V$(d, pu({}, e)), k = b.context(), _ = s(0, k.offset, k.startLoc);
    return t && _.loc && (_.loc.source = d), _.body = g(b), e.onCacheKey && (_.cacheKey = e.onCacheKey(d)), k.currentType !== 14 && r(b, ce.UNEXPECTED_LEXICAL_ANALYSIS, k.lastStartLoc, 0, d[k.offset] || ""), a(_, b.currentOffset(), b.currentPosition()), _;
  }
  return { parse: D };
}
function At(e) {
  if (e.type === 14)
    return "EOF";
  const t = (e.value || "").replace(/\r?\n/gu, "\\n");
  return t.length > 10 ? t.slice(0, 9) + "…" : t;
}
function W$(e, t = {}) {
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
function G$(e, t = {}) {
  const n = W$(e);
  n.helper(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  ), e.body && Hs(e.body, n);
  const r = n.context();
  e.helpers = Array.from(r.helpers);
}
function K$(e) {
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
const q$ = "minifier";
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
        domain: q$,
        args: [e.type]
      });
  }
  delete e.type;
}
const z$ = "parser";
function X$(e, t) {
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
function Z$(e, t) {
  const { helper: n } = e;
  e.push(`${n(
    "linked"
    /* HelperNameMap.LINKED */
  )}(`), Zn(e, t.key), t.modifier ? (e.push(", "), Zn(e, t.modifier), e.push(", _type")) : e.push(", undefined, _type"), e.push(")");
}
function J$(e, t) {
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
function Q$(e, t) {
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
function ek(e, t) {
  t.body ? Zn(e, t.body) : e.push("null");
}
function Zn(e, t) {
  const { helper: n } = e;
  switch (t.type) {
    case 0:
      ek(e, t);
      break;
    case 1:
      Q$(e, t);
      break;
    case 2:
      J$(e, t);
      break;
    case 6:
      Z$(e, t);
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
        domain: z$,
        args: [t.type]
      });
  }
}
const tk = (e, t = {}) => {
  const n = mi(t.mode) ? t.mode : "normal", r = mi(t.filename) ? t.filename : "message.intl", s = !!t.sourceMap, a = t.breakLineCode != null ? t.breakLineCode : n === "arrow" ? ";" : `
`, o = t.needIndent ? t.needIndent : n !== "arrow", i = e.helpers || [], l = X$(e, {
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
function nk(e, t = {}) {
  const n = pu({}, t), r = !!n.jit, s = !!n.minify, a = n.optimize == null ? !0 : n.optimize, i = H$(n).parse(e);
  return r ? (a && K$(i), s && Pn(i), { ast: i, code: "" }) : (G$(i, n), tk(i, n));
}
/*!
  * core-base v9.5.0
  * (c) 2023 kazuya kawaguchi
  * Released under the MIT License.
  */
function rk() {
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
const ak = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function sk(e) {
  return ak.test(e);
}
function ok(e) {
  const t = e.charCodeAt(0), n = e.charCodeAt(e.length - 1);
  return t === n && (t === 34 || t === 39) ? e.slice(1, -1) : e;
}
function ik(e) {
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
function lk(e) {
  const t = e.trim();
  return e.charAt(0) === "0" && isNaN(parseInt(e)) ? !1 : sk(t) ? ok(t) : "*" + t;
}
function uk(e) {
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
      if (s = 0, o === void 0 || (o = lk(o), o === !1))
        return !1;
      v[
        1
        /* Actions.PUSH */
      ]();
    }
  };
  function f() {
    const $ = e[n + 1];
    if (r === 5 && $ === "'" || r === 6 && $ === '"')
      return n++, i = "\\" + $, v[
        0
        /* Actions.APPEND */
      ](), !0;
  }
  for (; r !== null; )
    if (n++, a = e[n], !(a === "\\" && f())) {
      if (l = ik(a), p = hn[r], u = p[l] || p.l || 8, u === 8 || (r = u[0], u[1] !== void 0 && (c = v[u[1]], c && (i = a, c() === !1))))
        return;
      if (r === 7)
        return t;
    }
}
const bi = /* @__PURE__ */ new Map();
function ck(e, t) {
  return $e(e) ? e[t] : null;
}
function dk(e, t) {
  if (!$e(e))
    return null;
  let n = bi.get(t);
  if (n || (n = uk(t), n && bi.set(t, n)), !n)
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
const fk = (e) => e, vk = (e) => "", pk = "text", mk = (e) => e.length === 0 ? "" : w$(e), hk = D$;
function yi(e, t) {
  return e = Math.abs(e), t === 2 ? e ? e > 1 ? 1 : 0 : 1 : e ? Math.min(e, 2) : 0;
}
function gk(e) {
  const t = Qe(e.pluralIndex) ? e.pluralIndex : -1;
  return e.named && (Qe(e.named.count) || Qe(e.named.n)) ? Qe(e.named.count) ? e.named.count : Qe(e.named.n) ? e.named.n : t : t;
}
function _k(e, t) {
  t.count || (t.count = e), t.n || (t.n = e);
}
function bk(e = {}) {
  const t = e.locale, n = gk(e), r = $e(e.pluralRules) && re(t) && Be(e.pluralRules[t]) ? e.pluralRules[t] : yi, s = $e(e.pluralRules) && re(t) && Be(e.pluralRules[t]) ? yi : void 0, a = (d) => d[r(n, d.length, s)], o = e.list || [], i = (d) => o[d], l = e.named || {};
  Qe(e.pluralIndex) && _k(n, l);
  const u = (d) => l[d];
  function c(d) {
    const b = Be(e.messages) ? e.messages(d) : $e(e.messages) ? e.messages[d] : !1;
    return b || (e.parent ? e.parent.message(d) : vk);
  }
  const p = (d) => e.modifiers ? e.modifiers[d] : fk, v = ye(e.processor) && Be(e.processor.normalize) ? e.processor.normalize : mk, f = ye(e.processor) && Be(e.processor.interpolate) ? e.processor.interpolate : hk, $ = ye(e.processor) && re(e.processor.type) ? e.processor.type : pk, D = {
    list: i,
    named: u,
    plural: a,
    linked: (d, ...b) => {
      const [k, _] = b;
      let C = "text", N = "";
      b.length === 1 ? $e(k) ? (N = k.modifier || N, C = k.type || C) : re(k) && (N = k || N) : b.length === 2 && (re(k) && (N = k || N), re(_) && (C = _ || C));
      const x = c(d)(D), P = (
        // The message in vnode resolved with linked are returned as an array by processor.nomalize
        C === "vnode" && Ge(x) && N ? x[0] : x
      );
      return N ? p(N)(P, C) : P;
    },
    message: c,
    type: $,
    interpolate: f,
    normalize: v,
    values: et({}, o, l)
  };
  return D;
}
let Nr = null;
function yk(e) {
  Nr = e;
}
function Dk(e, t, n) {
  Nr && Nr.emit("i18n:init", {
    timestamp: Date.now(),
    i18n: e,
    version: t,
    meta: n
  });
}
const wk = /* @__PURE__ */ Ek(
  "function:translate"
  /* IntlifyDevToolsHooks.FunctionTranslate */
);
function Ek(e) {
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
}, Ok = {
  [rt.NOT_FOUND_KEY]: "Not found '{key}' key in '{locale}' locale messages.",
  [rt.FALLBACK_TO_TRANSLATE]: "Fall back to translate '{key}' key with '{target}' locale.",
  [rt.CANNOT_FORMAT_NUMBER]: "Cannot format a number value due to not supported Intl.NumberFormat.",
  [rt.FALLBACK_TO_NUMBER_FORMAT]: "Fall back to number format '{key}' key with '{target}' locale.",
  [rt.CANNOT_FORMAT_DATE]: "Cannot format a date value due to not supported Intl.DateTimeFormat.",
  [rt.FALLBACK_TO_DATE_FORMAT]: "Fall back to datetime format '{key}' key with '{target}' locale.",
  [rt.EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER]: "This project is using Custom Message Compiler, which is an experimental feature. It may receive breaking changes or be removed in the future."
};
function $n(e, ...t) {
  return Us(Ok[e], ...t);
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
    re(a) && (r = kk(e, t[s], n));
  }
  return r;
}
function kk(e, t, n) {
  let r;
  const s = t.split("-");
  do {
    const a = s.join("-");
    r = Nk(e, a, n), s.splice(-1, 1);
  } while (s.length && r === !0);
  return r;
}
function Nk(e, t, n) {
  let r = !1;
  if (!e.includes(t) && (r = !0, t)) {
    r = t[t.length - 1] !== "!";
    const s = t.replace(/!/g, "");
    e.push(s), (Ge(n) || ye(n)) && n[s] && (r = n[s]);
  }
  return r;
}
const Tk = "9.5.0", Oa = -1, Tr = "en-US", va = "", Ei = (e) => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;
function Ik() {
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
function Ck(e) {
  _u = e;
}
let bu;
function Mk(e) {
  bu = e;
}
let yu = null;
const $i = (e) => {
  yu = e;
}, Pk = () => yu;
let Du = null;
const ki = (e) => {
  Du = e;
}, Ak = () => Du;
let Ni = 0;
function Lk(e = {}) {
  const t = Be(e.onWarn) ? e.onWarn : mn, n = re(e.version) ? e.version : Tk, r = re(e.locale) || Be(e.locale) ? e.locale : Tr, s = Be(r) ? Tr : r, a = Ge(e.fallbackLocale) || ye(e.fallbackLocale) || re(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : s, o = ye(e.messages) ? e.messages : { [s]: {} }, i = ye(e.datetimeFormats) ? e.datetimeFormats : { [s]: {} }, l = ye(e.numberFormats) ? e.numberFormats : { [s]: {} }, u = et({}, e.modifiers || {}, Ik()), c = e.pluralRules || {}, p = Be(e.missing) ? e.missing : null, v = Pe(e.missingWarn) || Xn(e.missingWarn) ? e.missingWarn : !0, f = Pe(e.fallbackWarn) || Xn(e.fallbackWarn) ? e.fallbackWarn : !0, $ = !!e.fallbackFormat, g = !!e.unresolving, D = Be(e.postTranslation) ? e.postTranslation : null, d = ye(e.processor) ? e.processor : null, b = Pe(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, k = !!e.escapeParameter, _ = Be(e.messageCompiler) ? e.messageCompiler : gu;
  process.env.NODE_ENV !== "production" && Be(e.messageCompiler) && O$($n(rt.EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER));
  const C = Be(e.messageResolver) ? e.messageResolver : _u || ck, N = Be(e.localeFallbacker) ? e.localeFallbacker : bu || $k, x = $e(e.fallbackContext) ? e.fallbackContext : void 0, P = e, A = $e(P.__datetimeFormatters) ? P.__datetimeFormatters : /* @__PURE__ */ new Map(), S = $e(P.__numberFormatters) ? P.__numberFormatters : /* @__PURE__ */ new Map(), j = $e(P.__meta) ? P.__meta : {};
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
    fallbackFormat: $,
    unresolving: g,
    postTranslation: D,
    processor: d,
    warnHtmlMessage: b,
    escapeParameter: k,
    messageCompiler: _,
    messageResolver: C,
    localeFallbacker: N,
    fallbackContext: x,
    onWarn: t,
    __meta: j
  };
  return Y.datetimeFormats = i, Y.numberFormats = l, Y.__datetimeFormatters = A, Y.__numberFormatters = S, process.env.NODE_ENV !== "production" && (Y.__v_emitter = P.__v_emitter != null ? P.__v_emitter : void 0), (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) && Dk(Y, n, j), Y;
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
  return (n) => Sk(n, e);
}
function Sk(e, t) {
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
const Eu = ce.__EXTEND_POINT__, Ur = Bs(Eu), gt = {
  INVALID_ARGUMENT: Eu,
  INVALID_DATE_ARGUMENT: Ur(),
  INVALID_ISO_DATE_ARGUMENT: Ur(),
  NOT_SUPPORT_NON_STRING_MESSAGE: Ur(),
  __EXTEND_POINT__: Ur()
  // 22
};
function yn(e) {
  return ir(e, null, process.env.NODE_ENV !== "production" ? { messages: xk } : void 0);
}
const xk = {
  [gt.INVALID_ARGUMENT]: "Invalid arguments",
  [gt.INVALID_DATE_ARGUMENT]: "The date provided is an invalid Date object.Make sure your Date represents a valid date.",
  [gt.INVALID_ISO_DATE_ARGUMENT]: "The argument provided is not a valid ISO date string",
  [gt.NOT_SUPPORT_NON_STRING_MESSAGE]: "Not support non-string message"
}, Rk = "Detected HTML in '{source}' message. Recommend not using HTML messages to avoid XSS.";
function Ou(e, t) {
  t && A$(e) && mn(Us(Rk, { source: e }));
}
const $u = (e) => e;
let Fn = /* @__PURE__ */ Object.create(null);
const Jn = (e) => $e(e) && (e.t === 0 || e.type === 0) && ("b" in e || "body" in e);
function ku(e, t = {}) {
  let n = !1;
  const r = t.onError || M$;
  return t.onError = (s) => {
    n = !0, r(s);
  }, { ...nk(e, t), detectError: n };
}
const Yk = (e, t) => {
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
function Fk(e, t) {
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
  const { fallbackFormat: n, postTranslation: r, unresolving: s, messageCompiler: a, fallbackLocale: o, messages: i } = e, [l, u] = za(...t), c = Pe(u.missingWarn) ? u.missingWarn : e.missingWarn, p = Pe(u.fallbackWarn) ? u.fallbackWarn : e.fallbackWarn, v = Pe(u.escapeParameter) ? u.escapeParameter : e.escapeParameter, f = !!u.resolvedMessage, $ = re(u.default) || Pe(u.default) ? Pe(u.default) ? a ? l : () => l : u.default : n ? a ? l : () => l : "", g = n || $ !== "", D = Ws(e, u);
  v && Vk(u);
  let [d, b, k] = f ? [
    l,
    D,
    i[D] || {}
  ] : Nu(e, l, D, o, p, c), _ = d, C = l;
  if (!f && !(re(_) || Jn(_) || Nt(_)) && g && (_ = $, C = _), !f && (!(re(_) || Jn(_) || Nt(_)) || !re(b)))
    return s ? Oa : l;
  if (process.env.NODE_ENV !== "production" && re(_) && e.messageCompiler == null)
    return mn(`The message format compilation is not supported in this build. Because message compiler isn't included. You need to pre-compilation all message format. So translate function return '${l}'.`), l;
  let N = !1;
  const x = () => {
    N = !0;
  }, P = Nt(_) ? _ : Tu(e, l, b, _, C, x);
  if (N)
    return _;
  const A = Hk(e, b, k, u), S = bk(A), j = Uk(e, P, S), Y = r ? r(j, l) : j;
  if (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) {
    const X = {
      timestamp: Date.now(),
      key: re(l) ? l : Nt(_) ? _.key : "",
      locale: b || (Nt(_) ? _.locale : ""),
      format: re(_) ? _ : Nt(_) ? _.source : "",
      message: Y
    };
    X.meta = et({}, e.__meta, Pk() || {}), wk(X);
  }
  return Y;
}
function Vk(e) {
  Ge(e.list) ? e.list = e.list.map((t) => re(t) ? fi(t) : t) : $e(e.named) && Object.keys(e.named).forEach((t) => {
    re(e.named[t]) && (e.named[t] = fi(e.named[t]));
  });
}
function Nu(e, t, n, r, s, a) {
  const { messages: o, onWarn: i, messageResolver: l, localeFallbacker: u } = e, c = u(e, r, n);
  let p = {}, v, f = null, $ = n, g = null;
  const D = "translate";
  for (let d = 0; d < c.length; d++) {
    if (v = g = c[d], process.env.NODE_ENV !== "production" && n !== v && $a(s, t) && i($n(rt.FALLBACK_TO_TRANSLATE, {
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
    if (process.env.NODE_ENV !== "production" && dn && (b = window.performance.now(), k = "intlify-message-resolve-start", _ = "intlify-message-resolve-end", dt && dt(k)), (f = l(p, t)) === null && (f = p[t]), process.env.NODE_ENV !== "production" && dn) {
      const N = window.performance.now(), x = e.__v_emitter;
      x && b && f && x.emit("message-resolve", {
        type: "message-resolve",
        key: t,
        message: f,
        time: N - b,
        groupId: `${D}:${t}`
      }), k && _ && dt && On && (dt(_), On("intlify message resolve", k, _));
    }
    if (re(f) || Jn(f) || Nt(f))
      break;
    const C = Gs(
      e,
      // eslint-disable-line @typescript-eslint/no-explicit-any
      t,
      v,
      a,
      D
    );
    C !== t && (f = C), $ = g;
  }
  return [f, v, p];
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
  const p = o(r, jk(e, n, s, r, i, a));
  if (process.env.NODE_ENV !== "production" && dn) {
    const v = window.performance.now(), f = e.__v_emitter;
    f && l && f.emit("message-compilation", {
      type: "message-compilation",
      message: r,
      time: v - l,
      groupId: `translate:${t}`
    }), u && c && dt && On && (dt(c), On("intlify message compilation", u, c));
  }
  return p.locale = n, p.key = t, p.source = r, p;
}
function Uk(e, t, n) {
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
function jk(e, t, n, r, s, a) {
  return {
    locale: t,
    key: n,
    warnHtmlMessage: s,
    onError: (o) => {
      if (a && a(o), process.env.NODE_ENV !== "production") {
        const i = Bk(r), l = `Message compilation error: ${o.message}`, u = o.location && i && E$(i, o.location.start.offset, o.location.end.offset), c = e.__v_emitter;
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
    onCacheKey: (o) => g$(t, n, o)
  };
}
function Bk(e) {
  var t;
  if (!re(e)) {
    if ((t = e.loc) != null && t.source)
      return e.loc.source;
  }
}
function Hk(e, t, n, r) {
  const { modifiers: s, pluralRules: a, messageResolver: o, fallbackLocale: i, fallbackWarn: l, missingWarn: u, fallbackContext: c } = e, v = {
    locale: t,
    modifiers: s,
    pluralRules: a,
    messages: (f) => {
      let $ = o(n, f);
      if ($ == null && c) {
        const [, , g] = Nu(c, f, t, i, l, u);
        $ = o(g, f);
      }
      if (re($) || Jn($)) {
        let g = !1;
        const d = Tu(e, f, t, $, f, () => {
          g = !0;
        });
        return g ? Ii : d;
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
    return a($n(rt.CANNOT_FORMAT_DATE)), va;
  const [l, u, c, p] = Xa(...t), v = Pe(c.missingWarn) ? c.missingWarn : e.missingWarn, f = Pe(c.fallbackWarn) ? c.fallbackWarn : e.fallbackWarn, $ = !!c.part, g = Ws(e, c), D = o(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    s,
    g
  );
  if (!re(l) || l === "")
    return new Intl.DateTimeFormat(g, p).format(u);
  let d = {}, b, k = null, _ = g, C = null;
  const N = "datetime format";
  for (let A = 0; A < D.length; A++) {
    if (b = C = D[A], process.env.NODE_ENV !== "production" && g !== b && $a(f, l) && a($n(rt.FALLBACK_TO_DATE_FORMAT, {
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
    if (d = n[b] || {}, k = d[l], ye(k))
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
  } else if (b$(t)) {
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
    return a($n(rt.CANNOT_FORMAT_NUMBER)), va;
  const [l, u, c, p] = Za(...t), v = Pe(c.missingWarn) ? c.missingWarn : e.missingWarn, f = Pe(c.fallbackWarn) ? c.fallbackWarn : e.fallbackWarn, $ = !!c.part, g = Ws(e, c), D = o(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    s,
    g
  );
  if (!re(l) || l === "")
    return new Intl.NumberFormat(g, p).format(u);
  let d = {}, b, k = null, _ = g, C = null;
  const N = "number format";
  for (let A = 0; A < D.length; A++) {
    if (b = C = D[A], process.env.NODE_ENV !== "production" && g !== b && $a(f, l) && a($n(rt.FALLBACK_TO_NUMBER_FORMAT, {
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
    if (d = n[b] || {}, k = d[l], ye(k))
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
rk();
/*!
  * vue-i18n v9.5.0
  * (c) 2023 kazuya kawaguchi
  * Released under the MIT License.
  */
const Wk = "9.5.0";
function Gk() {
  typeof __VUE_I18N_FULL_INSTALL__ != "boolean" && (jt().__VUE_I18N_FULL_INSTALL__ = !0), typeof __VUE_I18N_LEGACY_API__ != "boolean" && (jt().__VUE_I18N_LEGACY_API__ = !0), typeof __INTLIFY_JIT_COMPILATION__ != "boolean" && (jt().__INTLIFY_JIT_COMPILATION__ = !1), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (jt().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1), typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (jt().__INTLIFY_PROD_DEVTOOLS__ = !1);
}
const Pu = rt.__EXTEND_POINT__, nn = Bs(Pu), ht = {
  FALLBACK_TO_ROOT: Pu,
  NOT_SUPPORTED_PRESERVE: nn(),
  NOT_SUPPORTED_FORMATTER: nn(),
  NOT_SUPPORTED_PRESERVE_DIRECTIVE: nn(),
  NOT_SUPPORTED_GET_CHOICE_INDEX: nn(),
  COMPONENT_NAME_LEGACY_COMPATIBLE: nn(),
  NOT_FOUND_PARENT_SCOPE: nn(),
  IGNORE_OBJ_FLATTEN: nn(),
  NOTICE_DROP_ALLOW_COMPOSITION: nn()
  // 17
}, Kk = {
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
  return Us(Kk[e], ...t);
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
function Ht(e, ...t) {
  return ir(e, null, process.env.NODE_ENV !== "production" ? { messages: qk, args: t } : void 0);
}
const qk = {
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
}, Ja = /* @__PURE__ */ Jt("__translateVNode"), Qa = /* @__PURE__ */ Jt("__datetimeParts"), es = /* @__PURE__ */ Jt("__numberParts"), ts = /* @__PURE__ */ Jt("__enableEmitter"), ns = /* @__PURE__ */ Jt("__disableEmitter"), zk = Jt("__setPluralRules"), Lu = /* @__PURE__ */ Jt("__injectWithOption"), rs = /* @__PURE__ */ Jt("__dispose");
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
const jr = (e) => !$e(e) || Ge(e);
function wr(e, t) {
  if (jr(e) || jr(t))
    throw Ht(Se.INVALID_VALUE);
  for (const n in e)
    js(e, n) && (jr(e[n]) || jr(t[n]) ? t[n] = e[n] : wr(e[n], t[n]));
}
function Su(e) {
  return e.type;
}
function Xk(e, t, n) {
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
  return ve(Gu, null, e, 0);
}
const Ri = "__INTLIFY_META__";
let Yi = 0;
function Fi(e) {
  return (t, n, r, s) => e(n, r, is() || void 0, s);
}
const Zk = () => {
  const e = is();
  let t = null;
  return e && (t = Su(e)[Ri]) ? { [Ri]: t } : null;
};
function Jk(e = {}, t) {
  const { __root: n, __injectWithOption: r } = e, s = n === void 0;
  let a = Pe(e.inheritLocale) ? e.inheritLocale : !0;
  const o = ne(
    // prettier-ignore
    n && a ? n.locale.value : re(e.locale) ? e.locale : Tr
  ), i = ne(
    // prettier-ignore
    n && a ? n.fallbackLocale.value : re(e.fallbackLocale) || Ge(e.fallbackLocale) || ye(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : o.value
  ), l = ne(qs(o.value, e)), u = ne(ye(e.datetimeFormats) ? e.datetimeFormats : { [o.value]: {} }), c = ne(ye(e.numberFormats) ? e.numberFormats : { [o.value]: {} });
  let p = n ? n.missingWarn : Pe(e.missingWarn) || Xn(e.missingWarn) ? e.missingWarn : !0, v = n ? n.fallbackWarn : Pe(e.fallbackWarn) || Xn(e.fallbackWarn) ? e.fallbackWarn : !0, f = n ? n.fallbackRoot : Pe(e.fallbackRoot) ? e.fallbackRoot : !0, $ = !!e.fallbackFormat, g = Be(e.missing) ? e.missing : null, D = Be(e.missing) ? Fi(e.missing) : null, d = Be(e.postTranslation) ? e.postTranslation : null, b = n ? n.warnHtmlMessage : Pe(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, k = !!e.escapeParameter;
  const _ = n ? n.modifiers : ye(e.modifiers) ? e.modifiers : {};
  let C = e.pluralRules || n && n.pluralRules, N;
  N = (() => {
    s && ki(null);
    const R = {
      version: Wk,
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
      postTranslation: d === null ? void 0 : d,
      warnHtmlMessage: b,
      escapeParameter: k,
      messageResolver: e.messageResolver,
      messageCompiler: e.messageCompiler,
      __meta: { framework: "vue" }
    };
    R.datetimeFormats = u.value, R.numberFormats = c.value, R.__datetimeFormatters = ye(N) ? N.__datetimeFormatters : void 0, R.__numberFormatters = ye(N) ? N.__numberFormatters : void 0, process.env.NODE_ENV !== "production" && (R.__v_emitter = ye(N) ? N.__v_emitter : void 0);
    const H = Lk(R);
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
  const V = (R, H, Fe, Ve, Pt, Qt) => {
    P();
    let wt;
    try {
      (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) && $i(Zk()), s || (N.fallbackContext = n ? Ak() : void 0), wt = R(N);
    } finally {
      (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) && $i(null), s || (N.fallbackContext = void 0);
    }
    if (Qe(wt) && wt === Oa) {
      const [Et, gn] = H();
      if (process.env.NODE_ENV !== "production" && n && re(Et) && W(Fe, gn) && (f && ($a(v, Et) || wu(p, Et)) && mn(Ks(ht.FALLBACK_TO_ROOT, {
        key: Et,
        type: Fe
      })), process.env.NODE_ENV !== "production")) {
        const { __v_emitter: In } = N;
        In && f && In.emit("fallback", {
          type: Fe,
          key: Et,
          to: "global",
          groupId: `${Fe}:${Et}`
        });
      }
      return n && f ? Ve(n) : Pt(Et);
    } else {
      if (Qt(wt))
        return wt;
      throw Ht(Se.UNEXPECTED_RETURN_TYPE);
    }
  };
  function w(...R) {
    return V((H) => Reflect.apply(Ci, null, [H, ...R]), () => za(...R), "translate", (H) => Reflect.apply(H.t, H, [...R]), (H) => H, (H) => re(H));
  }
  function q(...R) {
    const [H, Fe, Ve] = R;
    if (Ve && !$e(Ve))
      throw Ht(Se.INVALID_ARGUMENT);
    return w(H, Fe, et({ resolvedMessage: !0 }, Ve || {}));
  }
  function pe(...R) {
    return V((H) => Reflect.apply(Pi, null, [H, ...R]), () => Xa(...R), "datetime format", (H) => Reflect.apply(H.d, H, [...R]), () => va, (H) => re(H));
  }
  function Ee(...R) {
    return V((H) => Reflect.apply(Li, null, [H, ...R]), () => Za(...R), "number format", (H) => Reflect.apply(H.n, H, [...R]), () => va, (H) => re(H));
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
      const Pt = l.value[Fe[Ve]] || {}, Qt = N.messageResolver(Pt, R);
      if (Qt != null) {
        H = Qt;
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
      return f;
    },
    set fallbackRoot(R) {
      f = R;
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
    [zk]: Ye
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
function Qk({ slots: e }, t) {
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
function eN(e) {
  return Ge(e) && !re(e[0]);
}
function Ru(e, t, n, r) {
  const { slots: s, attrs: a } = t;
  return () => {
    const o = { part: !0 };
    let i = {};
    e.locale && (o.locale = e.locale), re(e.format) ? o.key = e.format : $e(e.format) && (re(e.format.key) && (o.key = e.format.key), i = Object.keys(e.format).reduce((v, f) => n.includes(f) ? et({}, v, { [f]: e.format[f] }) : v, {}));
    const l = r(e.value, o, i);
    let u = [o.key];
    Ge(l) ? u = l.map((v, f) => {
      const $ = s[v.type], g = $ ? $({ [v.type]: v.value, index: f, parts: l }) : [v.value];
      return eN(g) && (g[0].key = `${v.type}-${f}`), g;
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
const tN = /* @__PURE__ */ Jt("global-vue-i18n");
function ka(e = {}) {
  const t = is();
  if (t == null)
    throw Ht(Se.MUST_BE_CALL_SETUP_TOP);
  if (!t.isCE && t.appContext.app != null && !t.appContext.app.__VUE_I18N_SYMBOL__)
    throw Ht(Se.NOT_INSTALLED);
  const n = nN(t), r = aN(n), s = Su(t), a = rN(e, s);
  if (__VUE_I18N_LEGACY_API__ && n.mode === "legacy" && !e.__useComponent) {
    if (!n.allowComposition)
      throw Ht(Se.NOT_AVAILABLE_IN_LEGACY_MODE);
    return lN(t, a, r, e);
  }
  if (a === "global")
    return Xk(r, e, s), r;
  if (a === "parent") {
    let l = sN(n, t, e.__useComponent);
    return l == null && (process.env.NODE_ENV !== "production" && mn(Ks(ht.NOT_FOUND_PARENT_SCOPE)), l = r), l;
  }
  const o = n;
  let i = o.__getInstance(t);
  if (i == null) {
    const l = et({}, e);
    "__i18n" in s && (l.__i18n = s.__i18n), r && (l.__root = r), i = Jk(l), o.__composerExtend && (i[rs] = o.__composerExtend(i)), iN(o, t, i), o.__setInstance(t, i);
  }
  return i;
}
function nN(e) {
  {
    const t = vn(e.isCE ? tN : e.appContext.app.__VUE_I18N_SYMBOL__);
    if (!t)
      throw Ht(e.isCE ? Se.NOT_INSTALLED_WITH_PROVIDE : Se.UNEXPECTED_ERROR);
    return t;
  }
}
function rN(e, t) {
  return Ea(e) ? "__i18n" in t ? "local" : "global" : e.useScope ? e.useScope : "local";
}
function aN(e) {
  return e.mode === "composition" ? e.global : e.global.__composer;
}
function sN(e, t, n = !1) {
  let r = null;
  const s = t.root;
  let a = oN(t, n);
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
function oN(e, t = !1) {
  return e == null ? null : t && e.vnode.ctx || e.parent;
}
function iN(e, t, n) {
  let r = null;
  fn(() => {
    if (process.env.NODE_ENV !== "production" && t.vnode.el) {
      t.vnode.el.__VUE_I18N__ = n, r = $$();
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
function lN(e, t, n, r = {}) {
  const s = t === "local", a = Hu(null);
  if (s && e.proxy && !(e.proxy.$options.i18n || e.proxy.$options.__i18n))
    throw Ht(Se.MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION);
  const o = Pe(r.inheritLocale) ? r.inheritLocale : !re(r.locale), i = ne(
    // prettier-ignore
    !s || o ? n.locale.value : re(r.locale) ? r.locale : Tr
  ), l = ne(
    // prettier-ignore
    !s || o ? n.fallbackLocale.value : re(r.fallbackLocale) || Ge(r.fallbackLocale) || ye(r.fallbackLocale) || r.fallbackLocale === !1 ? r.fallbackLocale : i.value
  ), u = ne(qs(i.value, r)), c = ne(ye(r.datetimeFormats) ? r.datetimeFormats : { [i.value]: {} }), p = ne(ye(r.numberFormats) ? r.numberFormats : { [i.value]: {} }), v = s ? n.missingWarn : Pe(r.missingWarn) || Xn(r.missingWarn) ? r.missingWarn : !0, f = s ? n.fallbackWarn : Pe(r.fallbackWarn) || Xn(r.fallbackWarn) ? r.fallbackWarn : !0, $ = s ? n.fallbackRoot : Pe(r.fallbackRoot) ? r.fallbackRoot : !0, g = !!r.fallbackFormat, D = Be(r.missing) ? r.missing : null, d = Be(r.postTranslation) ? r.postTranslation : null, b = s ? n.warnHtmlMessage : Pe(r.warnHtmlMessage) ? r.warnHtmlMessage : !0, k = !!r.escapeParameter, _ = s ? n.modifiers : ye(r.modifiers) ? r.modifiers : {}, C = r.pluralRules || s && n.pluralRules;
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
      return a.value ? a.value.fallbackWarn : f;
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
    }), m.escapeParameter = k, m.fallbackFormat = g, m.fallbackRoot = $, m.fallbackWarn = f, m.missingWarn = v, m.warnHtmlMessage = b;
  }
  return Wu(() => {
    if (e.proxy == null || e.proxy.$i18n == null)
      throw Ht(Se.NOT_AVAILABLE_COMPOSITION_IN_LEGACY);
    const m = a.value = e.proxy.$i18n.__composer;
    t === "global" ? (i.value = m.locale.value, l.value = m.fallbackLocale.value, u.value = m.messages.value, c.value = m.datetimeFormats.value, p.value = m.numberFormats.value) : s && y(m);
  }), ze;
}
Gk();
__INTLIFY_JIT_COMPILATION__ ? Oi(Fk) : Oi(Yk);
Ck(dk);
Mk(hu);
if (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) {
  const e = jt();
  e.__INTLIFY__ = !0, yk(e.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__);
}
process.env.NODE_ENV;
const uN = { class: "flex flex-col gap-2" }, cN = { class: "flex items-center gap-2 relative pt-2" }, dN = { class: "flex items-center gap-2" }, fN = /* @__PURE__ */ E("span", { class: "p4-b" }, "平台", -1), vN = /* @__PURE__ */ E("option", {
  value: "",
  disabled: ""
}, "請選擇", -1), pN = ["value"], mN = {
  key: 0,
  class: "flex items-center gap-2"
}, hN = /* @__PURE__ */ E("span", { class: "p4-b" }, "層級", -1), gN = /* @__PURE__ */ E("option", {
  value: "",
  disabled: ""
}, "請選擇", -1), _N = ["value"], bN = {
  key: 1,
  class: "flex items-center gap-2"
}, yN = /* @__PURE__ */ E("span", { class: "p4-b" }, "目標", -1), DN = /* @__PURE__ */ E("option", {
  value: "",
  disabled: ""
}, "請選擇", -1), wN = ["value"], EN = {
  key: 0,
  class: "flex flex-col"
}, ON = /* @__PURE__ */ E("span", { class: "p4-b" }, "指定目標", -1), $N = { key: 0 }, kN = {
  key: 0,
  class: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full flex justify-center items-center bg-dark-3 rounded bg-opacity-50 z-[2]"
}, NN = { class: "relative bg-light-5 rounded-xs shadow-01 w-4/5 p-4 min-h-[300px] h-fit" }, TN = /* @__PURE__ */ E("span", { class: "p1-b flex justify-center mb-1" }, "請選擇目標", -1), IN = { class: "flex flex-col gap-2 mt-2" }, CN = ["onClick"], MN = { class: "flex flex-col flex-1" }, PN = { class: "p3-b" }, AN = { class: "p4-r" }, LN = {
  key: 2,
  class: "flex flex-col gap-2"
}, SN = { class: "flex items-center gap-2" }, xN = /* @__PURE__ */ E("span", { class: "p4-b" }, "執行", -1), RN = /* @__PURE__ */ E("option", {
  value: "",
  disabled: ""
}, "請選擇", -1), YN = ["value"], FN = {
  key: 0,
  class: "flex gap-x-2 gap-y-3 flex-wrap"
}, VN = { class: "flex items-center gap-2" }, UN = /* @__PURE__ */ E("span", { class: "p4-b" }, "類型", -1), jN = /* @__PURE__ */ E("option", {
  value: "",
  disabled: ""
}, "請選擇", -1), BN = ["value"], HN = {
  key: 0,
  class: "flex items-center gap-2"
}, WN = /* @__PURE__ */ E("span", { class: "p4-b" }, "調整", -1), GN = /* @__PURE__ */ E("option", {
  value: "",
  disabled: ""
}, "請選擇", -1), KN = ["value"], qN = {
  key: 1,
  class: "flex items-center gap-2"
}, zN = { class: "flex items-center gap-2" }, XN = /* @__PURE__ */ E("span", { class: "p4-b" }, "類型", -1), ZN = /* @__PURE__ */ E("option", {
  value: "",
  disabled: ""
}, "請選擇", -1), JN = ["value"], QN = {
  key: 0,
  class: "flex items-center gap-2"
}, eT = /* @__PURE__ */ E("span", { class: "p4-b" }, "調整", -1), tT = /* @__PURE__ */ E("option", {
  value: "",
  disabled: ""
}, "請選擇", -1), nT = ["value"], rT = {
  key: 1,
  class: "flex items-center gap-2"
}, aT = {
  key: 2,
  class: "flex items-center gap-2 w-full"
}, sT = { class: "flex flex-col gap-2" }, oT = { class: "flex items-center gap-2" }, iT = /* @__PURE__ */ E("label", { for: "maxBudget" }, "設定預算上限", -1), lT = {
  key: 0,
  class: "flex gap-2 items-center"
}, uT = /* @__PURE__ */ E("span", null, "元", -1), cT = { class: "flex items-center gap-2" }, dT = /* @__PURE__ */ E("span", { class: "p4-b" }, "類型", -1), fT = /* @__PURE__ */ E("option", {
  value: "",
  disabled: ""
}, "請選擇", -1), vT = ["value"], pT = {
  key: 0,
  class: "flex items-center gap-2"
}, mT = /* @__PURE__ */ E("span", { class: "p4-b" }, "調整", -1), hT = /* @__PURE__ */ E("option", {
  value: "",
  disabled: ""
}, "請選擇", -1), gT = ["value"], _T = {
  key: 1,
  class: "flex items-center gap-2"
}, bT = {
  key: 2,
  class: "flex items-center gap-2 w-full"
}, yT = { class: "flex flex-col gap-2" }, DT = { class: "flex items-center gap-2" }, wT = /* @__PURE__ */ E("label", {
  for: "maxBudget",
  class: "p3-b"
}, "設定預算下限", -1), ET = {
  key: 0,
  class: "flex gap-2 items-center"
}, OT = /* @__PURE__ */ E("span", null, "元", -1), Lt = "", $T = /* @__PURE__ */ Ae({
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
    }, f = M(() => r.value.adLevel ? r.value.adLevel : ""), $ = (W) => {
      r.value.adLevel = Number(W.target.value), delete r.value.action, delete r.value.target;
    }, g = M(() => r.value.targetType ? r.value.targetType : ""), D = (W) => {
      r.value.targetType = Number(W.target.value), delete r.value.action, delete r.value.target;
    }, d = M(() => r.value.action ? r.value.action : ""), b = (W) => r.value.action = Number(W.target.value), k = M(() => {
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
        E("div", uN, [
          E("div", cN, [
            E("div", {
              class: "cursor-pointer text-dark-4 absolute -top-2.5 -right-1.5 p4-b",
              onClick: Q
            }, " 刪除 "),
            E("label", dN, [
              fN,
              Ce(E("select", {
                class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
                "onUpdate:modelValue": V[1] || (V[1] = (w) => _e(p) ? p.value = w : null),
                onChange: v,
                required: ""
              }, [
                vN,
                (O(!0), I(te, null, me(h(Xe), (w, q) => (O(), I(te, { key: q }, [
                  Number.isInteger(w) ? J("", !0) : (O(), I("option", {
                    key: 0,
                    value: q
                  }, le(w), 9, pN))
                ], 64))), 128))
              ], 544), [
                [je, h(p)]
              ])
            ]),
            h(p) != Lt ? (O(), I("label", mN, [
              hN,
              Ce(E("select", {
                class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
                "onUpdate:modelValue": V[2] || (V[2] = (w) => _e(f) ? f.value = w : null),
                onChange: $,
                required: ""
              }, [
                gN,
                (O(!0), I(te, null, me(h(o), (w, q) => (O(), I(te, { key: q }, [
                  Number.isInteger(w) ? J("", !0) : (O(), I("option", {
                    key: 0,
                    value: q
                  }, le(W.$t(`${h(Xe)[h(p)]}${w}`)), 9, _N))
                ], 64))), 128))
              ], 544), [
                [je, h(f)]
              ])
            ])) : J("", !0),
            h(f) != Lt ? (O(), I("label", bN, [
              yN,
              Ce(E("select", {
                class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
                "onUpdate:modelValue": V[3] || (V[3] = (w) => _e(g) ? g.value = w : null),
                onChange: D,
                required: ""
              }, [
                DN,
                (O(!0), I(te, null, me(h(un), (w, q) => (O(), I(te, { key: q }, [
                  Number.isInteger(w) ? J("", !0) : (O(), I("option", {
                    key: 0,
                    value: q
                  }, le(W.$t(w)), 9, wN))
                ], 64))), 128))
              ], 544), [
                [je, h(g)]
              ])
            ])) : J("", !0)
          ]),
          h(g) === h(un).ForID ? (O(), I("div", EN, [
            E("label", { class: "flex items-center gap-2" }, [
              ON,
              E("div", {
                class: "p4-r px-1.5 py-0.5 text-true-blue-2 rounded bg-true-blue-5 flex w-fit cursor-pointer hover:bg-true-blue-4",
                onClick: X
              }, " 編輯 ")
            ]),
            h(g) === h(un).ForID ? (O(), I("div", $N, [
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
            h(x) ? (O(), I("div", kN, [
              E("div", NN, [
                E("div", {
                  class: "absolute top-1 right-2 cursor-pointer",
                  onClick: V[4] || (V[4] = (w) => x.value = !1)
                }, " X "),
                TN,
                ve(kt, {
                  modelValue: h(K),
                  "onUpdate:modelValue": V[5] || (V[5] = (w) => _e(K) ? K.value = w : null)
                }, null, 8, ["modelValue"]),
                E("div", {
                  class: "mt-2 flex w-full justify-end p4-b text-true-blue-3",
                  onClick: U
                }, " 全選 "),
                E("div", IN, [
                  (O(!0), I(te, null, me(h(Y), (w) => {
                    var q;
                    return O(), I("div", {
                      class: "border border-dark-5 rounded py-1 px-3 flex gap-1 hover:border-transparent hover:bg-true-blue-5 cursor-pointer",
                      key: w.id,
                      onClick: (pe) => P(w)
                    }, [
                      E("div", MN, [
                        E("span", PN, le(w.id), 1),
                        E("span", AN, le(w.name), 1)
                      ]),
                      E("div", {
                        class: He(["rounded h-3 w-3 border", [
                          h(r).target && (q = h(r)) != null && q.target.find((pe) => pe.id === w.id) ? "bg-red-1" : ""
                        ]])
                      }, null, 2)
                    ], 8, CN);
                  }), 128))
                ])
              ])
            ])) : J("", !0)
          ])) : J("", !0),
          h(g) !== Lt ? (O(), I("div", LN, [
            E("label", SN, [
              xN,
              Ce(E("select", {
                class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
                "onUpdate:modelValue": V[6] || (V[6] = (w) => _e(d) ? d.value = w : null),
                onChange: b,
                required: ""
              }, [
                RN,
                (O(!0), I(te, null, me(h(l), (w, q) => (O(), I("option", {
                  key: q,
                  value: w
                }, le(W.$t(q)), 9, YN))), 128))
              ], 544), [
                [je, h(d)]
              ])
            ]),
            h(f) != Lt ? (O(), I("div", FN, [
              h(r).action == h(ae).SetNewBudget ? (O(), I(te, { key: 0 }, [
                E("label", VN, [
                  UN,
                  Ce(E("select", {
                    class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
                    "onUpdate:modelValue": V[7] || (V[7] = (w) => _e(k) ? k.value = w : null),
                    onChange: _,
                    required: ""
                  }, [
                    jN,
                    (O(!0), I(te, null, me(h(Rn), (w, q) => (O(), I(te, { key: q }, [
                      Number.isInteger(w) ? J("", !0) : (O(), I("option", {
                        key: 0,
                        value: w
                      }, le(W.$t(w)), 9, BN))
                    ], 64))), 128))
                  ], 544), [
                    [je, h(k)]
                  ])
                ]),
                h(k) != Lt ? (O(), I("label", HN, [
                  WN,
                  Ce(E("select", {
                    class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
                    "onUpdate:modelValue": V[8] || (V[8] = (w) => _e(C) ? C.value = w : null),
                    onChange: N,
                    required: ""
                  }, [
                    GN,
                    (O(!0), I(te, null, me(h(c), (w, q) => (O(), I("option", {
                      key: q,
                      value: w
                    }, le(W.$t(`action${w}`)), 9, KN))), 128))
                  ], 544), [
                    [je, h(C)]
                  ])
                ])) : J("", !0),
                h(C) != Lt ? (O(), I("label", qN, [
                  ve(kt, {
                    modelValue: h(r).params.value,
                    "onUpdate:modelValue": V[9] || (V[9] = (w) => h(r).params.value = w),
                    type: "number",
                    required: !0
                  }, null, 8, ["modelValue"]),
                  E("span", null, le(h(r).params.valueType === h(se).Percentage ? "%" : "元"), 1)
                ])) : J("", !0)
              ], 64)) : h(r).action == h(ae).IncreaseBudget ? (O(), I(te, { key: 1 }, [
                E("label", zN, [
                  XN,
                  Ce(E("select", {
                    class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
                    "onUpdate:modelValue": V[10] || (V[10] = (w) => _e(k) ? k.value = w : null),
                    onChange: _,
                    required: ""
                  }, [
                    ZN,
                    (O(!0), I(te, null, me(h(Rn), (w, q) => (O(), I(te, { key: q }, [
                      Number.isInteger(w) ? J("", !0) : (O(), I("option", {
                        key: 0,
                        value: w
                      }, le(W.$t(w)), 9, JN))
                    ], 64))), 128))
                  ], 544), [
                    [je, h(k)]
                  ])
                ]),
                h(k) != Lt ? (O(), I("label", QN, [
                  eT,
                  Ce(E("select", {
                    class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
                    "onUpdate:modelValue": V[11] || (V[11] = (w) => _e(C) ? C.value = w : null),
                    onChange: N,
                    required: ""
                  }, [
                    tT,
                    (O(!0), I(te, null, me(h(c), (w, q) => (O(), I("option", {
                      key: q,
                      value: w
                    }, le(W.$t(`action${w}`)), 9, nT))), 128))
                  ], 544), [
                    [je, h(C)]
                  ])
                ])) : J("", !0),
                h(C) != Lt ? (O(), I("label", rT, [
                  ve(kt, {
                    modelValue: h(r).params.value,
                    "onUpdate:modelValue": V[12] || (V[12] = (w) => h(r).params.value = w),
                    type: "number",
                    required: !0
                  }, null, 8, ["modelValue"]),
                  E("span", null, le(h(r).params.valueType === h(se).Percentage ? "%" : "元"), 1)
                ])) : J("", !0),
                h(r).params.valueType === h(se).Percentage ? (O(), I("label", aT, [
                  E("div", sT, [
                    E("div", oT, [
                      Ce(E("input", {
                        type: "checkbox",
                        "onUpdate:modelValue": V[13] || (V[13] = (w) => _e(a) ? a.value = w : null),
                        id: "maxBudget"
                      }, null, 512), [
                        [qr, h(a)]
                      ]),
                      iT,
                      h(a) ? (O(), I("div", lT, [
                        ve(kt, {
                          modelValue: h(r).params.limit,
                          "onUpdate:modelValue": V[14] || (V[14] = (w) => h(r).params.limit = w),
                          type: "number",
                          required: !0
                        }, null, 8, ["modelValue"]),
                        uT
                      ])) : J("", !0)
                    ])
                  ])
                ])) : J("", !0)
              ], 64)) : h(r).action == h(ae).LowerBudget ? (O(), I(te, { key: 2 }, [
                E("label", cT, [
                  dT,
                  Ce(E("select", {
                    class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
                    "onUpdate:modelValue": V[15] || (V[15] = (w) => _e(k) ? k.value = w : null),
                    onChange: _,
                    required: ""
                  }, [
                    fT,
                    (O(!0), I(te, null, me(h(Rn), (w, q) => (O(), I(te, { key: q }, [
                      Number.isInteger(w) ? J("", !0) : (O(), I("option", {
                        key: 0,
                        value: w
                      }, le(W.$t(w)), 9, vT))
                    ], 64))), 128))
                  ], 544), [
                    [je, h(k)]
                  ])
                ]),
                h(k) != Lt ? (O(), I("label", pT, [
                  mT,
                  Ce(E("select", {
                    class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
                    "onUpdate:modelValue": V[16] || (V[16] = (w) => _e(C) ? C.value = w : null),
                    onChange: N
                  }, [
                    hT,
                    (O(!0), I(te, null, me(h(c), (w, q) => (O(), I("option", {
                      key: q,
                      value: w
                    }, le(W.$t(`action${w}`)), 9, gT))), 128))
                  ], 544), [
                    [je, h(C)]
                  ])
                ])) : J("", !0),
                h(C) != Lt ? (O(), I("label", _T, [
                  ve(kt, {
                    modelValue: h(r).params.value,
                    "onUpdate:modelValue": V[17] || (V[17] = (w) => h(r).params.value = w),
                    type: "number",
                    required: !0
                  }, null, 8, ["modelValue"]),
                  E("span", null, le(h(r).params.valueType === h(se).Percentage ? "%" : "元"), 1)
                ])) : J("", !0),
                h(r).params.valueType === h(se).Percentage ? (O(), I("div", bT, [
                  E("div", yT, [
                    E("div", DT, [
                      Ce(E("input", {
                        type: "checkbox",
                        "onUpdate:modelValue": V[18] || (V[18] = (w) => _e(a) ? a.value = w : null),
                        id: "maxBudget"
                      }, null, 512), [
                        [qr, h(a)]
                      ]),
                      wT,
                      h(a) ? (O(), I("div", ET, [
                        ve(kt, {
                          modelValue: h(r).params.limit,
                          "onUpdate:modelValue": V[19] || (V[19] = (w) => h(r).params.limit = w),
                          type: "number",
                          required: !0
                        }, null, 8, ["modelValue"]),
                        OT
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
}), kT = { class: "flex flex-col gap-2 relative pt-2" }, NT = { class: "flex items-center gap-2" }, TT = { class: "flex items-center gap-2" }, IT = /* @__PURE__ */ E("span", { class: "p3-b" }, "平台", -1), CT = /* @__PURE__ */ E("option", {
  value: "",
  disabled: ""
}, "請選擇", -1), MT = ["value"], PT = {
  key: 0,
  class: "flex items-center gap-2"
}, AT = /* @__PURE__ */ E("span", { class: "p3-b" }, "層級", -1), LT = /* @__PURE__ */ E("option", {
  value: "",
  disabled: ""
}, "請選擇", -1), ST = ["value"], xT = {
  key: 1,
  class: "flex items-center gap-2"
}, RT = /* @__PURE__ */ E("span", { class: "p4-b" }, "目標", -1), YT = /* @__PURE__ */ E("option", {
  value: "",
  disabled: ""
}, "請選擇", -1), FT = ["value"], VT = {
  key: 0,
  class: "flex flex-col"
}, UT = /* @__PURE__ */ E("span", { class: "p4-b" }, "指定目標", -1), jT = { key: 0 }, BT = {
  key: 0,
  class: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full flex justify-center items-center bg-dark-3 rounded bg-opacity-50 z-[2]"
}, HT = { class: "relative bg-light-5 rounded-xs shadow-01 w-4/5 p-4 min-h-[300px] h-fit" }, WT = /* @__PURE__ */ E("span", { class: "p1-b flex justify-center mb-1" }, "請選擇目標", -1), GT = { class: "flex flex-col gap-2 mt-2" }, KT = ["onClick"], qT = { class: "flex flex-col flex-1" }, zT = { class: "p3-b" }, XT = { class: "p4-r" }, ZT = {
  key: 2,
  class: "flex items-center gap-1"
}, JT = /* @__PURE__ */ E("span", { class: "p3-b" }, "條件", -1), QT = /* @__PURE__ */ E("option", {
  value: "",
  disabled: ""
}, "請選擇", -1), eI = ["value"], tI = {
  key: 3,
  class: "flex gap-2 flex-wrap"
}, nI = { class: "flex gap-2" }, rI = { class: "flex items-center gap-1" }, aI = /* @__PURE__ */ E("span", { class: "p3-b" }, "運算", -1), sI = /* @__PURE__ */ E("option", {
  value: "",
  disabled: ""
}, "請選擇", -1), oI = ["value"], iI = { key: 0 }, lI = ["onClick"], uI = {
  key: 0,
  class: "flex items-center gap-1"
}, cI = /* @__PURE__ */ E("option", {
  value: "",
  disabled: ""
}, "請選擇", -1), dI = ["value"], fI = {
  key: 1,
  class: "flex items-center gap-1"
}, vI = /* @__PURE__ */ E("option", {
  value: "",
  disabled: ""
}, "請選擇", -1), pI = ["value"], mI = {
  key: 4,
  class: "flex items-center gap-2"
}, hI = /* @__PURE__ */ E("label", { for: "comparison" }, "加入比較區間", -1), rn = "", gI = /* @__PURE__ */ Ae({
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
      r.value.adLevel = Number(K.target.value), p.value != rn && t("update:modelValue", {
        client: a.value,
        adLevel: i.value
      });
    }, u = M(() => r.value.targetType ? r.value.targetType : ""), c = (K) => {
      r.value.targetType = Number(K.target.value), delete r.value.action, delete r.value.target;
    }, p = M(() => r.value.conditionType ? r.value.conditionType : ""), v = (K) => r.value.conditionType = K.target.value, f = M(() => r.value.dateRangeType ? r.value.dateRangeType : ""), $ = (K) => {
      r.value.dateRangeType = Number(K.target.value), Number(K.target.value) !== _r.SpecifiedTime && delete r.value.dateRange;
    }, g = M(() => r.value.operation ? r.value.operation : ""), D = (K) => r.value.operation = K.target.value, d = M(() => r.value.valueType ? r.value.valueType : ""), b = (K) => r.value.valueType = K.target.value, k = {
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
        E("div", kT, [
          E("div", {
            class: "cursor-pointer text-dark-4 absolute -top-2.5 -right-1.5 p4-b",
            onClick: U[0] || (U[0] = (F) => t("removeItem"))
          }, " 刪除 "),
          E("div", NT, [
            E("label", TT, [
              IT,
              Ce(E("select", {
                class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
                "onUpdate:modelValue": U[1] || (U[1] = (F) => _e(a) ? a.value = F : null),
                onChange: o,
                required: ""
              }, [
                CT,
                (O(!0), I(te, null, me(h(Xe), (F, Q) => (O(), I(te, { key: Q }, [
                  Number.isInteger(F) ? J("", !0) : (O(), I("option", {
                    key: 0,
                    value: Q
                  }, le(F), 9, MT))
                ], 64))), 128))
              ], 544), [
                [je, h(a)]
              ])
            ]),
            h(a) != rn ? (O(), I("label", PT, [
              AT,
              Ce(E("select", {
                class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
                "onUpdate:modelValue": U[2] || (U[2] = (F) => _e(i) ? i.value = F : null),
                onChange: l,
                required: ""
              }, [
                LT,
                (O(!0), I(te, null, me(h(s), (F, Q) => (O(), I(te, { key: Q }, [
                  Number.isInteger(F) ? J("", !0) : (O(), I("option", {
                    key: 0,
                    value: Q
                  }, le(K.$t(`${h(Xe)[h(a)]}${F}`)), 9, ST))
                ], 64))), 128))
              ], 544), [
                [je, h(i)]
              ])
            ])) : J("", !0),
            h(i) != rn ? (O(), I("label", xT, [
              RT,
              Ce(E("select", {
                class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
                "onUpdate:modelValue": U[3] || (U[3] = (F) => _e(u) ? u.value = F : null),
                onChange: c,
                required: ""
              }, [
                YT,
                (O(!0), I(te, null, me(h(un), (F, Q) => (O(), I(te, { key: Q }, [
                  Number.isInteger(F) ? J("", !0) : (O(), I("option", {
                    key: 0,
                    value: Q
                  }, le(K.$t(F)), 9, FT))
                ], 64))), 128))
              ], 544), [
                [je, h(u)]
              ])
            ])) : J("", !0)
          ]),
          h(u) === h(un).ForID ? (O(), I("div", VT, [
            E("label", { class: "flex items-center gap-2" }, [
              UT,
              E("div", {
                class: "p4-r px-1.5 py-0.5 text-true-blue-2 rounded bg-true-blue-5 flex w-fit cursor-pointer hover:bg-true-blue-4",
                onClick: j
              }, " 編輯 ")
            ]),
            h(u) === h(un).ForID ? (O(), I("div", jT, [
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
            h(C) ? (O(), I("div", BT, [
              E("div", HT, [
                E("div", {
                  class: "absolute top-1 right-2 cursor-pointer",
                  onClick: U[4] || (U[4] = (F) => C.value = !1)
                }, " X "),
                WT,
                ve(kt, {
                  modelValue: h(Y),
                  "onUpdate:modelValue": U[5] || (U[5] = (F) => _e(Y) ? Y.value = F : null)
                }, null, 8, ["modelValue"]),
                E("div", GT, [
                  (O(!0), I(te, null, me(h(S), (F) => {
                    var Q;
                    return O(), I("div", {
                      class: "border border-dark-5 rounded py-1 px-3 flex gap-1 hover:border-transparent hover:bg-true-blue-5 cursor-pointer",
                      key: F.id,
                      onClick: (W) => N(F)
                    }, [
                      E("div", qT, [
                        E("span", zT, le(F.id), 1),
                        E("span", XT, le(F.name), 1)
                      ]),
                      E("div", {
                        class: He(["rounded h-3 w-3 border", [
                          h(r).target && (Q = h(r)) != null && Q.target.find((W) => W.id === F.id) ? "bg-red-1" : ""
                        ]])
                      }, null, 2)
                    ], 8, KT);
                  }), 128))
                ])
              ])
            ])) : J("", !0)
          ])) : J("", !0),
          h(u) != rn ? (O(), I("label", ZT, [
            JT,
            Ce(E("select", {
              class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
              "onUpdate:modelValue": U[6] || (U[6] = (F) => _e(p) ? p.value = F : null),
              onChange: v,
              required: ""
            }, [
              QT,
              (O(!0), I(te, null, me(h(_), (F, Q) => (O(), I("option", {
                key: Q,
                value: F
              }, le(K.$t(Q)), 9, eI))), 128))
            ], 544), [
              [je, h(p)]
            ])
          ])) : J("", !0),
          h(p) != rn ? (O(), I("div", tI, [
            E("div", nI, [
              E("label", rI, [
                aI,
                Ce(E("select", {
                  class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
                  "onUpdate:modelValue": U[7] || (U[7] = (F) => _e(f) ? f.value = F : null),
                  onChange: $,
                  required: ""
                }, [
                  sI,
                  (O(!0), I(te, null, me(h(_r), (F, Q) => (O(), I(te, { key: Q }, [
                    Number.isInteger(F) ? J("", !0) : (O(), I("option", {
                      key: 0,
                      value: Q
                    }, le(K.$t(F)), 9, oI))
                  ], 64))), 128))
                ], 544), [
                  [je, h(f)]
                ])
              ]),
              h(f) == h(_r).SpecifiedTime ? (O(), I("div", iI, [
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
                    }, le(Q.start && Q.end ? `${Q.start}-${Q.end}` : "請選定執行日期"), 9, lI)
                  ]),
                  _: 1
                }, 8, ["modelValue"])
              ])) : J("", !0)
            ]),
            h(f) != "" ? (O(), I("label", uI, [
              Ce(E("select", {
                class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
                "onUpdate:modelValue": U[9] || (U[9] = (F) => _e(g) ? g.value = F : null),
                onChange: D,
                required: ""
              }, [
                cI,
                (O(!0), I(te, null, me(h(ls), (F, Q) => (O(), I(te, { key: Q }, [
                  Number.isInteger(F) ? J("", !0) : (O(), I("option", {
                    key: 0,
                    value: F
                  }, le(K.$t(Q)), 9, dI))
                ], 64))), 128))
              ], 544), [
                [je, h(g)]
              ])
            ])) : J("", !0),
            h(g) != rn ? (O(), I("label", fI, [
              Ce(E("select", {
                class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
                "onUpdate:modelValue": U[10] || (U[10] = (F) => _e(d) ? d.value = F : null),
                onChange: b,
                required: ""
              }, [
                vI,
                (O(!0), I(te, null, me(h(se), (F, Q) => (O(), I(te, { key: Q }, [
                  Number.isInteger(F) ? J("", !0) : (O(), I("option", {
                    key: 0,
                    value: F
                  }, le(K.$t(`condition${Q}`)), 9, pI))
                ], 64))), 128))
              ], 544), [
                [je, h(d)]
              ])
            ])) : J("", !0),
            h(d) != rn ? (O(), Ke(kt, {
              key: 2,
              modelValue: h(r).value,
              "onUpdate:modelValue": U[11] || (U[11] = (F) => h(r).value = F),
              type: "number",
              required: !0
            }, null, 8, ["modelValue"])) : J("", !0)
          ])) : J("", !0),
          h(p) != rn ? (O(), I("div", mI, [
            Ce(E("input", {
              type: "checkbox",
              "onUpdate:modelValue": U[12] || (U[12] = (F) => K.modelValue.comparison = F),
              id: "comparison"
            }, null, 512), [
              [qr, K.modelValue.comparison]
            ]),
            hI
          ])) : J("", !0)
        ])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), _I = {
  key: 0,
  class: "flex items-center justify-center gap-3"
}, bI = /* @__PURE__ */ E("div", { class: "h-[1px] flex-1 bg-light-3" }, null, -1), yI = /* @__PURE__ */ E("p", { class: "p4-b to-dark-4" }, "且", -1), DI = /* @__PURE__ */ E("div", { class: "h-[1px] flex-1 bg-light-3" }, null, -1), wI = [
  bI,
  yI,
  DI
], EI = {
  key: 0,
  class: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full flex justify-center items-center bg-dark-3 rounded bg-opacity-50 z-[2]"
}, OI = { class: "relative bg-light-5 rounded-xs shadow-01 w-4/5 p-4" }, $I = /* @__PURE__ */ E("span", { class: "p1-b flex justify-center mb-1" }, "請選擇條件", -1), kI = /* @__PURE__ */ Ku('<div class="flex flex-col gap-2 mt-2"><div class="border border-dark-5 rounded py-1 px-3 flex gap-1 hover:border-transparent hover:bg-true-blue-5 cursor-pointer"><div class="flex flex-col flex-1"><span class="p3-b">當帳戶剩餘預算 小於指定金額，執行動作</span><span class="p4-r">ex: 帳戶剩餘預算小於 1000 元</span></div><div class="flex justify-center items-center">O</div></div></div>', 1), NI = /* @__PURE__ */ Ae({
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
        ve(gI, {
          index: u,
          modelValue: h(r)[u],
          "onUpdate:modelValue": (c) => h(r)[u] = c,
          onRemoveItem: (c) => a(u)
        }, null, 8, ["index", "modelValue", "onUpdate:modelValue", "onRemoveItem"]),
        u + 1 !== h(r).length ? (O(), I("div", _I, wI)) : J("", !0)
      ], 64))), 128)),
      E("div", {
        class: "p3-b text-true-blue-3 flex ml-auto w-fit cursor-pointer hover:text-true-blue-2",
        onClick: i[0] || (i[0] = (l) => t.value = !h(t))
      }, " + 加入條件 "),
      h(t) ? (O(), I("div", EI, [
        E("div", OI, [
          E("div", {
            class: "absolute top-1 right-2 cursor-pointer",
            onClick: i[1] || (i[1] = (l) => t.value = !1)
          }, " X "),
          $I,
          ve(kt),
          kI,
          E("div", {
            class: "border ml-auto mt-2 border-true-blue-3 text-true-blue-3 rounded px-1 w-fit p3-r cursor-pointer hover:text-true-blue-2 hover:border-true-blue-2",
            onClick: s
          }, " 自訂 ")
        ])
      ])) : J("", !0)
    ], 64));
  }
}), TI = { class: "flex items-center gap-2" }, II = /* @__PURE__ */ E("span", { class: "p4-b" }, "以電子郵件寄出結果", -1), CI = /* @__PURE__ */ E("option", {
  value: "-2",
  disabled: ""
}, "請選擇", -1), MI = ["value"], PI = /* @__PURE__ */ Ae({
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
      E("label", TI, [
        II,
        Ce(E("select", {
          class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
          "onUpdate:modelValue": s[0] || (s[0] = (a) => h(n).email = a)
        }, [
          CI,
          (O(!0), I(te, null, me(h(us), (a, o) => (O(), I(te, { key: o }, [
            Number.isInteger(a) ? J("", !0) : (O(), I("option", {
              key: 0,
              value: Number(o)
            }, le(r.$t(`mail${a}`)), 9, MI))
          ], 64))), 128))
        ], 512), [
          [je, h(n).email]
        ])
      ])
    ]));
  }
}), Yu = (e) => (qu("data-v-227c6f0b"), e = e(), zu(), e), AI = ["onSubmit"], LI = /* @__PURE__ */ Yu(() => /* @__PURE__ */ E("div", { class: "p1-b" }, "建立自動化規則", -1)), SI = /* @__PURE__ */ Yu(() => /* @__PURE__ */ E("span", { class: "p4-b" }, "規則名稱*", -1)), xI = {
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
    }), (c, p) => r.data ? (O(), I("form", {
      key: 0,
      class: "p-5 rounded border flex flex-col gap-5 relative",
      id: "editor-container",
      onSubmit: Hi(i, ["prevent"])
    }, [
      LI,
      ve(Dr, { title: "基本資料" }, {
        default: qe(() => [
          E("div", null, [
            SI,
            ve(kt, {
              modelValue: h(s).title,
              "onUpdate:modelValue": p[0] || (p[0] = (v) => h(s).title = v),
              maxLength: RI,
              required: !0
            }, null, 8, ["modelValue"])
          ])
        ]),
        _: 1
      }),
      ve(Dr, { title: "執行時間" }, {
        default: qe(() => [
          ve(v$, {
            frequency: h(s).frequency,
            "onUpdate:frequency": p[1] || (p[1] = (v) => h(s).frequency = v),
            interval: h(s).interval,
            "onUpdate:interval": p[2] || (p[2] = (v) => h(s).interval = v)
          }, null, 8, ["frequency", "interval"])
        ]),
        _: 1
      }),
      ve(Dr, { title: "通知" }, {
        default: qe(() => [
          ve(PI)
        ]),
        _: 1
      }),
      ve($T),
      ve(NI),
      h(o).length ? (O(), I("span", xI, "資料未填寫完整")) : J("", !0),
      E("button", {
        ref_key: "submitBtn",
        ref: u,
        class: "p-2 px-3 rounded bg-slate-100 hover:bg-sky-500 hover:text-white"
      }, " 保存 ", 512)
    ], 40, AI)) : J("", !0);
  }
});
const GI = /* @__PURE__ */ cs(YI, [["__scopeId", "data-v-227c6f0b"]]), FI = { class: "bg-white p-3 rounded-xl flex w-4/5 min-h-[80%] max-h-96" }, VI = { class: "flex flex-col gap-2 py-2 px-4" }, UI = /* @__PURE__ */ E("div", { class: "w-[1px] h-auto bg-dark-4" }, null, -1), jI = /* @__PURE__ */ E("div", { class: "flex-1 h-auto bg-red-1" }, null, -1), KI = /* @__PURE__ */ Ae({
  __name: "QuickSetup",
  setup(e) {
    const t = ne(!1), n = () => {
      t.value = !0;
    }, r = ne(["選擇平台", "執行動作", "設定條件", "執行時間"]);
    return (s, a) => {
      const o = ln("vue-final-modal");
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
          Wt(s.$slots, "default")
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
