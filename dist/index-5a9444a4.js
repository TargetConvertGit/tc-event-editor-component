import { defineComponent as fe, openBlock as O, createElementBlock as A, createElementVNode as $, toDisplayString as be, computed as C, unref as m, ref as Y, shallowRef as mi, watch as _e, getCurrentScope as zc, onScopeDispose as Kc, shallowReadonly as Or, mergeProps as tt, cloneVNode as uv, h as Kt, toRefs as Kr, getCurrentInstance as Rt, reactive as Va, mergeDefaults as qc, watchEffect as Et, normalizeStyle as Hn, createVNode as se, withCtx as he, renderSlot as Re, markRaw as Tl, onUnmounted as Jn, createBlock as we, readonly as cv, effectScope as Zc, Fragment as ie, nextTick as bt, onBeforeUnmount as Xc, onMounted as Yt, withKeys as Ss, withModifiers as Ta, createCommentVNode as Z, resolveDynamicComponent as Ho, normalizeProps as Lr, guardReactiveProps as hi, inject as Be, provide as qt, customRef as Jc, onBeforeUpdate as dv, onUpdated as fv, toHandlerKey as pv, camelize as Qc, Teleport as gi, renderList as Ae, normalizeClass as Ie, withDirectives as st, toRef as ps, resolveComponent as rr, Transition as yi, createTextVNode as Gn, isRef as He, resolveDirective as vv, toHandlers as mv, vModelCheckbox as ho, onBeforeMount as hv, Text as gv, vModelSelect as Nt, defineAsyncComponent as yv } from "vue";
let ed = "", td = "";
function r3(e) {
  ed = e;
}
function a3(e) {
  td = e;
}
function go() {
  return ed;
}
function yo() {
  return td;
}
class bv {
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
var bo = /* @__PURE__ */ ((e) => (e[e.None = -1] = "None", e[e.ConditionMet = 2] = "ConditionMet", e[e.All = 3] = "All", e[e.Error = 4] = "Error", e))(bo || {}), nd = /* @__PURE__ */ ((e) => (e[e.Off = 0] = "Off", e[e.On = 1] = "On", e))(nd || {}), Ge = /* @__PURE__ */ ((e) => (e[e.Google = 1] = "Google", e[e.Facebook = 2] = "Facebook", e))(Ge || {}), Gt = /* @__PURE__ */ ((e) => (e[e.Campaign = 2] = "Campaign", e[e.AdGroup = 3] = "AdGroup", e[e.AdTag = 5] = "AdTag", e))(Gt || {}), yt = /* @__PURE__ */ ((e) => (e[e.Campaign = 2] = "Campaign", e[e.AdGroup = 3] = "AdGroup", e[e.Ad = 4] = "Ad", e[e.AdTag = 5] = "AdTag", e))(yt || {}), Pt = /* @__PURE__ */ ((e) => (e[e.ForAll = 1] = "ForAll", e[e.ForID = 2] = "ForID", e[e.ForActive = 3] = "ForActive", e))(Pt || {}), Tr = /* @__PURE__ */ ((e) => (e[e.Account = 1] = "Account", e[e.Campaign = 2] = "Campaign", e[e.AdGroup = 3] = "AdGroup", e))(Tr || {}), Cr = /* @__PURE__ */ ((e) => (e[e.Account = 1] = "Account", e[e.Campaign = 2] = "Campaign", e[e.AdGroup = 3] = "AdGroup", e))(Cr || {}), Ve = /* @__PURE__ */ ((e) => (e[e.Never = -1] = "Never", e[e.Hour = 1] = "Hour", e[e.Day = 2] = "Day", e[e.Week = 3] = "Week", e[e.Month = 4] = "Month", e[e.Annual = 5] = "Annual", e))(Ve || {}), At = /* @__PURE__ */ ((e) => (e[e.Sunday = 0] = "Sunday", e[e.Monday = 1] = "Monday", e[e.Tuesday = 2] = "Tuesday", e[e.Wednesday = 3] = "Wednesday", e[e.Thursday = 4] = "Thursday", e[e.Friday = 5] = "Friday", e[e.Saturday = 6] = "Saturday", e[e.Weekday = -1] = "Weekday", e[e.Weekend = -2] = "Weekend", e))(At || {}), bn = /* @__PURE__ */ ((e) => (e[e.First = 1] = "First", e[e.Second = 2] = "Second", e[e.Third = 3] = "Third", e[e.Fourth = 4] = "Fourth", e[e.Fifth = 5] = "Fifth", e[e.Last = -1] = "Last", e))(bn || {}), gt = /* @__PURE__ */ ((e) => (e[e.January = 1] = "January", e[e.February = 2] = "February", e[e.March = 3] = "March", e[e.April = 4] = "April", e[e.May = 5] = "May", e[e.June = 6] = "June", e[e.July = 7] = "July", e[e.August = 8] = "August", e[e.September = 9] = "September", e[e.October = 10] = "October", e[e.November = 11] = "November", e[e.December = 12] = "December", e))(gt || {}), ge = /* @__PURE__ */ ((e) => (e[e.SetNewBudget = 1] = "SetNewBudget", e[e.IncreaseBudget = 2] = "IncreaseBudget", e[e.LowerBudget = 3] = "LowerBudget", e[e.OpenProject = 4] = "OpenProject", e[e.SuspendProject = 5] = "SuspendProject", e[e.None = -1] = "None", e))(ge || {}), Oa = /* @__PURE__ */ ((e) => (e.DailyBudget = "dailyBudget", e.TotalBudget = "totalBudget", e))(Oa || {}), $e = /* @__PURE__ */ ((e) => (e.Value = "value", e.Percentage = "percentage", e))($e || {}), De = /* @__PURE__ */ ((e) => (e.BudgetRemaining = "accountBudget", e.BudgetCap = "budgetCap", e.Clicks = "clicks", e.Impressions = "impressions", e.Cpc = "cpc", e.Spend = "cost", e.Conversions = "conversions", e.ConversionSpend = "conversionsValue", e.ReturnOnADSpending = "roas", e))(De || {}), rn = /* @__PURE__ */ ((e) => (e[e.Today = 1] = "Today", e[e.Yesterday = 2] = "Yesterday", e[e.Last3Days = 3] = "Last3Days", e[e.Last7Days = 4] = "Last7Days", e[e.ThisMonth = 5] = "ThisMonth", e[e.SpecifiedTime = -1] = "SpecifiedTime", e))(rn || {}), bi = /* @__PURE__ */ ((e) => (e.MoreThan = ">", e.GreaterOrEqualTo = ">=", e.Equal = "==", e.LessThan = "<", e.LessThanOrEqualTo = "<=", e))(bi || {}), _i = /* @__PURE__ */ ((e) => (e[e.AbnormalityOrError = 1] = "AbnormalityOrError", e[e.Error = 2] = "Error", e[e.None = -1] = "None", e))(_i || {});
const o3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ActionType: ge,
  AdLevelTypeFacebook: yt,
  AdLevelTypeGoogle: Gt,
  BudgetType: Oa,
  ClientType: Ge,
  ConditionAdLevelTypeFacebook: Cr,
  ConditionAdLevelTypeGoogle: Tr,
  ConditionType: De,
  DateRangeType: rn,
  EmailNotify: bo,
  EventActionTargetType: Pt,
  EventHelper: bv,
  FrequencyType: Ve,
  MonthType: gt,
  OperationType: bi,
  ToggleNotify: nd,
  ValueType: $e,
  WeekOrdinalWordsType: bn,
  WeekdaysType: At,
  emailType: _i
}, Symbol.toStringTag, { value: "Module" })), _v = { class: "flex" }, wv = ["checked", "id"], Ev = ["for"], Ov = /* @__PURE__ */ fe({
  __name: "CheckBox",
  props: {
    label: {},
    checked: { type: Boolean },
    fieldId: {}
  },
  emits: ["update:checked"],
  setup(e, { emit: t }) {
    return (n, r) => (O(), A("div", _v, [
      $("input", {
        onInput: r[0] || (r[0] = (a) => n.$emit("update:checked", a.target.checked)),
        type: "checkbox",
        checked: n.checked,
        id: n.fieldId,
        class: "hidden"
      }, null, 40, wv),
      $("label", {
        for: n.fieldId,
        class: "p3-b text-dark-3 cursor-pointer rounded hover:bg-light-4 shadow-01 px-1 py-0.5 flex justify-center items-center min-w-[1.75rem] min-h-[1.75rem]"
      }, be(n.label), 9, Ev)
    ]));
  }
});
const rd = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, a] of t)
    n[r] = a;
  return n;
}, Cl = /* @__PURE__ */ rd(Ov, [["__scopeId", "data-v-4f6ab498"]]), fa = {
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
function Dv(e, t = !1) {
  const n = new Date(e.start).toLocaleString("zh-TW", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    hour12: !1
  }), r = e.due ? new Date(e.due).toLocaleString("zh-TW", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    hour12: !1
  }) : null;
  if (e.frequency === Ve.Never)
    return `於 ${n} 起`;
  const a = fa.frequency[Ve[e.frequency]], o = e.weekdays ? e.weekdays.map((d) => fa.weekdays[At[d]]).join("、") : "", s = e.weekOrdinal ? e.weekOrdinal.map((d) => fa.weekOrdinal[bn[d]]).join("、") : "", i = e.monthDate ? `${e.monthDate.join("、")}號`.replace("-1", "最後一天") : "", l = e.yearMonths ? `${e.yearMonths.sort((d, f) => f - d).reverse().join("、")}月` : "";
  let c = `於 ${n} 起，${fa.every}${e.interval}${a}`, u = `${fa.every}${e.interval}${a}`;
  if (s || o || i || l) {
    c += "的", u += "的";
    const d = [];
    l && d.push(`${l}的`), i && d.push(i), s && d.push(`${s}的`), o && d.push(o), c += d.join(""), u += d.join("");
  }
  return r && (c += `，並於 ${r} 結束循環`), t ? u : c;
}
const kv = ["top", "right", "bottom", "left"], zn = Math.min, Ot = Math.max, _o = Math.round, Za = Math.floor, Kn = (e) => ({
  x: e,
  y: e
}), $v = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, xv = {
  start: "end",
  end: "start"
};
function Is(e, t, n) {
  return Ot(e, zn(t, n));
}
function On(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Dn(e) {
  return e.split("-")[0];
}
function qr(e) {
  return e.split("-")[1];
}
function wi(e) {
  return e === "x" ? "y" : "x";
}
function Ei(e) {
  return e === "y" ? "height" : "width";
}
function Zr(e) {
  return ["top", "bottom"].includes(Dn(e)) ? "y" : "x";
}
function Oi(e) {
  return wi(Zr(e));
}
function Tv(e, t, n) {
  n === void 0 && (n = !1);
  const r = qr(e), a = Oi(e), o = Ei(a);
  let s = a === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[o] > t.floating[o] && (s = wo(s)), [s, wo(s)];
}
function Cv(e) {
  const t = wo(e);
  return [Ms(e), t, Ms(t)];
}
function Ms(e) {
  return e.replace(/start|end/g, (t) => xv[t]);
}
function Av(e, t, n) {
  const r = ["left", "right"], a = ["right", "left"], o = ["top", "bottom"], s = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? a : r : t ? r : a;
    case "left":
    case "right":
      return t ? o : s;
    default:
      return [];
  }
}
function Nv(e, t, n, r) {
  const a = qr(e);
  let o = Av(Dn(e), n === "start", r);
  return a && (o = o.map((s) => s + "-" + a), t && (o = o.concat(o.map(Ms)))), o;
}
function wo(e) {
  return e.replace(/left|right|bottom|top/g, (t) => $v[t]);
}
function Pv(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function ad(e) {
  return typeof e != "number" ? Pv(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Eo(e) {
  return {
    ...e,
    top: e.y,
    left: e.x,
    right: e.x + e.width,
    bottom: e.y + e.height
  };
}
function Al(e, t, n) {
  let {
    reference: r,
    floating: a
  } = e;
  const o = Zr(t), s = Oi(t), i = Ei(s), l = Dn(t), c = o === "y", u = r.x + r.width / 2 - a.width / 2, d = r.y + r.height / 2 - a.height / 2, f = r[i] / 2 - a[i] / 2;
  let p;
  switch (l) {
    case "top":
      p = {
        x: u,
        y: r.y - a.height
      };
      break;
    case "bottom":
      p = {
        x: u,
        y: r.y + r.height
      };
      break;
    case "right":
      p = {
        x: r.x + r.width,
        y: d
      };
      break;
    case "left":
      p = {
        x: r.x - a.width,
        y: d
      };
      break;
    default:
      p = {
        x: r.x,
        y: r.y
      };
  }
  switch (qr(t)) {
    case "start":
      p[s] -= f * (n && c ? -1 : 1);
      break;
    case "end":
      p[s] += f * (n && c ? -1 : 1);
      break;
  }
  return p;
}
const Sv = async (e, t, n) => {
  const {
    placement: r = "bottom",
    strategy: a = "absolute",
    middleware: o = [],
    platform: s
  } = n, i = o.filter(Boolean), l = await (s.isRTL == null ? void 0 : s.isRTL(t));
  let c = await s.getElementRects({
    reference: e,
    floating: t,
    strategy: a
  }), {
    x: u,
    y: d
  } = Al(c, r, l), f = r, p = {}, h = 0;
  for (let g = 0; g < i.length; g++) {
    const {
      name: y,
      fn: v
    } = i[g], {
      x: b,
      y: E,
      data: _,
      reset: T
    } = await v({
      x: u,
      y: d,
      initialPlacement: r,
      placement: f,
      strategy: a,
      middlewareData: p,
      rects: c,
      platform: s,
      elements: {
        reference: e,
        floating: t
      }
    });
    if (u = b ?? u, d = E ?? d, p = {
      ...p,
      [y]: {
        ...p[y],
        ..._
      }
    }, T && h <= 50) {
      h++, typeof T == "object" && (T.placement && (f = T.placement), T.rects && (c = T.rects === !0 ? await s.getElementRects({
        reference: e,
        floating: t,
        strategy: a
      }) : T.rects), {
        x: u,
        y: d
      } = Al(c, f, l)), g = -1;
      continue;
    }
  }
  return {
    x: u,
    y: d,
    placement: f,
    strategy: a,
    middlewareData: p
  };
};
async function Ca(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: r,
    y: a,
    platform: o,
    rects: s,
    elements: i,
    strategy: l
  } = e, {
    boundary: c = "clippingAncestors",
    rootBoundary: u = "viewport",
    elementContext: d = "floating",
    altBoundary: f = !1,
    padding: p = 0
  } = On(t, e), h = ad(p), y = i[f ? d === "floating" ? "reference" : "floating" : d], v = Eo(await o.getClippingRect({
    element: (n = await (o.isElement == null ? void 0 : o.isElement(y))) == null || n ? y : y.contextElement || await (o.getDocumentElement == null ? void 0 : o.getDocumentElement(i.floating)),
    boundary: c,
    rootBoundary: u,
    strategy: l
  })), b = d === "floating" ? {
    ...s.floating,
    x: r,
    y: a
  } : s.reference, E = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(i.floating)), _ = await (o.isElement == null ? void 0 : o.isElement(E)) ? await (o.getScale == null ? void 0 : o.getScale(E)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, T = Eo(o.convertOffsetParentRelativeRectToViewportRelativeRect ? await o.convertOffsetParentRelativeRectToViewportRelativeRect({
    rect: b,
    offsetParent: E,
    strategy: l
  }) : b);
  return {
    top: (v.top - T.top + h.top) / _.y,
    bottom: (T.bottom - v.bottom + h.bottom) / _.y,
    left: (v.left - T.left + h.left) / _.x,
    right: (T.right - v.right + h.right) / _.x
  };
}
const Iv = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: n,
      y: r,
      placement: a,
      rects: o,
      platform: s,
      elements: i,
      middlewareData: l
    } = t, {
      element: c,
      padding: u = 0
    } = On(e, t) || {};
    if (c == null)
      return {};
    const d = ad(u), f = {
      x: n,
      y: r
    }, p = Oi(a), h = Ei(p), g = await s.getDimensions(c), y = p === "y", v = y ? "top" : "left", b = y ? "bottom" : "right", E = y ? "clientHeight" : "clientWidth", _ = o.reference[h] + o.reference[p] - f[p] - o.floating[h], T = f[p] - o.reference[p], D = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(c));
    let N = D ? D[E] : 0;
    (!N || !await (s.isElement == null ? void 0 : s.isElement(D))) && (N = i.floating[E] || o.floating[h]);
    const I = _ / 2 - T / 2, L = N / 2 - g[h] / 2 - 1, x = zn(d[v], L), R = zn(d[b], L), P = x, G = N - g[h] - R, ee = N / 2 - g[h] / 2 + I, X = Is(P, ee, G), ae = !l.arrow && qr(a) != null && ee != X && o.reference[h] / 2 - (ee < P ? x : R) - g[h] / 2 < 0, le = ae ? ee < P ? ee - P : ee - G : 0;
    return {
      [p]: f[p] + le,
      data: {
        [p]: X,
        centerOffset: ee - X - le,
        ...ae && {
          alignmentOffset: le
        }
      },
      reset: ae
    };
  }
}), Mv = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: a,
        middlewareData: o,
        rects: s,
        initialPlacement: i,
        platform: l,
        elements: c
      } = t, {
        mainAxis: u = !0,
        crossAxis: d = !0,
        fallbackPlacements: f,
        fallbackStrategy: p = "bestFit",
        fallbackAxisSideDirection: h = "none",
        flipAlignment: g = !0,
        ...y
      } = On(e, t);
      if ((n = o.arrow) != null && n.alignmentOffset)
        return {};
      const v = Dn(a), b = Dn(i) === i, E = await (l.isRTL == null ? void 0 : l.isRTL(c.floating)), _ = f || (b || !g ? [wo(i)] : Cv(i));
      !f && h !== "none" && _.push(...Nv(i, g, h, E));
      const T = [i, ..._], D = await Ca(t, y), N = [];
      let I = ((r = o.flip) == null ? void 0 : r.overflows) || [];
      if (u && N.push(D[v]), d) {
        const P = Tv(a, s, E);
        N.push(D[P[0]], D[P[1]]);
      }
      if (I = [...I, {
        placement: a,
        overflows: N
      }], !N.every((P) => P <= 0)) {
        var L, x;
        const P = (((L = o.flip) == null ? void 0 : L.index) || 0) + 1, G = T[P];
        if (G)
          return {
            data: {
              index: P,
              overflows: I
            },
            reset: {
              placement: G
            }
          };
        let ee = (x = I.filter((X) => X.overflows[0] <= 0).sort((X, ae) => X.overflows[1] - ae.overflows[1])[0]) == null ? void 0 : x.placement;
        if (!ee)
          switch (p) {
            case "bestFit": {
              var R;
              const X = (R = I.map((ae) => [ae.placement, ae.overflows.filter((le) => le > 0).reduce((le, Ee) => le + Ee, 0)]).sort((ae, le) => ae[1] - le[1])[0]) == null ? void 0 : R[0];
              X && (ee = X);
              break;
            }
            case "initialPlacement":
              ee = i;
              break;
          }
        if (a !== ee)
          return {
            reset: {
              placement: ee
            }
          };
      }
      return {};
    }
  };
};
function Nl(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function Pl(e) {
  return kv.some((t) => e[t] >= 0);
}
const Lv = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: n
      } = t, {
        strategy: r = "referenceHidden",
        ...a
      } = On(e, t);
      switch (r) {
        case "referenceHidden": {
          const o = await Ca(t, {
            ...a,
            elementContext: "reference"
          }), s = Nl(o, n.reference);
          return {
            data: {
              referenceHiddenOffsets: s,
              referenceHidden: Pl(s)
            }
          };
        }
        case "escaped": {
          const o = await Ca(t, {
            ...a,
            altBoundary: !0
          }), s = Nl(o, n.floating);
          return {
            data: {
              escapedOffsets: s,
              escaped: Pl(s)
            }
          };
        }
        default:
          return {};
      }
    }
  };
};
async function Rv(e, t) {
  const {
    placement: n,
    platform: r,
    elements: a
  } = e, o = await (r.isRTL == null ? void 0 : r.isRTL(a.floating)), s = Dn(n), i = qr(n), l = Zr(n) === "y", c = ["left", "top"].includes(s) ? -1 : 1, u = o && l ? -1 : 1, d = On(t, e);
  let {
    mainAxis: f,
    crossAxis: p,
    alignmentAxis: h
  } = typeof d == "number" ? {
    mainAxis: d,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...d
  };
  return i && typeof h == "number" && (p = i === "end" ? h * -1 : h), l ? {
    x: p * u,
    y: f * c
  } : {
    x: f * c,
    y: p * u
  };
}
const Fv = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: r
      } = t, a = await Rv(t, e);
      return {
        x: n + a.x,
        y: r + a.y,
        data: a
      };
    }
  };
}, Vv = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: r,
        placement: a
      } = t, {
        mainAxis: o = !0,
        crossAxis: s = !1,
        limiter: i = {
          fn: (y) => {
            let {
              x: v,
              y: b
            } = y;
            return {
              x: v,
              y: b
            };
          }
        },
        ...l
      } = On(e, t), c = {
        x: n,
        y: r
      }, u = await Ca(t, l), d = Zr(Dn(a)), f = wi(d);
      let p = c[f], h = c[d];
      if (o) {
        const y = f === "y" ? "top" : "left", v = f === "y" ? "bottom" : "right", b = p + u[y], E = p - u[v];
        p = Is(b, p, E);
      }
      if (s) {
        const y = d === "y" ? "top" : "left", v = d === "y" ? "bottom" : "right", b = h + u[y], E = h - u[v];
        h = Is(b, h, E);
      }
      const g = i.fn({
        ...t,
        [f]: p,
        [d]: h
      });
      return {
        ...g,
        data: {
          x: g.x - n,
          y: g.y - r
        }
      };
    }
  };
}, Bv = function(e) {
  return e === void 0 && (e = {}), {
    options: e,
    fn(t) {
      const {
        x: n,
        y: r,
        placement: a,
        rects: o,
        middlewareData: s
      } = t, {
        offset: i = 0,
        mainAxis: l = !0,
        crossAxis: c = !0
      } = On(e, t), u = {
        x: n,
        y: r
      }, d = Zr(a), f = wi(d);
      let p = u[f], h = u[d];
      const g = On(i, t), y = typeof g == "number" ? {
        mainAxis: g,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...g
      };
      if (l) {
        const E = f === "y" ? "height" : "width", _ = o.reference[f] - o.floating[E] + y.mainAxis, T = o.reference[f] + o.reference[E] - y.mainAxis;
        p < _ ? p = _ : p > T && (p = T);
      }
      if (c) {
        var v, b;
        const E = f === "y" ? "width" : "height", _ = ["top", "left"].includes(Dn(a)), T = o.reference[d] - o.floating[E] + (_ && ((v = s.offset) == null ? void 0 : v[d]) || 0) + (_ ? 0 : y.crossAxis), D = o.reference[d] + o.reference[E] + (_ ? 0 : ((b = s.offset) == null ? void 0 : b[d]) || 0) - (_ ? y.crossAxis : 0);
        h < T ? h = T : h > D && (h = D);
      }
      return {
        [f]: p,
        [d]: h
      };
    }
  };
}, Yv = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      const {
        placement: n,
        rects: r,
        platform: a,
        elements: o
      } = t, {
        apply: s = () => {
        },
        ...i
      } = On(e, t), l = await Ca(t, i), c = Dn(n), u = qr(n), d = Zr(n) === "y", {
        width: f,
        height: p
      } = r.floating;
      let h, g;
      c === "top" || c === "bottom" ? (h = c, g = u === (await (a.isRTL == null ? void 0 : a.isRTL(o.floating)) ? "start" : "end") ? "left" : "right") : (g = c, h = u === "end" ? "top" : "bottom");
      const y = p - l[h], v = f - l[g], b = !t.middlewareData.shift;
      let E = y, _ = v;
      if (d) {
        const D = f - l.left - l.right;
        _ = u || b ? zn(v, D) : D;
      } else {
        const D = p - l.top - l.bottom;
        E = u || b ? zn(y, D) : D;
      }
      if (b && !u) {
        const D = Ot(l.left, 0), N = Ot(l.right, 0), I = Ot(l.top, 0), L = Ot(l.bottom, 0);
        d ? _ = f - 2 * (D !== 0 || N !== 0 ? D + N : Ot(l.left, l.right)) : E = p - 2 * (I !== 0 || L !== 0 ? I + L : Ot(l.top, l.bottom));
      }
      await s({
        ...t,
        availableWidth: _,
        availableHeight: E
      });
      const T = await a.getDimensions(o.floating);
      return f !== T.width || p !== T.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function qn(e) {
  return od(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function $t(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function An(e) {
  var t;
  return (t = (od(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function od(e) {
  return e instanceof Node || e instanceof $t(e).Node;
}
function kn(e) {
  return e instanceof Element || e instanceof $t(e).Element;
}
function un(e) {
  return e instanceof HTMLElement || e instanceof $t(e).HTMLElement;
}
function Sl(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof $t(e).ShadowRoot;
}
function Ba(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: a
  } = Ft(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(a);
}
function Uv(e) {
  return ["table", "td", "th"].includes(qn(e));
}
function Di(e) {
  const t = ki(), n = Ft(e);
  return n.transform !== "none" || n.perspective !== "none" || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((r) => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some((r) => (n.contain || "").includes(r));
}
function jv(e) {
  let t = Rr(e);
  for (; un(t) && !Wo(t); ) {
    if (Di(t))
      return t;
    t = Rr(t);
  }
  return null;
}
function ki() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function Wo(e) {
  return ["html", "body", "#document"].includes(qn(e));
}
function Ft(e) {
  return $t(e).getComputedStyle(e);
}
function Go(e) {
  return kn(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.pageXOffset,
    scrollTop: e.pageYOffset
  };
}
function Rr(e) {
  if (qn(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Sl(e) && e.host || // Fallback.
    An(e)
  );
  return Sl(t) ? t.host : t;
}
function sd(e) {
  const t = Rr(e);
  return Wo(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : un(t) && Ba(t) ? t : sd(t);
}
function Aa(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const a = sd(e), o = a === ((r = e.ownerDocument) == null ? void 0 : r.body), s = $t(a);
  return o ? t.concat(s, s.visualViewport || [], Ba(a) ? a : [], s.frameElement && n ? Aa(s.frameElement) : []) : t.concat(a, Aa(a, [], n));
}
function id(e) {
  const t = Ft(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const a = un(e), o = a ? e.offsetWidth : n, s = a ? e.offsetHeight : r, i = _o(n) !== o || _o(r) !== s;
  return i && (n = o, r = s), {
    width: n,
    height: r,
    $: i
  };
}
function $i(e) {
  return kn(e) ? e : e.contextElement;
}
function Pr(e) {
  const t = $i(e);
  if (!un(t))
    return Kn(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: a,
    $: o
  } = id(t);
  let s = (o ? _o(n.width) : n.width) / r, i = (o ? _o(n.height) : n.height) / a;
  return (!s || !Number.isFinite(s)) && (s = 1), (!i || !Number.isFinite(i)) && (i = 1), {
    x: s,
    y: i
  };
}
const Hv = /* @__PURE__ */ Kn(0);
function ld(e) {
  const t = $t(e);
  return !ki() || !t.visualViewport ? Hv : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function Wv(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== $t(e) ? !1 : t;
}
function ur(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const a = e.getBoundingClientRect(), o = $i(e);
  let s = Kn(1);
  t && (r ? kn(r) && (s = Pr(r)) : s = Pr(e));
  const i = Wv(o, n, r) ? ld(o) : Kn(0);
  let l = (a.left + i.x) / s.x, c = (a.top + i.y) / s.y, u = a.width / s.x, d = a.height / s.y;
  if (o) {
    const f = $t(o), p = r && kn(r) ? $t(r) : r;
    let h = f.frameElement;
    for (; h && r && p !== f; ) {
      const g = Pr(h), y = h.getBoundingClientRect(), v = Ft(h), b = y.left + (h.clientLeft + parseFloat(v.paddingLeft)) * g.x, E = y.top + (h.clientTop + parseFloat(v.paddingTop)) * g.y;
      l *= g.x, c *= g.y, u *= g.x, d *= g.y, l += b, c += E, h = $t(h).frameElement;
    }
  }
  return Eo({
    width: u,
    height: d,
    x: l,
    y: c
  });
}
function Gv(e) {
  let {
    rect: t,
    offsetParent: n,
    strategy: r
  } = e;
  const a = un(n), o = An(n);
  if (n === o)
    return t;
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  }, i = Kn(1);
  const l = Kn(0);
  if ((a || !a && r !== "fixed") && ((qn(n) !== "body" || Ba(o)) && (s = Go(n)), un(n))) {
    const c = ur(n);
    i = Pr(n), l.x = c.x + n.clientLeft, l.y = c.y + n.clientTop;
  }
  return {
    width: t.width * i.x,
    height: t.height * i.y,
    x: t.x * i.x - s.scrollLeft * i.x + l.x,
    y: t.y * i.y - s.scrollTop * i.y + l.y
  };
}
function zv(e) {
  return Array.from(e.getClientRects());
}
function ud(e) {
  return ur(An(e)).left + Go(e).scrollLeft;
}
function Kv(e) {
  const t = An(e), n = Go(e), r = e.ownerDocument.body, a = Ot(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), o = Ot(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + ud(e);
  const i = -n.scrollTop;
  return Ft(r).direction === "rtl" && (s += Ot(t.clientWidth, r.clientWidth) - a), {
    width: a,
    height: o,
    x: s,
    y: i
  };
}
function qv(e, t) {
  const n = $t(e), r = An(e), a = n.visualViewport;
  let o = r.clientWidth, s = r.clientHeight, i = 0, l = 0;
  if (a) {
    o = a.width, s = a.height;
    const c = ki();
    (!c || c && t === "fixed") && (i = a.offsetLeft, l = a.offsetTop);
  }
  return {
    width: o,
    height: s,
    x: i,
    y: l
  };
}
function Zv(e, t) {
  const n = ur(e, !0, t === "fixed"), r = n.top + e.clientTop, a = n.left + e.clientLeft, o = un(e) ? Pr(e) : Kn(1), s = e.clientWidth * o.x, i = e.clientHeight * o.y, l = a * o.x, c = r * o.y;
  return {
    width: s,
    height: i,
    x: l,
    y: c
  };
}
function Il(e, t, n) {
  let r;
  if (t === "viewport")
    r = qv(e, n);
  else if (t === "document")
    r = Kv(An(e));
  else if (kn(t))
    r = Zv(t, n);
  else {
    const a = ld(e);
    r = {
      ...t,
      x: t.x - a.x,
      y: t.y - a.y
    };
  }
  return Eo(r);
}
function cd(e, t) {
  const n = Rr(e);
  return n === t || !kn(n) || Wo(n) ? !1 : Ft(n).position === "fixed" || cd(n, t);
}
function Xv(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = Aa(e, [], !1).filter((i) => kn(i) && qn(i) !== "body"), a = null;
  const o = Ft(e).position === "fixed";
  let s = o ? Rr(e) : e;
  for (; kn(s) && !Wo(s); ) {
    const i = Ft(s), l = Di(s);
    !l && i.position === "fixed" && (a = null), (o ? !l && !a : !l && i.position === "static" && !!a && ["absolute", "fixed"].includes(a.position) || Ba(s) && !l && cd(e, s)) ? r = r.filter((u) => u !== s) : a = i, s = Rr(s);
  }
  return t.set(e, r), r;
}
function Jv(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: a
  } = e;
  const s = [...n === "clippingAncestors" ? Xv(t, this._c) : [].concat(n), r], i = s[0], l = s.reduce((c, u) => {
    const d = Il(t, u, a);
    return c.top = Ot(d.top, c.top), c.right = zn(d.right, c.right), c.bottom = zn(d.bottom, c.bottom), c.left = Ot(d.left, c.left), c;
  }, Il(t, i, a));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top
  };
}
function Qv(e) {
  return id(e);
}
function em(e, t, n) {
  const r = un(t), a = An(t), o = n === "fixed", s = ur(e, !0, o, t);
  let i = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = Kn(0);
  if (r || !r && !o)
    if ((qn(t) !== "body" || Ba(a)) && (i = Go(t)), r) {
      const c = ur(t, !0, o, t);
      l.x = c.x + t.clientLeft, l.y = c.y + t.clientTop;
    } else
      a && (l.x = ud(a));
  return {
    x: s.left + i.scrollLeft - l.x,
    y: s.top + i.scrollTop - l.y,
    width: s.width,
    height: s.height
  };
}
function Ml(e, t) {
  return !un(e) || Ft(e).position === "fixed" ? null : t ? t(e) : e.offsetParent;
}
function dd(e, t) {
  const n = $t(e);
  if (!un(e))
    return n;
  let r = Ml(e, t);
  for (; r && Uv(r) && Ft(r).position === "static"; )
    r = Ml(r, t);
  return r && (qn(r) === "html" || qn(r) === "body" && Ft(r).position === "static" && !Di(r)) ? n : r || jv(e) || n;
}
const tm = async function(e) {
  let {
    reference: t,
    floating: n,
    strategy: r
  } = e;
  const a = this.getOffsetParent || dd, o = this.getDimensions;
  return {
    reference: em(t, await a(n), r),
    floating: {
      x: 0,
      y: 0,
      ...await o(n)
    }
  };
};
function nm(e) {
  return Ft(e).direction === "rtl";
}
const rm = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Gv,
  getDocumentElement: An,
  getClippingRect: Jv,
  getOffsetParent: dd,
  getElementRects: tm,
  getClientRects: zv,
  getDimensions: Qv,
  getScale: Pr,
  isElement: kn,
  isRTL: nm
};
function am(e, t) {
  let n = null, r;
  const a = An(e);
  function o() {
    clearTimeout(r), n && n.disconnect(), n = null;
  }
  function s(i, l) {
    i === void 0 && (i = !1), l === void 0 && (l = 1), o();
    const {
      left: c,
      top: u,
      width: d,
      height: f
    } = e.getBoundingClientRect();
    if (i || t(), !d || !f)
      return;
    const p = Za(u), h = Za(a.clientWidth - (c + d)), g = Za(a.clientHeight - (u + f)), y = Za(c), b = {
      rootMargin: -p + "px " + -h + "px " + -g + "px " + -y + "px",
      threshold: Ot(0, zn(1, l)) || 1
    };
    let E = !0;
    function _(T) {
      const D = T[0].intersectionRatio;
      if (D !== l) {
        if (!E)
          return s();
        D ? s(!1, D) : r = setTimeout(() => {
          s(!1, 1e-7);
        }, 100);
      }
      E = !1;
    }
    try {
      n = new IntersectionObserver(_, {
        ...b,
        // Handle <iframe>s
        root: a.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(_, b);
    }
    n.observe(e);
  }
  return s(!0), o;
}
function om(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: a = !0,
    ancestorResize: o = !0,
    elementResize: s = typeof ResizeObserver == "function",
    layoutShift: i = typeof IntersectionObserver == "function",
    animationFrame: l = !1
  } = r, c = $i(e), u = a || o ? [...c ? Aa(c) : [], ...Aa(t)] : [];
  u.forEach((v) => {
    a && v.addEventListener("scroll", n, {
      passive: !0
    }), o && v.addEventListener("resize", n);
  });
  const d = c && i ? am(c, n) : null;
  let f = -1, p = null;
  s && (p = new ResizeObserver((v) => {
    let [b] = v;
    b && b.target === c && p && (p.unobserve(t), cancelAnimationFrame(f), f = requestAnimationFrame(() => {
      p && p.observe(t);
    })), n();
  }), c && !l && p.observe(c), p.observe(t));
  let h, g = l ? ur(e) : null;
  l && y();
  function y() {
    const v = ur(e);
    g && (v.x !== g.x || v.y !== g.y || v.width !== g.width || v.height !== g.height) && n(), g = v, h = requestAnimationFrame(y);
  }
  return n(), () => {
    u.forEach((v) => {
      a && v.removeEventListener("scroll", n), o && v.removeEventListener("resize", n);
    }), d && d(), p && p.disconnect(), p = null, l && cancelAnimationFrame(h);
  };
}
const sm = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), a = {
    platform: rm,
    ...n
  }, o = {
    ...a.platform,
    _c: r
  };
  return Sv(e, t, {
    ...a,
    platform: o
  });
};
function Ls(e) {
  var t;
  return (t = e == null ? void 0 : e.$el) != null ? t : e;
}
function im(e) {
  return {
    name: "arrow",
    options: e,
    fn(t) {
      const n = Ls(m(e.element));
      return n == null ? {} : Iv({
        element: n,
        padding: e.padding
      }).fn(t);
    }
  };
}
function fd(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Ll(e, t) {
  const n = fd(e);
  return Math.round(t * n) / n;
}
function lm(e, t, n) {
  n === void 0 && (n = {});
  const r = n.whileElementsMounted, a = C(() => {
    var N;
    return (N = m(n.open)) != null ? N : !0;
  }), o = C(() => m(n.middleware)), s = C(() => {
    var N;
    return (N = m(n.placement)) != null ? N : "bottom";
  }), i = C(() => {
    var N;
    return (N = m(n.strategy)) != null ? N : "absolute";
  }), l = C(() => {
    var N;
    return (N = m(n.transform)) != null ? N : !0;
  }), c = C(() => Ls(e.value)), u = C(() => Ls(t.value)), d = Y(0), f = Y(0), p = Y(i.value), h = Y(s.value), g = mi({}), y = Y(!1), v = C(() => {
    const N = {
      position: p.value,
      left: "0",
      top: "0"
    };
    if (!u.value)
      return N;
    const I = Ll(u.value, d.value), L = Ll(u.value, f.value);
    return l.value ? {
      ...N,
      transform: "translate(" + I + "px, " + L + "px)",
      ...fd(u.value) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: p.value,
      left: I + "px",
      top: L + "px"
    };
  });
  let b;
  function E() {
    c.value == null || u.value == null || sm(c.value, u.value, {
      middleware: o.value,
      placement: s.value,
      strategy: i.value
    }).then((N) => {
      d.value = N.x, f.value = N.y, p.value = N.strategy, h.value = N.placement, g.value = N.middlewareData, y.value = !0;
    });
  }
  function _() {
    typeof b == "function" && (b(), b = void 0);
  }
  function T() {
    if (_(), r === void 0) {
      E();
      return;
    }
    if (c.value != null && u.value != null) {
      b = r(c.value, u.value, E);
      return;
    }
  }
  function D() {
    a.value || (y.value = !1);
  }
  return _e([o, s, i], E, {
    flush: "sync"
  }), _e([c, u], T, {
    flush: "sync"
  }), _e(a, D, {
    flush: "sync"
  }), zc() && Kc(_), {
    x: Or(d),
    y: Or(f),
    strategy: Or(p),
    placement: Or(h),
    middlewareData: Or(g),
    isPositioned: Or(y),
    floatingStyles: v,
    update: E
  };
}
function fn(e, t) {
  const n = typeof e == "string" && !t ? `${e}Context` : t, r = Symbol(n);
  return [(a) => {
    const o = Be(r, a);
    if (o || o === null)
      return o;
    throw new Error(
      `Injection \`${r.toString()}\` not found. Component must be used within ${Array.isArray(e) ? `one of the following components: ${e.join(
        ", "
      )}` : `\`${e}\``}`
    );
  }, (a) => (qt(r, a), a)];
}
function pd(e, t, n) {
  const r = n.originalEvent.target, a = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: n
  });
  t && r.addEventListener(e, t, { once: !0 }), r.dispatchEvent(a);
}
function um(e, t) {
  var n;
  const r = mi();
  return Et(() => {
    r.value = e();
  }, {
    ...t,
    flush: (n = t == null ? void 0 : t.flush) != null ? n : "sync"
  }), cv(r);
}
function cm(e, t) {
  let n, r, a;
  const o = Y(!0), s = () => {
    o.value = !0, a();
  };
  _e(e, s, { flush: "sync" });
  const i = typeof t == "function" ? t : t.get, l = typeof t == "function" ? void 0 : t.set, c = Jc((u, d) => (r = u, a = d, {
    get() {
      return o.value && (n = i(), o.value = !1), r(), n;
    },
    set(f) {
      l == null || l(f);
    }
  }));
  return Object.isExtensible(c) && (c.trigger = s), c;
}
function vd(e) {
  return zc() ? (Kc(e), !0) : !1;
}
function zo(e) {
  let t = !1, n;
  const r = Zc(!0);
  return (...a) => (t || (n = r.run(() => e(...a)), t = !0), n);
}
function ir(e) {
  return typeof e == "function" ? e() : m(e);
}
const Xr = typeof window < "u" && typeof document < "u", dm = (e) => typeof e < "u", fm = Object.prototype.toString, pm = (e) => fm.call(e) === "[object Object]", vm = () => {
};
function mm(e, t = 1e4) {
  return Jc((n, r) => {
    let a = ir(e), o;
    const s = () => setTimeout(() => {
      a = ir(e), r();
    }, ir(t));
    return vd(() => {
      clearTimeout(o);
    }), {
      get() {
        return n(), a;
      },
      set(i) {
        a = i, r(), clearTimeout(o), o = s();
      }
    };
  });
}
function hr(e) {
  var t;
  const n = ir(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const md = Xr ? window : void 0;
function hm(...e) {
  let t, n, r, a;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([n, r, a] = e, t = md) : [t, n, r, a] = e, !t)
    return vm;
  Array.isArray(n) || (n = [n]), Array.isArray(r) || (r = [r]);
  const o = [], s = () => {
    o.forEach((u) => u()), o.length = 0;
  }, i = (u, d, f, p) => (u.addEventListener(d, f, p), () => u.removeEventListener(d, f, p)), l = _e(
    () => [hr(t), ir(a)],
    ([u, d]) => {
      if (s(), !u)
        return;
      const f = pm(d) ? { ...d } : d;
      o.push(
        ...n.flatMap((p) => r.map((h) => i(u, p, h, f)))
      );
    },
    { immediate: !0, flush: "post" }
  ), c = () => {
    l(), s();
  };
  return vd(c), c;
}
function gm(e) {
  return typeof e == "function" ? e : typeof e == "string" ? (t) => t.key === e : Array.isArray(e) ? (t) => e.includes(t.key) : () => !0;
}
function ym(...e) {
  let t, n, r = {};
  e.length === 3 ? (t = e[0], n = e[1], r = e[2]) : e.length === 2 ? typeof e[1] == "object" ? (t = !0, n = e[0], r = e[1]) : (t = e[0], n = e[1]) : (t = !0, n = e[0]);
  const {
    target: a = md,
    eventName: o = "keydown",
    passive: s = !1,
    dedupe: i = !1
  } = r, l = gm(t);
  return hm(a, o, (c) => {
    c.repeat && ir(i) || l(c) && n(c);
  }, s);
}
function bm() {
  const e = Y(!1);
  return Rt() && Yt(() => {
    e.value = !0;
  }), e;
}
function _m(e) {
  return JSON.parse(JSON.stringify(e));
}
function xi(e, t, n, r = {}) {
  var a, o, s;
  const {
    clone: i = !1,
    passive: l = !1,
    eventName: c,
    deep: u = !1,
    defaultValue: d,
    shouldEmit: f
  } = r, p = Rt(), h = n || (p == null ? void 0 : p.emit) || ((a = p == null ? void 0 : p.$emit) == null ? void 0 : a.bind(p)) || ((s = (o = p == null ? void 0 : p.proxy) == null ? void 0 : o.$emit) == null ? void 0 : s.bind(p == null ? void 0 : p.proxy));
  let g = c;
  t || (t = "modelValue"), g = g || `update:${t.toString()}`;
  const y = (E) => i ? typeof i == "function" ? i(E) : _m(E) : E, v = () => dm(e[t]) ? y(e[t]) : d, b = (E) => {
    f ? f(E) && h(g, E) : h(g, E);
  };
  if (l) {
    const E = v(), _ = Y(E);
    let T = !1;
    return _e(
      () => e[t],
      (D) => {
        T || (T = !0, _.value = y(D), bt(() => T = !1));
      }
    ), _e(
      _,
      (D) => {
        !T && (D !== e[t] || u) && b(D);
      },
      { deep: u }
    ), _;
  } else
    return C({
      get() {
        return v();
      },
      set(E) {
        b(E);
      }
    });
}
function Ti(e) {
  return e ? e.flatMap((t) => t.type === ie ? Ti(t.children) : [t]) : [];
}
function wm(e, t, n, r = {}) {
  if (!t)
    return null;
  const {
    arrowKeyOptions: a = "both",
    attributeName: o = "data-radix-vue-collection-item",
    itemsArray: s = [],
    loop: i = !0,
    dir: l = "ltr",
    preventScroll: c = !0,
    focus: u = !1
  } = r, [d, f, p, h, g, y] = [
    e.key === "ArrowRight",
    e.key === "ArrowLeft",
    e.key === "ArrowUp",
    e.key === "ArrowDown",
    e.key === "Home",
    e.key === "End"
  ], v = p || h, b = d || f;
  if (!g && !y && (!v && !b || a === "vertical" && b || a === "horizontal" && v))
    return null;
  const E = n ? Array.from(n.querySelectorAll(`[${o}]`)) : s;
  if (!E.length)
    return null;
  c && e.preventDefault();
  let _ = null;
  return b || v ? _ = hd(E, t, {
    goForward: v ? h : l === "ltr" ? d : f,
    loop: i
  }) : g ? _ = E.at(0) || null : y && (_ = E.at(-1) || null), u && (_ == null || _.focus()), _;
}
function hd(e, t, { goForward: n, loop: r }, a = e.length) {
  if (--a === 0)
    return null;
  const o = e.indexOf(t), s = n ? o + 1 : o - 1;
  if (!r && (s < 0 || s >= e.length))
    return null;
  const i = (s + e.length) % e.length, l = e[i];
  return l ? l.hasAttribute("disabled") && l.getAttribute("disabled") !== "false" ? hd(
    e,
    l,
    { goForward: n, loop: r },
    a
  ) : l : null;
}
function vs(e) {
  return e !== null && typeof e == "object";
}
function Rs(e, t, n = ".", r) {
  if (!vs(t))
    return Rs(e, {}, n, r);
  const a = Object.assign({}, t);
  for (const o in e) {
    if (o === "__proto__" || o === "constructor")
      continue;
    const s = e[o];
    s != null && (r && r(a, o, s, n) || (Array.isArray(s) && Array.isArray(a[o]) ? a[o] = [...s, ...a[o]] : vs(s) && vs(a[o]) ? a[o] = Rs(
      s,
      a[o],
      (n ? `${n}.` : "") + o.toString(),
      r
    ) : a[o] = s));
  }
  return a;
}
function Em(e) {
  return (...t) => (
    // eslint-disable-next-line unicorn/no-array-reduce
    t.reduce((n, r) => Rs(n, r, "", e), {})
  );
}
const Om = Em(), [gd, s3] = fn("ConfigProvider"), Dm = zo(() => Y()), km = zo(() => Y(0));
function yd(e) {
  const t = gd({
    scrollBody: Y(!0)
  }), n = km(), r = Dm(), a = Y(e), o = () => {
    document.body.style.paddingRight = "", document.body.style.marginRight = "", document.body.style.pointerEvents = "", document.body.style.removeProperty("--scrollbar-width"), document.body.style.overflow = r.value ?? "", r.value = void 0;
  };
  return e && n.value++, _e(a, (s) => {
    var i;
    if (Xr && s) {
      r.value === void 0 && (r.value = document.body.style.overflow);
      const l = window.innerWidth - document.documentElement.clientWidth, c = { padding: l, margin: 0 }, u = (i = t.scrollBody) != null && i.value ? typeof t.scrollBody.value == "object" ? Om({
        padding: t.scrollBody.value.padding === !0 ? l : t.scrollBody.value.padding,
        margin: t.scrollBody.value.margin === !0 ? l : t.scrollBody.value.margin
      }, c) : c : { padding: 0, margin: 0 };
      l > 0 && (document.body.style.paddingRight = `${u.padding}px`, document.body.style.marginRight = `${u.margin}px`, document.body.style.setProperty("--scrollbar-width", `${l}px`), document.body.style.overflow = "hidden"), bt(() => {
        document.body.style.pointerEvents = "none", document.body.style.overflow = "hidden";
      });
    }
  }, { immediate: !0 }), Xc(() => {
    e && n.value--, n.value === 0 && o();
  }), a;
}
const $m = "data-radix-vue-collection-item";
function bd(e, t = $m) {
  const n = e ?? Symbol();
  return { createCollection: (r) => {
    const a = Y([]);
    function o() {
      const s = hr(r);
      return s ? a.value = Array.from(
        s.querySelectorAll(`[${t}]:not([data-disabled=true])`)
      ) : a.value = [];
    }
    return dv(() => {
      a.value = [];
    }), Yt(o), fv(o), _e(() => r == null ? void 0 : r.value, o, { immediate: !0 }), qt(n, a), a;
  }, injectCollection: () => Be(n, Y([])) };
}
function xm(e) {
  const t = gd({
    dir: Y("ltr")
  });
  return C(() => {
    var n;
    return (e == null ? void 0 : e.value) || ((n = t.dir) == null ? void 0 : n.value) || "ltr";
  });
}
function Tm(e) {
  const t = Rt(), n = t == null ? void 0 : t.type.emits, r = {};
  return n != null && n.length || console.warn(
    `No emitted event found. Please check component: ${t == null ? void 0 : t.type.__name}`
  ), n == null || n.forEach((a) => {
    r[pv(Qc(a))] = (...o) => e(a, ...o);
  }), r;
}
let ms = 0;
function _d() {
  Et((e) => {
    if (!Xr)
      return;
    const t = document.querySelectorAll("[data-radix-focus-guard]");
    document.body.insertAdjacentElement(
      "afterbegin",
      t[0] ?? Rl()
    ), document.body.insertAdjacentElement(
      "beforeend",
      t[1] ?? Rl()
    ), ms++, e(() => {
      ms === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((n) => n.remove()), ms--;
    });
  });
}
function Rl() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", e;
}
function Cm(e) {
  return C(() => {
    var t;
    return ir(e) ? !!((t = hr(e)) != null && t.closest("form")) : !0;
  });
}
function wd(e) {
  const t = Rt(), n = Object.keys((t == null ? void 0 : t.type.props) ?? {}).reduce((r, a) => {
    const o = (t == null ? void 0 : t.type.props[a]).default;
    return o !== void 0 && (r[a] = o), r;
  }, {});
  return cm(() => ({ ...e }), () => {
    const r = {}, a = (t == null ? void 0 : t.vnode.props) ?? {};
    return Object.keys(a).forEach((o) => {
      r[Qc(o)] = a[o];
    }), Object.keys({ ...n, ...r }).reduce((o, s) => (e[s] !== void 0 && (o[s] = e[s]), o), {});
  });
}
function Jr(e, t) {
  const n = wd(e), r = t ? Tm(t) : {};
  return C(() => ({
    ...n.value,
    ...r
  }));
}
function Am() {
  const e = Rt();
  function t(n) {
    typeof n == "object" && (e.exposed = n, e.exposeProxy = n);
  }
  return t;
}
var Nm = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, Dr = /* @__PURE__ */ new WeakMap(), Xa = /* @__PURE__ */ new WeakMap(), Ja = {}, hs = 0, Ed = function(e) {
  return e && (e.host || Ed(e.parentNode));
}, Pm = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = Ed(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, Sm = function(e, t, n, r) {
  var a = Pm(t, Array.isArray(e) ? e : [e]);
  Ja[n] || (Ja[n] = /* @__PURE__ */ new WeakMap());
  var o = Ja[n], s = [], i = /* @__PURE__ */ new Set(), l = new Set(a), c = function(d) {
    !d || i.has(d) || (i.add(d), c(d.parentNode));
  };
  a.forEach(c);
  var u = function(d) {
    !d || l.has(d) || Array.prototype.forEach.call(d.children, function(f) {
      if (i.has(f))
        u(f);
      else {
        var p = f.getAttribute(r), h = p !== null && p !== "false", g = (Dr.get(f) || 0) + 1, y = (o.get(f) || 0) + 1;
        Dr.set(f, g), o.set(f, y), s.push(f), g === 1 && h && Xa.set(f, !0), y === 1 && f.setAttribute(n, "true"), h || f.setAttribute(r, "true");
      }
    });
  };
  return u(t), i.clear(), hs++, function() {
    s.forEach(function(d) {
      var f = Dr.get(d) - 1, p = o.get(d) - 1;
      Dr.set(d, f), o.set(d, p), f || (Xa.has(d) || d.removeAttribute(r), Xa.delete(d)), p || d.removeAttribute(n);
    }), hs--, hs || (Dr = /* @__PURE__ */ new WeakMap(), Dr = /* @__PURE__ */ new WeakMap(), Xa = /* @__PURE__ */ new WeakMap(), Ja = {});
  };
}, Im = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), a = t || Nm(e);
  return a ? (r.push.apply(r, Array.from(a.querySelectorAll("[aria-live]"))), Sm(r, a, n, "aria-hidden")) : function() {
    return null;
  };
};
function Mm(e) {
  let t;
  _e(() => hr(e), (n) => {
    n ? t = Im(n) : t && t();
  }), Jn(() => {
    t && t();
  });
}
const Lm = zo(() => ({ count: Y(0) }));
function Rm(e) {
  const { count: t } = Lm();
  return e || t.value++, e || `radix-${t.value}`;
}
function Fm(e) {
  const t = Y(), n = C(() => {
    var a;
    return ((a = t.value) == null ? void 0 : a.width) ?? 0;
  }), r = C(() => {
    var a;
    return ((a = t.value) == null ? void 0 : a.height) ?? 0;
  });
  return Yt(() => {
    const a = hr(e);
    if (a) {
      t.value = { width: a.offsetWidth, height: a.offsetHeight };
      const o = new ResizeObserver((s) => {
        if (!Array.isArray(s) || !s.length)
          return;
        const i = s[0];
        let l, c;
        if ("borderBoxSize" in i) {
          const u = i.borderBoxSize, d = Array.isArray(u) ? u[0] : u;
          l = d.inlineSize, c = d.blockSize;
        } else
          l = a.offsetWidth, c = a.offsetHeight;
        t.value = { width: l, height: c };
      });
      return o.observe(a, { box: "border-box" }), () => o.unobserve(a);
    } else
      t.value = void 0;
  }), {
    width: n,
    height: r
  };
}
function Vm(e, t) {
  const n = Y(e);
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
function Bm(e) {
  const t = mm("", 1e3);
  return {
    search: t,
    handleTypeaheadSearch: (n) => {
      var r, a;
      t.value = t.value + n;
      const o = e.value, s = document.activeElement, i = ((a = (r = o.find((d) => d === s)) == null ? void 0 : r.textContent) == null ? void 0 : a.trim()) ?? "", l = o.map((d) => {
        var f;
        return ((f = d.textContent) == null ? void 0 : f.trim()) ?? "";
      }), c = Um(l, t.value, i), u = o.find(
        (d) => {
          var f;
          return ((f = d.textContent) == null ? void 0 : f.trim()) === c;
        }
      );
      u && u.focus();
    },
    resetTypeahead: () => {
      t.value = "";
    }
  };
}
function Ym(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
function Um(e, t, n) {
  const r = t.length > 1 && Array.from(t).every((i) => i === t[0]) ? t[0] : t, a = n ? e.indexOf(n) : -1;
  let o = Ym(e, Math.max(a, 0));
  r.length === 1 && (o = o.filter((i) => i !== n));
  const s = o.find(
    (i) => i.toLowerCase().startsWith(r.toLowerCase())
  );
  return s !== n ? s : void 0;
}
const Ci = fe({
  name: "PrimitiveSlot",
  inheritAttrs: !1,
  setup(e, { attrs: t, slots: n }) {
    return () => {
      var r, a;
      if (!n.default)
        return null;
      const o = Ti(n.default()), [s, ...i] = o;
      if (Object.keys(t).length > 0) {
        (r = s.props) == null || delete r.ref;
        const l = tt(t, s.props ?? {});
        t.class && (a = s.props) != null && a.class && delete s.props.class;
        const c = uv(s, l);
        for (const u in l)
          u.startsWith("on") && (c.props || (c.props = {}), c.props[u] = l[u]);
        return o.length === 1 ? c : [c, ...i];
      }
      return o;
    };
  }
}), $n = fe({
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
    return (e.asChild ? "template" : e.as) !== "template" ? () => Kt(e.as, t, { default: n.default }) : () => Kt(Ci, t, { default: n.default });
  }
});
function Xt() {
  const e = Y(), t = C(() => {
    var n, r;
    return ["#text", "#comment"].includes((n = e.value) == null ? void 0 : n.$el.nodeName) ? (r = e.value) == null ? void 0 : r.$el.nextElementSibling : hr(e);
  });
  return {
    primitiveElement: e,
    currentElement: t
  };
}
function jm(e, t) {
  const n = Y({}), r = Y("none"), a = e.value ? "mounted" : "unmounted", { state: o, dispatch: s } = Vm(a, {
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
  _e(
    e,
    async (d, f) => {
      var p;
      const h = f !== d;
      if (await bt(), h) {
        const g = r.value, y = Qa(t.value);
        d ? s("MOUNT") : y === "none" || ((p = n.value) == null ? void 0 : p.display) === "none" ? s("UNMOUNT") : s(f && g !== y ? "ANIMATION_OUT" : "UNMOUNT");
      }
    },
    { immediate: !0 }
  );
  const i = (d) => {
    const f = Qa(t.value), p = f.includes(
      d.animationName
    );
    d.target === t.value && p && s("ANIMATION_END"), d.target === t.value && f === "none" && s("ANIMATION_END");
  }, l = (d) => {
    d.target === t.value && (r.value = Qa(t.value));
  }, c = _e(
    t,
    (d, f) => {
      d ? (n.value = getComputedStyle(d), d.addEventListener("animationstart", l), d.addEventListener("animationcancel", i), d.addEventListener("animationend", i)) : (s("ANIMATION_END"), f == null || f.removeEventListener("animationstart", l), f == null || f.removeEventListener("animationcancel", i), f == null || f.removeEventListener("animationend", i));
    },
    { immediate: !0 }
  ), u = _e(o, () => {
    const d = Qa(t.value);
    r.value = o.value === "mounted" ? d : "none";
  });
  return Jn(() => {
    c(), u();
  }), {
    isPresent: C(
      () => ["mounted", "unmountSuspended"].includes(o.value)
    )
  };
}
function Qa(e) {
  return e && getComputedStyle(e).animationName || "none";
}
const Od = fe({
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
    const { present: a, forceMount: o } = Kr(e), s = Y(), { isPresent: i } = jm(a, s);
    n({ present: i });
    let l = t.default({ present: i });
    l = Ti(l || []);
    const c = Rt();
    if (l && (l == null ? void 0 : l.length) > 1) {
      const u = (r = c == null ? void 0 : c.parent) != null && r.type.name ? `<${c.parent.type.name} />` : "component";
      throw new Error(
        [
          `Detected an invalid children for \`${u}\` for  \`Presence\` component.`,
          "",
          "Note: Presence works similarly to `v-if` directly, but it waits for animation/transition to finished before unmounting. So it expect only one direct child of valid VNode type.",
          "You can apply a few solutions:",
          [
            "Provide a single child element so that `presence` directive attach correctly.rv",
            "Ensure the first child is an actual element instead of a raw text node or comment node."
          ].map((d) => `  - ${d}`).join(`
`)
        ].join(`
`)
      );
    }
    return () => o.value || a.value || i.value ? Kt(t.default({ present: i })[0], {
      ref: (u) => {
        const d = hr(u);
        return typeof (d == null ? void 0 : d.hasAttribute) > "u" || (d != null && d.hasAttribute("data-radix-popper-content-wrapper") ? s.value = d.firstChild : s.value = d), d;
      }
    }) : null;
  }
}), Hm = /* @__PURE__ */ fe({
  __name: "Teleport",
  props: {
    to: { default: "body" },
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = bm();
    return (n, r) => m(t) || n.forceMount ? (O(), we(gi, {
      key: 0,
      to: n.to,
      disabled: n.disabled
    }, [
      Re(n.$slots, "default")
    ], 8, ["to", "disabled"])) : Z("", !0);
  }
}), Wm = "dismissableLayer.pointerDownOutside", Gm = "dismissableLayer.focusOutside";
function Dd(e, t) {
  const n = t.closest(
    "[data-dismissable-layer]"
  ), r = e.querySelector(
    "[data-dismissable-layer]"
  ), a = Array.from(
    e.ownerDocument.querySelectorAll("[data-dismissable-layer]")
  );
  return !!(n && r === n || a.indexOf(r) < a.indexOf(n));
}
function zm(e, t) {
  var n;
  const r = ((n = t == null ? void 0 : t.value) == null ? void 0 : n.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), a = Y(!1), o = Y(() => {
  });
  return Et((s) => {
    if (!Xr)
      return;
    const i = async (c) => {
      if (t != null && t.value) {
        if (Dd(t.value, c.target)) {
          a.value = !1;
          return;
        }
        if (c.target && !a.value) {
          let u = function() {
            pd(
              Wm,
              e,
              d
            );
          };
          const d = { originalEvent: c };
          c.pointerType === "touch" ? (r.removeEventListener("click", o.value), o.value = u, r.addEventListener("click", o.value, {
            once: !0
          })) : u();
        } else
          r.removeEventListener("click", o.value);
        a.value = !1;
      }
    }, l = window.setTimeout(() => {
      r.addEventListener("pointerdown", i);
    }, 0);
    s(() => {
      window.clearTimeout(l), r.removeEventListener("pointerdown", i), r.removeEventListener("click", o.value);
    });
  }), {
    onPointerDownCapture: () => a.value = !0
  };
}
function Km(e, t) {
  var n;
  const r = ((n = t == null ? void 0 : t.value) == null ? void 0 : n.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), a = Y(!1);
  return Et((o) => {
    if (!Xr)
      return;
    const s = async (i) => {
      t != null && t.value && (await bt(), !Dd(t.value, i.target) && i.target && !a.value && pd(
        Gm,
        e,
        { originalEvent: i }
      ));
    };
    r.addEventListener("focusin", s), o(() => r.removeEventListener("focusin", s));
  }), {
    onFocusCapture: () => a.value = !0,
    onBlurCapture: () => a.value = !1
  };
}
const gn = Va({
  layersRoot: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), kd = /* @__PURE__ */ fe({
  __name: "DismissableLayer",
  props: {
    disableOutsidePointerEvents: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "dismiss"],
  setup(e, { emit: t }) {
    const n = e, r = t, { primitiveElement: a, currentElement: o } = Xt(), s = C(
      () => {
        var h;
        return ((h = o.value) == null ? void 0 : h.ownerDocument) ?? globalThis.document;
      }
    ), i = C(() => gn.layersRoot), l = C(() => o.value ? Array.from(i.value).indexOf(o.value) : -1), c = C(() => gn.layersWithOutsidePointerEventsDisabled.size > 0), u = C(() => {
      const h = Array.from(i.value), [g] = [...gn.layersWithOutsidePointerEventsDisabled].slice(-1), y = h.indexOf(g);
      return l.value >= y;
    }), d = zm(async (h) => {
      const g = [...gn.branches].some(
        (y) => y.contains(h.target)
      );
      !u.value || g || (r("pointerDownOutside", h), r("interactOutside", h), await bt(), h.defaultPrevented || r("dismiss"));
    }, o), f = Km((h) => {
      [...gn.branches].some(
        (g) => g.contains(h.target)
      ) || (r("focusOutside", h), r("interactOutside", h), h.defaultPrevented || r("dismiss"));
    }, o);
    ym("Escape", (h) => {
      l.value === i.value.size - 1 && (r("escapeKeyDown", h), h.defaultPrevented || r("dismiss"));
    });
    let p;
    return Et((h) => {
      o.value && (n.disableOutsidePointerEvents && (gn.layersWithOutsidePointerEventsDisabled.size === 0 && (p = s.value.body.style.pointerEvents, s.value.body.style.pointerEvents = "none"), gn.layersWithOutsidePointerEventsDisabled.add(o.value)), i.value.add(o.value), h(() => {
        n.disableOutsidePointerEvents && gn.layersWithOutsidePointerEventsDisabled.size === 1 && (s.value.body.style.pointerEvents = p);
      }));
    }), Et((h) => {
      h(() => {
        o.value && (i.value.delete(o.value), gn.layersWithOutsidePointerEventsDisabled.delete(o.value));
      });
    }), (h, g) => (O(), we(m($n), {
      ref_key: "primitiveElement",
      ref: a,
      "as-child": h.asChild,
      as: h.as,
      "data-dismissable-layer": "",
      style: Hn({
        pointerEvents: c.value ? u.value ? "auto" : "none" : void 0
      }),
      onFocusCapture: m(f).onFocusCapture,
      onBlurCapture: m(f).onBlurCapture,
      onPointerdownCapture: m(d).onPointerDownCapture
    }, {
      default: he(() => [
        Re(h.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as", "style", "onFocusCapture", "onBlurCapture", "onPointerdownCapture"]));
  }
}), gs = "focusScope.autoFocusOnMount", ys = "focusScope.autoFocusOnUnmount", Fl = { bubbles: !1, cancelable: !0 };
function qm(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (Yn(r, { select: t }), document.activeElement !== n)
      return !0;
}
function Zm(e) {
  const t = $d(e), n = Vl(t, e), r = Vl(t.reverse(), e);
  return [n, r];
}
function $d(e) {
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
function Vl(e, t) {
  for (const n of e)
    if (!Xm(n, { upTo: t }))
      return n;
}
function Xm(e, { upTo: t }) {
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
function Jm(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function Yn(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && Jm(e) && t && e.select();
  }
}
const Qm = zo(() => Y([]));
function eh() {
  const e = Qm();
  return {
    add(t) {
      const n = e.value[0];
      t !== n && (n == null || n.pause()), e.value = Bl(e.value, t), e.value.unshift(t);
    },
    remove(t) {
      var n;
      e.value = Bl(e.value, t), (n = e.value[0]) == null || n.resume();
    }
  };
}
function Bl(e, t) {
  const n = [...e], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function th(e) {
  return e.filter((t) => t.tagName !== "A");
}
const xd = /* @__PURE__ */ fe({
  __name: "FocusScope",
  props: {
    loop: { type: Boolean, default: !1 },
    trapped: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["mountAutoFocus", "unmountAutoFocus"],
  setup(e, { emit: t }) {
    const n = e, r = t, { primitiveElement: a, currentElement: o } = Xt(), s = Y(null), i = eh(), l = Va({
      paused: !1,
      pause() {
        this.paused = !0;
      },
      resume() {
        this.paused = !1;
      }
    });
    Et((u) => {
      if (!Xr)
        return;
      const d = o.value;
      if (!n.trapped)
        return;
      function f(y) {
        if (l.paused || !d)
          return;
        const v = y.target;
        d.contains(v) ? s.value = v : Yn(s.value, { select: !0 });
      }
      function p(y) {
        if (l.paused || !d)
          return;
        const v = y.relatedTarget;
        v !== null && (d.contains(v) || Yn(s.value, { select: !0 }));
      }
      function h(y) {
        d.contains(s.value) || Yn(d);
      }
      document.addEventListener("focusin", f), document.addEventListener("focusout", p);
      const g = new MutationObserver(h);
      d && g.observe(d, { childList: !0, subtree: !0 }), u(() => {
        document.removeEventListener("focusin", f), document.removeEventListener("focusout", p), g.disconnect();
      });
    }), Et(async (u) => {
      const d = o.value;
      if (await bt(), !d)
        return;
      i.add(l);
      const f = document.activeElement;
      if (!d.contains(f)) {
        const p = new CustomEvent(gs, Fl);
        d.addEventListener(
          gs,
          (h) => r("mountAutoFocus", h)
        ), d.dispatchEvent(p), p.defaultPrevented || (qm(th($d(d)), {
          select: !0
        }), document.activeElement === f && Yn(d));
      }
      u(() => {
        d.removeEventListener(
          gs,
          (g) => r("mountAutoFocus", g)
        );
        const p = new CustomEvent(ys, Fl), h = (g) => {
          r("unmountAutoFocus", g);
        };
        d.addEventListener(ys, h), d.dispatchEvent(p), setTimeout(() => {
          p.defaultPrevented || Yn(f ?? document.body, { select: !0 }), d.removeEventListener(ys, h), i.remove(l);
        }, 0);
      });
    });
    function c(u) {
      if (!n.loop && !n.trapped || l.paused)
        return;
      const d = u.key === "Tab" && !u.altKey && !u.ctrlKey && !u.metaKey, f = document.activeElement;
      if (d && f) {
        const p = u.currentTarget, [h, g] = Zm(p);
        h && g ? !u.shiftKey && f === g ? (u.preventDefault(), n.loop && Yn(h, { select: !0 })) : u.shiftKey && f === h && (u.preventDefault(), n.loop && Yn(g, { select: !0 })) : f === p && u.preventDefault();
      }
    }
    return (u, d) => (O(), we(m($n), {
      ref_key: "primitiveElement",
      ref: a,
      tabindex: "-1",
      "as-child": n.asChild,
      as: n.as,
      onKeydown: c
    }, {
      default: he(() => [
        Re(u.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as"]));
  }
}), nh = ["ArrowDown", "PageUp", "Home"], Td = ["ArrowUp", "PageDown", "End"], rh = [...nh, ...Td];
function ah(e) {
  return e ? "open" : "closed";
}
function oh(e) {
  const t = document.activeElement;
  for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t))
      return;
}
function sh(e, t) {
  const { x: n, y: r } = e;
  let a = !1;
  for (let o = 0, s = t.length - 1; o < t.length; s = o++) {
    const i = t[o].x, l = t[o].y, c = t[s].x, u = t[s].y;
    l > r != u > r && n < (c - i) * (r - l) / (u - l) + i && (a = !a);
  }
  return a;
}
function ih(e, t) {
  if (!t)
    return !1;
  const n = { x: e.clientX, y: e.clientY };
  return sh(n, t);
}
function lh(e) {
  return e.pointerType === "mouse";
}
function Ai(e) {
  return e === "indeterminate";
}
function Cd(e) {
  return Ai(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
const uh = ["value", "checked", "name", "disabled", "required"], [ch, dh] = fn("CheckboxRoot"), fh = /* @__PURE__ */ fe({
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
    const n = e, r = t, { disabled: a } = Kr(n), o = xi(n, "checked", r, {
      defaultValue: n.defaultChecked,
      passive: n.checked === void 0
    }), { primitiveElement: s, currentElement: i } = Xt(), l = Cm(i), c = C(() => {
      var u;
      return n.id && i.value ? (u = document.querySelector(`[for="${n.id}"]`)) == null ? void 0 : u.innerText : void 0;
    });
    return dh({
      disabled: a,
      state: o
    }), (u, d) => (O(), A(ie, null, [
      se(m($n), tt(u.$attrs, {
        id: u.id,
        ref_key: "primitiveElement",
        ref: s,
        role: "checkbox",
        "as-child": n.asChild,
        as: u.as,
        type: u.as === "button" ? "button" : void 0,
        "aria-checked": m(Ai)(m(o)) ? "mixed" : m(o),
        "aria-required": !1,
        "aria-label": u.$attrs["aria-label"] || c.value,
        "data-state": m(Cd)(m(o)),
        "data-disabled": m(a) ? "" : void 0,
        disabled: m(a),
        onKeydown: Ss(Ta(() => {
        }, ["prevent"]), ["enter"]),
        onClick: d[0] || (d[0] = (f) => o.value = !m(o))
      }), {
        default: he(() => [
          Re(u.$slots, "default")
        ]),
        _: 3
      }, 16, ["id", "as-child", "as", "type", "aria-checked", "aria-label", "data-state", "data-disabled", "disabled", "onKeydown"]),
      m(l) ? (O(), A("input", {
        key: 0,
        type: "checkbox",
        tabindex: "-1",
        "aria-hidden": "",
        value: u.value,
        checked: !!m(o),
        name: n.name,
        disabled: n.disabled,
        required: n.required,
        style: Hn({
          transform: "translateX(-100%)",
          position: "absolute",
          pointerEvents: "none",
          opacity: 0,
          margin: 0
        })
      }, null, 12, uh)) : Z("", !0)
    ], 64));
  }
}), ph = /* @__PURE__ */ fe({
  __name: "CheckboxIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = ch();
    return (n, r) => (O(), we(m(Od), {
      present: n.forceMount || m(Ai)(m(t).state.value) || m(t).state.value === !0
    }, {
      default: he(() => [
        se(m($n), tt({
          "data-state": m(Cd)(m(t).state.value),
          "data-disabled": m(t).disabled.value ? "" : void 0,
          style: { pointerEvents: "none" },
          "as-child": n.asChild,
          as: n.as
        }, n.$attrs), {
          default: he(() => [
            Re(n.$slots, "default")
          ]),
          _: 3
        }, 16, ["data-state", "data-disabled", "as-child", "as"])
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), [Ad, vh] = fn("PopperRoot"), mh = /* @__PURE__ */ fe({
  __name: "PopperRoot",
  setup(e) {
    const t = Y();
    return vh({
      anchor: t,
      onAnchorChange: (n) => t.value = n
    }), (n, r) => Re(n.$slots, "default");
  }
}), hh = /* @__PURE__ */ fe({
  __name: "PopperAnchor",
  props: {
    element: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { primitiveElement: n, currentElement: r } = Xt(), a = Ad();
    return _e(r, () => {
      a.onAnchorChange(t.element ?? r.value);
    }), (o, s) => (O(), we(m($n), {
      ref_key: "primitiveElement",
      ref: n,
      as: o.as,
      "as-child": o.asChild
    }, {
      default: he(() => [
        Re(o.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
});
function gh(e) {
  return e !== null;
}
function yh(e) {
  return {
    name: "transformOrigin",
    options: e,
    fn(t) {
      var n, r, a;
      const { placement: o, rects: s, middlewareData: i } = t, l = ((n = i.arrow) == null ? void 0 : n.centerOffset) !== 0, c = l ? 0 : e.arrowWidth, u = l ? 0 : e.arrowHeight, [d, f] = Fs(o), p = { start: "0%", center: "50%", end: "100%" }[f], h = (((r = i.arrow) == null ? void 0 : r.x) ?? 0) + c / 2, g = (((a = i.arrow) == null ? void 0 : a.y) ?? 0) + u / 2;
      let y = "", v = "";
      return d === "bottom" ? (y = l ? p : `${h}px`, v = `${-u}px`) : d === "top" ? (y = l ? p : `${h}px`, v = `${s.floating.height + u}px`) : d === "right" ? (y = `${-u}px`, v = l ? p : `${g}px`) : d === "left" && (y = `${s.floating.width + u}px`, v = l ? p : `${g}px`), { data: { x: y, y: v } };
    }
  };
}
function Fs(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
const Nd = {
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
}, [i3, bh] = fn("PopperContent"), Pd = /* @__PURE__ */ fe({
  inheritAttrs: !1,
  __name: "PopperContent",
  props: qc({
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
    ...Nd
  }),
  setup(e, { expose: t }) {
    const n = e, r = Ad(), a = Am(), { primitiveElement: o, currentElement: s } = Xt(), i = Y(), l = Y(), { width: c, height: u } = Fm(l), d = C(
      () => n.side + (n.align !== "center" ? `-${n.align}` : "")
    ), f = C(() => typeof n.collisionPadding == "number" ? n.collisionPadding : { top: 0, right: 0, bottom: 0, left: 0, ...n.collisionPadding }), p = C(() => Array.isArray(n.collisionBoundary) ? n.collisionBoundary : [n.collisionBoundary]), h = C(() => ({
      padding: f.value,
      boundary: p.value.filter(gh),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: p.value.length > 0
    })), g = um(() => [
      Fv({
        mainAxis: n.sideOffset + u.value,
        alignmentAxis: n.alignOffset
      }),
      n.avoidCollisions && Vv({
        mainAxis: !0,
        crossAxis: !!n.prioritizePosition,
        limiter: n.sticky === "partial" ? Bv() : void 0,
        ...h.value
      }),
      !n.prioritizePosition && n.avoidCollisions && Mv({
        ...h.value
      }),
      Yv({
        ...h.value,
        apply: ({ elements: x, rects: R, availableWidth: P, availableHeight: G }) => {
          const { width: ee, height: X } = R.reference, ae = x.floating.style;
          Object.assign(x.floating.style, {
            maxWidth: `${P}px`,
            maxHeight: `${G}px`
          }), ae.setProperty(
            "--radix-popper-available-width",
            `${P}px`
          ), ae.setProperty(
            "--radix-popper-available-height",
            `${G}px`
          ), ae.setProperty(
            "--radix-popper-anchor-width",
            `${ee}px`
          ), ae.setProperty(
            "--radix-popper-anchor-height",
            `${X}px`
          );
        }
      }),
      l.value && im({ element: l.value, padding: n.arrowPadding }),
      yh({
        arrowWidth: c.value,
        arrowHeight: u.value
      }),
      n.hideWhenDetached && Lv({ strategy: "referenceHidden", ...h.value })
    ]), { floatingStyles: y, placement: v, isPositioned: b, middlewareData: E } = lm(
      r.anchor,
      i,
      {
        strategy: "fixed",
        placement: d,
        whileElementsMounted: (...x) => om(...x, {
          animationFrame: n.updatePositionStrategy === "always"
        }),
        middleware: g
      }
    ), _ = C(
      () => Fs(v.value)[0]
    ), T = C(
      () => Fs(v.value)[1]
    );
    Et(() => {
      var x;
      b.value && ((x = n.onPlaced) == null || x.call(n));
    });
    const D = C(
      () => {
        var x;
        return ((x = E.value.arrow) == null ? void 0 : x.centerOffset) !== 0;
      }
    ), N = Y("");
    Et(() => {
      s.value && (N.value = window.getComputedStyle(s.value).zIndex);
    });
    const I = C(() => {
      var x;
      return ((x = E.value.arrow) == null ? void 0 : x.x) ?? 0;
    }), L = C(() => {
      var x;
      return ((x = E.value.arrow) == null ? void 0 : x.y) ?? 0;
    });
    return bh({
      placedSide: _,
      onArrowChange: (x) => l.value = x,
      arrowX: I,
      arrowY: L,
      shouldHideArrow: D
    }), t({
      $el: s
    }), (x, R) => {
      var P, G, ee;
      return O(), A("div", {
        ref_key: "floatingRef",
        ref: i,
        "data-radix-popper-content-wrapper": "",
        style: Hn({
          ...m(y),
          transform: m(b) ? m(y).transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: N.value,
          "--radix-popper-transform-origin": [
            (P = m(E).transformOrigin) == null ? void 0 : P.x,
            (G = m(E).transformOrigin) == null ? void 0 : G.y
          ].join(" ")
        })
      }, [
        se(m($n), tt({
          ref: (X) => {
            m(a)(X), o.value = X;
          }
        }, x.$attrs, {
          "as-child": n.asChild,
          as: x.as,
          "data-side": _.value,
          "data-align": T.value,
          style: {
            // if the PopperContent hasn't been placed yet (not all measurements done)
            // we prevent animations so that users's animation don't kick in too early referring wrong sides
            animation: m(b) ? void 0 : "none",
            // hide the content if using the hide middleware and should be hidden
            opacity: (ee = m(E).hide) != null && ee.referenceHidden ? 0 : void 0
          }
        }), {
          default: he(() => [
            Re(x.$slots, "default")
          ]),
          _: 3
        }, 16, ["as-child", "as", "data-side", "data-align", "style"])
      ], 4);
    };
  }
}), [Sd, l3] = fn("CollectionProvider");
fe({
  name: "CollectionSlot",
  setup(e, { slots: t }) {
    const n = Sd(), { primitiveElement: r, currentElement: a } = Xt();
    return _e(a, () => {
      n.collectionRef.value = a.value;
    }), () => Kt(Ci, { ref: r }, t);
  }
});
fe({
  name: "CollectionItem",
  setup(e, { slots: t, attrs: n }) {
    const r = Sd(), { primitiveElement: a, currentElement: o } = Xt(), s = Rt();
    return Et((i) => {
      var l;
      if (o.value) {
        const c = Tl(o.value);
        r.itemMap.value.set(c, { ref: o.value, ...Tl(((l = s == null ? void 0 : s.parent) == null ? void 0 : l.props) ?? {}) }), i(() => r.itemMap.value.delete(c));
      }
    }), () => Kt(Ci, { ...n, [r.attrName]: "", ref: a }, t);
  }
});
const [_h, u3] = fn(["MenuRoot", "MenuSub"], "MenuContext"), [wh, c3] = fn("MenuRoot"), Eh = "rovingFocusGroup.onEntryFocus", Oh = { bubbles: !1, cancelable: !0 };
function Dh(e) {
  const t = document.activeElement;
  for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t))
      return;
}
const [d3, kh] = fn("RovingFocusGroup"), $h = /* @__PURE__ */ fe({
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
    const n = e, r = t, { loop: a, orientation: o, dir: s } = Kr(n), i = xm(s), l = xi(n, "currentTabStopId", r, {
      defaultValue: n.defaultCurrentTabStopId,
      passive: n.currentTabStopId === void 0
    }), c = Y(!1), u = Y(!1), d = Y(0), { primitiveElement: f, currentElement: p } = Xt(), { createCollection: h } = bd("rovingFocus"), g = h(p);
    function y(v) {
      const b = !u.value;
      if (v.currentTarget && v.target === v.currentTarget && b && !c.value) {
        const E = new CustomEvent(Eh, Oh);
        if (v.currentTarget.dispatchEvent(E), r("entryFocus", E), !E.defaultPrevented) {
          const _ = g.value, T = _.find((I) => I.getAttribute("data-active") === "true"), D = _.find(
            (I) => I.id === l.value
          ), N = [T, D, ..._].filter(
            Boolean
          );
          Dh(N);
        }
      }
      u.value = !1;
    }
    return kh({
      loop: a,
      dir: i,
      orientation: o,
      currentTabStopId: l,
      onItemFocus: (v) => {
        l.value = v;
      },
      onItemShiftTab: () => {
        c.value = !0;
      },
      onFocusableItemAdd: () => {
        d.value++;
      },
      onFocusableItemRemove: () => {
        d.value--;
      }
    }), (v, b) => (O(), we(m($n), {
      ref_key: "primitiveElement",
      ref: f,
      tabindex: c.value || d.value === 0 ? -1 : 0,
      "data-orientation": m(o),
      as: v.as,
      "as-child": v.asChild,
      dir: m(i),
      style: { outline: "none" },
      onMousedown: b[0] || (b[0] = (E) => u.value = !0),
      onFocus: y,
      onBlur: b[1] || (b[1] = (E) => c.value = !1)
    }, {
      default: he(() => [
        Re(v.$slots, "default")
      ]),
      _: 3
    }, 8, ["tabindex", "data-orientation", "as", "as-child", "dir"]));
  }
}), [f3, xh] = fn("MenuContent");
qc({
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
  ...Nd
});
const [Ya, Th] = fn("PopoverRoot"), Ch = /* @__PURE__ */ fe({
  __name: "PopoverRoot",
  props: {
    defaultOpen: { type: Boolean, default: !1 },
    open: { type: Boolean, default: void 0 },
    modal: { type: Boolean, default: !1 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const n = e, r = t, { modal: a } = Kr(n), o = xi(n, "open", r, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    }), s = Y(), i = Y(!1);
    return Th({
      contentId: Rm(),
      modal: a,
      open: o,
      onOpenChange: (l) => {
        o.value = l;
      },
      onOpenToggle: () => {
        o.value = !o.value;
      },
      triggerElement: s,
      hasCustomAnchor: i
    }), (l, c) => (O(), we(m(mh), null, {
      default: he(() => [
        Re(l.$slots, "default")
      ]),
      _: 3
    }));
  }
}), Ah = /* @__PURE__ */ fe({
  __name: "PopoverTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e, { expose: t }) {
    const n = e, r = Ya(), { primitiveElement: a, currentElement: o } = Xt();
    return Yt(() => {
      r.triggerElement.value = o.value;
    }), t({ $el: o }), (s, i) => (O(), we(Ho(m(r).hasCustomAnchor.value ? m($n) : m(hh)), { "as-child": "" }, {
      default: he(() => [
        se(m($n), {
          ref_key: "primitiveElement",
          ref: a,
          type: s.as === "button" ? "button" : void 0,
          "aria-haspopup": "dialog",
          "aria-expanded": m(r).open.value,
          "aria-controls": m(r).contentId,
          "data-state": m(r).open.value ? "open" : "closed",
          as: s.as,
          "as-child": n.asChild,
          onClick: m(r).onOpenToggle
        }, {
          default: he(() => [
            Re(s.$slots, "default")
          ]),
          _: 3
        }, 8, ["type", "aria-expanded", "aria-controls", "data-state", "as", "as-child", "onClick"])
      ]),
      _: 3
    }));
  }
}), Nh = /* @__PURE__ */ fe({
  __name: "PopoverPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, r) => (O(), we(m(Hm), Lr(hi(t)), {
      default: he(() => [
        Re(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Id = /* @__PURE__ */ fe({
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
    const n = e, r = t, a = wd(n), o = Ya();
    return _d(), (s, i) => (O(), we(m(xd), {
      "as-child": "",
      loop: "",
      trapped: s.trapFocus,
      onMountAutoFocus: i[5] || (i[5] = (l) => r("openAutoFocus", l)),
      onUnmountAutoFocus: i[6] || (i[6] = (l) => r("closeAutoFocus", l))
    }, {
      default: he(() => [
        se(m(kd), {
          "as-child": "",
          "disable-outside-pointer-events": s.disableOutsidePointerEvents,
          onPointerDownOutside: i[0] || (i[0] = (l) => r("pointerDownOutside", l)),
          onInteractOutside: i[1] || (i[1] = (l) => r("interactOutside", l)),
          onEscapeKeyDown: i[2] || (i[2] = (l) => r("escapeKeyDown", l)),
          onFocusOutside: i[3] || (i[3] = (l) => r("focusOutside", l)),
          onDismiss: i[4] || (i[4] = (l) => m(o).onOpenChange(!1))
        }, {
          default: he(() => [
            se(m(Pd), tt(m(a), {
              id: m(o).contentId,
              "data-state": m(o).open.value ? "open" : "closed",
              role: "dialog",
              style: {
                "--radix-popover-content-transform-origin": "var(--radix-popper-transform-origin)",
                "--radix-popover-content-available-width": "var(--radix-popper-available-width)",
                "--radix-popover-content-available-height": "var(--radix-popper-available-height)",
                "--radix-popover-trigger-width": "var(--radix-popper-anchor-width)",
                "--radix-popover-trigger-height": "var(--radix-popper-anchor-height)"
              }
            }), {
              default: he(() => [
                Re(s.$slots, "default")
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
}), Ph = /* @__PURE__ */ fe({
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
    const n = e, r = t, a = Ya(), o = Y(!1);
    yd(!0);
    const s = Jr(n, r), { primitiveElement: i, currentElement: l } = Xt();
    return Mm(l), (c, u) => (O(), we(Id, tt({
      ref_key: "primitiveElement",
      ref: i
    }, m(s), {
      "trap-focus": m(a).open.value,
      "disable-outside-pointer-events": "",
      onCloseAutoFocus: u[0] || (u[0] = Ta(
        (d) => {
          var f;
          r("closeAutoFocus", d), o.value || (f = m(a).triggerElement.value) == null || f.focus();
        },
        ["prevent"]
      )),
      onPointerDownOutside: u[1] || (u[1] = (d) => {
        r("pointerDownOutside", d);
        const f = d.detail.originalEvent, p = f.button === 0 && f.ctrlKey === !0, h = f.button === 2 || p;
        o.value = h;
      }),
      onFocusOutside: u[2] || (u[2] = Ta(() => {
      }, ["prevent"]))
    }), {
      default: he(() => [
        Re(c.$slots, "default")
      ]),
      _: 3
    }, 16, ["trap-focus"]));
  }
}), Sh = /* @__PURE__ */ fe({
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
    const n = e, r = t, a = Ya(), o = Y(!1), s = Y(!1), i = Jr(n, r);
    return (l, c) => (O(), we(Id, tt(m(i), {
      "trap-focus": !1,
      "disable-outside-pointer-events": !1,
      onCloseAutoFocus: c[0] || (c[0] = (u) => {
        var d;
        r("closeAutoFocus", u), u.defaultPrevented || (o.value || (d = m(a).triggerElement.value) == null || d.focus(), u.preventDefault()), o.value = !1, s.value = !1;
      }),
      onInteractOutside: c[1] || (c[1] = async (u) => {
        var d;
        r("interactOutside", u), u.defaultPrevented || (o.value = !0, u.detail.originalEvent.type === "pointerdown" && (s.value = !0));
        const f = u.target;
        (d = m(a).triggerElement.value) != null && d.contains(f) && u.preventDefault(), u.detail.originalEvent.type === "focusin" && s.value && u.preventDefault();
      })
    }), {
      default: he(() => [
        Re(l.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ih = /* @__PURE__ */ fe({
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
    const n = e, r = t, a = Ya(), o = Jr(n, r);
    return (s, i) => (O(), we(m(Od), {
      present: s.forceMount || m(a).open.value
    }, {
      default: he(() => [
        m(a).modal.value ? (O(), we(Ph, Lr(tt({ key: 0 }, m(o))), {
          default: he(() => [
            Re(s.$slots, "default")
          ]),
          _: 3
        }, 16)) : (O(), we(Sh, Lr(tt({ key: 1 }, m(o))), {
          default: he(() => [
            Re(s.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), Mh = /* @__PURE__ */ fe({
  __name: "Popover",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const r = Jr(e, t);
    return (a, o) => (O(), we(m(Ch), Lr(hi(m(r))), {
      default: he(() => [
        Re(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Lh = /* @__PURE__ */ fe({
  __name: "PopoverTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, r) => (O(), we(m(Ah), tt(t, { class: "" }), {
      default: he(() => [
        Re(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
function Md(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number")
    r += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (n = Md(e[t])) && (r && (r += " "), r += n);
    else
      for (t in e)
        e[t] && (r && (r += " "), r += t);
  return r;
}
function Rh() {
  for (var e, t, n = 0, r = ""; n < arguments.length; )
    (e = arguments[n++]) && (t = Md(e)) && (r && (r += " "), r += t);
  return r;
}
const Ni = "-";
function Fh(e) {
  const t = Bh(e), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: r
  } = e;
  function a(s) {
    const i = s.split(Ni);
    return i[0] === "" && i.length !== 1 && i.shift(), Ld(i, t) || Vh(s);
  }
  function o(s, i) {
    const l = n[s] || [];
    return i && r[s] ? [...l, ...r[s]] : l;
  }
  return {
    getClassGroupId: a,
    getConflictingClassGroupIds: o
  };
}
function Ld(e, t) {
  var s;
  if (e.length === 0)
    return t.classGroupId;
  const n = e[0], r = t.nextPart.get(n), a = r ? Ld(e.slice(1), r) : void 0;
  if (a)
    return a;
  if (t.validators.length === 0)
    return;
  const o = e.join(Ni);
  return (s = t.validators.find(({
    validator: i
  }) => i(o))) == null ? void 0 : s.classGroupId;
}
const Yl = /^\[(.+)\]$/;
function Vh(e) {
  if (Yl.test(e)) {
    const t = Yl.exec(e)[1], n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}
function Bh(e) {
  const {
    theme: t,
    prefix: n
  } = e, r = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return Uh(Object.entries(e.classGroups), n).forEach(([o, s]) => {
    Vs(s, r, o, t);
  }), r;
}
function Vs(e, t, n, r) {
  e.forEach((a) => {
    if (typeof a == "string") {
      const o = a === "" ? t : Ul(t, a);
      o.classGroupId = n;
      return;
    }
    if (typeof a == "function") {
      if (Yh(a)) {
        Vs(a(r), t, n, r);
        return;
      }
      t.validators.push({
        validator: a,
        classGroupId: n
      });
      return;
    }
    Object.entries(a).forEach(([o, s]) => {
      Vs(s, Ul(t, o), n, r);
    });
  });
}
function Ul(e, t) {
  let n = e;
  return t.split(Ni).forEach((r) => {
    n.nextPart.has(r) || n.nextPart.set(r, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), n = n.nextPart.get(r);
  }), n;
}
function Yh(e) {
  return e.isThemeGetter;
}
function Uh(e, t) {
  return t ? e.map(([n, r]) => {
    const a = r.map((o) => typeof o == "string" ? t + o : typeof o == "object" ? Object.fromEntries(Object.entries(o).map(([s, i]) => [t + s, i])) : o);
    return [n, a];
  }) : e;
}
function jh(e) {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map();
  function a(o, s) {
    n.set(o, s), t++, t > e && (t = 0, r = n, n = /* @__PURE__ */ new Map());
  }
  return {
    get(o) {
      let s = n.get(o);
      if (s !== void 0)
        return s;
      if ((s = r.get(o)) !== void 0)
        return a(o, s), s;
    },
    set(o, s) {
      n.has(o) ? n.set(o, s) : a(o, s);
    }
  };
}
const Rd = "!";
function Hh(e) {
  const t = e.separator, n = t.length === 1, r = t[0], a = t.length;
  return function(s) {
    const i = [];
    let l = 0, c = 0, u;
    for (let g = 0; g < s.length; g++) {
      let y = s[g];
      if (l === 0) {
        if (y === r && (n || s.slice(g, g + a) === t)) {
          i.push(s.slice(c, g)), c = g + a;
          continue;
        }
        if (y === "/") {
          u = g;
          continue;
        }
      }
      y === "[" ? l++ : y === "]" && l--;
    }
    const d = i.length === 0 ? s : s.substring(c), f = d.startsWith(Rd), p = f ? d.substring(1) : d, h = u && u > c ? u - c : void 0;
    return {
      modifiers: i,
      hasImportantModifier: f,
      baseClassName: p,
      maybePostfixModifierPosition: h
    };
  };
}
function Wh(e) {
  if (e.length <= 1)
    return e;
  const t = [];
  let n = [];
  return e.forEach((r) => {
    r[0] === "[" ? (t.push(...n.sort(), r), n = []) : n.push(r);
  }), t.push(...n.sort()), t;
}
function Gh(e) {
  return {
    cache: jh(e.cacheSize),
    splitModifiers: Hh(e),
    ...Fh(e)
  };
}
const zh = /\s+/;
function Kh(e, t) {
  const {
    splitModifiers: n,
    getClassGroupId: r,
    getConflictingClassGroupIds: a
  } = t, o = /* @__PURE__ */ new Set();
  return e.trim().split(zh).map((s) => {
    const {
      modifiers: i,
      hasImportantModifier: l,
      baseClassName: c,
      maybePostfixModifierPosition: u
    } = n(s);
    let d = r(u ? c.substring(0, u) : c), f = !!u;
    if (!d) {
      if (!u)
        return {
          isTailwindClass: !1,
          originalClassName: s
        };
      if (d = r(c), !d)
        return {
          isTailwindClass: !1,
          originalClassName: s
        };
      f = !1;
    }
    const p = Wh(i).join(":");
    return {
      isTailwindClass: !0,
      modifierId: l ? p + Rd : p,
      classGroupId: d,
      originalClassName: s,
      hasPostfixModifier: f
    };
  }).reverse().filter((s) => {
    if (!s.isTailwindClass)
      return !0;
    const {
      modifierId: i,
      classGroupId: l,
      hasPostfixModifier: c
    } = s, u = i + l;
    return o.has(u) ? !1 : (o.add(u), a(l, c).forEach((d) => o.add(i + d)), !0);
  }).reverse().map((s) => s.originalClassName).join(" ");
}
function qh() {
  let e = 0, t, n, r = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = Fd(t)) && (r && (r += " "), r += n);
  return r;
}
function Fd(e) {
  if (typeof e == "string")
    return e;
  let t, n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = Fd(e[r])) && (n && (n += " "), n += t);
  return n;
}
function Zh(e, ...t) {
  let n, r, a, o = s;
  function s(l) {
    const c = t.reduce((u, d) => d(u), e());
    return n = Gh(c), r = n.cache.get, a = n.cache.set, o = i, i(l);
  }
  function i(l) {
    const c = r(l);
    if (c)
      return c;
    const u = Kh(l, n);
    return a(l, u), u;
  }
  return function() {
    return o(qh.apply(null, arguments));
  };
}
function Ke(e) {
  const t = (n) => n[e] || [];
  return t.isThemeGetter = !0, t;
}
const Vd = /^\[(?:([a-z-]+):)?(.+)\]$/i, Xh = /^\d+\/\d+$/, Jh = /* @__PURE__ */ new Set(["px", "full", "screen"]), Qh = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, eg = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, tg = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, ng = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
function Wt(e) {
  return ar(e) || Jh.has(e) || Xh.test(e);
}
function Mn(e) {
  return Qr(e, "length", cg);
}
function ar(e) {
  return !!e && !Number.isNaN(Number(e));
}
function eo(e) {
  return Qr(e, "number", ar);
}
function pa(e) {
  return !!e && Number.isInteger(Number(e));
}
function rg(e) {
  return e.endsWith("%") && ar(e.slice(0, -1));
}
function xe(e) {
  return Vd.test(e);
}
function Ln(e) {
  return Qh.test(e);
}
const ag = /* @__PURE__ */ new Set(["length", "size", "percentage"]);
function og(e) {
  return Qr(e, ag, Bd);
}
function sg(e) {
  return Qr(e, "position", Bd);
}
const ig = /* @__PURE__ */ new Set(["image", "url"]);
function lg(e) {
  return Qr(e, ig, fg);
}
function ug(e) {
  return Qr(e, "", dg);
}
function va() {
  return !0;
}
function Qr(e, t, n) {
  const r = Vd.exec(e);
  return r ? r[1] ? typeof t == "string" ? r[1] === t : t.has(r[1]) : n(r[2]) : !1;
}
function cg(e) {
  return eg.test(e);
}
function Bd() {
  return !1;
}
function dg(e) {
  return tg.test(e);
}
function fg(e) {
  return ng.test(e);
}
function pg() {
  const e = Ke("colors"), t = Ke("spacing"), n = Ke("blur"), r = Ke("brightness"), a = Ke("borderColor"), o = Ke("borderRadius"), s = Ke("borderSpacing"), i = Ke("borderWidth"), l = Ke("contrast"), c = Ke("grayscale"), u = Ke("hueRotate"), d = Ke("invert"), f = Ke("gap"), p = Ke("gradientColorStops"), h = Ke("gradientColorStopPositions"), g = Ke("inset"), y = Ke("margin"), v = Ke("opacity"), b = Ke("padding"), E = Ke("saturate"), _ = Ke("scale"), T = Ke("sepia"), D = Ke("skew"), N = Ke("space"), I = Ke("translate"), L = () => ["auto", "contain", "none"], x = () => ["auto", "hidden", "clip", "visible", "scroll"], R = () => ["auto", xe, t], P = () => [xe, t], G = () => ["", Wt, Mn], ee = () => ["auto", ar, xe], X = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], ae = () => ["solid", "dashed", "dotted", "double", "none"], le = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "plus-lighter"], Ee = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], ve = () => ["", "0", xe], W = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], ce = () => [ar, eo], Me = () => [ar, xe];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [va],
      spacing: [Wt, Mn],
      blur: ["none", "", Ln, xe],
      brightness: ce(),
      borderColor: [e],
      borderRadius: ["none", "", "full", Ln, xe],
      borderSpacing: P(),
      borderWidth: G(),
      contrast: ce(),
      grayscale: ve(),
      hueRotate: Me(),
      invert: ve(),
      gap: P(),
      gradientColorStops: [e],
      gradientColorStopPositions: [rg, Mn],
      inset: R(),
      margin: R(),
      opacity: ce(),
      padding: P(),
      saturate: ce(),
      scale: ce(),
      sepia: ve(),
      skew: Me(),
      space: P(),
      translate: P()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", xe]
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
        columns: [Ln]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": W()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": W()
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
        object: [...X(), xe]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: x()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": x()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": x()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: L()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": L()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": L()
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
        inset: [g]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [g]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [g]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [g]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [g]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [g]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [g]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [g]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [g]
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
        z: ["auto", pa, xe]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: R()
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
        flex: ["1", "auto", "initial", "none", xe]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ve()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ve()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", pa, xe]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [va]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", pa, xe]
        }, xe]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": ee()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": ee()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [va]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [pa, xe]
        }, xe]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": ee()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": ee()
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
        "auto-cols": ["auto", "min", "max", "fr", xe]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", xe]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [f]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [f]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [f]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal", ...Ee()]
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
        content: ["normal", ...Ee(), "baseline"]
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
        "place-content": [...Ee(), "baseline"]
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
        p: [b]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [b]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [b]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [b]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [b]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [b]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [b]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [b]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [b]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [y]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [y]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [y]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [y]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [y]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [y]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [y]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [y]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [y]
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
        w: ["auto", "min", "max", "fit", xe, t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": ["min", "max", "fit", xe, Wt]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": ["0", "none", "full", "min", "max", "fit", "prose", {
          screen: [Ln]
        }, Ln, xe]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [xe, t, "auto", "min", "max", "fit"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["min", "max", "fit", Wt, xe]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [xe, t, "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", Ln, Mn]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", eo]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [va]
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
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", xe]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", ar, eo]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", Wt, xe]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", xe]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", xe]
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
        "placeholder-opacity": [v]
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
        "text-opacity": [v]
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
        decoration: [...ae(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", Wt, Mn]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", Wt, xe]
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
        indent: P()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", xe]
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
        content: ["none", xe]
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
        "bg-opacity": [v]
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
        bg: [...X(), sg]
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
        bg: ["auto", "cover", "contain", og]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, lg]
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
        from: [h]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [h]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [h]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [p]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [p]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [p]
      }],
      // Borders
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: [o]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [o]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [o]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [o]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [o]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [o]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [o]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [o]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [o]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [o]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [o]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [o]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [o]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [o]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [o]
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: [i]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [i]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [i]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [i]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [i]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [i]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [i]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [i]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [i]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      "border-opacity": [{
        "border-opacity": [v]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...ae(), "hidden"]
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [i]
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
        "divide-y": [i]
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
        "divide-opacity": [v]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: ae()
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
        outline: ["", ...ae()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [Wt, xe]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [Wt, Mn]
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
        ring: G()
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
        "ring-opacity": [v]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [Wt, Mn]
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
        shadow: ["", "inner", "none", Ln, ug]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [va]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [v]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": le()
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": le()
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
        contrast: [l]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", Ln, xe]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [c]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [u]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [d]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [E]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [T]
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
        "backdrop-contrast": [l]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": [c]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [u]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [d]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [v]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [E]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [T]
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
        "border-spacing": [s]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [s]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [s]
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
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", xe]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: Me()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", xe]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: Me()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", xe]
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
        scale: [_]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [_]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [_]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [pa, xe]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [I]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [I]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [D]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [D]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", xe]
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", xe]
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
        "scroll-m": P()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": P()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": P()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": P()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": P()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": P()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": P()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": P()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": P()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": P()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": P()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": P()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": P()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": P()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": P()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": P()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": P()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": P()
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
        "will-change": ["auto", "scroll", "contents", "transform", xe]
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
        stroke: [Wt, Mn, eo]
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
const vg = /* @__PURE__ */ Zh(pg);
function Yd(...e) {
  return vg(Rh(e));
}
const mg = /* @__PURE__ */ fe({
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
    const n = e, r = Jr(n, t);
    return (a, o) => (O(), we(m(Nh), null, {
      default: he(() => [
        se(m(Ih), tt({ ...m(r), ...a.$attrs }, {
          class: m(Yd)(
            "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
            n.class
          )
        }), {
          default: he(() => [
            Re(a.$slots, "default")
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), hg = {
  key: 0,
  class: "flex items-center gap-2 relative"
}, gg = /* @__PURE__ */ $("span", { class: "p3-r text-dark-4" }, "指定時段", -1), yg = { class: "flex gap-6" }, bg = { class: "p3-b text-true-blue-3 flex cursor-pointer items-center justify-center gap-2 rounded shadow-01 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50" }, _g = /* @__PURE__ */ $("template", null, null, -1), wg = { class: "shadow-01 bg-light-5 z-[2] p-2 rounded flex flex-col gap-2" }, Eg = /* @__PURE__ */ $("div", { class: "p3-b text-true-blue-3 w-fit flex cursor-pointer items-center justify-center gap-2 rounded shadow-01 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50" }, " 月份 ", -1), Og = {
  key: 0,
  class: "border-t p-2"
}, Dg = { class: "flex gap-1.5 flex-wrap" }, kg = {
  key: 1,
  class: "shadow-01 flex w-fit items-center py-1 px-2 rounded p3-r text-dark-3"
}, $g = ["onClick"], xg = {
  key: 0,
  class: "text-dark-5 mx-1"
}, Tg = {
  key: 2,
  class: "flex gap-4 flex-wrap p-2 border-t"
}, Cg = /* @__PURE__ */ fe({
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
    const n = e, r = Y(n.monthDate), a = Y(n.weekOrdinal), o = Y(n.weekdays), s = Y(n.yearMonths), i = (E, _, T = !1) => {
      if (T) {
        _.findIndex((D) => D === E) === -1 ? _.push(E) : _.splice(_.indexOf(E), 1), _.sort((D, N) => D - N);
        return;
      }
      _.value.findIndex((D) => D === E) === -1 ? _.value.push(E) : _.value.splice(_.value.indexOf(E), 1), _.value.sort((D, N) => D - N);
    }, l = Y(""), c = Be("eventData");
    Et(() => {
      t(
        "update:monthDate",
        r.value.length ? r.value : null
      ), t(
        "update:weekOrdinal",
        a.value.length ? a.value : null
      ), t(
        "update:weekdays",
        o.value.length ? o.value : null
      ), t(
        "update:yearMonths",
        s.value.length ? s.value : null
      ), l.value = Dv(c.value, !0);
    });
    const u = Y([
      { name: "星期日", id: At.Sunday },
      { name: "星期一", id: At.Monday },
      { name: "星期二", id: At.Tuesday },
      { name: "星期三", id: At.Wednesday },
      { name: "星期四", id: At.Thursday },
      { name: "星期五", id: At.Friday },
      { name: "星期六", id: At.Saturday },
      { name: "平日", id: At.Weekday },
      { name: "週末", id: At.Weekend }
    ]), d = Y([
      { name: "第一週", id: bn.First },
      { name: "第二週", id: bn.Second },
      { name: "第三週", id: bn.Third },
      { name: "第四週", id: bn.Fourth },
      { name: "第五週", id: bn.Fifth },
      { name: "最後一週", id: bn.Last }
    ]), f = Y([
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
    ]), p = Y([
      {
        name: "一月",
        id: gt.January
      },
      {
        name: "二月",
        id: gt.February
      },
      {
        name: "三月",
        id: gt.March
      },
      {
        name: "四月",
        id: gt.April
      },
      {
        name: "五月",
        id: gt.May
      },
      {
        name: "六月",
        id: gt.June
      },
      {
        name: "七月",
        id: gt.July
      },
      {
        name: "八月",
        id: gt.August
      },
      {
        name: "九月",
        id: gt.September
      },
      {
        name: "十月",
        id: gt.October
      },
      {
        name: "十一月",
        id: gt.November
      },
      {
        name: "十二月",
        id: gt.December
      }
    ]), h = C(() => {
      if (n.type === Ve.Week)
        return [
          {
            key: o,
            label: "weekdaysOrigin",
            options: u.value
          }
        ];
      if (n.type === Ve.Month) {
        if (v.value.id === 0)
          return [
            {
              key: a,
              label: "weekOrdinalOrigin",
              options: d.value
            },
            {
              key: o,
              label: "weekdaysOrigin",
              options: u.value
            }
          ];
        if (v.value.id === 1)
          return [
            {
              key: r,
              label: "monthDateOrigin",
              options: f.value
            }
          ];
      }
      if (n.type === Ve.Annual) {
        if (v.value.id === 0)
          return [
            {
              key: a,
              label: "weekOrdinalOrigin",
              options: d.value
            },
            {
              key: o,
              label: "weekdaysOrigin",
              options: u.value
            }
          ];
        if (v.value.id === 1)
          return [
            {
              key: r,
              label: "monthDateOrigin",
              options: f.value
            }
          ];
      }
    }), g = C(() => n.type === Ve.Month || n.type === Ve.Annual ? !0 : (r.value = [], a.value = [], o.value = [], s.value = [], !1)), y = Y([
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
    ]), v = Y(y.value[0]);
    _e(v, (E) => {
      if (E.id === 0) {
        r.value = [];
        return;
      }
      if (E.id === 1) {
        a.value = [], o.value = [];
        return;
      }
    }), _e(
      () => n.type,
      (E) => {
        (E === Ve.Month || E === Ve.Annual) && (E != Ve.Annual && (s.value = []), f.value && f.value.length > 0 ? v.value = y.value[1] : v.value = y.value[0]);
      },
      { immediate: !0 }
    ), Xc(() => {
      r.value = [], a.value = [], o.value = [], s.value = [];
    });
    const b = C(() => {
      if (n.type === Ve.Week)
        return !!o.value.length;
      if (n.type === Ve.Month) {
        if (v.value.id == 0)
          return !!a.value.length || !!o.value.length;
        if (v.value.id == 1)
          return !!r.value.length;
      }
      if (n.type === Ve.Annual) {
        if (v.value.id == 0)
          return !!s.value.length || !!a.value.length || !!o.value.length;
        if (v.value.id == 1)
          return !!s.value.length || !!r.value.length;
      }
    });
    return (E, _) => E.type === m(Ve).Annual || m(h) ? (O(), A("div", hg, [
      gg,
      se(m(Mh), null, {
        default: he(() => [
          se(m(Lh), null, {
            default: he(() => [
              $("div", yg, [
                $("span", bg, be(m(b) ? m(l) : "未設定"), 1),
                _g
              ])
            ]),
            _: 1
          }),
          se(m(mg), {
            class: "shadow-none border-none p-0 w-96",
            align: "start",
            side: "bottom"
          }, {
            default: he(() => [
              $("div", wg, [
                Eg,
                E.type === m(Ve).Annual ? (O(), A("div", Og, [
                  $("div", Dg, [
                    (O(!0), A(ie, null, Ae(m(p), (T) => {
                      var D;
                      return O(), we(Cl, {
                        key: T.id,
                        checked: (D = m(s)) == null ? void 0 : D.includes(T.id),
                        "onUpdate:checked": (N) => i(T.id, m(s), !0),
                        fieldId: T.name,
                        label: T.name
                      }, null, 8, ["checked", "onUpdate:checked", "fieldId", "label"]);
                    }), 128))
                  ])
                ])) : Z("", !0),
                m(g) ? (O(), A("div", kg, [
                  (O(!0), A(ie, null, Ae(m(y), (T, D) => (O(), A("div", {
                    class: "flex items-center",
                    key: T
                  }, [
                    Number.isInteger(T) ? Z("", !0) : (O(), A(ie, { key: 0 }, [
                      $("span", {
                        class: Ie(["cursor-pointer hover:drop-shadow-md", [
                          m(v).id == T.id ? "text-true-blue-3 drop-shadow-sm p3-b" : "p3-r"
                        ]]),
                        onClick: (N) => v.value = T
                      }, be(T.name), 11, $g),
                      D < Object.keys(m(v)).filter(
                        (N) => isNaN(Number(N))
                      ).length - 1 ? (O(), A("div", xg, " | ")) : Z("", !0)
                    ], 64))
                  ]))), 128))
                ])) : Z("", !0),
                m(h) ? (O(), A("div", Tg, [
                  (O(!0), A(ie, null, Ae(m(h), (T) => (O(), A("div", {
                    class: "flex gap-1 flex-wrap",
                    key: T
                  }, [
                    (O(!0), A(ie, null, Ae(T.options, (D) => {
                      var N;
                      return O(), we(Cl, {
                        key: D.id,
                        checked: (N = T.key.value) == null ? void 0 : N.includes(D.id),
                        "onUpdate:checked": (I) => i(D.id, T.key),
                        fieldId: D.name,
                        label: D.name
                      }, null, 8, ["checked", "onUpdate:checked", "fieldId", "label"]);
                    }), 128))
                  ]))), 128))
                ])) : Z("", !0)
              ])
            ]),
            _: 1
          })
        ]),
        _: 1
      })
    ])) : Z("", !0);
  }
}), Ag = ["width", "height", "fill", "transform"], Ng = { key: 0 }, Pg = /* @__PURE__ */ $("path", { d: "M216.49,104.49l-80,80a12,12,0,0,1-17,0l-80-80a12,12,0,0,1,17-17L128,159l71.51-71.52a12,12,0,0,1,17,17Z" }, null, -1), Sg = [
  Pg
], Ig = { key: 1 }, Mg = /* @__PURE__ */ $("path", {
  d: "M208,96l-80,80L48,96Z",
  opacity: "0.2"
}, null, -1), Lg = /* @__PURE__ */ $("path", { d: "M215.39,92.94A8,8,0,0,0,208,88H48a8,8,0,0,0-5.66,13.66l80,80a8,8,0,0,0,11.32,0l80-80A8,8,0,0,0,215.39,92.94ZM128,164.69,67.31,104H188.69Z" }, null, -1), Rg = [
  Mg,
  Lg
], Fg = { key: 2 }, Vg = /* @__PURE__ */ $("path", { d: "M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,48,88H208a8,8,0,0,1,5.66,13.66Z" }, null, -1), Bg = [
  Vg
], Yg = { key: 3 }, Ug = /* @__PURE__ */ $("path", { d: "M212.24,100.24l-80,80a6,6,0,0,1-8.48,0l-80-80a6,6,0,0,1,8.48-8.48L128,167.51l75.76-75.75a6,6,0,0,1,8.48,8.48Z" }, null, -1), jg = [
  Ug
], Hg = { key: 4 }, Wg = /* @__PURE__ */ $("path", { d: "M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z" }, null, -1), Gg = [
  Wg
], zg = { key: 5 }, Kg = /* @__PURE__ */ $("path", { d: "M210.83,98.83l-80,80a4,4,0,0,1-5.66,0l-80-80a4,4,0,0,1,5.66-5.66L128,170.34l77.17-77.17a4,4,0,1,1,5.66,5.66Z" }, null, -1), qg = [
  Kg
], Zg = {
  name: "PhCaretDown"
}, Ud = /* @__PURE__ */ fe({
  ...Zg,
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
    const t = e, n = Be("weight", "regular"), r = Be("size", "1em"), a = Be("color", "currentColor"), o = Be("mirrored", !1), s = C(() => t.weight ?? n), i = C(() => t.size ?? r), l = C(() => t.color ?? a), c = C(() => t.mirrored !== void 0 ? t.mirrored ? "scale(-1, 1)" : void 0 : o ? "scale(-1, 1)" : void 0);
    return (u, d) => (O(), A("svg", tt({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 256 256",
      width: i.value,
      height: i.value,
      fill: l.value,
      transform: c.value
    }, u.$attrs), [
      Re(u.$slots, "default"),
      s.value === "bold" ? (O(), A("g", Ng, Sg)) : s.value === "duotone" ? (O(), A("g", Ig, Rg)) : s.value === "fill" ? (O(), A("g", Fg, Bg)) : s.value === "light" ? (O(), A("g", Yg, jg)) : s.value === "regular" ? (O(), A("g", Hg, Gg)) : s.value === "thin" ? (O(), A("g", zg, qg)) : Z("", !0)
    ], 16, Ag));
  }
}), Xg = ["width", "height", "fill", "transform"], Jg = { key: 0 }, Qg = /* @__PURE__ */ $("path", { d: "M216.49,168.49a12,12,0,0,1-17,0L128,97,56.49,168.49a12,12,0,0,1-17-17l80-80a12,12,0,0,1,17,0l80,80A12,12,0,0,1,216.49,168.49Z" }, null, -1), ey = [
  Qg
], ty = { key: 1 }, ny = /* @__PURE__ */ $("path", {
  d: "M208,160H48l80-80Z",
  opacity: "0.2"
}, null, -1), ry = /* @__PURE__ */ $("path", { d: "M213.66,154.34l-80-80a8,8,0,0,0-11.32,0l-80,80A8,8,0,0,0,48,168H208a8,8,0,0,0,5.66-13.66ZM67.31,152,128,91.31,188.69,152Z" }, null, -1), ay = [
  ny,
  ry
], oy = { key: 2 }, sy = /* @__PURE__ */ $("path", { d: "M215.39,163.06A8,8,0,0,1,208,168H48a8,8,0,0,1-5.66-13.66l80-80a8,8,0,0,1,11.32,0l80,80A8,8,0,0,1,215.39,163.06Z" }, null, -1), iy = [
  sy
], ly = { key: 3 }, uy = /* @__PURE__ */ $("path", { d: "M212.24,164.24a6,6,0,0,1-8.48,0L128,88.49,52.24,164.24a6,6,0,0,1-8.48-8.48l80-80a6,6,0,0,1,8.48,0l80,80A6,6,0,0,1,212.24,164.24Z" }, null, -1), cy = [
  uy
], dy = { key: 4 }, fy = /* @__PURE__ */ $("path", { d: "M213.66,165.66a8,8,0,0,1-11.32,0L128,91.31,53.66,165.66a8,8,0,0,1-11.32-11.32l80-80a8,8,0,0,1,11.32,0l80,80A8,8,0,0,1,213.66,165.66Z" }, null, -1), py = [
  fy
], vy = { key: 5 }, my = /* @__PURE__ */ $("path", { d: "M210.83,162.83a4,4,0,0,1-5.66,0L128,85.66,50.83,162.83a4,4,0,0,1-5.66-5.66l80-80a4,4,0,0,1,5.66,0l80,80A4,4,0,0,1,210.83,162.83Z" }, null, -1), hy = [
  my
], gy = {
  name: "PhCaretUp"
}, yy = /* @__PURE__ */ fe({
  ...gy,
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
    const t = e, n = Be("weight", "regular"), r = Be("size", "1em"), a = Be("color", "currentColor"), o = Be("mirrored", !1), s = C(() => t.weight ?? n), i = C(() => t.size ?? r), l = C(() => t.color ?? a), c = C(() => t.mirrored !== void 0 ? t.mirrored ? "scale(-1, 1)" : void 0 : o ? "scale(-1, 1)" : void 0);
    return (u, d) => (O(), A("svg", tt({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 256 256",
      width: i.value,
      height: i.value,
      fill: l.value,
      transform: c.value
    }, u.$attrs), [
      Re(u.$slots, "default"),
      s.value === "bold" ? (O(), A("g", Jg, ey)) : s.value === "duotone" ? (O(), A("g", ty, ay)) : s.value === "fill" ? (O(), A("g", oy, iy)) : s.value === "light" ? (O(), A("g", ly, cy)) : s.value === "regular" ? (O(), A("g", dy, py)) : s.value === "thin" ? (O(), A("g", vy, hy)) : Z("", !0)
    ], 16, Xg));
  }
}), by = ["width", "height", "fill", "transform"], _y = { key: 0 }, wy = /* @__PURE__ */ $("path", { d: "M216,48H180V36A28,28,0,0,0,152,8H104A28,28,0,0,0,76,36V48H40a12,12,0,0,0,0,24h4V208a20,20,0,0,0,20,20H192a20,20,0,0,0,20-20V72h4a12,12,0,0,0,0-24ZM100,36a4,4,0,0,1,4-4h48a4,4,0,0,1,4,4V48H100Zm88,168H68V72H188ZM116,104v64a12,12,0,0,1-24,0V104a12,12,0,0,1,24,0Zm48,0v64a12,12,0,0,1-24,0V104a12,12,0,0,1,24,0Z" }, null, -1), Ey = [
  wy
], Oy = { key: 1 }, Dy = /* @__PURE__ */ $("path", {
  d: "M200,56V208a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V56Z",
  opacity: "0.2"
}, null, -1), ky = /* @__PURE__ */ $("path", { d: "M216,48H176V40a24,24,0,0,0-24-24H104A24,24,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM96,40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96Zm96,168H64V64H192ZM112,104v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Z" }, null, -1), $y = [
  Dy,
  ky
], xy = { key: 2 }, Ty = /* @__PURE__ */ $("path", { d: "M216,48H176V40a24,24,0,0,0-24-24H104A24,24,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM112,168a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm0-120H96V40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8Z" }, null, -1), Cy = [
  Ty
], Ay = { key: 3 }, Ny = /* @__PURE__ */ $("path", { d: "M216,50H174V40a22,22,0,0,0-22-22H104A22,22,0,0,0,82,40V50H40a6,6,0,0,0,0,12H50V208a14,14,0,0,0,14,14H192a14,14,0,0,0,14-14V62h10a6,6,0,0,0,0-12ZM94,40a10,10,0,0,1,10-10h48a10,10,0,0,1,10,10V50H94ZM194,208a2,2,0,0,1-2,2H64a2,2,0,0,1-2-2V62H194ZM110,104v64a6,6,0,0,1-12,0V104a6,6,0,0,1,12,0Zm48,0v64a6,6,0,0,1-12,0V104a6,6,0,0,1,12,0Z" }, null, -1), Py = [
  Ny
], Sy = { key: 4 }, Iy = /* @__PURE__ */ $("path", { d: "M216,48H176V40a24,24,0,0,0-24-24H104A24,24,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM96,40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96Zm96,168H64V64H192ZM112,104v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Z" }, null, -1), My = [
  Iy
], Ly = { key: 5 }, Ry = /* @__PURE__ */ $("path", { d: "M216,52H172V40a20,20,0,0,0-20-20H104A20,20,0,0,0,84,40V52H40a4,4,0,0,0,0,8H52V208a12,12,0,0,0,12,12H192a12,12,0,0,0,12-12V60h12a4,4,0,0,0,0-8ZM92,40a12,12,0,0,1,12-12h48a12,12,0,0,1,12,12V52H92ZM196,208a4,4,0,0,1-4,4H64a4,4,0,0,1-4-4V60H196ZM108,104v64a4,4,0,0,1-8,0V104a4,4,0,0,1,8,0Zm48,0v64a4,4,0,0,1-8,0V104a4,4,0,0,1,8,0Z" }, null, -1), Fy = [
  Ry
], Vy = {
  name: "PhTrash"
}, jd = /* @__PURE__ */ fe({
  ...Vy,
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
    const t = e, n = Be("weight", "regular"), r = Be("size", "1em"), a = Be("color", "currentColor"), o = Be("mirrored", !1), s = C(() => t.weight ?? n), i = C(() => t.size ?? r), l = C(() => t.color ?? a), c = C(() => t.mirrored !== void 0 ? t.mirrored ? "scale(-1, 1)" : void 0 : o ? "scale(-1, 1)" : void 0);
    return (u, d) => (O(), A("svg", tt({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 256 256",
      width: i.value,
      height: i.value,
      fill: l.value,
      transform: c.value
    }, u.$attrs), [
      Re(u.$slots, "default"),
      s.value === "bold" ? (O(), A("g", _y, Ey)) : s.value === "duotone" ? (O(), A("g", Oy, $y)) : s.value === "fill" ? (O(), A("g", xy, Cy)) : s.value === "light" ? (O(), A("g", Ay, Py)) : s.value === "regular" ? (O(), A("g", Sy, My)) : s.value === "thin" ? (O(), A("g", Ly, Fy)) : Z("", !0)
    ], 16, by));
  }
}), By = ["width", "height", "fill", "transform"], Yy = { key: 0 }, Uy = /* @__PURE__ */ $("path", { d: "M208.49,191.51a12,12,0,0,1-17,17L128,145,64.49,208.49a12,12,0,0,1-17-17L111,128,47.51,64.49a12,12,0,0,1,17-17L128,111l63.51-63.52a12,12,0,0,1,17,17L145,128Z" }, null, -1), jy = [
  Uy
], Hy = { key: 1 }, Wy = /* @__PURE__ */ $("path", {
  d: "M216,48V208a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H208A8,8,0,0,1,216,48Z",
  opacity: "0.2"
}, null, -1), Gy = /* @__PURE__ */ $("path", { d: "M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z" }, null, -1), zy = [
  Wy,
  Gy
], Ky = { key: 2 }, qy = /* @__PURE__ */ $("path", { d: "M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM181.66,170.34a8,8,0,0,1-11.32,11.32L128,139.31,85.66,181.66a8,8,0,0,1-11.32-11.32L116.69,128,74.34,85.66A8,8,0,0,1,85.66,74.34L128,116.69l42.34-42.35a8,8,0,0,1,11.32,11.32L139.31,128Z" }, null, -1), Zy = [
  qy
], Xy = { key: 3 }, Jy = /* @__PURE__ */ $("path", { d: "M204.24,195.76a6,6,0,1,1-8.48,8.48L128,136.49,60.24,204.24a6,6,0,0,1-8.48-8.48L119.51,128,51.76,60.24a6,6,0,0,1,8.48-8.48L128,119.51l67.76-67.75a6,6,0,0,1,8.48,8.48L136.49,128Z" }, null, -1), Qy = [
  Jy
], eb = { key: 4 }, tb = /* @__PURE__ */ $("path", { d: "M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z" }, null, -1), nb = [
  tb
], rb = { key: 5 }, ab = /* @__PURE__ */ $("path", { d: "M202.83,197.17a4,4,0,0,1-5.66,5.66L128,133.66,58.83,202.83a4,4,0,0,1-5.66-5.66L122.34,128,53.17,58.83a4,4,0,0,1,5.66-5.66L128,122.34l69.17-69.17a4,4,0,1,1,5.66,5.66L133.66,128Z" }, null, -1), ob = [
  ab
], sb = {
  name: "PhX"
}, Fr = /* @__PURE__ */ fe({
  ...sb,
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
    const t = e, n = Be("weight", "regular"), r = Be("size", "1em"), a = Be("color", "currentColor"), o = Be("mirrored", !1), s = C(() => t.weight ?? n), i = C(() => t.size ?? r), l = C(() => t.color ?? a), c = C(() => t.mirrored !== void 0 ? t.mirrored ? "scale(-1, 1)" : void 0 : o ? "scale(-1, 1)" : void 0);
    return (u, d) => (O(), A("svg", tt({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 256 256",
      width: i.value,
      height: i.value,
      fill: l.value,
      transform: c.value
    }, u.$attrs), [
      Re(u.$slots, "default"),
      s.value === "bold" ? (O(), A("g", Yy, jy)) : s.value === "duotone" ? (O(), A("g", Hy, zy)) : s.value === "fill" ? (O(), A("g", Ky, Zy)) : s.value === "light" ? (O(), A("g", Xy, Qy)) : s.value === "regular" ? (O(), A("g", eb, nb)) : s.value === "thin" ? (O(), A("g", rb, ob)) : Z("", !0)
    ], 16, By));
  }
});
var _t = "top", Vt = "bottom", Bt = "right", wt = "left", Pi = "auto", Ua = [_t, Vt, Bt, wt], Vr = "start", Na = "end", ib = "clippingParents", Hd = "viewport", ma = "popper", lb = "reference", jl = /* @__PURE__ */ Ua.reduce(function(e, t) {
  return e.concat([t + "-" + Vr, t + "-" + Na]);
}, []), Wd = /* @__PURE__ */ [].concat(Ua, [Pi]).reduce(function(e, t) {
  return e.concat([t, t + "-" + Vr, t + "-" + Na]);
}, []), ub = "beforeRead", cb = "read", db = "afterRead", fb = "beforeMain", pb = "main", vb = "afterMain", mb = "beforeWrite", hb = "write", gb = "afterWrite", yb = [ub, cb, db, fb, pb, vb, mb, hb, gb];
function cn(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function xt(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function cr(e) {
  var t = xt(e).Element;
  return e instanceof t || e instanceof Element;
}
function It(e) {
  var t = xt(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Si(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = xt(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function bb(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var r = t.styles[n] || {}, a = t.attributes[n] || {}, o = t.elements[n];
    !It(o) || !cn(o) || (Object.assign(o.style, r), Object.keys(a).forEach(function(s) {
      var i = a[s];
      i === !1 ? o.removeAttribute(s) : o.setAttribute(s, i === !0 ? "" : i);
    }));
  });
}
function _b(e) {
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
      var a = t.elements[r], o = t.attributes[r] || {}, s = Object.keys(t.styles.hasOwnProperty(r) ? t.styles[r] : n[r]), i = s.reduce(function(l, c) {
        return l[c] = "", l;
      }, {});
      !It(a) || !cn(a) || (Object.assign(a.style, i), Object.keys(o).forEach(function(l) {
        a.removeAttribute(l);
      }));
    });
  };
}
const wb = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: bb,
  effect: _b,
  requires: ["computeStyles"]
};
function ln(e) {
  return e.split("-")[0];
}
var lr = Math.max, Oo = Math.min, Br = Math.round;
function Bs() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function Gd() {
  return !/^((?!chrome|android).)*safari/i.test(Bs());
}
function Yr(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var r = e.getBoundingClientRect(), a = 1, o = 1;
  t && It(e) && (a = e.offsetWidth > 0 && Br(r.width) / e.offsetWidth || 1, o = e.offsetHeight > 0 && Br(r.height) / e.offsetHeight || 1);
  var s = cr(e) ? xt(e) : window, i = s.visualViewport, l = !Gd() && n, c = (r.left + (l && i ? i.offsetLeft : 0)) / a, u = (r.top + (l && i ? i.offsetTop : 0)) / o, d = r.width / a, f = r.height / o;
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
function Ii(e) {
  var t = Yr(e), n = e.offsetWidth, r = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: n,
    height: r
  };
}
function zd(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && Si(n)) {
    var r = t;
    do {
      if (r && e.isSameNode(r))
        return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function xn(e) {
  return xt(e).getComputedStyle(e);
}
function Eb(e) {
  return ["table", "td", "th"].indexOf(cn(e)) >= 0;
}
function Qn(e) {
  return ((cr(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function Ko(e) {
  return cn(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (Si(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    Qn(e)
  );
}
function Hl(e) {
  return !It(e) || // https://github.com/popperjs/popper-core/issues/837
  xn(e).position === "fixed" ? null : e.offsetParent;
}
function Ob(e) {
  var t = /firefox/i.test(Bs()), n = /Trident/i.test(Bs());
  if (n && It(e)) {
    var r = xn(e);
    if (r.position === "fixed")
      return null;
  }
  var a = Ko(e);
  for (Si(a) && (a = a.host); It(a) && ["html", "body"].indexOf(cn(a)) < 0; ) {
    var o = xn(a);
    if (o.transform !== "none" || o.perspective !== "none" || o.contain === "paint" || ["transform", "perspective"].indexOf(o.willChange) !== -1 || t && o.willChange === "filter" || t && o.filter && o.filter !== "none")
      return a;
    a = a.parentNode;
  }
  return null;
}
function ja(e) {
  for (var t = xt(e), n = Hl(e); n && Eb(n) && xn(n).position === "static"; )
    n = Hl(n);
  return n && (cn(n) === "html" || cn(n) === "body" && xn(n).position === "static") ? t : n || Ob(e) || t;
}
function Mi(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Da(e, t, n) {
  return lr(e, Oo(t, n));
}
function Db(e, t, n) {
  var r = Da(e, t, n);
  return r > n ? n : r;
}
function Kd() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function qd(e) {
  return Object.assign({}, Kd(), e);
}
function Zd(e, t) {
  return t.reduce(function(n, r) {
    return n[r] = e, n;
  }, {});
}
var kb = function(t, n) {
  return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
    placement: n.placement
  })) : t, qd(typeof t != "number" ? t : Zd(t, Ua));
};
function $b(e) {
  var t, n = e.state, r = e.name, a = e.options, o = n.elements.arrow, s = n.modifiersData.popperOffsets, i = ln(n.placement), l = Mi(i), c = [wt, Bt].indexOf(i) >= 0, u = c ? "height" : "width";
  if (!(!o || !s)) {
    var d = kb(a.padding, n), f = Ii(o), p = l === "y" ? _t : wt, h = l === "y" ? Vt : Bt, g = n.rects.reference[u] + n.rects.reference[l] - s[l] - n.rects.popper[u], y = s[l] - n.rects.reference[l], v = ja(o), b = v ? l === "y" ? v.clientHeight || 0 : v.clientWidth || 0 : 0, E = g / 2 - y / 2, _ = d[p], T = b - f[u] - d[h], D = b / 2 - f[u] / 2 + E, N = Da(_, D, T), I = l;
    n.modifiersData[r] = (t = {}, t[I] = N, t.centerOffset = N - D, t);
  }
}
function xb(e) {
  var t = e.state, n = e.options, r = n.element, a = r === void 0 ? "[data-popper-arrow]" : r;
  a != null && (typeof a == "string" && (a = t.elements.popper.querySelector(a), !a) || zd(t.elements.popper, a) && (t.elements.arrow = a));
}
const Tb = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: $b,
  effect: xb,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function Ur(e) {
  return e.split("-")[1];
}
var Cb = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function Ab(e, t) {
  var n = e.x, r = e.y, a = t.devicePixelRatio || 1;
  return {
    x: Br(n * a) / a || 0,
    y: Br(r * a) / a || 0
  };
}
function Wl(e) {
  var t, n = e.popper, r = e.popperRect, a = e.placement, o = e.variation, s = e.offsets, i = e.position, l = e.gpuAcceleration, c = e.adaptive, u = e.roundOffsets, d = e.isFixed, f = s.x, p = f === void 0 ? 0 : f, h = s.y, g = h === void 0 ? 0 : h, y = typeof u == "function" ? u({
    x: p,
    y: g
  }) : {
    x: p,
    y: g
  };
  p = y.x, g = y.y;
  var v = s.hasOwnProperty("x"), b = s.hasOwnProperty("y"), E = wt, _ = _t, T = window;
  if (c) {
    var D = ja(n), N = "clientHeight", I = "clientWidth";
    if (D === xt(n) && (D = Qn(n), xn(D).position !== "static" && i === "absolute" && (N = "scrollHeight", I = "scrollWidth")), D = D, a === _t || (a === wt || a === Bt) && o === Na) {
      _ = Vt;
      var L = d && D === T && T.visualViewport ? T.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        D[N]
      );
      g -= L - r.height, g *= l ? 1 : -1;
    }
    if (a === wt || (a === _t || a === Vt) && o === Na) {
      E = Bt;
      var x = d && D === T && T.visualViewport ? T.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        D[I]
      );
      p -= x - r.width, p *= l ? 1 : -1;
    }
  }
  var R = Object.assign({
    position: i
  }, c && Cb), P = u === !0 ? Ab({
    x: p,
    y: g
  }, xt(n)) : {
    x: p,
    y: g
  };
  if (p = P.x, g = P.y, l) {
    var G;
    return Object.assign({}, R, (G = {}, G[_] = b ? "0" : "", G[E] = v ? "0" : "", G.transform = (T.devicePixelRatio || 1) <= 1 ? "translate(" + p + "px, " + g + "px)" : "translate3d(" + p + "px, " + g + "px, 0)", G));
  }
  return Object.assign({}, R, (t = {}, t[_] = b ? g + "px" : "", t[E] = v ? p + "px" : "", t.transform = "", t));
}
function Nb(e) {
  var t = e.state, n = e.options, r = n.gpuAcceleration, a = r === void 0 ? !0 : r, o = n.adaptive, s = o === void 0 ? !0 : o, i = n.roundOffsets, l = i === void 0 ? !0 : i, c = {
    placement: ln(t.placement),
    variation: Ur(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: a,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Wl(Object.assign({}, c, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: s,
    roundOffsets: l
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Wl(Object.assign({}, c, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: l
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const Pb = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: Nb,
  data: {}
};
var to = {
  passive: !0
};
function Sb(e) {
  var t = e.state, n = e.instance, r = e.options, a = r.scroll, o = a === void 0 ? !0 : a, s = r.resize, i = s === void 0 ? !0 : s, l = xt(t.elements.popper), c = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return o && c.forEach(function(u) {
    u.addEventListener("scroll", n.update, to);
  }), i && l.addEventListener("resize", n.update, to), function() {
    o && c.forEach(function(u) {
      u.removeEventListener("scroll", n.update, to);
    }), i && l.removeEventListener("resize", n.update, to);
  };
}
const Ib = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: Sb,
  data: {}
};
var Mb = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function io(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return Mb[t];
  });
}
var Lb = {
  start: "end",
  end: "start"
};
function Gl(e) {
  return e.replace(/start|end/g, function(t) {
    return Lb[t];
  });
}
function Li(e) {
  var t = xt(e), n = t.pageXOffset, r = t.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: r
  };
}
function Ri(e) {
  return Yr(Qn(e)).left + Li(e).scrollLeft;
}
function Rb(e, t) {
  var n = xt(e), r = Qn(e), a = n.visualViewport, o = r.clientWidth, s = r.clientHeight, i = 0, l = 0;
  if (a) {
    o = a.width, s = a.height;
    var c = Gd();
    (c || !c && t === "fixed") && (i = a.offsetLeft, l = a.offsetTop);
  }
  return {
    width: o,
    height: s,
    x: i + Ri(e),
    y: l
  };
}
function Fb(e) {
  var t, n = Qn(e), r = Li(e), a = (t = e.ownerDocument) == null ? void 0 : t.body, o = lr(n.scrollWidth, n.clientWidth, a ? a.scrollWidth : 0, a ? a.clientWidth : 0), s = lr(n.scrollHeight, n.clientHeight, a ? a.scrollHeight : 0, a ? a.clientHeight : 0), i = -r.scrollLeft + Ri(e), l = -r.scrollTop;
  return xn(a || n).direction === "rtl" && (i += lr(n.clientWidth, a ? a.clientWidth : 0) - o), {
    width: o,
    height: s,
    x: i,
    y: l
  };
}
function Fi(e) {
  var t = xn(e), n = t.overflow, r = t.overflowX, a = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + a + r);
}
function Xd(e) {
  return ["html", "body", "#document"].indexOf(cn(e)) >= 0 ? e.ownerDocument.body : It(e) && Fi(e) ? e : Xd(Ko(e));
}
function ka(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = Xd(e), a = r === ((n = e.ownerDocument) == null ? void 0 : n.body), o = xt(r), s = a ? [o].concat(o.visualViewport || [], Fi(r) ? r : []) : r, i = t.concat(s);
  return a ? i : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    i.concat(ka(Ko(s)))
  );
}
function Ys(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function Vb(e, t) {
  var n = Yr(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function zl(e, t, n) {
  return t === Hd ? Ys(Rb(e, n)) : cr(t) ? Vb(t, n) : Ys(Fb(Qn(e)));
}
function Bb(e) {
  var t = ka(Ko(e)), n = ["absolute", "fixed"].indexOf(xn(e).position) >= 0, r = n && It(e) ? ja(e) : e;
  return cr(r) ? t.filter(function(a) {
    return cr(a) && zd(a, r) && cn(a) !== "body";
  }) : [];
}
function Yb(e, t, n, r) {
  var a = t === "clippingParents" ? Bb(e) : [].concat(t), o = [].concat(a, [n]), s = o[0], i = o.reduce(function(l, c) {
    var u = zl(e, c, r);
    return l.top = lr(u.top, l.top), l.right = Oo(u.right, l.right), l.bottom = Oo(u.bottom, l.bottom), l.left = lr(u.left, l.left), l;
  }, zl(e, s, r));
  return i.width = i.right - i.left, i.height = i.bottom - i.top, i.x = i.left, i.y = i.top, i;
}
function Jd(e) {
  var t = e.reference, n = e.element, r = e.placement, a = r ? ln(r) : null, o = r ? Ur(r) : null, s = t.x + t.width / 2 - n.width / 2, i = t.y + t.height / 2 - n.height / 2, l;
  switch (a) {
    case _t:
      l = {
        x: s,
        y: t.y - n.height
      };
      break;
    case Vt:
      l = {
        x: s,
        y: t.y + t.height
      };
      break;
    case Bt:
      l = {
        x: t.x + t.width,
        y: i
      };
      break;
    case wt:
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
  var c = a ? Mi(a) : null;
  if (c != null) {
    var u = c === "y" ? "height" : "width";
    switch (o) {
      case Vr:
        l[c] = l[c] - (t[u] / 2 - n[u] / 2);
        break;
      case Na:
        l[c] = l[c] + (t[u] / 2 - n[u] / 2);
        break;
    }
  }
  return l;
}
function Pa(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, a = r === void 0 ? e.placement : r, o = n.strategy, s = o === void 0 ? e.strategy : o, i = n.boundary, l = i === void 0 ? ib : i, c = n.rootBoundary, u = c === void 0 ? Hd : c, d = n.elementContext, f = d === void 0 ? ma : d, p = n.altBoundary, h = p === void 0 ? !1 : p, g = n.padding, y = g === void 0 ? 0 : g, v = qd(typeof y != "number" ? y : Zd(y, Ua)), b = f === ma ? lb : ma, E = e.rects.popper, _ = e.elements[h ? b : f], T = Yb(cr(_) ? _ : _.contextElement || Qn(e.elements.popper), l, u, s), D = Yr(e.elements.reference), N = Jd({
    reference: D,
    element: E,
    strategy: "absolute",
    placement: a
  }), I = Ys(Object.assign({}, E, N)), L = f === ma ? I : D, x = {
    top: T.top - L.top + v.top,
    bottom: L.bottom - T.bottom + v.bottom,
    left: T.left - L.left + v.left,
    right: L.right - T.right + v.right
  }, R = e.modifiersData.offset;
  if (f === ma && R) {
    var P = R[a];
    Object.keys(x).forEach(function(G) {
      var ee = [Bt, Vt].indexOf(G) >= 0 ? 1 : -1, X = [_t, Vt].indexOf(G) >= 0 ? "y" : "x";
      x[G] += P[X] * ee;
    });
  }
  return x;
}
function Ub(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, a = n.boundary, o = n.rootBoundary, s = n.padding, i = n.flipVariations, l = n.allowedAutoPlacements, c = l === void 0 ? Wd : l, u = Ur(r), d = u ? i ? jl : jl.filter(function(h) {
    return Ur(h) === u;
  }) : Ua, f = d.filter(function(h) {
    return c.indexOf(h) >= 0;
  });
  f.length === 0 && (f = d);
  var p = f.reduce(function(h, g) {
    return h[g] = Pa(e, {
      placement: g,
      boundary: a,
      rootBoundary: o,
      padding: s
    })[ln(g)], h;
  }, {});
  return Object.keys(p).sort(function(h, g) {
    return p[h] - p[g];
  });
}
function jb(e) {
  if (ln(e) === Pi)
    return [];
  var t = io(e);
  return [Gl(e), t, Gl(t)];
}
function Hb(e) {
  var t = e.state, n = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var a = n.mainAxis, o = a === void 0 ? !0 : a, s = n.altAxis, i = s === void 0 ? !0 : s, l = n.fallbackPlacements, c = n.padding, u = n.boundary, d = n.rootBoundary, f = n.altBoundary, p = n.flipVariations, h = p === void 0 ? !0 : p, g = n.allowedAutoPlacements, y = t.options.placement, v = ln(y), b = v === y, E = l || (b || !h ? [io(y)] : jb(y)), _ = [y].concat(E).reduce(function(oe, Ne) {
      return oe.concat(ln(Ne) === Pi ? Ub(t, {
        placement: Ne,
        boundary: u,
        rootBoundary: d,
        padding: c,
        flipVariations: h,
        allowedAutoPlacements: g
      }) : Ne);
    }, []), T = t.rects.reference, D = t.rects.popper, N = /* @__PURE__ */ new Map(), I = !0, L = _[0], x = 0; x < _.length; x++) {
      var R = _[x], P = ln(R), G = Ur(R) === Vr, ee = [_t, Vt].indexOf(P) >= 0, X = ee ? "width" : "height", ae = Pa(t, {
        placement: R,
        boundary: u,
        rootBoundary: d,
        altBoundary: f,
        padding: c
      }), le = ee ? G ? Bt : wt : G ? Vt : _t;
      T[X] > D[X] && (le = io(le));
      var Ee = io(le), ve = [];
      if (o && ve.push(ae[P] <= 0), i && ve.push(ae[le] <= 0, ae[Ee] <= 0), ve.every(function(oe) {
        return oe;
      })) {
        L = R, I = !1;
        break;
      }
      N.set(R, ve);
    }
    if (I)
      for (var W = h ? 3 : 1, ce = function(Ne) {
        var V = _.find(function(B) {
          var te = N.get(B);
          if (te)
            return te.slice(0, Ne).every(function(z) {
              return z;
            });
        });
        if (V)
          return L = V, "break";
      }, Me = W; Me > 0; Me--) {
        var Ye = ce(Me);
        if (Ye === "break")
          break;
      }
    t.placement !== L && (t.modifiersData[r]._skip = !0, t.placement = L, t.reset = !0);
  }
}
const Wb = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: Hb,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function Kl(e, t, n) {
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
function ql(e) {
  return [_t, Bt, Vt, wt].some(function(t) {
    return e[t] >= 0;
  });
}
function Gb(e) {
  var t = e.state, n = e.name, r = t.rects.reference, a = t.rects.popper, o = t.modifiersData.preventOverflow, s = Pa(t, {
    elementContext: "reference"
  }), i = Pa(t, {
    altBoundary: !0
  }), l = Kl(s, r), c = Kl(i, a, o), u = ql(l), d = ql(c);
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
const zb = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: Gb
};
function Kb(e, t, n) {
  var r = ln(e), a = [wt, _t].indexOf(r) >= 0 ? -1 : 1, o = typeof n == "function" ? n(Object.assign({}, t, {
    placement: e
  })) : n, s = o[0], i = o[1];
  return s = s || 0, i = (i || 0) * a, [wt, Bt].indexOf(r) >= 0 ? {
    x: i,
    y: s
  } : {
    x: s,
    y: i
  };
}
function qb(e) {
  var t = e.state, n = e.options, r = e.name, a = n.offset, o = a === void 0 ? [0, 0] : a, s = Wd.reduce(function(u, d) {
    return u[d] = Kb(d, t.rects, o), u;
  }, {}), i = s[t.placement], l = i.x, c = i.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += l, t.modifiersData.popperOffsets.y += c), t.modifiersData[r] = s;
}
const Zb = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: qb
};
function Xb(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = Jd({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const Jb = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: Xb,
  data: {}
};
function Qb(e) {
  return e === "x" ? "y" : "x";
}
function e1(e) {
  var t = e.state, n = e.options, r = e.name, a = n.mainAxis, o = a === void 0 ? !0 : a, s = n.altAxis, i = s === void 0 ? !1 : s, l = n.boundary, c = n.rootBoundary, u = n.altBoundary, d = n.padding, f = n.tether, p = f === void 0 ? !0 : f, h = n.tetherOffset, g = h === void 0 ? 0 : h, y = Pa(t, {
    boundary: l,
    rootBoundary: c,
    padding: d,
    altBoundary: u
  }), v = ln(t.placement), b = Ur(t.placement), E = !b, _ = Mi(v), T = Qb(_), D = t.modifiersData.popperOffsets, N = t.rects.reference, I = t.rects.popper, L = typeof g == "function" ? g(Object.assign({}, t.rects, {
    placement: t.placement
  })) : g, x = typeof L == "number" ? {
    mainAxis: L,
    altAxis: L
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, L), R = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, P = {
    x: 0,
    y: 0
  };
  if (D) {
    if (o) {
      var G, ee = _ === "y" ? _t : wt, X = _ === "y" ? Vt : Bt, ae = _ === "y" ? "height" : "width", le = D[_], Ee = le + y[ee], ve = le - y[X], W = p ? -I[ae] / 2 : 0, ce = b === Vr ? N[ae] : I[ae], Me = b === Vr ? -I[ae] : -N[ae], Ye = t.elements.arrow, oe = p && Ye ? Ii(Ye) : {
        width: 0,
        height: 0
      }, Ne = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : Kd(), V = Ne[ee], B = Ne[X], te = Da(0, N[ae], oe[ae]), z = E ? N[ae] / 2 - W - te - V - x.mainAxis : ce - te - V - x.mainAxis, S = E ? -N[ae] / 2 + W + te + B + x.mainAxis : Me + te + B + x.mainAxis, H = t.elements.arrow && ja(t.elements.arrow), ue = H ? _ === "y" ? H.clientTop || 0 : H.clientLeft || 0 : 0, k = (G = R == null ? void 0 : R[_]) != null ? G : 0, w = le + z - k - ue, F = le + S - k, re = Da(p ? Oo(Ee, w) : Ee, le, p ? lr(ve, F) : ve);
      D[_] = re, P[_] = re - le;
    }
    if (i) {
      var pe, Te = _ === "x" ? _t : wt, ut = _ === "x" ? Vt : Bt, et = D[T], Tt = T === "y" ? "height" : "width", en = et + y[Te], Ue = et - y[ut], U = [_t, wt].indexOf(v) !== -1, q = (pe = R == null ? void 0 : R[T]) != null ? pe : 0, Xe = U ? en : et - N[Tt] - I[Tt] - q + x.altAxis, Je = U ? et + N[Tt] + I[Tt] - q - x.altAxis : Ue, tn = p && U ? Db(Xe, et, Je) : Da(p ? Xe : en, et, p ? Je : Ue);
      D[T] = tn, P[T] = tn - et;
    }
    t.modifiersData[r] = P;
  }
}
const t1 = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: e1,
  requiresIfExists: ["offset"]
};
function n1(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function r1(e) {
  return e === xt(e) || !It(e) ? Li(e) : n1(e);
}
function a1(e) {
  var t = e.getBoundingClientRect(), n = Br(t.width) / e.offsetWidth || 1, r = Br(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function o1(e, t, n) {
  n === void 0 && (n = !1);
  var r = It(t), a = It(t) && a1(t), o = Qn(t), s = Yr(e, a, n), i = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = {
    x: 0,
    y: 0
  };
  return (r || !r && !n) && ((cn(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  Fi(o)) && (i = r1(t)), It(t) ? (l = Yr(t, !0), l.x += t.clientLeft, l.y += t.clientTop) : o && (l.x = Ri(o))), {
    x: s.left + i.scrollLeft - l.x,
    y: s.top + i.scrollTop - l.y,
    width: s.width,
    height: s.height
  };
}
function s1(e) {
  var t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), r = [];
  e.forEach(function(o) {
    t.set(o.name, o);
  });
  function a(o) {
    n.add(o.name);
    var s = [].concat(o.requires || [], o.requiresIfExists || []);
    s.forEach(function(i) {
      if (!n.has(i)) {
        var l = t.get(i);
        l && a(l);
      }
    }), r.push(o);
  }
  return e.forEach(function(o) {
    n.has(o.name) || a(o);
  }), r;
}
function i1(e) {
  var t = s1(e);
  return yb.reduce(function(n, r) {
    return n.concat(t.filter(function(a) {
      return a.phase === r;
    }));
  }, []);
}
function l1(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function u1(e) {
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
var Zl = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function Xl() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function c1(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, r = n === void 0 ? [] : n, a = t.defaultOptions, o = a === void 0 ? Zl : a;
  return function(i, l, c) {
    c === void 0 && (c = o);
    var u = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, Zl, o),
      modifiersData: {},
      elements: {
        reference: i,
        popper: l
      },
      attributes: {},
      styles: {}
    }, d = [], f = !1, p = {
      state: u,
      setOptions: function(v) {
        var b = typeof v == "function" ? v(u.options) : v;
        g(), u.options = Object.assign({}, o, u.options, b), u.scrollParents = {
          reference: cr(i) ? ka(i) : i.contextElement ? ka(i.contextElement) : [],
          popper: ka(l)
        };
        var E = i1(u1([].concat(r, u.options.modifiers)));
        return u.orderedModifiers = E.filter(function(_) {
          return _.enabled;
        }), h(), p.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!f) {
          var v = u.elements, b = v.reference, E = v.popper;
          if (Xl(b, E)) {
            u.rects = {
              reference: o1(b, ja(E), u.options.strategy === "fixed"),
              popper: Ii(E)
            }, u.reset = !1, u.placement = u.options.placement, u.orderedModifiers.forEach(function(x) {
              return u.modifiersData[x.name] = Object.assign({}, x.data);
            });
            for (var _ = 0; _ < u.orderedModifiers.length; _++) {
              if (u.reset === !0) {
                u.reset = !1, _ = -1;
                continue;
              }
              var T = u.orderedModifiers[_], D = T.fn, N = T.options, I = N === void 0 ? {} : N, L = T.name;
              typeof D == "function" && (u = D({
                state: u,
                options: I,
                name: L,
                instance: p
              }) || u);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: l1(function() {
        return new Promise(function(y) {
          p.forceUpdate(), y(u);
        });
      }),
      destroy: function() {
        g(), f = !0;
      }
    };
    if (!Xl(i, l))
      return p;
    p.setOptions(c).then(function(y) {
      !f && c.onFirstUpdate && c.onFirstUpdate(y);
    });
    function h() {
      u.orderedModifiers.forEach(function(y) {
        var v = y.name, b = y.options, E = b === void 0 ? {} : b, _ = y.effect;
        if (typeof _ == "function") {
          var T = _({
            state: u,
            name: v,
            instance: p,
            options: E
          }), D = function() {
          };
          d.push(T || D);
        }
      });
    }
    function g() {
      d.forEach(function(y) {
        return y();
      }), d = [];
    }
    return p;
  };
}
var d1 = [Ib, Jb, Pb, wb, Zb, Wb, t1, Tb, zb], f1 = /* @__PURE__ */ c1({
  defaultModifiers: d1
}), p1 = Object.defineProperty, v1 = (e, t, n) => t in e ? p1(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, de = (e, t, n) => (v1(e, typeof t != "symbol" ? t + "" : t, n), n);
const Nn = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, a] of t)
    n[r] = a;
  return n;
}, m1 = {}, h1 = {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  viewBox: "0 0 24 24"
}, g1 = /* @__PURE__ */ $("polyline", { points: "9 18 15 12 9 6" }, null, -1), y1 = [
  g1
];
function b1(e, t) {
  return O(), A("svg", h1, y1);
}
const _1 = /* @__PURE__ */ Nn(m1, [["render", b1]]), w1 = {}, E1 = {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  viewBox: "0 0 24 24"
}, O1 = /* @__PURE__ */ $("polyline", { points: "15 18 9 12 15 6" }, null, -1), D1 = [
  O1
];
function k1(e, t) {
  return O(), A("svg", E1, D1);
}
const $1 = /* @__PURE__ */ Nn(w1, [["render", k1]]), x1 = {}, T1 = {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  viewBox: "0 0 24 24"
}, C1 = /* @__PURE__ */ $("polyline", { points: "6 9 12 15 18 9" }, null, -1), A1 = [
  C1
];
function N1(e, t) {
  return O(), A("svg", T1, A1);
}
const P1 = /* @__PURE__ */ Nn(x1, [["render", N1]]), S1 = {}, I1 = {
  fill: "none",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  viewBox: "0 0 24 24"
}, M1 = /* @__PURE__ */ $("path", { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" }, null, -1), L1 = [
  M1
];
function R1(e, t) {
  return O(), A("svg", I1, L1);
}
const F1 = /* @__PURE__ */ Nn(S1, [["render", R1]]), V1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  IconChevronDown: P1,
  IconChevronLeft: $1,
  IconChevronRight: _1,
  IconClock: F1
}, Symbol.toStringTag, { value: "Module" })), jr = /* @__PURE__ */ fe({
  __name: "BaseIcon",
  props: {
    name: { type: String, required: !0 },
    width: { type: String },
    height: { type: String },
    size: { type: String, default: "26" },
    viewBox: { type: String }
  },
  setup(e) {
    const t = e, n = C(() => t.width || t.size), r = C(() => t.height || t.size), a = C(() => V1[`Icon${t.name}`]);
    return (o, s) => (O(), we(Ho(m(a)), {
      width: m(n),
      height: m(r),
      class: "vc-base-icon"
    }, null, 8, ["width", "height"]));
  }
});
function Qd() {
  return typeof window < "u";
}
function B1(e) {
  return Qd() && e in window;
}
function Y1(e) {
  const t = Y(!1), n = C(() => t.value ? "dark" : "light");
  let r, a;
  function o(p) {
    t.value = p.matches;
  }
  function s() {
    B1("matchMedia") && (r = window.matchMedia("(prefers-color-scheme: dark)"), r.addEventListener("change", o), t.value = r.matches);
  }
  function i() {
    const { selector: p = ":root", darkClass: h = "dark" } = e.value, g = document.querySelector(p);
    t.value = g.classList.contains(h);
  }
  function l(p) {
    const { selector: h = ":root", darkClass: g = "dark" } = p;
    if (Qd() && h && g) {
      const y = document.querySelector(h);
      y && (a = new MutationObserver(i), a.observe(y, {
        attributes: !0,
        attributeFilter: ["class"]
      }), t.value = y.classList.contains(g));
    }
  }
  function c() {
    d();
    const p = typeof e.value;
    p === "string" && e.value.toLowerCase() === "system" ? s() : p === "object" ? l(e.value) : t.value = !!e.value;
  }
  const u = _e(() => e.value, () => c(), {
    immediate: !0
  });
  function d() {
    r && (r.removeEventListener("change", o), r = void 0), a && (a.disconnect(), a = void 0);
  }
  function f() {
    d(), u();
  }
  return Jn(() => f()), {
    isDark: t,
    displayMode: n,
    cleanup: f
  };
}
var no = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function U1(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var j1 = typeof no == "object" && no && no.Object === Object && no, ef = j1, H1 = ef, W1 = typeof self == "object" && self && self.Object === Object && self, G1 = H1 || W1 || Function("return this")(), pn = G1, z1 = pn, K1 = z1.Symbol, qo = K1, Jl = qo, tf = Object.prototype, q1 = tf.hasOwnProperty, Z1 = tf.toString, ha = Jl ? Jl.toStringTag : void 0;
function X1(e) {
  var t = q1.call(e, ha), n = e[ha];
  try {
    e[ha] = void 0;
    var r = !0;
  } catch {
  }
  var a = Z1.call(e);
  return r && (t ? e[ha] = n : delete e[ha]), a;
}
var J1 = X1, Q1 = Object.prototype, e_ = Q1.toString;
function t_(e) {
  return e_.call(e);
}
var n_ = t_, Ql = qo, r_ = J1, a_ = n_, o_ = "[object Null]", s_ = "[object Undefined]", eu = Ql ? Ql.toStringTag : void 0;
function i_(e) {
  return e == null ? e === void 0 ? s_ : o_ : eu && eu in Object(e) ? r_(e) : a_(e);
}
var vn = i_;
function l_(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Pn = l_, u_ = vn, c_ = Pn, d_ = "[object AsyncFunction]", f_ = "[object Function]", p_ = "[object GeneratorFunction]", v_ = "[object Proxy]";
function m_(e) {
  if (!c_(e))
    return !1;
  var t = u_(e);
  return t == f_ || t == p_ || t == d_ || t == v_;
}
var gr = m_, h_ = Array.isArray, Jt = h_;
function g_(e) {
  return e != null && typeof e == "object";
}
var Qt = g_, y_ = vn, b_ = Jt, __ = Qt, w_ = "[object String]";
function E_(e) {
  return typeof e == "string" || !b_(e) && __(e) && y_(e) == w_;
}
var an = E_, O_ = vn, D_ = Qt, k_ = "[object Boolean]";
function $_(e) {
  return e === !0 || e === !1 || D_(e) && O_(e) == k_;
}
var x_ = $_, T_ = vn, C_ = Qt, A_ = "[object Number]";
function N_(e) {
  return typeof e == "number" || C_(e) && T_(e) == A_;
}
var Zt = N_, P_ = vn, S_ = Qt, I_ = "[object Date]";
function M_(e) {
  return S_(e) && P_(e) == I_;
}
var L_ = M_;
function R_(e) {
  return function(t) {
    return e(t);
  };
}
var nf = R_, Sa = {}, F_ = {
  get exports() {
    return Sa;
  },
  set exports(e) {
    Sa = e;
  }
};
(function(e, t) {
  var n = ef, r = t && !t.nodeType && t, a = r && !0 && e && !e.nodeType && e, o = a && a.exports === r, s = o && n.process, i = function() {
    try {
      var l = a && a.require && a.require("util").types;
      return l || s && s.binding && s.binding("util");
    } catch {
    }
  }();
  e.exports = i;
})(F_, Sa);
var V_ = L_, B_ = nf, tu = Sa, nu = tu && tu.isDate, Y_ = nu ? B_(nu) : V_, U_ = Y_, j_ = vn, H_ = Qt, W_ = "[object Symbol]";
function G_(e) {
  return typeof e == "symbol" || H_(e) && j_(e) == W_;
}
var Vi = G_, z_ = Jt, K_ = Vi, q_ = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Z_ = /^\w*$/;
function X_(e, t) {
  if (z_(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || K_(e) ? !0 : Z_.test(e) || !q_.test(e) || t != null && e in Object(t);
}
var Bi = X_, J_ = pn, Q_ = J_["__core-js_shared__"], e0 = Q_, bs = e0, ru = function() {
  var e = /[^.]+$/.exec(bs && bs.keys && bs.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function t0(e) {
  return !!ru && ru in e;
}
var n0 = t0, r0 = Function.prototype, a0 = r0.toString;
function o0(e) {
  if (e != null) {
    try {
      return a0.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var rf = o0, s0 = gr, i0 = n0, l0 = Pn, u0 = rf, c0 = /[\\^$.*+?()[\]{}|]/g, d0 = /^\[object .+?Constructor\]$/, f0 = Function.prototype, p0 = Object.prototype, v0 = f0.toString, m0 = p0.hasOwnProperty, h0 = RegExp(
  "^" + v0.call(m0).replace(c0, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function g0(e) {
  if (!l0(e) || i0(e))
    return !1;
  var t = s0(e) ? h0 : d0;
  return t.test(u0(e));
}
var y0 = g0;
function b0(e, t) {
  return e == null ? void 0 : e[t];
}
var _0 = b0, w0 = y0, E0 = _0;
function O0(e, t) {
  var n = E0(e, t);
  return w0(n) ? n : void 0;
}
var yr = O0, D0 = yr, k0 = D0(Object, "create"), Zo = k0, au = Zo;
function $0() {
  this.__data__ = au ? au(null) : {}, this.size = 0;
}
var x0 = $0;
function T0(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var C0 = T0, A0 = Zo, N0 = "__lodash_hash_undefined__", P0 = Object.prototype, S0 = P0.hasOwnProperty;
function I0(e) {
  var t = this.__data__;
  if (A0) {
    var n = t[e];
    return n === N0 ? void 0 : n;
  }
  return S0.call(t, e) ? t[e] : void 0;
}
var M0 = I0, L0 = Zo, R0 = Object.prototype, F0 = R0.hasOwnProperty;
function V0(e) {
  var t = this.__data__;
  return L0 ? t[e] !== void 0 : F0.call(t, e);
}
var B0 = V0, Y0 = Zo, U0 = "__lodash_hash_undefined__";
function j0(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = Y0 && t === void 0 ? U0 : t, this;
}
var H0 = j0, W0 = x0, G0 = C0, z0 = M0, K0 = B0, q0 = H0;
function ea(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
ea.prototype.clear = W0;
ea.prototype.delete = G0;
ea.prototype.get = z0;
ea.prototype.has = K0;
ea.prototype.set = q0;
var Z0 = ea;
function X0() {
  this.__data__ = [], this.size = 0;
}
var J0 = X0;
function Q0(e, t) {
  return e === t || e !== e && t !== t;
}
var ta = Q0, ew = ta;
function tw(e, t) {
  for (var n = e.length; n--; )
    if (ew(e[n][0], t))
      return n;
  return -1;
}
var Xo = tw, nw = Xo, rw = Array.prototype, aw = rw.splice;
function ow(e) {
  var t = this.__data__, n = nw(t, e);
  if (n < 0)
    return !1;
  var r = t.length - 1;
  return n == r ? t.pop() : aw.call(t, n, 1), --this.size, !0;
}
var sw = ow, iw = Xo;
function lw(e) {
  var t = this.__data__, n = iw(t, e);
  return n < 0 ? void 0 : t[n][1];
}
var uw = lw, cw = Xo;
function dw(e) {
  return cw(this.__data__, e) > -1;
}
var fw = dw, pw = Xo;
function vw(e, t) {
  var n = this.__data__, r = pw(n, e);
  return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
}
var mw = vw, hw = J0, gw = sw, yw = uw, bw = fw, _w = mw;
function na(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
na.prototype.clear = hw;
na.prototype.delete = gw;
na.prototype.get = yw;
na.prototype.has = bw;
na.prototype.set = _w;
var Jo = na, ww = yr, Ew = pn, Ow = ww(Ew, "Map"), Yi = Ow, ou = Z0, Dw = Jo, kw = Yi;
function $w() {
  this.size = 0, this.__data__ = {
    hash: new ou(),
    map: new (kw || Dw)(),
    string: new ou()
  };
}
var xw = $w;
function Tw(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
var Cw = Tw, Aw = Cw;
function Nw(e, t) {
  var n = e.__data__;
  return Aw(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
var Qo = Nw, Pw = Qo;
function Sw(e) {
  var t = Pw(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
var Iw = Sw, Mw = Qo;
function Lw(e) {
  return Mw(this, e).get(e);
}
var Rw = Lw, Fw = Qo;
function Vw(e) {
  return Fw(this, e).has(e);
}
var Bw = Vw, Yw = Qo;
function Uw(e, t) {
  var n = Yw(this, e), r = n.size;
  return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
}
var jw = Uw, Hw = xw, Ww = Iw, Gw = Rw, zw = Bw, Kw = jw;
function ra(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
ra.prototype.clear = Hw;
ra.prototype.delete = Ww;
ra.prototype.get = Gw;
ra.prototype.has = zw;
ra.prototype.set = Kw;
var Ui = ra, af = Ui, qw = "Expected a function";
function ji(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(qw);
  var n = function() {
    var r = arguments, a = t ? t.apply(this, r) : r[0], o = n.cache;
    if (o.has(a))
      return o.get(a);
    var s = e.apply(this, r);
    return n.cache = o.set(a, s) || o, s;
  };
  return n.cache = new (ji.Cache || af)(), n;
}
ji.Cache = af;
var Zw = ji, Xw = Zw, Jw = 500;
function Qw(e) {
  var t = Xw(e, function(r) {
    return n.size === Jw && n.clear(), r;
  }), n = t.cache;
  return t;
}
var eE = Qw, tE = eE, nE = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, rE = /\\(\\)?/g, aE = tE(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(nE, function(n, r, a, o) {
    t.push(a ? o.replace(rE, "$1") : r || n);
  }), t;
}), oE = aE;
function sE(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, a = Array(r); ++n < r; )
    a[n] = t(e[n], n, e);
  return a;
}
var iE = sE, su = qo, lE = iE, uE = Jt, cE = Vi, dE = 1 / 0, iu = su ? su.prototype : void 0, lu = iu ? iu.toString : void 0;
function of(e) {
  if (typeof e == "string")
    return e;
  if (uE(e))
    return lE(e, of) + "";
  if (cE(e))
    return lu ? lu.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -dE ? "-0" : t;
}
var fE = of, pE = fE;
function vE(e) {
  return e == null ? "" : pE(e);
}
var mE = vE, hE = Jt, gE = Bi, yE = oE, bE = mE;
function _E(e, t) {
  return hE(e) ? e : gE(e, t) ? [e] : yE(bE(e));
}
var sf = _E, wE = Vi, EE = 1 / 0;
function OE(e) {
  if (typeof e == "string" || wE(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -EE ? "-0" : t;
}
var es = OE, DE = sf, kE = es;
function $E(e, t) {
  t = DE(t, e);
  for (var n = 0, r = t.length; e != null && n < r; )
    e = e[kE(t[n++])];
  return n && n == r ? e : void 0;
}
var lf = $E, xE = lf;
function TE(e, t, n) {
  var r = e == null ? void 0 : xE(e, t);
  return r === void 0 ? n : r;
}
var or = TE, CE = yr, AE = function() {
  try {
    var e = CE(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), uf = AE, uu = uf;
function NE(e, t, n) {
  t == "__proto__" && uu ? uu(e, t, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : e[t] = n;
}
var ts = NE, PE = ts, SE = ta, IE = Object.prototype, ME = IE.hasOwnProperty;
function LE(e, t, n) {
  var r = e[t];
  (!(ME.call(e, t) && SE(r, n)) || n === void 0 && !(t in e)) && PE(e, t, n);
}
var RE = LE, FE = 9007199254740991, VE = /^(?:0|[1-9]\d*)$/;
function BE(e, t) {
  var n = typeof e;
  return t = t ?? FE, !!t && (n == "number" || n != "symbol" && VE.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var Hi = BE;
function YE(e) {
  return function(t, n, r) {
    for (var a = -1, o = Object(t), s = r(t), i = s.length; i--; ) {
      var l = s[e ? i : ++a];
      if (n(o[l], l, o) === !1)
        break;
    }
    return t;
  };
}
var UE = YE, jE = UE, HE = jE(), cf = HE;
function WE(e, t) {
  for (var n = -1, r = Array(e); ++n < e; )
    r[n] = t(n);
  return r;
}
var GE = WE, zE = vn, KE = Qt, qE = "[object Arguments]";
function ZE(e) {
  return KE(e) && zE(e) == qE;
}
var XE = ZE, cu = XE, JE = Qt, df = Object.prototype, QE = df.hasOwnProperty, eO = df.propertyIsEnumerable, tO = cu(function() {
  return arguments;
}()) ? cu : function(e) {
  return JE(e) && QE.call(e, "callee") && !eO.call(e, "callee");
}, Wi = tO, Hr = {}, nO = {
  get exports() {
    return Hr;
  },
  set exports(e) {
    Hr = e;
  }
};
function rO() {
  return !1;
}
var aO = rO;
(function(e, t) {
  var n = pn, r = aO, a = t && !t.nodeType && t, o = a && !0 && e && !e.nodeType && e, s = o && o.exports === a, i = s ? n.Buffer : void 0, l = i ? i.isBuffer : void 0, c = l || r;
  e.exports = c;
})(nO, Hr);
var oO = 9007199254740991;
function sO(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= oO;
}
var Gi = sO, iO = vn, lO = Gi, uO = Qt, cO = "[object Arguments]", dO = "[object Array]", fO = "[object Boolean]", pO = "[object Date]", vO = "[object Error]", mO = "[object Function]", hO = "[object Map]", gO = "[object Number]", yO = "[object Object]", bO = "[object RegExp]", _O = "[object Set]", wO = "[object String]", EO = "[object WeakMap]", OO = "[object ArrayBuffer]", DO = "[object DataView]", kO = "[object Float32Array]", $O = "[object Float64Array]", xO = "[object Int8Array]", TO = "[object Int16Array]", CO = "[object Int32Array]", AO = "[object Uint8Array]", NO = "[object Uint8ClampedArray]", PO = "[object Uint16Array]", SO = "[object Uint32Array]", qe = {};
qe[kO] = qe[$O] = qe[xO] = qe[TO] = qe[CO] = qe[AO] = qe[NO] = qe[PO] = qe[SO] = !0;
qe[cO] = qe[dO] = qe[OO] = qe[fO] = qe[DO] = qe[pO] = qe[vO] = qe[mO] = qe[hO] = qe[gO] = qe[yO] = qe[bO] = qe[_O] = qe[wO] = qe[EO] = !1;
function IO(e) {
  return uO(e) && lO(e.length) && !!qe[iO(e)];
}
var MO = IO, LO = MO, RO = nf, du = Sa, fu = du && du.isTypedArray, FO = fu ? RO(fu) : LO, zi = FO, VO = GE, BO = Wi, YO = Jt, UO = Hr, jO = Hi, HO = zi, WO = Object.prototype, GO = WO.hasOwnProperty;
function zO(e, t) {
  var n = YO(e), r = !n && BO(e), a = !n && !r && UO(e), o = !n && !r && !a && HO(e), s = n || r || a || o, i = s ? VO(e.length, String) : [], l = i.length;
  for (var c in e)
    (t || GO.call(e, c)) && !(s && // Safari 9 has enumerable `arguments.length` in strict mode.
    (c == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    a && (c == "offset" || c == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    o && (c == "buffer" || c == "byteLength" || c == "byteOffset") || // Skip index properties.
    jO(c, l))) && i.push(c);
  return i;
}
var ff = zO, KO = Object.prototype;
function qO(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || KO;
  return e === n;
}
var Ki = qO;
function ZO(e, t) {
  return function(n) {
    return e(t(n));
  };
}
var pf = ZO, XO = pf, JO = XO(Object.keys, Object), QO = JO, eD = Ki, tD = QO, nD = Object.prototype, rD = nD.hasOwnProperty;
function aD(e) {
  if (!eD(e))
    return tD(e);
  var t = [];
  for (var n in Object(e))
    rD.call(e, n) && n != "constructor" && t.push(n);
  return t;
}
var oD = aD, sD = gr, iD = Gi;
function lD(e) {
  return e != null && iD(e.length) && !sD(e);
}
var Ha = lD, uD = ff, cD = oD, dD = Ha;
function fD(e) {
  return dD(e) ? uD(e) : cD(e);
}
var qi = fD, pD = cf, vD = qi;
function mD(e, t) {
  return e && pD(e, t, vD);
}
var vf = mD, hD = Jo;
function gD() {
  this.__data__ = new hD(), this.size = 0;
}
var yD = gD;
function bD(e) {
  var t = this.__data__, n = t.delete(e);
  return this.size = t.size, n;
}
var _D = bD;
function wD(e) {
  return this.__data__.get(e);
}
var ED = wD;
function OD(e) {
  return this.__data__.has(e);
}
var DD = OD, kD = Jo, $D = Yi, xD = Ui, TD = 200;
function CD(e, t) {
  var n = this.__data__;
  if (n instanceof kD) {
    var r = n.__data__;
    if (!$D || r.length < TD - 1)
      return r.push([e, t]), this.size = ++n.size, this;
    n = this.__data__ = new xD(r);
  }
  return n.set(e, t), this.size = n.size, this;
}
var AD = CD, ND = Jo, PD = yD, SD = _D, ID = ED, MD = DD, LD = AD;
function aa(e) {
  var t = this.__data__ = new ND(e);
  this.size = t.size;
}
aa.prototype.clear = PD;
aa.prototype.delete = SD;
aa.prototype.get = ID;
aa.prototype.has = MD;
aa.prototype.set = LD;
var Zi = aa, RD = "__lodash_hash_undefined__";
function FD(e) {
  return this.__data__.set(e, RD), this;
}
var VD = FD;
function BD(e) {
  return this.__data__.has(e);
}
var YD = BD, UD = Ui, jD = VD, HD = YD;
function Do(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.__data__ = new UD(); ++t < n; )
    this.add(e[t]);
}
Do.prototype.add = Do.prototype.push = jD;
Do.prototype.has = HD;
var WD = Do;
function GD(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length; ++n < r; )
    if (t(e[n], n, e))
      return !0;
  return !1;
}
var mf = GD;
function zD(e, t) {
  return e.has(t);
}
var KD = zD, qD = WD, ZD = mf, XD = KD, JD = 1, QD = 2;
function ek(e, t, n, r, a, o) {
  var s = n & JD, i = e.length, l = t.length;
  if (i != l && !(s && l > i))
    return !1;
  var c = o.get(e), u = o.get(t);
  if (c && u)
    return c == t && u == e;
  var d = -1, f = !0, p = n & QD ? new qD() : void 0;
  for (o.set(e, t), o.set(t, e); ++d < i; ) {
    var h = e[d], g = t[d];
    if (r)
      var y = s ? r(g, h, d, t, e, o) : r(h, g, d, e, t, o);
    if (y !== void 0) {
      if (y)
        continue;
      f = !1;
      break;
    }
    if (p) {
      if (!ZD(t, function(v, b) {
        if (!XD(p, b) && (h === v || a(h, v, n, r, o)))
          return p.push(b);
      })) {
        f = !1;
        break;
      }
    } else if (!(h === g || a(h, g, n, r, o))) {
      f = !1;
      break;
    }
  }
  return o.delete(e), o.delete(t), f;
}
var hf = ek, tk = pn, nk = tk.Uint8Array, gf = nk;
function rk(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(r, a) {
    n[++t] = [a, r];
  }), n;
}
var ak = rk;
function ok(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(r) {
    n[++t] = r;
  }), n;
}
var sk = ok, pu = qo, vu = gf, ik = ta, lk = hf, uk = ak, ck = sk, dk = 1, fk = 2, pk = "[object Boolean]", vk = "[object Date]", mk = "[object Error]", hk = "[object Map]", gk = "[object Number]", yk = "[object RegExp]", bk = "[object Set]", _k = "[object String]", wk = "[object Symbol]", Ek = "[object ArrayBuffer]", Ok = "[object DataView]", mu = pu ? pu.prototype : void 0, _s = mu ? mu.valueOf : void 0;
function Dk(e, t, n, r, a, o, s) {
  switch (n) {
    case Ok:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case Ek:
      return !(e.byteLength != t.byteLength || !o(new vu(e), new vu(t)));
    case pk:
    case vk:
    case gk:
      return ik(+e, +t);
    case mk:
      return e.name == t.name && e.message == t.message;
    case yk:
    case _k:
      return e == t + "";
    case hk:
      var i = uk;
    case bk:
      var l = r & dk;
      if (i || (i = ck), e.size != t.size && !l)
        return !1;
      var c = s.get(e);
      if (c)
        return c == t;
      r |= fk, s.set(e, t);
      var u = lk(i(e), i(t), r, a, o, s);
      return s.delete(e), u;
    case wk:
      if (_s)
        return _s.call(e) == _s.call(t);
  }
  return !1;
}
var kk = Dk;
function $k(e, t) {
  for (var n = -1, r = t.length, a = e.length; ++n < r; )
    e[a + n] = t[n];
  return e;
}
var xk = $k, Tk = xk, Ck = Jt;
function Ak(e, t, n) {
  var r = t(e);
  return Ck(e) ? r : Tk(r, n(e));
}
var Nk = Ak;
function Pk(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, a = 0, o = []; ++n < r; ) {
    var s = e[n];
    t(s, n, e) && (o[a++] = s);
  }
  return o;
}
var Sk = Pk;
function Ik() {
  return [];
}
var Mk = Ik, Lk = Sk, Rk = Mk, Fk = Object.prototype, Vk = Fk.propertyIsEnumerable, hu = Object.getOwnPropertySymbols, Bk = hu ? function(e) {
  return e == null ? [] : (e = Object(e), Lk(hu(e), function(t) {
    return Vk.call(e, t);
  }));
} : Rk, Yk = Bk, Uk = Nk, jk = Yk, Hk = qi;
function Wk(e) {
  return Uk(e, Hk, jk);
}
var Gk = Wk, gu = Gk, zk = 1, Kk = Object.prototype, qk = Kk.hasOwnProperty;
function Zk(e, t, n, r, a, o) {
  var s = n & zk, i = gu(e), l = i.length, c = gu(t), u = c.length;
  if (l != u && !s)
    return !1;
  for (var d = l; d--; ) {
    var f = i[d];
    if (!(s ? f in t : qk.call(t, f)))
      return !1;
  }
  var p = o.get(e), h = o.get(t);
  if (p && h)
    return p == t && h == e;
  var g = !0;
  o.set(e, t), o.set(t, e);
  for (var y = s; ++d < l; ) {
    f = i[d];
    var v = e[f], b = t[f];
    if (r)
      var E = s ? r(b, v, f, t, e, o) : r(v, b, f, e, t, o);
    if (!(E === void 0 ? v === b || a(v, b, n, r, o) : E)) {
      g = !1;
      break;
    }
    y || (y = f == "constructor");
  }
  if (g && !y) {
    var _ = e.constructor, T = t.constructor;
    _ != T && "constructor" in e && "constructor" in t && !(typeof _ == "function" && _ instanceof _ && typeof T == "function" && T instanceof T) && (g = !1);
  }
  return o.delete(e), o.delete(t), g;
}
var Xk = Zk, Jk = yr, Qk = pn, e$ = Jk(Qk, "DataView"), t$ = e$, n$ = yr, r$ = pn, a$ = n$(r$, "Promise"), o$ = a$, s$ = yr, i$ = pn, l$ = s$(i$, "Set"), u$ = l$, c$ = yr, d$ = pn, f$ = c$(d$, "WeakMap"), p$ = f$, Us = t$, js = Yi, Hs = o$, Ws = u$, Gs = p$, yf = vn, oa = rf, yu = "[object Map]", v$ = "[object Object]", bu = "[object Promise]", _u = "[object Set]", wu = "[object WeakMap]", Eu = "[object DataView]", m$ = oa(Us), h$ = oa(js), g$ = oa(Hs), y$ = oa(Ws), b$ = oa(Gs), nr = yf;
(Us && nr(new Us(new ArrayBuffer(1))) != Eu || js && nr(new js()) != yu || Hs && nr(Hs.resolve()) != bu || Ws && nr(new Ws()) != _u || Gs && nr(new Gs()) != wu) && (nr = function(e) {
  var t = yf(e), n = t == v$ ? e.constructor : void 0, r = n ? oa(n) : "";
  if (r)
    switch (r) {
      case m$:
        return Eu;
      case h$:
        return yu;
      case g$:
        return bu;
      case y$:
        return _u;
      case b$:
        return wu;
    }
  return t;
});
var _$ = nr, ws = Zi, w$ = hf, E$ = kk, O$ = Xk, Ou = _$, Du = Jt, ku = Hr, D$ = zi, k$ = 1, $u = "[object Arguments]", xu = "[object Array]", ro = "[object Object]", $$ = Object.prototype, Tu = $$.hasOwnProperty;
function x$(e, t, n, r, a, o) {
  var s = Du(e), i = Du(t), l = s ? xu : Ou(e), c = i ? xu : Ou(t);
  l = l == $u ? ro : l, c = c == $u ? ro : c;
  var u = l == ro, d = c == ro, f = l == c;
  if (f && ku(e)) {
    if (!ku(t))
      return !1;
    s = !0, u = !1;
  }
  if (f && !u)
    return o || (o = new ws()), s || D$(e) ? w$(e, t, n, r, a, o) : E$(e, t, l, n, r, a, o);
  if (!(n & k$)) {
    var p = u && Tu.call(e, "__wrapped__"), h = d && Tu.call(t, "__wrapped__");
    if (p || h) {
      var g = p ? e.value() : e, y = h ? t.value() : t;
      return o || (o = new ws()), a(g, y, n, r, o);
    }
  }
  return f ? (o || (o = new ws()), O$(e, t, n, r, a, o)) : !1;
}
var T$ = x$, C$ = T$, Cu = Qt;
function bf(e, t, n, r, a) {
  return e === t ? !0 : e == null || t == null || !Cu(e) && !Cu(t) ? e !== e && t !== t : C$(e, t, n, r, bf, a);
}
var _f = bf, A$ = Zi, N$ = _f, P$ = 1, S$ = 2;
function I$(e, t, n, r) {
  var a = n.length, o = a, s = !r;
  if (e == null)
    return !o;
  for (e = Object(e); a--; ) {
    var i = n[a];
    if (s && i[2] ? i[1] !== e[i[0]] : !(i[0] in e))
      return !1;
  }
  for (; ++a < o; ) {
    i = n[a];
    var l = i[0], c = e[l], u = i[1];
    if (s && i[2]) {
      if (c === void 0 && !(l in e))
        return !1;
    } else {
      var d = new A$();
      if (r)
        var f = r(c, u, l, e, t, d);
      if (!(f === void 0 ? N$(u, c, P$ | S$, r, d) : f))
        return !1;
    }
  }
  return !0;
}
var M$ = I$, L$ = Pn;
function R$(e) {
  return e === e && !L$(e);
}
var wf = R$, F$ = wf, V$ = qi;
function B$(e) {
  for (var t = V$(e), n = t.length; n--; ) {
    var r = t[n], a = e[r];
    t[n] = [r, a, F$(a)];
  }
  return t;
}
var Y$ = B$;
function U$(e, t) {
  return function(n) {
    return n == null ? !1 : n[e] === t && (t !== void 0 || e in Object(n));
  };
}
var Ef = U$, j$ = M$, H$ = Y$, W$ = Ef;
function G$(e) {
  var t = H$(e);
  return t.length == 1 && t[0][2] ? W$(t[0][0], t[0][1]) : function(n) {
    return n === e || j$(n, e, t);
  };
}
var z$ = G$;
function K$(e, t) {
  return e != null && t in Object(e);
}
var q$ = K$, Z$ = sf, X$ = Wi, J$ = Jt, Q$ = Hi, ex = Gi, tx = es;
function nx(e, t, n) {
  t = Z$(t, e);
  for (var r = -1, a = t.length, o = !1; ++r < a; ) {
    var s = tx(t[r]);
    if (!(o = e != null && n(e, s)))
      break;
    e = e[s];
  }
  return o || ++r != a ? o : (a = e == null ? 0 : e.length, !!a && ex(a) && Q$(s, a) && (J$(e) || X$(e)));
}
var Of = nx, rx = q$, ax = Of;
function ox(e, t) {
  return e != null && ax(e, t, rx);
}
var sx = ox, ix = _f, lx = or, ux = sx, cx = Bi, dx = wf, fx = Ef, px = es, vx = 1, mx = 2;
function hx(e, t) {
  return cx(e) && dx(t) ? fx(px(e), t) : function(n) {
    var r = lx(n, e);
    return r === void 0 && r === t ? ux(n, e) : ix(t, r, vx | mx);
  };
}
var gx = hx;
function yx(e) {
  return e;
}
var Xi = yx;
function bx(e) {
  return function(t) {
    return t == null ? void 0 : t[e];
  };
}
var _x = bx, wx = lf;
function Ex(e) {
  return function(t) {
    return wx(t, e);
  };
}
var Ox = Ex, Dx = _x, kx = Ox, $x = Bi, xx = es;
function Tx(e) {
  return $x(e) ? Dx(xx(e)) : kx(e);
}
var Cx = Tx, Ax = z$, Nx = gx, Px = Xi, Sx = Jt, Ix = Cx;
function Mx(e) {
  return typeof e == "function" ? e : e == null ? Px : typeof e == "object" ? Sx(e) ? Nx(e[0], e[1]) : Ax(e) : Ix(e);
}
var Df = Mx, Lx = ts, Rx = vf, Fx = Df;
function Vx(e, t) {
  var n = {};
  return t = Fx(t), Rx(e, function(r, a, o) {
    Lx(n, a, t(r, a, o));
  }), n;
}
var Bx = Vx;
function Yx(e, t, n) {
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
var kf = Yx, Ux = kf, Au = Math.max;
function jx(e, t, n) {
  return t = Au(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var r = arguments, a = -1, o = Au(r.length - t, 0), s = Array(o); ++a < o; )
      s[a] = r[t + a];
    a = -1;
    for (var i = Array(t + 1); ++a < t; )
      i[a] = r[a];
    return i[t] = n(s), Ux(e, this, i);
  };
}
var Hx = jx;
function Wx(e) {
  return function() {
    return e;
  };
}
var Gx = Wx, zx = Gx, Nu = uf, Kx = Xi, qx = Nu ? function(e, t) {
  return Nu(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: zx(t),
    writable: !0
  });
} : Kx, Zx = qx, Xx = 800, Jx = 16, Qx = Date.now;
function eT(e) {
  var t = 0, n = 0;
  return function() {
    var r = Qx(), a = Jx - (r - n);
    if (n = r, a > 0) {
      if (++t >= Xx)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
var tT = eT, nT = Zx, rT = tT, aT = rT(nT), oT = aT, sT = Xi, iT = Hx, lT = oT;
function uT(e, t) {
  return lT(iT(e, t, sT), e + "");
}
var Ji = uT, cT = ta, dT = Ha, fT = Hi, pT = Pn;
function vT(e, t, n) {
  if (!pT(n))
    return !1;
  var r = typeof t;
  return (r == "number" ? dT(n) && fT(t, n.length) : r == "string" && t in n) ? cT(n[t], e) : !1;
}
var Qi = vT;
function mT(e) {
  var t = [];
  if (e != null)
    for (var n in Object(e))
      t.push(n);
  return t;
}
var hT = mT, gT = Pn, yT = Ki, bT = hT, _T = Object.prototype, wT = _T.hasOwnProperty;
function ET(e) {
  if (!gT(e))
    return bT(e);
  var t = yT(e), n = [];
  for (var r in e)
    r == "constructor" && (t || !wT.call(e, r)) || n.push(r);
  return n;
}
var OT = ET, DT = ff, kT = OT, $T = Ha;
function xT(e) {
  return $T(e) ? DT(e, !0) : kT(e);
}
var el = xT, TT = Ji, CT = ta, AT = Qi, NT = el, $f = Object.prototype, PT = $f.hasOwnProperty, ST = TT(function(e, t) {
  e = Object(e);
  var n = -1, r = t.length, a = r > 2 ? t[2] : void 0;
  for (a && AT(t[0], t[1], a) && (r = 1); ++n < r; )
    for (var o = t[n], s = NT(o), i = -1, l = s.length; ++i < l; ) {
      var c = s[i], u = e[c];
      (u === void 0 || CT(u, $f[c]) && !PT.call(e, c)) && (e[c] = o[c]);
    }
  return e;
}), Pu = ST, IT = ts, MT = ta;
function LT(e, t, n) {
  (n !== void 0 && !MT(e[t], n) || n === void 0 && !(t in e)) && IT(e, t, n);
}
var xf = LT, ko = {}, RT = {
  get exports() {
    return ko;
  },
  set exports(e) {
    ko = e;
  }
};
(function(e, t) {
  var n = pn, r = t && !t.nodeType && t, a = r && !0 && e && !e.nodeType && e, o = a && a.exports === r, s = o ? n.Buffer : void 0, i = s ? s.allocUnsafe : void 0;
  function l(c, u) {
    if (u)
      return c.slice();
    var d = c.length, f = i ? i(d) : new c.constructor(d);
    return c.copy(f), f;
  }
  e.exports = l;
})(RT, ko);
var Su = gf;
function FT(e) {
  var t = new e.constructor(e.byteLength);
  return new Su(t).set(new Su(e)), t;
}
var VT = FT, BT = VT;
function YT(e, t) {
  var n = t ? BT(e.buffer) : e.buffer;
  return new e.constructor(n, e.byteOffset, e.length);
}
var UT = YT;
function jT(e, t) {
  var n = -1, r = e.length;
  for (t || (t = Array(r)); ++n < r; )
    t[n] = e[n];
  return t;
}
var HT = jT, WT = Pn, Iu = Object.create, GT = function() {
  function e() {
  }
  return function(t) {
    if (!WT(t))
      return {};
    if (Iu)
      return Iu(t);
    e.prototype = t;
    var n = new e();
    return e.prototype = void 0, n;
  };
}(), zT = GT, KT = pf, qT = KT(Object.getPrototypeOf, Object), Tf = qT, ZT = zT, XT = Tf, JT = Ki;
function QT(e) {
  return typeof e.constructor == "function" && !JT(e) ? ZT(XT(e)) : {};
}
var eC = QT, tC = Ha, nC = Qt;
function rC(e) {
  return nC(e) && tC(e);
}
var aC = rC, oC = vn, sC = Tf, iC = Qt, lC = "[object Object]", uC = Function.prototype, cC = Object.prototype, Cf = uC.toString, dC = cC.hasOwnProperty, fC = Cf.call(Object);
function pC(e) {
  if (!iC(e) || oC(e) != lC)
    return !1;
  var t = sC(e);
  if (t === null)
    return !0;
  var n = dC.call(t, "constructor") && t.constructor;
  return typeof n == "function" && n instanceof n && Cf.call(n) == fC;
}
var vC = pC;
function mC(e, t) {
  if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__")
    return e[t];
}
var Af = mC, hC = RE, gC = ts;
function yC(e, t, n, r) {
  var a = !n;
  n || (n = {});
  for (var o = -1, s = t.length; ++o < s; ) {
    var i = t[o], l = r ? r(n[i], e[i], i, n, e) : void 0;
    l === void 0 && (l = e[i]), a ? gC(n, i, l) : hC(n, i, l);
  }
  return n;
}
var bC = yC, _C = bC, wC = el;
function EC(e) {
  return _C(e, wC(e));
}
var OC = EC, Mu = xf, DC = ko, kC = UT, $C = HT, xC = eC, Lu = Wi, Ru = Jt, TC = aC, CC = Hr, AC = gr, NC = Pn, PC = vC, SC = zi, Fu = Af, IC = OC;
function MC(e, t, n, r, a, o, s) {
  var i = Fu(e, n), l = Fu(t, n), c = s.get(l);
  if (c) {
    Mu(e, n, c);
    return;
  }
  var u = o ? o(i, l, n + "", e, t, s) : void 0, d = u === void 0;
  if (d) {
    var f = Ru(l), p = !f && CC(l), h = !f && !p && SC(l);
    u = l, f || p || h ? Ru(i) ? u = i : TC(i) ? u = $C(i) : p ? (d = !1, u = DC(l, !0)) : h ? (d = !1, u = kC(l, !0)) : u = [] : PC(l) || Lu(l) ? (u = i, Lu(i) ? u = IC(i) : (!NC(i) || AC(i)) && (u = xC(l))) : d = !1;
  }
  d && (s.set(l, u), a(u, l, r, o, s), s.delete(l)), Mu(e, n, u);
}
var LC = MC, RC = Zi, FC = xf, VC = cf, BC = LC, YC = Pn, UC = el, jC = Af;
function Nf(e, t, n, r, a) {
  e !== t && VC(t, function(o, s) {
    if (a || (a = new RC()), YC(o))
      BC(e, t, s, n, Nf, r, a);
    else {
      var i = r ? r(jC(e, s), o, s + "", e, t, a) : void 0;
      i === void 0 && (i = o), FC(e, s, i);
    }
  }, UC);
}
var Pf = Nf, HC = Pf, Vu = Pn;
function Sf(e, t, n, r, a, o) {
  return Vu(e) && Vu(t) && (o.set(t, e), HC(e, t, void 0, Sf, o), o.delete(t)), e;
}
var WC = Sf, GC = Ji, zC = Qi;
function KC(e) {
  return GC(function(t, n) {
    var r = -1, a = n.length, o = a > 1 ? n[a - 1] : void 0, s = a > 2 ? n[2] : void 0;
    for (o = e.length > 3 && typeof o == "function" ? (a--, o) : void 0, s && zC(n[0], n[1], s) && (o = a < 3 ? void 0 : o, a = 1), t = Object(t); ++r < a; ) {
      var i = n[r];
      i && e(t, i, r, o);
    }
    return t;
  });
}
var qC = KC, ZC = Pf, XC = qC, JC = XC(function(e, t, n, r) {
  ZC(e, t, n, r);
}), QC = JC, eA = kf, tA = Ji, nA = WC, rA = QC, aA = tA(function(e) {
  return e.push(void 0, nA), eA(rA, void 0, e);
}), Ia = aA, oA = Object.prototype, sA = oA.hasOwnProperty;
function iA(e, t) {
  return e != null && sA.call(e, t);
}
var lA = iA, uA = lA, cA = Of;
function dA(e, t) {
  return e != null && cA(e, t, uA);
}
var If = dA, fA = Ha;
function pA(e, t) {
  return function(n, r) {
    if (n == null)
      return n;
    if (!fA(n))
      return e(n, r);
    for (var a = n.length, o = t ? a : -1, s = Object(n); (t ? o-- : ++o < a) && r(s[o], o, s) !== !1; )
      ;
    return n;
  };
}
var vA = pA, mA = vf, hA = vA, gA = hA(mA), yA = gA;
function bA(e) {
  return e && e.length ? e[0] : void 0;
}
var Mf = bA;
function _A(e) {
  var t = e == null ? 0 : e.length;
  return t ? e[t - 1] : void 0;
}
var Ar = _A, wA = yA;
function EA(e, t) {
  var n;
  return wA(e, function(r, a, o) {
    return n = t(r, a, o), !n;
  }), !!n;
}
var OA = EA, DA = mf, kA = Df, $A = OA, xA = Jt, TA = Qi;
function CA(e, t, n) {
  var r = xA(e) ? DA : $A;
  return n && TA(e, t, n) && (t = void 0), r(e, kA(t));
}
var AA = CA;
const NA = (e) => Object.prototype.toString.call(e).slice(8, -1), Sr = (e) => U_(e) && !isNaN(e.getTime()), Tn = (e) => NA(e) === "Object", tl = If, Bu = (e, t) => AA(t, (n) => If(e, n)), je = (e, t, n = "0") => {
  for (e = e != null ? String(e) : "", t = t || 2; e.length < t; )
    e = `${n}${e}`;
  return e;
}, Mt = (e) => Array.isArray(e), wn = (e) => Mt(e) && e.length > 0, $o = (e) => e == null ? e ?? null : document && an(e) ? document.querySelector(e) : e.$el ?? e, Un = (e, t, n, r = void 0) => {
  e.removeEventListener(t, n, r);
}, jn = (e, t, n, r = void 0) => (e.addEventListener(t, n, r), () => Un(e, t, n, r)), lo = (e, t) => !!e && !!t && (e === t || e.contains(t)), ao = (e, t) => {
  (e.key === " " || e.key === "Enter") && (t(e), e.preventDefault());
}, Lf = (e, ...t) => {
  const n = {};
  let r;
  for (r in e)
    t.includes(r) || (n[r] = e[r]);
  return n;
}, Rf = (e, t) => {
  const n = {};
  return t.forEach((r) => {
    r in e && (n[r] = e[r]);
  }), n;
};
function PA(e, t, n) {
  return Math.min(Math.max(e, t), n);
}
const xo = () => {
  function e() {
    return ((1 + Math.random()) * 65536 | 0).toString(16).substring(1);
  }
  return `${e() + e()}-${e()}-${e()}-${e()}-${e()}${e()}${e()}`;
}, SA = ["base", "start", "end", "startEnd"], IA = [
  "class",
  "wrapperClass",
  "contentClass",
  "style",
  "contentStyle",
  "color",
  "fillMode"
], MA = { base: {}, start: {}, end: {} };
function nl(e, t, n = MA) {
  let r = e, a = {};
  t === !0 || an(t) ? (r = an(t) ? t : r, a = { ...n }) : Tn(t) && (Bu(t, SA) ? a = { ...t } : a = {
    base: { ...t },
    start: { ...t },
    end: { ...t }
  });
  const o = Ia(
    a,
    { start: a.startEnd, end: a.startEnd },
    n
  );
  return Object.entries(o).forEach(([s, i]) => {
    let l = r;
    i === !0 || an(i) ? (l = an(i) ? i : l, o[s] = { color: l }) : Tn(i) && (Bu(i, IA) ? o[s] = { ...i } : o[s] = {}), Ia(o[s], { color: l });
  }), o;
}
class LA {
  constructor() {
    de(this, "type", "highlight");
  }
  normalizeConfig(t, n) {
    return nl(t, n, {
      base: { fillMode: "light" },
      start: { fillMode: "solid" },
      end: { fillMode: "solid" }
    });
  }
  prepareRender(t) {
    t.highlights = [], t.content || (t.content = []);
  }
  render({ data: t, onStart: n, onEnd: r }, a) {
    const { key: o, highlight: s } = t;
    if (!s)
      return;
    const { highlights: i } = a, { base: l, start: c, end: u } = s;
    n && r ? i.push({
      ...c,
      key: o,
      wrapperClass: `vc-day-layer vc-day-box-center-center vc-attr vc-${c.color}`,
      class: [`vc-highlight vc-highlight-bg-${c.fillMode}`, c.class],
      contentClass: [
        `vc-attr vc-highlight-content-${c.fillMode} vc-${c.color}`,
        c.contentClass
      ]
    }) : n ? (i.push({
      ...l,
      key: `${o}-base`,
      wrapperClass: `vc-day-layer vc-day-box-right-center vc-attr vc-${l.color}`,
      class: [
        `vc-highlight vc-highlight-base-start vc-highlight-bg-${l.fillMode}`,
        l.class
      ]
    }), i.push({
      ...c,
      key: o,
      wrapperClass: `vc-day-layer vc-day-box-center-center vc-attr vc-${c.color}`,
      class: [`vc-highlight vc-highlight-bg-${c.fillMode}`, c.class],
      contentClass: [
        `vc-attr vc-highlight-content-${c.fillMode} vc-${c.color}`,
        c.contentClass
      ]
    })) : r ? (i.push({
      ...l,
      key: `${o}-base`,
      wrapperClass: `vc-day-layer vc-day-box-left-center vc-attr vc-${l.color}`,
      class: [
        `vc-highlight vc-highlight-base-end vc-highlight-bg-${l.fillMode}`,
        l.class
      ]
    }), i.push({
      ...u,
      key: o,
      wrapperClass: `vc-day-layer vc-day-box-center-center vc-attr vc-${u.color}`,
      class: [`vc-highlight vc-highlight-bg-${u.fillMode}`, u.class],
      contentClass: [
        `vc-attr vc-highlight-content-${u.fillMode} vc-${u.color}`,
        u.contentClass
      ]
    })) : i.push({
      ...l,
      key: `${o}-middle`,
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
class rl {
  constructor(t, n) {
    de(this, "type", ""), de(this, "collectionType", ""), this.type = t, this.collectionType = n;
  }
  normalizeConfig(t, n) {
    return nl(t, n);
  }
  prepareRender(t) {
    t[this.collectionType] = [];
  }
  render({ data: t, onStart: n, onEnd: r }, a) {
    const { key: o } = t, s = t[this.type];
    if (!o || !s)
      return;
    const i = a[this.collectionType], { base: l, start: c, end: u } = s;
    n ? i.push({
      ...c,
      key: o,
      class: [
        `vc-${this.type} vc-${this.type}-start vc-${c.color} vc-attr`,
        c.class
      ]
    }) : r ? i.push({
      ...u,
      key: o,
      class: [
        `vc-${this.type} vc-${this.type}-end vc-${u.color} vc-attr`,
        u.class
      ]
    }) : i.push({
      ...l,
      key: o,
      class: [
        `vc-${this.type} vc-${this.type}-base vc-${l.color} vc-attr`,
        l.class
      ]
    });
  }
}
class RA extends rl {
  constructor() {
    super("content", "content");
  }
  normalizeConfig(t, n) {
    return nl("base", n);
  }
}
class FA extends rl {
  constructor() {
    super("dot", "dots");
  }
}
class VA extends rl {
  constructor() {
    super("bar", "bars");
  }
}
class BA {
  constructor(t) {
    de(this, "color"), de(this, "renderers", [
      new RA(),
      new LA(),
      new FA(),
      new VA()
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
const YA = 300, UA = 60, jA = 80, HA = {
  maxSwipeTime: YA,
  minHorizontalSwipeDistance: UA,
  maxVerticalSwipeDistance: jA
}, WA = "MMMM YYYY", GA = "W", zA = "MMM", KA = "h A", qA = [
  "L",
  "YYYY-MM-DD",
  "YYYY/MM/DD"
], ZA = [
  "L h:mm A",
  "YYYY-MM-DD h:mm A",
  "YYYY/MM/DD h:mm A"
], XA = [
  "L HH:mm",
  "YYYY-MM-DD HH:mm",
  "YYYY/MM/DD HH:mm"
], JA = [
  "h:mm A"
], QA = [
  "HH:mm"
], eN = "WWW, MMM D, YYYY", tN = [
  "L",
  "YYYY-MM-DD",
  "YYYY/MM/DD"
], nN = "iso", rN = "YYYY-MM-DDTHH:mm:ss.SSSZ", aN = {
  title: WA,
  weekdays: GA,
  navMonths: zA,
  hours: KA,
  input: qA,
  inputDateTime: ZA,
  inputDateTime24hr: XA,
  inputTime: JA,
  inputTime24hr: QA,
  dayPopover: eN,
  data: tN,
  model: nN,
  iso: rN
}, Cn = {
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
Cn.en = Cn["en-US"];
Cn.es = Cn["es-ES"];
Cn.no = Cn.nb;
Cn.zh = Cn["zh-CN"];
const oN = Object.entries(Cn).reduce(
  (e, [t, { dow: n, L: r }]) => (e[t] = {
    id: t,
    firstDayOfWeek: n,
    masks: { L: r }
  }, e),
  {}
), sN = {
  componentPrefix: "V",
  color: "blue",
  isDark: !1,
  navVisibility: "click",
  titlePosition: "center",
  transition: "slide-h",
  touch: HA,
  masks: aN,
  locales: oN,
  datePicker: {
    updateOnInput: !0,
    inputDebounce: 1e3,
    popover: {
      visibility: "hover-focus",
      placement: "bottom-start",
      isInteractive: !0
    }
  }
}, zs = Va(sN), iN = C(() => Bx(zs.locales, (e) => (e.masks = Ia(e.masks, zs.masks), e))), Zn = (e) => typeof window < "u" && tl(window.__vcalendar__, e) ? or(window.__vcalendar__, e) : or(zs, e);
var To = {}, lN = {
  get exports() {
    return To;
  },
  set exports(e) {
    To = e;
  }
}, Co = {}, uN = {
  get exports() {
    return Co;
  },
  set exports(e) {
    Co = e;
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
})(uN, Co);
var Ao = {}, cN = {
  get exports() {
    return Ao;
  },
  set exports(e) {
    Ao = e;
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
})(cN, Ao);
var No = {}, dN = {
  get exports() {
    return No;
  },
  set exports(e) {
    No = e;
  }
}, Po = {}, fN = {
  get exports() {
    return Po;
  },
  set exports(e) {
    Po = e;
  }
};
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = n;
  function n(l, c) {
    var u = i(c);
    return u.formatToParts ? a(u, l) : o(u, l);
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
        var p = r[u[f].type];
        p >= 0 && (d[p] = parseInt(u[f].value, 10));
      }
      return d;
    } catch (h) {
      if (h instanceof RangeError)
        return [NaN];
      throw h;
    }
  }
  function o(l, c) {
    var u = l.format(c).replace(/\u200E/g, ""), d = /(\d+)\/(\d+)\/(\d+),? (\d+):(\d+):(\d+)/.exec(u);
    return [d[3], d[1], d[2], d[4], d[5], d[6]];
  }
  var s = {};
  function i(l) {
    if (!s[l]) {
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
      s[l] = u ? new Intl.DateTimeFormat("en-US", {
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
    return s[l];
  }
  e.exports = t.default;
})(fN, Po);
var So = {}, pN = {
  get exports() {
    return So;
  },
  set exports(e) {
    So = e;
  }
};
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = n;
  function n(r, a, o, s, i, l, c) {
    var u = /* @__PURE__ */ new Date(0);
    return u.setUTCFullYear(r, a, o), u.setUTCHours(s, i, l, c), u;
  }
  e.exports = t.default;
})(pN, So);
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = l;
  var n = a(Po), r = a(So);
  function a(g) {
    return g && g.__esModule ? g : { default: g };
  }
  var o = 36e5, s = 6e4, i = {
    timezone: /([Z+-].*)$/,
    timezoneZ: /^(Z)$/,
    timezoneHH: /^([+-]\d{2})$/,
    timezoneHHMM: /^([+-]\d{2}):?(\d{2})$/
  };
  function l(g, y, v) {
    var b, E;
    if (!g || (b = i.timezoneZ.exec(g), b))
      return 0;
    var _;
    if (b = i.timezoneHH.exec(g), b)
      return _ = parseInt(b[1], 10), f(_) ? -(_ * o) : NaN;
    if (b = i.timezoneHHMM.exec(g), b) {
      _ = parseInt(b[1], 10);
      var T = parseInt(b[2], 10);
      return f(_, T) ? (E = Math.abs(_) * o + T * s, _ > 0 ? -E : E) : NaN;
    }
    if (h(g)) {
      y = new Date(y || Date.now());
      var D = v ? y : c(y), N = u(D, g), I = v ? N : d(y, N, g);
      return -I;
    }
    return NaN;
  }
  function c(g) {
    return (0, r.default)(g.getFullYear(), g.getMonth(), g.getDate(), g.getHours(), g.getMinutes(), g.getSeconds(), g.getMilliseconds());
  }
  function u(g, y) {
    var v = (0, n.default)(g, y), b = (0, r.default)(v[0], v[1] - 1, v[2], v[3] % 24, v[4], v[5], 0).getTime(), E = g.getTime(), _ = E % 1e3;
    return E -= _ >= 0 ? _ : 1e3 + _, b - E;
  }
  function d(g, y, v) {
    var b = g.getTime(), E = b - y, _ = u(new Date(E), v);
    if (y === _)
      return y;
    E -= _ - y;
    var T = u(new Date(E), v);
    return _ === T ? _ : Math.max(_, T);
  }
  function f(g, y) {
    return -23 <= g && g <= 23 && (y == null || 0 <= y && y <= 59);
  }
  var p = {};
  function h(g) {
    if (p[g])
      return !0;
    try {
      return new Intl.DateTimeFormat(void 0, {
        timeZone: g
      }), p[g] = !0, !0;
    } catch {
      return !1;
    }
  }
  e.exports = t.default;
})(dN, No);
var Io = {}, vN = {
  get exports() {
    return Io;
  },
  set exports(e) {
    Io = e;
  }
};
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = void 0;
  var n = /(Z|[+-]\d{2}(?::?\d{2})?| UTC| [a-zA-Z]+\/[a-zA-Z_]+(?:\/[a-zA-Z_]+)?)$/, r = n;
  t.default = r, e.exports = t.default;
})(vN, Io);
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = d;
  var n = s(Co), r = s(Ao), a = s(No), o = s(Io);
  function s(I) {
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
    timeZone: o.default
  };
  function d(I, L) {
    if (arguments.length < 1)
      throw new TypeError("1 argument required, but only " + arguments.length + " present");
    if (I === null)
      return /* @__PURE__ */ new Date(NaN);
    var x = L || {}, R = x.additionalDigits == null ? c : (0, n.default)(x.additionalDigits);
    if (R !== 2 && R !== 1 && R !== 0)
      throw new RangeError("additionalDigits must be 0, 1 or 2");
    if (I instanceof Date || typeof I == "object" && Object.prototype.toString.call(I) === "[object Date]")
      return new Date(I.getTime());
    if (typeof I == "number" || Object.prototype.toString.call(I) === "[object Number]")
      return new Date(I);
    if (!(typeof I == "string" || Object.prototype.toString.call(I) === "[object String]"))
      return /* @__PURE__ */ new Date(NaN);
    var P = f(I), G = p(P.date, R), ee = G.year, X = G.restDateString, ae = h(X, ee);
    if (isNaN(ae))
      return /* @__PURE__ */ new Date(NaN);
    if (ae) {
      var le = ae.getTime(), Ee = 0, ve;
      if (P.time && (Ee = g(P.time), isNaN(Ee)))
        return /* @__PURE__ */ new Date(NaN);
      if (P.timeZone || x.timeZone) {
        if (ve = (0, a.default)(P.timeZone || x.timeZone, new Date(le + Ee)), isNaN(ve))
          return /* @__PURE__ */ new Date(NaN);
      } else
        ve = (0, r.default)(new Date(le + Ee)), ve = (0, r.default)(new Date(le + Ee + ve));
      return new Date(le + Ee + ve);
    } else
      return /* @__PURE__ */ new Date(NaN);
  }
  function f(I) {
    var L = {}, x = u.dateTimePattern.exec(I), R;
    if (x ? (L.date = x[1], R = x[3]) : (x = u.datePattern.exec(I), x ? (L.date = x[1], R = x[2]) : (L.date = null, R = I)), R) {
      var P = u.timeZone.exec(R);
      P ? (L.time = R.replace(P[1], ""), L.timeZone = P[1].trim()) : L.time = R;
    }
    return L;
  }
  function p(I, L) {
    var x = u.YYY[L], R = u.YYYYY[L], P;
    if (P = u.YYYY.exec(I) || R.exec(I), P) {
      var G = P[1];
      return {
        year: parseInt(G, 10),
        restDateString: I.slice(G.length)
      };
    }
    if (P = u.YY.exec(I) || x.exec(I), P) {
      var ee = P[1];
      return {
        year: parseInt(ee, 10) * 100,
        restDateString: I.slice(ee.length)
      };
    }
    return {
      year: null
    };
  }
  function h(I, L) {
    if (L === null)
      return null;
    var x, R, P, G;
    if (I.length === 0)
      return R = /* @__PURE__ */ new Date(0), R.setUTCFullYear(L), R;
    if (x = u.MM.exec(I), x)
      return R = /* @__PURE__ */ new Date(0), P = parseInt(x[1], 10) - 1, _(L, P) ? (R.setUTCFullYear(L, P), R) : /* @__PURE__ */ new Date(NaN);
    if (x = u.DDD.exec(I), x) {
      R = /* @__PURE__ */ new Date(0);
      var ee = parseInt(x[1], 10);
      return T(L, ee) ? (R.setUTCFullYear(L, 0, ee), R) : /* @__PURE__ */ new Date(NaN);
    }
    if (x = u.MMDD.exec(I), x) {
      R = /* @__PURE__ */ new Date(0), P = parseInt(x[1], 10) - 1;
      var X = parseInt(x[2], 10);
      return _(L, P, X) ? (R.setUTCFullYear(L, P, X), R) : /* @__PURE__ */ new Date(NaN);
    }
    if (x = u.Www.exec(I), x)
      return G = parseInt(x[1], 10) - 1, D(L, G) ? y(L, G) : /* @__PURE__ */ new Date(NaN);
    if (x = u.WwwD.exec(I), x) {
      G = parseInt(x[1], 10) - 1;
      var ae = parseInt(x[2], 10) - 1;
      return D(L, G, ae) ? y(L, G, ae) : /* @__PURE__ */ new Date(NaN);
    }
    return null;
  }
  function g(I) {
    var L, x, R;
    if (L = u.HH.exec(I), L)
      return x = parseFloat(L[1].replace(",", ".")), N(x) ? x % 24 * i : NaN;
    if (L = u.HHMM.exec(I), L)
      return x = parseInt(L[1], 10), R = parseFloat(L[2].replace(",", ".")), N(x, R) ? x % 24 * i + R * l : NaN;
    if (L = u.HHMMSS.exec(I), L) {
      x = parseInt(L[1], 10), R = parseInt(L[2], 10);
      var P = parseFloat(L[3].replace(",", "."));
      return N(x, R, P) ? x % 24 * i + R * l + P * 1e3 : NaN;
    }
    return null;
  }
  function y(I, L, x) {
    L = L || 0, x = x || 0;
    var R = /* @__PURE__ */ new Date(0);
    R.setUTCFullYear(I, 0, 4);
    var P = R.getUTCDay() || 7, G = L * 7 + x + 1 - P;
    return R.setUTCDate(R.getUTCDate() + G), R;
  }
  var v = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], b = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  function E(I) {
    return I % 400 === 0 || I % 4 === 0 && I % 100 !== 0;
  }
  function _(I, L, x) {
    if (L < 0 || L > 11)
      return !1;
    if (x != null) {
      if (x < 1)
        return !1;
      var R = E(I);
      if (R && x > b[L] || !R && x > v[L])
        return !1;
    }
    return !0;
  }
  function T(I, L) {
    if (L < 1)
      return !1;
    var x = E(I);
    return !(x && L > 366 || !x && L > 365);
  }
  function D(I, L, x) {
    return !(L < 0 || L > 52 || x != null && (x < 0 || x > 6));
  }
  function N(I, L, x) {
    return !(I != null && (I < 0 || I >= 25) || L != null && (L < 0 || L >= 60) || x != null && (x < 0 || x >= 60));
  }
  e.exports = t.default;
})(lN, To);
const mN = /* @__PURE__ */ U1(To);
function dt(e, t) {
  if (t.length < e)
    throw new TypeError(e + " argument" + (e > 1 ? "s" : "") + " required, but only " + t.length + " present");
}
function uo(e) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? uo = function(n) {
    return typeof n;
  } : uo = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, uo(e);
}
function Sn(e) {
  dt(1, arguments);
  var t = Object.prototype.toString.call(e);
  return e instanceof Date || uo(e) === "object" && t === "[object Date]" ? new Date(e.getTime()) : typeof e == "number" || t === "[object Number]" ? new Date(e) : ((typeof e == "string" || t === "[object String]") && typeof console < "u" && (console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"), console.warn(new Error().stack)), /* @__PURE__ */ new Date(NaN));
}
function sa(e) {
  if (e === null || e === !0 || e === !1)
    return NaN;
  var t = Number(e);
  return isNaN(t) ? t : t < 0 ? Math.ceil(t) : Math.floor(t);
}
var hN = {};
function al() {
  return hN;
}
function dr(e, t) {
  var n, r, a, o, s, i, l, c;
  dt(1, arguments);
  var u = al(), d = sa((n = (r = (a = (o = t == null ? void 0 : t.weekStartsOn) !== null && o !== void 0 ? o : t == null || (s = t.locale) === null || s === void 0 || (i = s.options) === null || i === void 0 ? void 0 : i.weekStartsOn) !== null && a !== void 0 ? a : u.weekStartsOn) !== null && r !== void 0 ? r : (l = u.locale) === null || l === void 0 || (c = l.options) === null || c === void 0 ? void 0 : c.weekStartsOn) !== null && n !== void 0 ? n : 0);
  if (!(d >= 0 && d <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var f = Sn(e), p = f.getDay(), h = (p < d ? 7 : 0) + p - d;
  return f.setDate(f.getDate() - h), f.setHours(0, 0, 0, 0), f;
}
function Yu(e) {
  var t = new Date(Date.UTC(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()));
  return t.setUTCFullYear(e.getFullYear()), e.getTime() - t.getTime();
}
var gN = 6048e5;
function yN(e, t, n) {
  dt(2, arguments);
  var r = dr(e, n), a = dr(t, n), o = r.getTime() - Yu(r), s = a.getTime() - Yu(a);
  return Math.round((o - s) / gN);
}
function bN(e) {
  dt(1, arguments);
  var t = Sn(e), n = t.getMonth();
  return t.setFullYear(t.getFullYear(), n + 1, 0), t.setHours(0, 0, 0, 0), t;
}
function _N(e) {
  dt(1, arguments);
  var t = Sn(e);
  return t.setDate(1), t.setHours(0, 0, 0, 0), t;
}
function wN(e, t) {
  return dt(1, arguments), yN(bN(e), _N(e), t) + 1;
}
function EN(e, t) {
  var n, r, a, o, s, i, l, c;
  dt(1, arguments);
  var u = Sn(e), d = u.getFullYear(), f = al(), p = sa((n = (r = (a = (o = t == null ? void 0 : t.firstWeekContainsDate) !== null && o !== void 0 ? o : t == null || (s = t.locale) === null || s === void 0 || (i = s.options) === null || i === void 0 ? void 0 : i.firstWeekContainsDate) !== null && a !== void 0 ? a : f.firstWeekContainsDate) !== null && r !== void 0 ? r : (l = f.locale) === null || l === void 0 || (c = l.options) === null || c === void 0 ? void 0 : c.firstWeekContainsDate) !== null && n !== void 0 ? n : 1);
  if (!(p >= 1 && p <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var h = /* @__PURE__ */ new Date(0);
  h.setFullYear(d + 1, 0, p), h.setHours(0, 0, 0, 0);
  var g = dr(h, t), y = /* @__PURE__ */ new Date(0);
  y.setFullYear(d, 0, p), y.setHours(0, 0, 0, 0);
  var v = dr(y, t);
  return u.getTime() >= g.getTime() ? d + 1 : u.getTime() >= v.getTime() ? d : d - 1;
}
function ON(e, t) {
  var n, r, a, o, s, i, l, c;
  dt(1, arguments);
  var u = al(), d = sa((n = (r = (a = (o = t == null ? void 0 : t.firstWeekContainsDate) !== null && o !== void 0 ? o : t == null || (s = t.locale) === null || s === void 0 || (i = s.options) === null || i === void 0 ? void 0 : i.firstWeekContainsDate) !== null && a !== void 0 ? a : u.firstWeekContainsDate) !== null && r !== void 0 ? r : (l = u.locale) === null || l === void 0 || (c = l.options) === null || c === void 0 ? void 0 : c.firstWeekContainsDate) !== null && n !== void 0 ? n : 1), f = EN(e, t), p = /* @__PURE__ */ new Date(0);
  p.setFullYear(f, 0, d), p.setHours(0, 0, 0, 0);
  var h = dr(p, t);
  return h;
}
var DN = 6048e5;
function kN(e, t) {
  dt(1, arguments);
  var n = Sn(e), r = dr(n, t).getTime() - ON(n, t).getTime();
  return Math.round(r / DN) + 1;
}
function Mo(e) {
  return dt(1, arguments), dr(e, {
    weekStartsOn: 1
  });
}
function $N(e) {
  dt(1, arguments);
  var t = Sn(e), n = t.getFullYear(), r = /* @__PURE__ */ new Date(0);
  r.setFullYear(n + 1, 0, 4), r.setHours(0, 0, 0, 0);
  var a = Mo(r), o = /* @__PURE__ */ new Date(0);
  o.setFullYear(n, 0, 4), o.setHours(0, 0, 0, 0);
  var s = Mo(o);
  return t.getTime() >= a.getTime() ? n + 1 : t.getTime() >= s.getTime() ? n : n - 1;
}
function xN(e) {
  dt(1, arguments);
  var t = $N(e), n = /* @__PURE__ */ new Date(0);
  n.setFullYear(t, 0, 4), n.setHours(0, 0, 0, 0);
  var r = Mo(n);
  return r;
}
var TN = 6048e5;
function CN(e) {
  dt(1, arguments);
  var t = Sn(e), n = Mo(t).getTime() - xN(t).getTime();
  return Math.round(n / TN) + 1;
}
function vt(e, t) {
  dt(2, arguments);
  var n = Sn(e), r = sa(t);
  return isNaN(r) ? /* @__PURE__ */ new Date(NaN) : (r && n.setDate(n.getDate() + r), n);
}
function Lo(e, t) {
  dt(2, arguments);
  var n = Sn(e), r = sa(t);
  if (isNaN(r))
    return /* @__PURE__ */ new Date(NaN);
  if (!r)
    return n;
  var a = n.getDate(), o = new Date(n.getTime());
  o.setMonth(n.getMonth() + r + 1, 0);
  var s = o.getDate();
  return a >= s ? o : (n.setFullYear(o.getFullYear(), o.getMonth(), a), n);
}
function Uu(e, t) {
  dt(2, arguments);
  var n = sa(t);
  return Lo(e, n * 12);
}
var $r = /* @__PURE__ */ ((e) => (e.Any = "any", e.All = "all", e))($r || {}), Ff = /* @__PURE__ */ ((e) => (e.Days = "days", e.Weeks = "weeks", e.Months = "months", e.Years = "years", e))(Ff || {}), Vf = /* @__PURE__ */ ((e) => (e.Days = "days", e.Weekdays = "weekdays", e.Weeks = "weeks", e.Months = "months", e.Years = "years", e))(Vf || {}), Bf = /* @__PURE__ */ ((e) => (e.OrdinalWeekdays = "ordinalWeekdays", e))(Bf || {});
class AN {
  constructor(t, n, r) {
    de(this, "validated", !0), this.type = t, this.interval = n, this.from = r, this.from || (console.error(
      'A valid "from" date is required for date interval rule. This rule will be skipped.'
    ), this.validated = !1);
  }
  passes(t) {
    if (!this.validated)
      return !0;
    const { date: n } = t;
    switch (this.type) {
      case "days":
        return ol(this.from.date, n) % this.interval === 0;
      case "weeks":
        return KN(this.from.date, n) % this.interval === 0;
      case "months":
        return qN(this.from.date, n) % this.interval === 0;
      case "years":
        return Kf(this.from.date, n) % this.interval === 0;
      default:
        return !1;
    }
  }
}
class ia {
  constructor(t, n, r, a) {
    de(this, "components", []), this.type = t, this.validator = r, this.getter = a, this.components = this.normalizeComponents(n);
  }
  static create(t, n) {
    switch (t) {
      case "days":
        return new NN(n);
      case "weekdays":
        return new PN(n);
      case "weeks":
        return new SN(n);
      case "months":
        return new IN(n);
      case "years":
        return new MN(n);
    }
  }
  normalizeComponents(t) {
    if (this.validator(t))
      return [t];
    if (!Mt(t))
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
class NN extends ia {
  constructor(t) {
    super(
      "days",
      t,
      FN,
      ({ day: n, dayFromEnd: r }) => [n, -r]
    );
  }
}
class PN extends ia {
  constructor(t) {
    super(
      "weekdays",
      t,
      Ks,
      ({ weekday: n }) => [n]
    );
  }
}
class SN extends ia {
  constructor(t) {
    super(
      "weeks",
      t,
      VN,
      ({ week: n, weekFromEnd: r }) => [n, -r]
    );
  }
}
class IN extends ia {
  constructor(t) {
    super("months", t, BN, ({ month: n }) => [
      n
    ]);
  }
}
class MN extends ia {
  constructor(t) {
    super("years", t, Zt, ({ year: n }) => [n]);
  }
}
class LN {
  constructor(t, n) {
    de(this, "components"), this.type = t, this.components = this.normalizeComponents(n);
  }
  normalizeArrayConfig(t) {
    const n = [];
    return t.forEach((r, a) => {
      if (Zt(r)) {
        if (a === 0)
          return;
        if (!ju(t[0])) {
          console.error(
            `Ordinal range for "${this.type}" rule is from -5 to -1 or 1 to 5. This rule will be skipped.`
          );
          return;
        }
        if (!Ks(r)) {
          console.error(
            `Acceptable range for "${this.type}" rule is from 1 to 5. This rule will be skipped`
          );
          return;
        }
        n.push([t[0], r]);
      } else
        Mt(r) && n.push(...this.normalizeArrayConfig(r));
    }), n;
  }
  normalizeComponents(t) {
    const n = [];
    return t.forEach((r, a) => {
      if (Zt(r)) {
        if (a === 0)
          return;
        if (!ju(t[0])) {
          console.error(
            `Ordinal range for "${this.type}" rule is from -5 to -1 or 1 to 5. This rule will be skipped.`
          );
          return;
        }
        if (!Ks(r)) {
          console.error(
            `Acceptable range for "${this.type}" rule is from 1 to 5. This rule will be skipped`
          );
          return;
        }
        n.push([t[0], r]);
      } else
        Mt(r) && n.push(...this.normalizeArrayConfig(r));
    }), n;
  }
  passes(t) {
    const { weekday: n, weekdayOrdinal: r, weekdayOrdinalFromEnd: a } = t;
    return this.components.some(
      ([o, s]) => (o === r || o === -a) && n === s
    );
  }
}
class RN {
  constructor(t) {
    de(this, "type", "function"), de(this, "validated", !0), this.fn = t, gr(t) || (console.error(
      "The function rule requires a valid function. This rule will be skipped."
    ), this.validated = !1);
  }
  passes(t) {
    return this.validated ? this.fn(t) : !0;
  }
}
class Ro {
  constructor(t, n = {}, r) {
    de(this, "validated", !0), de(this, "config"), de(this, "type", $r.Any), de(this, "from"), de(this, "until"), de(this, "rules", []), de(this, "locale", new Vo()), this.parent = r, n.locale && (this.locale = n.locale), this.config = t, gr(t) ? (this.type = $r.All, this.rules = [new RN(t)]) : Mt(t) ? (this.type = $r.Any, this.rules = t.map((a) => new Ro(a, n, this))) : Tn(t) ? (this.type = $r.All, this.from = t.from ? this.locale.getDateParts(t.from) : r == null ? void 0 : r.from, this.until = t.until ? this.locale.getDateParts(t.until) : r == null ? void 0 : r.until, this.rules = this.getObjectRules(t)) : (console.error("Rule group configuration must be an object or an array."), this.validated = !1);
  }
  getObjectRules(t) {
    const n = [];
    if (t.every && (an(t.every) && (t.every = [1, `${t.every}s`]), Mt(t.every))) {
      const [r = 1, a = Ff.Days] = t.every;
      n.push(new AN(a, r, this.from));
    }
    return Object.values(Vf).forEach((r) => {
      r in t && n.push(ia.create(r, t[r]));
    }), Object.values(Bf).forEach((r) => {
      r in t && n.push(new LN(r, t[r]));
    }), t.on != null && (Mt(t.on) || (t.on = [t.on]), n.push(
      new Ro(t.on, { locale: this.locale }, this.parent)
    )), n;
  }
  passes(t) {
    return this.validated ? this.from && t.dayIndex <= this.from.dayIndex || this.until && t.dayIndex >= this.until.dayIndex ? !1 : this.type === $r.Any ? this.rules.some((n) => n.passes(t)) : this.rules.every((n) => n.passes(t)) : !0;
  }
}
function FN(e) {
  return Zt(e) ? e >= 1 && e <= 31 : !1;
}
function Ks(e) {
  return Zt(e) ? e >= 1 && e <= 7 : !1;
}
function VN(e) {
  return Zt(e) ? e >= -6 && e <= -1 || e >= 1 && e <= 6 : !1;
}
function BN(e) {
  return Zt(e) ? e >= 1 && e <= 12 : !1;
}
function ju(e) {
  return !(!Zt(e) || e < -5 || e > 5 || e === 0);
}
const YN = {
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
}, ct = 7, UN = 6, Yf = 1e3, Uf = Yf * 60, jf = Uf * 60, co = jf * 24, jN = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], HN = ["L", "iso"], wa = {
  milliseconds: [0, 999, 3],
  seconds: [0, 59, 2],
  minutes: [0, 59, 2],
  hours: [0, 23, 2]
}, Hf = /d{1,2}|W{1,4}|M{1,4}|YY(?:YY)?|S{1,3}|Do|Z{1,4}|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g, WN = /\[([^]*?)\]/gm, Hu = {
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
}, Rn = /\d\d?/, GN = /\d{3}/, zN = /\d{4}/, ga = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF/]+(\s*?[\u0600-\u06FF]+){1,2}/i, Wu = () => {
}, Gu = (e) => (t, n, r) => {
  const a = r[e].indexOf(
    n.charAt(0).toUpperCase() + n.substr(1).toLowerCase()
  );
  ~a && (t.month = a);
}, We = {
  D: [
    Rn,
    (e, t) => {
      e.day = t;
    }
  ],
  Do: [
    new RegExp(Rn.source + ga.source),
    (e, t) => {
      e.day = parseInt(t, 10);
    }
  ],
  d: [Rn, Wu],
  W: [ga, Wu],
  M: [
    Rn,
    (e, t) => {
      e.month = t - 1;
    }
  ],
  MMM: [ga, Gu("monthNamesShort")],
  MMMM: [ga, Gu("monthNames")],
  YY: [
    Rn,
    (e, t) => {
      const r = +(/* @__PURE__ */ new Date()).getFullYear().toString().substr(0, 2);
      e.year = +`${t > 68 ? r - 1 : r}${t}`;
    }
  ],
  YYYY: [
    zN,
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
    GN,
    (e, t) => {
      e.milliseconds = t;
    }
  ],
  h: [
    Rn,
    (e, t) => {
      e.hours = t;
    }
  ],
  m: [
    Rn,
    (e, t) => {
      e.minutes = t;
    }
  ],
  s: [
    Rn,
    (e, t) => {
      e.seconds = t;
    }
  ],
  a: [
    ga,
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
We.DD = We.D;
We.dd = We.d;
We.WWWW = We.WWW = We.WW = We.W;
We.MM = We.M;
We.mm = We.m;
We.hh = We.H = We.HH = We.h;
We.ss = We.s;
We.A = We.a;
We.ZZZZ = We.ZZZ = We.ZZ = We.Z;
function Wf(e, t) {
  return (wn(e) && e || [
    an(e) && e || "YYYY-MM-DD"
  ]).map(
    (n) => HN.reduce(
      (r, a) => r.replace(a, t.masks[a] || ""),
      n
    )
  );
}
function Gf(e) {
  return Tn(e) && "year" in e && "month" in e && "day" in e;
}
function zu(e, t = 1) {
  const n = e.getDay() + 1, r = n >= t ? t - n : -(7 - (t - n));
  return vt(e, r);
}
function zf(e, t, n) {
  const r = Date.UTC(e, t - 1, n);
  return ol(/* @__PURE__ */ new Date(0), new Date(r));
}
function ol(e, t) {
  return Math.round((t.getTime() - e.getTime()) / co);
}
function KN(e, t) {
  return Math.ceil(ol(zu(e), zu(t)) / 7);
}
function Kf(e, t) {
  return t.getUTCFullYear() - e.getUTCFullYear();
}
function qN(e, t) {
  return Kf(e, t) * 12 + (t.getMonth() - e.getMonth());
}
function qf(e, t = "") {
  const n = /* @__PURE__ */ new Date(), {
    year: r = n.getFullYear(),
    month: a = n.getMonth() + 1,
    day: o = n.getDate(),
    hours: s = 0,
    minutes: i = 0,
    seconds: l = 0,
    milliseconds: c = 0
  } = e;
  if (t) {
    const u = `${je(r, 4)}-${je(a, 2)}-${je(o, 2)}T${je(
      s,
      2
    )}:${je(i, 2)}:${je(l, 2)}.${je(c, 3)}`;
    return mN(u, { timeZone: t });
  }
  return new Date(r, a - 1, o, s, i, l, c);
}
function ZN(e, t) {
  let n = new Date(e.getTime());
  t.timezone && (n = new Date(
    e.toLocaleString("en-US", { timeZone: t.timezone })
  ), n.setMilliseconds(e.getMilliseconds()));
  const r = n.getMilliseconds(), a = n.getSeconds(), o = n.getMinutes(), s = n.getHours(), i = r + a * Yf + o * Uf + s * jf, l = n.getMonth() + 1, c = n.getFullYear(), u = t.getMonthParts(l, c), d = n.getDate(), f = u.numDays - d + 1, p = n.getDay() + 1, h = Math.floor((d - 1) / 7 + 1), g = Math.floor((u.numDays - d) / 7 + 1), y = Math.ceil(
    (d + Math.abs(u.firstWeekday - u.firstDayOfWeek)) / 7
  ), v = u.numWeeks - y + 1, b = u.weeknumbers[y], E = zf(c, l, d);
  return {
    milliseconds: r,
    seconds: a,
    minutes: o,
    hours: s,
    time: i,
    day: d,
    dayFromEnd: f,
    weekday: p,
    weekdayOrdinal: h,
    weekdayOrdinalFromEnd: g,
    week: y,
    weekFromEnd: v,
    weeknumber: b,
    month: l,
    year: c,
    date: n,
    dateTime: n.getTime(),
    dayIndex: E,
    timezoneOffset: 0,
    isValid: !0
  };
}
function XN(e, t, n) {
  return `${t}-${e}-${n}`;
}
function JN(e, t, n) {
  const r = t % 4 === 0 && t % 100 !== 0 || t % 400 === 0, a = new Date(t, e - 1, 1), o = a.getDay() + 1, s = e === 2 && r ? 29 : jN[e - 1], i = n - 1, l = wN(a, {
    weekStartsOn: i
  }), c = [], u = [];
  for (let d = 0; d < l; d++) {
    const f = vt(a, d * 7);
    c.push(kN(f, { weekStartsOn: i })), u.push(CN(f));
  }
  return {
    firstDayOfWeek: n,
    firstDayOfMonth: a,
    inLeapYear: r,
    firstWeekday: o,
    numDays: s,
    numWeeks: l,
    month: e,
    year: t,
    weeknumbers: c,
    isoWeeknumbers: u
  };
}
function QN() {
  const e = [];
  for (let a = 0; a < ct; a++)
    e.push(
      qf({
        year: 2020,
        month: 1,
        day: 5 + a,
        hours: 12
      })
    );
  return e;
}
function Es(e, t = void 0) {
  const n = new Intl.DateTimeFormat(t, {
    weekday: e
  });
  return QN().map((r) => n.format(r));
}
function eP() {
  const e = [];
  for (let t = 0; t <= 24; t++)
    e.push(new Date(2e3, 0, 1, t));
  return e;
}
function tP(e = void 0) {
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
    const o = n.formatToParts(100, a);
    return r[a] = o[1].unit, r;
  }, {});
}
function Zf() {
  const e = [];
  for (let t = 0; t < 12; t++)
    e.push(new Date(2e3, t, 15));
  return e;
}
function Ku(e, t = void 0) {
  const n = new Intl.DateTimeFormat(t, {
    month: e,
    timeZone: "UTC"
  });
  return Zf().map((r) => n.format(r));
}
function nP(e, t, n) {
  return Zt(t) ? t === e : Mt(t) ? t.includes(e) : gr(t) ? t(e, n) : !(t.min != null && t.min > e || t.max != null && t.max < e || t.interval != null && e % t.interval !== 0);
}
function Ea(e, t, n) {
  const r = [], [a, o, s] = t;
  for (let i = a; i <= o; i++)
    (n == null || nP(i, n, e)) && r.push({
      value: i,
      label: je(i, s)
    });
  return r;
}
function rP(e, t) {
  return {
    milliseconds: Ea(
      e,
      wa.milliseconds,
      t.milliseconds
    ),
    seconds: Ea(e, wa.seconds, t.seconds),
    minutes: Ea(e, wa.minutes, t.minutes),
    hours: Ea(e, wa.hours, t.hours)
  };
}
function aP(e, t, n, r) {
  const o = Ea(e, t, r).reduce((s, i) => {
    if (i.disabled)
      return s;
    if (isNaN(s))
      return i.value;
    const l = Math.abs(s - n);
    return Math.abs(i.value - n) < l ? i.value : s;
  }, NaN);
  return isNaN(o) ? n : o;
}
function oP(e, t) {
  const n = { ...e };
  return Object.entries(t).forEach(([r, a]) => {
    const o = wa[r], s = e[r];
    n[r] = aP(
      e,
      o,
      s,
      a
    );
  }), n;
}
function qu(e, t, n) {
  return Wf(t, n).map((a) => {
    if (typeof a != "string")
      throw new Error("Invalid mask");
    let o = e;
    if (o.length > 1e3)
      return !1;
    let s = !0;
    const i = {};
    if (a.replace(Hf, (u) => {
      if (We[u]) {
        const d = We[u], f = o.search(d[0]);
        ~f ? o.replace(d[0], (p) => (d[1](i, p, n), o = o.substr(f + p.length), p)) : s = !1;
      }
      return We[u] ? "" : u.slice(1, u.length - 1);
    }), !s)
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
function sP(e, t, n) {
  if (e == null)
    return "";
  let r = Wf(t, n)[0];
  /Z$/.test(r) && (n.timezone = "utc");
  const a = [];
  r = r.replace(WN, (s, i) => (a.push(i), "??"));
  const o = n.getDateParts(e);
  return r = r.replace(
    Hf,
    (s) => s in Hu ? Hu[s](o, n) : s.slice(1, s.length - 1)
  ), r.replace(/\?\?/g, () => a.shift());
}
const iP = {
  daily: ["year", "month", "day"],
  weekly: ["year", "month", "week"],
  monthly: ["year", "month"]
};
function lP({
  monthComps: e,
  prevMonthComps: t,
  nextMonthComps: n
}, r) {
  const a = [], {
    firstDayOfWeek: o,
    firstWeekday: s,
    isoWeeknumbers: i,
    weeknumbers: l,
    numDays: c,
    numWeeks: u
  } = e, d = s + (s < o ? ct : 0) - o;
  let f = !0, p = !1, h = !1, g = 0;
  const y = new Intl.DateTimeFormat(r.id, {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric"
  });
  let v = t.numDays - d + 1, b = t.numDays - v + 1, E = Math.floor((v - 1) / ct + 1), _ = 1, T = t.numWeeks, D = 1, N = t.month, I = t.year;
  const L = /* @__PURE__ */ new Date(), x = L.getDate(), R = L.getMonth() + 1, P = L.getFullYear();
  for (let G = 1; G <= UN; G++) {
    for (let ee = 1, X = o; ee <= ct; ee++, X += X === ct ? 1 - ct : 1) {
      f && X === s && (v = 1, b = e.numDays, E = Math.floor((v - 1) / ct + 1), _ = Math.floor((c - v) / ct + 1), T = 1, D = u, N = e.month, I = e.year, f = !1, p = !0);
      const ae = r.getDateFromParams(I, N, v, 0, 0, 0, 0), le = r.getDateFromParams(I, N, v, 12, 0, 0, 0), Ee = r.getDateFromParams(
        I,
        N,
        v,
        23,
        59,
        59,
        999
      ), ve = ae, W = `${je(I, 4)}-${je(N, 2)}-${je(v, 2)}`, ce = ee, Me = ct - ee, Ye = l[G - 1], oe = i[G - 1], Ne = v === x && N === R && I === P, V = p && v === 1, B = p && v === c, te = G === 1, z = G === u, S = ee === 1, H = ee === ct, ue = zf(I, N, v);
      a.push({
        locale: r,
        id: W,
        position: ++g,
        label: v.toString(),
        ariaLabel: y.format(new Date(I, N - 1, v)),
        day: v,
        dayFromEnd: b,
        weekday: X,
        weekdayPosition: ce,
        weekdayPositionFromEnd: Me,
        weekdayOrdinal: E,
        weekdayOrdinalFromEnd: _,
        week: T,
        weekFromEnd: D,
        weekPosition: G,
        weeknumber: Ye,
        isoWeeknumber: oe,
        month: N,
        year: I,
        date: ve,
        startDate: ae,
        endDate: Ee,
        noonDate: le,
        dayIndex: ue,
        isToday: Ne,
        isFirstDay: V,
        isLastDay: B,
        isDisabled: !p,
        isFocusable: !p,
        isFocused: !1,
        inMonth: p,
        inPrevMonth: f,
        inNextMonth: h,
        onTop: te,
        onBottom: z,
        onLeft: S,
        onRight: H,
        classes: [
          `id-${W}`,
          `day-${v}`,
          `day-from-end-${b}`,
          `weekday-${X}`,
          `weekday-position-${ce}`,
          `weekday-ordinal-${E}`,
          `weekday-ordinal-from-end-${_}`,
          `week-${T}`,
          `week-from-end-${D}`,
          {
            "is-today": Ne,
            "is-first-day": V,
            "is-last-day": B,
            "in-month": p,
            "in-prev-month": f,
            "in-next-month": h,
            "on-top": te,
            "on-bottom": z,
            "on-left": S,
            "on-right": H
          }
        ]
      }), p && B ? (p = !1, h = !0, v = 1, b = c, E = 1, _ = Math.floor((c - v) / ct + 1), T = 1, D = n.numWeeks, N = n.month, I = n.year) : (v++, b--, E = Math.floor((v - 1) / ct + 1), _ = Math.floor((c - v) / ct + 1));
    }
    T++, D--;
  }
  return a;
}
function uP(e, t, n, r) {
  const a = e.reduce((o, s, i) => {
    const l = Math.floor(i / 7);
    let c = o[l];
    return c || (c = {
      id: `week-${l + 1}`,
      title: "",
      week: s.week,
      weekPosition: s.weekPosition,
      weeknumber: s.weeknumber,
      isoWeeknumber: s.isoWeeknumber,
      weeknumberDisplay: t ? s.weeknumber : n ? s.isoWeeknumber : void 0,
      days: []
    }, o[l] = c), c.days.push(s), o;
  }, Array(e.length / ct));
  return a.forEach((o) => {
    const s = o.days[0], i = o.days[o.days.length - 1];
    s.month === i.month ? o.title = `${r.formatDate(s.date, "MMMM YYYY")}` : s.year === i.year ? o.title = `${r.formatDate(
      s.date,
      "MMM"
    )} - ${r.formatDate(i.date, "MMM YYYY")}` : o.title = `${r.formatDate(
      s.date,
      "MMM YYYY"
    )} - ${r.formatDate(i.date, "MMM YYYY")}`;
  }), a;
}
function cP(e, t) {
  return e.days.map((n) => ({
    label: t.formatDate(n.date, t.masks.weekdays),
    weekday: n.weekday
  }));
}
function Xf(e, t, n) {
  return Rf(
    n.getDateParts(n.toDate(e)),
    iP[t]
  );
}
function Jf({ day: e, week: t, month: n, year: r }, a, o, s) {
  if (o === "daily" && e) {
    const i = new Date(r, n - 1, e), l = vt(i, a);
    return {
      day: l.getDate(),
      month: l.getMonth() + 1,
      year: l.getFullYear()
    };
  } else if (o === "weekly" && t) {
    const l = s.getMonthParts(n, r).firstDayOfMonth, c = vt(l, (t - 1 + a) * 7), u = s.getDateParts(c);
    return {
      week: u.week,
      month: u.month,
      year: u.year
    };
  } else {
    const i = new Date(r, n - 1, 1), l = Lo(i, a);
    return {
      month: l.getMonth() + 1,
      year: l.getFullYear()
    };
  }
}
function on(e) {
  return e != null && e.month != null && e.year != null;
}
function qs(e, t) {
  return !on(e) || !on(t) ? !1 : (e = e, t = t, e.year !== t.year ? e.year < t.year : e.month && t.month && e.month !== t.month ? e.month < t.month : e.week && t.week && e.week !== t.week ? e.week < t.week : e.day && t.day && e.day !== t.day ? e.day < t.day : !1);
}
function Fo(e, t) {
  return !on(e) || !on(t) ? !1 : (e = e, t = t, e.year !== t.year ? e.year > t.year : e.month && t.month && e.month !== t.month ? e.month > t.month : e.week && t.week && e.week !== t.week ? e.week > t.week : e.day && t.day && e.day !== t.day ? e.day > t.day : !1);
}
function Qf(e, t, n) {
  return (e || !1) && !qs(e, t) && !Fo(e, n);
}
function dP(e, t) {
  return !e && t || e && !t ? !1 : !e && !t ? !0 : (e = e, t = t, e.year === t.year && e.month === t.month && e.week === t.week && e.day === t.day);
}
function fP(e, t, n, r) {
  if (!on(e) || !on(t))
    return [];
  const a = [];
  for (; !Fo(e, t); )
    a.push(e), e = Jf(e, 1, n, r);
  return a;
}
function ep(e) {
  const { day: t, week: n, month: r, year: a } = e;
  let o = `${a}-${je(r, 2)}`;
  return n && (o = `${o}-w${n}`), t && (o = `${o}-${je(t, 2)}`), o;
}
function pP(e, t) {
  const { month: n, year: r, showWeeknumbers: a, showIsoWeeknumbers: o } = e, s = new Date(r, n - 1, 15), i = t.getMonthParts(n, r), l = t.getPrevMonthParts(n, r), c = t.getNextMonthParts(n, r), u = lP({ monthComps: i, prevMonthComps: l, nextMonthComps: c }, t), d = uP(u, a, o, t), f = cP(d[0], t);
  return {
    id: ep(e),
    month: n,
    year: r,
    monthTitle: t.formatDate(s, t.masks.title),
    shortMonthLabel: t.formatDate(s, "MMM"),
    monthLabel: t.formatDate(s, "MMMM"),
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
function vP(e, t) {
  const { day: n, week: r, view: a, trimWeeks: o } = e, s = {
    ...t,
    ...e,
    title: "",
    viewDays: [],
    viewWeeks: []
  };
  switch (a) {
    case "daily": {
      let i = s.days.find((c) => c.inMonth);
      n ? i = s.days.find((c) => c.day === n && c.inMonth) || i : r && (i = s.days.find((c) => c.week === r && c.inMonth));
      const l = s.weeks[i.week - 1];
      s.viewWeeks = [l], s.viewDays = [i], s.week = i.week, s.weekTitle = l.title, s.day = i.day, s.dayTitle = i.ariaLabel, s.title = s.dayTitle;
      break;
    }
    case "weekly": {
      s.week = r || 1;
      const i = s.weeks[s.week - 1];
      s.viewWeeks = [i], s.viewDays = i.days, s.weekTitle = i.title, s.title = s.weekTitle;
      break;
    }
    default: {
      s.title = s.monthTitle, s.viewWeeks = s.weeks.slice(
        0,
        o ? s.monthComps.numWeeks : void 0
      ), s.viewDays = s.days;
      break;
    }
  }
  return s;
}
class Zu {
  constructor(t, n, r) {
    de(this, "keys", []), de(this, "store", {}), this.size = t, this.createKey = n, this.createItem = r;
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
class Ir {
  constructor(t, n = new Vo()) {
    de(this, "order"), de(this, "locale"), de(this, "start", null), de(this, "end", null), de(this, "repeat", null);
    var r;
    this.locale = n;
    const { start: a, end: o, span: s, order: i, repeat: l } = t;
    Sr(a) && (this.start = n.getDateParts(a)), Sr(o) ? this.end = n.getDateParts(o) : this.start != null && s && (this.end = n.getDateParts(vt(this.start.date, s - 1))), this.order = i ?? 0, l && (this.repeat = new Ro(
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
    return (Mt(t) ? t : [t]).filter((r) => r).map((r) => Ir.from(r, n));
  }
  static from(t, n) {
    if (t instanceof Ir)
      return t;
    const r = {
      start: null,
      end: null
    };
    return t != null && (Mt(t) ? (r.start = t[0] ?? null, r.end = t[1] ?? null) : Tn(t) ? Object.assign(r, t) : (r.start = t, r.end = t)), r.start != null && (r.start = new Date(r.start)), r.end != null && (r.end = new Date(r.end)), new Ir(r, n);
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
class mP {
  constructor() {
    de(this, "records", {});
  }
  render(t, n, r) {
    var a, o, s, i;
    let l = null;
    const c = r[0].dayIndex, u = r[r.length - 1].dayIndex;
    return n.hasRepeat ? r.forEach((d) => {
      var f, p;
      if (n.startsOnDay(d)) {
        const h = n.daySpan < 1 / 0 ? n.daySpan : 1;
        l = {
          startDay: d.dayIndex,
          startTime: ((f = n.start) == null ? void 0 : f.time) ?? 0,
          endDay: d.dayIndex + h - 1,
          endTime: ((p = n.end) == null ? void 0 : p.time) ?? co
        }, this.getRangeRecords(t).push(l);
      }
    }) : n.intersectsDayRange(c, u) && (l = {
      startDay: ((a = n.start) == null ? void 0 : a.dayIndex) ?? -1 / 0,
      startTime: ((o = n.start) == null ? void 0 : o.time) ?? -1 / 0,
      endDay: ((s = n.end) == null ? void 0 : s.dayIndex) ?? 1 / 0,
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
    return this.getCells(n).find((o) => o.data.key === t);
  }
  cellExists(t, n) {
    const r = this.records[t];
    return r == null ? !1 : r.ranges.some(
      (a) => a.startDay <= n && a.endDay >= n
    );
  }
  getCells(t) {
    const n = Object.values(this.records), r = [], { dayIndex: a } = t;
    return n.forEach(({ data: o, ranges: s }) => {
      s.filter((i) => i.startDay <= a && i.endDay >= a).forEach((i) => {
        const l = a === i.startDay, c = a === i.endDay, u = l ? i.startTime : 0, d = new Date(t.startDate.getTime() + u), f = c ? i.endTime : co, p = new Date(t.endDate.getTime() + f), h = u === 0 && f === co, g = o.order || 0;
        r.push({
          ...i,
          data: o,
          onStart: l,
          onEnd: c,
          startTime: u,
          startDate: d,
          endTime: f,
          endDate: p,
          allDay: h,
          order: g
        });
      });
    }), r.sort((o, s) => o.order - s.order), r;
  }
}
const hP = 12, gP = 5;
function yP(e, t) {
  const n = new Intl.DateTimeFormat().resolvedOptions().locale;
  let r;
  an(e) ? r = e : tl(e, "id") && (r = e.id), r = (r || n).toLowerCase();
  const a = Object.keys(t), o = (l) => a.find((c) => c.toLowerCase() === l);
  r = o(r) || o(r.substring(0, 2)) || n;
  const s = {
    ...t["en-IE"],
    ...t[r],
    id: r,
    monthCacheSize: hP,
    pageCacheSize: gP
  };
  return Tn(e) ? Ia(e, s) : s;
}
class Vo {
  constructor(t = void 0, n) {
    de(this, "id"), de(this, "daysInWeek"), de(this, "firstDayOfWeek"), de(this, "masks"), de(this, "timezone"), de(this, "hourLabels"), de(this, "dayNames"), de(this, "dayNamesShort"), de(this, "dayNamesShorter"), de(this, "dayNamesNarrow"), de(this, "monthNames"), de(this, "monthNamesShort"), de(this, "relativeTimeNames"), de(this, "amPm", ["am", "pm"]), de(this, "monthCache"), de(this, "pageCache");
    const { id: r, firstDayOfWeek: a, masks: o, monthCacheSize: s, pageCacheSize: i } = yP(t, iN.value);
    this.monthCache = new Zu(
      s,
      XN,
      JN
    ), this.pageCache = new Zu(i, ep, pP), this.id = r, this.daysInWeek = ct, this.firstDayOfWeek = PA(a, 1, ct), this.masks = o, this.timezone = n || void 0, this.hourLabels = this.getHourLabels(), this.dayNames = Es("long", this.id), this.dayNamesShort = Es("short", this.id), this.dayNamesShorter = this.dayNamesShort.map((l) => l.substring(0, 2)), this.dayNamesNarrow = Es("narrow", this.id), this.monthNames = Ku("long", this.id), this.monthNamesShort = Ku("short", this.id), this.relativeTimeNames = tP(this.id);
  }
  formatDate(t, n) {
    return sP(t, n, this);
  }
  parseDate(t, n) {
    return qu(t, n, this);
  }
  toDate(t, n = {}) {
    const r = /* @__PURE__ */ new Date(NaN);
    let a = r;
    const { fillDate: o, mask: s, patch: i, rules: l } = n;
    if (Zt(t) ? (n.type = "number", a = /* @__PURE__ */ new Date(+t)) : an(t) ? (n.type = "string", a = t ? qu(t, s || "iso", this) : r) : Sr(t) ? (n.type = "date", a = new Date(t.getTime())) : Gf(t) && (n.type = "object", a = this.getDateFromParts(t)), a && (i || l)) {
      let c = this.getDateParts(a);
      if (i && o != null) {
        const u = this.getDateParts(this.toDate(o));
        c = this.getDateParts(
          this.toDate({ ...u, ...Rf(c, YN[i]) })
        );
      }
      l && (c = oP(c, l)), a = this.getDateFromParts(c);
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
    return Ir.from(t, this);
  }
  ranges(t) {
    return Ir.fromMany(t, this);
  }
  getDateParts(t) {
    return ZN(t, this);
  }
  getDateFromParts(t) {
    return qf(t, this.timezone);
  }
  getDateFromParams(t, n, r, a, o, s, i) {
    return this.getDateFromParts({
      year: t,
      month: n,
      day: r,
      hours: a,
      minutes: o,
      seconds: s,
      milliseconds: i
    });
  }
  getPage(t) {
    const n = this.pageCache.getOrSet(t, this);
    return vP(t, n);
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
    return eP().map((t) => this.formatDate(t, this.masks.hours));
  }
  getDayId(t) {
    return this.formatDate(t, "YYYY-MM-DD");
  }
}
class tp {
  constructor(t, n, r) {
    de(this, "key", ""), de(this, "hashcode", ""), de(this, "highlight", null), de(this, "content", null), de(this, "dot", null), de(this, "bar", null), de(this, "event", null), de(this, "popover", null), de(this, "customData", null), de(this, "ranges"), de(this, "hasRanges", !1), de(this, "order", 0), de(this, "pinPage", !1), de(this, "maxRepeatSpan", 0), de(this, "locale");
    const { dates: a } = Object.assign(
      this,
      { hashcode: "", order: 0, pinPage: !1 },
      t
    );
    this.key || (this.key = xo()), this.locale = r, n.normalizeGlyphs(this), this.ranges = r.ranges(a ?? []), this.hasRanges = !!wn(this.ranges), this.maxRepeatSpan = this.ranges.filter((o) => o.hasRepeat).map((o) => o.daySpan).reduce((o, s) => Math.max(o, s), 0);
  }
  intersectsRange({ start: t, end: n }) {
    if (t == null || n == null)
      return !1;
    const r = this.ranges.filter((s) => !s.hasRepeat);
    for (const s of r)
      if (s.intersectsDayRange(t.dayIndex, n.dayIndex))
        return !0;
    const a = this.ranges.filter((s) => s.hasRepeat);
    if (!a.length)
      return !1;
    let o = t;
    for (this.maxRepeatSpan > 1 && (o = this.locale.getDateParts(vt(o.date, -this.maxRepeatSpan))); o.dayIndex <= n.dayIndex; ) {
      for (const s of a)
        if (s.startsOnDay(o))
          return !0;
      o = this.locale.getDateParts(vt(o.date, 1));
    }
    return !1;
  }
}
const np = "__vc_base_context__", rp = {
  color: {
    type: String,
    default: () => Zn("color")
  },
  isDark: {
    type: [Boolean, String, Object],
    default: () => Zn("isDark")
  },
  firstDayOfWeek: Number,
  masks: Object,
  locale: [String, Object],
  timezone: String,
  minDate: null,
  maxDate: null,
  disabledDates: null
};
function ap(e) {
  const t = C(() => e.color ?? ""), n = C(() => e.isDark ?? !1), { displayMode: r } = Y1(n), a = C(() => new BA(t.value)), o = C(() => {
    if (e.locale instanceof Vo)
      return e.locale;
    const u = Tn(e.locale) ? e.locale : {
      id: e.locale,
      firstDayOfWeek: e.firstDayOfWeek,
      masks: e.masks
    };
    return new Vo(u, e.timezone);
  }), s = C(() => o.value.masks), i = C(() => {
    const u = e.disabledDates ?? [];
    return e.minDate != null && u.push({
      start: null,
      end: vt(o.value.toDate(e.minDate), -1)
    }), e.maxDate != null && u.push({
      start: vt(o.value.toDate(e.maxDate), 1),
      end: null
    }), o.value.ranges(u);
  }), l = C(() => new tp(
    {
      key: "disabled",
      dates: i.value,
      order: 100
    },
    a.value,
    o.value
  )), c = {
    color: t,
    isDark: n,
    displayMode: r,
    theme: a,
    locale: o,
    masks: s,
    disabledDates: i,
    disabledAttribute: l
  };
  return qt(np, c), c;
}
function bP(e) {
  return Be(np, ap(e));
}
const _P = (e, t, {
  maxSwipeTime: n,
  minHorizontalSwipeDistance: r,
  maxVerticalSwipeDistance: a
}) => {
  if (!e || !e.addEventListener || !gr(t))
    return null;
  let o = 0, s = 0, i = null, l = !1;
  function c(d) {
    const f = d.changedTouches[0];
    o = f.screenX, s = f.screenY, i = (/* @__PURE__ */ new Date()).getTime(), l = !0;
  }
  function u(d) {
    if (!l || !i)
      return;
    l = !1;
    const f = d.changedTouches[0], p = f.screenX - o, h = f.screenY - s;
    if ((/* @__PURE__ */ new Date()).getTime() - i < n && Math.abs(p) >= r && Math.abs(h) <= a) {
      const y = { toLeft: !1, toRight: !1 };
      p < 0 ? y.toLeft = !0 : y.toRight = !0, t(y);
    }
  }
  return jn(e, "touchstart", c, { passive: !0 }), jn(e, "touchend", u, { passive: !0 }), () => {
    Un(e, "touchstart", c), Un(e, "touchend", u);
  };
}, fo = {}, wP = (e, t = 10) => {
  fo[e] = Date.now() + t;
}, EP = (e, t) => {
  if (e in fo) {
    const n = fo[e];
    if (Date.now() < n)
      return;
    delete fo[e];
  }
  t();
}, OP = {
  ...rp,
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
    default: () => Zn("titlePosition")
  },
  navVisibility: {
    type: String,
    default: () => Zn("navVisibility")
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
}, DP = [
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
], op = "__vc_calendar_context__";
function kP(e, { emit: t, slots: n }) {
  const r = Y(null), a = Y(null), o = Y(null), s = Y((/* @__PURE__ */ new Date()).getDate()), i = Y(!1), l = Y(xo()), c = Y(xo()), u = Y(e.view), d = Y([]), f = Y("");
  let p = null, h = null;
  const {
    theme: g,
    color: y,
    displayMode: v,
    locale: b,
    masks: E,
    disabledAttribute: _,
    disabledDates: T
  } = bP(e), D = C(() => e.rows * e.columns), N = C(() => e.step || D.value), I = C(() => Mf(d.value) ?? null), L = C(() => Ar(d.value) ?? null), x = C(
    () => e.minPage || (e.minDate ? ce(e.minDate) : null)
  ), R = C(
    () => e.maxPage || (e.maxDate ? ce(e.maxDate) : null)
  ), P = C(() => e.navVisibility), G = C(() => !!e.showWeeknumbers), ee = C(() => !!e.showIsoWeeknumbers), X = C(() => u.value === "monthly"), ae = C(() => u.value === "weekly"), le = C(() => u.value === "daily"), Ee = () => {
    i.value = !0, t("transition-start");
  }, ve = () => {
    i.value = !1, t("transition-end"), p && (p.resolve(!0), p = null);
  }, W = (K, Q, Oe = u.value) => Jf(K, Q, Oe, b.value), ce = (K) => Xf(K, u.value, b.value), Me = (K) => {
    !_.value || !te.value || (K.isDisabled = te.value.cellExists(
      _.value.key,
      K.dayIndex
    ));
  }, Ye = (K) => {
    K.isFocusable = K.inMonth && K.day === s.value;
  }, oe = (K, Q) => {
    for (const Oe of K)
      for (const M of Oe.days)
        if (Q(M) === !1)
          return;
  }, Ne = C(
    () => d.value.reduce((K, Q) => (K.push(...Q.viewDays), K), [])
  ), V = C(() => {
    const K = [];
    return (e.attributes || []).forEach((Q, Oe) => {
      if (!Q || !Q.dates)
        return;
      const M = tl(Q, "key") ? Q.key : Oe, J = Q.order || 0;
      K.push(
        new tp(
          {
            ...Q,
            key: M,
            order: J
          },
          g.value,
          b.value
        )
      );
    }), _.value && K.push(_.value), K;
  }), B = C(() => wn(V.value)), te = C(() => {
    const K = new mP();
    return V.value.forEach((Q) => {
      Q.ranges.forEach((Oe) => {
        K.render(Q, Oe, Ne.value);
      });
    }), K;
  }), z = C(() => Ne.value.reduce((K, Q) => (K[Q.dayIndex] = { day: Q, cells: [] }, K[Q.dayIndex].cells.push(...te.value.getCells(Q)), K), {})), S = (K, Q) => {
    const Oe = e.showWeeknumbers || e.showIsoWeeknumbers;
    return Oe == null ? "" : x_(Oe) ? Oe ? "left" : "" : Oe.startsWith("right") ? Q > 1 ? "right" : Oe : K > 1 ? "left" : Oe;
  }, H = () => {
    var K, Q;
    if (!B.value)
      return null;
    const Oe = V.value.find((me) => me.pinPage) || V.value[0];
    if (!Oe || !Oe.hasRanges)
      return null;
    const [M] = Oe.ranges, J = ((K = M.start) == null ? void 0 : K.date) || ((Q = M.end) == null ? void 0 : Q.date);
    return J ? ce(J) : null;
  }, ue = () => {
    if (on(I.value))
      return I.value;
    const K = H();
    return on(K) ? K : ce(/* @__PURE__ */ new Date());
  }, k = (K, Q = {}) => {
    const { view: Oe = u.value, position: M = 1, force: J } = Q, me = M > 0 ? 1 - M : -(D.value + M);
    let Pe = W(K, me, Oe), nt = W(Pe, D.value - 1, Oe);
    return J || (qs(Pe, x.value) ? Pe = x.value : Fo(nt, R.value) && (Pe = W(R.value, 1 - D.value)), nt = W(Pe, D.value - 1)), { fromPage: Pe, toPage: nt };
  }, w = (K, Q, Oe = "") => {
    if (Oe === "none" || Oe === "fade")
      return Oe;
    if ((K == null ? void 0 : K.view) !== (Q == null ? void 0 : Q.view))
      return "fade";
    const M = Fo(Q, K), J = qs(Q, K);
    return !M && !J ? "fade" : Oe === "slide-v" ? J ? "slide-down" : "slide-up" : J ? "slide-right" : "slide-left";
  }, F = (K = {}) => new Promise((Q, Oe) => {
    const { position: M = 1, force: J = !1, transition: me } = K, Pe = on(K.page) ? K.page : ue(), { fromPage: nt } = k(Pe, {
      position: M,
      force: J
    }), Ht = [];
    for (let mt = 0; mt < D.value; mt++) {
      const Er = W(nt, mt), ca = mt + 1, Ka = Math.ceil(ca / e.columns), Ct = e.rows - Ka + 1, qa = ca % e.columns || e.columns, da = e.columns - qa + 1, fs = S(qa, da);
      Ht.push(
        b.value.getPage({
          ...Er,
          view: u.value,
          titlePosition: e.titlePosition,
          trimWeeks: e.trimWeeks,
          position: ca,
          row: Ka,
          rowFromEnd: Ct,
          column: qa,
          columnFromEnd: da,
          showWeeknumbers: G.value,
          showIsoWeeknumbers: ee.value,
          weeknumberPosition: fs
        })
      );
    }
    f.value = w(
      d.value[0],
      Ht[0],
      me
    ), d.value = Ht, f.value && f.value !== "none" ? p = {
      resolve: Q,
      reject: Oe
    } : Q(!0);
  }), re = (K) => {
    const Q = I.value ?? ce(/* @__PURE__ */ new Date());
    return W(Q, K);
  }, pe = (K, Q = {}) => {
    const Oe = on(K) ? K : ce(K);
    return Object.assign(
      Q,
      k(Oe, {
        ...Q,
        force: !0
      })
    ), fP(
      Q.fromPage,
      Q.toPage,
      u.value,
      b.value
    ).map((J) => Qf(J, x.value, R.value)).every((J) => J);
  }, Te = (K, Q = {}) => pe(re(K), Q), ut = C(() => Te(-N.value)), et = C(() => Te(N.value)), Tt = async (K, Q = {}) => !Q.force && !pe(K, Q) ? !1 : (Q.fromPage && !dP(Q.fromPage, I.value) && (a.value && a.value.hide({ hideDelay: 0 }), Q.view && (wP("view", 10), u.value = Q.view), await F({
    ...Q,
    page: Q.fromPage,
    position: 1,
    force: !0
  }), t("did-move", d.value)), !0), en = (K, Q = {}) => Tt(re(K), Q), Ue = () => en(-N.value), U = () => en(N.value), q = (K) => {
    const Q = X.value ? ".in-month" : "", Oe = `.id-${b.value.getDayId(K)}${Q}`, M = `${Oe}.vc-focusable, ${Oe} .vc-focusable`, J = r.value;
    if (J) {
      const me = J.querySelector(M);
      if (me)
        return me.focus(), !0;
    }
    return !1;
  }, Xe = async (K, Q = {}) => q(K) ? !0 : (await Tt(K, Q), q(K)), Je = (K, Q) => {
    s.value = K.day, t("dayclick", K, Q);
  }, tn = (K, Q) => {
    t("daymouseenter", K, Q);
  }, In = (K, Q) => {
    t("daymouseleave", K, Q);
  }, Ut = (K, Q) => {
    s.value = K.day, o.value = K, K.isFocused = !0, t("dayfocusin", K, Q);
  }, jt = (K, Q) => {
    o.value = null, K.isFocused = !1, t("dayfocusout", K, Q);
  }, tr = (K, Q) => {
    t("daykeydown", K, Q);
    const Oe = K.noonDate;
    let M = null;
    switch (Q.key) {
      case "ArrowLeft": {
        M = vt(Oe, -1);
        break;
      }
      case "ArrowRight": {
        M = vt(Oe, 1);
        break;
      }
      case "ArrowUp": {
        M = vt(Oe, -7);
        break;
      }
      case "ArrowDown": {
        M = vt(Oe, 7);
        break;
      }
      case "Home": {
        M = vt(Oe, -K.weekdayPosition + 1);
        break;
      }
      case "End": {
        M = vt(Oe, K.weekdayPositionFromEnd);
        break;
      }
      case "PageUp": {
        Q.altKey ? M = Uu(Oe, -1) : M = Lo(Oe, -1);
        break;
      }
      case "PageDown": {
        Q.altKey ? M = Uu(Oe, 1) : M = Lo(Oe, 1);
        break;
      }
    }
    M && (Q.preventDefault(), Xe(M).catch());
  }, wr = (K) => {
    const Q = o.value;
    Q != null && tr(Q, K);
  }, ds = (K, Q) => {
    t("weeknumberclick", K, Q);
  };
  F({
    page: e.initialPage,
    position: e.initialPagePosition
  }), Yt(() => {
    !e.disablePageSwipe && r.value && (h = _P(
      r.value,
      ({ toLeft: K = !1, toRight: Q = !1 }) => {
        K ? U() : Q && Ue();
      },
      Zn("touch")
    ));
  }), Jn(() => {
    d.value = [], h && h();
  }), _e(
    () => b.value,
    () => {
      F();
    }
  ), _e(
    () => D.value,
    () => F()
  ), _e(
    () => e.view,
    () => u.value = e.view
  ), _e(
    () => u.value,
    () => {
      EP("view", () => {
        F();
      }), t("update:view", u.value);
    }
  ), _e(
    () => s.value,
    () => {
      oe(d.value, (K) => Ye(K));
    }
  ), Et(() => {
    t("update:pages", d.value), oe(d.value, (K) => {
      Me(K), Ye(K);
    });
  });
  const za = {
    emit: t,
    slots: n,
    containerRef: r,
    navPopoverRef: a,
    focusedDay: o,
    inTransition: i,
    navPopoverId: l,
    dayPopoverId: c,
    view: u,
    pages: d,
    transitionName: f,
    theme: g,
    color: y,
    displayMode: v,
    locale: b,
    masks: E,
    attributes: V,
    disabledAttribute: _,
    disabledDates: T,
    attributeContext: te,
    days: Ne,
    dayCells: z,
    count: D,
    step: N,
    firstPage: I,
    lastPage: L,
    canMovePrev: ut,
    canMoveNext: et,
    minPage: x,
    maxPage: R,
    isMonthly: X,
    isWeekly: ae,
    isDaily: le,
    navVisibility: P,
    showWeeknumbers: G,
    showIsoWeeknumbers: ee,
    getDateAddress: ce,
    canMove: pe,
    canMoveBy: Te,
    move: Tt,
    moveBy: en,
    movePrev: Ue,
    moveNext: U,
    onTransitionBeforeEnter: Ee,
    onTransitionAfterEnter: ve,
    tryFocusDate: q,
    focusDate: Xe,
    onKeydown: wr,
    onDayKeydown: tr,
    onDayClick: Je,
    onDayMouseenter: tn,
    onDayMouseleave: In,
    onDayFocusin: Ut,
    onDayFocusout: jt,
    onWeeknumberClick: ds
  };
  return qt(op, za), za;
}
function br() {
  const e = Be(op);
  if (e)
    return e;
  throw new Error(
    "Calendar context missing. Please verify this component is nested within a valid context provider."
  );
}
const $P = {
  inheritAttrs: !1
}, Mr = /* @__PURE__ */ fe({
  ...$P,
  __name: "CalendarSlot",
  props: {
    name: null
  },
  setup(e) {
    const { slots: t } = br();
    return (n, r) => m(t)[e.name] ? (O(), we(Ho(m(t)[e.name]), Lr(tt({ key: 0 }, n.$attrs)), null, 16)) : Re(n.$slots, "default", { key: 1 });
  }
});
function Zs(e) {
  document && document.dispatchEvent(
    new CustomEvent("show-popover", {
      detail: e
    })
  );
}
function Bo(e) {
  document && document.dispatchEvent(
    new CustomEvent("hide-popover", {
      detail: e
    })
  );
}
function sp(e) {
  document && document.dispatchEvent(
    new CustomEvent("toggle-popover", {
      detail: e
    })
  );
}
function ip(e) {
  const { visibility: t } = e, n = t === "click", r = t === "hover", a = t === "hover-focus", o = t === "focus";
  e.autoHide = !n;
  let s = !1, i = !1;
  const l = (h) => {
    n && (sp({
      ...e,
      target: e.target || h.currentTarget
    }), h.stopPropagation());
  }, c = (h) => {
    s || (s = !0, (r || a) && Zs({
      ...e,
      target: e.target || h.currentTarget
    }));
  }, u = () => {
    s && (s = !1, (r || a && !i) && Bo(e));
  }, d = (h) => {
    i || (i = !0, (o || a) && Zs({
      ...e,
      target: e.target || h.currentTarget
    }));
  }, f = (h) => {
    i && !lo(h.currentTarget, h.relatedTarget) && (i = !1, (o || a && !s) && Bo(e));
  }, p = {};
  switch (e.visibility) {
    case "click":
      p.click = l;
      break;
    case "hover":
      p.mousemove = c, p.mouseleave = u;
      break;
    case "focus":
      p.focusin = d, p.focusout = f;
      break;
    case "hover-focus":
      p.mousemove = c, p.mouseleave = u, p.focusin = d, p.focusout = f;
      break;
  }
  return p;
}
const Xu = (e) => {
  const t = $o(e);
  if (t == null)
    return;
  const n = t.popoverHandlers;
  !n || !n.length || (n.forEach((r) => r()), delete t.popoverHandlers);
}, Ju = (e, t) => {
  const n = $o(e);
  if (n == null)
    return;
  const r = [], a = ip(t);
  Object.entries(a).forEach(([o, s]) => {
    r.push(jn(n, o, s));
  }), n.popoverHandlers = r;
}, lp = {
  mounted(e, t) {
    const { value: n } = t;
    n && Ju(e, n);
  },
  updated(e, t) {
    const { oldValue: n, value: r } = t, a = n == null ? void 0 : n.visibility, o = r == null ? void 0 : r.visibility;
    a !== o && (a && (Xu(e), o || Bo(n)), o && Ju(e, r));
  },
  unmounted(e) {
    Xu(e);
  }
}, xP = ["disabled"], TP = {
  key: 1,
  type: "button",
  class: "vc-title"
}, CP = ["disabled"], up = /* @__PURE__ */ fe({
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
      movePrev: o,
      canMoveNext: s,
      moveNext: i
    } = br(), l = C(() => {
      switch (t.page.titlePosition) {
        case "left":
          return "bottom-start";
        case "right":
          return "bottom-end";
        default:
          return "bottom";
      }
    }), c = C(() => {
      const { page: g } = t;
      return {
        id: n.value,
        visibility: r.value,
        placement: l.value,
        modifiers: [{ name: "flip", options: { fallbackPlacements: ["bottom"] } }],
        data: { page: g },
        isInteractive: !0
      };
    }), u = C(() => t.page.titlePosition.includes("left")), d = C(() => t.page.titlePosition.includes("right")), f = C(() => t.layout ? t.layout : u.value ? "tu-pn" : d.value ? "pn-tu" : "p-tu-n;"), p = C(() => ({
      prev: f.value.includes("p") && !t.hideArrows,
      title: f.value.includes("t") && !t.hideTitle,
      next: f.value.includes("n") && !t.hideArrows
    })), h = C(() => ({ gridTemplateColumns: f.value.split("").map((y) => {
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
    return (g, y) => (O(), A("div", {
      class: Ie(["vc-header", { "is-lg": e.isLg, "is-xl": e.isXl, "is-2xl": e.is2xl }]),
      style: Hn(m(h))
    }, [
      m(p).prev ? (O(), A("button", {
        key: 0,
        type: "button",
        class: "vc-arrow vc-prev vc-focus",
        disabled: !m(a),
        onClick: y[0] || (y[0] = //@ts-ignore
        (...v) => m(o) && m(o)(...v)),
        onKeydown: y[1] || (y[1] = Ss(
          //@ts-ignore
          (...v) => m(o) && m(o)(...v),
          ["space", "enter"]
        ))
      }, [
        se(Mr, {
          name: "header-prev-button",
          disabled: !m(a)
        }, {
          default: he(() => [
            se(jr, {
              name: "ChevronLeft",
              size: "24"
            })
          ]),
          _: 1
        }, 8, ["disabled"])
      ], 40, xP)) : Z("", !0),
      m(p).title ? st((O(), A("button", TP, [
        se(Mr, {
          name: "header-title",
          title: e.page.title
        }, {
          default: he(() => [
            $("span", null, be(e.page.title), 1)
          ]),
          _: 1
        }, 8, ["title"])
      ])), [
        [m(lp), m(c)]
      ]) : Z("", !0),
      m(p).next ? (O(), A("button", {
        key: 2,
        type: "button",
        class: "vc-arrow vc-next vc-focus",
        disabled: !m(s),
        onClick: y[2] || (y[2] = //@ts-ignore
        (...v) => m(i) && m(i)(...v)),
        onKeydown: y[3] || (y[3] = Ss(
          //@ts-ignore
          (...v) => m(i) && m(i)(...v),
          ["space", "enter"]
        ))
      }, [
        se(Mr, {
          name: "header-next-button",
          disabled: !m(s)
        }, {
          default: he(() => [
            se(jr, {
              name: "ChevronRight",
              size: "24"
            })
          ]),
          _: 1
        }, 8, ["disabled"])
      ], 40, CP)) : Z("", !0)
    ], 6));
  }
}), AP = fe({
  directives: { popover: lp },
  components: { CalendarSlot: Mr },
  props: {
    day: { type: Object, required: !0 }
  },
  setup(e) {
    const {
      locale: t,
      theme: n,
      attributeContext: r,
      dayPopoverId: a,
      slots: o,
      onDayClick: s,
      onDayMouseenter: i,
      onDayMouseleave: l,
      onDayFocusin: c,
      onDayFocusout: u,
      onDayKeydown: d
    } = br(), f = C(() => e.day), p = C(() => r.value.getCells(f.value)), h = C(
      () => p.value.map((X) => X.data)
    ), g = C(() => ({
      ...f.value,
      attributes: h.value,
      attributeCells: p.value
    }));
    function y({ data: X }, { popovers: ae }) {
      const { key: le, customData: Ee, popover: ve } = X;
      if (!ve)
        return;
      const W = Pu(
        {
          key: le,
          customData: Ee,
          attribute: X
        },
        { ...ve },
        {
          visibility: ve.label ? "hover" : "click",
          placement: "bottom",
          isInteractive: !ve.label
        }
      );
      ae.splice(0, 0, W);
    }
    const v = C(() => {
      const X = {
        ...n.value.prepareRender({}),
        popovers: []
      };
      return p.value.forEach((ae) => {
        n.value.render(ae, X), y(ae, X);
      }), X;
    }), b = C(() => v.value.highlights), E = C(() => !!wn(b.value)), _ = C(() => v.value.content), T = C(() => v.value.dots), D = C(() => !!wn(T.value)), N = C(() => v.value.bars), I = C(() => !!wn(N.value)), L = C(() => v.value.popovers), x = C(
      () => L.value.map((X) => X.attribute)
    ), R = C(() => [
      "vc-day",
      ...f.value.classes,
      { "vc-day-box-center-center": !o["day-content"] },
      { "is-not-in-month": !e.day.inMonth }
    ]), P = C(() => {
      let X;
      f.value.isFocusable ? X = "0" : X = "-1";
      const ae = [
        "vc-day-content vc-focusable vc-focus vc-attr",
        { "vc-disabled": f.value.isDisabled },
        or(Ar(b.value), "contentClass"),
        or(Ar(_.value), "class") || ""
      ], le = {
        ...or(Ar(b.value), "contentStyle"),
        ...or(Ar(_.value), "style")
      };
      return {
        class: ae,
        style: le,
        tabindex: X,
        "aria-label": f.value.ariaLabel,
        "aria-disabled": !!f.value.isDisabled,
        role: "button"
      };
    }), G = C(() => ({
      click(X) {
        s(g.value, X);
      },
      mouseenter(X) {
        i(g.value, X);
      },
      mouseleave(X) {
        l(g.value, X);
      },
      focusin(X) {
        c(g.value, X);
      },
      focusout(X) {
        u(g.value, X);
      },
      keydown(X) {
        d(g.value, X);
      }
    })), ee = C(() => wn(L.value) ? Pu(
      {
        id: a.value,
        data: { day: f, attributes: x.value }
      },
      ...L.value
    ) : null);
    return {
      attributes: h,
      attributeCells: p,
      bars: N,
      dayClasses: R,
      dayContentProps: P,
      dayContentEvents: G,
      dayPopover: ee,
      glyphs: v,
      dots: T,
      hasDots: D,
      hasBars: I,
      highlights: b,
      hasHighlights: E,
      locale: t,
      popovers: L
    };
  }
}), NP = {
  key: 0,
  class: "vc-highlights vc-day-layer"
}, PP = {
  key: 1,
  class: "vc-day-layer vc-day-box-center-bottom"
}, SP = { class: "vc-dots" }, IP = {
  key: 2,
  class: "vc-day-layer vc-day-box-center-bottom"
}, MP = { class: "vc-bars" };
function LP(e, t, n, r, a, o) {
  const s = rr("CalendarSlot"), i = vv("popover");
  return O(), A("div", {
    class: Ie(e.dayClasses)
  }, [
    e.hasHighlights ? (O(), A("div", NP, [
      (O(!0), A(ie, null, Ae(e.highlights, ({ key: l, wrapperClass: c, class: u, style: d }) => (O(), A("div", {
        key: l,
        class: Ie(c)
      }, [
        $("div", {
          class: Ie(u),
          style: Hn(d)
        }, null, 6)
      ], 2))), 128))
    ])) : Z("", !0),
    se(s, {
      name: "day-content",
      day: e.day,
      attributes: e.attributes,
      "attribute-cells": e.attributeCells,
      dayProps: e.dayContentProps,
      dayEvents: e.dayContentEvents,
      locale: e.locale
    }, {
      default: he(() => [
        st((O(), A("div", tt(e.dayContentProps, mv(e.dayContentEvents, !0)), [
          Gn(be(e.day.label), 1)
        ], 16)), [
          [i, e.dayPopover]
        ])
      ]),
      _: 1
    }, 8, ["day", "attributes", "attribute-cells", "dayProps", "dayEvents", "locale"]),
    e.hasDots ? (O(), A("div", PP, [
      $("div", SP, [
        (O(!0), A(ie, null, Ae(e.dots, ({ key: l, class: c, style: u }) => (O(), A("span", {
          key: l,
          class: Ie(c),
          style: Hn(u)
        }, null, 6))), 128))
      ])
    ])) : Z("", !0),
    e.hasBars ? (O(), A("div", IP, [
      $("div", MP, [
        (O(!0), A(ie, null, Ae(e.bars, ({ key: l, class: c, style: u }) => (O(), A("span", {
          key: l,
          class: Ie(c),
          style: Hn(u)
        }, null, 6))), 128))
      ])
    ])) : Z("", !0)
  ], 2);
}
const RP = /* @__PURE__ */ Nn(AP, [["render", LP]]), FP = {
  name: "CalendarPane",
  inheritAttrs: !1,
  components: { CalendarHeader: up, CalendarDay: RP },
  props: {
    page: { type: Object, required: !0 }
  },
  setup() {
    const { onWeeknumberClick: e } = br();
    return {
      onWeeknumberClick: e
    };
  }
}, VP = { class: "vc-weekdays" }, BP = ["onClick"];
function YP(e, t, n, r, a, o) {
  const s = rr("CalendarHeader"), i = rr("CalendarDay");
  return O(), A("div", {
    class: Ie([
      "vc-pane",
      `row-${n.page.row}`,
      `row-from-end-${n.page.rowFromEnd}`,
      `column-${n.page.column}`,
      `column-from-end-${n.page.columnFromEnd}`
    ]),
    ref: "pane"
  }, [
    se(s, {
      page: n.page,
      "is-lg": "",
      "hide-arrows": ""
    }, null, 8, ["page"]),
    $("div", {
      class: Ie(["vc-weeks", {
        [`vc-show-weeknumbers-${n.page.weeknumberPosition}`]: n.page.weeknumberPosition
      }])
    }, [
      $("div", VP, [
        (O(!0), A(ie, null, Ae(n.page.weekdays, ({ weekday: l, label: c }, u) => (O(), A("div", {
          key: u,
          class: Ie(`vc-weekday vc-weekday-${l}`)
        }, be(c), 3))), 128))
      ]),
      (O(!0), A(ie, null, Ae(n.page.viewWeeks, (l) => (O(), A("div", {
        key: `weeknumber-${l.weeknumber}`,
        class: "vc-week"
      }, [
        n.page.weeknumberPosition ? (O(), A("div", {
          key: 0,
          class: Ie(["vc-weeknumber", `is-${n.page.weeknumberPosition}`])
        }, [
          $("span", {
            class: Ie(["vc-weeknumber-content"]),
            onClick: (c) => r.onWeeknumberClick(l, c)
          }, be(l.weeknumberDisplay), 9, BP)
        ], 2)) : Z("", !0),
        (O(!0), A(ie, null, Ae(l.days, (c) => (O(), we(i, {
          key: c.id,
          day: c
        }, null, 8, ["day"]))), 128))
      ]))), 128))
    ], 2)
  ], 2);
}
const UP = /* @__PURE__ */ Nn(FP, [["render", YP]]), jP = fe({
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
    const r = Y();
    let a = null, o = null;
    const s = Va({
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
    function i(W) {
      W && (s.direction = W.split("-")[0]);
    }
    function l({ placement: W, options: ce }) {
      i(W || (ce == null ? void 0 : ce.placement));
    }
    const c = C(() => ({
      placement: s.placement,
      strategy: s.positionFixed ? "fixed" : "absolute",
      boundary: "",
      modifiers: [
        {
          name: "onUpdate",
          enabled: !0,
          phase: "afterWrite",
          fn: l
        },
        ...s.modifiers || []
      ],
      onFirstUpdate: l
    })), u = C(() => {
      const W = s.direction === "left" || s.direction === "right";
      let ce = "";
      if (s.placement) {
        const Me = s.placement.split("-");
        Me.length > 1 && (ce = Me[1]);
      }
      return ["start", "top", "left"].includes(ce) ? W ? "top" : "left" : ["end", "bottom", "right"].includes(ce) ? W ? "bottom" : "right" : W ? "middle" : "center";
    });
    function d() {
      o && (o.destroy(), o = null);
    }
    function f() {
      bt(() => {
        const W = $o(s.target);
        !W || !r.value || (o && o.state.elements.reference !== W && d(), o ? o.update() : o = f1(
          W,
          r.value,
          c.value
        ));
      });
    }
    function p(W) {
      Object.assign(s, Lf(W, "force"));
    }
    function h(W, ce) {
      clearTimeout(n), W > 0 ? n = setTimeout(ce, W) : ce();
    }
    function g(W) {
      return !W || !o ? !1 : $o(W) === o.state.elements.reference;
    }
    async function y(W = {}) {
      s.force || (W.force && (s.force = !0), h(W.showDelay ?? e.showDelay, () => {
        s.isVisible && (s.force = !1, t("after-show")), p({
          ...W,
          isVisible: !0
        }), f();
      }));
    }
    function v(W = {}) {
      o && (W.target && !g(W.target) || s.force || (W.force && (s.force = !0), h(W.hideDelay ?? e.hideDelay, () => {
        s.isVisible || (s.force = !1), s.isVisible = !1;
      })));
    }
    function b(W = {}) {
      W.target != null && (s.isVisible && g(W.target) ? v(W) : y(W));
    }
    function E(W) {
      if (!o)
        return;
      const ce = o.state.elements.reference;
      if (!r.value || !ce)
        return;
      const Me = W.target;
      lo(r.value, Me) || lo(ce, Me) || v({ force: !0 });
    }
    function _(W) {
      (W.key === "Esc" || W.key === "Escape") && v();
    }
    function T({ detail: W }) {
      !W.id || W.id !== e.id || y(W);
    }
    function D({ detail: W }) {
      !W.id || W.id !== e.id || v(W);
    }
    function N({ detail: W }) {
      !W.id || W.id !== e.id || b(W);
    }
    function I() {
      jn(document, "keydown", _), jn(document, "click", E), jn(document, "show-popover", T), jn(document, "hide-popover", D), jn(document, "toggle-popover", N);
    }
    function L() {
      Un(document, "keydown", _), Un(document, "click", E), Un(document, "show-popover", T), Un(document, "hide-popover", D), Un(document, "toggle-popover", N);
    }
    function x(W) {
      t("before-show", W);
    }
    function R(W) {
      s.force = !1, t("after-show", W);
    }
    function P(W) {
      t("before-hide", W);
    }
    function G(W) {
      s.force = !1, d(), t("after-hide", W);
    }
    function ee(W) {
      W.stopPropagation();
    }
    function X() {
      s.isHovered = !0, s.isInteractive && ["hover", "hover-focus"].includes(s.visibility) && y();
    }
    function ae() {
      if (s.isHovered = !1, !o)
        return;
      const W = o.state.elements.reference;
      s.autoHide && !s.isFocused && (!W || W !== document.activeElement) && ["hover", "hover-focus"].includes(s.visibility) && v();
    }
    function le() {
      s.isFocused = !0, s.isInteractive && ["focus", "hover-focus"].includes(s.visibility) && y();
    }
    function Ee(W) {
      ["focus", "hover-focus"].includes(s.visibility) && (!W.relatedTarget || !lo(r.value, W.relatedTarget)) && (s.isFocused = !1, !s.isHovered && s.autoHide && v());
    }
    function ve() {
      a != null && (a.disconnect(), a = null);
    }
    return _e(
      () => r.value,
      (W) => {
        ve(), W && (a = new ResizeObserver(() => {
          o && o.update();
        }), a.observe(W));
      }
    ), _e(() => s.placement, i, {
      immediate: !0
    }), Yt(() => {
      I();
    }), Jn(() => {
      d(), ve(), L();
    }), {
      ...Kr(s),
      popoverRef: r,
      alignment: u,
      hide: v,
      setupPopper: f,
      beforeEnter: x,
      afterEnter: R,
      beforeLeave: P,
      afterLeave: G,
      onClick: ee,
      onMouseOver: X,
      onMouseLeave: ae,
      onFocusIn: le,
      onFocusOut: Ee
    };
  }
});
function HP(e, t, n, r, a, o) {
  return O(), A("div", {
    class: Ie(["vc-popover-content-wrapper", { "is-interactive": e.isInteractive }]),
    ref: "popoverRef",
    onClick: t[0] || (t[0] = (...s) => e.onClick && e.onClick(...s)),
    onMouseover: t[1] || (t[1] = (...s) => e.onMouseOver && e.onMouseOver(...s)),
    onMouseleave: t[2] || (t[2] = (...s) => e.onMouseLeave && e.onMouseLeave(...s)),
    onFocusin: t[3] || (t[3] = (...s) => e.onFocusIn && e.onFocusIn(...s)),
    onFocusout: t[4] || (t[4] = (...s) => e.onFocusOut && e.onFocusOut(...s))
  }, [
    se(yi, {
      name: `vc-${e.transition}`,
      appear: "",
      onBeforeEnter: e.beforeEnter,
      onAfterEnter: e.afterEnter,
      onBeforeLeave: e.beforeLeave,
      onAfterLeave: e.afterLeave
    }, {
      default: he(() => [
        e.isVisible ? (O(), A("div", tt({
          key: 0,
          tabindex: "-1",
          class: `vc-popover-content direction-${e.direction}`
        }, e.$attrs), [
          Re(e.$slots, "default", {
            direction: e.direction,
            alignment: e.alignment,
            data: e.data,
            hide: e.hide
          }, () => [
            Gn(be(e.data), 1)
          ]),
          $("span", {
            class: Ie([
              "vc-popover-caret",
              `direction-${e.direction}`,
              `align-${e.alignment}`
            ])
          }, null, 2)
        ], 16)) : Z("", !0)
      ]),
      _: 3
    }, 8, ["name", "onBeforeEnter", "onAfterEnter", "onBeforeLeave", "onAfterLeave"])
  ], 34);
}
const sl = /* @__PURE__ */ Nn(jP, [["render", HP]]), WP = {
  value: { type: Object, required: !0 }
}, GP = ["input"], zP = "__vc_calendar_nav_context__";
function KP(e, { emit: t }) {
  const n = Y(!0), r = Y(0), a = Y(0), o = 12, s = Y(null), { locale: i, masks: l, canMove: c, getDateAddress: u } = br();
  function d() {
    setTimeout(() => {
      if (s.value == null)
        return;
      const oe = s.value.querySelector(
        ".vc-nav-item:not(:disabled)"
      );
      oe && oe.focus();
    }, 10);
  }
  function f(oe, Ne) {
    t("input", { month: oe, year: Ne }, { position: x.value });
  }
  function p(oe) {
    r.value = oe, n.value = !0, d();
  }
  function h(oe) {
    const { year: Ne } = u(/* @__PURE__ */ new Date()), V = oe * o, B = V + o, te = [];
    for (let z = V; z < B; z += 1) {
      let S = !1;
      for (let H = 1; H < 12 && (S = c({ month: H, year: z }, { position: x.value }), !S); H++)
        ;
      te.push({
        year: z,
        id: z.toString(),
        label: z.toString(),
        ariaLabel: z.toString(),
        isActive: z === L.value,
        isCurrent: z === Ne,
        isDisabled: !S,
        click: () => p(z)
      });
    }
    return te;
  }
  function g(oe) {
    const { month: Ne, year: V } = u(/* @__PURE__ */ new Date());
    return Zf().map((B, te) => {
      const z = te + 1;
      return {
        month: z,
        year: oe,
        id: `${oe}.${je(z, 2)}`,
        label: i.value.formatDate(B, l.value.navMonths),
        ariaLabel: i.value.formatDate(B, "MMMM YYYY"),
        isActive: z === I.value && oe === L.value,
        isCurrent: z === Ne && oe === V,
        isDisabled: !c(
          { month: z, year: oe },
          { position: x.value }
        ),
        click: () => f(z, oe)
      };
    });
  }
  function y(oe) {
    return Math.floor(oe / o);
  }
  function v() {
    n.value = !n.value;
  }
  function b() {
    Ee.value && (n.value && _(), D());
  }
  function E() {
    ce.value && (n.value && T(), N());
  }
  function _() {
    r.value--;
  }
  function T() {
    r.value++;
  }
  function D() {
    a.value--;
  }
  function N() {
    a.value++;
  }
  const I = C(() => {
    var oe;
    return ((oe = e.value) == null ? void 0 : oe.month) || 0;
  }), L = C(() => {
    var oe;
    return ((oe = e.value) == null ? void 0 : oe.year) || 0;
  }), x = C(() => {
    var oe;
    return ((oe = e.value) == null ? void 0 : oe.position) || 1;
  }), R = C(() => g(r.value)), P = C(() => h(a.value)), G = C(() => Mf(P.value.map((oe) => oe.year))), ee = C(() => Ar(P.value.map((oe) => oe.year))), X = C(() => n.value ? r.value : `${G.value} - ${ee.value}`), ae = C(
    () => g(r.value - 1).some((oe) => !oe.isDisabled)
  ), le = C(
    () => h(a.value - 1).some((oe) => !oe.isDisabled)
  ), Ee = C(
    () => n.value ? ae.value : le.value
  ), ve = C(
    () => g(r.value + 1).some((oe) => !oe.isDisabled)
  ), W = C(
    () => h(a.value + 1).some((oe) => !oe.isDisabled)
  ), ce = C(
    () => n.value ? ve.value : W.value
  ), Me = C(
    () => n.value ? R.value : P.value
  );
  _e(
    () => L.value,
    () => {
      r.value = L.value;
    }
  ), _e(
    () => r.value,
    (oe) => {
      a.value = y(oe);
    }
  ), r.value = L.value, Yt(() => d());
  const Ye = {
    navContainer: s,
    title: X,
    monthMode: n,
    currentMonth: I,
    currentYear: L,
    activeItems: Me,
    prevItemsEnabled: Ee,
    nextItemsEnabled: ce,
    toggleMode: v,
    movePrev: b,
    moveNext: E,
    movePrevYear: _,
    moveNextYear: T,
    movePrevYearGroup: D,
    moveNextYearGroup: N
  };
  return qt(zP, Ye), Ye;
}
const qP = { class: "vc-nav-header" }, ZP = ["disabled"], XP = ["disabled"], JP = { class: "vc-nav-items" }, QP = ["data-id", "aria-label", "disabled", "onClick", "onKeydown"], eS = /* @__PURE__ */ fe({
  __name: "CalendarNav",
  props: WP,
  emits: GP,
  setup(e, { emit: t }) {
    const n = e, {
      navContainer: r,
      title: a,
      prevItemsEnabled: o,
      nextItemsEnabled: s,
      activeItems: i,
      toggleMode: l,
      movePrev: c,
      moveNext: u
    } = KP(n, { emit: t });
    return (d, f) => (O(), A("div", {
      class: "vc-nav-container",
      ref_key: "navContainer",
      ref: r
    }, [
      $("div", qP, [
        $("button", {
          type: "button",
          class: "vc-nav-arrow is-left vc-focus",
          disabled: !m(o),
          onClick: f[0] || (f[0] = //@ts-ignore
          (...p) => m(c) && m(c)(...p)),
          onKeydown: f[1] || (f[1] = (p) => m(ao)(p, m(c)))
        }, [
          se(Mr, {
            name: "nav-prev-button",
            move: m(c),
            disabled: !m(o)
          }, {
            default: he(() => [
              se(jr, {
                name: "ChevronLeft",
                width: "22px",
                height: "24px"
              })
            ]),
            _: 1
          }, 8, ["move", "disabled"])
        ], 40, ZP),
        $("button", {
          type: "button",
          class: "vc-nav-title vc-focus",
          onClick: f[2] || (f[2] = //@ts-ignore
          (...p) => m(l) && m(l)(...p)),
          onKeydown: f[3] || (f[3] = (p) => m(ao)(p, m(l)))
        }, be(m(a)), 33),
        $("button", {
          type: "button",
          class: "vc-nav-arrow is-right vc-focus",
          disabled: !m(s),
          onClick: f[4] || (f[4] = //@ts-ignore
          (...p) => m(u) && m(u)(...p)),
          onKeydown: f[5] || (f[5] = (p) => m(ao)(p, m(u)))
        }, [
          se(Mr, {
            name: "nav-next-button",
            move: m(u),
            disabled: !m(s)
          }, {
            default: he(() => [
              se(jr, {
                name: "ChevronRight",
                width: "22px",
                height: "24px"
              })
            ]),
            _: 1
          }, 8, ["move", "disabled"])
        ], 40, XP)
      ]),
      $("div", JP, [
        (O(!0), A(ie, null, Ae(m(i), (p) => (O(), A("button", {
          key: p.label,
          type: "button",
          "data-id": p.id,
          "aria-label": p.ariaLabel,
          class: Ie(["vc-nav-item vc-focus", [
            p.isActive ? "is-active" : p.isCurrent ? "is-current" : ""
          ]]),
          disabled: p.isDisabled,
          onClick: p.click,
          onKeydown: (h) => m(ao)(h, p.click)
        }, be(p.label), 43, QP))), 128))
      ])
    ], 512));
  }
}), tS = {
  __name: "CalendarNavPopover",
  setup(e) {
    const { navPopoverId: t, color: n, displayMode: r, navPopoverRef: a, move: o } = br();
    return (s, i) => (O(), we(sl, {
      id: m(t),
      class: Ie(["vc-nav-popover-container", `vc-${m(n)}`, `vc-${m(r)}`]),
      ref_key: "navPopoverRef",
      ref: a
    }, {
      default: he(({ data: l }) => [
        se(eS, {
          value: l.page,
          onInput: m(o)
        }, null, 8, ["value", "onInput"])
      ]),
      _: 1
    }, 8, ["id", "class"]));
  }
}, nS = fe({
  name: "PopoverRow",
  props: {
    attribute: { type: Object, required: !0 }
  },
  setup(e) {
    return {
      indicator: C(() => {
        const { content: n, highlight: r, dot: a, bar: o, popover: s } = e.attribute;
        return s && s.hideIndicator ? null : n ? {
          class: `vc-bar vc-day-popover-row-bar vc-attr vc-${n.base.color}`
        } : r ? {
          class: `vc-highlight-bg-solid vc-day-popover-row-highlight vc-attr vc-${r.base.color}`
        } : a ? {
          class: `vc-dot vc-attr vc-${a.base.color}`
        } : o ? {
          class: `vc-bar vc-day-popover-row-bar vc-attr vc-${o.base.color}`
        } : null;
      })
    };
  }
}), rS = { class: "vc-day-popover-row" }, aS = {
  key: 0,
  class: "vc-day-popover-row-indicator"
}, oS = { class: "vc-day-popover-row-label" };
function sS(e, t, n, r, a, o) {
  return O(), A("div", rS, [
    e.indicator ? (O(), A("div", aS, [
      $("span", {
        class: Ie(e.indicator.class)
      }, null, 2)
    ])) : Z("", !0),
    $("div", oS, [
      Re(e.$slots, "default", {}, () => [
        Gn(be(e.attribute.popover ? e.attribute.popover.label : "No content provided"), 1)
      ])
    ])
  ]);
}
const iS = /* @__PURE__ */ Nn(nS, [["render", sS]]), lS = { class: "vc-day-popover-container" }, uS = {
  key: 0,
  class: "vc-day-popover-header"
}, cS = /* @__PURE__ */ fe({
  __name: "CalendarDayPopover",
  setup(e) {
    const { dayPopoverId: t, displayMode: n, color: r, masks: a, locale: o } = br();
    function s(l, c) {
      return o.value.formatDate(l, c);
    }
    function i(l) {
      return o.value.formatDate(l.date, a.value.dayPopover);
    }
    return (l, c) => (O(), we(sl, {
      id: m(t),
      class: Ie([`vc-${m(r)}`, `vc-${m(n)}`])
    }, {
      default: he(({ data: { day: u, attributes: d }, hide: f }) => [
        Re(l.$slots, "default", {
          day: u,
          dayTitle: i(u),
          attributes: d,
          format: s,
          masks: m(a),
          hide: f
        }, () => [
          $("div", lS, [
            m(a).dayPopover ? (O(), A("div", uS, be(i(u)), 1)) : Z("", !0),
            (O(!0), A(ie, null, Ae(d, (p) => (O(), we(iS, {
              key: p.key,
              attribute: p
            }, null, 8, ["attribute"]))), 128))
          ])
        ])
      ]),
      _: 3
    }, 8, ["id", "class"]));
  }
}), dS = fe({
  name: "Calendar",
  components: {
    CalendarHeader: up,
    CalendarPane: UP,
    CalendarNavPopover: tS,
    CalendarDayPopover: cS
  },
  emits: DP,
  props: OP,
  setup(e, { emit: t, slots: n }) {
    return kP(e, { emit: t, slots: n });
  }
}), fS = { class: "vc-pane-header-wrapper" };
function pS(e, t, n, r, a, o) {
  const s = rr("CalendarHeader"), i = rr("CalendarPane"), l = rr("CalendarDayPopover"), c = rr("CalendarNavPopover");
  return O(), A(ie, null, [
    $("div", tt({ "data-helptext": "Press the arrow keys to navigate by day, Home and End to navigate to week ends, PageUp and PageDown to navigate by month, Alt+PageUp and Alt+PageDown to navigate by year" }, e.$attrs, {
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
      onMouseup: t[0] || (t[0] = Ta(() => {
      }, ["prevent"])),
      ref: "containerRef"
    }), [
      $("div", {
        class: Ie(["vc-pane-container", { "in-transition": e.inTransition }])
      }, [
        $("div", fS, [
          e.firstPage ? (O(), we(s, {
            key: 0,
            page: e.firstPage,
            "is-lg": "",
            "hide-title": ""
          }, null, 8, ["page"])) : Z("", !0)
        ]),
        se(yi, {
          name: `vc-${e.transitionName}`,
          onBeforeEnter: e.onTransitionBeforeEnter,
          onAfterEnter: e.onTransitionAfterEnter
        }, {
          default: he(() => [
            (O(), A("div", {
              key: e.pages[0].id,
              class: "vc-pane-layout",
              style: Hn({
                gridTemplateColumns: `repeat(${e.columns}, 1fr)`
              })
            }, [
              (O(!0), A(ie, null, Ae(e.pages, (u) => (O(), we(i, {
                key: u.id,
                page: u
              }, null, 8, ["page"]))), 128))
            ], 4))
          ]),
          _: 1
        }, 8, ["name", "onBeforeEnter", "onAfterEnter"]),
        Re(e.$slots, "footer")
      ], 2)
    ], 16),
    se(l, null, {
      default: he((u) => [
        Re(e.$slots, "day-popover", Lr(hi(u)))
      ]),
      _: 3
    }),
    se(c)
  ], 64);
}
const vS = /* @__PURE__ */ Nn(dS, [["render", pS]]), mS = { class: "vc-base-select" }, hS = ["value"], gS = ["value", "disabled"], yS = {
  inheritAttrs: !1
}, ya = /* @__PURE__ */ Object.assign(yS, {
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
    return (t, n) => (O(), A("div", mS, [
      e.showIcon ? (O(), we(jr, {
        key: 0,
        name: "ChevronDown",
        size: e.small ? "16" : "18"
      }, null, 8, ["size"])) : Z("", !0),
      $("select", tt(t.$attrs, {
        value: e.modelValue,
        class: ["vc-focus", {
          "vc-has-icon": e.showIcon,
          "vc-align-right": e.alignRight,
          "vc-align-left": e.alignLeft,
          "vc-small": e.small
        }],
        onChange: n[0] || (n[0] = (r) => t.$emit("update:modelValue", r.target.value))
      }), [
        (O(!0), A(ie, null, Ae(e.options, (r) => (O(), A("option", {
          key: r.value,
          value: r.value,
          disabled: r.disabled
        }, be(r.label), 9, gS))), 128))
      ], 16, hS)
    ]));
  }
}), cp = "__vc_date_picker_context__", bS = {
  ...rp,
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
    default: () => Zn("datePicker.updateOnInput")
  },
  inputDebounce: {
    type: Number,
    default: () => Zn("datePicker.inputDebounce")
  },
  popover: {
    type: [Boolean, Object],
    default: !0
  },
  dragAttribute: Object,
  selectAttribute: Object,
  attributes: [Object, Array]
}, _S = [
  "update:modelValue",
  "drag",
  "dayclick",
  "daykeydown",
  "popover-will-show",
  "popover-did-show",
  "popover-will-hide",
  "popover-did-hide"
];
function wS(e, t) {
  const n = ap(e), { locale: r, masks: a, disabledAttribute: o } = n, { emit: s } = t, i = Y(!1), l = Y(xo()), c = Y(null), u = Y(null), d = Y(["", ""]), f = Y(null), p = Y(null);
  let h, g, y = !0;
  const v = C(() => e.isRange || e.modelModifiers.range === !0), b = C(
    () => v.value && c.value != null ? c.value.start : null
  ), E = C(
    () => v.value && c.value != null ? c.value.end : null
  ), _ = C(() => e.mode.toLowerCase() === "date"), T = C(
    () => e.mode.toLowerCase() === "datetime"
  ), D = C(() => e.mode.toLowerCase() === "time"), N = C(() => !!u.value), I = C(() => {
    let M = "date";
    e.modelModifiers.number && (M = "number"), e.modelModifiers.string && (M = "string");
    const J = a.value.modelValue || "iso";
    return Ye({ type: M, mask: J });
  }), L = C(
    () => ut(u.value ?? c.value)
  ), x = C(() => D.value ? e.is24hr ? a.value.inputTime24hr : a.value.inputTime : T.value ? e.is24hr ? a.value.inputDateTime24hr : a.value.inputDateTime : a.value.input), R = C(() => /[Hh]/g.test(x.value)), P = C(
    () => /[dD]{1,2}|Do|W{1,4}|M{1,4}|YY(?:YY)?/g.test(x.value)
  ), G = C(() => {
    if (R.value && P.value)
      return "dateTime";
    if (P.value)
      return "date";
    if (R.value)
      return "time";
  }), ee = C(() => {
    var M;
    const J = ((M = f.value) == null ? void 0 : M.$el.previousElementSibling) ?? void 0;
    return Ia({}, e.popover, Zn("datePicker.popover"), {
      target: J
    });
  }), X = C(
    () => ip({
      ...ee.value,
      id: l.value
    })
  ), ae = C(() => v.value ? {
    start: d.value[0],
    end: d.value[1]
  } : d.value[0]), le = C(() => {
    const M = ["start", "end"].map((J) => ({
      input: re(J),
      change: pe(J),
      keyup: Te,
      ...e.popover && X.value
    }));
    return v.value ? {
      start: M[0],
      end: M[1]
    } : M[0];
  }), Ee = C(() => {
    if (!V(c.value))
      return null;
    const M = {
      key: "select-drag",
      ...e.selectAttribute,
      dates: c.value,
      pinPage: !0
    }, { dot: J, bar: me, highlight: Pe, content: nt } = M;
    return !J && !me && !Pe && !nt && (M.highlight = !0), M;
  }), ve = C(() => {
    if (!v.value || !V(u.value))
      return null;
    const M = {
      key: "select-drag",
      ...e.dragAttribute,
      dates: u.value
    }, { dot: J, bar: me, highlight: Pe, content: nt } = M;
    return !J && !me && !Pe && !nt && (M.highlight = {
      startEnd: {
        fillMode: "outline"
      }
    }), M;
  }), W = C(() => {
    const M = Mt(e.attributes) ? [...e.attributes] : [];
    return ve.value ? M.unshift(ve.value) : Ee.value && M.unshift(Ee.value), M;
  }), ce = C(() => Ye(
    e.rules === "auto" ? Me() : e.rules ?? {}
  ));
  function Me() {
    const M = {
      ms: [0, 999],
      sec: [0, 59],
      min: [0, 59],
      hr: [0, 23]
    }, J = _.value ? 0 : e.timeAccuracy;
    return [0, 1].map((me) => {
      switch (J) {
        case 0:
          return {
            hours: M.hr[me],
            minutes: M.min[me],
            seconds: M.sec[me],
            milliseconds: M.ms[me]
          };
        case 1:
          return {
            minutes: M.min[me],
            seconds: M.sec[me],
            milliseconds: M.ms[me]
          };
        case 3:
          return { milliseconds: M.ms[me] };
        case 4:
          return {};
        default:
          return { seconds: M.sec[me], milliseconds: M.ms[me] };
      }
    });
  }
  function Ye(M) {
    return Mt(M) ? M.length === 1 ? [M[0], M[0]] : M : [M, M];
  }
  function oe(M) {
    return Ye(M).map(
      (J, me) => ({
        ...J,
        rules: ce.value[me]
      })
    );
  }
  function Ne(M) {
    return Zt(M) ? !isNaN(M) : Sr(M) ? !isNaN(M.getTime()) : an(M) ? M !== "" : M != null;
  }
  function V(M) {
    return v.value ? Tn(M) && Ne(M.start) && Ne(M.end) : Ne(M);
  }
  function B(M, J) {
    const me = Sr(M), Pe = Sr(J);
    return !me && !Pe ? !0 : me !== Pe ? !1 : M.getTime() === J.getTime();
  }
  function te(M, J) {
    if (v.value) {
      const me = V(M), Pe = V(J);
      return !me && !Pe ? !0 : me !== Pe ? !1 : B(M.start, J.start) && B(M.end, J.end);
    }
    return B(M, J);
  }
  function z(M) {
    return !V(M) || !o.value ? !1 : o.value.intersectsRange(r.value.range(M));
  }
  function S(M, J, me, Pe) {
    if (!V(M))
      return null;
    if (v.value) {
      const nt = r.value.toDate(M.start, {
        ...J[0],
        fillDate: b.value ?? void 0,
        patch: me
      }), Ht = r.value.toDate(M.end, {
        ...J[1],
        fillDate: E.value ?? void 0,
        patch: me
      });
      return tr({ start: nt, end: Ht }, Pe);
    }
    return r.value.toDateOrNull(M, {
      ...J[0],
      fillDate: c.value,
      patch: me
    });
  }
  function H(M, J) {
    return v.value ? V(M) ? {
      start: r.value.fromDate(M.start, J[0]),
      end: r.value.fromDate(M.end, J[1])
    } : null : r.value.fromDate(M, J[0]);
  }
  function ue(M, J = {}) {
    return clearTimeout(h), new Promise((me) => {
      const { debounce: Pe = 0, ...nt } = J;
      Pe > 0 ? h = window.setTimeout(() => {
        me(k(M, nt));
      }, Pe) : me(k(M, nt));
    });
  }
  function k(M, {
    config: J = I.value,
    patch: me = "dateTime",
    clearIfEqual: Pe = !1,
    formatInput: nt = !0,
    hidePopover: Ht = !1,
    dragging: mt = N.value,
    targetPriority: Er,
    moveToValue: ca = !1
  } = {}) {
    const Ka = oe(J);
    let Ct = S(
      M,
      Ka,
      me,
      Er
    );
    if (z(Ct)) {
      if (mt)
        return null;
      Ct = c.value, Ht = !1;
    } else
      Ct == null && e.isRequired ? Ct = c.value : (
        // Clear value if same value was passed
        Ct != null && te(c.value, Ct) && Pe && (Ct = null)
      );
    const da = mt ? u : c, fs = !te(da.value, Ct);
    da.value = Ct, mt || (u.value = null);
    const xl = H(
      Ct,
      I.value
    );
    return fs && (y = !1, s(mt ? "drag" : "update:modelValue", xl), bt(() => y = !0)), Ht && !mt && Ut(), nt && w(), ca && bt(() => K(Er ?? "start")), xl;
  }
  function w() {
    bt(() => {
      const M = oe({
        type: "string",
        mask: x.value
      }), J = H(
        u.value || c.value,
        M
      );
      v.value ? d.value = [J && J.start, J && J.end] : d.value = [J, ""];
    });
  }
  function F(M, J, me) {
    d.value.splice(J === "start" ? 0 : 1, 1, M);
    const Pe = v.value ? {
      start: d.value[0],
      end: d.value[1] || d.value[0]
    } : M, nt = {
      type: "string",
      mask: x.value
    };
    ue(Pe, {
      ...me,
      config: nt,
      patch: G.value,
      targetPriority: J,
      moveToValue: !0
    });
  }
  function re(M) {
    return (J) => {
      e.updateOnInput && F(J.currentTarget.value, M, {
        formatInput: !1,
        hidePopover: !1,
        debounce: e.inputDebounce
      });
    };
  }
  function pe(M) {
    return (J) => {
      F(J.currentTarget.value, M, {
        formatInput: !0,
        hidePopover: !1
      });
    };
  }
  function Te(M) {
    M.key === "Escape" && ue(c.value, {
      formatInput: !0,
      hidePopover: !0
    });
  }
  function ut(M) {
    return v.value ? [
      M && M.start ? r.value.getDateParts(M.start) : null,
      M && M.end ? r.value.getDateParts(M.end) : null
    ] : [M ? r.value.getDateParts(M) : null];
  }
  function et() {
    u.value = null, w();
  }
  function Tt(M) {
    s("popover-will-show", M);
  }
  function en(M) {
    s("popover-did-show", M);
  }
  function Ue(M) {
    et(), s("popover-will-hide", M);
  }
  function U(M) {
    s("popover-did-hide", M);
  }
  function q(M) {
    const J = {
      patch: "date",
      formatInput: !0,
      hidePopover: !0
    };
    if (v.value) {
      const me = !N.value;
      me ? g = { start: M.startDate, end: M.endDate } : g != null && (g.end = M.date), ue(g, {
        ...J,
        dragging: me
      });
    } else
      ue(M.date, {
        ...J,
        clearIfEqual: !e.isRequired
      });
  }
  function Xe(M, J) {
    q(M), s("dayclick", M, J);
  }
  function Je(M, J) {
    switch (J.key) {
      case " ":
      case "Enter": {
        q(M), J.preventDefault();
        break;
      }
      case "Escape":
        Ut();
    }
    s("daykeydown", M, J);
  }
  function tn(M, J) {
    !N.value || g == null || (g.end = M.date, ue(tr(g), {
      patch: "date",
      formatInput: !0
    }));
  }
  function In(M = {}) {
    Zs({
      ...ee.value,
      ...M,
      isInteractive: !0,
      id: l.value
    });
  }
  function Ut(M = {}) {
    Bo({
      hideDelay: 10,
      force: !0,
      ...ee.value,
      ...M,
      id: l.value
    });
  }
  function jt(M) {
    sp({
      ...ee.value,
      ...M,
      isInteractive: !0,
      id: l.value
    });
  }
  function tr(M, J) {
    const { start: me, end: Pe } = M;
    if (me > Pe)
      switch (J) {
        case "start":
          return { start: me, end: me };
        case "end":
          return { start: Pe, end: Pe };
        default:
          return { start: Pe, end: me };
      }
    return { start: me, end: Pe };
  }
  function wr(M) {
    if (V(c.value)) {
      const J = v.value ? M ? b.value : E.value : c.value;
      return Xf(J, "monthly", r.value);
    }
    return null;
  }
  async function ds(M, J = {}) {
    return p.value == null ? !1 : p.value.move(M, J);
  }
  async function za(M, J = {}) {
    return p.value == null ? !1 : p.value.moveBy(M, J);
  }
  async function K(M, J = {}) {
    if (p.value == null)
      return !1;
    const { firstPage: me, lastPage: Pe, move: nt } = p.value, Ht = M !== "end", mt = wr(Ht), Er = Ht ? 1 : -1;
    return !mt || Qf(mt, me, Pe) ? !1 : nt(mt, {
      position: Er,
      ...J
    });
  }
  _e(
    () => e.isRange,
    (M) => {
      M && console.warn(
        "The `is-range` prop will be deprecated in future releases. Please use the `range` modifier."
      );
    },
    { immediate: !0 }
  ), _e(
    () => x.value,
    () => w()
  ), _e(
    () => e.modelValue,
    (M) => {
      y && k(M, {
        formatInput: !0,
        hidePopover: !1
      });
    }
  ), _e(
    () => ce.value,
    () => {
      Tn(e.rules) && k(e.modelValue, {
        formatInput: !0,
        hidePopover: !1
      });
    }
  ), _e(
    () => e.timezone,
    () => {
      k(c.value, { formatInput: !0 });
    }
  );
  const Q = Ye(I.value);
  c.value = S(e.modelValue, Q, "dateTime"), Yt(() => {
    k(e.modelValue, {
      formatInput: !0,
      hidePopover: !1
    });
  }), bt(() => i.value = !0);
  const Oe = {
    ...n,
    showCalendar: i,
    datePickerPopoverId: l,
    popoverRef: f,
    popoverEvents: X,
    calendarRef: p,
    isRange: v,
    isTimeMode: D,
    isDateTimeMode: T,
    is24hr: ps(e, "is24hr"),
    hideTimeHeader: ps(e, "hideTimeHeader"),
    timeAccuracy: ps(e, "timeAccuracy"),
    isDragging: N,
    inputValue: ae,
    inputEvents: le,
    dateParts: L,
    attributes: W,
    rules: ce,
    move: ds,
    moveBy: za,
    moveToValue: K,
    updateValue: ue,
    showPopover: In,
    hidePopover: Ut,
    togglePopover: jt,
    onDayClick: Xe,
    onDayKeydown: Je,
    onDayMouseEnter: tn,
    onPopoverBeforeShow: Tt,
    onPopoverAfterShow: en,
    onPopoverBeforeHide: Ue,
    onPopoverAfterHide: U
  };
  return qt(cp, Oe), Oe;
}
function ES() {
  const e = Be(cp);
  if (e)
    return e;
  throw new Error(
    "DatePicker context missing. Please verify this component is nested within a valid context provider."
  );
}
const OS = [
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
], DS = [
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
function kS(e) {
  const t = ES(), {
    locale: n,
    isRange: r,
    isTimeMode: a,
    dateParts: o,
    rules: s,
    is24hr: i,
    hideTimeHeader: l,
    timeAccuracy: c,
    updateValue: u
  } = t;
  function d(P) {
    P = Object.assign(p.value, P);
    let G = null;
    if (r.value) {
      const ee = f.value ? P : o.value[0], X = f.value ? o.value[1] : P;
      G = { start: ee, end: X };
    } else
      G = P;
    u(G, {
      patch: "time",
      targetPriority: f.value ? "start" : "end",
      moveToValue: !0
    });
  }
  const f = C(() => e.position === 0), p = C(
    () => o.value[e.position] || { isValid: !1 }
  ), h = C(() => Gf(p.value)), g = C(() => !!p.value.isValid), y = C(() => !l.value && g.value), v = C(() => {
    if (!h.value)
      return null;
    let P = n.value.toDate(p.value);
    return p.value.hours === 24 && (P = new Date(P.getTime() - 1)), P;
  }), b = C({
    get() {
      return p.value.hours;
    },
    set(P) {
      d({ hours: P });
    }
  }), E = C({
    get() {
      return p.value.minutes;
    },
    set(P) {
      d({ minutes: P });
    }
  }), _ = C({
    get() {
      return p.value.seconds;
    },
    set(P) {
      d({ seconds: P });
    }
  }), T = C({
    get() {
      return p.value.milliseconds;
    },
    set(P) {
      d({ milliseconds: P });
    }
  }), D = C({
    get() {
      return p.value.hours < 12;
    },
    set(P) {
      P = String(P).toLowerCase() == "true";
      let G = b.value;
      P && G >= 12 ? G -= 12 : !P && G < 12 && (G += 12), d({ hours: G });
    }
  }), N = C(
    () => rP(p.value, s.value[e.position])
  ), I = C(() => OS.filter(
    (P) => N.value.hours.some((G) => G.value === P.value)
  )), L = C(() => DS.filter(
    (P) => N.value.hours.some((G) => G.value === P.value)
  )), x = C(() => i.value ? N.value.hours : D.value ? I.value : L.value), R = C(() => {
    const P = [];
    return wn(I.value) && P.push({ value: !0, label: "AM" }), wn(L.value) && P.push({ value: !1, label: "PM" }), P;
  });
  return {
    ...t,
    showHeader: y,
    timeAccuracy: c,
    parts: p,
    isValid: g,
    date: v,
    hours: b,
    minutes: E,
    seconds: _,
    milliseconds: T,
    options: N,
    hourOptions: x,
    isAM: D,
    isAMOptions: R,
    is24hr: i
  };
}
const $S = {
  key: 0,
  class: "vc-time-header"
}, xS = { class: "vc-time-weekday" }, TS = { class: "vc-time-month" }, CS = { class: "vc-time-day" }, AS = { class: "vc-time-year" }, NS = { class: "vc-time-select-group" }, PS = /* @__PURE__ */ $("span", { class: "vc-time-colon" }, ":", -1), SS = /* @__PURE__ */ $("span", { class: "vc-time-colon" }, ":", -1), IS = /* @__PURE__ */ $("span", { class: "vc-time-decimal" }, ".", -1), MS = /* @__PURE__ */ fe({
  __name: "TimePicker",
  props: {
    position: null
  },
  setup(e, { expose: t }) {
    const r = kS(e);
    t(r);
    const {
      locale: a,
      isValid: o,
      date: s,
      hours: i,
      minutes: l,
      seconds: c,
      milliseconds: u,
      options: d,
      hourOptions: f,
      isTimeMode: p,
      isAM: h,
      isAMOptions: g,
      is24hr: y,
      showHeader: v,
      timeAccuracy: b
    } = r;
    return (E, _) => (O(), A("div", {
      class: Ie(["vc-time-picker", [{ "vc-invalid": !m(o), "vc-attached": !m(p) }]])
    }, [
      Re(E.$slots, "time-header", {}, () => [
        m(v) && m(s) ? (O(), A("div", $S, [
          $("span", xS, be(m(a).formatDate(m(s), "WWW")), 1),
          $("span", TS, be(m(a).formatDate(m(s), "MMM")), 1),
          $("span", CS, be(m(a).formatDate(m(s), "D")), 1),
          $("span", AS, be(m(a).formatDate(m(s), "YYYY")), 1)
        ])) : Z("", !0)
      ]),
      $("div", NS, [
        se(jr, {
          name: "Clock",
          size: "17"
        }),
        se(ya, {
          modelValue: m(i),
          "onUpdate:modelValue": _[0] || (_[0] = (T) => He(i) ? i.value = T : null),
          modelModifiers: { number: !0 },
          options: m(f),
          "align-right": ""
        }, null, 8, ["modelValue", "options"]),
        m(b) > 1 ? (O(), A(ie, { key: 0 }, [
          PS,
          se(ya, {
            modelValue: m(l),
            "onUpdate:modelValue": _[1] || (_[1] = (T) => He(l) ? l.value = T : null),
            modelModifiers: { number: !0 },
            options: m(d).minutes,
            "align-left": m(b) === 2
          }, null, 8, ["modelValue", "options", "align-left"])
        ], 64)) : Z("", !0),
        m(b) > 2 ? (O(), A(ie, { key: 1 }, [
          SS,
          se(ya, {
            modelValue: m(c),
            "onUpdate:modelValue": _[2] || (_[2] = (T) => He(c) ? c.value = T : null),
            modelModifiers: { number: !0 },
            options: m(d).seconds,
            "align-left": m(b) === 3
          }, null, 8, ["modelValue", "options", "align-left"])
        ], 64)) : Z("", !0),
        m(b) > 3 ? (O(), A(ie, { key: 2 }, [
          IS,
          se(ya, {
            modelValue: m(u),
            "onUpdate:modelValue": _[3] || (_[3] = (T) => He(u) ? u.value = T : null),
            modelModifiers: { number: !0 },
            options: m(d).milliseconds,
            "align-left": ""
          }, null, 8, ["modelValue", "options"])
        ], 64)) : Z("", !0),
        m(y) ? Z("", !0) : (O(), we(ya, {
          key: 3,
          modelValue: m(h),
          "onUpdate:modelValue": _[4] || (_[4] = (T) => He(h) ? h.value = T : null),
          options: m(g)
        }, null, 8, ["modelValue", "options"]))
      ])
    ], 2));
  }
}), il = fe({
  name: "DatePicker",
  inheritAttrs: !1,
  emits: _S,
  props: bS,
  setup(e, t) {
    const n = wS(e, t), { slots: r, attrs: a } = t, {
      isTimeMode: o,
      isRange: s,
      isDateTimeMode: i,
      color: l,
      displayMode: c,
      dateParts: u,
      datePickerPopoverId: d,
      attributes: f,
      calendarRef: p,
      popoverRef: h,
      showCalendar: g,
      onDayClick: y,
      onDayMouseEnter: v,
      onDayKeydown: b,
      onPopoverBeforeShow: E,
      onPopoverAfterShow: _,
      onPopoverBeforeHide: T,
      onPopoverAfterHide: D
    } = n;
    t.expose(n);
    const N = Va(Lf(n, "calendarRef", "popoverRef")), I = () => (s.value ? [0, 1] : [0]).map((P) => Kt(MS, { position: P })), L = () => {
      if (!u.value)
        return null;
      const R = i.value ? { ...r, footer: I } : r;
      return Kt(
        vS,
        {
          ...a,
          attributes: f.value,
          ref: p,
          onDayclick: y,
          onDaymouseenter: v,
          onDaykeydown: b
        },
        R
      );
    }, x = () => {
      if (o.value)
        return Kt(
          "div",
          {
            class: `vc-container vc-bordered vc-${l.value} vc-${c.value}`
          },
          [I()]
        );
      if (g.value)
        return L();
    };
    return r.default ? () => [
      // Popover trigger
      r.default(N),
      // Popover content
      Kt(
        sl,
        {
          id: d.value,
          placement: "bottom-start",
          class: `vc-date-picker-content vc-${l.value} vc-${c.value}`,
          ref: h,
          "onBefore-show": E,
          "onAfter-show": _,
          "onBefore-hide": T,
          "onAfter-hide": D
        },
        {
          default: x
        }
      )
    ] : x;
  }
});
const LS = { class: "flex flex-col gap-2" }, RS = { class: "flex items-center gap-1" }, FS = {
  key: 0,
  for: "due",
  class: "p3-b text-true-blue-3 w-fit flex cursor-pointer items-center justify-center gap-2 rounded shadow-01 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50"
}, VS = ["onClick"], BS = /* @__PURE__ */ fe({
  __name: "DuePicker",
  props: {
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, r = C({
      get: () => n.modelValue ? new Date(n.modelValue).toISOString() : "",
      set: (s) => t("update:modelValue", s)
    }), a = Y(!1);
    _e(
      () => n.modelValue,
      (s) => {
        s && (a.value = !0);
      },
      { immediate: !0 }
    );
    const o = Y();
    return _e(a, (s) => {
      s ? bt(() => {
        o.value.click();
      }) : t("update:modelValue", null);
    }), Jn(() => {
      t("update:modelValue", null);
    }), (s, i) => (O(), A("div", LS, [
      $("div", RS, [
        st($("input", {
          type: "checkbox",
          "onUpdate:modelValue": i[0] || (i[0] = (l) => He(a) ? a.value = l : null),
          id: "due",
          class: "hidden"
        }, null, 512), [
          [ho, m(a)]
        ]),
        m(a) ? Z("", !0) : (O(), A("label", FS, "持續執行")),
        m(a) ? (O(), we(m(il), {
          key: 1,
          modelValue: m(r),
          "onUpdate:modelValue": i[1] || (i[1] = (l) => He(r) ? r.value = l : null),
          mode: "dateTime",
          timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
          "min-Date": /* @__PURE__ */ new Date(),
          "time-accuracy": 2,
          is24hr: "",
          "hide-time-header": ""
        }, {
          default: he(({ togglePopover: l, inputValue: c }) => [
            $("div", {
              ref_key: "date",
              ref: o,
              class: "p3-b text-true-blue-3 flex cursor-pointer items-center justify-center gap-2 rounded shadow-01 bg-light-5 py-1 px-2 transition-all hover:bg-light-3 hover:bg-opacity-50",
              onClick: l
            }, be(c || "未設定"), 9, VS)
          ]),
          _: 1
        }, 8, ["modelValue", "timezone", "min-Date"])) : Z("", !0),
        m(a) ? (O(), we(m(Fr), {
          key: 2,
          onClick: i[2] || (i[2] = (l) => a.value = !1),
          weight: "bold",
          class: "text-dark-4 hover:text-dark-3 p3-b cursor-pointer"
        })) : Z("", !0)
      ])
    ]));
  }
}), YS = { class: "flex w-auto items-center justify-center gap-2 rounded shadow-01 bg-light-5 py-1 px-2 hover:bg-light-3 hover:bg-opacity-50 input-outer" }, US = ["value", "type", "placeholder", "maxLength", "required"], Wn = /* @__PURE__ */ fe({
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
    return (a, o) => (O(), A("div", YS, [
      $("input", {
        value: a.modelValue,
        onInput: r,
        type: a.type,
        class: Ie([a.inputClass, "p3-b w-full border-none outline-none shadow-none placeholder:text-dark-5 text-dark-3"]),
        placeholder: a.placeholder,
        maxLength: a.maxLength,
        required: a.required
      }, null, 42, US)
    ]));
  }
});
/*!
  * shared v9.5.0
  * (c) 2023 kazuya kawaguchi
  * Released under the MIT License.
  */
const dn = typeof window < "u";
let kt, fr;
if (process.env.NODE_ENV !== "production") {
  const e = dn && window.performance;
  e && e.mark && e.measure && e.clearMarks && // @ts-ignore browser compat
  e.clearMeasures && (kt = (t) => {
    e.mark(t);
  }, fr = (t, n, r) => {
    e.measure(t, n, r), e.clearMarks(n), e.clearMarks(r);
  });
}
const jS = /\{([0-9a-zA-Z]+)\}/g;
function ll(e, ...t) {
  return t.length === 1 && Fe(t[0]) && (t = t[0]), (!t || !t.hasOwnProperty) && (t = {}), e.replace(jS, (n, r) => t.hasOwnProperty(r) ? t[r] : "");
}
const mn = (e, t = !1) => t ? Symbol.for(e) : Symbol(e), HS = (e, t, n) => WS({ l: e, k: t, s: n }), WS = (e) => JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027"), ot = (e) => typeof e == "number" && isFinite(e), GS = (e) => fp(e) === "[object Date]", Xn = (e) => fp(e) === "[object RegExp]", ns = (e) => ke(e) && Object.keys(e).length === 0, lt = Object.assign;
let Qu;
const _n = () => Qu || (Qu = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function ec(e) {
  return e.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}
const zS = Object.prototype.hasOwnProperty;
function ul(e, t) {
  return zS.call(e, t);
}
const ze = Array.isArray, Ze = (e) => typeof e == "function", ne = (e) => typeof e == "string", Ce = (e) => typeof e == "boolean", Fe = (e) => e !== null && typeof e == "object", dp = Object.prototype.toString, fp = (e) => dp.call(e), ke = (e) => {
  if (!Fe(e))
    return !1;
  const t = Object.getPrototypeOf(e);
  return t === null || t.constructor === Object;
}, KS = (e) => e == null ? "" : ze(e) || ke(e) && e.toString === dp ? JSON.stringify(e, null, 2) : String(e);
function qS(e, t = "") {
  return e.reduce((n, r, a) => a === 0 ? n + r : n + t + r, "");
}
const tc = 2;
function ZS(e, t = 0, n = e.length) {
  const r = e.split(/\r?\n/);
  let a = 0;
  const o = [];
  for (let s = 0; s < r.length; s++)
    if (a += r[s].length + 1, a >= t) {
      for (let i = s - tc; i <= s + tc || n > a; i++) {
        if (i < 0 || i >= r.length)
          continue;
        const l = i + 1;
        o.push(`${l}${" ".repeat(3 - String(l).length)}|  ${r[i]}`);
        const c = r[i].length;
        if (i === s) {
          const u = t - (a - c) + 1, d = Math.max(1, n > a ? c - u : n - t);
          o.push("   |  " + " ".repeat(u) + "^".repeat(d));
        } else if (i > s) {
          if (n > a) {
            const u = Math.max(Math.min(n - a, c), 1);
            o.push("   |  " + "^".repeat(u));
          }
          a += c + 1;
        }
      }
      break;
    }
  return o.join(`
`);
}
function cl(e) {
  let t = e;
  return () => ++t;
}
function it(e, t) {
  typeof console < "u" && (console.warn("[intlify] " + e), t && console.warn(t.stack));
}
const nc = {};
function XS(e) {
  nc[e] || (nc[e] = !0, it(e));
}
function dl() {
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
function JS(e, t, n) {
  return { line: e, column: t, offset: n };
}
function Xs(e, t, n) {
  const r = { start: e, end: t };
  return n != null && (r.source = n), r;
}
const QS = /\{([0-9a-zA-Z]+)\}/g;
function e2(e, ...t) {
  return t.length === 1 && t2(t[0]) && (t = t[0]), (!t || !t.hasOwnProperty) && (t = {}), e.replace(QS, (n, r) => t.hasOwnProperty(r) ? t[r] : "");
}
const pp = Object.assign, rc = (e) => typeof e == "string", t2 = (e) => e !== null && typeof e == "object";
function vp(e, t = "") {
  return e.reduce((n, r, a) => a === 0 ? n + r : n + t + r, "");
}
const ye = {
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
}, n2 = {
  // tokenizer error messages
  [ye.EXPECTED_TOKEN]: "Expected token: '{0}'",
  [ye.INVALID_TOKEN_IN_PLACEHOLDER]: "Invalid token in placeholder: '{0}'",
  [ye.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER]: "Unterminated single quote in placeholder",
  [ye.UNKNOWN_ESCAPE_SEQUENCE]: "Unknown escape sequence: \\{0}",
  [ye.INVALID_UNICODE_ESCAPE_SEQUENCE]: "Invalid unicode escape sequence: {0}",
  [ye.UNBALANCED_CLOSING_BRACE]: "Unbalanced closing brace",
  [ye.UNTERMINATED_CLOSING_BRACE]: "Unterminated closing brace",
  [ye.EMPTY_PLACEHOLDER]: "Empty placeholder",
  [ye.NOT_ALLOW_NEST_PLACEHOLDER]: "Not allowed nest placeholder",
  [ye.INVALID_LINKED_FORMAT]: "Invalid linked format",
  // parser error messages
  [ye.MUST_HAVE_MESSAGES_IN_PLURAL]: "Plural must have messages",
  [ye.UNEXPECTED_EMPTY_LINKED_MODIFIER]: "Unexpected empty linked modifier",
  [ye.UNEXPECTED_EMPTY_LINKED_KEY]: "Unexpected empty linked key",
  [ye.UNEXPECTED_LEXICAL_ANALYSIS]: "Unexpected lexical analysis in token: '{0}'",
  // generator error messages
  [ye.UNHANDLED_CODEGEN_NODE_TYPE]: "unhandled codegen node type: '{0}'",
  // minimizer error messages
  [ye.UNHANDLED_MINIFIER_NODE_TYPE]: "unhandled mimifier node type: '{0}'"
};
function la(e, t, n = {}) {
  const { domain: r, messages: a, args: o } = n, s = e2((a || n2)[e] || "", ...o || []), i = new SyntaxError(String(s));
  return i.code = e, t && (i.location = t), i.domain = r, i;
}
function r2(e) {
  throw e;
}
const a2 = /<\/?[\w\s="/.':;#-\/]+>/, o2 = (e) => a2.test(e), yn = " ", s2 = "\r", ft = `
`, i2 = String.fromCharCode(8232), l2 = String.fromCharCode(8233);
function u2(e) {
  const t = e;
  let n = 0, r = 1, a = 1, o = 0;
  const s = (N) => t[N] === s2 && t[N + 1] === ft, i = (N) => t[N] === ft, l = (N) => t[N] === l2, c = (N) => t[N] === i2, u = (N) => s(N) || i(N) || l(N) || c(N), d = () => n, f = () => r, p = () => a, h = () => o, g = (N) => s(N) || l(N) || c(N) ? ft : t[N], y = () => g(n), v = () => g(n + o);
  function b() {
    return o = 0, u(n) && (r++, a = 0), s(n) && n++, n++, a++, t[n];
  }
  function E() {
    return s(n + o) && o++, o++, t[n + o];
  }
  function _() {
    n = 0, r = 1, a = 1, o = 0;
  }
  function T(N = 0) {
    o = N;
  }
  function D() {
    const N = n + o;
    for (; N !== n; )
      b();
    o = 0;
  }
  return {
    index: d,
    line: f,
    column: p,
    peekOffset: h,
    charAt: g,
    currentChar: y,
    currentPeek: v,
    next: b,
    peek: E,
    reset: _,
    resetPeek: T,
    skipToPeek: D
  };
}
const Fn = void 0, c2 = ".", ac = "'", d2 = "tokenizer";
function f2(e, t = {}) {
  const n = t.location !== !1, r = u2(e), a = () => r.index(), o = () => JS(r.line(), r.column(), r.index()), s = o(), i = a(), l = {
    currentType: 14,
    offset: i,
    startLoc: s,
    endLoc: s,
    lastType: 14,
    lastOffset: i,
    lastStartLoc: s,
    lastEndLoc: s,
    braceNest: 0,
    inLinked: !1,
    text: ""
  }, c = () => l, { onError: u } = t;
  function d(k, w, F, ...re) {
    const pe = c();
    if (w.column += F, w.offset += F, u) {
      const Te = n ? Xs(pe.startLoc, w) : null, ut = la(k, Te, {
        domain: d2,
        args: re
      });
      u(ut);
    }
  }
  function f(k, w, F) {
    k.endLoc = o(), k.currentType = w;
    const re = { type: w };
    return n && (re.loc = Xs(k.startLoc, k.endLoc)), F != null && (re.value = F), re;
  }
  const p = (k) => f(
    k,
    14
    /* TokenTypes.EOF */
  );
  function h(k, w) {
    return k.currentChar() === w ? (k.next(), w) : (d(ye.EXPECTED_TOKEN, o(), 0, w), "");
  }
  function g(k) {
    let w = "";
    for (; k.currentPeek() === yn || k.currentPeek() === ft; )
      w += k.currentPeek(), k.peek();
    return w;
  }
  function y(k) {
    const w = g(k);
    return k.skipToPeek(), w;
  }
  function v(k) {
    if (k === Fn)
      return !1;
    const w = k.charCodeAt(0);
    return w >= 97 && w <= 122 || // a-z
    w >= 65 && w <= 90 || // A-Z
    w === 95;
  }
  function b(k) {
    if (k === Fn)
      return !1;
    const w = k.charCodeAt(0);
    return w >= 48 && w <= 57;
  }
  function E(k, w) {
    const { currentType: F } = w;
    if (F !== 2)
      return !1;
    g(k);
    const re = v(k.currentPeek());
    return k.resetPeek(), re;
  }
  function _(k, w) {
    const { currentType: F } = w;
    if (F !== 2)
      return !1;
    g(k);
    const re = k.currentPeek() === "-" ? k.peek() : k.currentPeek(), pe = b(re);
    return k.resetPeek(), pe;
  }
  function T(k, w) {
    const { currentType: F } = w;
    if (F !== 2)
      return !1;
    g(k);
    const re = k.currentPeek() === ac;
    return k.resetPeek(), re;
  }
  function D(k, w) {
    const { currentType: F } = w;
    if (F !== 8)
      return !1;
    g(k);
    const re = k.currentPeek() === ".";
    return k.resetPeek(), re;
  }
  function N(k, w) {
    const { currentType: F } = w;
    if (F !== 9)
      return !1;
    g(k);
    const re = v(k.currentPeek());
    return k.resetPeek(), re;
  }
  function I(k, w) {
    const { currentType: F } = w;
    if (!(F === 8 || F === 12))
      return !1;
    g(k);
    const re = k.currentPeek() === ":";
    return k.resetPeek(), re;
  }
  function L(k, w) {
    const { currentType: F } = w;
    if (F !== 10)
      return !1;
    const re = () => {
      const Te = k.currentPeek();
      return Te === "{" ? v(k.peek()) : Te === "@" || Te === "%" || Te === "|" || Te === ":" || Te === "." || Te === yn || !Te ? !1 : Te === ft ? (k.peek(), re()) : v(Te);
    }, pe = re();
    return k.resetPeek(), pe;
  }
  function x(k) {
    g(k);
    const w = k.currentPeek() === "|";
    return k.resetPeek(), w;
  }
  function R(k) {
    const w = g(k), F = k.currentPeek() === "%" && k.peek() === "{";
    return k.resetPeek(), {
      isModulo: F,
      hasSpace: w.length > 0
    };
  }
  function P(k, w = !0) {
    const F = (pe = !1, Te = "", ut = !1) => {
      const et = k.currentPeek();
      return et === "{" ? Te === "%" ? !1 : pe : et === "@" || !et ? Te === "%" ? !0 : pe : et === "%" ? (k.peek(), F(pe, "%", !0)) : et === "|" ? Te === "%" || ut ? !0 : !(Te === yn || Te === ft) : et === yn ? (k.peek(), F(!0, yn, ut)) : et === ft ? (k.peek(), F(!0, ft, ut)) : !0;
    }, re = F();
    return w && k.resetPeek(), re;
  }
  function G(k, w) {
    const F = k.currentChar();
    return F === Fn ? Fn : w(F) ? (k.next(), F) : null;
  }
  function ee(k) {
    return G(k, (F) => {
      const re = F.charCodeAt(0);
      return re >= 97 && re <= 122 || // a-z
      re >= 65 && re <= 90 || // A-Z
      re >= 48 && re <= 57 || // 0-9
      re === 95 || // _
      re === 36;
    });
  }
  function X(k) {
    return G(k, (F) => {
      const re = F.charCodeAt(0);
      return re >= 48 && re <= 57;
    });
  }
  function ae(k) {
    return G(k, (F) => {
      const re = F.charCodeAt(0);
      return re >= 48 && re <= 57 || // 0-9
      re >= 65 && re <= 70 || // A-F
      re >= 97 && re <= 102;
    });
  }
  function le(k) {
    let w = "", F = "";
    for (; w = X(k); )
      F += w;
    return F;
  }
  function Ee(k) {
    y(k);
    const w = k.currentChar();
    return w !== "%" && d(ye.EXPECTED_TOKEN, o(), 0, w), k.next(), "%";
  }
  function ve(k) {
    let w = "";
    for (; ; ) {
      const F = k.currentChar();
      if (F === "{" || F === "}" || F === "@" || F === "|" || !F)
        break;
      if (F === "%")
        if (P(k))
          w += F, k.next();
        else
          break;
      else if (F === yn || F === ft)
        if (P(k))
          w += F, k.next();
        else {
          if (x(k))
            break;
          w += F, k.next();
        }
      else
        w += F, k.next();
    }
    return w;
  }
  function W(k) {
    y(k);
    let w = "", F = "";
    for (; w = ee(k); )
      F += w;
    return k.currentChar() === Fn && d(ye.UNTERMINATED_CLOSING_BRACE, o(), 0), F;
  }
  function ce(k) {
    y(k);
    let w = "";
    return k.currentChar() === "-" ? (k.next(), w += `-${le(k)}`) : w += le(k), k.currentChar() === Fn && d(ye.UNTERMINATED_CLOSING_BRACE, o(), 0), w;
  }
  function Me(k) {
    y(k), h(k, "'");
    let w = "", F = "";
    const re = (Te) => Te !== ac && Te !== ft;
    for (; w = G(k, re); )
      w === "\\" ? F += Ye(k) : F += w;
    const pe = k.currentChar();
    return pe === ft || pe === Fn ? (d(ye.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, o(), 0), pe === ft && (k.next(), h(k, "'")), F) : (h(k, "'"), F);
  }
  function Ye(k) {
    const w = k.currentChar();
    switch (w) {
      case "\\":
      case "'":
        return k.next(), `\\${w}`;
      case "u":
        return oe(k, w, 4);
      case "U":
        return oe(k, w, 6);
      default:
        return d(ye.UNKNOWN_ESCAPE_SEQUENCE, o(), 0, w), "";
    }
  }
  function oe(k, w, F) {
    h(k, w);
    let re = "";
    for (let pe = 0; pe < F; pe++) {
      const Te = ae(k);
      if (!Te) {
        d(ye.INVALID_UNICODE_ESCAPE_SEQUENCE, o(), 0, `\\${w}${re}${k.currentChar()}`);
        break;
      }
      re += Te;
    }
    return `\\${w}${re}`;
  }
  function Ne(k) {
    y(k);
    let w = "", F = "";
    const re = (pe) => pe !== "{" && pe !== "}" && pe !== yn && pe !== ft;
    for (; w = G(k, re); )
      F += w;
    return F;
  }
  function V(k) {
    let w = "", F = "";
    for (; w = ee(k); )
      F += w;
    return F;
  }
  function B(k) {
    const w = (F = !1, re) => {
      const pe = k.currentChar();
      return pe === "{" || pe === "%" || pe === "@" || pe === "|" || pe === "(" || pe === ")" || !pe || pe === yn ? re : pe === ft || pe === c2 ? (re += pe, k.next(), w(F, re)) : (re += pe, k.next(), w(!0, re));
    };
    return w(!1, "");
  }
  function te(k) {
    y(k);
    const w = h(
      k,
      "|"
      /* TokenChars.Pipe */
    );
    return y(k), w;
  }
  function z(k, w) {
    let F = null;
    switch (k.currentChar()) {
      case "{":
        return w.braceNest >= 1 && d(ye.NOT_ALLOW_NEST_PLACEHOLDER, o(), 0), k.next(), F = f(
          w,
          2,
          "{"
          /* TokenChars.BraceLeft */
        ), y(k), w.braceNest++, F;
      case "}":
        return w.braceNest > 0 && w.currentType === 2 && d(ye.EMPTY_PLACEHOLDER, o(), 0), k.next(), F = f(
          w,
          3,
          "}"
          /* TokenChars.BraceRight */
        ), w.braceNest--, w.braceNest > 0 && y(k), w.inLinked && w.braceNest === 0 && (w.inLinked = !1), F;
      case "@":
        return w.braceNest > 0 && d(ye.UNTERMINATED_CLOSING_BRACE, o(), 0), F = S(k, w) || p(w), w.braceNest = 0, F;
      default:
        let pe = !0, Te = !0, ut = !0;
        if (x(k))
          return w.braceNest > 0 && d(ye.UNTERMINATED_CLOSING_BRACE, o(), 0), F = f(w, 1, te(k)), w.braceNest = 0, w.inLinked = !1, F;
        if (w.braceNest > 0 && (w.currentType === 5 || w.currentType === 6 || w.currentType === 7))
          return d(ye.UNTERMINATED_CLOSING_BRACE, o(), 0), w.braceNest = 0, H(k, w);
        if (pe = E(k, w))
          return F = f(w, 5, W(k)), y(k), F;
        if (Te = _(k, w))
          return F = f(w, 6, ce(k)), y(k), F;
        if (ut = T(k, w))
          return F = f(w, 7, Me(k)), y(k), F;
        if (!pe && !Te && !ut)
          return F = f(w, 13, Ne(k)), d(ye.INVALID_TOKEN_IN_PLACEHOLDER, o(), 0, F.value), y(k), F;
        break;
    }
    return F;
  }
  function S(k, w) {
    const { currentType: F } = w;
    let re = null;
    const pe = k.currentChar();
    switch ((F === 8 || F === 9 || F === 12 || F === 10) && (pe === ft || pe === yn) && d(ye.INVALID_LINKED_FORMAT, o(), 0), pe) {
      case "@":
        return k.next(), re = f(
          w,
          8,
          "@"
          /* TokenChars.LinkedAlias */
        ), w.inLinked = !0, re;
      case ".":
        return y(k), k.next(), f(
          w,
          9,
          "."
          /* TokenChars.LinkedDot */
        );
      case ":":
        return y(k), k.next(), f(
          w,
          10,
          ":"
          /* TokenChars.LinkedDelimiter */
        );
      default:
        return x(k) ? (re = f(w, 1, te(k)), w.braceNest = 0, w.inLinked = !1, re) : D(k, w) || I(k, w) ? (y(k), S(k, w)) : N(k, w) ? (y(k), f(w, 12, V(k))) : L(k, w) ? (y(k), pe === "{" ? z(k, w) || re : f(w, 11, B(k))) : (F === 8 && d(ye.INVALID_LINKED_FORMAT, o(), 0), w.braceNest = 0, w.inLinked = !1, H(k, w));
    }
  }
  function H(k, w) {
    let F = {
      type: 14
      /* TokenTypes.EOF */
    };
    if (w.braceNest > 0)
      return z(k, w) || p(w);
    if (w.inLinked)
      return S(k, w) || p(w);
    switch (k.currentChar()) {
      case "{":
        return z(k, w) || p(w);
      case "}":
        return d(ye.UNBALANCED_CLOSING_BRACE, o(), 0), k.next(), f(
          w,
          3,
          "}"
          /* TokenChars.BraceRight */
        );
      case "@":
        return S(k, w) || p(w);
      default:
        if (x(k))
          return F = f(w, 1, te(k)), w.braceNest = 0, w.inLinked = !1, F;
        const { isModulo: pe, hasSpace: Te } = R(k);
        if (pe)
          return Te ? f(w, 0, ve(k)) : f(w, 4, Ee(k));
        if (P(k))
          return f(w, 0, ve(k));
        break;
    }
    return F;
  }
  function ue() {
    const { currentType: k, offset: w, startLoc: F, endLoc: re } = l;
    return l.lastType = k, l.lastOffset = w, l.lastStartLoc = F, l.lastEndLoc = re, l.offset = a(), l.startLoc = o(), r.currentChar() === Fn ? f(
      l,
      14
      /* TokenTypes.EOF */
    ) : H(r, l);
  }
  return {
    nextToken: ue,
    currentOffset: a,
    currentPosition: o,
    context: c
  };
}
const p2 = "parser", v2 = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;
function m2(e, t, n) {
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
function h2(e = {}) {
  const t = e.location !== !1, { onError: n } = e;
  function r(v, b, E, _, ...T) {
    const D = v.currentPosition();
    if (D.offset += _, D.column += _, n) {
      const N = t ? Xs(E, D) : null, I = la(b, N, {
        domain: p2,
        args: T
      });
      n(I);
    }
  }
  function a(v, b, E) {
    const _ = { type: v };
    return t && (_.start = b, _.end = b, _.loc = { start: E, end: E }), _;
  }
  function o(v, b, E, _) {
    _ && (v.type = _), t && (v.end = b, v.loc && (v.loc.end = E));
  }
  function s(v, b) {
    const E = v.context(), _ = a(3, E.offset, E.startLoc);
    return _.value = b, o(_, v.currentOffset(), v.currentPosition()), _;
  }
  function i(v, b) {
    const E = v.context(), { lastOffset: _, lastStartLoc: T } = E, D = a(5, _, T);
    return D.index = parseInt(b, 10), v.nextToken(), o(D, v.currentOffset(), v.currentPosition()), D;
  }
  function l(v, b) {
    const E = v.context(), { lastOffset: _, lastStartLoc: T } = E, D = a(4, _, T);
    return D.key = b, v.nextToken(), o(D, v.currentOffset(), v.currentPosition()), D;
  }
  function c(v, b) {
    const E = v.context(), { lastOffset: _, lastStartLoc: T } = E, D = a(9, _, T);
    return D.value = b.replace(v2, m2), v.nextToken(), o(D, v.currentOffset(), v.currentPosition()), D;
  }
  function u(v) {
    const b = v.nextToken(), E = v.context(), { lastOffset: _, lastStartLoc: T } = E, D = a(8, _, T);
    return b.type !== 12 ? (r(v, ye.UNEXPECTED_EMPTY_LINKED_MODIFIER, E.lastStartLoc, 0), D.value = "", o(D, _, T), {
      nextConsumeToken: b,
      node: D
    }) : (b.value == null && r(v, ye.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, nn(b)), D.value = b.value || "", o(D, v.currentOffset(), v.currentPosition()), {
      node: D
    });
  }
  function d(v, b) {
    const E = v.context(), _ = a(7, E.offset, E.startLoc);
    return _.value = b, o(_, v.currentOffset(), v.currentPosition()), _;
  }
  function f(v) {
    const b = v.context(), E = a(6, b.offset, b.startLoc);
    let _ = v.nextToken();
    if (_.type === 9) {
      const T = u(v);
      E.modifier = T.node, _ = T.nextConsumeToken || v.nextToken();
    }
    switch (_.type !== 10 && r(v, ye.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, nn(_)), _ = v.nextToken(), _.type === 2 && (_ = v.nextToken()), _.type) {
      case 11:
        _.value == null && r(v, ye.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, nn(_)), E.key = d(v, _.value || "");
        break;
      case 5:
        _.value == null && r(v, ye.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, nn(_)), E.key = l(v, _.value || "");
        break;
      case 6:
        _.value == null && r(v, ye.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, nn(_)), E.key = i(v, _.value || "");
        break;
      case 7:
        _.value == null && r(v, ye.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, nn(_)), E.key = c(v, _.value || "");
        break;
      default:
        r(v, ye.UNEXPECTED_EMPTY_LINKED_KEY, b.lastStartLoc, 0);
        const T = v.context(), D = a(7, T.offset, T.startLoc);
        return D.value = "", o(D, T.offset, T.startLoc), E.key = D, o(E, T.offset, T.startLoc), {
          nextConsumeToken: _,
          node: E
        };
    }
    return o(E, v.currentOffset(), v.currentPosition()), {
      node: E
    };
  }
  function p(v) {
    const b = v.context(), E = b.currentType === 1 ? v.currentOffset() : b.offset, _ = b.currentType === 1 ? b.endLoc : b.startLoc, T = a(2, E, _);
    T.items = [];
    let D = null;
    do {
      const L = D || v.nextToken();
      switch (D = null, L.type) {
        case 0:
          L.value == null && r(v, ye.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, nn(L)), T.items.push(s(v, L.value || ""));
          break;
        case 6:
          L.value == null && r(v, ye.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, nn(L)), T.items.push(i(v, L.value || ""));
          break;
        case 5:
          L.value == null && r(v, ye.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, nn(L)), T.items.push(l(v, L.value || ""));
          break;
        case 7:
          L.value == null && r(v, ye.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, nn(L)), T.items.push(c(v, L.value || ""));
          break;
        case 8:
          const x = f(v);
          T.items.push(x.node), D = x.nextConsumeToken || null;
          break;
      }
    } while (b.currentType !== 14 && b.currentType !== 1);
    const N = b.currentType === 1 ? b.lastOffset : v.currentOffset(), I = b.currentType === 1 ? b.lastEndLoc : v.currentPosition();
    return o(T, N, I), T;
  }
  function h(v, b, E, _) {
    const T = v.context();
    let D = _.items.length === 0;
    const N = a(1, b, E);
    N.cases = [], N.cases.push(_);
    do {
      const I = p(v);
      D || (D = I.items.length === 0), N.cases.push(I);
    } while (T.currentType !== 14);
    return D && r(v, ye.MUST_HAVE_MESSAGES_IN_PLURAL, E, 0), o(N, v.currentOffset(), v.currentPosition()), N;
  }
  function g(v) {
    const b = v.context(), { offset: E, startLoc: _ } = b, T = p(v);
    return b.currentType === 14 ? T : h(v, E, _, T);
  }
  function y(v) {
    const b = f2(v, pp({}, e)), E = b.context(), _ = a(0, E.offset, E.startLoc);
    return t && _.loc && (_.loc.source = v), _.body = g(b), e.onCacheKey && (_.cacheKey = e.onCacheKey(v)), E.currentType !== 14 && r(b, ye.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, v[E.offset] || ""), o(_, b.currentOffset(), b.currentPosition()), _;
  }
  return { parse: y };
}
function nn(e) {
  if (e.type === 14)
    return "EOF";
  const t = (e.value || "").replace(/\r?\n/gu, "\\n");
  return t.length > 10 ? t.slice(0, 9) + "…" : t;
}
function g2(e, t = {}) {
  const n = {
    ast: e,
    helpers: /* @__PURE__ */ new Set()
  };
  return { context: () => n, helper: (o) => (n.helpers.add(o), o) };
}
function oc(e, t) {
  for (let n = 0; n < e.length; n++)
    fl(e[n], t);
}
function fl(e, t) {
  switch (e.type) {
    case 1:
      oc(e.cases, t), t.helper(
        "plural"
        /* HelperNameMap.PLURAL */
      );
      break;
    case 2:
      oc(e.items, t);
      break;
    case 6:
      fl(e.key, t), t.helper(
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
function y2(e, t = {}) {
  const n = g2(e);
  n.helper(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  ), e.body && fl(e.body, n);
  const r = n.context();
  e.helpers = Array.from(r.helpers);
}
function b2(e) {
  const t = e.body;
  return t.type === 2 ? sc(t) : t.cases.forEach((n) => sc(n)), e;
}
function sc(e) {
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
      e.static = vp(t);
      for (let n = 0; n < e.items.length; n++) {
        const r = e.items[n];
        (r.type === 3 || r.type === 9) && delete r.value;
      }
    }
  }
}
const _2 = "minifier";
function xr(e) {
  switch (e.t = e.type, e.type) {
    case 0:
      const t = e;
      xr(t.body), t.b = t.body, delete t.body;
      break;
    case 1:
      const n = e, r = n.cases;
      for (let u = 0; u < r.length; u++)
        xr(r[u]);
      n.c = r, delete n.cases;
      break;
    case 2:
      const a = e, o = a.items;
      for (let u = 0; u < o.length; u++)
        xr(o[u]);
      a.i = o, delete a.items, a.static && (a.s = a.static, delete a.static);
      break;
    case 3:
    case 9:
    case 8:
    case 7:
      const s = e;
      s.value && (s.v = s.value, delete s.value);
      break;
    case 6:
      const i = e;
      xr(i.key), i.k = i.key, delete i.key, i.modifier && (xr(i.modifier), i.m = i.modifier, delete i.modifier);
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
      throw la(ye.UNHANDLED_MINIFIER_NODE_TYPE, null, {
        domain: _2,
        args: [e.type]
      });
  }
  delete e.type;
}
const w2 = "parser";
function E2(e, t) {
  const { sourceMap: n, filename: r, breakLineCode: a, needIndent: o } = t, s = t.location !== !1, i = {
    filename: r,
    code: "",
    column: 1,
    line: 1,
    offset: 0,
    map: void 0,
    breakLineCode: a,
    needIndent: o,
    indentLevel: 0
  };
  s && e.loc && (i.source = e.loc.source);
  const l = () => i;
  function c(y, v) {
    i.code += y;
  }
  function u(y, v = !0) {
    const b = v ? a : "";
    c(o ? b + "  ".repeat(y) : b);
  }
  function d(y = !0) {
    const v = ++i.indentLevel;
    y && u(v);
  }
  function f(y = !0) {
    const v = --i.indentLevel;
    y && u(v);
  }
  function p() {
    u(i.indentLevel);
  }
  return {
    context: l,
    push: c,
    indent: d,
    deindent: f,
    newline: p,
    helper: (y) => `_${y}`,
    needIndent: () => i.needIndent
  };
}
function O2(e, t) {
  const { helper: n } = e;
  e.push(`${n(
    "linked"
    /* HelperNameMap.LINKED */
  )}(`), Wr(e, t.key), t.modifier ? (e.push(", "), Wr(e, t.modifier), e.push(", _type")) : e.push(", undefined, _type"), e.push(")");
}
function D2(e, t) {
  const { helper: n, needIndent: r } = e;
  e.push(`${n(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  )}([`), e.indent(r());
  const a = t.items.length;
  for (let o = 0; o < a && (Wr(e, t.items[o]), o !== a - 1); o++)
    e.push(", ");
  e.deindent(r()), e.push("])");
}
function k2(e, t) {
  const { helper: n, needIndent: r } = e;
  if (t.cases.length > 1) {
    e.push(`${n(
      "plural"
      /* HelperNameMap.PLURAL */
    )}([`), e.indent(r());
    const a = t.cases.length;
    for (let o = 0; o < a && (Wr(e, t.cases[o]), o !== a - 1); o++)
      e.push(", ");
    e.deindent(r()), e.push("])");
  }
}
function $2(e, t) {
  t.body ? Wr(e, t.body) : e.push("null");
}
function Wr(e, t) {
  const { helper: n } = e;
  switch (t.type) {
    case 0:
      $2(e, t);
      break;
    case 1:
      k2(e, t);
      break;
    case 2:
      D2(e, t);
      break;
    case 6:
      O2(e, t);
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
      throw la(ye.UNHANDLED_CODEGEN_NODE_TYPE, null, {
        domain: w2,
        args: [t.type]
      });
  }
}
const x2 = (e, t = {}) => {
  const n = rc(t.mode) ? t.mode : "normal", r = rc(t.filename) ? t.filename : "message.intl", a = !!t.sourceMap, o = t.breakLineCode != null ? t.breakLineCode : n === "arrow" ? ";" : `
`, s = t.needIndent ? t.needIndent : n !== "arrow", i = e.helpers || [], l = E2(e, {
    mode: n,
    filename: r,
    sourceMap: a,
    breakLineCode: o,
    needIndent: s
  });
  l.push(n === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {"), l.indent(s), i.length > 0 && (l.push(`const { ${vp(i.map((d) => `${d}: _${d}`), ", ")} } = ctx`), l.newline()), l.push("return "), Wr(l, e), l.deindent(s), l.push("}"), delete e.helpers;
  const { code: c, map: u } = l.context();
  return {
    ast: e,
    code: c,
    map: u ? u.toJSON() : void 0
    // eslint-disable-line @typescript-eslint/no-explicit-any
  };
};
function T2(e, t = {}) {
  const n = pp({}, t), r = !!n.jit, a = !!n.minify, o = n.optimize == null ? !0 : n.optimize, i = h2(n).parse(e);
  return r ? (o && b2(i), a && xr(i), { ast: i, code: "" }) : (y2(i, n), x2(i, n));
}
/*!
  * core-base v9.5.0
  * (c) 2023 kazuya kawaguchi
  * Released under the MIT License.
  */
function C2() {
  typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (_n().__INTLIFY_PROD_DEVTOOLS__ = !1), typeof __INTLIFY_JIT_COMPILATION__ != "boolean" && (_n().__INTLIFY_JIT_COMPILATION__ = !1), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (_n().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1);
}
const er = [];
er[
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
er[
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
er[
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
er[
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
er[
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
er[
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
er[
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
const A2 = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function N2(e) {
  return A2.test(e);
}
function P2(e) {
  const t = e.charCodeAt(0), n = e.charCodeAt(e.length - 1);
  return t === n && (t === 34 || t === 39) ? e.slice(1, -1) : e;
}
function S2(e) {
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
  return e.charAt(0) === "0" && isNaN(parseInt(e)) ? !1 : N2(t) ? P2(t) : "*" + t;
}
function M2(e) {
  const t = [];
  let n = -1, r = 0, a = 0, o, s, i, l, c, u, d;
  const f = [];
  f[
    0
    /* Actions.APPEND */
  ] = () => {
    s === void 0 ? s = i : s += i;
  }, f[
    1
    /* Actions.PUSH */
  ] = () => {
    s !== void 0 && (t.push(s), s = void 0);
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
      if (a = 0, s === void 0 || (s = I2(s), s === !1))
        return !1;
      f[
        1
        /* Actions.PUSH */
      ]();
    }
  };
  function p() {
    const h = e[n + 1];
    if (r === 5 && h === "'" || r === 6 && h === '"')
      return n++, i = "\\" + h, f[
        0
        /* Actions.APPEND */
      ](), !0;
  }
  for (; r !== null; )
    if (n++, o = e[n], !(o === "\\" && p())) {
      if (l = S2(o), d = er[r], c = d[l] || d.l || 8, c === 8 || (r = c[0], c[1] !== void 0 && (u = f[c[1]], u && (i = o, u() === !1))))
        return;
      if (r === 7)
        return t;
    }
}
const ic = /* @__PURE__ */ new Map();
function L2(e, t) {
  return Fe(e) ? e[t] : null;
}
function R2(e, t) {
  if (!Fe(e))
    return null;
  let n = ic.get(t);
  if (n || (n = M2(t), n && ic.set(t, n)), !n)
    return null;
  const r = n.length;
  let a = e, o = 0;
  for (; o < r; ) {
    const s = a[n[o]];
    if (s === void 0)
      return null;
    a = s, o++;
  }
  return a;
}
const F2 = (e) => e, V2 = (e) => "", B2 = "text", Y2 = (e) => e.length === 0 ? "" : qS(e), U2 = KS;
function lc(e, t) {
  return e = Math.abs(e), t === 2 ? e ? e > 1 ? 1 : 0 : 1 : e ? Math.min(e, 2) : 0;
}
function j2(e) {
  const t = ot(e.pluralIndex) ? e.pluralIndex : -1;
  return e.named && (ot(e.named.count) || ot(e.named.n)) ? ot(e.named.count) ? e.named.count : ot(e.named.n) ? e.named.n : t : t;
}
function H2(e, t) {
  t.count || (t.count = e), t.n || (t.n = e);
}
function W2(e = {}) {
  const t = e.locale, n = j2(e), r = Fe(e.pluralRules) && ne(t) && Ze(e.pluralRules[t]) ? e.pluralRules[t] : lc, a = Fe(e.pluralRules) && ne(t) && Ze(e.pluralRules[t]) ? lc : void 0, o = (v) => v[r(n, v.length, a)], s = e.list || [], i = (v) => s[v], l = e.named || {};
  ot(e.pluralIndex) && H2(n, l);
  const c = (v) => l[v];
  function u(v) {
    const b = Ze(e.messages) ? e.messages(v) : Fe(e.messages) ? e.messages[v] : !1;
    return b || (e.parent ? e.parent.message(v) : V2);
  }
  const d = (v) => e.modifiers ? e.modifiers[v] : F2, f = ke(e.processor) && Ze(e.processor.normalize) ? e.processor.normalize : Y2, p = ke(e.processor) && Ze(e.processor.interpolate) ? e.processor.interpolate : U2, h = ke(e.processor) && ne(e.processor.type) ? e.processor.type : B2, y = {
    list: i,
    named: c,
    plural: o,
    linked: (v, ...b) => {
      const [E, _] = b;
      let T = "text", D = "";
      b.length === 1 ? Fe(E) ? (D = E.modifier || D, T = E.type || T) : ne(E) && (D = E || D) : b.length === 2 && (ne(E) && (D = E || D), ne(_) && (T = _ || T));
      const N = u(v)(y), I = (
        // The message in vnode resolved with linked are returned as an array by processor.nomalize
        T === "vnode" && ze(N) && D ? N[0] : N
      );
      return D ? d(D)(I, T) : I;
    },
    message: u,
    type: h,
    interpolate: p,
    normalize: f,
    values: lt({}, s, l)
  };
  return y;
}
let Ma = null;
function G2(e) {
  Ma = e;
}
function z2(e, t, n) {
  Ma && Ma.emit("i18n:init", {
    timestamp: Date.now(),
    i18n: e,
    version: t,
    meta: n
  });
}
const K2 = /* @__PURE__ */ q2(
  "function:translate"
  /* IntlifyDevToolsHooks.FunctionTranslate */
);
function q2(e) {
  return (t) => Ma && Ma.emit(e, t);
}
const pt = {
  NOT_FOUND_KEY: 1,
  FALLBACK_TO_TRANSLATE: 2,
  CANNOT_FORMAT_NUMBER: 3,
  FALLBACK_TO_NUMBER_FORMAT: 4,
  CANNOT_FORMAT_DATE: 5,
  FALLBACK_TO_DATE_FORMAT: 6,
  EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER: 7,
  __EXTEND_POINT__: 8
}, Z2 = {
  [pt.NOT_FOUND_KEY]: "Not found '{key}' key in '{locale}' locale messages.",
  [pt.FALLBACK_TO_TRANSLATE]: "Fall back to translate '{key}' key with '{target}' locale.",
  [pt.CANNOT_FORMAT_NUMBER]: "Cannot format a number value due to not supported Intl.NumberFormat.",
  [pt.FALLBACK_TO_NUMBER_FORMAT]: "Fall back to number format '{key}' key with '{target}' locale.",
  [pt.CANNOT_FORMAT_DATE]: "Cannot format a date value due to not supported Intl.DateTimeFormat.",
  [pt.FALLBACK_TO_DATE_FORMAT]: "Fall back to datetime format '{key}' key with '{target}' locale.",
  [pt.EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER]: "This project is using Custom Message Compiler, which is an experimental feature. It may receive breaking changes or be removed in the future."
};
function pr(e, ...t) {
  return ll(Z2[e], ...t);
}
function pl(e, t) {
  return t.locale != null ? uc(t.locale) : uc(e.locale);
}
let Os;
function uc(e) {
  return ne(e) ? e : Os != null && e.resolvedOnce ? Os : Os = e();
}
function X2(e, t, n) {
  return [.../* @__PURE__ */ new Set([
    n,
    ...ze(t) ? t : Fe(t) ? Object.keys(t) : ne(t) ? [t] : [n]
  ])];
}
function mp(e, t, n) {
  const r = ne(n) ? n : Gr, a = e;
  a.__localeChainCache || (a.__localeChainCache = /* @__PURE__ */ new Map());
  let o = a.__localeChainCache.get(r);
  if (!o) {
    o = [];
    let s = [n];
    for (; ze(s); )
      s = cc(o, s, t);
    const i = ze(t) || !ke(t) ? t : t.default ? t.default : null;
    s = ne(i) ? [i] : i, ze(s) && cc(o, s, !1), a.__localeChainCache.set(r, o);
  }
  return o;
}
function cc(e, t, n) {
  let r = !0;
  for (let a = 0; a < t.length && Ce(r); a++) {
    const o = t[a];
    ne(o) && (r = J2(e, t[a], n));
  }
  return r;
}
function J2(e, t, n) {
  let r;
  const a = t.split("-");
  do {
    const o = a.join("-");
    r = Q2(e, o, n), a.splice(-1, 1);
  } while (a.length && r === !0);
  return r;
}
function Q2(e, t, n) {
  let r = !1;
  if (!e.includes(t) && (r = !0, t)) {
    r = t[t.length - 1] !== "!";
    const a = t.replace(/!/g, "");
    e.push(a), (ze(n) || ke(n)) && n[a] && (r = n[a]);
  }
  return r;
}
const eI = "9.5.0", rs = -1, Gr = "en-US", Yo = "", dc = (e) => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;
function tI() {
  return {
    upper: (e, t) => t === "text" && ne(e) ? e.toUpperCase() : t === "vnode" && Fe(e) && "__v_isVNode" in e ? e.children.toUpperCase() : e,
    lower: (e, t) => t === "text" && ne(e) ? e.toLowerCase() : t === "vnode" && Fe(e) && "__v_isVNode" in e ? e.children.toLowerCase() : e,
    capitalize: (e, t) => t === "text" && ne(e) ? dc(e) : t === "vnode" && Fe(e) && "__v_isVNode" in e ? dc(e.children) : e
  };
}
let hp;
function fc(e) {
  hp = e;
}
let gp;
function nI(e) {
  gp = e;
}
let yp;
function rI(e) {
  yp = e;
}
let bp = null;
const pc = (e) => {
  bp = e;
}, aI = () => bp;
let _p = null;
const vc = (e) => {
  _p = e;
}, oI = () => _p;
let mc = 0;
function sI(e = {}) {
  const t = Ze(e.onWarn) ? e.onWarn : it, n = ne(e.version) ? e.version : eI, r = ne(e.locale) || Ze(e.locale) ? e.locale : Gr, a = Ze(r) ? Gr : r, o = ze(e.fallbackLocale) || ke(e.fallbackLocale) || ne(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : a, s = ke(e.messages) ? e.messages : { [a]: {} }, i = ke(e.datetimeFormats) ? e.datetimeFormats : { [a]: {} }, l = ke(e.numberFormats) ? e.numberFormats : { [a]: {} }, c = lt({}, e.modifiers || {}, tI()), u = e.pluralRules || {}, d = Ze(e.missing) ? e.missing : null, f = Ce(e.missingWarn) || Xn(e.missingWarn) ? e.missingWarn : !0, p = Ce(e.fallbackWarn) || Xn(e.fallbackWarn) ? e.fallbackWarn : !0, h = !!e.fallbackFormat, g = !!e.unresolving, y = Ze(e.postTranslation) ? e.postTranslation : null, v = ke(e.processor) ? e.processor : null, b = Ce(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, E = !!e.escapeParameter, _ = Ze(e.messageCompiler) ? e.messageCompiler : hp;
  process.env.NODE_ENV !== "production" && Ze(e.messageCompiler) && XS(pr(pt.EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER));
  const T = Ze(e.messageResolver) ? e.messageResolver : gp || L2, D = Ze(e.localeFallbacker) ? e.localeFallbacker : yp || X2, N = Fe(e.fallbackContext) ? e.fallbackContext : void 0, I = e, L = Fe(I.__datetimeFormatters) ? I.__datetimeFormatters : /* @__PURE__ */ new Map(), x = Fe(I.__numberFormatters) ? I.__numberFormatters : /* @__PURE__ */ new Map(), R = Fe(I.__meta) ? I.__meta : {};
  mc++;
  const P = {
    version: n,
    cid: mc,
    locale: r,
    fallbackLocale: o,
    messages: s,
    modifiers: c,
    pluralRules: u,
    missing: d,
    missingWarn: f,
    fallbackWarn: p,
    fallbackFormat: h,
    unresolving: g,
    postTranslation: y,
    processor: v,
    warnHtmlMessage: b,
    escapeParameter: E,
    messageCompiler: _,
    messageResolver: T,
    localeFallbacker: D,
    fallbackContext: N,
    onWarn: t,
    __meta: R
  };
  return P.datetimeFormats = i, P.numberFormats = l, P.__datetimeFormatters = L, P.__numberFormatters = x, process.env.NODE_ENV !== "production" && (P.__v_emitter = I.__v_emitter != null ? I.__v_emitter : void 0), (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) && z2(P, n, R), P;
}
function as(e, t) {
  return e instanceof RegExp ? e.test(t) : e;
}
function wp(e, t) {
  return e instanceof RegExp ? e.test(t) : e;
}
function vl(e, t, n, r, a) {
  const { missing: o, onWarn: s } = e;
  if (process.env.NODE_ENV !== "production") {
    const i = e.__v_emitter;
    i && i.emit("missing", {
      locale: n,
      key: t,
      type: a,
      groupId: `${a}:${t}`
    });
  }
  if (o !== null) {
    const i = o(e, n, t, a);
    return ne(i) ? i : t;
  } else
    return process.env.NODE_ENV !== "production" && wp(r, t) && s(pr(pt.NOT_FOUND_KEY, { key: t, locale: n })), t;
}
function ba(e, t, n) {
  const r = e;
  r.__localeChainCache = /* @__PURE__ */ new Map(), e.localeFallbacker(e, n, t);
}
function Ds(e) {
  return (n) => iI(n, e);
}
function iI(e, t) {
  const n = t.b || t.body;
  if ((n.t || n.type) === 1) {
    const r = n, a = r.c || r.cases;
    return e.plural(a.reduce((o, s) => [
      ...o,
      hc(e, s)
    ], []));
  } else
    return hc(e, n);
}
function hc(e, t) {
  const n = t.s || t.static;
  if (n)
    return e.type === "text" ? n : e.normalize([n]);
  {
    const r = (t.i || t.items).reduce((a, o) => [...a, Js(e, o)], []);
    return e.normalize(r);
  }
}
function Js(e, t) {
  const n = t.t || t.type;
  switch (n) {
    case 3:
      const r = t;
      return r.v || r.value;
    case 9:
      const a = t;
      return a.v || a.value;
    case 4:
      const o = t;
      return e.interpolate(e.named(o.k || o.key));
    case 5:
      const s = t;
      return e.interpolate(e.list(s.i != null ? s.i : s.index));
    case 6:
      const i = t, l = i.m || i.modifier;
      return e.linked(Js(e, i.k || i.key), l ? Js(e, l) : void 0, e.type);
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
const Ep = ye.__EXTEND_POINT__, oo = cl(Ep), St = {
  INVALID_ARGUMENT: Ep,
  INVALID_DATE_ARGUMENT: oo(),
  INVALID_ISO_DATE_ARGUMENT: oo(),
  NOT_SUPPORT_NON_STRING_MESSAGE: oo(),
  __EXTEND_POINT__: oo()
  // 22
};
function sr(e) {
  return la(e, null, process.env.NODE_ENV !== "production" ? { messages: lI } : void 0);
}
const lI = {
  [St.INVALID_ARGUMENT]: "Invalid arguments",
  [St.INVALID_DATE_ARGUMENT]: "The date provided is an invalid Date object.Make sure your Date represents a valid date.",
  [St.INVALID_ISO_DATE_ARGUMENT]: "The argument provided is not a valid ISO date string",
  [St.NOT_SUPPORT_NON_STRING_MESSAGE]: "Not support non-string message"
}, uI = "Detected HTML in '{source}' message. Recommend not using HTML messages to avoid XSS.";
function Op(e, t) {
  t && o2(e) && it(ll(uI, { source: e }));
}
const Dp = (e) => e;
let Nr = /* @__PURE__ */ Object.create(null);
const vr = (e) => Fe(e) && (e.t === 0 || e.type === 0) && ("b" in e || "body" in e);
function kp(e, t = {}) {
  let n = !1;
  const r = t.onError || r2;
  return t.onError = (a) => {
    n = !0, r(a);
  }, { ...T2(e, t), detectError: n };
}
const cI = (e, t) => {
  if (!ne(e))
    throw sr(St.NOT_SUPPORT_NON_STRING_MESSAGE);
  {
    const n = Ce(t.warnHtmlMessage) ? t.warnHtmlMessage : !0;
    process.env.NODE_ENV !== "production" && Op(e, n);
    const a = (t.onCacheKey || Dp)(e), o = Nr[a];
    if (o)
      return o;
    const { code: s, detectError: i } = kp(e, t), l = new Function(`return ${s}`)();
    return i ? l : Nr[a] = l;
  }
};
function dI(e, t) {
  if (__INTLIFY_JIT_COMPILATION__ && !__INTLIFY_DROP_MESSAGE_COMPILER__ && ne(e)) {
    const n = Ce(t.warnHtmlMessage) ? t.warnHtmlMessage : !0;
    process.env.NODE_ENV !== "production" && Op(e, n);
    const a = (t.onCacheKey || Dp)(e), o = Nr[a];
    if (o)
      return o;
    const { ast: s, detectError: i } = kp(e, {
      ...t,
      location: process.env.NODE_ENV !== "production",
      jit: !0
    }), l = Ds(s);
    return i ? l : Nr[a] = l;
  } else {
    if (process.env.NODE_ENV !== "production" && !vr(e))
      return it(`the message that is resolve with key '${t.key}' is not supported for jit compilation`), () => e;
    const n = e.cacheKey;
    if (n) {
      const r = Nr[n];
      return r || (Nr[n] = Ds(e));
    } else
      return Ds(e);
  }
}
const gc = () => "", zt = (e) => Ze(e);
function yc(e, ...t) {
  const { fallbackFormat: n, postTranslation: r, unresolving: a, messageCompiler: o, fallbackLocale: s, messages: i } = e, [l, c] = Qs(...t), u = Ce(c.missingWarn) ? c.missingWarn : e.missingWarn, d = Ce(c.fallbackWarn) ? c.fallbackWarn : e.fallbackWarn, f = Ce(c.escapeParameter) ? c.escapeParameter : e.escapeParameter, p = !!c.resolvedMessage, h = ne(c.default) || Ce(c.default) ? Ce(c.default) ? o ? l : () => l : c.default : n ? o ? l : () => l : "", g = n || h !== "", y = pl(e, c);
  f && fI(c);
  let [v, b, E] = p ? [
    l,
    y,
    i[y] || {}
  ] : $p(e, l, y, s, d, u), _ = v, T = l;
  if (!p && !(ne(_) || vr(_) || zt(_)) && g && (_ = h, T = _), !p && (!(ne(_) || vr(_) || zt(_)) || !ne(b)))
    return a ? rs : l;
  if (process.env.NODE_ENV !== "production" && ne(_) && e.messageCompiler == null)
    return it(`The message format compilation is not supported in this build. Because message compiler isn't included. You need to pre-compilation all message format. So translate function return '${l}'.`), l;
  let D = !1;
  const N = () => {
    D = !0;
  }, I = zt(_) ? _ : xp(e, l, b, _, T, N);
  if (D)
    return _;
  const L = hI(e, b, E, c), x = W2(L), R = pI(e, I, x), P = r ? r(R, l) : R;
  if (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) {
    const G = {
      timestamp: Date.now(),
      key: ne(l) ? l : zt(_) ? _.key : "",
      locale: b || (zt(_) ? _.locale : ""),
      format: ne(_) ? _ : zt(_) ? _.source : "",
      message: P
    };
    G.meta = lt({}, e.__meta, aI() || {}), K2(G);
  }
  return P;
}
function fI(e) {
  ze(e.list) ? e.list = e.list.map((t) => ne(t) ? ec(t) : t) : Fe(e.named) && Object.keys(e.named).forEach((t) => {
    ne(e.named[t]) && (e.named[t] = ec(e.named[t]));
  });
}
function $p(e, t, n, r, a, o) {
  const { messages: s, onWarn: i, messageResolver: l, localeFallbacker: c } = e, u = c(e, r, n);
  let d = {}, f, p = null, h = n, g = null;
  const y = "translate";
  for (let v = 0; v < u.length; v++) {
    if (f = g = u[v], process.env.NODE_ENV !== "production" && n !== f && as(a, t) && i(pr(pt.FALLBACK_TO_TRANSLATE, {
      key: t,
      target: f
    })), process.env.NODE_ENV !== "production" && n !== f) {
      const D = e.__v_emitter;
      D && D.emit("fallback", {
        type: y,
        key: t,
        from: h,
        to: g,
        groupId: `${y}:${t}`
      });
    }
    d = s[f] || {};
    let b = null, E, _;
    if (process.env.NODE_ENV !== "production" && dn && (b = window.performance.now(), E = "intlify-message-resolve-start", _ = "intlify-message-resolve-end", kt && kt(E)), (p = l(d, t)) === null && (p = d[t]), process.env.NODE_ENV !== "production" && dn) {
      const D = window.performance.now(), N = e.__v_emitter;
      N && b && p && N.emit("message-resolve", {
        type: "message-resolve",
        key: t,
        message: p,
        time: D - b,
        groupId: `${y}:${t}`
      }), E && _ && kt && fr && (kt(_), fr("intlify message resolve", E, _));
    }
    if (ne(p) || vr(p) || zt(p))
      break;
    const T = vl(
      e,
      // eslint-disable-line @typescript-eslint/no-explicit-any
      t,
      f,
      o,
      y
    );
    T !== t && (p = T), h = g;
  }
  return [p, f, d];
}
function xp(e, t, n, r, a, o) {
  const { messageCompiler: s, warnHtmlMessage: i } = e;
  if (zt(r)) {
    const f = r;
    return f.locale = f.locale || n, f.key = f.key || t, f;
  }
  if (s == null) {
    const f = () => r;
    return f.locale = n, f.key = t, f;
  }
  let l = null, c, u;
  process.env.NODE_ENV !== "production" && dn && (l = window.performance.now(), c = "intlify-message-compilation-start", u = "intlify-message-compilation-end", kt && kt(c));
  const d = s(r, vI(e, n, a, r, i, o));
  if (process.env.NODE_ENV !== "production" && dn) {
    const f = window.performance.now(), p = e.__v_emitter;
    p && l && p.emit("message-compilation", {
      type: "message-compilation",
      message: r,
      time: f - l,
      groupId: `translate:${t}`
    }), c && u && kt && fr && (kt(u), fr("intlify message compilation", c, u));
  }
  return d.locale = n, d.key = t, d.source = r, d;
}
function pI(e, t, n) {
  let r = null, a, o;
  process.env.NODE_ENV !== "production" && dn && (r = window.performance.now(), a = "intlify-message-evaluation-start", o = "intlify-message-evaluation-end", kt && kt(a));
  const s = t(n);
  if (process.env.NODE_ENV !== "production" && dn) {
    const i = window.performance.now(), l = e.__v_emitter;
    l && r && l.emit("message-evaluation", {
      type: "message-evaluation",
      value: s,
      time: i - r,
      groupId: `translate:${t.key}`
    }), a && o && kt && fr && (kt(o), fr("intlify message evaluation", a, o));
  }
  return s;
}
function Qs(...e) {
  const [t, n, r] = e, a = {};
  if (!ne(t) && !ot(t) && !zt(t) && !vr(t))
    throw sr(St.INVALID_ARGUMENT);
  const o = ot(t) ? String(t) : (zt(t), t);
  return ot(n) ? a.plural = n : ne(n) ? a.default = n : ke(n) && !ns(n) ? a.named = n : ze(n) && (a.list = n), ot(r) ? a.plural = r : ne(r) ? a.default = r : ke(r) && lt(a, r), [o, a];
}
function vI(e, t, n, r, a, o) {
  return {
    locale: t,
    key: n,
    warnHtmlMessage: a,
    onError: (s) => {
      if (o && o(s), process.env.NODE_ENV !== "production") {
        const i = mI(r), l = `Message compilation error: ${s.message}`, c = s.location && i && ZS(i, s.location.start.offset, s.location.end.offset), u = e.__v_emitter;
        u && i && u.emit("compile-error", {
          message: i,
          error: s.message,
          start: s.location && s.location.start.offset,
          end: s.location && s.location.end.offset,
          groupId: `translate:${n}`
        }), console.error(c ? `${l}
${c}` : l);
      } else
        throw s;
    },
    onCacheKey: (s) => HS(t, n, s)
  };
}
function mI(e) {
  var t;
  if (!ne(e)) {
    if ((t = e.loc) != null && t.source)
      return e.loc.source;
  }
}
function hI(e, t, n, r) {
  const { modifiers: a, pluralRules: o, messageResolver: s, fallbackLocale: i, fallbackWarn: l, missingWarn: c, fallbackContext: u } = e, f = {
    locale: t,
    modifiers: a,
    pluralRules: o,
    messages: (p) => {
      let h = s(n, p);
      if (h == null && u) {
        const [, , g] = $p(u, p, t, i, l, c);
        h = s(g, p);
      }
      if (ne(h) || vr(h)) {
        let g = !1;
        const v = xp(e, p, t, h, p, () => {
          g = !0;
        });
        return g ? gc : v;
      } else
        return zt(h) ? h : gc;
    }
  };
  return e.processor && (f.processor = e.processor), r.list && (f.list = r.list), r.named && (f.named = r.named), ot(r.plural) && (f.pluralIndex = r.plural), f;
}
const bc = typeof Intl < "u", Tp = {
  dateTimeFormat: bc && typeof Intl.DateTimeFormat < "u",
  numberFormat: bc && typeof Intl.NumberFormat < "u"
};
function _c(e, ...t) {
  const { datetimeFormats: n, unresolving: r, fallbackLocale: a, onWarn: o, localeFallbacker: s } = e, { __datetimeFormatters: i } = e;
  if (process.env.NODE_ENV !== "production" && !Tp.dateTimeFormat)
    return o(pr(pt.CANNOT_FORMAT_DATE)), Yo;
  const [l, c, u, d] = ei(...t), f = Ce(u.missingWarn) ? u.missingWarn : e.missingWarn, p = Ce(u.fallbackWarn) ? u.fallbackWarn : e.fallbackWarn, h = !!u.part, g = pl(e, u), y = s(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    a,
    g
  );
  if (!ne(l) || l === "")
    return new Intl.DateTimeFormat(g, d).format(c);
  let v = {}, b, E = null, _ = g, T = null;
  const D = "datetime format";
  for (let L = 0; L < y.length; L++) {
    if (b = T = y[L], process.env.NODE_ENV !== "production" && g !== b && as(p, l) && o(pr(pt.FALLBACK_TO_DATE_FORMAT, {
      key: l,
      target: b
    })), process.env.NODE_ENV !== "production" && g !== b) {
      const x = e.__v_emitter;
      x && x.emit("fallback", {
        type: D,
        key: l,
        from: _,
        to: T,
        groupId: `${D}:${l}`
      });
    }
    if (v = n[b] || {}, E = v[l], ke(E))
      break;
    vl(e, l, b, f, D), _ = T;
  }
  if (!ke(E) || !ne(b))
    return r ? rs : l;
  let N = `${b}__${l}`;
  ns(d) || (N = `${N}__${JSON.stringify(d)}`);
  let I = i.get(N);
  return I || (I = new Intl.DateTimeFormat(b, lt({}, E, d)), i.set(N, I)), h ? I.formatToParts(c) : I.format(c);
}
const Cp = [
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
function ei(...e) {
  const [t, n, r, a] = e, o = {};
  let s = {}, i;
  if (ne(t)) {
    const l = t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
    if (!l)
      throw sr(St.INVALID_ISO_DATE_ARGUMENT);
    const c = l[3] ? l[3].trim().startsWith("T") ? `${l[1].trim()}${l[3].trim()}` : `${l[1].trim()}T${l[3].trim()}` : l[1].trim();
    i = new Date(c);
    try {
      i.toISOString();
    } catch {
      throw sr(St.INVALID_ISO_DATE_ARGUMENT);
    }
  } else if (GS(t)) {
    if (isNaN(t.getTime()))
      throw sr(St.INVALID_DATE_ARGUMENT);
    i = t;
  } else if (ot(t))
    i = t;
  else
    throw sr(St.INVALID_ARGUMENT);
  return ne(n) ? o.key = n : ke(n) && Object.keys(n).forEach((l) => {
    Cp.includes(l) ? s[l] = n[l] : o[l] = n[l];
  }), ne(r) ? o.locale = r : ke(r) && (s = r), ke(a) && (s = a), [o.key || "", i, o, s];
}
function wc(e, t, n) {
  const r = e;
  for (const a in n) {
    const o = `${t}__${a}`;
    r.__datetimeFormatters.has(o) && r.__datetimeFormatters.delete(o);
  }
}
function Ec(e, ...t) {
  const { numberFormats: n, unresolving: r, fallbackLocale: a, onWarn: o, localeFallbacker: s } = e, { __numberFormatters: i } = e;
  if (process.env.NODE_ENV !== "production" && !Tp.numberFormat)
    return o(pr(pt.CANNOT_FORMAT_NUMBER)), Yo;
  const [l, c, u, d] = ti(...t), f = Ce(u.missingWarn) ? u.missingWarn : e.missingWarn, p = Ce(u.fallbackWarn) ? u.fallbackWarn : e.fallbackWarn, h = !!u.part, g = pl(e, u), y = s(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    a,
    g
  );
  if (!ne(l) || l === "")
    return new Intl.NumberFormat(g, d).format(c);
  let v = {}, b, E = null, _ = g, T = null;
  const D = "number format";
  for (let L = 0; L < y.length; L++) {
    if (b = T = y[L], process.env.NODE_ENV !== "production" && g !== b && as(p, l) && o(pr(pt.FALLBACK_TO_NUMBER_FORMAT, {
      key: l,
      target: b
    })), process.env.NODE_ENV !== "production" && g !== b) {
      const x = e.__v_emitter;
      x && x.emit("fallback", {
        type: D,
        key: l,
        from: _,
        to: T,
        groupId: `${D}:${l}`
      });
    }
    if (v = n[b] || {}, E = v[l], ke(E))
      break;
    vl(e, l, b, f, D), _ = T;
  }
  if (!ke(E) || !ne(b))
    return r ? rs : l;
  let N = `${b}__${l}`;
  ns(d) || (N = `${N}__${JSON.stringify(d)}`);
  let I = i.get(N);
  return I || (I = new Intl.NumberFormat(b, lt({}, E, d)), i.set(N, I)), h ? I.formatToParts(c) : I.format(c);
}
const Ap = [
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
function ti(...e) {
  const [t, n, r, a] = e, o = {};
  let s = {};
  if (!ot(t))
    throw sr(St.INVALID_ARGUMENT);
  const i = t;
  return ne(n) ? o.key = n : ke(n) && Object.keys(n).forEach((l) => {
    Ap.includes(l) ? s[l] = n[l] : o[l] = n[l];
  }), ne(r) ? o.locale = r : ke(r) && (s = r), ke(a) && (s = a), [o.key || "", i, o, s];
}
function Oc(e, t, n) {
  const r = e;
  for (const a in n) {
    const o = `${t}__${a}`;
    r.__numberFormatters.has(o) && r.__numberFormatters.delete(o);
  }
}
C2();
function gI() {
  return Np().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function Np() {
  return typeof navigator < "u" && typeof window < "u" ? window : typeof global < "u" ? global : {};
}
const yI = typeof Proxy == "function", bI = "devtools-plugin:setup", _I = "plugin:settings:set";
let kr, ni;
function wI() {
  var e;
  return kr !== void 0 || (typeof window < "u" && window.performance ? (kr = !0, ni = window.performance) : typeof global < "u" && (!((e = global.perf_hooks) === null || e === void 0) && e.performance) ? (kr = !0, ni = global.perf_hooks.performance) : kr = !1), kr;
}
function EI() {
  return wI() ? ni.now() : Date.now();
}
class OI {
  constructor(t, n) {
    this.target = null, this.targetQueue = [], this.onQueue = [], this.plugin = t, this.hook = n;
    const r = {};
    if (t.settings)
      for (const s in t.settings) {
        const i = t.settings[s];
        r[s] = i.defaultValue;
      }
    const a = `__vue-devtools-plugin-settings__${t.id}`;
    let o = Object.assign({}, r);
    try {
      const s = localStorage.getItem(a), i = JSON.parse(s);
      Object.assign(o, i);
    } catch {
    }
    this.fallbacks = {
      getSettings() {
        return o;
      },
      setSettings(s) {
        try {
          localStorage.setItem(a, JSON.stringify(s));
        } catch {
        }
        o = s;
      },
      now() {
        return EI();
      }
    }, n && n.on(_I, (s, i) => {
      s === this.plugin.id && this.fallbacks.setSettings(i);
    }), this.proxiedOn = new Proxy({}, {
      get: (s, i) => this.target ? this.target.on[i] : (...l) => {
        this.onQueue.push({
          method: i,
          args: l
        });
      }
    }), this.proxiedTarget = new Proxy({}, {
      get: (s, i) => this.target ? this.target[i] : i === "on" ? this.proxiedOn : Object.keys(this.fallbacks).includes(i) ? (...l) => (this.targetQueue.push({
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
function DI(e, t) {
  const n = e, r = Np(), a = gI(), o = yI && n.enableEarlyProxy;
  if (a && (r.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !o))
    a.emit(bI, e, t);
  else {
    const s = o ? new OI(n, a) : null;
    (r.__VUE_DEVTOOLS_PLUGINS__ = r.__VUE_DEVTOOLS_PLUGINS__ || []).push({
      pluginDescriptor: n,
      setupFn: t,
      proxy: s
    }), s && t(s.proxiedTarget);
  }
}
/*!
  * vue-i18n v9.5.0
  * (c) 2023 kazuya kawaguchi
  * Released under the MIT License.
  */
const kI = "9.5.0";
function $I() {
  typeof __VUE_I18N_FULL_INSTALL__ != "boolean" && (_n().__VUE_I18N_FULL_INSTALL__ = !0), typeof __VUE_I18N_LEGACY_API__ != "boolean" && (_n().__VUE_I18N_LEGACY_API__ = !0), typeof __INTLIFY_JIT_COMPILATION__ != "boolean" && (_n().__INTLIFY_JIT_COMPILATION__ = !1), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (_n().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1), typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (_n().__INTLIFY_PROD_DEVTOOLS__ = !1);
}
const Pp = pt.__EXTEND_POINT__, Vn = cl(Pp), Qe = {
  FALLBACK_TO_ROOT: Pp,
  NOT_SUPPORTED_PRESERVE: Vn(),
  NOT_SUPPORTED_FORMATTER: Vn(),
  NOT_SUPPORTED_PRESERVE_DIRECTIVE: Vn(),
  NOT_SUPPORTED_GET_CHOICE_INDEX: Vn(),
  COMPONENT_NAME_LEGACY_COMPATIBLE: Vn(),
  NOT_FOUND_PARENT_SCOPE: Vn(),
  IGNORE_OBJ_FLATTEN: Vn(),
  NOTICE_DROP_ALLOW_COMPOSITION: Vn()
  // 17
}, xI = {
  [Qe.FALLBACK_TO_ROOT]: "Fall back to {type} '{key}' with root locale.",
  [Qe.NOT_SUPPORTED_PRESERVE]: "Not supported 'preserve'.",
  [Qe.NOT_SUPPORTED_FORMATTER]: "Not supported 'formatter'.",
  [Qe.NOT_SUPPORTED_PRESERVE_DIRECTIVE]: "Not supported 'preserveDirectiveContent'.",
  [Qe.NOT_SUPPORTED_GET_CHOICE_INDEX]: "Not supported 'getChoiceIndex'.",
  [Qe.COMPONENT_NAME_LEGACY_COMPATIBLE]: "Component name legacy compatible: '{name}' -> 'i18n'",
  [Qe.NOT_FOUND_PARENT_SCOPE]: "Not found parent scope. use the global scope.",
  [Qe.IGNORE_OBJ_FLATTEN]: "Ignore object flatten: '{key}' key has an string value",
  [Qe.NOTICE_DROP_ALLOW_COMPOSITION]: "'allowComposition' option will be dropped in the next major version. For more information, please see 👉 https://tinyurl.com/2p97mcze"
};
function Dt(e, ...t) {
  return ll(xI[e], ...t);
}
const Sp = St.__EXTEND_POINT__, ht = cl(Sp), Se = {
  // composer module errors
  UNEXPECTED_RETURN_TYPE: Sp,
  // legacy module errors
  INVALID_ARGUMENT: ht(),
  // i18n module errors
  MUST_BE_CALL_SETUP_TOP: ht(),
  NOT_INSTALLED: ht(),
  NOT_AVAILABLE_IN_LEGACY_MODE: ht(),
  // directive module errors
  REQUIRED_VALUE: ht(),
  INVALID_VALUE: ht(),
  // vue-devtools errors
  CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN: ht(),
  NOT_INSTALLED_WITH_PROVIDE: ht(),
  // unexpected error
  UNEXPECTED_ERROR: ht(),
  // not compatible legacy vue-i18n constructor
  NOT_COMPATIBLE_LEGACY_VUE_I18N: ht(),
  // bridge support vue 2.x only
  BRIDGE_SUPPORT_VUE_2_ONLY: ht(),
  // need to define `i18n` option in `allowComposition: true` and `useScope: 'local' at `useI18n``
  MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION: ht(),
  // Not available Compostion API in Legacy API mode. Please make sure that the legacy API mode is working properly
  NOT_AVAILABLE_COMPOSITION_IN_LEGACY: ht(),
  // for enhancement
  __EXTEND_POINT__: ht()
  // 37
};
function rt(e, ...t) {
  return la(e, null, process.env.NODE_ENV !== "production" ? { messages: TI, args: t } : void 0);
}
const TI = {
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
}, ri = /* @__PURE__ */ mn("__translateVNode"), ai = /* @__PURE__ */ mn("__datetimeParts"), oi = /* @__PURE__ */ mn("__numberParts"), mr = /* @__PURE__ */ mn("__enableEmitter"), La = /* @__PURE__ */ mn("__disableEmitter"), Ip = mn("__setPluralRules"), Mp = /* @__PURE__ */ mn("__injectWithOption"), si = /* @__PURE__ */ mn("__dispose");
function ii(e) {
  if (!Fe(e))
    return e;
  for (const t in e)
    if (ul(e, t))
      if (!t.includes("."))
        Fe(e[t]) && ii(e[t]);
      else {
        const n = t.split("."), r = n.length - 1;
        let a = e, o = !1;
        for (let s = 0; s < r; s++) {
          if (n[s] in a || (a[n[s]] = {}), !Fe(a[n[s]])) {
            process.env.NODE_ENV !== "production" && it(Dt(Qe.IGNORE_OBJ_FLATTEN, {
              key: n[s]
            })), o = !0;
            break;
          }
          a = a[n[s]];
        }
        o || (a[n[r]] = e[t], delete e[t]), Fe(a[n[r]]) && ii(a[n[r]]);
      }
  return e;
}
function os(e, t) {
  const { messages: n, __i18n: r, messageResolver: a, flatJson: o } = t, s = ke(n) ? n : ze(r) ? {} : { [e]: {} };
  if (ze(r) && r.forEach((i) => {
    if ("locale" in i && "resource" in i) {
      const { locale: l, resource: c } = i;
      l ? (s[l] = s[l] || {}, $a(c, s[l])) : $a(c, s);
    } else
      ne(i) && $a(JSON.parse(i), s);
  }), a == null && o)
    for (const i in s)
      ul(s, i) && ii(s[i]);
  return s;
}
const so = (e) => !Fe(e) || ze(e);
function $a(e, t) {
  if (so(e) || so(t))
    throw rt(Se.INVALID_VALUE);
  for (const n in e)
    ul(e, n) && (so(e[n]) || so(t[n]) ? t[n] = e[n] : $a(e[n], t[n]));
}
function Lp(e) {
  return e.type;
}
function Rp(e, t, n) {
  let r = Fe(t.messages) ? t.messages : {};
  "__i18nGlobal" in n && (r = os(e.locale.value, {
    messages: r,
    __i18n: n.__i18nGlobal
  }));
  const a = Object.keys(r);
  a.length && a.forEach((o) => {
    e.mergeLocaleMessage(o, r[o]);
  });
  {
    if (Fe(t.datetimeFormats)) {
      const o = Object.keys(t.datetimeFormats);
      o.length && o.forEach((s) => {
        e.mergeDateTimeFormat(s, t.datetimeFormats[s]);
      });
    }
    if (Fe(t.numberFormats)) {
      const o = Object.keys(t.numberFormats);
      o.length && o.forEach((s) => {
        e.mergeNumberFormat(s, t.numberFormats[s]);
      });
    }
  }
}
function Dc(e) {
  return se(gv, null, e, 0);
}
const kc = "__INTLIFY_META__";
let $c = 0;
function xc(e) {
  return (t, n, r, a) => e(n, r, Rt() || void 0, a);
}
const CI = () => {
  const e = Rt();
  let t = null;
  return e && (t = Lp(e)[kc]) ? { [kc]: t } : null;
};
function ml(e = {}, t) {
  const { __root: n, __injectWithOption: r } = e, a = n === void 0;
  let o = Ce(e.inheritLocale) ? e.inheritLocale : !0;
  const s = Y(
    // prettier-ignore
    n && o ? n.locale.value : ne(e.locale) ? e.locale : Gr
  ), i = Y(
    // prettier-ignore
    n && o ? n.fallbackLocale.value : ne(e.fallbackLocale) || ze(e.fallbackLocale) || ke(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : s.value
  ), l = Y(os(s.value, e)), c = Y(ke(e.datetimeFormats) ? e.datetimeFormats : { [s.value]: {} }), u = Y(ke(e.numberFormats) ? e.numberFormats : { [s.value]: {} });
  let d = n ? n.missingWarn : Ce(e.missingWarn) || Xn(e.missingWarn) ? e.missingWarn : !0, f = n ? n.fallbackWarn : Ce(e.fallbackWarn) || Xn(e.fallbackWarn) ? e.fallbackWarn : !0, p = n ? n.fallbackRoot : Ce(e.fallbackRoot) ? e.fallbackRoot : !0, h = !!e.fallbackFormat, g = Ze(e.missing) ? e.missing : null, y = Ze(e.missing) ? xc(e.missing) : null, v = Ze(e.postTranslation) ? e.postTranslation : null, b = n ? n.warnHtmlMessage : Ce(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, E = !!e.escapeParameter;
  const _ = n ? n.modifiers : ke(e.modifiers) ? e.modifiers : {};
  let T = e.pluralRules || n && n.pluralRules, D;
  D = (() => {
    a && vc(null);
    const U = {
      version: kI,
      locale: s.value,
      fallbackLocale: i.value,
      messages: l.value,
      modifiers: _,
      pluralRules: T,
      missing: y === null ? void 0 : y,
      missingWarn: d,
      fallbackWarn: f,
      fallbackFormat: h,
      unresolving: !0,
      postTranslation: v === null ? void 0 : v,
      warnHtmlMessage: b,
      escapeParameter: E,
      messageResolver: e.messageResolver,
      messageCompiler: e.messageCompiler,
      __meta: { framework: "vue" }
    };
    U.datetimeFormats = c.value, U.numberFormats = u.value, U.__datetimeFormatters = ke(D) ? D.__datetimeFormatters : void 0, U.__numberFormatters = ke(D) ? D.__numberFormatters : void 0, process.env.NODE_ENV !== "production" && (U.__v_emitter = ke(D) ? D.__v_emitter : void 0);
    const q = sI(U);
    return a && vc(q), q;
  })(), ba(D, s.value, i.value);
  function I() {
    return [
      s.value,
      i.value,
      l.value,
      c.value,
      u.value
    ];
  }
  const L = C({
    get: () => s.value,
    set: (U) => {
      s.value = U, D.locale = s.value;
    }
  }), x = C({
    get: () => i.value,
    set: (U) => {
      i.value = U, D.fallbackLocale = i.value, ba(D, s.value, U);
    }
  }), R = C(() => l.value), P = /* @__PURE__ */ C(() => c.value), G = /* @__PURE__ */ C(() => u.value);
  function ee() {
    return Ze(v) ? v : null;
  }
  function X(U) {
    v = U, D.postTranslation = U;
  }
  function ae() {
    return g;
  }
  function le(U) {
    U !== null && (y = xc(U)), g = U, D.missing = y;
  }
  function Ee(U, q) {
    return U !== "translate" || !q.resolvedMessage;
  }
  const ve = (U, q, Xe, Je, tn, In) => {
    I();
    let Ut;
    try {
      (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) && pc(CI()), a || (D.fallbackContext = n ? oI() : void 0), Ut = U(D);
    } finally {
      (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) && pc(null), a || (D.fallbackContext = void 0);
    }
    if (ot(Ut) && Ut === rs) {
      const [jt, tr] = q();
      if (process.env.NODE_ENV !== "production" && n && ne(jt) && Ee(Xe, tr) && (p && (as(f, jt) || wp(d, jt)) && it(Dt(Qe.FALLBACK_TO_ROOT, {
        key: jt,
        type: Xe
      })), process.env.NODE_ENV !== "production")) {
        const { __v_emitter: wr } = D;
        wr && p && wr.emit("fallback", {
          type: Xe,
          key: jt,
          to: "global",
          groupId: `${Xe}:${jt}`
        });
      }
      return n && p ? Je(n) : tn(jt);
    } else {
      if (In(Ut))
        return Ut;
      throw rt(Se.UNEXPECTED_RETURN_TYPE);
    }
  };
  function W(...U) {
    return ve((q) => Reflect.apply(yc, null, [q, ...U]), () => Qs(...U), "translate", (q) => Reflect.apply(q.t, q, [...U]), (q) => q, (q) => ne(q));
  }
  function ce(...U) {
    const [q, Xe, Je] = U;
    if (Je && !Fe(Je))
      throw rt(Se.INVALID_ARGUMENT);
    return W(q, Xe, lt({ resolvedMessage: !0 }, Je || {}));
  }
  function Me(...U) {
    return ve((q) => Reflect.apply(_c, null, [q, ...U]), () => ei(...U), "datetime format", (q) => Reflect.apply(q.d, q, [...U]), () => Yo, (q) => ne(q));
  }
  function Ye(...U) {
    return ve((q) => Reflect.apply(Ec, null, [q, ...U]), () => ti(...U), "number format", (q) => Reflect.apply(q.n, q, [...U]), () => Yo, (q) => ne(q));
  }
  function oe(U) {
    return U.map((q) => ne(q) || ot(q) || Ce(q) ? Dc(String(q)) : q);
  }
  const V = {
    normalize: oe,
    interpolate: (U) => U,
    type: "vnode"
  };
  function B(...U) {
    return ve(
      (q) => {
        let Xe;
        const Je = q;
        try {
          Je.processor = V, Xe = Reflect.apply(yc, null, [Je, ...U]);
        } finally {
          Je.processor = null;
        }
        return Xe;
      },
      () => Qs(...U),
      "translate",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (q) => q[ri](...U),
      (q) => [Dc(q)],
      (q) => ze(q)
    );
  }
  function te(...U) {
    return ve(
      (q) => Reflect.apply(Ec, null, [q, ...U]),
      () => ti(...U),
      "number format",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (q) => q[oi](...U),
      () => [],
      (q) => ne(q) || ze(q)
    );
  }
  function z(...U) {
    return ve(
      (q) => Reflect.apply(_c, null, [q, ...U]),
      () => ei(...U),
      "datetime format",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (q) => q[ai](...U),
      () => [],
      (q) => ne(q) || ze(q)
    );
  }
  function S(U) {
    T = U, D.pluralRules = T;
  }
  function H(U, q) {
    if (!U)
      return !1;
    const Xe = ne(q) ? q : s.value, Je = w(Xe);
    return D.messageResolver(Je, U) !== null;
  }
  function ue(U) {
    let q = null;
    const Xe = mp(D, i.value, s.value);
    for (let Je = 0; Je < Xe.length; Je++) {
      const tn = l.value[Xe[Je]] || {}, In = D.messageResolver(tn, U);
      if (In != null) {
        q = In;
        break;
      }
    }
    return q;
  }
  function k(U) {
    const q = ue(U);
    return q ?? (n ? n.tm(U) || {} : {});
  }
  function w(U) {
    return l.value[U] || {};
  }
  function F(U, q) {
    l.value[U] = q, D.messages = l.value;
  }
  function re(U, q) {
    l.value[U] = l.value[U] || {}, $a(q, l.value[U]), D.messages = l.value;
  }
  function pe(U) {
    return c.value[U] || {};
  }
  function Te(U, q) {
    c.value[U] = q, D.datetimeFormats = c.value, wc(D, U, q);
  }
  function ut(U, q) {
    c.value[U] = lt(c.value[U] || {}, q), D.datetimeFormats = c.value, wc(D, U, q);
  }
  function et(U) {
    return u.value[U] || {};
  }
  function Tt(U, q) {
    u.value[U] = q, D.numberFormats = u.value, Oc(D, U, q);
  }
  function en(U, q) {
    u.value[U] = lt(u.value[U] || {}, q), D.numberFormats = u.value, Oc(D, U, q);
  }
  $c++, n && dn && (_e(n.locale, (U) => {
    o && (s.value = U, D.locale = U, ba(D, s.value, i.value));
  }), _e(n.fallbackLocale, (U) => {
    o && (i.value = U, D.fallbackLocale = U, ba(D, s.value, i.value));
  }));
  const Ue = {
    id: $c,
    locale: L,
    fallbackLocale: x,
    get inheritLocale() {
      return o;
    },
    set inheritLocale(U) {
      o = U, U && n && (s.value = n.locale.value, i.value = n.fallbackLocale.value, ba(D, s.value, i.value));
    },
    get availableLocales() {
      return Object.keys(l.value).sort();
    },
    messages: R,
    get modifiers() {
      return _;
    },
    get pluralRules() {
      return T || {};
    },
    get isGlobal() {
      return a;
    },
    get missingWarn() {
      return d;
    },
    set missingWarn(U) {
      d = U, D.missingWarn = d;
    },
    get fallbackWarn() {
      return f;
    },
    set fallbackWarn(U) {
      f = U, D.fallbackWarn = f;
    },
    get fallbackRoot() {
      return p;
    },
    set fallbackRoot(U) {
      p = U;
    },
    get fallbackFormat() {
      return h;
    },
    set fallbackFormat(U) {
      h = U, D.fallbackFormat = h;
    },
    get warnHtmlMessage() {
      return b;
    },
    set warnHtmlMessage(U) {
      b = U, D.warnHtmlMessage = U;
    },
    get escapeParameter() {
      return E;
    },
    set escapeParameter(U) {
      E = U, D.escapeParameter = U;
    },
    t: W,
    getLocaleMessage: w,
    setLocaleMessage: F,
    mergeLocaleMessage: re,
    getPostTranslationHandler: ee,
    setPostTranslationHandler: X,
    getMissingHandler: ae,
    setMissingHandler: le,
    [Ip]: S
  };
  return Ue.datetimeFormats = P, Ue.numberFormats = G, Ue.rt = ce, Ue.te = H, Ue.tm = k, Ue.d = Me, Ue.n = Ye, Ue.getDateTimeFormat = pe, Ue.setDateTimeFormat = Te, Ue.mergeDateTimeFormat = ut, Ue.getNumberFormat = et, Ue.setNumberFormat = Tt, Ue.mergeNumberFormat = en, Ue[Mp] = r, Ue[ri] = B, Ue[ai] = z, Ue[oi] = te, process.env.NODE_ENV !== "production" && (Ue[mr] = (U) => {
    D.__v_emitter = U;
  }, Ue[La] = () => {
    D.__v_emitter = void 0;
  }), Ue;
}
function AI(e) {
  const t = ne(e.locale) ? e.locale : Gr, n = ne(e.fallbackLocale) || ze(e.fallbackLocale) || ke(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : t, r = Ze(e.missing) ? e.missing : void 0, a = Ce(e.silentTranslationWarn) || Xn(e.silentTranslationWarn) ? !e.silentTranslationWarn : !0, o = Ce(e.silentFallbackWarn) || Xn(e.silentFallbackWarn) ? !e.silentFallbackWarn : !0, s = Ce(e.fallbackRoot) ? e.fallbackRoot : !0, i = !!e.formatFallbackMessages, l = ke(e.modifiers) ? e.modifiers : {}, c = e.pluralizationRules, u = Ze(e.postTranslation) ? e.postTranslation : void 0, d = ne(e.warnHtmlInMessage) ? e.warnHtmlInMessage !== "off" : !0, f = !!e.escapeParameterHtml, p = Ce(e.sync) ? e.sync : !0;
  process.env.NODE_ENV !== "production" && e.formatter && it(Dt(Qe.NOT_SUPPORTED_FORMATTER)), process.env.NODE_ENV !== "production" && e.preserveDirectiveContent && it(Dt(Qe.NOT_SUPPORTED_PRESERVE_DIRECTIVE));
  let h = e.messages;
  if (ke(e.sharedMessages)) {
    const T = e.sharedMessages;
    h = Object.keys(T).reduce((N, I) => {
      const L = N[I] || (N[I] = {});
      return lt(L, T[I]), N;
    }, h || {});
  }
  const { __i18n: g, __root: y, __injectWithOption: v } = e, b = e.datetimeFormats, E = e.numberFormats, _ = e.flatJson;
  return {
    locale: t,
    fallbackLocale: n,
    messages: h,
    flatJson: _,
    datetimeFormats: b,
    numberFormats: E,
    missing: r,
    missingWarn: a,
    fallbackWarn: o,
    fallbackRoot: s,
    fallbackFormat: i,
    modifiers: l,
    pluralRules: c,
    postTranslation: u,
    warnHtmlMessage: d,
    escapeParameter: f,
    messageResolver: e.messageResolver,
    inheritLocale: p,
    __i18n: g,
    __root: y,
    __injectWithOption: v
  };
}
function li(e = {}, t) {
  {
    const n = ml(AI(e)), { __extender: r } = e, a = {
      // id
      id: n.id,
      // locale
      get locale() {
        return n.locale.value;
      },
      set locale(o) {
        n.locale.value = o;
      },
      // fallbackLocale
      get fallbackLocale() {
        return n.fallbackLocale.value;
      },
      set fallbackLocale(o) {
        n.fallbackLocale.value = o;
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
        return process.env.NODE_ENV !== "production" && it(Dt(Qe.NOT_SUPPORTED_FORMATTER)), {
          interpolate() {
            return [];
          }
        };
      },
      set formatter(o) {
        process.env.NODE_ENV !== "production" && it(Dt(Qe.NOT_SUPPORTED_FORMATTER));
      },
      // missing
      get missing() {
        return n.getMissingHandler();
      },
      set missing(o) {
        n.setMissingHandler(o);
      },
      // silentTranslationWarn
      get silentTranslationWarn() {
        return Ce(n.missingWarn) ? !n.missingWarn : n.missingWarn;
      },
      set silentTranslationWarn(o) {
        n.missingWarn = Ce(o) ? !o : o;
      },
      // silentFallbackWarn
      get silentFallbackWarn() {
        return Ce(n.fallbackWarn) ? !n.fallbackWarn : n.fallbackWarn;
      },
      set silentFallbackWarn(o) {
        n.fallbackWarn = Ce(o) ? !o : o;
      },
      // modifiers
      get modifiers() {
        return n.modifiers;
      },
      // formatFallbackMessages
      get formatFallbackMessages() {
        return n.fallbackFormat;
      },
      set formatFallbackMessages(o) {
        n.fallbackFormat = o;
      },
      // postTranslation
      get postTranslation() {
        return n.getPostTranslationHandler();
      },
      set postTranslation(o) {
        n.setPostTranslationHandler(o);
      },
      // sync
      get sync() {
        return n.inheritLocale;
      },
      set sync(o) {
        n.inheritLocale = o;
      },
      // warnInHtmlMessage
      get warnHtmlInMessage() {
        return n.warnHtmlMessage ? "warn" : "off";
      },
      set warnHtmlInMessage(o) {
        n.warnHtmlMessage = o !== "off";
      },
      // escapeParameterHtml
      get escapeParameterHtml() {
        return n.escapeParameter;
      },
      set escapeParameterHtml(o) {
        n.escapeParameter = o;
      },
      // preserveDirectiveContent
      get preserveDirectiveContent() {
        return process.env.NODE_ENV !== "production" && it(Dt(Qe.NOT_SUPPORTED_PRESERVE_DIRECTIVE)), !0;
      },
      set preserveDirectiveContent(o) {
        process.env.NODE_ENV !== "production" && it(Dt(Qe.NOT_SUPPORTED_PRESERVE_DIRECTIVE));
      },
      // pluralizationRules
      get pluralizationRules() {
        return n.pluralRules || {};
      },
      // for internal
      __composer: n,
      // t
      t(...o) {
        const [s, i, l] = o, c = {};
        let u = null, d = null;
        if (!ne(s))
          throw rt(Se.INVALID_ARGUMENT);
        const f = s;
        return ne(i) ? c.locale = i : ze(i) ? u = i : ke(i) && (d = i), ze(l) ? u = l : ke(l) && (d = l), Reflect.apply(n.t, n, [
          f,
          u || d || {},
          c
        ]);
      },
      rt(...o) {
        return Reflect.apply(n.rt, n, [...o]);
      },
      // tc
      tc(...o) {
        const [s, i, l] = o, c = { plural: 1 };
        let u = null, d = null;
        if (!ne(s))
          throw rt(Se.INVALID_ARGUMENT);
        const f = s;
        return ne(i) ? c.locale = i : ot(i) ? c.plural = i : ze(i) ? u = i : ke(i) && (d = i), ne(l) ? c.locale = l : ze(l) ? u = l : ke(l) && (d = l), Reflect.apply(n.t, n, [
          f,
          u || d || {},
          c
        ]);
      },
      // te
      te(o, s) {
        return n.te(o, s);
      },
      // tm
      tm(o) {
        return n.tm(o);
      },
      // getLocaleMessage
      getLocaleMessage(o) {
        return n.getLocaleMessage(o);
      },
      // setLocaleMessage
      setLocaleMessage(o, s) {
        n.setLocaleMessage(o, s);
      },
      // mergeLocaleMessage
      mergeLocaleMessage(o, s) {
        n.mergeLocaleMessage(o, s);
      },
      // d
      d(...o) {
        return Reflect.apply(n.d, n, [...o]);
      },
      // getDateTimeFormat
      getDateTimeFormat(o) {
        return n.getDateTimeFormat(o);
      },
      // setDateTimeFormat
      setDateTimeFormat(o, s) {
        n.setDateTimeFormat(o, s);
      },
      // mergeDateTimeFormat
      mergeDateTimeFormat(o, s) {
        n.mergeDateTimeFormat(o, s);
      },
      // n
      n(...o) {
        return Reflect.apply(n.n, n, [...o]);
      },
      // getNumberFormat
      getNumberFormat(o) {
        return n.getNumberFormat(o);
      },
      // setNumberFormat
      setNumberFormat(o, s) {
        n.setNumberFormat(o, s);
      },
      // mergeNumberFormat
      mergeNumberFormat(o, s) {
        n.mergeNumberFormat(o, s);
      },
      // getChoiceIndex
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      getChoiceIndex(o, s) {
        return process.env.NODE_ENV !== "production" && it(Dt(Qe.NOT_SUPPORTED_GET_CHOICE_INDEX)), -1;
      }
    };
    return a.__extender = r, process.env.NODE_ENV !== "production" && (a.__enableEmitter = (o) => {
      const s = n;
      s[mr] && s[mr](o);
    }, a.__disableEmitter = () => {
      const o = n;
      o[La] && o[La]();
    }), a;
  }
}
const hl = {
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
function NI({ slots: e }, t) {
  return t.length === 1 && t[0] === "default" ? (e.default ? e.default() : []).reduce((r, a) => [
    ...r,
    // prettier-ignore
    ...a.type === ie ? a.children : [a]
  ], []) : t.reduce((n, r) => {
    const a = e[r];
    return a && (n[r] = a()), n;
  }, {});
}
function Fp(e) {
  return ie;
}
const PI = /* @__PURE__ */ fe({
  /* eslint-disable */
  name: "i18n-t",
  props: lt({
    keypath: {
      type: String,
      required: !0
    },
    plural: {
      type: [Number, String],
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      validator: (e) => ot(e) || !isNaN(e)
    }
  }, hl),
  /* eslint-enable */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setup(e, t) {
    const { slots: n, attrs: r } = t, a = e.i18n || yl({
      useScope: e.scope,
      __useComponent: !0
    });
    return () => {
      const o = Object.keys(n).filter((d) => d !== "_"), s = {};
      e.locale && (s.locale = e.locale), e.plural !== void 0 && (s.plural = ne(e.plural) ? +e.plural : e.plural);
      const i = NI(t, o), l = a[ri](e.keypath, i, s), c = lt({}, r), u = ne(e.tag) || Fe(e.tag) ? e.tag : Fp();
      return Kt(u, c, l);
    };
  }
}), ks = PI;
function SI(e) {
  return ze(e) && !ne(e[0]);
}
function Vp(e, t, n, r) {
  const { slots: a, attrs: o } = t;
  return () => {
    const s = { part: !0 };
    let i = {};
    e.locale && (s.locale = e.locale), ne(e.format) ? s.key = e.format : Fe(e.format) && (ne(e.format.key) && (s.key = e.format.key), i = Object.keys(e.format).reduce((f, p) => n.includes(p) ? lt({}, f, { [p]: e.format[p] }) : f, {}));
    const l = r(e.value, s, i);
    let c = [s.key];
    ze(l) ? c = l.map((f, p) => {
      const h = a[f.type], g = h ? h({ [f.type]: f.value, index: p, parts: l }) : [f.value];
      return SI(g) && (g[0].key = `${f.type}-${p}`), g;
    }) : ne(l) && (c = [l]);
    const u = lt({}, o), d = ne(e.tag) || Fe(e.tag) ? e.tag : Fp();
    return Kt(d, u, c);
  };
}
const II = /* @__PURE__ */ fe({
  /* eslint-disable */
  name: "i18n-n",
  props: lt({
    value: {
      type: Number,
      required: !0
    },
    format: {
      type: [String, Object]
    }
  }, hl),
  /* eslint-enable */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setup(e, t) {
    const n = e.i18n || yl({
      useScope: "parent",
      __useComponent: !0
    });
    return Vp(e, t, Ap, (...r) => (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      n[oi](...r)
    ));
  }
}), Tc = II, MI = /* @__PURE__ */ fe({
  /* eslint-disable */
  name: "i18n-d",
  props: lt({
    value: {
      type: [Number, Date],
      required: !0
    },
    format: {
      type: [String, Object]
    }
  }, hl),
  /* eslint-enable */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setup(e, t) {
    const n = e.i18n || yl({
      useScope: "parent",
      __useComponent: !0
    });
    return Vp(e, t, Cp, (...r) => (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      n[ai](...r)
    ));
  }
}), Cc = MI;
function LI(e, t) {
  const n = e;
  if (e.mode === "composition")
    return n.__getInstance(t) || e.global;
  {
    const r = n.__getInstance(t);
    return r != null ? r.__composer : e.global.__composer;
  }
}
function RI(e) {
  const t = (s) => {
    const { instance: i, modifiers: l, value: c } = s;
    if (!i || !i.$)
      throw rt(Se.UNEXPECTED_ERROR);
    const u = LI(e, i.$);
    process.env.NODE_ENV !== "production" && l.preserve && it(Dt(Qe.NOT_SUPPORTED_PRESERVE));
    const d = Ac(c);
    return [
      Reflect.apply(u.t, u, [...Nc(d)]),
      u
    ];
  };
  return {
    created: (s, i) => {
      const [l, c] = t(i);
      dn && e.global === c && (s.__i18nWatcher = _e(c.locale, () => {
        i.instance && i.instance.$forceUpdate();
      })), s.__composer = c, s.textContent = l;
    },
    unmounted: (s) => {
      dn && s.__i18nWatcher && (s.__i18nWatcher(), s.__i18nWatcher = void 0, delete s.__i18nWatcher), s.__composer && (s.__composer = void 0, delete s.__composer);
    },
    beforeUpdate: (s, { value: i }) => {
      if (s.__composer) {
        const l = s.__composer, c = Ac(i);
        s.textContent = Reflect.apply(l.t, l, [
          ...Nc(c)
        ]);
      }
    },
    getSSRProps: (s) => {
      const [i] = t(s);
      return { textContent: i };
    }
  };
}
function Ac(e) {
  if (ne(e))
    return { path: e };
  if (ke(e)) {
    if (!("path" in e))
      throw rt(Se.REQUIRED_VALUE, "path");
    return e;
  } else
    throw rt(Se.INVALID_VALUE);
}
function Nc(e) {
  const { path: t, locale: n, args: r, choice: a, plural: o } = e, s = {}, i = r || {};
  return ne(n) && (s.locale = n), ot(a) && (s.plural = a), ot(o) && (s.plural = o), [t, i, s];
}
function FI(e, t, ...n) {
  const r = ke(n[0]) ? n[0] : {}, a = !!r.useI18nComponentName, o = Ce(r.globalInstall) ? r.globalInstall : !0;
  process.env.NODE_ENV !== "production" && o && a && it(Dt(Qe.COMPONENT_NAME_LEGACY_COMPATIBLE, {
    name: ks.name
  })), o && ([a ? "i18n" : ks.name, "I18nT"].forEach((s) => e.component(s, ks)), [Tc.name, "I18nN"].forEach((s) => e.component(s, Tc)), [Cc.name, "I18nD"].forEach((s) => e.component(s, Cc))), e.directive("t", RI(t));
}
const $s = {
  "vue-devtools-plugin-vue-i18n": "Vue I18n devtools",
  "vue-i18n-resource-inspector": "I18n Resources",
  "vue-i18n-timeline": "Vue I18n"
}, VI = {
  "vue-i18n-resource-inspector": "Search for scopes ..."
}, BI = {
  "vue-i18n-timeline": 16764185
}, Bp = "vue-i18n: composer properties";
let ui;
async function YI(e, t) {
  return new Promise((n, r) => {
    try {
      DI({
        id: "vue-devtools-plugin-vue-i18n",
        label: $s[
          "vue-devtools-plugin-vue-i18n"
          /* VueDevToolsIDs.PLUGIN */
        ],
        packageName: "vue-i18n",
        homepage: "https://vue-i18n.intlify.dev",
        logo: "https://vue-i18n.intlify.dev/vue-i18n-devtools-logo.png",
        componentStateTypes: [Bp],
        app: e
        // eslint-disable-line @typescript-eslint/no-explicit-any
      }, (a) => {
        ui = a, a.on.visitComponentTree(({ componentInstance: s, treeNode: i }) => {
          UI(s, i, t);
        }), a.on.inspectComponent(({ componentInstance: s, instanceData: i }) => {
          s.vnode.el && s.vnode.el.__VUE_I18N__ && i && (t.mode === "legacy" ? s.vnode.el.__VUE_I18N__ !== t.global.__composer && Pc(i, s.vnode.el.__VUE_I18N__) : Pc(i, s.vnode.el.__VUE_I18N__));
        }), a.addInspector({
          id: "vue-i18n-resource-inspector",
          label: $s[
            "vue-i18n-resource-inspector"
            /* VueDevToolsIDs.CUSTOM_INSPECTOR */
          ],
          icon: "language",
          treeFilterPlaceholder: VI[
            "vue-i18n-resource-inspector"
            /* VueDevToolsIDs.CUSTOM_INSPECTOR */
          ]
        }), a.on.getInspectorTree((s) => {
          s.app === e && s.inspectorId === "vue-i18n-resource-inspector" && zI(s, t);
        });
        const o = /* @__PURE__ */ new Map();
        a.on.getInspectorState(async (s) => {
          if (s.app === e && s.inspectorId === "vue-i18n-resource-inspector")
            if (a.unhighlightElement(), qI(s, t), s.nodeId === "global") {
              if (!o.has(s.app)) {
                const [i] = await a.getComponentInstances(s.app);
                o.set(s.app, i);
              }
              a.highlightElement(o.get(s.app));
            } else {
              const i = KI(s.nodeId, t);
              i && a.highlightElement(i);
            }
        }), a.on.editInspectorState((s) => {
          s.app === e && s.inspectorId === "vue-i18n-resource-inspector" && XI(s, t);
        }), a.addTimelineLayer({
          id: "vue-i18n-timeline",
          label: $s[
            "vue-i18n-timeline"
            /* VueDevToolsIDs.TIMELINE */
          ],
          color: BI[
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
function Yp(e) {
  return e.type.name || e.type.displayName || e.type.__file || "Anonymous";
}
function UI(e, t, n) {
  const r = n.mode === "composition" ? n.global : n.global.__composer;
  if (e && e.vnode.el && e.vnode.el.__VUE_I18N__ && e.vnode.el.__VUE_I18N__ !== r) {
    const a = {
      label: `i18n (${Yp(e)} Scope)`,
      textColor: 0,
      backgroundColor: 16764185
    };
    t.tags.push(a);
  }
}
function Pc(e, t) {
  const n = Bp;
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
    value: gl(t.messages.value)
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
function gl(e) {
  const t = {};
  return Object.keys(e).forEach((n) => {
    const r = e[n];
    Ze(r) && "source" in r ? t[n] = GI(r) : vr(r) && r.loc && r.loc.source ? t[n] = r.loc.source : Fe(r) ? t[n] = gl(r) : t[n] = r;
  }), t;
}
const jI = {
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "&": "&amp;"
};
function HI(e) {
  return e.replace(/[<>"&]/g, WI);
}
function WI(e) {
  return jI[e] || e;
}
function GI(e) {
  return {
    _custom: {
      type: "function",
      display: `<span>ƒ</span> ${e.source ? `("${HI(e.source)}")` : "(?)"}`
    }
  };
}
function zI(e, t) {
  e.rootNodes.push({
    id: "global",
    label: "Global Scope"
  });
  const n = t.mode === "composition" ? t.global : t.global.__composer;
  for (const [r, a] of t.__instances) {
    const o = t.mode === "composition" ? a : a.__composer;
    n !== o && e.rootNodes.push({
      id: o.id.toString(),
      label: `${Yp(r)} Scope`
    });
  }
}
function KI(e, t) {
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
function Up(e, t) {
  if (e === "global")
    return t.mode === "composition" ? t.global : t.global.__composer;
  {
    const n = Array.from(t.__instances.values()).find((r) => r.id.toString() === e);
    return n ? t.mode === "composition" ? n : n.__composer : null;
  }
}
function qI(e, t) {
  const n = Up(e.nodeId, t);
  return n && (e.state = ZI(n)), null;
}
function ZI(e) {
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
  const a = "Locale messages info", o = [
    {
      type: a,
      key: "messages",
      editable: !1,
      value: gl(e.messages.value)
    }
  ];
  t[a] = o;
  {
    const s = "Datetime formats info", i = [
      {
        type: s,
        key: "datetimeFormats",
        editable: !1,
        value: e.datetimeFormats.value
      }
    ];
    t[s] = i;
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
function Ra(e, t) {
  if (ui) {
    let n;
    t && "groupId" in t && (n = t.groupId, delete t.groupId), ui.addTimelineEvent({
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
function XI(e, t) {
  const n = Up(e.nodeId, t);
  if (n) {
    const [r] = e.path;
    r === "locale" && ne(e.state.value) ? n.locale.value = e.state.value : r === "fallbackLocale" && (ne(e.state.value) || ze(e.state.value) || Fe(e.state.value)) ? n.fallbackLocale.value = e.state.value : r === "inheritLocale" && Ce(e.state.value) && (n.inheritLocale = e.state.value);
  }
}
function JI(e, t, n) {
  return {
    beforeCreate() {
      const r = Rt();
      if (!r)
        throw rt(Se.UNEXPECTED_ERROR);
      const a = this.$options;
      if (a.i18n) {
        const o = a.i18n;
        if (a.__i18n && (o.__i18n = a.__i18n), o.__root = t, this === this.$root)
          this.$i18n = Sc(e, o);
        else {
          o.__injectWithOption = !0, o.__extender = n.__vueI18nExtend, this.$i18n = li(o);
          const s = this.$i18n;
          s.__extender && (s.__disposer = s.__extender(this.$i18n));
        }
      } else if (a.__i18n)
        if (this === this.$root)
          this.$i18n = Sc(e, a);
        else {
          this.$i18n = li({
            __i18n: a.__i18n,
            __injectWithOption: !0,
            __extender: n.__vueI18nExtend,
            __root: t
          });
          const o = this.$i18n;
          o.__extender && (o.__disposer = o.__extender(this.$i18n));
        }
      else
        this.$i18n = e;
      a.__i18nGlobal && Rp(t, a, a), this.$t = (...o) => this.$i18n.t(...o), this.$rt = (...o) => this.$i18n.rt(...o), this.$tc = (...o) => this.$i18n.tc(...o), this.$te = (o, s) => this.$i18n.te(o, s), this.$d = (...o) => this.$i18n.d(...o), this.$n = (...o) => this.$i18n.n(...o), this.$tm = (o) => this.$i18n.tm(o), n.__setInstance(r, this.$i18n);
    },
    mounted() {
      if (process.env.NODE_ENV !== "production" && this.$el && this.$i18n) {
        const r = this.$i18n;
        this.$el.__VUE_I18N__ = r.__composer;
        const a = this.__v_emitter = dl();
        r.__enableEmitter && r.__enableEmitter(a), a.on("*", Ra);
      }
    },
    unmounted() {
      const r = Rt();
      if (!r)
        throw rt(Se.UNEXPECTED_ERROR);
      const a = this.$i18n;
      process.env.NODE_ENV !== "production" && this.$el && this.$el.__VUE_I18N__ && (this.__v_emitter && (this.__v_emitter.off("*", Ra), delete this.__v_emitter), this.$i18n && (a.__disableEmitter && a.__disableEmitter(), delete this.$el.__VUE_I18N__)), delete this.$t, delete this.$rt, delete this.$tc, delete this.$te, delete this.$d, delete this.$n, delete this.$tm, a.__disposer && (a.__disposer(), delete a.__disposer, delete a.__extender), n.__deleteInstance(r), delete this.$i18n;
    }
  };
}
function Sc(e, t) {
  e.locale = t.locale || e.locale, e.fallbackLocale = t.fallbackLocale || e.fallbackLocale, e.missing = t.missing || e.missing, e.silentTranslationWarn = t.silentTranslationWarn || e.silentFallbackWarn, e.silentFallbackWarn = t.silentFallbackWarn || e.silentFallbackWarn, e.formatFallbackMessages = t.formatFallbackMessages || e.formatFallbackMessages, e.postTranslation = t.postTranslation || e.postTranslation, e.warnHtmlInMessage = t.warnHtmlInMessage || e.warnHtmlInMessage, e.escapeParameterHtml = t.escapeParameterHtml || e.escapeParameterHtml, e.sync = t.sync || e.sync, e.__composer[Ip](t.pluralizationRules || e.pluralizationRules);
  const n = os(e.locale, {
    messages: t.messages,
    __i18n: t.__i18n
  });
  return Object.keys(n).forEach((r) => e.mergeLocaleMessage(r, n[r])), t.datetimeFormats && Object.keys(t.datetimeFormats).forEach((r) => e.mergeDateTimeFormat(r, t.datetimeFormats[r])), t.numberFormats && Object.keys(t.numberFormats).forEach((r) => e.mergeNumberFormat(r, t.numberFormats[r])), e;
}
const QI = /* @__PURE__ */ mn("global-vue-i18n");
function eM(e = {}, t) {
  const n = __VUE_I18N_LEGACY_API__ && Ce(e.legacy) ? e.legacy : __VUE_I18N_LEGACY_API__, r = Ce(e.globalInjection) ? e.globalInjection : !0, a = __VUE_I18N_LEGACY_API__ && n ? !!e.allowComposition : !0, o = /* @__PURE__ */ new Map(), [s, i] = tM(e, n), l = /* @__PURE__ */ mn(process.env.NODE_ENV !== "production" ? "vue-i18n" : "");
  process.env.NODE_ENV !== "production" && n && a && it(Dt(Qe.NOTICE_DROP_ALLOW_COMPOSITION));
  function c(f) {
    return o.get(f) || null;
  }
  function u(f, p) {
    o.set(f, p);
  }
  function d(f) {
    o.delete(f);
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
      async install(p, ...h) {
        if (process.env.NODE_ENV !== "production" && (p.__VUE_I18N__ = f), p.__VUE_I18N_SYMBOL__ = l, p.provide(p.__VUE_I18N_SYMBOL__, f), ke(h[0])) {
          const v = h[0];
          f.__composerExtend = v.__composerExtend, f.__vueI18nExtend = v.__vueI18nExtend;
        }
        let g = null;
        !n && r && (g = cM(p, f.global)), __VUE_I18N_FULL_INSTALL__ && FI(p, f, ...h), __VUE_I18N_LEGACY_API__ && n && p.mixin(JI(i, i.__composer, f));
        const y = p.unmount;
        if (p.unmount = () => {
          g && g(), f.dispose(), y();
        }, process.env.NODE_ENV !== "production") {
          if (!await YI(p, f))
            throw rt(Se.CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN);
          const b = dl();
          if (n) {
            const E = i;
            E.__enableEmitter && E.__enableEmitter(b);
          } else {
            const E = i;
            E[mr] && E[mr](b);
          }
          b.on("*", Ra);
        }
      },
      // global accessor
      get global() {
        return i;
      },
      dispose() {
        s.stop();
      },
      // @internal
      __instances: o,
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
function yl(e = {}) {
  const t = Rt();
  if (t == null)
    throw rt(Se.MUST_BE_CALL_SETUP_TOP);
  if (!t.isCE && t.appContext.app != null && !t.appContext.app.__VUE_I18N_SYMBOL__)
    throw rt(Se.NOT_INSTALLED);
  const n = nM(t), r = aM(n), a = Lp(t), o = rM(e, a);
  if (__VUE_I18N_LEGACY_API__ && n.mode === "legacy" && !e.__useComponent) {
    if (!n.allowComposition)
      throw rt(Se.NOT_AVAILABLE_IN_LEGACY_MODE);
    return lM(t, o, r, e);
  }
  if (o === "global")
    return Rp(r, e, a), r;
  if (o === "parent") {
    let l = oM(n, t, e.__useComponent);
    return l == null && (process.env.NODE_ENV !== "production" && it(Dt(Qe.NOT_FOUND_PARENT_SCOPE)), l = r), l;
  }
  const s = n;
  let i = s.__getInstance(t);
  if (i == null) {
    const l = lt({}, e);
    "__i18n" in a && (l.__i18n = a.__i18n), r && (l.__root = r), i = ml(l), s.__composerExtend && (i[si] = s.__composerExtend(i)), iM(s, t, i), s.__setInstance(t, i);
  }
  return i;
}
function tM(e, t, n) {
  const r = Zc();
  {
    const a = __VUE_I18N_LEGACY_API__ && t ? r.run(() => li(e)) : r.run(() => ml(e));
    if (a == null)
      throw rt(Se.UNEXPECTED_ERROR);
    return [r, a];
  }
}
function nM(e) {
  {
    const t = Be(e.isCE ? QI : e.appContext.app.__VUE_I18N_SYMBOL__);
    if (!t)
      throw rt(e.isCE ? Se.NOT_INSTALLED_WITH_PROVIDE : Se.UNEXPECTED_ERROR);
    return t;
  }
}
function rM(e, t) {
  return ns(e) ? "__i18n" in t ? "local" : "global" : e.useScope ? e.useScope : "local";
}
function aM(e) {
  return e.mode === "composition" ? e.global : e.global.__composer;
}
function oM(e, t, n = !1) {
  let r = null;
  const a = t.root;
  let o = sM(t, n);
  for (; o != null; ) {
    const s = e;
    if (e.mode === "composition")
      r = s.__getInstance(o);
    else if (__VUE_I18N_LEGACY_API__) {
      const i = s.__getInstance(o);
      i != null && (r = i.__composer, n && r && !r[Mp] && (r = null));
    }
    if (r != null || a === o)
      break;
    o = o.parent;
  }
  return r;
}
function sM(e, t = !1) {
  return e == null ? null : t && e.vnode.ctx || e.parent;
}
function iM(e, t, n) {
  let r = null;
  Yt(() => {
    if (process.env.NODE_ENV !== "production" && t.vnode.el) {
      t.vnode.el.__VUE_I18N__ = n, r = dl();
      const a = n;
      a[mr] && a[mr](r), r.on("*", Ra);
    }
  }, t), Jn(() => {
    const a = n;
    process.env.NODE_ENV !== "production" && t.vnode.el && t.vnode.el.__VUE_I18N__ && (r && r.off("*", Ra), a[La] && a[La](), delete t.vnode.el.__VUE_I18N__), e.__deleteInstance(t);
    const o = a[si];
    o && (o(), delete a[si]);
  }, t);
}
function lM(e, t, n, r = {}) {
  const a = t === "local", o = mi(null);
  if (a && e.proxy && !(e.proxy.$options.i18n || e.proxy.$options.__i18n))
    throw rt(Se.MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION);
  const s = Ce(r.inheritLocale) ? r.inheritLocale : !ne(r.locale), i = Y(
    // prettier-ignore
    !a || s ? n.locale.value : ne(r.locale) ? r.locale : Gr
  ), l = Y(
    // prettier-ignore
    !a || s ? n.fallbackLocale.value : ne(r.fallbackLocale) || ze(r.fallbackLocale) || ke(r.fallbackLocale) || r.fallbackLocale === !1 ? r.fallbackLocale : i.value
  ), c = Y(os(i.value, r)), u = Y(ke(r.datetimeFormats) ? r.datetimeFormats : { [i.value]: {} }), d = Y(ke(r.numberFormats) ? r.numberFormats : { [i.value]: {} }), f = a ? n.missingWarn : Ce(r.missingWarn) || Xn(r.missingWarn) ? r.missingWarn : !0, p = a ? n.fallbackWarn : Ce(r.fallbackWarn) || Xn(r.fallbackWarn) ? r.fallbackWarn : !0, h = a ? n.fallbackRoot : Ce(r.fallbackRoot) ? r.fallbackRoot : !0, g = !!r.fallbackFormat, y = Ze(r.missing) ? r.missing : null, v = Ze(r.postTranslation) ? r.postTranslation : null, b = a ? n.warnHtmlMessage : Ce(r.warnHtmlMessage) ? r.warnHtmlMessage : !0, E = !!r.escapeParameter, _ = a ? n.modifiers : ke(r.modifiers) ? r.modifiers : {}, T = r.pluralRules || a && n.pluralRules;
  function D() {
    return [
      i.value,
      l.value,
      c.value,
      u.value,
      d.value
    ];
  }
  const N = C({
    get: () => o.value ? o.value.locale.value : i.value,
    set: (w) => {
      o.value && (o.value.locale.value = w), i.value = w;
    }
  }), I = C({
    get: () => o.value ? o.value.fallbackLocale.value : l.value,
    set: (w) => {
      o.value && (o.value.fallbackLocale.value = w), l.value = w;
    }
  }), L = C(() => o.value ? o.value.messages.value : c.value), x = C(() => u.value), R = C(() => d.value);
  function P() {
    return o.value ? o.value.getPostTranslationHandler() : v;
  }
  function G(w) {
    o.value && o.value.setPostTranslationHandler(w);
  }
  function ee() {
    return o.value ? o.value.getMissingHandler() : y;
  }
  function X(w) {
    o.value && o.value.setMissingHandler(w);
  }
  function ae(w) {
    return D(), w();
  }
  function le(...w) {
    return o.value ? ae(() => Reflect.apply(o.value.t, null, [...w])) : ae(() => "");
  }
  function Ee(...w) {
    return o.value ? Reflect.apply(o.value.rt, null, [...w]) : "";
  }
  function ve(...w) {
    return o.value ? ae(() => Reflect.apply(o.value.d, null, [...w])) : ae(() => "");
  }
  function W(...w) {
    return o.value ? ae(() => Reflect.apply(o.value.n, null, [...w])) : ae(() => "");
  }
  function ce(w) {
    return o.value ? o.value.tm(w) : {};
  }
  function Me(w, F) {
    return o.value ? o.value.te(w, F) : !1;
  }
  function Ye(w) {
    return o.value ? o.value.getLocaleMessage(w) : {};
  }
  function oe(w, F) {
    o.value && (o.value.setLocaleMessage(w, F), c.value[w] = F);
  }
  function Ne(w, F) {
    o.value && o.value.mergeLocaleMessage(w, F);
  }
  function V(w) {
    return o.value ? o.value.getDateTimeFormat(w) : {};
  }
  function B(w, F) {
    o.value && (o.value.setDateTimeFormat(w, F), u.value[w] = F);
  }
  function te(w, F) {
    o.value && o.value.mergeDateTimeFormat(w, F);
  }
  function z(w) {
    return o.value ? o.value.getNumberFormat(w) : {};
  }
  function S(w, F) {
    o.value && (o.value.setNumberFormat(w, F), d.value[w] = F);
  }
  function H(w, F) {
    o.value && o.value.mergeNumberFormat(w, F);
  }
  const ue = {
    get id() {
      return o.value ? o.value.id : -1;
    },
    locale: N,
    fallbackLocale: I,
    messages: L,
    datetimeFormats: x,
    numberFormats: R,
    get inheritLocale() {
      return o.value ? o.value.inheritLocale : s;
    },
    set inheritLocale(w) {
      o.value && (o.value.inheritLocale = w);
    },
    get availableLocales() {
      return o.value ? o.value.availableLocales : Object.keys(c.value);
    },
    get modifiers() {
      return o.value ? o.value.modifiers : _;
    },
    get pluralRules() {
      return o.value ? o.value.pluralRules : T;
    },
    get isGlobal() {
      return o.value ? o.value.isGlobal : !1;
    },
    get missingWarn() {
      return o.value ? o.value.missingWarn : f;
    },
    set missingWarn(w) {
      o.value && (o.value.missingWarn = w);
    },
    get fallbackWarn() {
      return o.value ? o.value.fallbackWarn : p;
    },
    set fallbackWarn(w) {
      o.value && (o.value.missingWarn = w);
    },
    get fallbackRoot() {
      return o.value ? o.value.fallbackRoot : h;
    },
    set fallbackRoot(w) {
      o.value && (o.value.fallbackRoot = w);
    },
    get fallbackFormat() {
      return o.value ? o.value.fallbackFormat : g;
    },
    set fallbackFormat(w) {
      o.value && (o.value.fallbackFormat = w);
    },
    get warnHtmlMessage() {
      return o.value ? o.value.warnHtmlMessage : b;
    },
    set warnHtmlMessage(w) {
      o.value && (o.value.warnHtmlMessage = w);
    },
    get escapeParameter() {
      return o.value ? o.value.escapeParameter : E;
    },
    set escapeParameter(w) {
      o.value && (o.value.escapeParameter = w);
    },
    t: le,
    getPostTranslationHandler: P,
    setPostTranslationHandler: G,
    getMissingHandler: ee,
    setMissingHandler: X,
    rt: Ee,
    d: ve,
    n: W,
    tm: ce,
    te: Me,
    getLocaleMessage: Ye,
    setLocaleMessage: oe,
    mergeLocaleMessage: Ne,
    getDateTimeFormat: V,
    setDateTimeFormat: B,
    mergeDateTimeFormat: te,
    getNumberFormat: z,
    setNumberFormat: S,
    mergeNumberFormat: H
  };
  function k(w) {
    w.locale.value = i.value, w.fallbackLocale.value = l.value, Object.keys(c.value).forEach((F) => {
      w.mergeLocaleMessage(F, c.value[F]);
    }), Object.keys(u.value).forEach((F) => {
      w.mergeDateTimeFormat(F, u.value[F]);
    }), Object.keys(d.value).forEach((F) => {
      w.mergeNumberFormat(F, d.value[F]);
    }), w.escapeParameter = E, w.fallbackFormat = g, w.fallbackRoot = h, w.fallbackWarn = p, w.missingWarn = f, w.warnHtmlMessage = b;
  }
  return hv(() => {
    if (e.proxy == null || e.proxy.$i18n == null)
      throw rt(Se.NOT_AVAILABLE_COMPOSITION_IN_LEGACY);
    const w = o.value = e.proxy.$i18n.__composer;
    t === "global" ? (i.value = w.locale.value, l.value = w.fallbackLocale.value, c.value = w.messages.value, u.value = w.datetimeFormats.value, d.value = w.numberFormats.value) : a && k(w);
  }), ue;
}
const uM = [
  "locale",
  "fallbackLocale",
  "availableLocales"
], Ic = ["t", "rt", "d", "n", "tm", "te"];
function cM(e, t) {
  const n = /* @__PURE__ */ Object.create(null);
  return uM.forEach((a) => {
    const o = Object.getOwnPropertyDescriptor(t, a);
    if (!o)
      throw rt(Se.UNEXPECTED_ERROR);
    const s = He(o.value) ? {
      get() {
        return o.value.value;
      },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      set(i) {
        o.value.value = i;
      }
    } : {
      get() {
        return o.get && o.get();
      }
    };
    Object.defineProperty(n, a, s);
  }), e.config.globalProperties.$i18n = n, Ic.forEach((a) => {
    const o = Object.getOwnPropertyDescriptor(t, a);
    if (!o || !o.value)
      throw rt(Se.UNEXPECTED_ERROR);
    Object.defineProperty(e.config.globalProperties, `$${a}`, o);
  }), () => {
    delete e.config.globalProperties.$i18n, Ic.forEach((a) => {
      delete e.config.globalProperties[`$${a}`];
    });
  };
}
$I();
__INTLIFY_JIT_COMPILATION__ ? fc(dI) : fc(cI);
nI(R2);
rI(mp);
if (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) {
  const e = _n();
  e.__INTLIFY__ = !0, G2(e.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__);
}
process.env.NODE_ENV;
const dM = {
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
  GoogleOff3: "已啟用廣告群組"
}, fM = {
  zh_TW: dM
}, _r = eM({
  locale: "zh_TW",
  legacy: !1,
  globalInjection: !0,
  messages: fM
}), pM = { class: "flex flex-col gap-6" }, vM = { class: "flex gap-6" }, mM = { class: "flex flex-col gap-2" }, hM = { class: "flex items-center justify-start gap-2" }, gM = /* @__PURE__ */ $("span", { class: "p3-r text-dark-4" }, "開始", -1), yM = ["onClick"], bM = ["value"], _M = { class: "flex items-center justify-start gap-2" }, wM = /* @__PURE__ */ $("span", { class: "p3-r text-dark-4" }, "執行頻率", -1), EM = { class: "flex gap-6" }, OM = { class: "flex items-center gap-2" }, DM = ["value"], kM = /* @__PURE__ */ $("option", { value: 0 }, "自訂", -1), $M = { class: "flex items-center empty:hidden" }, xM = {
  key: 0,
  class: "flex items-center justify-start gap-2"
}, TM = /* @__PURE__ */ $("span", { class: "p3-r text-dark-4" }, "結束", -1), CM = {
  key: 0,
  class: "flex justify-center flex-col gap-6"
}, AM = { class: "flex gap-2 items-center" }, NM = /* @__PURE__ */ $("span", { class: "p3-r text-dark-4" }, "每", -1), PM = /* @__PURE__ */ $("option", {
  value: "-1",
  disabled: ""
}, "未設定", -1), SM = ["value"], IM = {
  key: 0,
  class: "p3-b text-dark-3"
}, Mc = 1, MM = /* @__PURE__ */ fe({
  __name: "RepeatFrequency",
  props: {
    frequency: {},
    interval: {}
  },
  emits: ["update:frequency", "update:interval"],
  setup(e, { emit: t }) {
    const n = e, { t: r } = _r.global, a = Be("eventData"), o = Y(!0);
    _e(a, () => {
      o.value = !0;
    });
    const s = Y(n.interval ?? Mc);
    _e(s, (g) => {
      g || (g = Mc), t("update:interval", g);
    });
    const i = Y(n.frequency);
    _e(i, (g) => {
      t("update:frequency", g);
    });
    const l = C({
      get: () => a.value.start ? new Date(a.value.start).toISOString() : "",
      set: (g) => {
        a.value.start = g;
      }
    }), c = C({
      get: () => a.value.weekdays ?? [],
      set: (g) => {
        a.value.weekdays = g;
      }
    }), u = C({
      get: () => a.value.weekOrdinal ?? [],
      set: (g) => {
        a.value.weekOrdinal = g;
      }
    }), d = C({
      get: () => a.value.monthDate ?? [],
      set: (g) => {
        a.value.monthDate = g;
      }
    }), f = C({
      get: () => a.value.yearMonths ?? [],
      set: (g) => {
        a.value.yearMonths = g;
      }
    }), p = C(() => {
      if (h.value == Ve.Never)
        return "只執行一次";
      if (h.value == Ve.Hour)
        return "每小時執行一次";
      if (h.value == Ve.Day)
        return "每日執行一次";
      if (h.value == Ve.Week)
        return "每週執行一次";
      if (h.value == Ve.Month)
        return "每月執行一次";
      if (h.value == Ve.Annual)
        return "每年執行一次";
      const g = {
        1: "小時",
        2: "日",
        3: "週",
        4: "月",
        5: "年"
      }, y = {
        1: "",
        2: "",
        3: "",
        4: "",
        5: ""
      };
      return h.value == 0 ? `每${s.value ?? ""}${g[i.value] ?? ""}${y[i.value] ?? ""}執行一次` : "";
    }), h = Y(
      n.interval == null ? -1 : n.interval !== 1 ? 0 : n.frequency
    );
    return _e(
      h,
      (g) => {
        Ve[g] ? (t("update:frequency", g), t("update:interval", 1), i.value = h.value, a.value.weekdays = null, a.value.weekOrdinal = null, a.value.monthDate = null, a.value.yearMonths = null) : i.value = 1, a.value.customInterval = g === 0;
      },
      { immediate: !0 }
    ), (g, y) => (O(), A("div", pM, [
      $("div", vM, [
        $("div", mM, [
          $("div", hM, [
            gM,
            se(m(il), {
              modelValue: m(l),
              "onUpdate:modelValue": y[0] || (y[0] = (v) => He(l) ? l.value = v : null),
              mode: "dateTime",
              "min-Date": /* @__PURE__ */ new Date(),
              is24hr: "",
              "hide-time-header": "",
              "time-accuracy": 2,
              timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
              popover: !1
            }, {
              default: he(({ togglePopover: v, inputValue: b }) => [
                $("div", {
                  class: "p3-b text-true-blue-3 flex cursor-pointer relative items-center justify-start gap-2 rounded shadow-01 bg-light-5 py-1 px-2 transition-all hover:bg-light-3 hover:bg-opacity-50",
                  onClick: v
                }, [
                  $("input", {
                    value: b,
                    required: "",
                    class: "opacity-0 absolute w-full h-full pointer-events-none"
                  }, null, 8, bM),
                  Gn(" " + be(b || "未設定"), 1)
                ], 8, yM)
              ]),
              _: 1
            }, 8, ["modelValue", "min-Date", "timezone"])
          ])
        ]),
        $("label", _M, [
          wM,
          $("div", EM, [
            $("div", OM, [
              st($("select", {
                class: "p3-b text-true-blue-3 flex cursor-pointer items-center justify-center gap-2 rounded shadow-01 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
                "onUpdate:modelValue": y[1] || (y[1] = (v) => He(h) ? h.value = v : null)
              }, [
                (O(!0), A(ie, null, Ae(m(Ve), (v, b) => (O(), A(ie, { key: b }, [
                  Number.isInteger(v) ? (O(), A("option", {
                    key: 0,
                    value: v
                  }, be(m(r)(b)), 9, DM)) : Z("", !0)
                ], 64))), 128)),
                kM
              ], 512), [
                [Nt, m(h)]
              ])
            ])
          ])
        ]),
        $("div", $M, [
          m(i) !== -1 ? (O(), A("div", xM, [
            TM,
            se(BS, {
              modelValue: m(a).due,
              "onUpdate:modelValue": y[2] || (y[2] = (v) => m(a).due = v)
            }, null, 8, ["modelValue"])
          ])) : Z("", !0)
        ])
      ]),
      m(Ve)[m(h)] == null ? (O(), A("div", CM, [
        $("div", AM, [
          NM,
          se(Wn, {
            class: "!w-10 text-center text-dark-3",
            inputClass: "text-true-blue-3",
            modelValue: m(s),
            "onUpdate:modelValue": y[3] || (y[3] = (v) => He(s) ? s.value = v : null),
            type: "number"
          }, null, 8, ["modelValue"]),
          st($("select", {
            class: "p3-b text-true-blue-3 w-14 flex cursor-pointer items-center justify-center gap-2 rounded shadow-01 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
            "onUpdate:modelValue": y[4] || (y[4] = (v) => He(i) ? i.value = v : null)
          }, [
            PM,
            (O(!0), A(ie, null, Ae(m(Ve), (v, b) => (O(), A(ie, { key: b }, [
              v != m(Ve).Never && Number.isInteger(v) ? (O(), A("option", {
                key: 0,
                value: v
              }, be(m(r)(`repeat${b}`)), 9, SM)) : Z("", !0)
            ], 64))), 128))
          ], 512), [
            [Nt, m(i)]
          ]),
          m(i) == m(Ve).Hour || m(i) == m(Ve).Day ? (O(), A("span", IM, be(m(p)), 1)) : Z("", !0),
          m(Ve)[m(h)] == null ? (O(), we(Cg, {
            key: 1,
            class: "ml-4",
            type: m(i),
            weekdays: m(c),
            "onUpdate:weekdays": y[5] || (y[5] = (v) => He(c) ? c.value = v : null),
            weekOrdinal: m(u),
            "onUpdate:weekOrdinal": y[6] || (y[6] = (v) => He(u) ? u.value = v : null),
            monthDate: m(d),
            "onUpdate:monthDate": y[7] || (y[7] = (v) => He(d) ? d.value = v : null),
            yearMonths: m(f),
            "onUpdate:yearMonths": y[8] || (y[8] = (v) => He(f) ? f.value = v : null)
          }, null, 8, ["type", "weekdays", "weekOrdinal", "monthDate", "yearMonths"])) : Z("", !0)
        ])
      ])) : Z("", !0)
    ]));
  }
}), LM = ["id"], RM = { class: "p2-b text-dark-2 bg-light-5 flex gap-1 items-center" }, xa = /* @__PURE__ */ fe({
  __name: "OuterBlock",
  props: {
    id: {},
    title: {},
    icon: {}
  },
  setup(e) {
    const t = e, n = yv(
      () => import("./index-75297003.js").then((i) => i[t.icon])
    ), r = Y(!1);
    Yt(() => {
      r.value = !0;
    });
    function a(i) {
      const l = getComputedStyle(i).width;
      i.style.width = l, i.style.position = "absolute", i.style.visibility = "hidden", i.style.height = "auto";
      const c = getComputedStyle(i).height;
      i.style.width = null, i.style.position = null, i.style.visibility = null, i.style.height = 0, getComputedStyle(i).height, requestAnimationFrame(() => {
        i.style.height = c, i.style.paddingTop = "24px";
      });
    }
    function o(i) {
      i.style.height = "auto";
    }
    function s(i) {
      const l = getComputedStyle(i).height;
      i.style.height = l, getComputedStyle(i).height, requestAnimationFrame(() => {
        i.style.height = 0, i.style.paddingTop = "0";
      });
    }
    return (i, l) => (O(), A("div", {
      class: "relative border rounded-xs border-light-1 py-4 px-3 shadow-01 flex flex-col w-full",
      id: i.id
    }, [
      $("div", {
        class: Ie(["flex items-center justify-between bg-light-5 z-[2]", { " cursor-pointer": !m(r) }]),
        onClick: l[0] || (l[0] = (c) => r.value = !m(r))
      }, [
        $("div", RM, [
          (O(), we(Ho(m(n)), { weight: "bold" })),
          Gn(" " + be(i.title), 1)
        ]),
        se(m(Ud), {
          weight: "bold",
          class: Ie(["transition-all hover:drop-shadow-md cursor-pointer hover:text-dark-3", { "-rotate-90": !m(r) }])
        }, null, 8, ["class"])
      ], 2),
      se(yi, {
        name: "expand",
        onEnter: a,
        onAfterEnter: o,
        onLeave: s
      }, {
        default: he(() => [
          m(r) ? Re(i.$slots, "default", { key: 0 }) : Z("", !0)
        ]),
        _: 3
      })
    ], 8, LM));
  }
});
function jp(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: FM } = Object.prototype, { getPrototypeOf: bl } = Object, ss = ((e) => (t) => {
  const n = FM.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), hn = (e) => (e = e.toLowerCase(), (t) => ss(t) === e), is = (e) => (t) => typeof t === e, { isArray: ua } = Array, Fa = is("undefined");
function VM(e) {
  return e !== null && !Fa(e) && e.constructor !== null && !Fa(e.constructor) && Lt(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const Hp = hn("ArrayBuffer");
function BM(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && Hp(e.buffer), t;
}
const YM = is("string"), Lt = is("function"), Wp = is("number"), ls = (e) => e !== null && typeof e == "object", UM = (e) => e === !0 || e === !1, po = (e) => {
  if (ss(e) !== "object")
    return !1;
  const t = bl(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, jM = hn("Date"), HM = hn("File"), WM = hn("Blob"), GM = hn("FileList"), zM = (e) => ls(e) && Lt(e.pipe), KM = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || Lt(e.append) && ((t = ss(e)) === "formdata" || // detect form-data instance
  t === "object" && Lt(e.toString) && e.toString() === "[object FormData]"));
}, qM = hn("URLSearchParams"), ZM = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Wa(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let r, a;
  if (typeof e != "object" && (e = [e]), ua(e))
    for (r = 0, a = e.length; r < a; r++)
      t.call(null, e[r], r, e);
  else {
    const o = n ? Object.getOwnPropertyNames(e) : Object.keys(e), s = o.length;
    let i;
    for (r = 0; r < s; r++)
      i = o[r], t.call(null, e[i], i, e);
  }
}
function Gp(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length, a;
  for (; r-- > 0; )
    if (a = n[r], t === a.toLowerCase())
      return a;
  return null;
}
const zp = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(), Kp = (e) => !Fa(e) && e !== zp;
function ci() {
  const { caseless: e } = Kp(this) && this || {}, t = {}, n = (r, a) => {
    const o = e && Gp(t, a) || a;
    po(t[o]) && po(r) ? t[o] = ci(t[o], r) : po(r) ? t[o] = ci({}, r) : ua(r) ? t[o] = r.slice() : t[o] = r;
  };
  for (let r = 0, a = arguments.length; r < a; r++)
    arguments[r] && Wa(arguments[r], n);
  return t;
}
const XM = (e, t, n, { allOwnKeys: r } = {}) => (Wa(t, (a, o) => {
  n && Lt(a) ? e[o] = jp(a, n) : e[o] = a;
}, { allOwnKeys: r }), e), JM = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), QM = (e, t, n, r) => {
  e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, eL = (e, t, n, r) => {
  let a, o, s;
  const i = {};
  if (t = t || {}, e == null)
    return t;
  do {
    for (a = Object.getOwnPropertyNames(e), o = a.length; o-- > 0; )
      s = a[o], (!r || r(s, e, t)) && !i[s] && (t[s] = e[s], i[s] = !0);
    e = n !== !1 && bl(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, tL = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const r = e.indexOf(t, n);
  return r !== -1 && r === n;
}, nL = (e) => {
  if (!e)
    return null;
  if (ua(e))
    return e;
  let t = e.length;
  if (!Wp(t))
    return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, rL = ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && bl(Uint8Array)), aL = (e, t) => {
  const r = (e && e[Symbol.iterator]).call(e);
  let a;
  for (; (a = r.next()) && !a.done; ) {
    const o = a.value;
    t.call(e, o[0], o[1]);
  }
}, oL = (e, t) => {
  let n;
  const r = [];
  for (; (n = e.exec(t)) !== null; )
    r.push(n);
  return r;
}, sL = hn("HTMLFormElement"), iL = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, r, a) {
    return r.toUpperCase() + a;
  }
), Lc = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), lL = hn("RegExp"), qp = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  Wa(n, (a, o) => {
    let s;
    (s = t(a, o, e)) !== !1 && (r[o] = s || a);
  }), Object.defineProperties(e, r);
}, uL = (e) => {
  qp(e, (t, n) => {
    if (Lt(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
      return !1;
    const r = e[n];
    if (Lt(r)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, cL = (e, t) => {
  const n = {}, r = (a) => {
    a.forEach((o) => {
      n[o] = !0;
    });
  };
  return ua(e) ? r(e) : r(String(e).split(t)), n;
}, dL = () => {
}, fL = (e, t) => (e = +e, Number.isFinite(e) ? e : t), xs = "abcdefghijklmnopqrstuvwxyz", Rc = "0123456789", Zp = {
  DIGIT: Rc,
  ALPHA: xs,
  ALPHA_DIGIT: xs + xs.toUpperCase() + Rc
}, pL = (e = 16, t = Zp.ALPHA_DIGIT) => {
  let n = "";
  const { length: r } = t;
  for (; e--; )
    n += t[Math.random() * r | 0];
  return n;
};
function vL(e) {
  return !!(e && Lt(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const mL = (e) => {
  const t = new Array(10), n = (r, a) => {
    if (ls(r)) {
      if (t.indexOf(r) >= 0)
        return;
      if (!("toJSON" in r)) {
        t[a] = r;
        const o = ua(r) ? [] : {};
        return Wa(r, (s, i) => {
          const l = n(s, a + 1);
          !Fa(l) && (o[i] = l);
        }), t[a] = void 0, o;
      }
    }
    return r;
  };
  return n(e, 0);
}, hL = hn("AsyncFunction"), gL = (e) => e && (ls(e) || Lt(e)) && Lt(e.then) && Lt(e.catch), j = {
  isArray: ua,
  isArrayBuffer: Hp,
  isBuffer: VM,
  isFormData: KM,
  isArrayBufferView: BM,
  isString: YM,
  isNumber: Wp,
  isBoolean: UM,
  isObject: ls,
  isPlainObject: po,
  isUndefined: Fa,
  isDate: jM,
  isFile: HM,
  isBlob: WM,
  isRegExp: lL,
  isFunction: Lt,
  isStream: zM,
  isURLSearchParams: qM,
  isTypedArray: rL,
  isFileList: GM,
  forEach: Wa,
  merge: ci,
  extend: XM,
  trim: ZM,
  stripBOM: JM,
  inherits: QM,
  toFlatObject: eL,
  kindOf: ss,
  kindOfTest: hn,
  endsWith: tL,
  toArray: nL,
  forEachEntry: aL,
  matchAll: oL,
  isHTMLForm: sL,
  hasOwnProperty: Lc,
  hasOwnProp: Lc,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: qp,
  freezeMethods: uL,
  toObjectSet: cL,
  toCamelCase: iL,
  noop: dL,
  toFiniteNumber: fL,
  findKey: Gp,
  global: zp,
  isContextDefined: Kp,
  ALPHABET: Zp,
  generateString: pL,
  isSpecCompliantForm: vL,
  toJSONObject: mL,
  isAsyncFn: hL,
  isThenable: gL
};
function Le(e, t, n, r, a) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), r && (this.request = r), a && (this.response = a);
}
j.inherits(Le, Error, {
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
      config: j.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
const Xp = Le.prototype, Jp = {};
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
  Jp[e] = { value: e };
});
Object.defineProperties(Le, Jp);
Object.defineProperty(Xp, "isAxiosError", { value: !0 });
Le.from = (e, t, n, r, a, o) => {
  const s = Object.create(Xp);
  return j.toFlatObject(e, s, function(l) {
    return l !== Error.prototype;
  }, (i) => i !== "isAxiosError"), Le.call(s, e.message, t, n, r, a), s.cause = e, s.name = e.name, o && Object.assign(s, o), s;
};
const yL = null;
function di(e) {
  return j.isPlainObject(e) || j.isArray(e);
}
function Qp(e) {
  return j.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Fc(e, t, n) {
  return e ? e.concat(t).map(function(a, o) {
    return a = Qp(a), !n && o ? "[" + a + "]" : a;
  }).join(n ? "." : "") : t;
}
function bL(e) {
  return j.isArray(e) && !e.some(di);
}
const _L = j.toFlatObject(j, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function us(e, t, n) {
  if (!j.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), n = j.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(g, y) {
    return !j.isUndefined(y[g]);
  });
  const r = n.metaTokens, a = n.visitor || u, o = n.dots, s = n.indexes, l = (n.Blob || typeof Blob < "u" && Blob) && j.isSpecCompliantForm(t);
  if (!j.isFunction(a))
    throw new TypeError("visitor must be a function");
  function c(h) {
    if (h === null)
      return "";
    if (j.isDate(h))
      return h.toISOString();
    if (!l && j.isBlob(h))
      throw new Le("Blob is not supported. Use a Buffer instead.");
    return j.isArrayBuffer(h) || j.isTypedArray(h) ? l && typeof Blob == "function" ? new Blob([h]) : Buffer.from(h) : h;
  }
  function u(h, g, y) {
    let v = h;
    if (h && !y && typeof h == "object") {
      if (j.endsWith(g, "{}"))
        g = r ? g : g.slice(0, -2), h = JSON.stringify(h);
      else if (j.isArray(h) && bL(h) || (j.isFileList(h) || j.endsWith(g, "[]")) && (v = j.toArray(h)))
        return g = Qp(g), v.forEach(function(E, _) {
          !(j.isUndefined(E) || E === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            s === !0 ? Fc([g], _, o) : s === null ? g : g + "[]",
            c(E)
          );
        }), !1;
    }
    return di(h) ? !0 : (t.append(Fc(y, g, o), c(h)), !1);
  }
  const d = [], f = Object.assign(_L, {
    defaultVisitor: u,
    convertValue: c,
    isVisitable: di
  });
  function p(h, g) {
    if (!j.isUndefined(h)) {
      if (d.indexOf(h) !== -1)
        throw Error("Circular reference detected in " + g.join("."));
      d.push(h), j.forEach(h, function(v, b) {
        (!(j.isUndefined(v) || v === null) && a.call(
          t,
          v,
          j.isString(b) ? b.trim() : b,
          g,
          f
        )) === !0 && p(v, g ? g.concat(b) : [b]);
      }), d.pop();
    }
  }
  if (!j.isObject(e))
    throw new TypeError("data must be an object");
  return p(e), t;
}
function Vc(e) {
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
function _l(e, t) {
  this._pairs = [], e && us(e, this, t);
}
const ev = _l.prototype;
ev.append = function(t, n) {
  this._pairs.push([t, n]);
};
ev.toString = function(t) {
  const n = t ? function(r) {
    return t.call(this, r, Vc);
  } : Vc;
  return this._pairs.map(function(a) {
    return n(a[0]) + "=" + n(a[1]);
  }, "").join("&");
};
function wL(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function tv(e, t, n) {
  if (!t)
    return e;
  const r = n && n.encode || wL, a = n && n.serialize;
  let o;
  if (a ? o = a(t, n) : o = j.isURLSearchParams(t) ? t.toString() : new _l(t, n).toString(r), o) {
    const s = e.indexOf("#");
    s !== -1 && (e = e.slice(0, s)), e += (e.indexOf("?") === -1 ? "?" : "&") + o;
  }
  return e;
}
class EL {
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
    j.forEach(this.handlers, function(r) {
      r !== null && t(r);
    });
  }
}
const Bc = EL, nv = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, OL = typeof URLSearchParams < "u" ? URLSearchParams : _l, DL = typeof FormData < "u" ? FormData : null, kL = typeof Blob < "u" ? Blob : null, $L = (() => {
  let e;
  return typeof navigator < "u" && ((e = navigator.product) === "ReactNative" || e === "NativeScript" || e === "NS") ? !1 : typeof window < "u" && typeof document < "u";
})(), xL = (() => typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(), sn = {
  isBrowser: !0,
  classes: {
    URLSearchParams: OL,
    FormData: DL,
    Blob: kL
  },
  isStandardBrowserEnv: $L,
  isStandardBrowserWebWorkerEnv: xL,
  protocols: ["http", "https", "file", "blob", "url", "data"]
};
function TL(e, t) {
  return us(e, new sn.classes.URLSearchParams(), Object.assign({
    visitor: function(n, r, a, o) {
      return sn.isNode && j.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : o.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function CL(e) {
  return j.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function AL(e) {
  const t = {}, n = Object.keys(e);
  let r;
  const a = n.length;
  let o;
  for (r = 0; r < a; r++)
    o = n[r], t[o] = e[o];
  return t;
}
function rv(e) {
  function t(n, r, a, o) {
    let s = n[o++];
    const i = Number.isFinite(+s), l = o >= n.length;
    return s = !s && j.isArray(a) ? a.length : s, l ? (j.hasOwnProp(a, s) ? a[s] = [a[s], r] : a[s] = r, !i) : ((!a[s] || !j.isObject(a[s])) && (a[s] = []), t(n, r, a[s], o) && j.isArray(a[s]) && (a[s] = AL(a[s])), !i);
  }
  if (j.isFormData(e) && j.isFunction(e.entries)) {
    const n = {};
    return j.forEachEntry(e, (r, a) => {
      t(CL(r), a, n, 0);
    }), n;
  }
  return null;
}
function NL(e, t, n) {
  if (j.isString(e))
    try {
      return (t || JSON.parse)(e), j.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (n || JSON.stringify)(e);
}
const wl = {
  transitional: nv,
  adapter: ["xhr", "http"],
  transformRequest: [function(t, n) {
    const r = n.getContentType() || "", a = r.indexOf("application/json") > -1, o = j.isObject(t);
    if (o && j.isHTMLForm(t) && (t = new FormData(t)), j.isFormData(t))
      return a && a ? JSON.stringify(rv(t)) : t;
    if (j.isArrayBuffer(t) || j.isBuffer(t) || j.isStream(t) || j.isFile(t) || j.isBlob(t))
      return t;
    if (j.isArrayBufferView(t))
      return t.buffer;
    if (j.isURLSearchParams(t))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let i;
    if (o) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return TL(t, this.formSerializer).toString();
      if ((i = j.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
        const l = this.env && this.env.FormData;
        return us(
          i ? { "files[]": t } : t,
          l && new l(),
          this.formSerializer
        );
      }
    }
    return o || a ? (n.setContentType("application/json", !1), NL(t)) : t;
  }],
  transformResponse: [function(t) {
    const n = this.transitional || wl.transitional, r = n && n.forcedJSONParsing, a = this.responseType === "json";
    if (t && j.isString(t) && (r && !this.responseType || a)) {
      const s = !(n && n.silentJSONParsing) && a;
      try {
        return JSON.parse(t);
      } catch (i) {
        if (s)
          throw i.name === "SyntaxError" ? Le.from(i, Le.ERR_BAD_RESPONSE, this, null, this.response) : i;
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
    FormData: sn.classes.FormData,
    Blob: sn.classes.Blob
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
j.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  wl.headers[e] = {};
});
const El = wl, PL = j.toObjectSet([
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
]), SL = (e) => {
  const t = {};
  let n, r, a;
  return e && e.split(`
`).forEach(function(s) {
    a = s.indexOf(":"), n = s.substring(0, a).trim().toLowerCase(), r = s.substring(a + 1).trim(), !(!n || t[n] && PL[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r);
  }), t;
}, Yc = Symbol("internals");
function _a(e) {
  return e && String(e).trim().toLowerCase();
}
function vo(e) {
  return e === !1 || e == null ? e : j.isArray(e) ? e.map(vo) : String(e);
}
function IL(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(e); )
    t[r[1]] = r[2];
  return t;
}
const ML = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Ts(e, t, n, r, a) {
  if (j.isFunction(r))
    return r.call(this, t, n);
  if (a && (t = n), !!j.isString(t)) {
    if (j.isString(r))
      return t.indexOf(r) !== -1;
    if (j.isRegExp(r))
      return r.test(t);
  }
}
function LL(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function RL(e, t) {
  const n = j.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function(a, o, s) {
        return this[r].call(this, t, a, o, s);
      },
      configurable: !0
    });
  });
}
class cs {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const a = this;
    function o(i, l, c) {
      const u = _a(l);
      if (!u)
        throw new Error("header name must be a non-empty string");
      const d = j.findKey(a, u);
      (!d || a[d] === void 0 || c === !0 || c === void 0 && a[d] !== !1) && (a[d || l] = vo(i));
    }
    const s = (i, l) => j.forEach(i, (c, u) => o(c, u, l));
    return j.isPlainObject(t) || t instanceof this.constructor ? s(t, n) : j.isString(t) && (t = t.trim()) && !ML(t) ? s(SL(t), n) : t != null && o(n, t, r), this;
  }
  get(t, n) {
    if (t = _a(t), t) {
      const r = j.findKey(this, t);
      if (r) {
        const a = this[r];
        if (!n)
          return a;
        if (n === !0)
          return IL(a);
        if (j.isFunction(n))
          return n.call(this, a, r);
        if (j.isRegExp(n))
          return n.exec(a);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = _a(t), t) {
      const r = j.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || Ts(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let a = !1;
    function o(s) {
      if (s = _a(s), s) {
        const i = j.findKey(r, s);
        i && (!n || Ts(r, r[i], i, n)) && (delete r[i], a = !0);
      }
    }
    return j.isArray(t) ? t.forEach(o) : o(t), a;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length, a = !1;
    for (; r--; ) {
      const o = n[r];
      (!t || Ts(this, this[o], o, t, !0)) && (delete this[o], a = !0);
    }
    return a;
  }
  normalize(t) {
    const n = this, r = {};
    return j.forEach(this, (a, o) => {
      const s = j.findKey(r, o);
      if (s) {
        n[s] = vo(a), delete n[o];
        return;
      }
      const i = t ? LL(o) : String(o).trim();
      i !== o && delete n[o], n[i] = vo(a), r[i] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = /* @__PURE__ */ Object.create(null);
    return j.forEach(this, (r, a) => {
      r != null && r !== !1 && (n[a] = t && j.isArray(r) ? r.join(", ") : r);
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
    const r = (this[Yc] = this[Yc] = {
      accessors: {}
    }).accessors, a = this.prototype;
    function o(s) {
      const i = _a(s);
      r[i] || (RL(a, s), r[i] = !0);
    }
    return j.isArray(t) ? t.forEach(o) : o(t), this;
  }
}
cs.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
j.reduceDescriptors(cs.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    }
  };
});
j.freezeMethods(cs);
const En = cs;
function Cs(e, t) {
  const n = this || El, r = t || n, a = En.from(r.headers);
  let o = r.data;
  return j.forEach(e, function(i) {
    o = i.call(n, o, a.normalize(), t ? t.status : void 0);
  }), a.normalize(), o;
}
function av(e) {
  return !!(e && e.__CANCEL__);
}
function Ga(e, t, n) {
  Le.call(this, e ?? "canceled", Le.ERR_CANCELED, t, n), this.name = "CanceledError";
}
j.inherits(Ga, Le, {
  __CANCEL__: !0
});
function FL(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? e(n) : t(new Le(
    "Request failed with status code " + n.status,
    [Le.ERR_BAD_REQUEST, Le.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
const VL = sn.isStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  function() {
    return {
      write: function(n, r, a, o, s, i) {
        const l = [];
        l.push(n + "=" + encodeURIComponent(r)), j.isNumber(a) && l.push("expires=" + new Date(a).toGMTString()), j.isString(o) && l.push("path=" + o), j.isString(s) && l.push("domain=" + s), i === !0 && l.push("secure"), document.cookie = l.join("; ");
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
function BL(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function YL(e, t) {
  return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function ov(e, t) {
  return e && !BL(t) ? YL(e, t) : t;
}
const UL = sn.isStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const t = /(msie|trident)/i.test(navigator.userAgent), n = document.createElement("a");
    let r;
    function a(o) {
      let s = o;
      return t && (n.setAttribute("href", s), s = n.href), n.setAttribute("href", s), {
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
    return r = a(window.location.href), function(s) {
      const i = j.isString(s) ? a(s) : s;
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
function jL(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function HL(e, t) {
  e = e || 10;
  const n = new Array(e), r = new Array(e);
  let a = 0, o = 0, s;
  return t = t !== void 0 ? t : 1e3, function(l) {
    const c = Date.now(), u = r[o];
    s || (s = c), n[a] = l, r[a] = c;
    let d = o, f = 0;
    for (; d !== a; )
      f += n[d++], d = d % e;
    if (a = (a + 1) % e, a === o && (o = (o + 1) % e), c - s < t)
      return;
    const p = u && c - u;
    return p ? Math.round(f * 1e3 / p) : void 0;
  };
}
function Uc(e, t) {
  let n = 0;
  const r = HL(50, 250);
  return (a) => {
    const o = a.loaded, s = a.lengthComputable ? a.total : void 0, i = o - n, l = r(i), c = o <= s;
    n = o;
    const u = {
      loaded: o,
      total: s,
      progress: s ? o / s : void 0,
      bytes: i,
      rate: l || void 0,
      estimated: l && s && c ? (s - o) / l : void 0,
      event: a
    };
    u[t ? "download" : "upload"] = !0, e(u);
  };
}
const WL = typeof XMLHttpRequest < "u", GL = WL && function(e) {
  return new Promise(function(n, r) {
    let a = e.data;
    const o = En.from(e.headers).normalize(), s = e.responseType;
    let i;
    function l() {
      e.cancelToken && e.cancelToken.unsubscribe(i), e.signal && e.signal.removeEventListener("abort", i);
    }
    let c;
    j.isFormData(a) && (sn.isStandardBrowserEnv || sn.isStandardBrowserWebWorkerEnv ? o.setContentType(!1) : o.getContentType(/^\s*multipart\/form-data/) ? j.isString(c = o.getContentType()) && o.setContentType(c.replace(/^\s*(multipart\/form-data);+/, "$1")) : o.setContentType("multipart/form-data"));
    let u = new XMLHttpRequest();
    if (e.auth) {
      const h = e.auth.username || "", g = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
      o.set("Authorization", "Basic " + btoa(h + ":" + g));
    }
    const d = ov(e.baseURL, e.url);
    u.open(e.method.toUpperCase(), tv(d, e.params, e.paramsSerializer), !0), u.timeout = e.timeout;
    function f() {
      if (!u)
        return;
      const h = En.from(
        "getAllResponseHeaders" in u && u.getAllResponseHeaders()
      ), y = {
        data: !s || s === "text" || s === "json" ? u.responseText : u.response,
        status: u.status,
        statusText: u.statusText,
        headers: h,
        config: e,
        request: u
      };
      FL(function(b) {
        n(b), l();
      }, function(b) {
        r(b), l();
      }, y), u = null;
    }
    if ("onloadend" in u ? u.onloadend = f : u.onreadystatechange = function() {
      !u || u.readyState !== 4 || u.status === 0 && !(u.responseURL && u.responseURL.indexOf("file:") === 0) || setTimeout(f);
    }, u.onabort = function() {
      u && (r(new Le("Request aborted", Le.ECONNABORTED, e, u)), u = null);
    }, u.onerror = function() {
      r(new Le("Network Error", Le.ERR_NETWORK, e, u)), u = null;
    }, u.ontimeout = function() {
      let g = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
      const y = e.transitional || nv;
      e.timeoutErrorMessage && (g = e.timeoutErrorMessage), r(new Le(
        g,
        y.clarifyTimeoutError ? Le.ETIMEDOUT : Le.ECONNABORTED,
        e,
        u
      )), u = null;
    }, sn.isStandardBrowserEnv) {
      const h = (e.withCredentials || UL(d)) && e.xsrfCookieName && VL.read(e.xsrfCookieName);
      h && o.set(e.xsrfHeaderName, h);
    }
    a === void 0 && o.setContentType(null), "setRequestHeader" in u && j.forEach(o.toJSON(), function(g, y) {
      u.setRequestHeader(y, g);
    }), j.isUndefined(e.withCredentials) || (u.withCredentials = !!e.withCredentials), s && s !== "json" && (u.responseType = e.responseType), typeof e.onDownloadProgress == "function" && u.addEventListener("progress", Uc(e.onDownloadProgress, !0)), typeof e.onUploadProgress == "function" && u.upload && u.upload.addEventListener("progress", Uc(e.onUploadProgress)), (e.cancelToken || e.signal) && (i = (h) => {
      u && (r(!h || h.type ? new Ga(null, e, u) : h), u.abort(), u = null);
    }, e.cancelToken && e.cancelToken.subscribe(i), e.signal && (e.signal.aborted ? i() : e.signal.addEventListener("abort", i)));
    const p = jL(d);
    if (p && sn.protocols.indexOf(p) === -1) {
      r(new Le("Unsupported protocol " + p + ":", Le.ERR_BAD_REQUEST, e));
      return;
    }
    u.send(a || null);
  });
}, fi = {
  http: yL,
  xhr: GL
};
j.forEach(fi, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const jc = (e) => `- ${e}`, zL = (e) => j.isFunction(e) || e === null || e === !1, sv = {
  getAdapter: (e) => {
    e = j.isArray(e) ? e : [e];
    const { length: t } = e;
    let n, r;
    const a = {};
    for (let o = 0; o < t; o++) {
      n = e[o];
      let s;
      if (r = n, !zL(n) && (r = fi[(s = String(n)).toLowerCase()], r === void 0))
        throw new Le(`Unknown adapter '${s}'`);
      if (r)
        break;
      a[s || "#" + o] = r;
    }
    if (!r) {
      const o = Object.entries(a).map(
        ([i, l]) => `adapter ${i} ` + (l === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let s = t ? o.length > 1 ? `since :
` + o.map(jc).join(`
`) : " " + jc(o[0]) : "as no adapter specified";
      throw new Le(
        "There is no suitable adapter to dispatch the request " + s,
        "ERR_NOT_SUPPORT"
      );
    }
    return r;
  },
  adapters: fi
};
function As(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new Ga(null, e);
}
function Hc(e) {
  return As(e), e.headers = En.from(e.headers), e.data = Cs.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), sv.getAdapter(e.adapter || El.adapter)(e).then(function(r) {
    return As(e), r.data = Cs.call(
      e,
      e.transformResponse,
      r
    ), r.headers = En.from(r.headers), r;
  }, function(r) {
    return av(r) || (As(e), r && r.response && (r.response.data = Cs.call(
      e,
      e.transformResponse,
      r.response
    ), r.response.headers = En.from(r.response.headers))), Promise.reject(r);
  });
}
const Wc = (e) => e instanceof En ? e.toJSON() : e;
function zr(e, t) {
  t = t || {};
  const n = {};
  function r(c, u, d) {
    return j.isPlainObject(c) && j.isPlainObject(u) ? j.merge.call({ caseless: d }, c, u) : j.isPlainObject(u) ? j.merge({}, u) : j.isArray(u) ? u.slice() : u;
  }
  function a(c, u, d) {
    if (j.isUndefined(u)) {
      if (!j.isUndefined(c))
        return r(void 0, c, d);
    } else
      return r(c, u, d);
  }
  function o(c, u) {
    if (!j.isUndefined(u))
      return r(void 0, u);
  }
  function s(c, u) {
    if (j.isUndefined(u)) {
      if (!j.isUndefined(c))
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
    url: o,
    method: o,
    data: o,
    baseURL: s,
    transformRequest: s,
    transformResponse: s,
    paramsSerializer: s,
    timeout: s,
    timeoutMessage: s,
    withCredentials: s,
    adapter: s,
    responseType: s,
    xsrfCookieName: s,
    xsrfHeaderName: s,
    onUploadProgress: s,
    onDownloadProgress: s,
    decompress: s,
    maxContentLength: s,
    maxBodyLength: s,
    beforeRedirect: s,
    transport: s,
    httpAgent: s,
    httpsAgent: s,
    cancelToken: s,
    socketPath: s,
    responseEncoding: s,
    validateStatus: i,
    headers: (c, u) => a(Wc(c), Wc(u), !0)
  };
  return j.forEach(Object.keys(Object.assign({}, e, t)), function(u) {
    const d = l[u] || a, f = d(e[u], t[u], u);
    j.isUndefined(f) && d !== i || (n[u] = f);
  }), n;
}
const iv = "1.5.1", Ol = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  Ol[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const Gc = {};
Ol.transitional = function(t, n, r) {
  function a(o, s) {
    return "[Axios v" + iv + "] Transitional option '" + o + "'" + s + (r ? ". " + r : "");
  }
  return (o, s, i) => {
    if (t === !1)
      throw new Le(
        a(s, " has been removed" + (n ? " in " + n : "")),
        Le.ERR_DEPRECATED
      );
    return n && !Gc[s] && (Gc[s] = !0, console.warn(
      a(
        s,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(o, s, i) : !0;
  };
};
function KL(e, t, n) {
  if (typeof e != "object")
    throw new Le("options must be an object", Le.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let a = r.length;
  for (; a-- > 0; ) {
    const o = r[a], s = t[o];
    if (s) {
      const i = e[o], l = i === void 0 || s(i, o, e);
      if (l !== !0)
        throw new Le("option " + o + " must be " + l, Le.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new Le("Unknown option " + o, Le.ERR_BAD_OPTION);
  }
}
const pi = {
  assertOptions: KL,
  validators: Ol
}, Bn = pi.validators;
class Uo {
  constructor(t) {
    this.defaults = t, this.interceptors = {
      request: new Bc(),
      response: new Bc()
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
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = zr(this.defaults, n);
    const { transitional: r, paramsSerializer: a, headers: o } = n;
    r !== void 0 && pi.assertOptions(r, {
      silentJSONParsing: Bn.transitional(Bn.boolean),
      forcedJSONParsing: Bn.transitional(Bn.boolean),
      clarifyTimeoutError: Bn.transitional(Bn.boolean)
    }, !1), a != null && (j.isFunction(a) ? n.paramsSerializer = {
      serialize: a
    } : pi.assertOptions(a, {
      encode: Bn.function,
      serialize: Bn.function
    }, !0)), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let s = o && j.merge(
      o.common,
      o[n.method]
    );
    o && j.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (h) => {
        delete o[h];
      }
    ), n.headers = En.concat(s, o);
    const i = [];
    let l = !0;
    this.interceptors.request.forEach(function(g) {
      typeof g.runWhen == "function" && g.runWhen(n) === !1 || (l = l && g.synchronous, i.unshift(g.fulfilled, g.rejected));
    });
    const c = [];
    this.interceptors.response.forEach(function(g) {
      c.push(g.fulfilled, g.rejected);
    });
    let u, d = 0, f;
    if (!l) {
      const h = [Hc.bind(this), void 0];
      for (h.unshift.apply(h, i), h.push.apply(h, c), f = h.length, u = Promise.resolve(n); d < f; )
        u = u.then(h[d++], h[d++]);
      return u;
    }
    f = i.length;
    let p = n;
    for (d = 0; d < f; ) {
      const h = i[d++], g = i[d++];
      try {
        p = h(p);
      } catch (y) {
        g.call(this, y);
        break;
      }
    }
    try {
      u = Hc.call(this, p);
    } catch (h) {
      return Promise.reject(h);
    }
    for (d = 0, f = c.length; d < f; )
      u = u.then(c[d++], c[d++]);
    return u;
  }
  getUri(t) {
    t = zr(this.defaults, t);
    const n = ov(t.baseURL, t.url);
    return tv(n, t.params, t.paramsSerializer);
  }
}
j.forEach(["delete", "get", "head", "options"], function(t) {
  Uo.prototype[t] = function(n, r) {
    return this.request(zr(r || {}, {
      method: t,
      url: n,
      data: (r || {}).data
    }));
  };
});
j.forEach(["post", "put", "patch"], function(t) {
  function n(r) {
    return function(o, s, i) {
      return this.request(zr(i || {}, {
        method: t,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: o,
        data: s
      }));
    };
  }
  Uo.prototype[t] = n(), Uo.prototype[t + "Form"] = n(!0);
});
const mo = Uo;
class Dl {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function(o) {
      n = o;
    });
    const r = this;
    this.promise.then((a) => {
      if (!r._listeners)
        return;
      let o = r._listeners.length;
      for (; o-- > 0; )
        r._listeners[o](a);
      r._listeners = null;
    }), this.promise.then = (a) => {
      let o;
      const s = new Promise((i) => {
        r.subscribe(i), o = i;
      }).then(a);
      return s.cancel = function() {
        r.unsubscribe(o);
      }, s;
    }, t(function(o, s, i) {
      r.reason || (r.reason = new Ga(o, s, i), n(r.reason));
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
      token: new Dl(function(a) {
        t = a;
      }),
      cancel: t
    };
  }
}
const qL = Dl;
function ZL(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function XL(e) {
  return j.isObject(e) && e.isAxiosError === !0;
}
const vi = {
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
Object.entries(vi).forEach(([e, t]) => {
  vi[t] = e;
});
const JL = vi;
function lv(e) {
  const t = new mo(e), n = jp(mo.prototype.request, t);
  return j.extend(n, mo.prototype, t, { allOwnKeys: !0 }), j.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(a) {
    return lv(zr(e, a));
  }, n;
}
const at = lv(El);
at.Axios = mo;
at.CanceledError = Ga;
at.CancelToken = qL;
at.isCancel = av;
at.VERSION = iv;
at.toFormData = us;
at.AxiosError = Le;
at.Cancel = at.CanceledError;
at.all = function(t) {
  return Promise.all(t);
};
at.spread = ZL;
at.isAxiosError = XL;
at.mergeConfig = zr;
at.AxiosHeaders = En;
at.formToJSON = (e) => rv(j.isHTMLForm(e) ? new FormData(e) : e);
at.getAdapter = sv.getAdapter;
at.HttpStatusCode = JL;
at.default = at;
const jo = at;
function QL(e, t) {
  return O(), A("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, [
    $("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z",
      fill: "currentColor"
    })
  ]);
}
const kl = /* @__PURE__ */ fe({
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
    const r = Jr(e, t);
    return (a, o) => (O(), we(m(fh), tt(m(r), {
      class: m(Yd)(
        "peer h-4 w-4 shrink-0 rounded-sm border border-slate-200 border-slate-900 ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-slate-900 data-[state=checked]:text-slate-50 dark:border-slate-800 dark:border-slate-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300 dark:data-[state=checked]:bg-slate-50 dark:data-[state=checked]:text-slate-900",
        a.$attrs.class ?? ""
      )
    }), {
      default: he(() => [
        se(m(ph), { class: "flex h-full w-full items-center justify-center text-current" }, {
          default: he(() => [
            se(m(QL), { class: "h-4 w-4" })
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 16, ["class"]));
  }
}), eR = { class: "flex items-center flex-col justify-center py-2" }, tR = { class: "flex justify-start gap-2 w-full items-center" }, nR = {
  key: 0,
  class: "flex-shrink-0 cursor-pointer"
}, rR = ["for"], aR = {
  key: 0,
  class: "flex flex-col pl-6 w-full pt-2"
}, oR = /* @__PURE__ */ fe({
  __name: "EventActionTargetItem",
  props: {
    target: {},
    targets: {}
  },
  setup(e) {
    const t = Be("addTarget"), n = Y(!0);
    return (r, a) => {
      var o, s, i, l, c;
      return O(), A("div", eR, [
        $("div", {
          class: "item flex-1 flex gap-2 w-full items-center relative",
          onClick: a[1] || (a[1] = (u) => {
            var d;
            return (d = r.target) != null && d.children ? n.value = !m(n) : null;
          })
        }, [
          (o = r.target) != null && o.children ? Z("", !0) : (O(), we(m(kl), {
            key: 0,
            class: "rounded data-[state=checked]:bg-true-blue-3 border-true-blue-5",
            id: `target-${r.target.id}`,
            checked: r.targets.some((u) => u === r.target.id),
            "onUpdate:checked": a[0] || (a[0] = (u) => m(t)(r.target))
          }, null, 8, ["id", "checked"])),
          $("div", tR, [
            (s = r.target) != null && s.children ? (O(), A("div", nR, [
              m(n) ? (O(), we(m(Ud), {
                key: 0,
                class: "text-dark-3",
                size: 16
              })) : (O(), we(m(yy), {
                key: 1,
                class: "text-dark-4",
                size: 16
              }))
            ])) : Z("", !0),
            $("label", {
              for: `target-${r.target.id}`,
              class: Ie(["flex-1 cursor-pointer flex items-center gap-1", [(i = r.target) != null && i.children ? "p3-b" : "p3-r"]])
            }, [
              (l = r.target) != null && l.children ? Z("", !0) : (O(), A("div", {
                key: 0,
                class: Ie(["w-2 h-2 rounded-full", [r.target.enabled ? "bg-success-green-3" : "bg-red-3"]])
              }, null, 2)),
              $("span", {
                class: Ie([m(n) ? "text-dark-3" : "text-dark-4"])
              }, be(r.target.name), 3)
            ], 10, rR)
          ])
        ]),
        (c = r.target) != null && c.children && m(n) ? (O(), A("div", aR, [
          (O(!0), A(ie, null, Ae(r.target.children, (u) => (O(), we($l, {
            target: u,
            targets: r.targets
          }, null, 8, ["target", "targets"]))), 256))
        ])) : Z("", !0)
      ]);
    };
  }
});
const $l = /* @__PURE__ */ rd(oR, [["__scopeId", "data-v-79f71ea5"]]), sR = { class: "flex flex-col gap-6" }, iR = { class: "flex flex-col gap-6 pt-2" }, lR = { class: "flex justify-start items-center gap-2" }, uR = { class: "relative w-fit" }, cR = /* @__PURE__ */ $("span", { class: "p3-r text-dark-4" }, "平台", -1), dR = ["value"], fR = { class: "shadow-01 flex items-center py-1 px-2 rounded p3-r text-dark-3" }, pR = ["onClick"], vR = {
  key: 0,
  class: "text-dark-5 mx-1"
}, mR = { class: "flex gap-6" }, hR = { class: "flex justify-start items-center gap-2" }, gR = /* @__PURE__ */ $("span", { class: "p3-r text-dark-4" }, "層級", -1), yR = /* @__PURE__ */ $("option", {
  value: "",
  disabled: ""
}, "請選擇", -1), bR = ["value"], _R = { class: "flex gap-2" }, wR = { class: "flex justify-start items-center gap-2" }, ER = /* @__PURE__ */ $("span", { class: "p3-r text-dark-4" }, "項目", -1), OR = /* @__PURE__ */ $("option", {
  value: "",
  disabled: ""
}, "請選擇", -1), DR = ["value"], kR = {
  key: 0,
  class: "flex relative"
}, $R = ["value"], xR = {
  key: 0,
  class: "sticky top-0 left-0 pt-4 right-0 items-start bottom-0 w-full h-full flex justify-center bg-dark-3 bg-opacity-50 z-[2]"
}, TR = { class: "sticky flex flex-col max-h-[95%] bg-light-5 rounded-xs shadow-01 w-4/5 p-4 h-fit top-[3%]" }, CR = { class: "flex justify-between" }, AR = /* @__PURE__ */ $("span", { class: "p2-b flex justify-center mb-3 text-dark-2 mr-auto" }, "請選擇目標", -1), NR = {
  key: 0,
  class: "flex gap-2 mx-auto empty:hidden mb-8 items-center"
}, PR = /* @__PURE__ */ $("span", { class: "p3-r text-dark-3" }, "篩選器", -1), SR = ["for"], IR = ["onUpdate:modelValue", "id"], MR = {
  key: 1,
  class: "flex justify-between items-center"
}, LR = /* @__PURE__ */ $("div", { class: "flex items-center gap-2" }, [
  /* @__PURE__ */ $("div", { class: "flex items-center gap-1" }, [
    /* @__PURE__ */ $("div", { class: "w-1.5 h-1.5 rounded-full bg-success-green-3" }),
    /* @__PURE__ */ $("span", { class: "p4-r" }, "啟用中")
  ]),
  /* @__PURE__ */ $("div", { class: "flex items-center gap-1" }, [
    /* @__PURE__ */ $("div", { class: "w-1.5 h-1.5 rounded-full bg-red-3" }),
    /* @__PURE__ */ $("span", { class: "p4-r" }, "暫停中")
  ])
], -1), RR = { class: "flex w-fit items-center gap-1 justify-end p3-r text-true-blue-3 cursor-pointer" }, FR = /* @__PURE__ */ $("label", { for: "selectAllAdsStatus" }, " 全選 ", -1), VR = {
  key: 2,
  class: "h-4 w-4 mt-4 mx-auto animate-spin rounded-full border-2 border-solid border-blue-400 border-t-transparent"
}, BR = {
  key: 3,
  class: "flex flex-col gap-2 flex-1 overflow-y-auto"
}, YR = {
  key: 4,
  class: "mx-auto flex w-fit items-center gap-4 mt-4"
}, UR = { class: "flex flex-col gap-6" }, jR = { class: "flex justify-start items-center gap-2" }, HR = /* @__PURE__ */ $("span", { class: "p3-r text-dark-4" }, "執行", -1), WR = /* @__PURE__ */ $("option", {
  value: "",
  disabled: ""
}, "請選擇", -1), GR = ["value"], zR = { class: "flex justify-start gap-2 items-center" }, KR = /* @__PURE__ */ $("span", { class: "p3-r text-dark-4" }, "類型", -1), qR = { class: "shadow-01 flex items-center py-1 px-2 rounded p3-r text-dark-3" }, ZR = ["onClick"], XR = {
  key: 0,
  class: "text-dark-5 mx-1"
}, JR = {
  key: 0,
  class: "p3-r text-dark-4"
}, QR = { class: "flex gap-6 w-full" }, e8 = { class: "flex justify-start items-center gap-2" }, t8 = /* @__PURE__ */ $("span", { class: "p3-r text-dark-4 flex-shrink-0" }, "調整", -1), n8 = { class: "flex gap-10 w-full" }, r8 = { class: "flex gap-2 flex-1" }, a8 = { class: "shadow-01 flex items-center py-1 px-2 rounded p3-r text-dark-3" }, o8 = ["onClick"], s8 = {
  key: 0,
  class: "text-dark-5 mx-1"
}, i8 = {
  key: 0,
  class: "flex items-center gap-1 w-24"
}, l8 = { class: "p3-r text-dark-4" }, u8 = {
  key: 0,
  class: "flex justify-center gap-1 flex-col"
}, c8 = {
  key: 0,
  class: "flex gap-2 items-center"
}, d8 = /* @__PURE__ */ $("span", { class: "p3-r text-dark-4" }, "預算上限", -1), f8 = { class: "flex items-center gap-1" }, p8 = {
  key: 1,
  class: "flex gap-2 items-center w-28"
}, Ns = "", v8 = /* @__PURE__ */ fe({
  __name: "EventAction",
  setup(e) {
    const { t } = _r.global, n = Be("eventData"), r = Y(n.value.action ?? {}), a = Y(!!Object.keys(r.value).length), o = Y(!1);
    _e(o, (V) => {
      var B, te, z, S, H;
      (B = r.value.params) != null && B.limit || (z = (te = r.value) == null ? void 0 : te.params) == null || delete z.limit, V || (H = (S = r.value) == null ? void 0 : S.params) == null || delete H.limit;
    }), Et(() => {
      var V, B, te, z, S;
      ((V = r.value) == null ? void 0 : V.action) == ge.SetNewBudget || ((B = r.value) == null ? void 0 : B.action) == ge.IncreaseBudget || ((te = r.value) == null ? void 0 : te.action) == ge.LowerBudget || delete r.value.params, o.value = !!((S = (z = r.value) == null ? void 0 : z.params) != null && S.limit);
    }), _e(
      r,
      (V) => {
        n.value.action = V;
      },
      { deep: !0 }
    );
    const s = C(() => f.value == Ge.Google ? Gt : yt), i = {
      [Ge.Google]: {
        [Gt.Campaign]: {
          SetNewBudget: ge.SetNewBudget,
          IncreaseBudget: ge.IncreaseBudget,
          LowerBudget: ge.LowerBudget,
          OpenProject: ge.OpenProject,
          SuspendProject: ge.SuspendProject
        },
        [Gt.AdGroup]: {
          OpenProject: ge.OpenProject,
          SuspendProject: ge.SuspendProject
        },
        [Gt.AdTag]: {
          OpenProject: ge.OpenProject,
          SuspendProject: ge.SuspendProject
        }
        // [AdLevelTypeGoogle.Ad]: {
        //   OpenProject: ActionType.OpenProject,
        //   SuspendProject: ActionType.SuspendProject,
        // },
      },
      [Ge.Facebook]: {
        [yt.Campaign]: {
          SetNewBudget: ge.SetNewBudget,
          IncreaseBudget: ge.IncreaseBudget,
          LowerBudget: ge.LowerBudget,
          OpenProject: ge.OpenProject,
          SuspendProject: ge.SuspendProject
        },
        [yt.AdGroup]: {
          SetNewBudget: ge.SetNewBudget,
          IncreaseBudget: ge.IncreaseBudget,
          LowerBudget: ge.LowerBudget,
          OpenProject: ge.OpenProject,
          SuspendProject: ge.SuspendProject
        },
        [yt.AdTag]: {
          OpenProject: ge.OpenProject,
          SuspendProject: ge.SuspendProject
        },
        [yt.Ad]: {
          OpenProject: ge.OpenProject,
          SuspendProject: ge.SuspendProject
        }
      }
    }, l = C(() => {
      var te, z;
      const V = (te = r.value) == null ? void 0 : te.client, B = (z = r.value) == null ? void 0 : z.adLevel;
      if (V && B) {
        const S = i[V];
        if (S) {
          const H = S[B];
          if (H)
            return H;
        }
      }
      return {};
    }), c = {
      [Ge.Google]: {
        [Gt.Campaign]: {
          [ge.SetNewBudget]: [$e.Value],
          [ge.IncreaseBudget]: [$e.Percentage, $e.Value],
          [ge.LowerBudget]: [$e.Percentage, $e.Value],
          [ge.OpenProject]: [$e.Percentage, $e.Value],
          [ge.SuspendProject]: [$e.Percentage, $e.Value]
        },
        [Gt.AdGroup]: {
          [ge.SuspendProject]: [$e.Percentage, $e.Value]
        },
        [Gt.AdTag]: {
          [ge.SuspendProject]: [$e.Percentage, $e.Value]
        }
        // [AdLevelTypeGoogle.Ad]: {
        //   [ActionType.SuspendProject]: [ValueType.Percentage, ValueType.Value],
        // },
      },
      [Ge.Facebook]: {
        [yt.Campaign]: {
          [ge.SetNewBudget]: [$e.Value],
          [ge.IncreaseBudget]: [$e.Percentage, $e.Value],
          [ge.LowerBudget]: [$e.Percentage, $e.Value],
          [ge.OpenProject]: [$e.Percentage, $e.Value],
          [ge.SuspendProject]: [$e.Percentage, $e.Value]
        },
        [yt.AdGroup]: {
          [ge.SetNewBudget]: [$e.Value],
          [ge.IncreaseBudget]: [$e.Percentage, $e.Value],
          [ge.LowerBudget]: [$e.Percentage, $e.Value],
          [ge.OpenProject]: [$e.Percentage, $e.Value],
          [ge.SuspendProject]: [$e.Percentage, $e.Value]
        },
        [yt.AdTag]: {
          [ge.SuspendProject]: [$e.Percentage, $e.Value]
        },
        [yt.Ad]: {
          [ge.SuspendProject]: [$e.Percentage, $e.Value]
        }
      }
    }, u = C(() => {
      var z, S, H;
      const V = (z = r.value) == null ? void 0 : z.client, B = (S = r.value) == null ? void 0 : S.adLevel, te = (H = r.value) == null ? void 0 : H.action;
      if (V && B && te) {
        const ue = c[V];
        if (ue) {
          const k = ue[B];
          if (k) {
            const w = k[te];
            if (w)
              return w;
          }
        }
      }
      return [$e.Percentage, $e.Value];
    }), d = {
      target: {
        value: ""
      }
    }, f = C(() => r.value.client ? `${r.value.client}` : ""), p = (V) => {
      r.value.client = Number(V), delete r.value.target, g(d);
    }, h = C(() => r.value.adLevel ? r.value.adLevel : ""), g = (V) => {
      r.value.adLevel = Number(V.target.value), delete r.value.action, delete r.value.target, v(d);
    }, y = C(() => r.value.targetType ? r.value.targetType : ""), v = (V) => {
      r.value.targetType = Number(V.target.value);
    }, b = C(() => r.value.action ? r.value.action : ""), E = (V) => {
      r.value.action = Number(V.target.value);
    }, _ = C(() => {
      var V;
      return (V = r.value) != null && V.params || (r.value.params = {}), r.value.params.budgetType ? r.value.params.budgetType : "";
    }), T = (V) => r.value.params.budgetType = V, D = C(() => {
      var V;
      return (V = r.value) != null && V.params || (r.value.params = {}), r.value.params.valueType ? r.value.params.valueType : "";
    }), N = (V) => {
      r.value.params.valueType = V;
    }, I = Y(!1);
    qt("addTarget", (V) => {
      var te;
      (te = r.value) != null && te.target || (r.value.target = []);
      const B = r.value.target.findIndex(
        (z) => z === V.id
      );
      B === -1 ? r.value.target.push(V.id) : r.value.target.splice(B, 1);
    });
    const x = Y(), R = async () => {
      const V = await jo({
        method: "get",
        url: `${go()}/heybear/api/automation/platform-target?client=${f.value}&adLevel=${h.value}`,
        withCredentials: !0,
        headers: {
          Authorization: yo()
        }
      });
      x.value = V.data.data, ce.value = Me(x.value);
    }, P = Y(!1), G = C(() => {
      const V = le.value.trim().toLowerCase();
      Ee.value = 0;
      const B = (S) => S.name.toLowerCase().includes(V), te = (S) => {
        let H = [];
        for (const ue of S) {
          let k = !1;
          if (ce.value.forEach((w) => {
            w.label == ue.type && w.status == ue.enabled && !ue.enabled && (k = !0);
          }), B(ue) && (!ue.children || ue.children.length === 0) && !k && (H.push(ue), Ee.value++), ue.children && ue.children.length > 0) {
            const w = te(ue.children);
            if (w.length > 0)
              H.push({
                id: ue.id,
                name: ue.name,
                children: w
              });
            else if (k)
              continue;
          } else if (k)
            continue;
        }
        return H;
      }, z = [];
      for (const S of x.value)
        if (S.children) {
          const H = te(S.children);
          H.length > 0 && z.push({
            id: S.id,
            name: S.name,
            type: S.type,
            children: H
          });
        } else
          z.push({
            id: S.id,
            name: S.name,
            type: S.type
          }), Ee.value++;
      return z;
    }), ee = () => {
      r.value.target = [];
    }, X = async () => {
      I.value = !0, P.value = !0, await R(), P.value = !1;
    }, ae = Be("lockScroll");
    _e(I, (V) => {
      ae.value = V, V || (le.value = "");
    });
    const le = Y(""), Ee = Y(), ve = C(() => {
      var V;
      return (V = r.value) != null && V.target || (r.value.target = []), r.value.target.length == Ee.value;
    }), W = () => {
      var te;
      const V = G.value, B = (z) => {
        for (const S of z)
          S.children && S.children.length > 0 ? B(S.children) : r.value.target.push(S.id);
      };
      (te = r.value) != null && te.target || (r.value.target = []), r.value.target.length ? r.value.target = [] : (r.value.target = [], B(V));
    }, ce = Y([]);
    function Me(V) {
      const B = [];
      function te(z, S) {
        if (z.type !== 1 && z.type !== 5 && (B[S - 1] || (B[S - 1] = {
          label: z.type,
          status: !1
        }), B[S - 1].status = !0), z.children && z.children.length > 0)
          for (const H of z.children)
            te(H, S + 1);
      }
      return V.forEach((z) => {
        te(z, 1);
      }), B.filter((z) => z !== void 0);
    }
    const Ye = Y(!1);
    Yt(() => {
      Ye.value = !0;
    });
    const oe = () => {
      a.value = !1, r.value = {}, bt(() => {
        delete n.value.action;
      });
    }, Ne = C(() => {
      const V = f.value, B = r.value.adLevel, te = _.value;
      if (te === "")
        return { show: !1 };
      const z = V === Ge.Google && B === Gt.Campaign, S = V === Ge.Facebook && B === yt.Campaign, H = V === Ge.Facebook && B === yt.AdGroup, ue = z || S || H, k = te === Oa.DailyBudget ? "日預算" : "總預算", w = `${Ge[V]}${s.value[B]}`, F = ue ? `若${t(w)}設定為${te !== Ns ? k : ""}，則不會變更` : "";
      return { show: ue, msg: F };
    });
    return (V, B) => m(a) ? (O(), we(xa, {
      key: 1,
      title: "動作",
      icon: "PhNavigationArrow",
      id: "action"
    }, {
      default: he(() => {
        var te, z;
        return [
          $("div", sR, [
            $("div", iR, [
              $("div", {
                class: "cursor-pointer text-dark-4 absolute bottom-4 right-3 hover:text-dark-3 transition-all p3-r",
                onClick: oe
              }, [
                se(m(jd), {
                  size: "18",
                  weight: "bold"
                })
              ]),
              $("label", lR, [
                $("div", uR, [
                  cR,
                  $("input", {
                    type: "text",
                    class: "opacity-0 absolute left-0 top-0 pointer-events-none",
                    required: "",
                    value: m(f)
                  }, null, 8, dR)
                ]),
                $("div", fR, [
                  (O(!0), A(ie, null, Ae(m(Ge), (S, H, ue) => (O(), A("div", {
                    class: "flex",
                    key: H
                  }, [
                    Number.isInteger(S) ? Z("", !0) : (O(), A(ie, { key: 0 }, [
                      $("span", {
                        class: Ie(["cursor-pointer hover:drop-shadow-md", {
                          "text-true-blue-3 drop-shadow-sm p3-b": m(f) == H
                        }]),
                        onClick: (k) => p(H)
                      }, be(S), 11, pR),
                      ue < Object.keys(m(Ge)).filter((k) => isNaN(Number(k))).length - 1 ? (O(), A("div", vR, " | ")) : Z("", !0)
                    ], 64))
                  ]))), 128))
                ])
              ]),
              $("div", mR, [
                $("label", hR, [
                  gR,
                  st($("select", {
                    class: "p3-b text-true-blue-3 w-fit flex cursor-pointer items-center justify-center gap-2 rounded shadow-01 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
                    "onUpdate:modelValue": B[1] || (B[1] = (S) => He(h) ? h.value = S : null),
                    onChange: g,
                    required: ""
                  }, [
                    yR,
                    (O(!0), A(ie, null, Ae(m(s), (S, H) => (O(), A(ie, { key: H }, [
                      !Number.isInteger(S) && m(f) != Ns ? (O(), A("option", {
                        key: 0,
                        value: H
                      }, be(m(t)(`${m(Ge)[m(f)]}${S}`)), 9, bR)) : Z("", !0)
                    ], 64))), 128))
                  ], 544), [
                    [Nt, m(h)]
                  ])
                ]),
                $("div", _R, [
                  $("label", wR, [
                    ER,
                    st($("select", {
                      class: "p3-b text-true-blue-3 w-fit flex cursor-pointer items-center justify-center gap-2 rounded shadow-01 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
                      "onUpdate:modelValue": B[2] || (B[2] = (S) => He(y) ? y.value = S : null),
                      onChange: v,
                      required: ""
                    }, [
                      OR,
                      (O(!0), A(ie, null, Ae(m(Pt), (S, H) => (O(), A(ie, { key: H }, [
                        Number.isInteger(S) ? Z("", !0) : (O(), A("option", {
                          key: 0,
                          value: H
                        }, be(m(t)(S)), 9, DR))
                      ], 64))), 128))
                    ], 544), [
                      [Nt, m(y)]
                    ])
                  ]),
                  m(y) === m(Pt).ForID ? (O(), A("div", kR, [
                    m(y) === m(Pt).ForID ? (O(), A("span", {
                      key: 0,
                      class: Ie(["p3-b w-fit flex cursor-pointer items-center justify-center z-[2]", [
                        m(r).target && m(r).target.length ? " text-true-blue-3" : "text-red-2"
                      ]]),
                      onClick: X
                    }, be(m(r).target && m(r).target.length ? `已選${m(r).target.length}個項目` : "未選擇"), 3)) : Z("", !0),
                    $("input", {
                      type: "text",
                      class: "opacity-0 absolute left-0 top-0",
                      required: "",
                      value: (te = m(r)) != null && te.target && (z = m(r)) != null && z.target.length ? "123" : ""
                    }, null, 8, $R)
                  ])) : Z("", !0)
                ])
              ])
            ]),
            m(Ye) ? (O(), we(gi, {
              key: 0,
              to: "#editor-container-outer"
            }, [
              m(I) ? (O(), A("div", xR, [
                $("div", TR, [
                  $("div", CR, [
                    AR,
                    se(m(Fr), {
                      class: "text-dark-3 cursor-pointer hover:text-dark-2",
                      weight: "bold",
                      onClick: B[3] || (B[3] = (S) => I.value = !1)
                    })
                  ]),
                  se(Wn, {
                    modelValue: m(le),
                    "onUpdate:modelValue": B[4] || (B[4] = (S) => He(le) ? le.value = S : null),
                    placeholder: "搜尋",
                    class: "max-w-xs min-w-[200px] mx-auto w-full mb-4"
                  }, null, 8, ["modelValue"]),
                  !m(P) && m(ce).length ? (O(), A("div", NR, [
                    PR,
                    (O(!0), A(ie, null, Ae(m(ce), (S) => (O(), A("label", {
                      class: Ie(["p3-r flex cursor-pointer items-center gap-1 rounded bg-light-5 px-1.5 py-0.5 text-dark-3 border", {
                        "bg-true-blue-3 border-true-blue-3 text-light-5": !S.status
                      }]),
                      key: S.label,
                      for: S.label
                    }, [
                      st($("input", {
                        type: "checkbox",
                        "onUpdate:modelValue": (H) => S.status = H,
                        id: S.label,
                        class: "hidden",
                        onChange: ee
                      }, null, 40, IR), [
                        [ho, S.status]
                      ]),
                      Gn(" " + be(m(t)(
                        `${m(Ge)[m(f)]}${S.status ? "On" : "Off"}${S.label}`
                      )), 1)
                    ], 10, SR))), 128))
                  ])) : Z("", !0),
                  m(P) ? Z("", !0) : (O(), A("div", MR, [
                    LR,
                    $("div", RR, [
                      se(m(kl), {
                        class: "rounded data-[state=checked]:bg-true-blue-3 border-true-blue-5",
                        id: "selectAllAdsStatus",
                        checked: m(ve),
                        "onUpdate:checked": W
                      }, null, 8, ["checked"]),
                      FR
                    ])
                  ])),
                  m(P) ? (O(), A("div", VR)) : (O(), A("div", BR, [
                    (O(!0), A(ie, null, Ae(m(G), (S) => {
                      var H;
                      return O(), we($l, {
                        key: S.id,
                        target: S,
                        targets: ((H = m(r)) == null ? void 0 : H.target) ?? []
                      }, null, 8, ["target", "targets"]);
                    }), 128))
                  ])),
                  m(P) ? Z("", !0) : (O(), A("div", YR, [
                    $("div", {
                      class: "p3-b flex cursor-pointer items-center gap-1 rounded bg-true-blue-2 border border-transparent px-2 py-1 text-light-5 hover:bg-true-blue-3",
                      onClick: B[5] || (B[5] = (S) => I.value = !1)
                    }, " 確定 ")
                  ]))
                ])
              ])) : Z("", !0)
            ])) : Z("", !0),
            $("div", UR, [
              $("label", jR, [
                HR,
                st($("select", {
                  class: "p3-b text-true-blue-3 w-fit flex cursor-pointer items-center justify-center gap-2 rounded shadow-01 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
                  "onUpdate:modelValue": B[6] || (B[6] = (S) => He(b) ? b.value = S : null),
                  onChange: E,
                  required: ""
                }, [
                  WR,
                  (O(!0), A(ie, null, Ae(m(l), (S, H) => (O(), A("option", {
                    key: H,
                    value: S
                  }, be(m(t)(H)), 9, GR))), 128))
                ], 544), [
                  [Nt, m(b)]
                ])
              ]),
              m(r).action == m(ge).SetNewBudget || m(r).action == m(ge).IncreaseBudget || m(r).action == m(ge).LowerBudget ? (O(), A(ie, { key: 0 }, [
                $("label", zR, [
                  KR,
                  $("div", qR, [
                    (O(!0), A(ie, null, Ae(m(Oa), (S, H, ue) => (O(), A("div", {
                      class: "flex",
                      key: H
                    }, [
                      Number.isInteger(S) ? Z("", !0) : (O(), A(ie, { key: 0 }, [
                        $("span", {
                          class: Ie(["cursor-pointer hover:drop-shadow-md", {
                            "text-true-blue-3 drop-shadow-sm p3-b": m(_) == H
                          }]),
                          onClick: (k) => T(H)
                        }, be(m(t)(S)), 11, ZR),
                        ue < Object.keys(m(Oa)).filter(
                          (k) => isNaN(Number(k))
                        ).length - 1 ? (O(), A("div", XR, " | ")) : Z("", !0)
                      ], 64))
                    ]))), 128))
                  ]),
                  m(Ne).show ? (O(), A("span", JR, be(m(Ne).msg), 1)) : Z("", !0)
                ]),
                $("div", QR, [
                  $("div", e8, [
                    t8,
                    $("div", n8, [
                      $("div", r8, [
                        $("div", a8, [
                          (O(!0), A(ie, null, Ae(m(u), (S, H) => (O(), A("div", {
                            class: "flex",
                            key: S
                          }, [
                            Number.isInteger(S) ? Z("", !0) : (O(), A(ie, { key: 0 }, [
                              $("span", {
                                class: Ie(["cursor-pointer hover:drop-shadow-md", {
                                  "text-true-blue-3 drop-shadow-sm p3-b": m(D) == S
                                }]),
                                onClick: (ue) => N(S)
                              }, be(m(t)(`action${S}`)), 11, o8),
                              H < m(u).length - 1 ? (O(), A("div", s8, " | ")) : Z("", !0)
                            ], 64))
                          ]))), 128))
                        ]),
                        m(D) != Ns ? (O(), A("label", i8, [
                          se(Wn, {
                            modelValue: m(r).params.value,
                            "onUpdate:modelValue": B[7] || (B[7] = (S) => m(r).params.value = S),
                            inputClass: "text-true-blue-3",
                            type: "number",
                            required: !0
                          }, null, 8, ["modelValue"]),
                          $("span", l8, be(m(r).params.valueType === m($e).Percentage ? "%" : "元"), 1)
                        ])) : Z("", !0)
                      ])
                    ])
                  ]),
                  m(r).action == m(ge).IncreaseBudget || m(r).action == m(ge).LowerBudget ? (O(), A("div", u8, [
                    m(r).params.valueType === m($e).Percentage ? (O(), A("div", c8, [
                      d8,
                      $("div", f8, [
                        m(o) ? Z("", !0) : (O(), A("div", {
                          key: 0,
                          class: "p3-b text-true-blue-3 w-fit flex cursor-pointer items-center justify-center gap-2 rounded shadow-01 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
                          onClick: B[8] || (B[8] = (S) => o.value = !0)
                        }, " 未設定 ")),
                        m(o) ? (O(), A("div", p8, [
                          se(Wn, {
                            modelValue: m(r).params.limit,
                            "onUpdate:modelValue": B[9] || (B[9] = (S) => m(r).params.limit = S),
                            inputClass: "text-true-blue-3",
                            type: "number",
                            required: !0
                          }, null, 8, ["modelValue"])
                        ])) : Z("", !0),
                        m(o) ? (O(), we(m(Fr), {
                          key: 2,
                          onClick: B[10] || (B[10] = (S) => o.value = !1),
                          weight: "bold",
                          class: "text-dark-4 hover:text-dark-3 p3-b cursor-pointer"
                        })) : Z("", !0)
                      ])
                    ])) : Z("", !0)
                  ])) : Z("", !0)
                ])
              ], 64)) : Z("", !0)
            ])
          ])
        ];
      }),
      _: 1
    })) : (O(), A("div", {
      key: 0,
      class: "p3-b cursor-pointer rounded shadow-01 hover:shadow-02 transition-all bg-light-5 py-1 px-2 text-dark-4 flex items-center justify-center",
      onClick: B[0] || (B[0] = (te) => a.value = !0)
    }, " + 加入動作 "));
  }
}), m8 = { class: "flex flex-col gap-6" }, h8 = { class: "flex flex-col gap-6 pt-2" }, g8 = { class: "flex justify-start items-center gap-2" }, y8 = { class: "relative w-fit" }, b8 = /* @__PURE__ */ $("span", { class: "p3-r text-dark-4" }, "平台", -1), _8 = ["value"], w8 = { class: "shadow-01 flex items-center py-1 px-2 rounded p3-r text-dark-3" }, E8 = ["onClick"], O8 = {
  key: 0,
  class: "text-dark-5 mx-1"
}, D8 = { class: "flex gap-6" }, k8 = { class: "flex justify-start items-center gap-2" }, $8 = /* @__PURE__ */ $("span", { class: "p3-r text-dark-4" }, "層級", -1), x8 = /* @__PURE__ */ $("option", {
  value: "",
  disabled: ""
}, "請選擇", -1), T8 = ["value"], C8 = { class: "flex gap-2" }, A8 = { class: "flex justify-start items-center gap-2" }, N8 = /* @__PURE__ */ $("span", { class: "p3-r text-dark-4" }, "項目", -1), P8 = /* @__PURE__ */ $("option", {
  value: "",
  disabled: ""
}, "請選擇", -1), S8 = ["value"], I8 = {
  key: 0,
  class: "flex relative"
}, M8 = ["value"], L8 = {
  key: 0,
  class: "sticky top-0 left-0 pt-4 right-0 items-start bottom-0 w-full h-full flex justify-center bg-dark-3 bg-opacity-50 z-[2]"
}, R8 = { class: "sticky flex flex-col max-h-[95%] bg-light-5 rounded-xs shadow-01 w-4/5 p-4 h-fit top-[3%]" }, F8 = { class: "flex justify-between" }, V8 = /* @__PURE__ */ $("span", { class: "p2-b flex justify-center mb-3 text-dark-2 mr-auto" }, "請選擇目標", -1), B8 = {
  key: 0,
  class: "flex gap-2 mx-auto items-center empty:hidden mb-8"
}, Y8 = /* @__PURE__ */ $("span", { class: "p3-r text-dark-3" }, "篩選器", -1), U8 = ["for"], j8 = ["onUpdate:modelValue", "id"], H8 = {
  key: 1,
  class: "flex justify-between items-center"
}, W8 = /* @__PURE__ */ $("div", { class: "flex items-center gap-2" }, [
  /* @__PURE__ */ $("div", { class: "flex items-center gap-1" }, [
    /* @__PURE__ */ $("div", { class: "w-1.5 h-1.5 rounded-full bg-success-green-3" }),
    /* @__PURE__ */ $("span", { class: "p4-r" }, "啟用中")
  ]),
  /* @__PURE__ */ $("div", { class: "flex items-center gap-1" }, [
    /* @__PURE__ */ $("div", { class: "w-1.5 h-1.5 rounded-full bg-red-3" }),
    /* @__PURE__ */ $("span", { class: "p4-r" }, "暫停中")
  ])
], -1), G8 = { class: "flex w-fit items-center gap-1 justify-end p3-r text-true-blue-3 cursor-pointer" }, z8 = /* @__PURE__ */ $("label", { for: "selectAllAdsStatus" }, " 全選 ", -1), K8 = {
  key: 2,
  class: "h-4 w-4 mt-4 mx-auto animate-spin rounded-full border-2 border-solid border-blue-400 border-t-transparent"
}, q8 = {
  key: 3,
  class: "flex flex-col gap-2 flex-1 overflow-y-auto"
}, Z8 = {
  key: 4,
  class: "mx-auto flex w-fit items-center gap-4 mt-4"
}, X8 = { class: "flex justify-start gap-2 items-center" }, J8 = /* @__PURE__ */ $("span", { class: "p3-r text-dark-4" }, "條件", -1), Q8 = /* @__PURE__ */ $("option", {
  value: "",
  disabled: ""
}, "請選擇", -1), eF = ["value"], tF = { class: "flex flex-col gap-6" }, nF = { class: "flex gap-2" }, rF = { class: "flex justify-start gap-2 items-center" }, aF = /* @__PURE__ */ $("span", { class: "p3-r text-dark-4" }, "區間", -1), oF = /* @__PURE__ */ $("option", {
  value: "",
  disabled: ""
}, "請選擇", -1), sF = ["value"], iF = { class: "flex gap-2 empty:hidden" }, lF = { key: 0 }, uF = ["onClick"], cF = ["value"], dF = { class: "flex items-center gap-2 empty:hidden" }, fF = ["id"], pF = ["for"], vF = {
  key: 1,
  class: "p3-b text-dark-3"
}, mF = { class: "flex items-center gap-1" }, hF = {
  key: 0,
  class: "p3-b rounded shadow-01 bg-light-5 py-1 px-2 text-true-blue-3 flex items-center justify-center"
}, gF = { class: "flex justify-start gap-2 items-center" }, yF = /* @__PURE__ */ $("span", { class: "p3-r text-dark-4" }, "運算", -1), bF = { class: "flex items-center gap-2" }, _F = /* @__PURE__ */ $("option", {
  value: "",
  disabled: ""
}, "請選擇", -1), wF = ["value"], EF = { class: "flex items-center gap-1" }, OF = /* @__PURE__ */ $("option", {
  value: "",
  disabled: ""
}, "請選擇", -1), DF = ["value"], kF = { class: "flex gap-1 items-center w-24" }, $F = {
  key: 0,
  class: "p3-r text-dark-4"
}, Ps = "", xF = /* @__PURE__ */ fe({
  __name: "ConditionItem",
  props: {
    modelValue: {},
    index: {}
  },
  emits: ["update:modelValue", "removeItem"],
  setup(e, { emit: t }) {
    const n = e, { t: r } = _r.global, a = C(() => n.modelValue ?? {}), o = C(() => {
      var V;
      return ((V = a.value) == null ? void 0 : V.client) == Ge.Google ? Tr : Cr;
    }), s = {
      target: {
        value: ""
      }
    }, i = C(() => a.value.client ? a.value.client : ""), l = (V) => {
      a.value.client = V, delete a.value.target, u(s);
    }, c = C(() => a.value.adLevel ? a.value.adLevel : ""), u = (V) => {
      a.value.adLevel = Number(V.target.value), p.value != Ps && t("update:modelValue", {
        client: i.value,
        adLevel: c.value
      }), delete a.value.action, delete a.value.target, f(s);
    }, d = C(() => a.value.targetType ? a.value.targetType : ""), f = (V) => {
      a.value.targetType = Number(V.target.value), delete a.value.action, delete a.value.target, a.value.targetType === Pt.ForID && (a.value.target = []);
    }, p = C(() => a.value.conditionType ? a.value.conditionType : ""), h = (V) => a.value.conditionType = V.target.value, g = C(() => a.value.dateRangeType ? a.value.dateRangeType : ""), y = (V) => {
      a.value.dateRangeType = Number(V.target.value), Number(V.target.value) !== rn.SpecifiedTime && delete a.value.dateRange;
    }, v = C(() => a.value.operation ? a.value.operation : ""), b = (V) => a.value.operation = V.target.value, E = C(() => a.value.valueType ? a.value.valueType : ""), _ = (V) => a.value.valueType = V.target.value, T = {
      [Ge.Google]: {
        [Tr.Campaign]: {
          Clicks: De.Clicks,
          Impressions: De.Impressions,
          Cpc: De.Cpc,
          Spend: De.Spend,
          Conversions: De.Conversions,
          ConversionSpend: De.ConversionSpend,
          ReturnOnADSpending: De.ReturnOnADSpending
        },
        [Tr.AdGroup]: {
          Clicks: De.Clicks,
          Impressions: De.Impressions,
          Cpc: De.Cpc,
          Spend: De.Spend,
          Conversions: De.Conversions,
          ConversionSpend: De.ConversionSpend,
          ReturnOnADSpending: De.ReturnOnADSpending
        },
        [Tr.Account]: {
          BudgetRemaining: De.BudgetRemaining,
          Clicks: De.Clicks,
          Impressions: De.Impressions,
          Cpc: De.Cpc,
          Spend: De.Spend,
          Conversions: De.Conversions,
          ConversionSpend: De.ConversionSpend,
          ReturnOnADSpending: De.ReturnOnADSpending
        }
      },
      [Ge.Facebook]: {
        [Cr.Campaign]: {
          Clicks: De.Clicks,
          BudgetCap: De.BudgetCap,
          Impressions: De.Impressions,
          Cpc: De.Cpc,
          Spend: De.Spend,
          Conversions: De.Conversions,
          ConversionSpend: De.ConversionSpend,
          ReturnOnADSpending: De.ReturnOnADSpending
        },
        [Cr.AdGroup]: {
          Clicks: De.Clicks,
          Impressions: De.Impressions,
          Cpc: De.Cpc,
          Spend: De.Spend,
          Conversions: De.Conversions,
          ConversionSpend: De.ConversionSpend,
          ReturnOnADSpending: De.ReturnOnADSpending
        },
        [Cr.Account]: {
          BudgetRemaining: De.BudgetRemaining,
          Clicks: De.Clicks,
          Impressions: De.Impressions,
          Cpc: De.Cpc,
          Spend: De.Spend,
          Conversions: De.Conversions,
          ConversionSpend: De.ConversionSpend,
          ReturnOnADSpending: De.ReturnOnADSpending
        }
      }
    }, D = C(() => {
      if (i.value && c.value) {
        const V = T[i.value];
        if (V) {
          const B = V[c.value];
          if (B)
            return B;
        }
      }
      return {};
    }), N = Y(!1), I = Be("lockScroll");
    _e(N, (V) => {
      I.value = V, V || (le.value = "");
    }), qt("addTarget", (V) => {
      var te;
      (te = a.value) != null && te.target || (a.value.target = []);
      const B = a.value.target.findIndex(
        (z) => z === V.id
      );
      B === -1 ? a.value.target.push(V.id) : a.value.target.splice(B, 1);
    });
    const x = Y(), R = async () => {
      const V = await jo({
        method: "get",
        url: `${go()}/heybear/api/automation/platform-target?client=${i.value}&adLevel=${c.value}`,
        withCredentials: !0,
        headers: {
          Authorization: yo()
        }
      });
      x.value = V.data.data, ce.value = Me(x.value);
    }, P = C(() => {
      const V = le.value.trim().toLowerCase();
      Ee.value = 0;
      const B = (S) => S.name.toLowerCase().includes(V), te = (S) => {
        let H = [];
        for (const ue of S) {
          let k = !1;
          if (ce.value.forEach((w) => {
            w.label == ue.type && w.status == ue.enabled && !ue.enabled && (k = !0);
          }), B(ue) && (!ue.children || ue.children.length === 0) && !k && (H.push(ue), Ee.value++), ue.children && ue.children.length > 0) {
            const w = te(ue.children);
            if (w.length > 0)
              H.push({
                id: ue.id,
                name: ue.name,
                children: w
              });
            else if (k)
              continue;
          } else if (k)
            continue;
        }
        return H;
      }, z = [];
      for (const S of x.value)
        if (S.children) {
          const H = te(S.children);
          H.length > 0 && z.push({
            id: S.id,
            name: S.name,
            type: S.type,
            children: H
          });
        } else
          z.push({
            id: S.id,
            name: S.name,
            type: S.type
          }), Ee.value++;
      return z;
    }), G = Y(!1), ee = () => {
      const V = P.value, B = (te) => {
        for (const z of te)
          z.children && z.children.length > 0 ? B(z.children) : a.value.target.push(z.id);
      };
      a.value.target.length ? a.value.target = [] : (a.value.target = [], B(V));
    }, X = () => {
      a.value.target = [];
    }, ae = async () => {
      N.value = !0, G.value = !0, await R(), G.value = !1;
    }, le = Y(""), Ee = Y(), ve = C(() => {
      var V;
      return (V = a.value) != null && V.target || (a.value.target = []), a.value.target.length == Ee.value;
    }), W = Y(!1);
    Yt(() => {
      W.value = !0;
    });
    const ce = Y([]);
    function Me(V) {
      const B = [];
      function te(z, S) {
        if (z.type !== 1 && z.type !== 5 && (B[S - 1] || (B[S - 1] = {
          label: z.type,
          status: !1
        }), B[S - 1].status = !0), z.children && z.children.length > 0)
          for (const H of z.children)
            te(H, S + 1);
      }
      return V.forEach((z) => {
        te(z, 1);
      }), B.filter((z) => z !== void 0);
    }
    function Ye(V) {
      const B = new Date(V.start), te = new Date(V.end), z = new Date(B - 1), S = new Date(z - (te - B)), H = { year: "numeric", month: "2-digit", day: "2-digit" }, ue = S.toLocaleDateString(
        "zh-TW",
        H
      ), k = z.toLocaleDateString(
        "zh-TW",
        H
      );
      return `${ue}-${k}`;
    }
    const oe = Y(Math.random().toString(16).slice(2)), Ne = C(() => n.modelValue.comparison ? g.value === -1 ? a.value.dateRange ? `${Ye(a.value.dateRange)}` : "" : {
      [rn.Today]: "與作天相比",
      [rn.Yesterday]: "與前一天相比",
      [rn.Last3Days]: "與前3天相比",
      [rn.Last7Days]: "與前7天相比",
      [rn.ThisMonth]: "與上個月相比"
    }[g.value] : "");
    return (V, B) => (O(), we(xa, {
      title: "條件" + (V.index + 1),
      icon: "PhCheckSquare"
    }, {
      default: he(() => {
        var te, z;
        return [
          $("div", m8, [
            $("div", h8, [
              $("div", {
                class: "cursor-pointer text-dark-4 absolute bottom-4 right-3 hover:text-dark-3 p3-r transition-all",
                onClick: B[0] || (B[0] = (S) => t("removeItem"))
              }, [
                se(m(jd), {
                  size: "18",
                  weight: "bold"
                })
              ]),
              $("label", g8, [
                $("div", y8, [
                  b8,
                  $("input", {
                    type: "text",
                    class: "opacity-0 absolute left-0 top-0 pointer-events-none",
                    required: "",
                    value: m(i)
                  }, null, 8, _8)
                ]),
                $("div", w8, [
                  (O(!0), A(ie, null, Ae(m(Ge), (S, H, ue) => (O(), A("div", {
                    class: "flex",
                    key: H
                  }, [
                    Number.isInteger(S) ? Z("", !0) : (O(), A(ie, { key: 0 }, [
                      $("span", {
                        class: Ie(["cursor-pointer hover:drop-shadow-md", {
                          "text-true-blue-3 drop-shadow-sm p3-b": m(i) == H
                        }]),
                        onClick: (k) => l(H)
                      }, be(S), 11, E8),
                      ue < Object.keys(m(Ge)).filter((k) => isNaN(Number(k))).length - 1 ? (O(), A("div", O8, " | ")) : Z("", !0)
                    ], 64))
                  ]))), 128))
                ])
              ]),
              $("div", D8, [
                $("label", k8, [
                  $8,
                  st($("select", {
                    class: "p3-b text-true-blue-3 w-fit flex cursor-pointer items-center justify-center gap-2 rounded shadow-01 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
                    "onUpdate:modelValue": B[1] || (B[1] = (S) => He(c) ? c.value = S : null),
                    onChange: u,
                    required: ""
                  }, [
                    x8,
                    (O(!0), A(ie, null, Ae(m(o), (S, H) => (O(), A(ie, { key: H }, [
                      !Number.isInteger(S) && m(i) != Ps ? (O(), A("option", {
                        key: 0,
                        value: H
                      }, be(m(r)(`${m(Ge)[m(i)]}${S}`)), 9, T8)) : Z("", !0)
                    ], 64))), 128))
                  ], 544), [
                    [Nt, m(c)]
                  ])
                ]),
                $("div", C8, [
                  $("label", A8, [
                    N8,
                    st($("select", {
                      class: "p3-b text-true-blue-3 w-fit flex cursor-pointer items-center justify-center gap-2 rounded shadow-01 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
                      "onUpdate:modelValue": B[2] || (B[2] = (S) => He(d) ? d.value = S : null),
                      onChange: f,
                      required: ""
                    }, [
                      P8,
                      (O(!0), A(ie, null, Ae(m(Pt), (S, H) => (O(), A(ie, { key: H }, [
                        Number.isInteger(S) ? Z("", !0) : (O(), A("option", {
                          key: 0,
                          value: H
                        }, be(m(r)(S)), 9, S8))
                      ], 64))), 128))
                    ], 544), [
                      [Nt, m(d)]
                    ])
                  ]),
                  m(d) === m(Pt).ForID ? (O(), A("div", I8, [
                    m(d) === m(Pt).ForID ? (O(), A("span", {
                      key: 0,
                      class: Ie(["p3-b w-fit flex cursor-pointer items-center justify-center z-[2]", [
                        m(a).target && m(a).target.length ? " text-true-blue-3" : "text-red-2"
                      ]]),
                      onClick: ae
                    }, be(m(a).target && m(a).target.length ? `已選${m(a).target.length}個項目` : "未選擇"), 3)) : Z("", !0),
                    $("input", {
                      type: "text",
                      class: "opacity-0 absolute left-0 top-0",
                      required: "",
                      value: (te = m(a)) != null && te.target && (z = m(a)) != null && z.target.length ? "123" : ""
                    }, null, 8, M8)
                  ])) : Z("", !0)
                ])
              ])
            ]),
            m(W) ? (O(), we(gi, {
              key: 0,
              to: "#editor-container-outer"
            }, [
              m(N) ? (O(), A("div", L8, [
                $("div", R8, [
                  $("div", F8, [
                    V8,
                    se(m(Fr), {
                      class: "text-dark-3 cursor-pointer hover:text-dark-2",
                      weight: "bold",
                      onClick: B[3] || (B[3] = (S) => N.value = !1)
                    })
                  ]),
                  se(Wn, {
                    modelValue: m(le),
                    "onUpdate:modelValue": B[4] || (B[4] = (S) => He(le) ? le.value = S : null),
                    placeholder: "搜尋",
                    class: "max-w-xs min-w-[200px] mx-auto w-full mb-4"
                  }, null, 8, ["modelValue"]),
                  !m(G) && m(ce).length ? (O(), A("div", B8, [
                    Y8,
                    (O(!0), A(ie, null, Ae(m(ce), (S) => (O(), A("label", {
                      class: Ie(["p3-r flex cursor-pointer items-center gap-1 rounded bg-light-5 px-1.5 py-0.5 text-dark-3 border", {
                        "bg-true-blue-3 border-true-blue-3 text-light-5": !S.status
                      }]),
                      key: S.label,
                      for: S.label
                    }, [
                      st($("input", {
                        type: "checkbox",
                        "onUpdate:modelValue": (H) => S.status = H,
                        id: S.label,
                        class: "hidden",
                        onChange: X
                      }, null, 40, j8), [
                        [ho, S.status]
                      ]),
                      Gn(" " + be(m(r)(
                        `${m(Ge)[m(i)]}${S.status ? "On" : "Off"}${S.label}`
                      )), 1)
                    ], 10, U8))), 128))
                  ])) : Z("", !0),
                  m(G) ? Z("", !0) : (O(), A("div", H8, [
                    W8,
                    $("div", G8, [
                      se(m(kl), {
                        class: "rounded data-[state=checked]:bg-true-blue-3 border-true-blue-5",
                        id: "selectAllAdsStatus",
                        checked: m(ve),
                        "onUpdate:checked": ee
                      }, null, 8, ["checked"]),
                      z8
                    ])
                  ])),
                  m(G) ? (O(), A("div", K8)) : (O(), A("div", q8, [
                    (O(!0), A(ie, null, Ae(m(P), (S) => {
                      var H;
                      return O(), we($l, {
                        key: S.id,
                        target: S,
                        targets: ((H = m(a)) == null ? void 0 : H.target) ?? []
                      }, null, 8, ["target", "targets"]);
                    }), 128))
                  ])),
                  m(G) ? Z("", !0) : (O(), A("div", Z8, [
                    $("div", {
                      class: "p3-b flex cursor-pointer items-center gap-1 rounded bg-true-blue-2 border border-transparent px-2 py-1 text-light-5 hover:bg-true-blue-3",
                      onClick: B[5] || (B[5] = (S) => N.value = !1)
                    }, " 確定 ")
                  ]))
                ])
              ])) : Z("", !0)
            ])) : Z("", !0),
            $("label", X8, [
              J8,
              st($("select", {
                class: "p3-b text-true-blue-3 flex cursor-pointer items-center justify-center gap-2 rounded shadow-01 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
                "onUpdate:modelValue": B[6] || (B[6] = (S) => He(p) ? p.value = S : null),
                onChange: h,
                required: ""
              }, [
                Q8,
                (O(!0), A(ie, null, Ae(m(D), (S, H) => (O(), A("option", {
                  key: H,
                  value: S
                }, be(m(r)(H)), 9, eF))), 128))
              ], 544), [
                [Nt, m(p)]
              ])
            ]),
            $("div", tF, [
              $("div", nF, [
                $("label", rF, [
                  aF,
                  st($("select", {
                    class: "p3-b text-true-blue-3 flex cursor-pointer items-center justify-center gap-2 rounded shadow-01 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
                    "onUpdate:modelValue": B[7] || (B[7] = (S) => He(g) ? g.value = S : null),
                    onChange: y,
                    required: ""
                  }, [
                    oF,
                    (O(!0), A(ie, null, Ae(m(rn), (S, H) => (O(), A(ie, { key: H }, [
                      Number.isInteger(S) ? Z("", !0) : (O(), A("option", {
                        key: 0,
                        value: H
                      }, be(m(r)(S)), 9, sF))
                    ], 64))), 128))
                  ], 544), [
                    [Nt, m(g)]
                  ])
                ]),
                $("div", iF, [
                  m(g) == m(rn).SpecifiedTime ? (O(), A("div", lF, [
                    se(m(il), {
                      modelValue: m(a).dateRange,
                      "onUpdate:modelValue": B[8] || (B[8] = (S) => m(a).dateRange = S),
                      modelModifiers: { range: !0 },
                      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
                    }, {
                      default: he(({ togglePopover: S, inputValue: H }) => [
                        $("div", {
                          class: "p3-b text-true-blue-3 flex relative cursor-pointer items-center justify-center gap-2 rounded shadow-01 bg-light-5 py-1 px-2 transition-all hover:bg-light-3 hover:bg-opacity-50",
                          onClick: S
                        }, [
                          $("input", {
                            value: H.end,
                            required: "",
                            class: "opacity-0 absolute w-full h-full pointer-events-none"
                          }, null, 8, cF),
                          Gn(" " + be(H.start && H.end ? `${H.start}-${H.end}` : "請選定區間"), 1)
                        ], 8, uF)
                      ]),
                      _: 1
                    }, 8, ["modelValue", "timezone"])
                  ])) : Z("", !0),
                  $("div", dF, [
                    st($("input", {
                      type: "checkbox",
                      "onUpdate:modelValue": B[9] || (B[9] = (S) => V.modelValue.comparison = S),
                      class: "hidden",
                      id: `comparison-${m(oe)}`
                    }, null, 8, fF), [
                      [ho, V.modelValue.comparison]
                    ]),
                    V.modelValue.comparison ? Z("", !0) : (O(), A("label", {
                      key: 0,
                      class: "p3-b text-dark-3 w-fit flex cursor-pointer items-center justify-center gap-2 rounded bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
                      for: `comparison-${m(oe)}`
                    }, "加入比較區間", 8, pF)),
                    V.modelValue.comparison ? (O(), A("span", vF, " vs ")) : Z("", !0)
                  ]),
                  $("div", mF, [
                    V.modelValue.comparison && m(Ne) !== "" ? (O(), A("div", hF, be(m(Ne)), 1)) : Z("", !0),
                    V.modelValue.comparison ? (O(), we(m(Fr), {
                      key: 1,
                      onClick: B[10] || (B[10] = (S) => V.modelValue.comparison = !1),
                      weight: "bold",
                      class: "text-dark-4 hover:text-dark-3 p3-b cursor-pointer"
                    })) : Z("", !0)
                  ])
                ])
              ]),
              $("div", gF, [
                yF,
                $("label", bF, [
                  st($("select", {
                    class: "p3-b text-true-blue-3 flex cursor-pointer items-center justify-center gap-2 rounded shadow-01 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
                    "onUpdate:modelValue": B[11] || (B[11] = (S) => He(v) ? v.value = S : null),
                    onChange: b,
                    required: ""
                  }, [
                    _F,
                    (O(!0), A(ie, null, Ae(m(bi), (S, H) => (O(), A(ie, { key: H }, [
                      Number.isInteger(S) ? Z("", !0) : (O(), A("option", {
                        key: 0,
                        value: S
                      }, be(m(r)(H)), 9, wF))
                    ], 64))), 128))
                  ], 544), [
                    [Nt, m(v)]
                  ])
                ]),
                $("label", EF, [
                  st($("select", {
                    class: "p3-b text-true-blue-3 flex cursor-pointer items-center justify-center gap-2 rounded shadow-01 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
                    "onUpdate:modelValue": B[12] || (B[12] = (S) => He(E) ? E.value = S : null),
                    onChange: _,
                    required: ""
                  }, [
                    OF,
                    (O(!0), A(ie, null, Ae(m($e), (S, H) => (O(), A(ie, { key: H }, [
                      Number.isInteger(S) ? Z("", !0) : (O(), A("option", {
                        key: 0,
                        value: S
                      }, be(m(r)(`condition${H}`)), 9, DF))
                    ], 64))), 128))
                  ], 544), [
                    [Nt, m(E)]
                  ])
                ]),
                $("div", kF, [
                  se(Wn, {
                    modelValue: m(a).value,
                    "onUpdate:modelValue": B[13] || (B[13] = (S) => m(a).value = S),
                    inputClass: "text-true-blue-3",
                    type: "number",
                    required: !0
                  }, null, 8, ["modelValue"]),
                  m(E) != Ps ? (O(), A("span", $F, be(m(a).valueType === m($e).Percentage ? "%" : "元"), 1)) : Z("", !0)
                ])
              ])
            ])
          ])
        ];
      }),
      _: 1
    }, 8, ["title"]));
  }
}), TF = {
  key: 0,
  class: "flex items-center justify-center gap-3"
}, CF = /* @__PURE__ */ $("div", { class: "h-[1px] flex-1 bg-light-3" }, null, -1), AF = /* @__PURE__ */ $("p", { class: "p3-b to-dark-4" }, "且", -1), NF = /* @__PURE__ */ $("div", { class: "h-[1px] flex-1 bg-light-3" }, null, -1), PF = [
  CF,
  AF,
  NF
], SF = {
  key: 0,
  class: "absolute top-0 left-0 pt-4 right-0 bottom-0 w-full h-full flex justify-center bg-dark-3 bg-opacity-50 z-[2]"
}, IF = { class: "sticky flex flex-col max-h-[90%] bg-light-5 rounded-xs shadow-01 w-4/5 p-4 h-fit top-4" }, MF = { class: "flex justify-between" }, LF = /* @__PURE__ */ $("span", { class: "p2-b flex justify-center mb-3 text-dark-2 mr-auto" }, "請選擇條件", -1), RF = {
  key: 0,
  class: "h-4 mt-4 w-4 mx-auto animate-spin rounded-full border-2 border-solid border-blue-400 border-t-transparent"
}, FF = {
  key: 1,
  class: "flex flex-col gap-2.5 mt-8 overflow-y-auto flex-1 px-1 py-0.5"
}, VF = ["onClick"], BF = { class: "flex flex-col flex-1 gap-1.5" }, YF = { class: "p3-b text-dark-3" }, UF = { class: "p3-r text-dark-5" }, jF = {
  key: 3,
  class: "mx-auto flex w-fit items-center gap-4 mt-4"
}, HF = /* @__PURE__ */ fe({
  __name: "Condition",
  setup(e) {
    const t = Y(!1), n = Be("eventData"), r = Y(n.value.conditions ?? []);
    _e(
      r,
      (g) => {
        n.value.conditions = g;
      },
      { deep: !0 }
    );
    const a = () => {
      const g = document.getElementById("editor-container-outer");
      g && bt(() => {
        setTimeout(() => {
          g.scrollTop = g.scrollHeight;
        }, 200);
      });
    }, o = () => {
      r.value.push({}), t.value = !1, a();
    }, s = async (g) => {
      const y = await jo({
        method: "get",
        url: `${go()}/heybear/api/automation/ad-events/template/${g}`,
        withCredentials: !0,
        headers: {
          Authorization: yo()
        }
      });
      r.value.push(y.data.data), t.value = !1, a();
    }, i = (g) => {
      r.value.splice(g, 1);
    }, l = Y(""), c = Y([]), u = C(() => "title"), d = async () => {
      const g = await jo({
        method: "get",
        url: `${go()}/heybear/api/automation/template`,
        params: { type: 2 },
        withCredentials: !0,
        headers: {
          Authorization: yo()
        }
      });
      c.value = g.data.data;
    }, f = C(() => {
      const g = l.value.toLowerCase();
      return c.value.filter(
        (y) => y[u.value].toLowerCase().includes(g)
      );
    }), p = Y(!1), h = async () => {
      t.value = !0, p.value = !0, await d(), p.value = !1;
    };
    return (g, y) => (O(), A(ie, null, [
      (O(!0), A(ie, null, Ae(m(r), (v, b) => (O(), A(ie, { key: b }, [
        se(xF, {
          index: b,
          modelValue: m(r)[b],
          "onUpdate:modelValue": (E) => m(r)[b] = E,
          onRemoveItem: (E) => i(b)
        }, null, 8, ["index", "modelValue", "onUpdate:modelValue", "onRemoveItem"]),
        b + 1 !== m(r).length ? (O(), A("div", TF, PF)) : Z("", !0)
      ], 64))), 128)),
      $("div", {
        class: "p3-b cursor-pointer rounded shadow-01 hover:shadow-02 transition-all bg-light-5 py-1 px-2 text-dark-4 flex items-center justify-center",
        onClick: h,
        id: "condition"
      }, " + 加入條件 "),
      m(t) ? (O(), A("div", SF, [
        $("div", IF, [
          $("div", MF, [
            LF,
            se(m(Fr), {
              class: "text-dark-3 cursor-pointer hover:text-dark-2",
              weight: "bold",
              onClick: y[0] || (y[0] = (v) => t.value = !1)
            })
          ]),
          se(Wn, {
            class: "max-w-xs min-w-[200px] mx-auto w-full",
            placeholder: "輸入關鍵字搜尋 ex: 轉換數",
            modelValue: m(l),
            "onUpdate:modelValue": y[1] || (y[1] = (v) => He(l) ? l.value = v : null)
          }, null, 8, ["modelValue"]),
          m(p) ? (O(), A("div", RF)) : (O(), A("div", FF, [
            (O(!0), A(ie, null, Ae(m(f), (v) => (O(), A("div", {
              class: "shadow-01 rounded items-center py-1 px-3 flex gap-1 hover:bg-true-blue-5 cursor-pointer",
              key: v.id,
              onClick: (b) => s(v.id)
            }, [
              $("div", BF, [
                $("span", YF, be(v.title), 1),
                $("span", UF, be(v.description), 1)
              ])
            ], 8, VF))), 128))
          ])),
          m(p) ? Z("", !0) : (O(), A("div", {
            key: 2,
            class: "border ml-auto mt-2 border-true-blue-3 text-true-blue-3 rounded px-1 w-fit p3-b cursor-pointer hover:text-true-blue-2 hover:border-true-blue-2",
            onClick: o
          }, " 自訂 ")),
          m(p) ? Z("", !0) : (O(), A("div", jF, [
            $("div", {
              class: "p3-b flex cursor-pointer items-center gap-1 rounded border bg-light-5 border-dark-5 px-2 py-1 text-dark-4 hover:text-light-5 hover:bg-dark-5",
              onClick: y[2] || (y[2] = (v) => t.value = !1)
            }, " 取消 ")
          ]))
        ])
      ])) : Z("", !0)
    ], 64));
  }
}), WF = { class: "flex flex-1 items-center justify-start gap-2" }, GF = /* @__PURE__ */ $("span", { class: "p3-r text-dark-4" }, "以電子郵件寄出結果", -1), zF = /* @__PURE__ */ $("option", {
  value: "",
  disabled: ""
}, "請選擇", -1), KF = ["value"], qF = /* @__PURE__ */ fe({
  __name: "Notification",
  setup(e) {
    const { t } = _r.global, n = Be("eventData"), r = Y(
      n.value.notify ?? {
        email: bo.All
      }
    );
    return _e(
      r,
      (a) => {
        n.value.notify = a;
      },
      { deep: !0, immediate: !0 }
    ), (a, o) => (O(), A("div", null, [
      $("label", WF, [
        GF,
        st($("select", {
          class: "p3-b text-true-blue-3 flex cursor-pointer items-center justify-center gap-2 rounded shadow-01 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
          "onUpdate:modelValue": o[0] || (o[0] = (s) => m(r).email = s)
        }, [
          zF,
          (O(!0), A(ie, null, Ae(m(bo), (s, i) => (O(), A(ie, { key: i }, [
            Number.isInteger(s) ? Z("", !0) : (O(), A("option", {
              key: 0,
              value: Number(i)
            }, be(m(t)(`mail${s}`)), 9, KF))
          ], 64))), 128))
        ], 512), [
          [Nt, m(r).email]
        ])
      ])
    ]));
  }
}), ZF = ["onSubmit"], XF = { class: "space-y-1" }, JF = {
  key: 0,
  class: "text-red-1"
}, QF = 100, e3 = /* @__PURE__ */ fe({
  __name: "TCEventEditorApp",
  props: {
    data: {}
  },
  emits: ["update:data"],
  setup(e, { expose: t, emit: n }) {
    const r = e;
    _r.global;
    const a = C(() => JSON.parse(r.data || "{}")), o = (d) => {
      const f = Object.fromEntries(
        Object.entries(d).filter(([p, h]) => h !== null)
      );
      return JSON.stringify(f, null, 4);
    }, s = Y([]), i = (d) => {
      d.preventDefault(), n("update:data", o(a.value));
    }, l = () => {
      var d;
      for (const f of document.getElementById("editor-container").querySelectorAll("[required]"))
        if (f.getAttribute("required") == null && !f.reportValidity())
          throw new Error("未填寫完畢");
      (d = c.value) == null || d.click();
    };
    qt("eventData", a), qt("checkDataValid", s);
    const c = Y(), u = Y(!1);
    return qt("lockScroll", u), t({
      saveData: l
    }), (d, f) => r.data ? (O(), A("div", {
      key: 0,
      class: Ie(["flex-1 h-full scroll-smooth", [m(u) ? "overflow-y-hidden" : "overflow-y-auto"]]),
      id: "editor-container-outer"
    }, [
      $("form", {
        class: "flex flex-col gap-5 relative p-5 h-fit text-dark-1 min-h-full w-full",
        id: "editor-container",
        onSubmit: Ta(i, ["prevent"])
      }, [
        se(xa, {
          title: "規則名稱",
          icon: "PhNotepad",
          id: "name"
        }, {
          default: he(() => [
            $("div", XF, [
              se(Wn, {
                modelValue: m(a).title,
                "onUpdate:modelValue": f[0] || (f[0] = (p) => m(a).title = p),
                inputClass: "text-true-blue-3",
                maxLength: QF,
                required: !0
              }, null, 8, ["modelValue"])
            ])
          ]),
          _: 1
        }),
        se(xa, {
          title: "執行時間",
          icon: "PhCalendarCheck",
          id: "time"
        }, {
          default: he(() => [
            se(MM, {
              frequency: m(a).frequency,
              "onUpdate:frequency": f[1] || (f[1] = (p) => m(a).frequency = p),
              interval: m(a).interval,
              "onUpdate:interval": f[2] || (f[2] = (p) => m(a).interval = p)
            }, null, 8, ["frequency", "interval"])
          ]),
          _: 1
        }),
        se(xa, {
          title: "通知",
          icon: "PhBellRinging",
          id: "notification"
        }, {
          default: he(() => [
            se(qF)
          ]),
          _: 1
        }),
        se(v8),
        se(HF),
        m(s).length ? (O(), A("span", JF, "資料未填寫完整")) : Z("", !0),
        $("button", {
          ref_key: "submitBtn",
          ref: c,
          class: "p-2 px-3 rounded bg-slate-100 hover:bg-sky-500 hover:text-white hidden"
        }, " 保存 ", 512)
      ], 40, ZF)
    ], 2)) : Z("", !0);
  }
});
function p3(e) {
  if (!e)
    return "";
  const { t } = _r.global;
  let n, r;
  return e.client === Ge.Google ? r = Gt : r = yt, e.targetType === Pt.ForAll && (n = "所有的" + t(`${Ge[e.client]}${r[e.adLevel]}`)), e.targetType === Pt.ForActive && (n = "已開啟的" + t(`${Ge[e.client]}${r[e.adLevel]}`)), e.targetType === Pt.ForID && (n = `${e.target.length}個` + t(`${Ge[e.client]}${r[e.adLevel]}`)), n;
}
function v3(e) {
  const { t } = _r.global;
  return e != null && e.email ? t(`mail${_i[e.email]}`) : "";
}
const t3 = (e) => {
  e.component("TCEventEditorApp", e3);
}, m3 = {
  install: t3
};
export {
  yy as F,
  Ud as G,
  e3 as _,
  jd as a,
  Fr as b,
  a3 as c,
  p3 as d,
  o3 as e,
  v3 as f,
  Dv as g,
  m3 as i,
  r3 as s
};
