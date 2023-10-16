import { defineComponent as ee, openBlock as a, createElementBlock as o, createElementVNode as l, toDisplayString as $, ref as I, watchEffect as Ae, computed as N, watch as T, onBeforeUnmount as Ge, Fragment as b, unref as t, renderList as B, createBlock as oe, createCommentVNode as c, withDirectives as L, isRef as P, vModelSelect as z, onUnmounted as Je, vModelCheckbox as $e, withCtx as re, inject as Ve, createVNode as F, createTextVNode as Le, renderSlot as qe, onMounted as je, Teleport as Me, normalizeClass as Re, nextTick as ze, createStaticVNode as He, provide as Oe, resolveComponent as Ee, withModifiers as Xe, pushScopeId as Qe, popScopeId as Ye } from "vue";
import { DatePicker as Ne } from "v-calendar";
import { useI18n as Ke } from "vue-i18n";
function Sa(e) {
}
class Ze {
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
  EventHelper: Ze,
  FrequencyType: M,
  MonthType: Y,
  OperationType: Ie,
  ValueType: u,
  WeekOrdinalWordsType: ue,
  WeekdaysType: te,
  emailType: Pe
}, Symbol.toStringTag, { value: "Module" })), We = { class: "flex" }, Te = ["checked", "id"], et = ["for"], tt = /* @__PURE__ */ ee({
  __name: "CheckBox",
  props: {
    label: {},
    checked: { type: Boolean },
    fieldId: {}
  },
  emits: ["update:checked"],
  setup(e, { emit: _ }) {
    return (g, n) => (a(), o("div", We, [
      l("input", {
        onInput: n[0] || (n[0] = (m) => g.$emit("update:checked", m.target.checked)),
        type: "checkbox",
        checked: g.checked,
        id: g.fieldId,
        class: "hidden"
      }, null, 40, Te),
      l("label", {
        for: g.fieldId,
        class: "p3-r cursor-pointer rounded border hover:bg-light-4 border-dark-5 px-1 py-0.5 flex justify-center items-center text-dark-2 min-w-[1.75rem] min-h-[1.75rem]"
      }, $(g.label), 9, et)
    ]));
  }
});
const Be = (e, _) => {
  const g = e.__vccOpts || e;
  for (const [n, m] of _)
    g[n] = m;
  return g;
}, De = /* @__PURE__ */ Be(tt, [["__scopeId", "data-v-8bd665ed"]]), nt = {
  key: 0,
  class: "flex gap-1.5 flex-wrap"
}, lt = {
  key: 1,
  class: "flex gap-2 items-center"
}, at = /* @__PURE__ */ l("span", { class: "p3-r" }, "指定", -1), ot = ["value"], rt = { class: "flex gap-4 flex-wrap" }, st = /* @__PURE__ */ ee({
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
    const g = e, n = I(g.monthDate), m = I(g.weekOrdinal), v = I(g.weekdays), k = I(g.yearMonths), S = (D, E, J = !1) => {
      if (J) {
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
        k.value.length ? k.value : null
      );
    });
    const G = I([
      { name: "星期日", id: te.Sunday },
      { name: "星期一", id: te.Monday },
      { name: "星期二", id: te.Tuesday },
      { name: "星期三", id: te.Wednesday },
      { name: "星期四", id: te.Thursday },
      { name: "星期五", id: te.Friday },
      { name: "星期六", id: te.Saturday },
      { name: "平日", id: te.Weekday },
      { name: "週末", id: te.Weekend }
    ]), A = I([
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
    ]), q = N(() => {
      if (g.type === M.Week)
        return [
          {
            key: v,
            label: "weekdaysOrigin",
            options: G.value
          }
        ];
      if (g.type === M.Month) {
        if (f.value.id === 0)
          return [
            {
              key: m,
              label: "weekOrdinalOrigin",
              options: A.value
            },
            {
              key: v,
              label: "weekdaysOrigin",
              options: G.value
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
              options: A.value
            },
            {
              key: v,
              label: "weekdaysOrigin",
              options: G.value
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
    }), x = N(() => g.type === M.Month || g.type === M.Annual ? !0 : (n.value = [], m.value = [], v.value = [], k.value = [], !1)), U = I([
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
    ]), f = I(U.value[0]);
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
        (D === M.Month || D === M.Annual) && (D != M.Annual && (k.value = []), R.value && R.value.length > 0 ? f.value = U.value[1] : f.value = U.value[0]);
      },
      { immediate: !0 }
    ), Ge(() => {
      n.value = [], m.value = [], v.value = [], k.value = [];
    }), (D, E) => (a(), o(b, null, [
      D.type === t(M).Annual ? (a(), o("div", nt, [
        (a(!0), o(b, null, B(t(O), (J) => {
          var w;
          return a(), oe(De, {
            key: J.id,
            checked: (w = t(k)) == null ? void 0 : w.includes(J.id),
            "onUpdate:checked": (K) => S(J.id, t(k), !0),
            fieldId: J.name,
            label: J.name
          }, null, 8, ["checked", "onUpdate:checked", "fieldId", "label"]);
        }), 128))
      ])) : c("", !0),
      t(x) ? (a(), o("div", lt, [
        at,
        L(l("select", {
          class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
          "onUpdate:modelValue": E[0] || (E[0] = (J) => P(f) ? f.value = J : null)
        }, [
          (a(!0), o(b, null, B(t(U), (J, w) => (a(), o("option", {
            key: w,
            value: J
          }, $(J.name), 9, ot))), 128))
        ], 512), [
          [z, t(f)]
        ])
      ])) : c("", !0),
      l("div", rt, [
        (a(!0), o(b, null, B(t(q), (J) => (a(), o("div", {
          class: "flex gap-1 flex-wrap",
          key: J
        }, [
          (a(!0), o(b, null, B(J.options, (w) => {
            var K;
            return a(), oe(De, {
              key: w.id,
              checked: (K = J.key.value) == null ? void 0 : K.includes(w.id),
              "onUpdate:checked": (X) => S(w.id, J.key),
              fieldId: w.name,
              label: w.name
            }, null, 8, ["checked", "onUpdate:checked", "fieldId", "label"]);
          }), 128))
        ]))), 128))
      ])
    ], 64));
  }
});
const ut = { class: "flex flex-col gap-2" }, it = { class: "flex items-center gap-2" }, dt = /* @__PURE__ */ l("label", {
  for: "due",
  class: "p3-b"
}, "結束於指定日期", -1), ct = ["onClick"], pt = /* @__PURE__ */ ee({
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
    }), Je(() => {
      _("update:modelValue", null);
    }), (v, k) => (a(), o("div", ut, [
      l("div", it, [
        L(l("input", {
          type: "checkbox",
          "onUpdate:modelValue": k[0] || (k[0] = (S) => P(m) ? m.value = S : null),
          id: "due"
        }, null, 512), [
          [$e, t(m)]
        ]),
        dt,
        t(m) ? (a(), oe(t(Ne), {
          key: 0,
          modelValue: t(n),
          "onUpdate:modelValue": k[1] || (k[1] = (S) => P(n) ? n.value = S : null),
          mode: "dateTime",
          timezone: "UTC",
          "min-Date": /* @__PURE__ */ new Date()
        }, {
          default: re(({ togglePopover: S, inputValue: G }) => [
            l("button", {
              class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 transition-all hover:bg-light-3 hover:bg-opacity-50",
              onClick: S
            }, $(G || "請選定結束日期"), 9, ct)
          ]),
          _: 1
        }, 8, ["modelValue", "min-Date"])) : c("", !0)
      ])
    ]));
  }
}), vt = { class: "flex w-auto items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-1.5" }, gt = ["value", "type", "placeholder", "maxLength", "required"], mt = /* @__PURE__ */ ee({
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
    return (m, v) => (a(), o("div", vt, [
      l("input", {
        value: m.modelValue,
        onInput: n,
        type: m.type,
        class: "p3-b w-full border-none outline-none shadow-none",
        placeholder: m.placeholder,
        maxLength: m.maxLength,
        required: m.required
      }, null, 40, gt)
    ]));
  }
});
const ne = /* @__PURE__ */ Be(mt, [["__scopeId", "data-v-068dea7c"]]), bt = { class: "flex flex-col gap-3" }, ft = /* @__PURE__ */ l("div", { class: "flex items-center justify-center gap-3 my-2" }, [
  /* @__PURE__ */ l("p", { class: "p4-b" }, "日期時間"),
  /* @__PURE__ */ l("div", { class: "h-[1px] flex-1 bg-light-3" })
], -1), ht = { class: "flex flex-col gap-2" }, _t = { class: "flex gap-2 items-center" }, xt = /* @__PURE__ */ l("span", { class: "p4-b" }, "開始", -1), yt = ["onClick"], kt = ["value"], $t = /* @__PURE__ */ l("div", { class: "flex items-center justify-center gap-3 w-full my-2" }, [
  /* @__PURE__ */ l("p", { class: "p4-b" }, "重複頻率"),
  /* @__PURE__ */ l("div", { class: "h-[1px] flex-1 bg-light-3" })
], -1), Vt = { class: "flex space-x-2 items-center" }, Ct = { class: "flex items-center gap-2" }, St = /* @__PURE__ */ l("span", { class: "p4-b" }, "重複", -1), wt = ["value"], jt = /* @__PURE__ */ l("option", { value: 0 }, "自訂", -1), Nt = { class: "p4-b" }, It = {
  key: 0,
  class: "flex items-center gap-2"
}, Pt = { class: "flex items-center gap-2" }, Bt = /* @__PURE__ */ l("span", { class: "p4-b" }, "頻率", -1), Ot = /* @__PURE__ */ l("option", {
  value: "-1",
  disabled: ""
}, "請選擇", -1), Dt = ["value"], Ut = {
  key: 0,
  class: "flex items-center gap-2"
}, At = /* @__PURE__ */ l("span", { class: "p4-b" }, "每", -1), Lt = { class: "p4-b" }, Ue = 1, qt = /* @__PURE__ */ ee({
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
    T(v, (x) => {
      x || (x = Ue), _("update:interval", x);
    });
    const k = I(g.frequency);
    T(k, (x) => {
      _("update:frequency", x);
    });
    const S = N({
      get: () => n.value.weekdays ?? [],
      set: (x) => {
        n.value.weekdays = x;
      }
    }), G = N({
      get: () => n.value.weekOrdinal ?? [],
      set: (x) => {
        n.value.weekOrdinal = x;
      }
    }), A = N({
      get: () => n.value.monthDate ?? [],
      set: (x) => {
        n.value.monthDate = x;
      }
    }), R = N({
      get: () => n.value.yearMonths ?? [],
      set: (x) => {
        n.value.yearMonths = x;
      }
    }), O = N(() => {
      if (q.value == M.Never)
        return "只執行一次";
      if (q.value == M.Hour)
        return "每小時執行一次";
      if (q.value == M.Day)
        return "每日執行一次";
      if (q.value == M.Week)
        return "每週執行一次";
      if (q.value == M.Month)
        return "每月執行一次";
      if (q.value == M.Annual)
        return "每年執行一次";
      const x = {
        1: "小時",
        2: "日",
        3: "週",
        4: "月",
        5: "年"
      };
      return q.value == 0 ? `每${v.value ?? ""}${x[k.value] ?? ""}執行一次` : "";
    }), q = I(-1);
    return g.interval == 1 && (q.value = g.frequency), T(
      q,
      (x) => {
        M[x] && (_("update:frequency", x), _("update:interval", 1), k.value = q.value, n.value.weekdays = null, n.value.weekOrdinal = null, n.value.monthDate = null, n.value.yearMonths = null), n.value.customInterval = x === 0;
      },
      { immediate: !0 }
    ), (x, U) => (a(), o("div", bt, [
      ft,
      l("div", ht, [
        l("div", _t, [
          xt,
          F(t(Ne), {
            modelValue: t(n).start,
            "onUpdate:modelValue": U[0] || (U[0] = (f) => t(n).start = f),
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
                }, null, 8, kt),
                Le(" " + $(D || "請選定執行日期"), 1)
              ], 8, yt)
            ]),
            _: 1
          }, 8, ["modelValue", "min-Date"])
        ])
      ]),
      $t,
      l("div", Vt, [
        l("label", Ct, [
          St,
          L(l("select", {
            class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
            "onUpdate:modelValue": U[1] || (U[1] = (f) => P(q) ? q.value = f : null)
          }, [
            (a(!0), o(b, null, B(t(M), (f, D) => (a(), o(b, { key: D }, [
              Number.isInteger(f) ? (a(), o("option", {
                key: 0,
                value: f
              }, $(x.$t(D)), 9, wt)) : c("", !0)
            ], 64))), 128)),
            jt
          ], 512), [
            [z, t(q)]
          ])
        ]),
        l("span", Nt, $(t(O)), 1)
      ]),
      t(M)[t(q)] == null ? (a(), o("div", It, [
        l("label", Pt, [
          Bt,
          L(l("select", {
            class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
            "onUpdate:modelValue": U[2] || (U[2] = (f) => P(k) ? k.value = f : null)
          }, [
            Ot,
            (a(!0), o(b, null, B(t(M), (f, D) => (a(), o(b, { key: D }, [
              f != t(M).Never && Number.isInteger(f) ? (a(), o("option", {
                key: 0,
                value: f
              }, $(x.$t(D)), 9, Dt)) : c("", !0)
            ], 64))), 128))
          ], 512), [
            [z, t(k)]
          ])
        ]),
        t(k) != -1 ? (a(), o("label", Ut, [
          At,
          F(ne, {
            class: "!w-10 text-center",
            modelValue: t(v),
            "onUpdate:modelValue": U[3] || (U[3] = (f) => P(v) ? v.value = f : null),
            type: "number"
          }, null, 8, ["modelValue"]),
          l("span", Lt, $(x.$t(`s${t(M)[t(k)]}`)), 1)
        ])) : c("", !0)
      ])) : c("", !0),
      t(M)[t(q)] == null ? (a(), oe(st, {
        key: 1,
        type: t(k),
        weekdays: t(S),
        "onUpdate:weekdays": U[4] || (U[4] = (f) => P(S) ? S.value = f : null),
        weekOrdinal: t(G),
        "onUpdate:weekOrdinal": U[5] || (U[5] = (f) => P(G) ? G.value = f : null),
        monthDate: t(A),
        "onUpdate:monthDate": U[6] || (U[6] = (f) => P(A) ? A.value = f : null),
        yearMonths: t(R),
        "onUpdate:yearMonths": U[7] || (U[7] = (f) => P(R) ? R.value = f : null)
      }, null, 8, ["type", "weekdays", "weekOrdinal", "monthDate", "yearMonths"])) : c("", !0),
      t(k) !== -1 ? (a(), oe(pt, {
        key: 2,
        modelValue: t(n).due,
        "onUpdate:modelValue": U[8] || (U[8] = (f) => t(n).due = f)
      }, null, 8, ["modelValue"])) : c("", !0)
    ]));
  }
}), Mt = { class: "relative border rounded border-light-3 py-4 px-3" }, Rt = { class: "p3-b absolute left-2 -top-3 text-dark-3 bg-light-5" }, he = /* @__PURE__ */ ee({
  __name: "OuterBlock",
  props: {
    title: {}
  },
  setup(e) {
    return (_, g) => (a(), o("div", Mt, [
      l("div", Rt, $(_.title), 1),
      qe(_.$slots, "default")
    ]));
  }
}), Et = { class: "flex flex-col gap-2" }, Ft = { class: "flex items-center gap-2 relative pt-2" }, Gt = { class: "flex items-center gap-2" }, Jt = /* @__PURE__ */ l("span", { class: "p4-b" }, "平台", -1), zt = /* @__PURE__ */ l("option", {
  value: "",
  disabled: ""
}, "請選擇", -1), Ht = ["value"], Xt = {
  key: 0,
  class: "flex items-center gap-2"
}, Qt = /* @__PURE__ */ l("span", { class: "p4-b" }, "層級", -1), Yt = /* @__PURE__ */ l("option", {
  value: "",
  disabled: ""
}, "請選擇", -1), Kt = ["value"], Zt = {
  key: 1,
  class: "flex items-center gap-2"
}, Wt = /* @__PURE__ */ l("span", { class: "p4-b" }, "目標", -1), Tt = /* @__PURE__ */ l("option", {
  value: "",
  disabled: ""
}, "請選擇", -1), en = ["value"], tn = {
  key: 0,
  class: "flex flex-col"
}, nn = /* @__PURE__ */ l("span", { class: "p4-b" }, "指定目標", -1), ln = { key: 0 }, an = {
  key: 0,
  class: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full flex justify-center items-center bg-dark-3 rounded bg-opacity-50 z-[2]"
}, on = { class: "relative bg-light-5 rounded-xs shadow-01 w-4/5 p-4 min-h-[300px] h-fit" }, rn = /* @__PURE__ */ l("span", { class: "p1-b flex justify-center mb-1" }, "請選擇目標", -1), sn = { class: "flex flex-col gap-2 mt-2" }, un = ["onClick"], dn = { class: "flex flex-col flex-1" }, cn = { class: "p3-b" }, pn = { class: "p4-r" }, vn = {
  key: 2,
  class: "flex flex-col gap-2"
}, gn = { class: "flex items-center gap-2" }, mn = /* @__PURE__ */ l("span", { class: "p4-b" }, "執行", -1), bn = /* @__PURE__ */ l("option", {
  value: "",
  disabled: ""
}, "請選擇", -1), fn = ["value"], hn = {
  key: 0,
  class: "flex gap-x-2 gap-y-3 flex-wrap"
}, _n = { class: "flex items-center gap-2" }, xn = /* @__PURE__ */ l("span", { class: "p4-b" }, "類型", -1), yn = /* @__PURE__ */ l("option", {
  value: "",
  disabled: ""
}, "請選擇", -1), kn = ["value"], $n = {
  key: 0,
  class: "flex items-center gap-2"
}, Vn = /* @__PURE__ */ l("span", { class: "p4-b" }, "調整", -1), Cn = /* @__PURE__ */ l("option", {
  value: "",
  disabled: ""
}, "請選擇", -1), Sn = ["value"], wn = {
  key: 1,
  class: "flex items-center gap-2"
}, jn = { class: "flex items-center gap-2" }, Nn = /* @__PURE__ */ l("span", { class: "p4-b" }, "類型", -1), In = /* @__PURE__ */ l("option", {
  value: "",
  disabled: ""
}, "請選擇", -1), Pn = ["value"], Bn = {
  key: 0,
  class: "flex items-center gap-2"
}, On = /* @__PURE__ */ l("span", { class: "p4-b" }, "調整", -1), Dn = /* @__PURE__ */ l("option", {
  value: "",
  disabled: ""
}, "請選擇", -1), Un = ["value"], An = {
  key: 1,
  class: "flex items-center gap-2"
}, Ln = {
  key: 2,
  class: "flex items-center gap-2 w-full"
}, qn = { class: "flex flex-col gap-2" }, Mn = { class: "flex items-center gap-2" }, Rn = /* @__PURE__ */ l("label", { for: "maxBudget" }, "設定預算上限", -1), En = {
  key: 0,
  class: "flex gap-2 items-center"
}, Fn = /* @__PURE__ */ l("span", null, "元", -1), Gn = { class: "flex items-center gap-2" }, Jn = /* @__PURE__ */ l("span", { class: "p4-b" }, "類型", -1), zn = /* @__PURE__ */ l("option", {
  value: "",
  disabled: ""
}, "請選擇", -1), Hn = ["value"], Xn = {
  key: 0,
  class: "flex items-center gap-2"
}, Qn = /* @__PURE__ */ l("span", { class: "p4-b" }, "調整", -1), Yn = /* @__PURE__ */ l("option", {
  value: "",
  disabled: ""
}, "請選擇", -1), Kn = ["value"], Zn = {
  key: 1,
  class: "flex items-center gap-2"
}, Wn = {
  key: 2,
  class: "flex items-center gap-2 w-full"
}, Tn = { class: "flex flex-col gap-2" }, el = { class: "flex items-center gap-2" }, tl = /* @__PURE__ */ l("label", {
  for: "maxBudget",
  class: "p3-b"
}, "設定預算下限", -1), nl = {
  key: 0,
  class: "flex gap-2 items-center"
}, ll = /* @__PURE__ */ l("span", null, "元", -1), ae = "", al = /* @__PURE__ */ ee({
  __name: "EventAction",
  setup(e) {
    const { t: _ } = Ke(), g = Ve("eventData"), n = I(g.value.action ?? {}), m = I(!!Object.keys(n.value).length), v = I(!1);
    T(v, (p) => {
      var i, r, y, Q, le;
      (i = n.value.params) != null && i.limit || (y = (r = n.value) == null ? void 0 : r.params) == null || delete y.limit, p || (le = (Q = n.value) == null ? void 0 : Q.params) == null || delete le.limit;
    }), Ae(() => {
      var p, i, r, y, Q;
      ((p = n.value) == null ? void 0 : p.action) == s.SetNewBudget || ((i = n.value) == null ? void 0 : i.action) == s.IncreaseBudget || ((r = n.value) == null ? void 0 : r.action) == s.LowerBudget || delete n.value.params, v.value = !!((Q = (y = n.value) == null ? void 0 : y.params) != null && Q.limit);
    }), T(
      n,
      (p) => {
        g.value.action = p;
      },
      { deep: !0 }
    );
    const k = N(() => {
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
    }, G = N(() => {
      var r, y;
      const p = (r = n.value) == null ? void 0 : r.client, i = (y = n.value) == null ? void 0 : y.adLevel;
      if (p && i) {
        const Q = S[p];
        if (Q) {
          const le = Q[i];
          if (le)
            return le;
        }
      }
      return {};
    }), A = {
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
      var y, Q, le;
      const p = (y = n.value) == null ? void 0 : y.client, i = (Q = n.value) == null ? void 0 : Q.adLevel, r = (le = n.value) == null ? void 0 : le.action;
      if (p && i && r) {
        const be = A[p];
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
    }), O = N(() => n.value.client ? n.value.client : ""), q = (p) => {
      n.value.client = Number(p.target.value), delete n.value.target;
    }, x = N(() => n.value.adLevel ? n.value.adLevel : ""), U = (p) => {
      n.value.adLevel = Number(p.target.value), delete n.value.action, delete n.value.target;
    }, f = N(() => n.value.targetType ? n.value.targetType : ""), D = (p) => {
      n.value.targetType = Number(p.target.value), delete n.value.action, delete n.value.target;
    }, E = N(() => n.value.action ? n.value.action : ""), J = (p) => n.value.action = Number(p.target.value), w = N(() => {
      var p;
      return (p = n.value) != null && p.params || (n.value.params = {}), n.value.params.budgetType ? n.value.params.budgetType : "";
    }), K = (p) => n.value.params.budgetType = p.target.value, X = N(() => {
      var p;
      return (p = n.value) != null && p.params || (n.value.params = {}), n.value.params.valueType ? n.value.params.valueType : "";
    }), me = (p) => n.value.params.valueType = p.target.value, ce = I(!1), Ce = (p) => {
      var r;
      (r = n.value) != null && r.target || (n.value.target = []);
      const i = n.value.target.findIndex(
        (y) => y.id === p.id
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
      const p = V.value.toLowerCase();
      return _e.value.filter(
        (i) => i[we.value].toLowerCase().includes(p)
      );
    }), xe = async () => {
      await Se(), ce.value = !0;
    }, V = I(""), C = () => {
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
      const y = p === H.Google && i === W.Campaign, Q = p === H.Facebook && i === Z.Campaign, le = p === H.Facebook && i === Z.AdGroup, be = y || Q || le, ye = r === ge.DailyBudget ? "日預算" : "總預算", ke = `${H[p]}${k.value[i]}`, Fe = be ? `若${_(ke)}設定為${ye}，則不會變更` : "";
      return { show: be, msg: Fe };
    }), (p, i) => t(m) ? (a(), oe(he, {
      key: 1,
      title: "動作"
    }, {
      default: re(() => [
        l("div", Et, [
          l("div", Ft, [
            l("div", {
              class: "cursor-pointer text-dark-4 absolute -top-2.5 -right-1.5 p4-b",
              onClick: j
            }, " 刪除 "),
            l("label", Gt, [
              Jt,
              L(l("select", {
                class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
                "onUpdate:modelValue": i[1] || (i[1] = (r) => P(O) ? O.value = r : null),
                onChange: q,
                required: ""
              }, [
                zt,
                (a(!0), o(b, null, B(t(H), (r, y) => (a(), o(b, { key: y }, [
                  Number.isInteger(r) ? c("", !0) : (a(), o("option", {
                    key: 0,
                    value: y
                  }, $(r), 9, Ht))
                ], 64))), 128))
              ], 544), [
                [z, t(O)]
              ])
            ]),
            t(O) != ae ? (a(), o("label", Xt, [
              Qt,
              L(l("select", {
                class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
                "onUpdate:modelValue": i[2] || (i[2] = (r) => P(x) ? x.value = r : null),
                onChange: U,
                required: ""
              }, [
                Yt,
                (a(!0), o(b, null, B(t(k), (r, y) => (a(), o(b, { key: y }, [
                  Number.isInteger(r) ? c("", !0) : (a(), o("option", {
                    key: 0,
                    value: y
                  }, $(p.$t(`${t(H)[t(O)]}${r}`)), 9, Kt))
                ], 64))), 128))
              ], 544), [
                [z, t(x)]
              ])
            ])) : c("", !0),
            t(x) != ae ? (a(), o("label", Zt, [
              Wt,
              L(l("select", {
                class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
                "onUpdate:modelValue": i[3] || (i[3] = (r) => P(f) ? f.value = r : null),
                onChange: D,
                required: ""
              }, [
                Tt,
                (a(!0), o(b, null, B(t(ie), (r, y) => (a(), o(b, { key: y }, [
                  Number.isInteger(r) ? c("", !0) : (a(), o("option", {
                    key: 0,
                    value: y
                  }, $(p.$t(r)), 9, en))
                ], 64))), 128))
              ], 544), [
                [z, t(f)]
              ])
            ])) : c("", !0)
          ]),
          t(f) === t(ie).ForID ? (a(), o("div", tn, [
            l("label", { class: "flex items-center gap-2" }, [
              nn,
              l("div", {
                class: "p4-r px-1.5 py-0.5 text-true-blue-2 rounded bg-true-blue-5 flex w-fit cursor-pointer hover:bg-true-blue-4",
                onClick: xe
              }, " 編輯 ")
            ]),
            t(f) === t(ie).ForID ? (a(), o("div", ln, [
              (a(!0), o(b, null, B(t(n).target, (r, y) => (a(), o("span", {
                class: "p4-r text-true-blue-3 px-0.5",
                key: r.id
              }, $(r.name) + $(y !== t(n).target.length - 1 ? "," : ""), 1))), 128))
            ])) : c("", !0)
          ])) : c("", !0),
          t(d) ? (a(), oe(Me, {
            key: 1,
            to: "#editor-container"
          }, [
            t(ce) ? (a(), o("div", an, [
              l("div", on, [
                l("div", {
                  class: "absolute top-1 right-2 cursor-pointer",
                  onClick: i[4] || (i[4] = (r) => ce.value = !1)
                }, " X "),
                rn,
                F(ne, {
                  modelValue: t(V),
                  "onUpdate:modelValue": i[5] || (i[5] = (r) => P(V) ? V.value = r : null)
                }, null, 8, ["modelValue"]),
                l("div", {
                  class: "mt-2 flex w-full justify-end p4-b text-true-blue-3",
                  onClick: C
                }, " 全選 "),
                l("div", sn, [
                  (a(!0), o(b, null, B(t(de), (r) => {
                    var y;
                    return a(), o("div", {
                      class: "border border-dark-5 rounded py-1 px-3 flex gap-1 hover:border-transparent hover:bg-true-blue-5 cursor-pointer",
                      key: r.id,
                      onClick: (Q) => Ce(r)
                    }, [
                      l("div", dn, [
                        l("span", cn, $(r.id), 1),
                        l("span", pn, $(r.name), 1)
                      ]),
                      l("div", {
                        class: Re(["rounded h-3 w-3 border", [
                          t(n).target && (y = t(n)) != null && y.target.find((Q) => Q.id === r.id) ? "bg-red-1" : ""
                        ]])
                      }, null, 2)
                    ], 8, un);
                  }), 128))
                ])
              ])
            ])) : c("", !0)
          ])) : c("", !0),
          t(f) !== ae ? (a(), o("div", vn, [
            l("label", gn, [
              mn,
              L(l("select", {
                class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
                "onUpdate:modelValue": i[6] || (i[6] = (r) => P(E) ? E.value = r : null),
                onChange: J,
                required: ""
              }, [
                bn,
                (a(!0), o(b, null, B(t(G), (r, y) => (a(), o("option", {
                  key: y,
                  value: r
                }, $(p.$t(y)), 9, fn))), 128))
              ], 544), [
                [z, t(E)]
              ])
            ]),
            t(x) != ae ? (a(), o("div", hn, [
              t(n).action == t(s).SetNewBudget ? (a(), o(b, { key: 0 }, [
                l("label", _n, [
                  xn,
                  L(l("select", {
                    class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
                    "onUpdate:modelValue": i[7] || (i[7] = (r) => P(w) ? w.value = r : null),
                    onChange: K,
                    required: ""
                  }, [
                    yn,
                    (a(!0), o(b, null, B(t(ge), (r, y) => (a(), o(b, { key: y }, [
                      Number.isInteger(r) ? c("", !0) : (a(), o("option", {
                        key: 0,
                        value: r
                      }, $(p.$t(r)), 9, kn))
                    ], 64))), 128))
                  ], 544), [
                    [z, t(w)]
                  ])
                ]),
                t(w) != ae ? (a(), o("label", $n, [
                  Vn,
                  L(l("select", {
                    class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
                    "onUpdate:modelValue": i[8] || (i[8] = (r) => P(X) ? X.value = r : null),
                    onChange: me,
                    required: ""
                  }, [
                    Cn,
                    (a(!0), o(b, null, B(t(R), (r, y) => (a(), o("option", {
                      key: y,
                      value: r
                    }, $(p.$t(`action${r}`)), 9, Sn))), 128))
                  ], 544), [
                    [z, t(X)]
                  ])
                ])) : c("", !0),
                t(X) != ae ? (a(), o("label", wn, [
                  F(ne, {
                    modelValue: t(n).params.value,
                    "onUpdate:modelValue": i[9] || (i[9] = (r) => t(n).params.value = r),
                    type: "number",
                    required: !0
                  }, null, 8, ["modelValue"]),
                  l("span", null, $(t(n).params.valueType === t(u).Percentage ? "%" : "元"), 1)
                ])) : c("", !0)
              ], 64)) : t(n).action == t(s).IncreaseBudget ? (a(), o(b, { key: 1 }, [
                l("label", jn, [
                  Nn,
                  L(l("select", {
                    class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
                    "onUpdate:modelValue": i[10] || (i[10] = (r) => P(w) ? w.value = r : null),
                    onChange: K,
                    required: ""
                  }, [
                    In,
                    (a(!0), o(b, null, B(t(ge), (r, y) => (a(), o(b, { key: y }, [
                      Number.isInteger(r) ? c("", !0) : (a(), o("option", {
                        key: 0,
                        value: r
                      }, $(p.$t(r)), 9, Pn))
                    ], 64))), 128))
                  ], 544), [
                    [z, t(w)]
                  ])
                ]),
                t(w) != ae ? (a(), o("label", Bn, [
                  On,
                  L(l("select", {
                    class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
                    "onUpdate:modelValue": i[11] || (i[11] = (r) => P(X) ? X.value = r : null),
                    onChange: me,
                    required: ""
                  }, [
                    Dn,
                    (a(!0), o(b, null, B(t(R), (r, y) => (a(), o("option", {
                      key: y,
                      value: r
                    }, $(p.$t(`action${r}`)), 9, Un))), 128))
                  ], 544), [
                    [z, t(X)]
                  ])
                ])) : c("", !0),
                t(X) != ae ? (a(), o("label", An, [
                  F(ne, {
                    modelValue: t(n).params.value,
                    "onUpdate:modelValue": i[12] || (i[12] = (r) => t(n).params.value = r),
                    type: "number",
                    required: !0
                  }, null, 8, ["modelValue"]),
                  l("span", null, $(t(n).params.valueType === t(u).Percentage ? "%" : "元"), 1)
                ])) : c("", !0),
                t(n).params.valueType === t(u).Percentage ? (a(), o("label", Ln, [
                  l("div", qn, [
                    l("div", Mn, [
                      L(l("input", {
                        type: "checkbox",
                        "onUpdate:modelValue": i[13] || (i[13] = (r) => P(v) ? v.value = r : null),
                        id: "maxBudget"
                      }, null, 512), [
                        [$e, t(v)]
                      ]),
                      Rn,
                      t(v) ? (a(), o("div", En, [
                        F(ne, {
                          modelValue: t(n).params.limit,
                          "onUpdate:modelValue": i[14] || (i[14] = (r) => t(n).params.limit = r),
                          type: "number",
                          required: !0
                        }, null, 8, ["modelValue"]),
                        Fn
                      ])) : c("", !0)
                    ])
                  ])
                ])) : c("", !0)
              ], 64)) : t(n).action == t(s).LowerBudget ? (a(), o(b, { key: 2 }, [
                l("label", Gn, [
                  Jn,
                  L(l("select", {
                    class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
                    "onUpdate:modelValue": i[15] || (i[15] = (r) => P(w) ? w.value = r : null),
                    onChange: K,
                    required: ""
                  }, [
                    zn,
                    (a(!0), o(b, null, B(t(ge), (r, y) => (a(), o(b, { key: y }, [
                      Number.isInteger(r) ? c("", !0) : (a(), o("option", {
                        key: 0,
                        value: r
                      }, $(p.$t(r)), 9, Hn))
                    ], 64))), 128))
                  ], 544), [
                    [z, t(w)]
                  ])
                ]),
                t(w) != ae ? (a(), o("label", Xn, [
                  Qn,
                  L(l("select", {
                    class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
                    "onUpdate:modelValue": i[16] || (i[16] = (r) => P(X) ? X.value = r : null),
                    onChange: me
                  }, [
                    Yn,
                    (a(!0), o(b, null, B(t(R), (r, y) => (a(), o("option", {
                      key: y,
                      value: r
                    }, $(p.$t(`action${r}`)), 9, Kn))), 128))
                  ], 544), [
                    [z, t(X)]
                  ])
                ])) : c("", !0),
                t(X) != ae ? (a(), o("label", Zn, [
                  F(ne, {
                    modelValue: t(n).params.value,
                    "onUpdate:modelValue": i[17] || (i[17] = (r) => t(n).params.value = r),
                    type: "number",
                    required: !0
                  }, null, 8, ["modelValue"]),
                  l("span", null, $(t(n).params.valueType === t(u).Percentage ? "%" : "元"), 1)
                ])) : c("", !0),
                t(n).params.valueType === t(u).Percentage ? (a(), o("div", Wn, [
                  l("div", Tn, [
                    l("div", el, [
                      L(l("input", {
                        type: "checkbox",
                        "onUpdate:modelValue": i[18] || (i[18] = (r) => P(v) ? v.value = r : null),
                        id: "maxBudget"
                      }, null, 512), [
                        [$e, t(v)]
                      ]),
                      tl,
                      t(v) ? (a(), o("div", nl, [
                        F(ne, {
                          modelValue: t(n).params.limit,
                          "onUpdate:modelValue": i[19] || (i[19] = (r) => t(n).params.limit = r),
                          type: "number",
                          required: !0
                        }, null, 8, ["modelValue"]),
                        ll
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
}), ol = { class: "flex flex-col gap-2 relative pt-2" }, rl = { class: "flex items-center gap-2" }, sl = { class: "flex items-center gap-2" }, ul = /* @__PURE__ */ l("span", { class: "p3-b" }, "平台", -1), il = /* @__PURE__ */ l("option", {
  value: "",
  disabled: ""
}, "請選擇", -1), dl = ["value"], cl = {
  key: 0,
  class: "flex items-center gap-2"
}, pl = /* @__PURE__ */ l("span", { class: "p3-b" }, "層級", -1), vl = /* @__PURE__ */ l("option", {
  value: "",
  disabled: ""
}, "請選擇", -1), gl = ["value"], ml = {
  key: 1,
  class: "flex items-center gap-2"
}, bl = /* @__PURE__ */ l("span", { class: "p4-b" }, "目標", -1), fl = /* @__PURE__ */ l("option", {
  value: "",
  disabled: ""
}, "請選擇", -1), hl = ["value"], _l = {
  key: 0,
  class: "flex flex-col"
}, xl = /* @__PURE__ */ l("span", { class: "p4-b" }, "指定目標", -1), yl = { key: 0 }, kl = {
  key: 0,
  class: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full flex justify-center items-center bg-dark-3 rounded bg-opacity-50 z-[2]"
}, $l = { class: "relative bg-light-5 rounded-xs shadow-01 w-4/5 p-4 min-h-[300px] h-fit" }, Vl = /* @__PURE__ */ l("span", { class: "p1-b flex justify-center mb-1" }, "請選擇目標", -1), Cl = { class: "flex flex-col gap-2 mt-2" }, Sl = ["onClick"], wl = { class: "flex flex-col flex-1" }, jl = { class: "p3-b" }, Nl = { class: "p4-r" }, Il = {
  key: 2,
  class: "flex items-center gap-1"
}, Pl = /* @__PURE__ */ l("span", { class: "p3-b" }, "條件", -1), Bl = /* @__PURE__ */ l("option", {
  value: "",
  disabled: ""
}, "請選擇", -1), Ol = ["value"], Dl = {
  key: 3,
  class: "flex gap-2 flex-wrap"
}, Ul = { class: "flex gap-2" }, Al = { class: "flex items-center gap-1" }, Ll = /* @__PURE__ */ l("span", { class: "p3-b" }, "運算", -1), ql = /* @__PURE__ */ l("option", {
  value: "",
  disabled: ""
}, "請選擇", -1), Ml = ["value"], Rl = { key: 0 }, El = ["onClick"], Fl = {
  key: 0,
  class: "flex items-center gap-1"
}, Gl = /* @__PURE__ */ l("option", {
  value: "",
  disabled: ""
}, "請選擇", -1), Jl = ["value"], zl = {
  key: 1,
  class: "flex items-center gap-1"
}, Hl = /* @__PURE__ */ l("option", {
  value: "",
  disabled: ""
}, "請選擇", -1), Xl = ["value"], Ql = {
  key: 4,
  class: "flex items-center gap-2"
}, Yl = /* @__PURE__ */ l("label", { for: "comparison" }, "加入比較區間", -1), se = "", Kl = /* @__PURE__ */ ee({
  __name: "ConditionItem",
  props: {
    modelValue: {},
    index: {}
  },
  emits: ["update:modelValue", "removeItem"],
  setup(e, { emit: _ }) {
    const g = e, n = N(() => g.modelValue ?? {}), m = N(() => {
      var V;
      return ((V = n.value) == null ? void 0 : V.client) == H.Google ? pe : ve;
    }), v = N(() => n.value.client ? n.value.client : ""), k = (V) => n.value.client = Number(V.target.value), S = N(() => n.value.adLevel ? n.value.adLevel : ""), G = (V) => {
      n.value.adLevel = Number(V.target.value), O.value != se && _("update:modelValue", {
        client: v.value,
        adLevel: S.value
      });
    }, A = N(() => n.value.targetType ? n.value.targetType : ""), R = (V) => {
      n.value.targetType = Number(V.target.value), delete n.value.action, delete n.value.target;
    }, O = N(() => n.value.conditionType ? n.value.conditionType : ""), q = (V) => n.value.conditionType = V.target.value, x = N(() => n.value.dateRangeType ? n.value.dateRangeType : ""), U = (V) => {
      n.value.dateRangeType = Number(V.target.value), Number(V.target.value) !== fe.SpecifiedTime && delete n.value.dateRange;
    }, f = N(() => n.value.operation ? n.value.operation : ""), D = (V) => n.value.operation = V.target.value, E = N(() => n.value.valueType ? n.value.valueType : ""), J = (V) => n.value.valueType = V.target.value, w = {
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
        const V = w[v.value];
        if (V) {
          const C = V[S.value];
          if (C)
            return C;
        }
      }
      return {};
    }), X = I(!1), me = (V) => {
      var d;
      (d = n.value) != null && d.target || (n.value.target = []);
      const C = n.value.target.findIndex(
        (j) => j.id === V.id
      );
      C === -1 ? n.value.target.push(V) : n.value.target.splice(C, 1);
    }, ce = I(), Ce = async () => {
      ce.value = [
        { id: 1, name: "qwe" },
        { id: 2, name: "asd" },
        { id: 3, name: "zxc" },
        { id: 4, name: "rty" },
        { id: 5, name: "bgfb" }
      ];
    }, _e = N(() => "name"), Se = N(() => {
      const V = de.value.toLowerCase();
      return ce.value.filter(
        (C) => C[_e.value].toLowerCase().includes(V)
      );
    }), we = async () => {
      await Ce(), X.value = !0;
    }, de = I(""), xe = I(!1);
    return je(() => {
      xe.value = !0;
    }), (V, C) => (a(), oe(he, {
      title: "條件" + (V.index + 1)
    }, {
      default: re(() => [
        l("div", ol, [
          l("div", {
            class: "cursor-pointer text-dark-4 absolute -top-2.5 -right-1.5 p4-b",
            onClick: C[0] || (C[0] = (d) => _("removeItem"))
          }, " 刪除 "),
          l("div", rl, [
            l("label", sl, [
              ul,
              L(l("select", {
                class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
                "onUpdate:modelValue": C[1] || (C[1] = (d) => P(v) ? v.value = d : null),
                onChange: k,
                required: ""
              }, [
                il,
                (a(!0), o(b, null, B(t(H), (d, j) => (a(), o(b, { key: j }, [
                  Number.isInteger(d) ? c("", !0) : (a(), o("option", {
                    key: 0,
                    value: j
                  }, $(d), 9, dl))
                ], 64))), 128))
              ], 544), [
                [z, t(v)]
              ])
            ]),
            t(v) != se ? (a(), o("label", cl, [
              pl,
              L(l("select", {
                class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
                "onUpdate:modelValue": C[2] || (C[2] = (d) => P(S) ? S.value = d : null),
                onChange: G,
                required: ""
              }, [
                vl,
                (a(!0), o(b, null, B(t(m), (d, j) => (a(), o(b, { key: j }, [
                  Number.isInteger(d) ? c("", !0) : (a(), o("option", {
                    key: 0,
                    value: j
                  }, $(V.$t(`${t(H)[t(v)]}${d}`)), 9, gl))
                ], 64))), 128))
              ], 544), [
                [z, t(S)]
              ])
            ])) : c("", !0),
            t(S) != se ? (a(), o("label", ml, [
              bl,
              L(l("select", {
                class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
                "onUpdate:modelValue": C[3] || (C[3] = (d) => P(A) ? A.value = d : null),
                onChange: R,
                required: ""
              }, [
                fl,
                (a(!0), o(b, null, B(t(ie), (d, j) => (a(), o(b, { key: j }, [
                  Number.isInteger(d) ? c("", !0) : (a(), o("option", {
                    key: 0,
                    value: j
                  }, $(V.$t(d)), 9, hl))
                ], 64))), 128))
              ], 544), [
                [z, t(A)]
              ])
            ])) : c("", !0)
          ]),
          t(A) === t(ie).ForID ? (a(), o("div", _l, [
            l("label", { class: "flex items-center gap-2" }, [
              xl,
              l("div", {
                class: "p4-r px-1.5 py-0.5 text-true-blue-2 rounded bg-true-blue-5 flex w-fit cursor-pointer hover:bg-true-blue-4",
                onClick: we
              }, " 編輯 ")
            ]),
            t(A) === t(ie).ForID ? (a(), o("div", yl, [
              (a(!0), o(b, null, B(t(n).target, (d, j) => (a(), o("span", {
                class: "p4-r text-true-blue-3 px-0.5",
                key: d.id
              }, $(d.name) + $(j !== t(n).target.length - 1 ? "," : ""), 1))), 128))
            ])) : c("", !0)
          ])) : c("", !0),
          t(xe) ? (a(), oe(Me, {
            key: 1,
            to: "#editor-container"
          }, [
            t(X) ? (a(), o("div", kl, [
              l("div", $l, [
                l("div", {
                  class: "absolute top-1 right-2 cursor-pointer",
                  onClick: C[4] || (C[4] = (d) => X.value = !1)
                }, " X "),
                Vl,
                F(ne, {
                  modelValue: t(de),
                  "onUpdate:modelValue": C[5] || (C[5] = (d) => P(de) ? de.value = d : null)
                }, null, 8, ["modelValue"]),
                l("div", Cl, [
                  (a(!0), o(b, null, B(t(Se), (d) => {
                    var j;
                    return a(), o("div", {
                      class: "border border-dark-5 rounded py-1 px-3 flex gap-1 hover:border-transparent hover:bg-true-blue-5 cursor-pointer",
                      key: d.id,
                      onClick: (p) => me(d)
                    }, [
                      l("div", wl, [
                        l("span", jl, $(d.id), 1),
                        l("span", Nl, $(d.name), 1)
                      ]),
                      l("div", {
                        class: Re(["rounded h-3 w-3 border", [
                          t(n).target && (j = t(n)) != null && j.target.find((p) => p.id === d.id) ? "bg-red-1" : ""
                        ]])
                      }, null, 2)
                    ], 8, Sl);
                  }), 128))
                ])
              ])
            ])) : c("", !0)
          ])) : c("", !0),
          t(A) != se ? (a(), o("label", Il, [
            Pl,
            L(l("select", {
              class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
              "onUpdate:modelValue": C[6] || (C[6] = (d) => P(O) ? O.value = d : null),
              onChange: q,
              required: ""
            }, [
              Bl,
              (a(!0), o(b, null, B(t(K), (d, j) => (a(), o("option", {
                key: j,
                value: d
              }, $(V.$t(j)), 9, Ol))), 128))
            ], 544), [
              [z, t(O)]
            ])
          ])) : c("", !0),
          t(O) != se ? (a(), o("div", Dl, [
            l("div", Ul, [
              l("label", Al, [
                Ll,
                L(l("select", {
                  class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
                  "onUpdate:modelValue": C[7] || (C[7] = (d) => P(x) ? x.value = d : null),
                  onChange: U,
                  required: ""
                }, [
                  ql,
                  (a(!0), o(b, null, B(t(fe), (d, j) => (a(), o(b, { key: j }, [
                    Number.isInteger(d) ? c("", !0) : (a(), o("option", {
                      key: 0,
                      value: j
                    }, $(V.$t(d)), 9, Ml))
                  ], 64))), 128))
                ], 544), [
                  [z, t(x)]
                ])
              ]),
              t(x) == t(fe).SpecifiedTime ? (a(), o("div", Rl, [
                F(t(Ne), {
                  modelValue: t(n).dateRange,
                  "onUpdate:modelValue": C[8] || (C[8] = (d) => t(n).dateRange = d),
                  modelModifiers: { range: !0 },
                  mode: "date"
                }, {
                  default: re(({ togglePopover: d, inputValue: j }) => [
                    l("button", {
                      class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 transition-all hover:bg-light-3 hover:bg-opacity-50",
                      onClick: d
                    }, $(j.start && j.end ? `${j.start}-${j.end}` : "請選定執行日期"), 9, El)
                  ]),
                  _: 1
                }, 8, ["modelValue"])
              ])) : c("", !0)
            ]),
            t(x) != "" ? (a(), o("label", Fl, [
              L(l("select", {
                class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
                "onUpdate:modelValue": C[9] || (C[9] = (d) => P(f) ? f.value = d : null),
                onChange: D,
                required: ""
              }, [
                Gl,
                (a(!0), o(b, null, B(t(Ie), (d, j) => (a(), o(b, { key: j }, [
                  Number.isInteger(d) ? c("", !0) : (a(), o("option", {
                    key: 0,
                    value: d
                  }, $(V.$t(j)), 9, Jl))
                ], 64))), 128))
              ], 544), [
                [z, t(f)]
              ])
            ])) : c("", !0),
            t(f) != se ? (a(), o("label", zl, [
              L(l("select", {
                class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
                "onUpdate:modelValue": C[10] || (C[10] = (d) => P(E) ? E.value = d : null),
                onChange: J,
                required: ""
              }, [
                Hl,
                (a(!0), o(b, null, B(t(u), (d, j) => (a(), o(b, { key: j }, [
                  Number.isInteger(d) ? c("", !0) : (a(), o("option", {
                    key: 0,
                    value: d
                  }, $(V.$t(`condition${j}`)), 9, Xl))
                ], 64))), 128))
              ], 544), [
                [z, t(E)]
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
          t(O) != se ? (a(), o("div", Ql, [
            L(l("input", {
              type: "checkbox",
              "onUpdate:modelValue": C[12] || (C[12] = (d) => V.modelValue.comparison = d),
              id: "comparison"
            }, null, 512), [
              [$e, V.modelValue.comparison]
            ]),
            Yl
          ])) : c("", !0)
        ])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), Zl = {
  key: 0,
  class: "flex items-center justify-center gap-3"
}, Wl = /* @__PURE__ */ l("div", { class: "h-[1px] flex-1 bg-light-3" }, null, -1), Tl = /* @__PURE__ */ l("p", { class: "p4-b to-dark-4" }, "且", -1), ea = /* @__PURE__ */ l("div", { class: "h-[1px] flex-1 bg-light-3" }, null, -1), ta = [
  Wl,
  Tl,
  ea
], na = {
  key: 0,
  class: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full flex justify-center items-center bg-dark-3 rounded bg-opacity-50 z-[2]"
}, la = { class: "relative bg-light-5 rounded-xs shadow-01 w-4/5 p-4" }, aa = /* @__PURE__ */ l("span", { class: "p1-b flex justify-center mb-1" }, "請選擇條件", -1), oa = /* @__PURE__ */ He('<div class="flex flex-col gap-2 mt-2"><div class="border border-dark-5 rounded py-1 px-3 flex gap-1 hover:border-transparent hover:bg-true-blue-5 cursor-pointer"><div class="flex flex-col flex-1"><span class="p3-b">當帳戶剩餘預算 小於指定金額，執行動作</span><span class="p4-r">ex: 帳戶剩餘預算小於 1000 元</span></div><div class="flex justify-center items-center">O</div></div></div>', 1), ra = /* @__PURE__ */ ee({
  __name: "Condition",
  setup(e) {
    const _ = I(!1), g = Ve("eventData"), n = I(g.value.conditions ?? []);
    T(
      n,
      (k) => {
        g.value.conditions = k;
      },
      { deep: !0 }
    );
    const m = () => {
      n.value.push({}), _.value = !1;
    }, v = (k) => {
      n.value.splice(k, 1);
    };
    return (k, S) => (a(), o(b, null, [
      (a(!0), o(b, null, B(t(n), (G, A) => (a(), o(b, { key: A }, [
        F(Kl, {
          index: A,
          modelValue: t(n)[A],
          "onUpdate:modelValue": (R) => t(n)[A] = R,
          onRemoveItem: (R) => v(A)
        }, null, 8, ["index", "modelValue", "onUpdate:modelValue", "onRemoveItem"]),
        A + 1 !== t(n).length ? (a(), o("div", Zl, ta)) : c("", !0)
      ], 64))), 128)),
      l("div", {
        class: "p3-b text-true-blue-3 flex ml-auto w-fit cursor-pointer hover:text-true-blue-2",
        onClick: S[0] || (S[0] = (G) => _.value = !t(_))
      }, " + 加入條件 "),
      t(_) ? (a(), o("div", na, [
        l("div", la, [
          l("div", {
            class: "absolute top-1 right-2 cursor-pointer",
            onClick: S[1] || (S[1] = (G) => _.value = !1)
          }, " X "),
          aa,
          F(ne),
          oa,
          l("div", {
            class: "border ml-auto mt-2 border-true-blue-3 text-true-blue-3 rounded px-1 w-fit p3-r cursor-pointer hover:text-true-blue-2 hover:border-true-blue-2",
            onClick: m
          }, " 自訂 ")
        ])
      ])) : c("", !0)
    ], 64));
  }
}), sa = { class: "flex items-center gap-2" }, ua = /* @__PURE__ */ l("span", { class: "p4-b" }, "以電子郵件寄出結果", -1), ia = /* @__PURE__ */ l("option", {
  value: "-2",
  disabled: ""
}, "請選擇", -1), da = ["value"], ca = /* @__PURE__ */ ee({
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
      l("label", sa, [
        ua,
        L(l("select", {
          class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
          "onUpdate:modelValue": m[0] || (m[0] = (v) => t(g).email = v)
        }, [
          ia,
          (a(!0), o(b, null, B(t(Pe), (v, k) => (a(), o(b, { key: k }, [
            Number.isInteger(v) ? c("", !0) : (a(), o("option", {
              key: 0,
              value: Number(k)
            }, $(n.$t(`mail${v}`)), 9, da))
          ], 64))), 128))
        ], 512), [
          [z, t(g).email]
        ])
      ])
    ]));
  }
}), pa = (e) => (Qe("data-v-9d5fc027"), e = e(), Ye(), e), va = ["onSubmit"], ga = { class: "p1-b" }, ma = /* @__PURE__ */ pa(() => /* @__PURE__ */ l("span", { class: "p4-b" }, "規則名稱*", -1)), ba = {
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
        Object.entries(R).filter(([q, x]) => x !== null)
      );
      return JSON.stringify(O, null, 4);
    }, k = I([]), S = (R) => {
      R.preventDefault(), g("update:data", v(m.value));
    }, G = (R) => {
      var O;
      (O = A.value) == null || O.click();
    };
    Oe("eventData", m), Oe("checkDataValid", k);
    const A = I();
    return _({
      saveData: G
    }), (R, O) => {
      const q = Ee("PhCube");
      return n.data ? (a(), o("form", {
        key: 0,
        class: "p-5 rounded border flex flex-col gap-5 relative",
        id: "editor-container",
        onSubmit: Xe(S, ["prevent"])
      }, [
        l("div", ga, [
          Le("建立自動化規則 "),
          F(q)
        ]),
        F(he, { title: "基本資料" }, {
          default: re(() => [
            l("div", null, [
              ma,
              F(ne, {
                modelValue: t(m).title,
                "onUpdate:modelValue": O[0] || (O[0] = (x) => t(m).title = x),
                maxLength: fa,
                required: !0
              }, null, 8, ["modelValue"])
            ])
          ]),
          _: 1
        }),
        F(he, { title: "執行時間" }, {
          default: re(() => [
            F(qt, {
              frequency: t(m).frequency,
              "onUpdate:frequency": O[1] || (O[1] = (x) => t(m).frequency = x),
              interval: t(m).interval,
              "onUpdate:interval": O[2] || (O[2] = (x) => t(m).interval = x)
            }, null, 8, ["frequency", "interval"])
          ]),
          _: 1
        }),
        F(he, { title: "通知" }, {
          default: re(() => [
            F(ca)
          ]),
          _: 1
        }),
        F(al),
        F(ra),
        t(k).length ? (a(), o("span", ba, "資料未填寫完整")) : c("", !0),
        l("button", {
          ref_key: "submitBtn",
          ref: A,
          class: "p-2 px-3 rounded bg-slate-100 hover:bg-sky-500 hover:text-white"
        }, " 保存 ", 512)
      ], 40, va)) : c("", !0);
    };
  }
});
const ja = /* @__PURE__ */ Be(ha, [["__scopeId", "data-v-9d5fc027"]]), _a = { class: "bg-white p-3 rounded-xl flex w-4/5 min-h-[80%] max-h-96" }, xa = { class: "flex flex-col gap-2 py-2 px-4" }, ya = /* @__PURE__ */ l("div", { class: "w-[1px] h-auto bg-dark-4" }, null, -1), ka = /* @__PURE__ */ l("div", { class: "flex-1 h-auto bg-red-1" }, null, -1), Na = /* @__PURE__ */ ee({
  __name: "QuickSetup",
  setup(e) {
    const _ = I(!1), g = () => {
      _.value = !0;
    }, n = I(["選擇平台", "執行動作", "設定條件", "執行時間"]);
    return (m, v) => {
      const k = Ee("vue-final-modal");
      return a(), o("div", null, [
        F(k, {
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
                (a(!0), o(b, null, B(t(n), (S, G) => (a(), o("div", {
                  key: S,
                  class: "flex flex-col"
                }, [
                  l("span", null, " Step." + $(G + 1), 1),
                  l("span", null, $(S), 1)
                ]))), 128))
              ]),
              ya,
              ka
            ])
          ]),
          _: 1
        }, 8, ["modelValue"]),
        l("div", { onClick: g }, [
          qe(m.$slots, "default")
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
