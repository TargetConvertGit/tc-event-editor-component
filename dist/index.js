import { defineComponent as ee, openBlock as a, createElementBlock as o, createElementVNode as l, toDisplayString as k, ref as I, watchEffect as Ae, computed as N, watch as T, onBeforeUnmount as Fe, Fragment as b, unref as t, renderList as B, createBlock as oe, createCommentVNode as c, withDirectives as q, isRef as P, vModelSelect as J, onUnmounted as Ge, vModelCheckbox as $e, withCtx as re, inject as Ve, createVNode as z, createTextVNode as Je, renderSlot as Le, onMounted as je, Teleport as qe, normalizeClass as Me, nextTick as ze, createStaticVNode as He, provide as Oe, withModifiers as Xe, pushScopeId as Qe, popScopeId as Ye, resolveComponent as Ke } from "vue";
import { DatePicker as Ne } from "v-calendar";
import { useI18n as Ze } from "vue-i18n";
function Sa(e) {
}
class We {
  // 取得列舉索引
  getEnumKey(_, g) {
    return _[g];
  }
  // 從字串解析事件本身
  parseItem(_) {
    return JSON.parse(_);
  }
  getCurrent() {
    return (/* @__PURE__ */ new Date()).toISOString();
  }
}
var H = /* @__PURE__ */ ((e) => (e[e.Google = 1] = "Google", e[e.Facebook = 2] = "Facebook", e))(H || {}), W = /* @__PURE__ */ ((e) => (e[e.Campaign = 1] = "Campaign", e[e.AdGroup = 2] = "AdGroup", e[e.Ad = 3] = "Ad", e[e.AdTag = 4] = "AdTag", e))(W || {}), Z = /* @__PURE__ */ ((e) => (e[e.Campaign = 1] = "Campaign", e[e.AdGroup = 2] = "AdGroup", e[e.Ad = 3] = "Ad", e[e.AdTag = 4] = "AdTag", e))(Z || {}), ie = /* @__PURE__ */ ((e) => (e[e.ForAll = 1] = "ForAll", e[e.ForID = 2] = "ForID", e[e.ForActive = 3] = "ForActive", e))(ie || {}), pe = /* @__PURE__ */ ((e) => (e[e.Account = 1] = "Account", e[e.Campaign = 2] = "Campaign", e[e.AdGroup = 3] = "AdGroup", e))(pe || {}), ve = /* @__PURE__ */ ((e) => (e[e.Account = 1] = "Account", e[e.Campaign = 2] = "Campaign", e[e.AdGroup = 3] = "AdGroup", e))(ve || {}), M = /* @__PURE__ */ ((e) => (e[e.Never = -1] = "Never", e[e.Hour = 1] = "Hour", e[e.Day = 2] = "Day", e[e.Week = 3] = "Week", e[e.Month = 4] = "Month", e[e.Annual = 5] = "Annual", e))(M || {}), te = /* @__PURE__ */ ((e) => (e[e.Sunday = 0] = "Sunday", e[e.Monday = 1] = "Monday", e[e.Tuesday = 2] = "Tuesday", e[e.Wednesday = 3] = "Wednesday", e[e.Thursday = 4] = "Thursday", e[e.Friday = 5] = "Friday", e[e.Saturday = 6] = "Saturday", e[e.Weekday = -1] = "Weekday", e[e.Weekend = -2] = "Weekend", e))(te || {}), ue = /* @__PURE__ */ ((e) => (e[e.First = 1] = "First", e[e.Second = 2] = "Second", e[e.Third = 3] = "Third", e[e.Fourth = 4] = "Fourth", e[e.Fifth = 5] = "Fifth", e[e.Last = -1] = "Last", e))(ue || {}), Y = /* @__PURE__ */ ((e) => (e[e.January = 1] = "January", e[e.February = 2] = "February", e[e.March = 3] = "March", e[e.April = 4] = "April", e[e.May = 5] = "May", e[e.June = 6] = "June", e[e.July = 7] = "July", e[e.August = 8] = "August", e[e.September = 9] = "September", e[e.October = 10] = "October", e[e.November = 11] = "November", e[e.December = 12] = "December", e))(Y || {}), s = /* @__PURE__ */ ((e) => (e[e.SetNewBudget = 1] = "SetNewBudget", e[e.IncreaseBudget = 2] = "IncreaseBudget", e[e.LowerBudget = 3] = "LowerBudget", e[e.OpenProject = 4] = "OpenProject", e[e.SuspendProject = 5] = "SuspendProject", e[e.None = -1] = "None", e))(s || {}), ge = /* @__PURE__ */ ((e) => (e.DailyBudget = "dailyBudget", e.TotalBudget = "totalBudget", e))(ge || {}), u = /* @__PURE__ */ ((e) => (e.Value = "value", e.Percentage = "percentage", e))(u || {}), h = /* @__PURE__ */ ((e) => (e.BudgetRemaining = "budgetRemaining", e.BudgetCap = "budgetCap", e.Clicks = "clicks", e.Impressions = "impressions", e.Cpc = "CPC", e.Spend = "spend", e.Conversions = "conversions", e.ConversionSpend = "conversionSpend", e.ReturnOnADSpending = "roas", e))(h || {}), fe = /* @__PURE__ */ ((e) => (e[e.Today = 1] = "Today", e[e.Yesterday = 2] = "Yesterday", e[e.Last3Days = 3] = "Last3Days", e[e.Last7Days = 4] = "Last7Days", e[e.ThisMonth = 5] = "ThisMonth", e[e.SpecifiedTime = -1] = "SpecifiedTime", e))(fe || {}), Ie = /* @__PURE__ */ ((e) => (e.MoreThan = ">", e.GreaterOrEqualTo = ">=", e.Equal = "==", e.LessThan = "<", e.LessThanOrEqualTo = "<=", e))(Ie || {}), Pe = /* @__PURE__ */ ((e) => (e[e.AbnormalityOrError = 0] = "AbnormalityOrError", e[e.Error = 1] = "Error", e[e.None = -1] = "None", e))(Pe || {});
const wa = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ActionType: s,
  AdLevelTypeFacebook: Z,
  AdLevelTypeGoogle: W,
  BudgetType: ge,
  ClientType: H,
  ConditionAdLevelTypeFacebook: ve,
  ConditionAdLevelTypeGoogle: pe,
  ConditionType: h,
  DateRangeType: fe,
  EventActionTargetType: ie,
  EventHelper: We,
  FrequencyType: M,
  MonthType: Y,
  OperationType: Ie,
  ValueType: u,
  WeekOrdinalWordsType: ue,
  WeekdaysType: te,
  emailType: Pe
}, Symbol.toStringTag, { value: "Module" })), Te = { class: "flex" }, et = ["checked", "id"], tt = ["for"], nt = /* @__PURE__ */ ee({
  __name: "CheckBox",
  props: {
    label: {},
    checked: { type: Boolean },
    fieldId: {}
  },
  emits: ["update:checked"],
  setup(e, { emit: _ }) {
    return (g, n) => (a(), o("div", Te, [
      l("input", {
        onInput: n[0] || (n[0] = (m) => g.$emit("update:checked", m.target.checked)),
        type: "checkbox",
        checked: g.checked,
        id: g.fieldId,
        class: "hidden"
      }, null, 40, et),
      l("label", {
        for: g.fieldId,
        class: "p3-r cursor-pointer rounded border hover:bg-light-4 border-dark-5 px-1 py-0.5 flex justify-center items-center text-dark-2 min-w-[1.75rem] min-h-[1.75rem]"
      }, k(g.label), 9, tt)
    ]));
  }
});
const Be = (e, _) => {
  const g = e.__vccOpts || e;
  for (const [n, m] of _)
    g[n] = m;
  return g;
}, De = /* @__PURE__ */ Be(nt, [["__scopeId", "data-v-8bd665ed"]]), lt = {
  key: 0,
  class: "flex gap-1.5 flex-wrap"
}, at = {
  key: 1,
  class: "flex gap-2 items-center"
}, ot = /* @__PURE__ */ l("span", { class: "p3-r" }, "指定", -1), rt = ["value"], st = { class: "flex gap-4 flex-wrap" }, ut = /* @__PURE__ */ ee({
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
  setup(e, { emit: _ }) {
    const g = e, n = I(g.monthDate), m = I(g.weekOrdinal), v = I(g.weekdays), y = I(g.yearMonths), S = (D, E, G = !1) => {
      if (G) {
        E.findIndex((w) => w === D) === -1 ? E.push(D) : E.splice(E.indexOf(D), 1), E.sort((w, K) => w - K);
        return;
      }
      E.value.findIndex((w) => w === D) === -1 ? E.value.push(D) : E.value.splice(E.value.indexOf(D), 1), E.value.sort((w, K) => w - K);
    };
    Ae(() => {
      _(
        "update:monthDate",
        n.value.length ? n.value : null
      ), _(
        "update:weekOrdinal",
        m.value.length ? m.value : null
      ), _(
        "update:weekdays",
        v.value.length ? v.value : null
      ), _(
        "update:yearMonths",
        y.value.length ? y.value : null
      );
    });
    const F = I([
      { name: "星期日", id: te.Sunday },
      { name: "星期一", id: te.Monday },
      { name: "星期二", id: te.Tuesday },
      { name: "星期三", id: te.Wednesday },
      { name: "星期四", id: te.Thursday },
      { name: "星期五", id: te.Friday },
      { name: "星期六", id: te.Saturday },
      { name: "平日", id: te.Weekday },
      { name: "週末", id: te.Weekend }
    ]), L = I([
      { name: "第一週", id: ue.First },
      { name: "第二週", id: ue.Second },
      { name: "第三週", id: ue.Third },
      { name: "第四週", id: ue.Fourth },
      { name: "第五週", id: ue.Fifth },
      { name: "最後一週", id: ue.Last }
    ]), R = I([
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
    ]), O = I([
      {
        name: "一月",
        id: Y.January
      },
      {
        name: "二月",
        id: Y.February
      },
      {
        name: "三月",
        id: Y.March
      },
      {
        name: "四月",
        id: Y.April
      },
      {
        name: "五月",
        id: Y.May
      },
      {
        name: "六月",
        id: Y.June
      },
      {
        name: "七月",
        id: Y.July
      },
      {
        name: "八月",
        id: Y.August
      },
      {
        name: "九月",
        id: Y.September
      },
      {
        name: "十月",
        id: Y.October
      },
      {
        name: "十一月",
        id: Y.November
      },
      {
        name: "十二月",
        id: Y.December
      }
    ]), U = N(() => {
      if (g.type === M.Week)
        return [
          {
            key: v,
            label: "weekdaysOrigin",
            options: F.value
          }
        ];
      if (g.type === M.Month) {
        if (f.value.id === 0)
          return [
            {
              key: m,
              label: "weekOrdinalOrigin",
              options: L.value
            },
            {
              key: v,
              label: "weekdaysOrigin",
              options: F.value
            }
          ];
        if (f.value.id === 1)
          return [
            {
              key: n,
              label: "monthDateOrigin",
              options: R.value
            }
          ];
      }
      if (g.type === M.Annual) {
        if (f.value.id === 0)
          return [
            {
              key: m,
              label: "weekOrdinalOrigin",
              options: L.value
            },
            {
              key: v,
              label: "weekdaysOrigin",
              options: F.value
            }
          ];
        if (f.value.id === 1)
          return [
            {
              key: n,
              label: "monthDateOrigin",
              options: R.value
            }
          ];
      }
    }), V = N(() => g.type === M.Month || g.type === M.Annual ? !0 : (n.value = [], m.value = [], v.value = [], y.value = [], !1)), A = I([
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
    ]), f = I(A.value[0]);
    return T(f, (D) => {
      if (D.id === 0) {
        n.value = [];
        return;
      }
      if (D.id === 1) {
        m.value = [], v.value = [];
        return;
      }
    }), T(
      () => g.type,
      (D) => {
        (D === M.Month || D === M.Annual) && (D != M.Annual && (y.value = []), R.value && R.value.length > 0 ? f.value = A.value[1] : f.value = A.value[0]);
      },
      { immediate: !0 }
    ), Fe(() => {
      n.value = [], m.value = [], v.value = [], y.value = [];
    }), (D, E) => (a(), o(b, null, [
      D.type === t(M).Annual ? (a(), o("div", lt, [
        (a(!0), o(b, null, B(t(O), (G) => {
          var w;
          return a(), oe(De, {
            key: G.id,
            checked: (w = t(y)) == null ? void 0 : w.includes(G.id),
            "onUpdate:checked": (K) => S(G.id, t(y), !0),
            fieldId: G.name,
            label: G.name
          }, null, 8, ["checked", "onUpdate:checked", "fieldId", "label"]);
        }), 128))
      ])) : c("", !0),
      t(V) ? (a(), o("div", at, [
        ot,
        q(l("select", {
          class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
          "onUpdate:modelValue": E[0] || (E[0] = (G) => P(f) ? f.value = G : null)
        }, [
          (a(!0), o(b, null, B(t(A), (G, w) => (a(), o("option", {
            key: w,
            value: G
          }, k(G.name), 9, rt))), 128))
        ], 512), [
          [J, t(f)]
        ])
      ])) : c("", !0),
      l("div", st, [
        (a(!0), o(b, null, B(t(U), (G) => (a(), o("div", {
          class: "flex gap-1 flex-wrap",
          key: G
        }, [
          (a(!0), o(b, null, B(G.options, (w) => {
            var K;
            return a(), oe(De, {
              key: w.id,
              checked: (K = G.key.value) == null ? void 0 : K.includes(w.id),
              "onUpdate:checked": (X) => S(w.id, G.key),
              fieldId: w.name,
              label: w.name
            }, null, 8, ["checked", "onUpdate:checked", "fieldId", "label"]);
          }), 128))
        ]))), 128))
      ])
    ], 64));
  }
});
const it = { class: "flex flex-col gap-2" }, dt = { class: "flex items-center gap-2" }, ct = /* @__PURE__ */ l("label", {
  for: "due",
  class: "p3-b"
}, "結束於指定日期", -1), pt = ["onClick"], vt = /* @__PURE__ */ ee({
  __name: "DuePicker",
  props: {
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: _ }) {
    const g = e, n = N({
      get: () => g.modelValue,
      set: (v) => _("update:modelValue", v)
    }), m = I(!1);
    return T(
      () => g.modelValue,
      (v) => {
        v && (m.value = !0);
      },
      { immediate: !0 }
    ), T(m, (v) => {
      v || _("update:modelValue", null);
    }), Ge(() => {
      _("update:modelValue", null);
    }), (v, y) => (a(), o("div", it, [
      l("div", dt, [
        q(l("input", {
          type: "checkbox",
          "onUpdate:modelValue": y[0] || (y[0] = (S) => P(m) ? m.value = S : null),
          id: "due"
        }, null, 512), [
          [$e, t(m)]
        ]),
        ct,
        t(m) ? (a(), oe(t(Ne), {
          key: 0,
          modelValue: t(n),
          "onUpdate:modelValue": y[1] || (y[1] = (S) => P(n) ? n.value = S : null),
          mode: "dateTime",
          timezone: "UTC",
          "min-Date": /* @__PURE__ */ new Date()
        }, {
          default: re(({ togglePopover: S, inputValue: F }) => [
            l("button", {
              class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 transition-all hover:bg-light-3 hover:bg-opacity-50",
              onClick: S
            }, k(F || "請選定結束日期"), 9, pt)
          ]),
          _: 1
        }, 8, ["modelValue", "min-Date"])) : c("", !0)
      ])
    ]));
  }
}), gt = { class: "flex w-auto items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-1.5" }, mt = ["value", "type", "placeholder", "maxLength", "required"], bt = /* @__PURE__ */ ee({
  __name: "TextInput",
  props: {
    placeholder: {},
    modelValue: {},
    type: { default: "string" },
    maxLength: {},
    required: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: _ }) {
    const g = e;
    function n(m) {
      g.type === "number" && !m.target.value && (m.target.value = 0), _(
        "update:modelValue",
        g.type == "number" ? Number(m.target.value) : m.target.value
      );
    }
    return (m, v) => (a(), o("div", gt, [
      l("input", {
        value: m.modelValue,
        onInput: n,
        type: m.type,
        class: "p3-b w-full border-none outline-none shadow-none",
        placeholder: m.placeholder,
        maxLength: m.maxLength,
        required: m.required
      }, null, 40, mt)
    ]));
  }
});
const ne = /* @__PURE__ */ Be(bt, [["__scopeId", "data-v-068dea7c"]]), ft = { class: "flex flex-col gap-3" }, ht = /* @__PURE__ */ l("div", { class: "flex items-center justify-center gap-3 my-2" }, [
  /* @__PURE__ */ l("p", { class: "p4-b" }, "日期時間"),
  /* @__PURE__ */ l("div", { class: "h-[1px] flex-1 bg-light-3" })
], -1), _t = { class: "flex flex-col gap-2" }, xt = { class: "flex gap-2 items-center" }, yt = /* @__PURE__ */ l("span", { class: "p4-b" }, "開始", -1), kt = ["onClick"], $t = ["value"], Vt = /* @__PURE__ */ l("div", { class: "flex items-center justify-center gap-3 w-full my-2" }, [
  /* @__PURE__ */ l("p", { class: "p4-b" }, "重複頻率"),
  /* @__PURE__ */ l("div", { class: "h-[1px] flex-1 bg-light-3" })
], -1), Ct = { class: "flex space-x-2 items-center" }, St = { class: "flex items-center gap-2" }, wt = /* @__PURE__ */ l("span", { class: "p4-b" }, "重複", -1), jt = ["value"], Nt = /* @__PURE__ */ l("option", { value: 0 }, "自訂", -1), It = { class: "p4-b" }, Pt = {
  key: 0,
  class: "flex items-center gap-2"
}, Bt = { class: "flex items-center gap-2" }, Ot = /* @__PURE__ */ l("span", { class: "p4-b" }, "頻率", -1), Dt = /* @__PURE__ */ l("option", {
  value: "-1",
  disabled: ""
}, "請選擇", -1), Ut = ["value"], At = {
  key: 0,
  class: "flex items-center gap-2"
}, Lt = /* @__PURE__ */ l("span", { class: "p4-b" }, "每", -1), qt = { class: "p4-b" }, Ue = 1, Mt = /* @__PURE__ */ ee({
  __name: "RepeatFrequency",
  props: {
    frequency: {},
    interval: {}
  },
  emits: ["update:frequency", "update:interval"],
  setup(e, { emit: _ }) {
    const g = e, n = Ve("eventData"), m = I(!0);
    T(n, () => {
      m.value = !0;
    });
    const v = I(g.interval ?? Ue);
    T(v, (V) => {
      V || (V = Ue), _("update:interval", V);
    });
    const y = I(g.frequency);
    T(y, (V) => {
      _("update:frequency", V);
    });
    const S = N({
      get: () => n.value.weekdays ?? [],
      set: (V) => {
        n.value.weekdays = V;
      }
    }), F = N({
      get: () => n.value.weekOrdinal ?? [],
      set: (V) => {
        n.value.weekOrdinal = V;
      }
    }), L = N({
      get: () => n.value.monthDate ?? [],
      set: (V) => {
        n.value.monthDate = V;
      }
    }), R = N({
      get: () => n.value.yearMonths ?? [],
      set: (V) => {
        n.value.yearMonths = V;
      }
    }), O = N(() => {
      if (U.value == M.Never)
        return "只執行一次";
      if (U.value == M.Hour)
        return "每小時執行一次";
      if (U.value == M.Day)
        return "每日執行一次";
      if (U.value == M.Week)
        return "每週執行一次";
      if (U.value == M.Month)
        return "每月執行一次";
      if (U.value == M.Annual)
        return "每年執行一次";
      const V = {
        1: "小時",
        2: "日",
        3: "週",
        4: "月",
        5: "年"
      };
      return U.value == 0 ? `每${v.value ?? ""}${V[y.value] ?? ""}執行一次` : "";
    }), U = I(-1);
    return g.interval == 1 && (U.value = g.frequency), T(
      U,
      (V) => {
        M[V] && (_("update:frequency", V), _("update:interval", 1), y.value = U.value, n.value.weekdays = null, n.value.weekOrdinal = null, n.value.monthDate = null, n.value.yearMonths = null), n.value.customInterval = V === 0;
      },
      { immediate: !0 }
    ), (V, A) => (a(), o("div", ft, [
      ht,
      l("div", _t, [
        l("div", xt, [
          yt,
          z(t(Ne), {
            modelValue: t(n).start,
            "onUpdate:modelValue": A[0] || (A[0] = (f) => t(n).start = f),
            mode: "dateTime",
            timezone: "UTC",
            "min-Date": /* @__PURE__ */ new Date(),
            "is-required": ""
          }, {
            default: re(({ togglePopover: f, inputValue: D }) => [
              l("button", {
                class: "p3-b flex w-fit cursor-pointer relative items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 transition-all hover:bg-light-3 hover:bg-opacity-50",
                onClick: f
              }, [
                l("input", {
                  value: D,
                  required: "",
                  class: "opacity-0 absolute w-full h-full pointer-events-none"
                }, null, 8, $t),
                Je(" " + k(D || "請選定執行日期"), 1)
              ], 8, kt)
            ]),
            _: 1
          }, 8, ["modelValue", "min-Date"])
        ])
      ]),
      Vt,
      l("div", Ct, [
        l("label", St, [
          wt,
          q(l("select", {
            class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
            "onUpdate:modelValue": A[1] || (A[1] = (f) => P(U) ? U.value = f : null)
          }, [
            (a(!0), o(b, null, B(t(M), (f, D) => (a(), o(b, { key: D }, [
              Number.isInteger(f) ? (a(), o("option", {
                key: 0,
                value: f
              }, k(V.$t(D)), 9, jt)) : c("", !0)
            ], 64))), 128)),
            Nt
          ], 512), [
            [J, t(U)]
          ])
        ]),
        l("span", It, k(t(O)), 1)
      ]),
      t(M)[t(U)] == null ? (a(), o("div", Pt, [
        l("label", Bt, [
          Ot,
          q(l("select", {
            class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
            "onUpdate:modelValue": A[2] || (A[2] = (f) => P(y) ? y.value = f : null)
          }, [
            Dt,
            (a(!0), o(b, null, B(t(M), (f, D) => (a(), o(b, { key: D }, [
              f != t(M).Never && Number.isInteger(f) ? (a(), o("option", {
                key: 0,
                value: f
              }, k(V.$t(D)), 9, Ut)) : c("", !0)
            ], 64))), 128))
          ], 512), [
            [J, t(y)]
          ])
        ]),
        t(y) != -1 ? (a(), o("label", At, [
          Lt,
          z(ne, {
            class: "!w-10 text-center",
            modelValue: t(v),
            "onUpdate:modelValue": A[3] || (A[3] = (f) => P(v) ? v.value = f : null),
            type: "number"
          }, null, 8, ["modelValue"]),
          l("span", qt, k(V.$t(`s${t(M)[t(y)]}`)), 1)
        ])) : c("", !0)
      ])) : c("", !0),
      t(M)[t(U)] == null ? (a(), oe(ut, {
        key: 1,
        type: t(y),
        weekdays: t(S),
        "onUpdate:weekdays": A[4] || (A[4] = (f) => P(S) ? S.value = f : null),
        weekOrdinal: t(F),
        "onUpdate:weekOrdinal": A[5] || (A[5] = (f) => P(F) ? F.value = f : null),
        monthDate: t(L),
        "onUpdate:monthDate": A[6] || (A[6] = (f) => P(L) ? L.value = f : null),
        yearMonths: t(R),
        "onUpdate:yearMonths": A[7] || (A[7] = (f) => P(R) ? R.value = f : null)
      }, null, 8, ["type", "weekdays", "weekOrdinal", "monthDate", "yearMonths"])) : c("", !0),
      t(y) !== -1 ? (a(), oe(vt, {
        key: 2,
        modelValue: t(n).due,
        "onUpdate:modelValue": A[8] || (A[8] = (f) => t(n).due = f)
      }, null, 8, ["modelValue"])) : c("", !0)
    ]));
  }
}), Rt = { class: "relative border rounded border-light-3 py-4 px-3" }, Et = { class: "p3-b absolute left-2 -top-3 text-dark-3 bg-light-5" }, he = /* @__PURE__ */ ee({
  __name: "OuterBlock",
  props: {
    title: {}
  },
  setup(e) {
    return (_, g) => (a(), o("div", Rt, [
      l("div", Et, k(_.title), 1),
      Le(_.$slots, "default")
    ]));
  }
}), Ft = { class: "flex flex-col gap-2" }, Gt = { class: "flex items-center gap-2 relative pt-2" }, Jt = { class: "flex items-center gap-2" }, zt = /* @__PURE__ */ l("span", { class: "p4-b" }, "平台", -1), Ht = /* @__PURE__ */ l("option", {
  value: "",
  disabled: ""
}, "請選擇", -1), Xt = ["value"], Qt = {
  key: 0,
  class: "flex items-center gap-2"
}, Yt = /* @__PURE__ */ l("span", { class: "p4-b" }, "層級", -1), Kt = /* @__PURE__ */ l("option", {
  value: "",
  disabled: ""
}, "請選擇", -1), Zt = ["value"], Wt = {
  key: 1,
  class: "flex items-center gap-2"
}, Tt = /* @__PURE__ */ l("span", { class: "p4-b" }, "目標", -1), en = /* @__PURE__ */ l("option", {
  value: "",
  disabled: ""
}, "請選擇", -1), tn = ["value"], nn = {
  key: 0,
  class: "flex flex-col"
}, ln = /* @__PURE__ */ l("span", { class: "p4-b" }, "指定目標", -1), an = { key: 0 }, on = {
  key: 0,
  class: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full flex justify-center items-center bg-dark-3 rounded bg-opacity-50 z-[2]"
}, rn = { class: "relative bg-light-5 rounded-xs shadow-01 w-4/5 p-4 min-h-[300px] h-fit" }, sn = /* @__PURE__ */ l("span", { class: "p1-b flex justify-center mb-1" }, "請選擇目標", -1), un = { class: "flex flex-col gap-2 mt-2" }, dn = ["onClick"], cn = { class: "flex flex-col flex-1" }, pn = { class: "p3-b" }, vn = { class: "p4-r" }, gn = {
  key: 2,
  class: "flex flex-col gap-2"
}, mn = { class: "flex items-center gap-2" }, bn = /* @__PURE__ */ l("span", { class: "p4-b" }, "執行", -1), fn = /* @__PURE__ */ l("option", {
  value: "",
  disabled: ""
}, "請選擇", -1), hn = ["value"], _n = {
  key: 0,
  class: "flex gap-x-2 gap-y-3 flex-wrap"
}, xn = { class: "flex items-center gap-2" }, yn = /* @__PURE__ */ l("span", { class: "p4-b" }, "類型", -1), kn = /* @__PURE__ */ l("option", {
  value: "",
  disabled: ""
}, "請選擇", -1), $n = ["value"], Vn = {
  key: 0,
  class: "flex items-center gap-2"
}, Cn = /* @__PURE__ */ l("span", { class: "p4-b" }, "調整", -1), Sn = /* @__PURE__ */ l("option", {
  value: "",
  disabled: ""
}, "請選擇", -1), wn = ["value"], jn = {
  key: 1,
  class: "flex items-center gap-2"
}, Nn = { class: "flex items-center gap-2" }, In = /* @__PURE__ */ l("span", { class: "p4-b" }, "類型", -1), Pn = /* @__PURE__ */ l("option", {
  value: "",
  disabled: ""
}, "請選擇", -1), Bn = ["value"], On = {
  key: 0,
  class: "flex items-center gap-2"
}, Dn = /* @__PURE__ */ l("span", { class: "p4-b" }, "調整", -1), Un = /* @__PURE__ */ l("option", {
  value: "",
  disabled: ""
}, "請選擇", -1), An = ["value"], Ln = {
  key: 1,
  class: "flex items-center gap-2"
}, qn = {
  key: 2,
  class: "flex items-center gap-2 w-full"
}, Mn = { class: "flex flex-col gap-2" }, Rn = { class: "flex items-center gap-2" }, En = /* @__PURE__ */ l("label", { for: "maxBudget" }, "設定預算上限", -1), Fn = {
  key: 0,
  class: "flex gap-2 items-center"
}, Gn = /* @__PURE__ */ l("span", null, "元", -1), Jn = { class: "flex items-center gap-2" }, zn = /* @__PURE__ */ l("span", { class: "p4-b" }, "類型", -1), Hn = /* @__PURE__ */ l("option", {
  value: "",
  disabled: ""
}, "請選擇", -1), Xn = ["value"], Qn = {
  key: 0,
  class: "flex items-center gap-2"
}, Yn = /* @__PURE__ */ l("span", { class: "p4-b" }, "調整", -1), Kn = /* @__PURE__ */ l("option", {
  value: "",
  disabled: ""
}, "請選擇", -1), Zn = ["value"], Wn = {
  key: 1,
  class: "flex items-center gap-2"
}, Tn = {
  key: 2,
  class: "flex items-center gap-2 w-full"
}, el = { class: "flex flex-col gap-2" }, tl = { class: "flex items-center gap-2" }, nl = /* @__PURE__ */ l("label", {
  for: "maxBudget",
  class: "p3-b"
}, "設定預算下限", -1), ll = {
  key: 0,
  class: "flex gap-2 items-center"
}, al = /* @__PURE__ */ l("span", null, "元", -1), ae = "", ol = /* @__PURE__ */ ee({
  __name: "EventAction",
  setup(e) {
    const { t: _ } = Ze(), g = Ve("eventData"), n = I(g.value.action ?? {}), m = I(!!Object.keys(n.value).length), v = I(!1);
    T(v, (p) => {
      var i, r, x, Q, le;
      (i = n.value.params) != null && i.limit || (x = (r = n.value) == null ? void 0 : r.params) == null || delete x.limit, p || (le = (Q = n.value) == null ? void 0 : Q.params) == null || delete le.limit;
    }), Ae(() => {
      var p, i, r, x, Q;
      ((p = n.value) == null ? void 0 : p.action) == s.SetNewBudget || ((i = n.value) == null ? void 0 : i.action) == s.IncreaseBudget || ((r = n.value) == null ? void 0 : r.action) == s.LowerBudget || delete n.value.params, v.value = !!((Q = (x = n.value) == null ? void 0 : x.params) != null && Q.limit);
    }), T(
      n,
      (p) => {
        g.value.action = p;
      },
      { deep: !0 }
    );
    const y = N(() => {
      var p;
      return ((p = g.value.action) == null ? void 0 : p.client) == H.Google ? W : Z;
    }), S = {
      [H.Google]: {
        [W.Campaign]: {
          SetNewBudget: s.SetNewBudget,
          IncreaseBudget: s.IncreaseBudget,
          LowerBudget: s.LowerBudget,
          OpenProject: s.OpenProject,
          SuspendProject: s.SuspendProject,
          None: s.None
        },
        [W.AdGroup]: {
          SuspendProject: s.SuspendProject,
          None: s.None
        },
        [W.AdTag]: {
          SuspendProject: s.SuspendProject,
          None: s.None
        },
        [W.Ad]: {
          SuspendProject: s.SuspendProject,
          None: s.None
        }
      },
      [H.Facebook]: {
        [Z.Campaign]: {
          SetNewBudget: s.SetNewBudget,
          IncreaseBudget: s.IncreaseBudget,
          LowerBudget: s.LowerBudget,
          OpenProject: s.OpenProject,
          SuspendProject: s.SuspendProject,
          None: s.None
        },
        [Z.AdGroup]: {
          SetNewBudget: s.SetNewBudget,
          IncreaseBudget: s.IncreaseBudget,
          LowerBudget: s.LowerBudget,
          OpenProject: s.OpenProject,
          SuspendProject: s.SuspendProject,
          None: s.None
        },
        [Z.AdTag]: {
          SuspendProject: s.SuspendProject,
          None: s.None
        },
        [Z.Ad]: {
          SuspendProject: s.SuspendProject,
          None: s.None
        }
      }
    }, F = N(() => {
      var r, x;
      const p = (r = n.value) == null ? void 0 : r.client, i = (x = n.value) == null ? void 0 : x.adLevel;
      if (p && i) {
        const Q = S[p];
        if (Q) {
          const le = Q[i];
          if (le)
            return le;
        }
      }
      return {};
    }), L = {
      [H.Google]: {
        [W.Campaign]: {
          [s.SetNewBudget]: [u.Value],
          [s.IncreaseBudget]: [u.Percentage, u.Value],
          [s.LowerBudget]: [u.Percentage, u.Value],
          [s.OpenProject]: [u.Percentage, u.Value],
          [s.SuspendProject]: [u.Percentage, u.Value],
          [s.None]: [u.Percentage, u.Value]
        },
        [W.AdGroup]: {
          [s.SuspendProject]: [u.Percentage, u.Value],
          [s.None]: [u.Percentage, u.Value]
        },
        [W.AdTag]: {
          [s.SuspendProject]: [u.Percentage, u.Value],
          [s.None]: [u.Percentage, u.Value]
        },
        [W.Ad]: {
          [s.SuspendProject]: [u.Percentage, u.Value],
          [s.None]: [u.Percentage, u.Value]
        }
      },
      [H.Facebook]: {
        [Z.Campaign]: {
          [s.SetNewBudget]: [u.Value],
          [s.IncreaseBudget]: [u.Percentage, u.Value],
          [s.LowerBudget]: [u.Percentage, u.Value],
          [s.OpenProject]: [u.Percentage, u.Value],
          [s.SuspendProject]: [u.Percentage, u.Value],
          [s.None]: [u.Percentage, u.Value]
        },
        [Z.AdGroup]: {
          [s.SetNewBudget]: [u.Value],
          [s.IncreaseBudget]: [u.Percentage, u.Value],
          [s.LowerBudget]: [u.Percentage, u.Value],
          [s.OpenProject]: [u.Percentage, u.Value],
          [s.SuspendProject]: [u.Percentage, u.Value],
          [s.None]: [u.Percentage, u.Value]
        },
        [Z.AdTag]: {
          [s.SuspendProject]: [u.Percentage, u.Value],
          [s.None]: [u.Percentage, u.Value]
        },
        [Z.Ad]: {
          [s.SuspendProject]: [u.Percentage, u.Value],
          [s.None]: [u.Percentage, u.Value]
        }
      }
    }, R = N(() => {
      var x, Q, le;
      const p = (x = n.value) == null ? void 0 : x.client, i = (Q = n.value) == null ? void 0 : Q.adLevel, r = (le = n.value) == null ? void 0 : le.action;
      if (p && i && r) {
        const be = L[p];
        if (be) {
          const ye = be[i];
          if (ye) {
            const ke = ye[r];
            if (ke)
              return ke;
          }
        }
      }
      return [u.Percentage, u.Value];
    }), O = N(() => n.value.client ? n.value.client : ""), U = (p) => {
      n.value.client = Number(p.target.value), delete n.value.target;
    }, V = N(() => n.value.adLevel ? n.value.adLevel : ""), A = (p) => {
      n.value.adLevel = Number(p.target.value), delete n.value.action, delete n.value.target;
    }, f = N(() => n.value.targetType ? n.value.targetType : ""), D = (p) => {
      n.value.targetType = Number(p.target.value), delete n.value.action, delete n.value.target;
    }, E = N(() => n.value.action ? n.value.action : ""), G = (p) => n.value.action = Number(p.target.value), w = N(() => {
      var p;
      return (p = n.value) != null && p.params || (n.value.params = {}), n.value.params.budgetType ? n.value.params.budgetType : "";
    }), K = (p) => n.value.params.budgetType = p.target.value, X = N(() => {
      var p;
      return (p = n.value) != null && p.params || (n.value.params = {}), n.value.params.valueType ? n.value.params.valueType : "";
    }), me = (p) => n.value.params.valueType = p.target.value, ce = I(!1), Ce = (p) => {
      var r;
      (r = n.value) != null && r.target || (n.value.target = []);
      const i = n.value.target.findIndex(
        (x) => x.id === p.id
      );
      i === -1 ? n.value.target.push(p) : n.value.target.splice(i, 1);
    }, _e = I(), Se = async () => {
      _e.value = [
        { id: 1, name: "qwe" },
        { id: 2, name: "asd" },
        { id: 3, name: "zxc" },
        { id: 4, name: "rty" },
        { id: 5, name: "bgfb" }
      ];
    }, we = N(() => "name"), de = N(() => {
      const p = $.value.toLowerCase();
      return _e.value.filter(
        (i) => i[we.value].toLowerCase().includes(p)
      );
    }), xe = async () => {
      await Se(), ce.value = !0;
    }, $ = I(""), C = () => {
      n.value.target = de.value;
    }, d = I(!1);
    je(() => {
      d.value = !0;
    });
    const j = () => {
      m.value = !1, n.value = {}, ze(() => {
        delete g.value.action;
      });
    };
    return N(() => {
      const p = O.value, i = n.value.adLevel, r = w.value;
      console.log("object");
      const x = p === H.Google && i === W.Campaign, Q = p === H.Facebook && i === Z.Campaign, le = p === H.Facebook && i === Z.AdGroup, be = x || Q || le, ye = r === ge.DailyBudget ? "日預算" : "總預算", ke = `${H[p]}${y.value[i]}`, Ee = be ? `若${_(ke)}設定為${ye}，則不會變更` : "";
      return { show: be, msg: Ee };
    }), (p, i) => t(m) ? (a(), oe(he, {
      key: 1,
      title: "動作"
    }, {
      default: re(() => [
        l("div", Ft, [
          l("div", Gt, [
            l("div", {
              class: "cursor-pointer text-dark-4 absolute -top-2.5 -right-1.5 p4-b",
              onClick: j
            }, " 刪除 "),
            l("label", Jt, [
              zt,
              q(l("select", {
                class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
                "onUpdate:modelValue": i[1] || (i[1] = (r) => P(O) ? O.value = r : null),
                onChange: U,
                required: ""
              }, [
                Ht,
                (a(!0), o(b, null, B(t(H), (r, x) => (a(), o(b, { key: x }, [
                  Number.isInteger(r) ? c("", !0) : (a(), o("option", {
                    key: 0,
                    value: x
                  }, k(r), 9, Xt))
                ], 64))), 128))
              ], 544), [
                [J, t(O)]
              ])
            ]),
            t(O) != ae ? (a(), o("label", Qt, [
              Yt,
              q(l("select", {
                class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
                "onUpdate:modelValue": i[2] || (i[2] = (r) => P(V) ? V.value = r : null),
                onChange: A,
                required: ""
              }, [
                Kt,
                (a(!0), o(b, null, B(t(y), (r, x) => (a(), o(b, { key: x }, [
                  Number.isInteger(r) ? c("", !0) : (a(), o("option", {
                    key: 0,
                    value: x
                  }, k(p.$t(`${t(H)[t(O)]}${r}`)), 9, Zt))
                ], 64))), 128))
              ], 544), [
                [J, t(V)]
              ])
            ])) : c("", !0),
            t(V) != ae ? (a(), o("label", Wt, [
              Tt,
              q(l("select", {
                class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
                "onUpdate:modelValue": i[3] || (i[3] = (r) => P(f) ? f.value = r : null),
                onChange: D,
                required: ""
              }, [
                en,
                (a(!0), o(b, null, B(t(ie), (r, x) => (a(), o(b, { key: x }, [
                  Number.isInteger(r) ? c("", !0) : (a(), o("option", {
                    key: 0,
                    value: x
                  }, k(p.$t(r)), 9, tn))
                ], 64))), 128))
              ], 544), [
                [J, t(f)]
              ])
            ])) : c("", !0)
          ]),
          t(f) === t(ie).ForID ? (a(), o("div", nn, [
            l("label", { class: "flex items-center gap-2" }, [
              ln,
              l("div", {
                class: "p4-r px-1.5 py-0.5 text-true-blue-2 rounded bg-true-blue-5 flex w-fit cursor-pointer hover:bg-true-blue-4",
                onClick: xe
              }, " 編輯 ")
            ]),
            t(f) === t(ie).ForID ? (a(), o("div", an, [
              (a(!0), o(b, null, B(t(n).target, (r, x) => (a(), o("span", {
                class: "p4-r text-true-blue-3 px-0.5",
                key: r.id
              }, k(r.name) + k(x !== t(n).target.length - 1 ? "," : ""), 1))), 128))
            ])) : c("", !0)
          ])) : c("", !0),
          t(d) ? (a(), oe(qe, {
            key: 1,
            to: "#editor-container"
          }, [
            t(ce) ? (a(), o("div", on, [
              l("div", rn, [
                l("div", {
                  class: "absolute top-1 right-2 cursor-pointer",
                  onClick: i[4] || (i[4] = (r) => ce.value = !1)
                }, " X "),
                sn,
                z(ne, {
                  modelValue: t($),
                  "onUpdate:modelValue": i[5] || (i[5] = (r) => P($) ? $.value = r : null)
                }, null, 8, ["modelValue"]),
                l("div", {
                  class: "mt-2 flex w-full justify-end p4-b text-true-blue-3",
                  onClick: C
                }, " 全選 "),
                l("div", un, [
                  (a(!0), o(b, null, B(t(de), (r) => {
                    var x;
                    return a(), o("div", {
                      class: "border border-dark-5 rounded py-1 px-3 flex gap-1 hover:border-transparent hover:bg-true-blue-5 cursor-pointer",
                      key: r.id,
                      onClick: (Q) => Ce(r)
                    }, [
                      l("div", cn, [
                        l("span", pn, k(r.id), 1),
                        l("span", vn, k(r.name), 1)
                      ]),
                      l("div", {
                        class: Me(["rounded h-3 w-3 border", [
                          t(n).target && (x = t(n)) != null && x.target.find((Q) => Q.id === r.id) ? "bg-red-1" : ""
                        ]])
                      }, null, 2)
                    ], 8, dn);
                  }), 128))
                ])
              ])
            ])) : c("", !0)
          ])) : c("", !0),
          t(f) !== ae ? (a(), o("div", gn, [
            l("label", mn, [
              bn,
              q(l("select", {
                class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
                "onUpdate:modelValue": i[6] || (i[6] = (r) => P(E) ? E.value = r : null),
                onChange: G,
                required: ""
              }, [
                fn,
                (a(!0), o(b, null, B(t(F), (r, x) => (a(), o("option", {
                  key: x,
                  value: r
                }, k(p.$t(x)), 9, hn))), 128))
              ], 544), [
                [J, t(E)]
              ])
            ]),
            t(V) != ae ? (a(), o("div", _n, [
              t(n).action == t(s).SetNewBudget ? (a(), o(b, { key: 0 }, [
                l("label", xn, [
                  yn,
                  q(l("select", {
                    class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
                    "onUpdate:modelValue": i[7] || (i[7] = (r) => P(w) ? w.value = r : null),
                    onChange: K,
                    required: ""
                  }, [
                    kn,
                    (a(!0), o(b, null, B(t(ge), (r, x) => (a(), o(b, { key: x }, [
                      Number.isInteger(r) ? c("", !0) : (a(), o("option", {
                        key: 0,
                        value: r
                      }, k(p.$t(r)), 9, $n))
                    ], 64))), 128))
                  ], 544), [
                    [J, t(w)]
                  ])
                ]),
                t(w) != ae ? (a(), o("label", Vn, [
                  Cn,
                  q(l("select", {
                    class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
                    "onUpdate:modelValue": i[8] || (i[8] = (r) => P(X) ? X.value = r : null),
                    onChange: me,
                    required: ""
                  }, [
                    Sn,
                    (a(!0), o(b, null, B(t(R), (r, x) => (a(), o("option", {
                      key: x,
                      value: r
                    }, k(p.$t(`action${r}`)), 9, wn))), 128))
                  ], 544), [
                    [J, t(X)]
                  ])
                ])) : c("", !0),
                t(X) != ae ? (a(), o("label", jn, [
                  z(ne, {
                    modelValue: t(n).params.value,
                    "onUpdate:modelValue": i[9] || (i[9] = (r) => t(n).params.value = r),
                    type: "number",
                    required: !0
                  }, null, 8, ["modelValue"]),
                  l("span", null, k(t(n).params.valueType === t(u).Percentage ? "%" : "元"), 1)
                ])) : c("", !0)
              ], 64)) : t(n).action == t(s).IncreaseBudget ? (a(), o(b, { key: 1 }, [
                l("label", Nn, [
                  In,
                  q(l("select", {
                    class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
                    "onUpdate:modelValue": i[10] || (i[10] = (r) => P(w) ? w.value = r : null),
                    onChange: K,
                    required: ""
                  }, [
                    Pn,
                    (a(!0), o(b, null, B(t(ge), (r, x) => (a(), o(b, { key: x }, [
                      Number.isInteger(r) ? c("", !0) : (a(), o("option", {
                        key: 0,
                        value: r
                      }, k(p.$t(r)), 9, Bn))
                    ], 64))), 128))
                  ], 544), [
                    [J, t(w)]
                  ])
                ]),
                t(w) != ae ? (a(), o("label", On, [
                  Dn,
                  q(l("select", {
                    class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
                    "onUpdate:modelValue": i[11] || (i[11] = (r) => P(X) ? X.value = r : null),
                    onChange: me,
                    required: ""
                  }, [
                    Un,
                    (a(!0), o(b, null, B(t(R), (r, x) => (a(), o("option", {
                      key: x,
                      value: r
                    }, k(p.$t(`action${r}`)), 9, An))), 128))
                  ], 544), [
                    [J, t(X)]
                  ])
                ])) : c("", !0),
                t(X) != ae ? (a(), o("label", Ln, [
                  z(ne, {
                    modelValue: t(n).params.value,
                    "onUpdate:modelValue": i[12] || (i[12] = (r) => t(n).params.value = r),
                    type: "number",
                    required: !0
                  }, null, 8, ["modelValue"]),
                  l("span", null, k(t(n).params.valueType === t(u).Percentage ? "%" : "元"), 1)
                ])) : c("", !0),
                t(n).params.valueType === t(u).Percentage ? (a(), o("label", qn, [
                  l("div", Mn, [
                    l("div", Rn, [
                      q(l("input", {
                        type: "checkbox",
                        "onUpdate:modelValue": i[13] || (i[13] = (r) => P(v) ? v.value = r : null),
                        id: "maxBudget"
                      }, null, 512), [
                        [$e, t(v)]
                      ]),
                      En,
                      t(v) ? (a(), o("div", Fn, [
                        z(ne, {
                          modelValue: t(n).params.limit,
                          "onUpdate:modelValue": i[14] || (i[14] = (r) => t(n).params.limit = r),
                          type: "number",
                          required: !0
                        }, null, 8, ["modelValue"]),
                        Gn
                      ])) : c("", !0)
                    ])
                  ])
                ])) : c("", !0)
              ], 64)) : t(n).action == t(s).LowerBudget ? (a(), o(b, { key: 2 }, [
                l("label", Jn, [
                  zn,
                  q(l("select", {
                    class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
                    "onUpdate:modelValue": i[15] || (i[15] = (r) => P(w) ? w.value = r : null),
                    onChange: K,
                    required: ""
                  }, [
                    Hn,
                    (a(!0), o(b, null, B(t(ge), (r, x) => (a(), o(b, { key: x }, [
                      Number.isInteger(r) ? c("", !0) : (a(), o("option", {
                        key: 0,
                        value: r
                      }, k(p.$t(r)), 9, Xn))
                    ], 64))), 128))
                  ], 544), [
                    [J, t(w)]
                  ])
                ]),
                t(w) != ae ? (a(), o("label", Qn, [
                  Yn,
                  q(l("select", {
                    class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
                    "onUpdate:modelValue": i[16] || (i[16] = (r) => P(X) ? X.value = r : null),
                    onChange: me
                  }, [
                    Kn,
                    (a(!0), o(b, null, B(t(R), (r, x) => (a(), o("option", {
                      key: x,
                      value: r
                    }, k(p.$t(`action${r}`)), 9, Zn))), 128))
                  ], 544), [
                    [J, t(X)]
                  ])
                ])) : c("", !0),
                t(X) != ae ? (a(), o("label", Wn, [
                  z(ne, {
                    modelValue: t(n).params.value,
                    "onUpdate:modelValue": i[17] || (i[17] = (r) => t(n).params.value = r),
                    type: "number",
                    required: !0
                  }, null, 8, ["modelValue"]),
                  l("span", null, k(t(n).params.valueType === t(u).Percentage ? "%" : "元"), 1)
                ])) : c("", !0),
                t(n).params.valueType === t(u).Percentage ? (a(), o("div", Tn, [
                  l("div", el, [
                    l("div", tl, [
                      q(l("input", {
                        type: "checkbox",
                        "onUpdate:modelValue": i[18] || (i[18] = (r) => P(v) ? v.value = r : null),
                        id: "maxBudget"
                      }, null, 512), [
                        [$e, t(v)]
                      ]),
                      nl,
                      t(v) ? (a(), o("div", ll, [
                        z(ne, {
                          modelValue: t(n).params.limit,
                          "onUpdate:modelValue": i[19] || (i[19] = (r) => t(n).params.limit = r),
                          type: "number",
                          required: !0
                        }, null, 8, ["modelValue"]),
                        al
                      ])) : c("", !0)
                    ])
                  ])
                ])) : c("", !0)
              ], 64)) : c("", !0)
            ])) : c("", !0)
          ])) : c("", !0)
        ])
      ]),
      _: 1
    })) : (a(), o("div", {
      key: 0,
      class: "p3-b text-true-blue-3 flex ml-auto w-fit cursor-pointer hover:text-true-blue-2",
      onClick: i[0] || (i[0] = (r) => m.value = !0)
    }, " + 加入動作 "));
  }
}), rl = { class: "flex flex-col gap-2 relative pt-2" }, sl = { class: "flex items-center gap-2" }, ul = { class: "flex items-center gap-2" }, il = /* @__PURE__ */ l("span", { class: "p3-b" }, "平台", -1), dl = /* @__PURE__ */ l("option", {
  value: "",
  disabled: ""
}, "請選擇", -1), cl = ["value"], pl = {
  key: 0,
  class: "flex items-center gap-2"
}, vl = /* @__PURE__ */ l("span", { class: "p3-b" }, "層級", -1), gl = /* @__PURE__ */ l("option", {
  value: "",
  disabled: ""
}, "請選擇", -1), ml = ["value"], bl = {
  key: 1,
  class: "flex items-center gap-2"
}, fl = /* @__PURE__ */ l("span", { class: "p4-b" }, "目標", -1), hl = /* @__PURE__ */ l("option", {
  value: "",
  disabled: ""
}, "請選擇", -1), _l = ["value"], xl = {
  key: 0,
  class: "flex flex-col"
}, yl = /* @__PURE__ */ l("span", { class: "p4-b" }, "指定目標", -1), kl = { key: 0 }, $l = {
  key: 0,
  class: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full flex justify-center items-center bg-dark-3 rounded bg-opacity-50 z-[2]"
}, Vl = { class: "relative bg-light-5 rounded-xs shadow-01 w-4/5 p-4 min-h-[300px] h-fit" }, Cl = /* @__PURE__ */ l("span", { class: "p1-b flex justify-center mb-1" }, "請選擇目標", -1), Sl = { class: "flex flex-col gap-2 mt-2" }, wl = ["onClick"], jl = { class: "flex flex-col flex-1" }, Nl = { class: "p3-b" }, Il = { class: "p4-r" }, Pl = {
  key: 2,
  class: "flex items-center gap-1"
}, Bl = /* @__PURE__ */ l("span", { class: "p3-b" }, "條件", -1), Ol = /* @__PURE__ */ l("option", {
  value: "",
  disabled: ""
}, "請選擇", -1), Dl = ["value"], Ul = {
  key: 3,
  class: "flex gap-2 flex-wrap"
}, Al = { class: "flex gap-2" }, Ll = { class: "flex items-center gap-1" }, ql = /* @__PURE__ */ l("span", { class: "p3-b" }, "運算", -1), Ml = /* @__PURE__ */ l("option", {
  value: "",
  disabled: ""
}, "請選擇", -1), Rl = ["value"], El = { key: 0 }, Fl = ["onClick"], Gl = {
  key: 0,
  class: "flex items-center gap-1"
}, Jl = /* @__PURE__ */ l("option", {
  value: "",
  disabled: ""
}, "請選擇", -1), zl = ["value"], Hl = {
  key: 1,
  class: "flex items-center gap-1"
}, Xl = /* @__PURE__ */ l("option", {
  value: "",
  disabled: ""
}, "請選擇", -1), Ql = ["value"], Yl = {
  key: 4,
  class: "flex items-center gap-2"
}, Kl = /* @__PURE__ */ l("label", { for: "comparison" }, "加入比較區間", -1), se = "", Zl = /* @__PURE__ */ ee({
  __name: "ConditionItem",
  props: {
    modelValue: {},
    index: {}
  },
  emits: ["update:modelValue", "removeItem"],
  setup(e, { emit: _ }) {
    const g = e, n = N(() => g.modelValue ?? {}), m = N(() => {
      var $;
      return (($ = n.value) == null ? void 0 : $.client) == H.Google ? pe : ve;
    }), v = N(() => n.value.client ? n.value.client : ""), y = ($) => n.value.client = Number($.target.value), S = N(() => n.value.adLevel ? n.value.adLevel : ""), F = ($) => {
      n.value.adLevel = Number($.target.value), O.value != se && _("update:modelValue", {
        client: v.value,
        adLevel: S.value
      });
    }, L = N(() => n.value.targetType ? n.value.targetType : ""), R = ($) => {
      n.value.targetType = Number($.target.value), delete n.value.action, delete n.value.target;
    }, O = N(() => n.value.conditionType ? n.value.conditionType : ""), U = ($) => n.value.conditionType = $.target.value, V = N(() => n.value.dateRangeType ? n.value.dateRangeType : ""), A = ($) => {
      n.value.dateRangeType = Number($.target.value), Number($.target.value) !== fe.SpecifiedTime && delete n.value.dateRange;
    }, f = N(() => n.value.operation ? n.value.operation : ""), D = ($) => n.value.operation = $.target.value, E = N(() => n.value.valueType ? n.value.valueType : ""), G = ($) => n.value.valueType = $.target.value, w = {
      [H.Google]: {
        [pe.Campaign]: {
          Clicks: h.Clicks,
          Impressions: h.Impressions,
          Cpc: h.Cpc,
          Spend: h.Spend,
          Conversions: h.Conversions,
          ConversionSpend: h.ConversionSpend,
          ReturnOnADSpending: h.ReturnOnADSpending
        },
        [pe.AdGroup]: {
          Clicks: h.Clicks,
          Impressions: h.Impressions,
          Cpc: h.Cpc,
          Spend: h.Spend,
          Conversions: h.Conversions,
          ConversionSpend: h.ConversionSpend,
          ReturnOnADSpending: h.ReturnOnADSpending
        },
        [pe.Account]: {
          BudgetRemaining: h.BudgetRemaining,
          Clicks: h.Clicks,
          Impressions: h.Impressions,
          Cpc: h.Cpc,
          Spend: h.Spend,
          Conversions: h.Conversions,
          ConversionSpend: h.ConversionSpend,
          ReturnOnADSpending: h.ReturnOnADSpending
        }
      },
      [H.Facebook]: {
        [ve.Campaign]: {
          Clicks: h.Clicks,
          BudgetCap: h.BudgetCap,
          Impressions: h.Impressions,
          Cpc: h.Cpc,
          Spend: h.Spend,
          Conversions: h.Conversions,
          ConversionSpend: h.ConversionSpend,
          ReturnOnADSpending: h.ReturnOnADSpending
        },
        [ve.AdGroup]: {
          Clicks: h.Clicks,
          Impressions: h.Impressions,
          Cpc: h.Cpc,
          Spend: h.Spend,
          Conversions: h.Conversions,
          ConversionSpend: h.ConversionSpend,
          ReturnOnADSpending: h.ReturnOnADSpending
        },
        [ve.Account]: {
          BudgetRemaining: h.BudgetRemaining,
          Clicks: h.Clicks,
          Impressions: h.Impressions,
          Cpc: h.Cpc,
          Spend: h.Spend,
          Conversions: h.Conversions,
          ConversionSpend: h.ConversionSpend,
          ReturnOnADSpending: h.ReturnOnADSpending
        }
      }
    }, K = N(() => {
      if (v.value && S.value) {
        const $ = w[v.value];
        if ($) {
          const C = $[S.value];
          if (C)
            return C;
        }
      }
      return {};
    }), X = I(!1), me = ($) => {
      var d;
      (d = n.value) != null && d.target || (n.value.target = []);
      const C = n.value.target.findIndex(
        (j) => j.id === $.id
      );
      C === -1 ? n.value.target.push($) : n.value.target.splice(C, 1);
    }, ce = I(), Ce = async () => {
      ce.value = [
        { id: 1, name: "qwe" },
        { id: 2, name: "asd" },
        { id: 3, name: "zxc" },
        { id: 4, name: "rty" },
        { id: 5, name: "bgfb" }
      ];
    }, _e = N(() => "name"), Se = N(() => {
      const $ = de.value.toLowerCase();
      return ce.value.filter(
        (C) => C[_e.value].toLowerCase().includes($)
      );
    }), we = async () => {
      await Ce(), X.value = !0;
    }, de = I(""), xe = I(!1);
    return je(() => {
      xe.value = !0;
    }), ($, C) => (a(), oe(he, {
      title: "條件" + ($.index + 1)
    }, {
      default: re(() => [
        l("div", rl, [
          l("div", {
            class: "cursor-pointer text-dark-4 absolute -top-2.5 -right-1.5 p4-b",
            onClick: C[0] || (C[0] = (d) => _("removeItem"))
          }, " 刪除 "),
          l("div", sl, [
            l("label", ul, [
              il,
              q(l("select", {
                class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
                "onUpdate:modelValue": C[1] || (C[1] = (d) => P(v) ? v.value = d : null),
                onChange: y,
                required: ""
              }, [
                dl,
                (a(!0), o(b, null, B(t(H), (d, j) => (a(), o(b, { key: j }, [
                  Number.isInteger(d) ? c("", !0) : (a(), o("option", {
                    key: 0,
                    value: j
                  }, k(d), 9, cl))
                ], 64))), 128))
              ], 544), [
                [J, t(v)]
              ])
            ]),
            t(v) != se ? (a(), o("label", pl, [
              vl,
              q(l("select", {
                class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
                "onUpdate:modelValue": C[2] || (C[2] = (d) => P(S) ? S.value = d : null),
                onChange: F,
                required: ""
              }, [
                gl,
                (a(!0), o(b, null, B(t(m), (d, j) => (a(), o(b, { key: j }, [
                  Number.isInteger(d) ? c("", !0) : (a(), o("option", {
                    key: 0,
                    value: j
                  }, k($.$t(`${t(H)[t(v)]}${d}`)), 9, ml))
                ], 64))), 128))
              ], 544), [
                [J, t(S)]
              ])
            ])) : c("", !0),
            t(S) != se ? (a(), o("label", bl, [
              fl,
              q(l("select", {
                class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
                "onUpdate:modelValue": C[3] || (C[3] = (d) => P(L) ? L.value = d : null),
                onChange: R,
                required: ""
              }, [
                hl,
                (a(!0), o(b, null, B(t(ie), (d, j) => (a(), o(b, { key: j }, [
                  Number.isInteger(d) ? c("", !0) : (a(), o("option", {
                    key: 0,
                    value: j
                  }, k($.$t(d)), 9, _l))
                ], 64))), 128))
              ], 544), [
                [J, t(L)]
              ])
            ])) : c("", !0)
          ]),
          t(L) === t(ie).ForID ? (a(), o("div", xl, [
            l("label", { class: "flex items-center gap-2" }, [
              yl,
              l("div", {
                class: "p4-r px-1.5 py-0.5 text-true-blue-2 rounded bg-true-blue-5 flex w-fit cursor-pointer hover:bg-true-blue-4",
                onClick: we
              }, " 編輯 ")
            ]),
            t(L) === t(ie).ForID ? (a(), o("div", kl, [
              (a(!0), o(b, null, B(t(n).target, (d, j) => (a(), o("span", {
                class: "p4-r text-true-blue-3 px-0.5",
                key: d.id
              }, k(d.name) + k(j !== t(n).target.length - 1 ? "," : ""), 1))), 128))
            ])) : c("", !0)
          ])) : c("", !0),
          t(xe) ? (a(), oe(qe, {
            key: 1,
            to: "#editor-container"
          }, [
            t(X) ? (a(), o("div", $l, [
              l("div", Vl, [
                l("div", {
                  class: "absolute top-1 right-2 cursor-pointer",
                  onClick: C[4] || (C[4] = (d) => X.value = !1)
                }, " X "),
                Cl,
                z(ne, {
                  modelValue: t(de),
                  "onUpdate:modelValue": C[5] || (C[5] = (d) => P(de) ? de.value = d : null)
                }, null, 8, ["modelValue"]),
                l("div", Sl, [
                  (a(!0), o(b, null, B(t(Se), (d) => {
                    var j;
                    return a(), o("div", {
                      class: "border border-dark-5 rounded py-1 px-3 flex gap-1 hover:border-transparent hover:bg-true-blue-5 cursor-pointer",
                      key: d.id,
                      onClick: (p) => me(d)
                    }, [
                      l("div", jl, [
                        l("span", Nl, k(d.id), 1),
                        l("span", Il, k(d.name), 1)
                      ]),
                      l("div", {
                        class: Me(["rounded h-3 w-3 border", [
                          t(n).target && (j = t(n)) != null && j.target.find((p) => p.id === d.id) ? "bg-red-1" : ""
                        ]])
                      }, null, 2)
                    ], 8, wl);
                  }), 128))
                ])
              ])
            ])) : c("", !0)
          ])) : c("", !0),
          t(L) != se ? (a(), o("label", Pl, [
            Bl,
            q(l("select", {
              class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
              "onUpdate:modelValue": C[6] || (C[6] = (d) => P(O) ? O.value = d : null),
              onChange: U,
              required: ""
            }, [
              Ol,
              (a(!0), o(b, null, B(t(K), (d, j) => (a(), o("option", {
                key: j,
                value: d
              }, k($.$t(j)), 9, Dl))), 128))
            ], 544), [
              [J, t(O)]
            ])
          ])) : c("", !0),
          t(O) != se ? (a(), o("div", Ul, [
            l("div", Al, [
              l("label", Ll, [
                ql,
                q(l("select", {
                  class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
                  "onUpdate:modelValue": C[7] || (C[7] = (d) => P(V) ? V.value = d : null),
                  onChange: A,
                  required: ""
                }, [
                  Ml,
                  (a(!0), o(b, null, B(t(fe), (d, j) => (a(), o(b, { key: j }, [
                    Number.isInteger(d) ? c("", !0) : (a(), o("option", {
                      key: 0,
                      value: j
                    }, k($.$t(d)), 9, Rl))
                  ], 64))), 128))
                ], 544), [
                  [J, t(V)]
                ])
              ]),
              t(V) == t(fe).SpecifiedTime ? (a(), o("div", El, [
                z(t(Ne), {
                  modelValue: t(n).dateRange,
                  "onUpdate:modelValue": C[8] || (C[8] = (d) => t(n).dateRange = d),
                  modelModifiers: { range: !0 },
                  mode: "date"
                }, {
                  default: re(({ togglePopover: d, inputValue: j }) => [
                    l("button", {
                      class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 transition-all hover:bg-light-3 hover:bg-opacity-50",
                      onClick: d
                    }, k(j.start && j.end ? `${j.start}-${j.end}` : "請選定執行日期"), 9, Fl)
                  ]),
                  _: 1
                }, 8, ["modelValue"])
              ])) : c("", !0)
            ]),
            t(V) != "" ? (a(), o("label", Gl, [
              q(l("select", {
                class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
                "onUpdate:modelValue": C[9] || (C[9] = (d) => P(f) ? f.value = d : null),
                onChange: D,
                required: ""
              }, [
                Jl,
                (a(!0), o(b, null, B(t(Ie), (d, j) => (a(), o(b, { key: j }, [
                  Number.isInteger(d) ? c("", !0) : (a(), o("option", {
                    key: 0,
                    value: d
                  }, k($.$t(j)), 9, zl))
                ], 64))), 128))
              ], 544), [
                [J, t(f)]
              ])
            ])) : c("", !0),
            t(f) != se ? (a(), o("label", Hl, [
              q(l("select", {
                class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
                "onUpdate:modelValue": C[10] || (C[10] = (d) => P(E) ? E.value = d : null),
                onChange: G,
                required: ""
              }, [
                Xl,
                (a(!0), o(b, null, B(t(u), (d, j) => (a(), o(b, { key: j }, [
                  Number.isInteger(d) ? c("", !0) : (a(), o("option", {
                    key: 0,
                    value: d
                  }, k($.$t(`condition${j}`)), 9, Ql))
                ], 64))), 128))
              ], 544), [
                [J, t(E)]
              ])
            ])) : c("", !0),
            t(E) != se ? (a(), oe(ne, {
              key: 2,
              modelValue: t(n).value,
              "onUpdate:modelValue": C[11] || (C[11] = (d) => t(n).value = d),
              type: "number",
              required: !0
            }, null, 8, ["modelValue"])) : c("", !0)
          ])) : c("", !0),
          t(O) != se ? (a(), o("div", Yl, [
            q(l("input", {
              type: "checkbox",
              "onUpdate:modelValue": C[12] || (C[12] = (d) => $.modelValue.comparison = d),
              id: "comparison"
            }, null, 512), [
              [$e, $.modelValue.comparison]
            ]),
            Kl
          ])) : c("", !0)
        ])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), Wl = {
  key: 0,
  class: "flex items-center justify-center gap-3"
}, Tl = /* @__PURE__ */ l("div", { class: "h-[1px] flex-1 bg-light-3" }, null, -1), ea = /* @__PURE__ */ l("p", { class: "p4-b to-dark-4" }, "且", -1), ta = /* @__PURE__ */ l("div", { class: "h-[1px] flex-1 bg-light-3" }, null, -1), na = [
  Tl,
  ea,
  ta
], la = {
  key: 0,
  class: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full flex justify-center items-center bg-dark-3 rounded bg-opacity-50 z-[2]"
}, aa = { class: "relative bg-light-5 rounded-xs shadow-01 w-4/5 p-4" }, oa = /* @__PURE__ */ l("span", { class: "p1-b flex justify-center mb-1" }, "請選擇條件", -1), ra = /* @__PURE__ */ He('<div class="flex flex-col gap-2 mt-2"><div class="border border-dark-5 rounded py-1 px-3 flex gap-1 hover:border-transparent hover:bg-true-blue-5 cursor-pointer"><div class="flex flex-col flex-1"><span class="p3-b">當帳戶剩餘預算 小於指定金額，執行動作</span><span class="p4-r">ex: 帳戶剩餘預算小於 1000 元</span></div><div class="flex justify-center items-center">O</div></div></div>', 1), sa = /* @__PURE__ */ ee({
  __name: "Condition",
  setup(e) {
    const _ = I(!1), g = Ve("eventData"), n = I(g.value.conditions ?? []);
    T(
      n,
      (y) => {
        g.value.conditions = y;
      },
      { deep: !0 }
    );
    const m = () => {
      n.value.push({}), _.value = !1;
    }, v = (y) => {
      n.value.splice(y, 1);
    };
    return (y, S) => (a(), o(b, null, [
      (a(!0), o(b, null, B(t(n), (F, L) => (a(), o(b, { key: L }, [
        z(Zl, {
          index: L,
          modelValue: t(n)[L],
          "onUpdate:modelValue": (R) => t(n)[L] = R,
          onRemoveItem: (R) => v(L)
        }, null, 8, ["index", "modelValue", "onUpdate:modelValue", "onRemoveItem"]),
        L + 1 !== t(n).length ? (a(), o("div", Wl, na)) : c("", !0)
      ], 64))), 128)),
      l("div", {
        class: "p3-b text-true-blue-3 flex ml-auto w-fit cursor-pointer hover:text-true-blue-2",
        onClick: S[0] || (S[0] = (F) => _.value = !t(_))
      }, " + 加入條件 "),
      t(_) ? (a(), o("div", la, [
        l("div", aa, [
          l("div", {
            class: "absolute top-1 right-2 cursor-pointer",
            onClick: S[1] || (S[1] = (F) => _.value = !1)
          }, " X "),
          oa,
          z(ne),
          ra,
          l("div", {
            class: "border ml-auto mt-2 border-true-blue-3 text-true-blue-3 rounded px-1 w-fit p3-r cursor-pointer hover:text-true-blue-2 hover:border-true-blue-2",
            onClick: m
          }, " 自訂 ")
        ])
      ])) : c("", !0)
    ], 64));
  }
}), ua = { class: "flex items-center gap-2" }, ia = /* @__PURE__ */ l("span", { class: "p4-b" }, "以電子郵件寄出結果", -1), da = /* @__PURE__ */ l("option", {
  value: "-2",
  disabled: ""
}, "請選擇", -1), ca = ["value"], pa = /* @__PURE__ */ ee({
  __name: "Notification",
  setup(e) {
    const _ = Ve("eventData"), g = I(
      _.value.notification ?? {
        email: -2
      }
    );
    return je(() => {
      g.value.email === -2 && (g.value.email = 0);
    }), T(
      g,
      (n) => {
        _.value.notification = n;
      },
      { deep: !0 }
    ), (n, m) => (a(), o("div", null, [
      l("label", ua, [
        ia,
        q(l("select", {
          class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
          "onUpdate:modelValue": m[0] || (m[0] = (v) => t(g).email = v)
        }, [
          da,
          (a(!0), o(b, null, B(t(Pe), (v, y) => (a(), o(b, { key: y }, [
            Number.isInteger(v) ? c("", !0) : (a(), o("option", {
              key: 0,
              value: Number(y)
            }, k(n.$t(`mail${v}`)), 9, ca))
          ], 64))), 128))
        ], 512), [
          [J, t(g).email]
        ])
      ])
    ]));
  }
}), Re = (e) => (Qe("data-v-227c6f0b"), e = e(), Ye(), e), va = ["onSubmit"], ga = /* @__PURE__ */ Re(() => /* @__PURE__ */ l("div", { class: "p1-b" }, "建立自動化規則", -1)), ma = /* @__PURE__ */ Re(() => /* @__PURE__ */ l("span", { class: "p4-b" }, "規則名稱*", -1)), ba = {
  key: 0,
  class: "text-red-1"
}, fa = 100, ha = /* @__PURE__ */ ee({
  __name: "TCEventEditorApp",
  props: {
    data: {}
  },
  emits: ["update:data"],
  setup(e, { expose: _, emit: g }) {
    const n = e, m = N(() => JSON.parse(n.data || "{}")), v = (R) => {
      const O = Object.fromEntries(
        Object.entries(R).filter(([U, V]) => V !== null)
      );
      return JSON.stringify(O, null, 4);
    }, y = I([]), S = (R) => {
      R.preventDefault(), g("update:data", v(m.value));
    }, F = (R) => {
      var O;
      (O = L.value) == null || O.click();
    };
    Oe("eventData", m), Oe("checkDataValid", y);
    const L = I();
    return _({
      saveData: F
    }), (R, O) => n.data ? (a(), o("form", {
      key: 0,
      class: "p-5 rounded border flex flex-col gap-5 relative",
      id: "editor-container",
      onSubmit: Xe(S, ["prevent"])
    }, [
      ga,
      z(he, { title: "基本資料" }, {
        default: re(() => [
          l("div", null, [
            ma,
            z(ne, {
              modelValue: t(m).title,
              "onUpdate:modelValue": O[0] || (O[0] = (U) => t(m).title = U),
              maxLength: fa,
              required: !0
            }, null, 8, ["modelValue"])
          ])
        ]),
        _: 1
      }),
      z(he, { title: "執行時間" }, {
        default: re(() => [
          z(Mt, {
            frequency: t(m).frequency,
            "onUpdate:frequency": O[1] || (O[1] = (U) => t(m).frequency = U),
            interval: t(m).interval,
            "onUpdate:interval": O[2] || (O[2] = (U) => t(m).interval = U)
          }, null, 8, ["frequency", "interval"])
        ]),
        _: 1
      }),
      z(he, { title: "通知" }, {
        default: re(() => [
          z(pa)
        ]),
        _: 1
      }),
      z(ol),
      z(sa),
      t(y).length ? (a(), o("span", ba, "資料未填寫完整")) : c("", !0),
      l("button", {
        ref_key: "submitBtn",
        ref: L,
        class: "p-2 px-3 rounded bg-slate-100 hover:bg-sky-500 hover:text-white"
      }, " 保存 ", 512)
    ], 40, va)) : c("", !0);
  }
});
const ja = /* @__PURE__ */ Be(ha, [["__scopeId", "data-v-227c6f0b"]]), _a = { class: "bg-white p-3 rounded-xl flex w-4/5 min-h-[80%] max-h-96" }, xa = { class: "flex flex-col gap-2 py-2 px-4" }, ya = /* @__PURE__ */ l("div", { class: "w-[1px] h-auto bg-dark-4" }, null, -1), ka = /* @__PURE__ */ l("div", { class: "flex-1 h-auto bg-red-1" }, null, -1), Na = /* @__PURE__ */ ee({
  __name: "QuickSetup",
  setup(e) {
    const _ = I(!1), g = () => {
      _.value = !0;
    }, n = I(["選擇平台", "執行動作", "設定條件", "執行時間"]);
    return (m, v) => {
      const y = Ke("vue-final-modal");
      return a(), o("div", null, [
        z(y, {
          modelValue: t(_),
          "onUpdate:modelValue": v[0] || (v[0] = (S) => P(_) ? _.value = S : null),
          "content-class": "flex h-full w-full justify-center items-center",
          "hide-overlay": !1,
          "esc-to-close": !0,
          "click-to-close": !0
        }, {
          default: re(() => [
            l("div", _a, [
              l("div", xa, [
                (a(!0), o(b, null, B(t(n), (S, F) => (a(), o("div", {
                  key: S,
                  class: "flex flex-col"
                }, [
                  l("span", null, " Step." + k(F + 1), 1),
                  l("span", null, k(S), 1)
                ]))), 128))
              ]),
              ya,
              ka
            ])
          ]),
          _: 1
        }, 8, ["modelValue"]),
        l("div", { onClick: g }, [
          Le(m.$slots, "default")
        ])
      ]);
    };
  }
});
export {
  Na as QuickSetup,
  ja as TCEventEditorApp,
  wa as TCEventItems,
  Sa as setApiUrlBase
};
