import { defineComponent as Ce, openBlock as p, createElementBlock as E, createElementVNode as m, toDisplayString as z, ref as q, watchEffect as ea, computed as X, watch as De, onBeforeUnmount as wa, Fragment as j, unref as d, renderList as re, createBlock as We, createCommentVNode as B, withDirectives as ue, isRef as ne, vModelSelect as _e, onUnmounted as ta, vModelCheckbox as Vt, withCtx as Je, inject as Rt, createVNode as me, createTextVNode as Va, renderSlot as na, h as aa, getCurrentInstance as ln, onMounted as $t, shallowRef as Fa, onBeforeMount as $a, Text as Ua, Teleport as ra, normalizeClass as la, nextTick as Ba, createStaticVNode as ja, provide as Nn, withModifiers as Ga, pushScopeId as Ha, popScopeId as Wa, resolveComponent as Ya } from "vue";
import { DatePicker as sn } from "v-calendar";
function mu(e) {
}
class Ka {
  // 取得列舉索引
  getEnumKey(t, a) {
    return t[a];
  }
  // 從字串解析事件本身
  parseItem(t) {
    return JSON.parse(t);
  }
  getCurrent() {
    return (/* @__PURE__ */ new Date()).toISOString();
  }
}
var be = /* @__PURE__ */ ((e) => (e[e.Google = 1] = "Google", e[e.Facebook = 2] = "Facebook", e))(be || {}), xe = /* @__PURE__ */ ((e) => (e[e.Campaign = 1] = "Campaign", e[e.AdGroup = 2] = "AdGroup", e[e.Ad = 3] = "Ad", e[e.AdTag = 4] = "AdTag", e))(xe || {}), Pe = /* @__PURE__ */ ((e) => (e[e.Campaign = 1] = "Campaign", e[e.AdGroup = 2] = "AdGroup", e[e.Ad = 3] = "Ad", e[e.AdTag = 4] = "AdTag", e))(Pe || {}), rt = /* @__PURE__ */ ((e) => (e[e.ForAll = 1] = "ForAll", e[e.ForID = 2] = "ForID", e[e.ForActive = 3] = "ForActive", e))(rt || {}), vt = /* @__PURE__ */ ((e) => (e[e.Account = 1] = "Account", e[e.Campaign = 2] = "Campaign", e[e.AdGroup = 3] = "AdGroup", e))(vt || {}), bt = /* @__PURE__ */ ((e) => (e[e.Account = 1] = "Account", e[e.Campaign = 2] = "Campaign", e[e.AdGroup = 3] = "AdGroup", e))(bt || {}), de = /* @__PURE__ */ ((e) => (e[e.Never = -1] = "Never", e[e.Hour = 1] = "Hour", e[e.Day = 2] = "Day", e[e.Week = 3] = "Week", e[e.Month = 4] = "Month", e[e.Annual = 5] = "Annual", e))(de || {}), Fe = /* @__PURE__ */ ((e) => (e[e.Sunday = 0] = "Sunday", e[e.Monday = 1] = "Monday", e[e.Tuesday = 2] = "Tuesday", e[e.Wednesday = 3] = "Wednesday", e[e.Thursday = 4] = "Thursday", e[e.Friday = 5] = "Friday", e[e.Saturday = 6] = "Saturday", e[e.Weekday = -1] = "Weekday", e[e.Weekend = -2] = "Weekend", e))(Fe || {}), at = /* @__PURE__ */ ((e) => (e[e.First = 1] = "First", e[e.Second = 2] = "Second", e[e.Third = 3] = "Third", e[e.Fourth = 4] = "Fourth", e[e.Fifth = 5] = "Fifth", e[e.Last = -1] = "Last", e))(at || {}), Se = /* @__PURE__ */ ((e) => (e[e.January = 1] = "January", e[e.February = 2] = "February", e[e.March = 3] = "March", e[e.April = 4] = "April", e[e.May = 5] = "May", e[e.June = 6] = "June", e[e.July = 7] = "July", e[e.August = 8] = "August", e[e.September = 9] = "September", e[e.October = 10] = "October", e[e.November = 11] = "November", e[e.December = 12] = "December", e))(Se || {}), F = /* @__PURE__ */ ((e) => (e[e.SetNewBudget = 1] = "SetNewBudget", e[e.IncreaseBudget = 2] = "IncreaseBudget", e[e.LowerBudget = 3] = "LowerBudget", e[e.OpenProject = 4] = "OpenProject", e[e.SuspendProject = 5] = "SuspendProject", e[e.None = -1] = "None", e))(F || {}), Et = /* @__PURE__ */ ((e) => (e.DailyBudget = "dailyBudget", e.TotalBudget = "totalBudget", e))(Et || {}), $ = /* @__PURE__ */ ((e) => (e.Value = "value", e.Percentage = "percentage", e))($ || {}), Y = /* @__PURE__ */ ((e) => (e.BudgetRemaining = "budgetRemaining", e.BudgetCap = "budgetCap", e.Clicks = "clicks", e.Impressions = "impressions", e.Cpc = "CPC", e.Spend = "spend", e.Conversions = "conversions", e.ConversionSpend = "conversionSpend", e.ReturnOnADSpending = "roas", e))(Y || {}), Tt = /* @__PURE__ */ ((e) => (e[e.Today = 1] = "Today", e[e.Yesterday = 2] = "Yesterday", e[e.Last3Days = 3] = "Last3Days", e[e.Last7Days = 4] = "Last7Days", e[e.ThisMonth = 5] = "ThisMonth", e[e.SpecifiedTime = -1] = "SpecifiedTime", e))(Tt || {}), on = /* @__PURE__ */ ((e) => (e.MoreThan = ">", e.GreaterOrEqualTo = ">=", e.Equal = "==", e.LessThan = "<", e.LessThanOrEqualTo = "<=", e))(on || {}), un = /* @__PURE__ */ ((e) => (e[e.AbnormalityOrError = 0] = "AbnormalityOrError", e[e.Error = 1] = "Error", e[e.None = -1] = "None", e))(un || {});
const _u = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ActionType: F,
  AdLevelTypeFacebook: Pe,
  AdLevelTypeGoogle: xe,
  BudgetType: Et,
  ClientType: be,
  ConditionAdLevelTypeFacebook: bt,
  ConditionAdLevelTypeGoogle: vt,
  ConditionType: Y,
  DateRangeType: Tt,
  EventActionTargetType: rt,
  EventHelper: Ka,
  FrequencyType: de,
  MonthType: Se,
  OperationType: on,
  ValueType: $,
  WeekOrdinalWordsType: at,
  WeekdaysType: Fe,
  emailType: un
}, Symbol.toStringTag, { value: "Module" })), Xa = { class: "flex" }, qa = ["checked", "id"], Ja = ["for"], Qa = /* @__PURE__ */ Ce({
  __name: "CheckBox",
  props: {
    label: {},
    checked: { type: Boolean },
    fieldId: {}
  },
  emits: ["update:checked"],
  setup(e, { emit: t }) {
    return (a, n) => (p(), E("div", Xa, [
      m("input", {
        onInput: n[0] || (n[0] = (l) => a.$emit("update:checked", l.target.checked)),
        type: "checkbox",
        checked: a.checked,
        id: a.fieldId,
        class: "hidden"
      }, null, 40, qa),
      m("label", {
        for: a.fieldId,
        class: "p3-r cursor-pointer rounded border hover:bg-light-4 border-dark-5 px-1 py-0.5 flex justify-center items-center text-dark-2 min-w-[1.75rem] min-h-[1.75rem]"
      }, z(a.label), 9, Ja)
    ]));
  }
});
const cn = (e, t) => {
  const a = e.__vccOpts || e;
  for (const [n, l] of t)
    a[n] = l;
  return a;
}, On = /* @__PURE__ */ cn(Qa, [["__scopeId", "data-v-8bd665ed"]]), Za = {
  key: 0,
  class: "flex gap-1.5 flex-wrap"
}, za = {
  key: 1,
  class: "flex gap-2 items-center"
}, er = /* @__PURE__ */ m("span", { class: "p3-r" }, "指定", -1), tr = ["value"], nr = { class: "flex gap-4 flex-wrap" }, ar = /* @__PURE__ */ Ce({
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
    const a = e, n = q(a.monthDate), l = q(a.weekOrdinal), r = q(a.weekdays), o = q(a.yearMonths), u = (A, f, _ = !1) => {
      if (_) {
        f.findIndex((N) => N === A) === -1 ? f.push(A) : f.splice(f.indexOf(A), 1), f.sort((N, b) => N - b);
        return;
      }
      f.value.findIndex((N) => N === A) === -1 ? f.value.push(A) : f.value.splice(f.value.indexOf(A), 1), f.value.sort((N, b) => N - b);
    };
    ea(() => {
      t(
        "update:monthDate",
        n.value.length ? n.value : null
      ), t(
        "update:weekOrdinal",
        l.value.length ? l.value : null
      ), t(
        "update:weekdays",
        r.value.length ? r.value : null
      ), t(
        "update:yearMonths",
        o.value.length ? o.value : null
      );
    });
    const c = q([
      { name: "星期日", id: Fe.Sunday },
      { name: "星期一", id: Fe.Monday },
      { name: "星期二", id: Fe.Tuesday },
      { name: "星期三", id: Fe.Wednesday },
      { name: "星期四", id: Fe.Thursday },
      { name: "星期五", id: Fe.Friday },
      { name: "星期六", id: Fe.Saturday },
      { name: "平日", id: Fe.Weekday },
      { name: "週末", id: Fe.Weekend }
    ]), v = q([
      { name: "第一週", id: at.First },
      { name: "第二週", id: at.Second },
      { name: "第三週", id: at.Third },
      { name: "第四週", id: at.Fourth },
      { name: "第五週", id: at.Fifth },
      { name: "最後一週", id: at.Last }
    ]), L = q([
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
    ]), y = q([
      {
        name: "一月",
        id: Se.January
      },
      {
        name: "二月",
        id: Se.February
      },
      {
        name: "三月",
        id: Se.March
      },
      {
        name: "四月",
        id: Se.April
      },
      {
        name: "五月",
        id: Se.May
      },
      {
        name: "六月",
        id: Se.June
      },
      {
        name: "七月",
        id: Se.July
      },
      {
        name: "八月",
        id: Se.August
      },
      {
        name: "九月",
        id: Se.September
      },
      {
        name: "十月",
        id: Se.October
      },
      {
        name: "十一月",
        id: Se.November
      },
      {
        name: "十二月",
        id: Se.December
      }
    ]), h = X(() => {
      if (a.type === de.Week)
        return [
          {
            key: r,
            label: "weekdaysOrigin",
            options: c.value
          }
        ];
      if (a.type === de.Month) {
        if (k.value.id === 0)
          return [
            {
              key: l,
              label: "weekOrdinalOrigin",
              options: v.value
            },
            {
              key: r,
              label: "weekdaysOrigin",
              options: c.value
            }
          ];
        if (k.value.id === 1)
          return [
            {
              key: n,
              label: "monthDateOrigin",
              options: L.value
            }
          ];
      }
      if (a.type === de.Annual) {
        if (k.value.id === 0)
          return [
            {
              key: l,
              label: "weekOrdinalOrigin",
              options: v.value
            },
            {
              key: r,
              label: "weekdaysOrigin",
              options: c.value
            }
          ];
        if (k.value.id === 1)
          return [
            {
              key: n,
              label: "monthDateOrigin",
              options: L.value
            }
          ];
      }
    }), T = X(() => a.type === de.Month || a.type === de.Annual ? !0 : (n.value = [], l.value = [], r.value = [], o.value = [], !1)), P = q([
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
    ]), k = q(P.value[0]);
    return De(k, (A) => {
      if (A.id === 0) {
        n.value = [];
        return;
      }
      if (A.id === 1) {
        l.value = [], r.value = [];
        return;
      }
    }), De(
      () => a.type,
      (A) => {
        (A === de.Month || A === de.Annual) && (A != de.Annual && (o.value = []), L.value && L.value.length > 0 ? k.value = P.value[1] : k.value = P.value[0]);
      },
      { immediate: !0 }
    ), wa(() => {
      n.value = [], l.value = [], r.value = [], o.value = [];
    }), (A, f) => (p(), E(j, null, [
      A.type === d(de).Annual ? (p(), E("div", Za, [
        (p(!0), E(j, null, re(d(y), (_) => {
          var N;
          return p(), We(On, {
            key: _.id,
            checked: (N = d(o)) == null ? void 0 : N.includes(_.id),
            "onUpdate:checked": (b) => u(_.id, d(o), !0),
            fieldId: _.name,
            label: _.name
          }, null, 8, ["checked", "onUpdate:checked", "fieldId", "label"]);
        }), 128))
      ])) : B("", !0),
      d(T) ? (p(), E("div", za, [
        er,
        ue(m("select", {
          class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
          "onUpdate:modelValue": f[0] || (f[0] = (_) => ne(k) ? k.value = _ : null)
        }, [
          (p(!0), E(j, null, re(d(P), (_, N) => (p(), E("option", {
            key: N,
            value: _
          }, z(_.name), 9, tr))), 128))
        ], 512), [
          [_e, d(k)]
        ])
      ])) : B("", !0),
      m("div", nr, [
        (p(!0), E(j, null, re(d(h), (_) => (p(), E("div", {
          class: "flex gap-1 flex-wrap",
          key: _
        }, [
          (p(!0), E(j, null, re(_.options, (N) => {
            var b;
            return p(), We(On, {
              key: N.id,
              checked: (b = _.key.value) == null ? void 0 : b.includes(N.id),
              "onUpdate:checked": (S) => u(N.id, _.key),
              fieldId: N.name,
              label: N.name
            }, null, 8, ["checked", "onUpdate:checked", "fieldId", "label"]);
          }), 128))
        ]))), 128))
      ])
    ], 64));
  }
});
const rr = { class: "flex flex-col gap-2" }, lr = { class: "flex items-center gap-2" }, sr = /* @__PURE__ */ m("label", {
  for: "due",
  class: "p3-b"
}, "結束於指定日期", -1), or = ["onClick"], ir = /* @__PURE__ */ Ce({
  __name: "DuePicker",
  props: {
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const a = e, n = X({
      get: () => a.modelValue,
      set: (r) => t("update:modelValue", r)
    }), l = q(!1);
    return De(
      () => a.modelValue,
      (r) => {
        r && (l.value = !0);
      },
      { immediate: !0 }
    ), De(l, (r) => {
      r || t("update:modelValue", null);
    }), ta(() => {
      t("update:modelValue", null);
    }), (r, o) => (p(), E("div", rr, [
      m("div", lr, [
        ue(m("input", {
          type: "checkbox",
          "onUpdate:modelValue": o[0] || (o[0] = (u) => ne(l) ? l.value = u : null),
          id: "due"
        }, null, 512), [
          [Vt, d(l)]
        ]),
        sr,
        d(l) ? (p(), We(d(sn), {
          key: 0,
          modelValue: d(n),
          "onUpdate:modelValue": o[1] || (o[1] = (u) => ne(n) ? n.value = u : null),
          mode: "dateTime",
          timezone: "UTC",
          "min-Date": /* @__PURE__ */ new Date()
        }, {
          default: Je(({ togglePopover: u, inputValue: c }) => [
            m("button", {
              class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 transition-all hover:bg-light-3 hover:bg-opacity-50",
              onClick: u
            }, z(c || "請選定結束日期"), 9, or)
          ]),
          _: 1
        }, 8, ["modelValue", "min-Date"])) : B("", !0)
      ])
    ]));
  }
}), ur = { class: "flex w-auto items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-1.5" }, cr = ["value", "type", "placeholder", "maxLength", "required"], dr = /* @__PURE__ */ Ce({
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
    const a = e;
    function n(l) {
      a.type === "number" && !l.target.value && (l.target.value = 0), t(
        "update:modelValue",
        a.type == "number" ? Number(l.target.value) : l.target.value
      );
    }
    return (l, r) => (p(), E("div", ur, [
      m("input", {
        value: l.modelValue,
        onInput: n,
        type: l.type,
        class: "p3-b w-full border-none outline-none shadow-none",
        placeholder: l.placeholder,
        maxLength: l.maxLength,
        required: l.required
      }, null, 40, cr)
    ]));
  }
});
const $e = /* @__PURE__ */ cn(dr, [["__scopeId", "data-v-068dea7c"]]), fr = { class: "flex flex-col gap-3" }, mr = /* @__PURE__ */ m("div", { class: "flex items-center justify-center gap-3 my-2" }, [
  /* @__PURE__ */ m("p", { class: "p4-b" }, "日期時間"),
  /* @__PURE__ */ m("div", { class: "h-[1px] flex-1 bg-light-3" })
], -1), _r = { class: "flex flex-col gap-2" }, pr = { class: "flex gap-2 items-center" }, gr = /* @__PURE__ */ m("span", { class: "p4-b" }, "開始", -1), vr = ["onClick"], br = ["value"], Er = /* @__PURE__ */ m("div", { class: "flex items-center justify-center gap-3 w-full my-2" }, [
  /* @__PURE__ */ m("p", { class: "p4-b" }, "重複頻率"),
  /* @__PURE__ */ m("div", { class: "h-[1px] flex-1 bg-light-3" })
], -1), hr = { class: "flex space-x-2 items-center" }, Nr = { class: "flex items-center gap-2" }, Or = /* @__PURE__ */ m("span", { class: "p4-b" }, "重複", -1), Lr = ["value"], Ir = /* @__PURE__ */ m("option", { value: 0 }, "自訂", -1), yr = { class: "p4-b" }, kr = {
  key: 0,
  class: "flex items-center gap-2"
}, Cr = { class: "flex items-center gap-2" }, Tr = /* @__PURE__ */ m("span", { class: "p4-b" }, "頻率", -1), Ar = /* @__PURE__ */ m("option", {
  value: "-1",
  disabled: ""
}, "請選擇", -1), Sr = ["value"], Dr = {
  key: 0,
  class: "flex items-center gap-2"
}, Pr = /* @__PURE__ */ m("span", { class: "p4-b" }, "每", -1), Rr = { class: "p4-b" }, Ln = 1, Mr = /* @__PURE__ */ Ce({
  __name: "RepeatFrequency",
  props: {
    frequency: {},
    interval: {}
  },
  emits: ["update:frequency", "update:interval"],
  setup(e, { emit: t }) {
    const a = e, n = Rt("eventData"), l = q(!0);
    De(n, () => {
      l.value = !0;
    });
    const r = q(a.interval ?? Ln);
    De(r, (T) => {
      T || (T = Ln), t("update:interval", T);
    });
    const o = q(a.frequency);
    De(o, (T) => {
      t("update:frequency", T);
    });
    const u = X({
      get: () => n.value.weekdays ?? [],
      set: (T) => {
        n.value.weekdays = T;
      }
    }), c = X({
      get: () => n.value.weekOrdinal ?? [],
      set: (T) => {
        n.value.weekOrdinal = T;
      }
    }), v = X({
      get: () => n.value.monthDate ?? [],
      set: (T) => {
        n.value.monthDate = T;
      }
    }), L = X({
      get: () => n.value.yearMonths ?? [],
      set: (T) => {
        n.value.yearMonths = T;
      }
    }), y = X(() => {
      if (h.value == de.Never)
        return "只執行一次";
      if (h.value == de.Hour)
        return "每小時執行一次";
      if (h.value == de.Day)
        return "每日執行一次";
      if (h.value == de.Week)
        return "每週執行一次";
      if (h.value == de.Month)
        return "每月執行一次";
      if (h.value == de.Annual)
        return "每年執行一次";
      const T = {
        1: "小時",
        2: "日",
        3: "週",
        4: "月",
        5: "年"
      };
      return h.value == 0 ? `每${r.value ?? ""}${T[o.value] ?? ""}執行一次` : "";
    }), h = q(-1);
    return a.interval == 1 && (h.value = a.frequency), De(
      h,
      (T) => {
        de[T] && (t("update:frequency", T), t("update:interval", 1), o.value = h.value, n.value.weekdays = null, n.value.weekOrdinal = null, n.value.monthDate = null, n.value.yearMonths = null), n.value.customInterval = T === 0;
      },
      { immediate: !0 }
    ), (T, P) => (p(), E("div", fr, [
      mr,
      m("div", _r, [
        m("div", pr, [
          gr,
          me(d(sn), {
            modelValue: d(n).start,
            "onUpdate:modelValue": P[0] || (P[0] = (k) => d(n).start = k),
            mode: "dateTime",
            timezone: "UTC",
            "min-Date": /* @__PURE__ */ new Date(),
            "is-required": ""
          }, {
            default: Je(({ togglePopover: k, inputValue: A }) => [
              m("button", {
                class: "p3-b flex w-fit cursor-pointer relative items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 transition-all hover:bg-light-3 hover:bg-opacity-50",
                onClick: k
              }, [
                m("input", {
                  value: A,
                  required: "",
                  class: "opacity-0 absolute w-full h-full pointer-events-none"
                }, null, 8, br),
                Va(" " + z(A || "請選定執行日期"), 1)
              ], 8, vr)
            ]),
            _: 1
          }, 8, ["modelValue", "min-Date"])
        ])
      ]),
      Er,
      m("div", hr, [
        m("label", Nr, [
          Or,
          ue(m("select", {
            class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
            "onUpdate:modelValue": P[1] || (P[1] = (k) => ne(h) ? h.value = k : null)
          }, [
            (p(!0), E(j, null, re(d(de), (k, A) => (p(), E(j, { key: A }, [
              Number.isInteger(k) ? (p(), E("option", {
                key: 0,
                value: k
              }, z(T.$t(A)), 9, Lr)) : B("", !0)
            ], 64))), 128)),
            Ir
          ], 512), [
            [_e, d(h)]
          ])
        ]),
        m("span", yr, z(d(y)), 1)
      ]),
      d(de)[d(h)] == null ? (p(), E("div", kr, [
        m("label", Cr, [
          Tr,
          ue(m("select", {
            class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
            "onUpdate:modelValue": P[2] || (P[2] = (k) => ne(o) ? o.value = k : null)
          }, [
            Ar,
            (p(!0), E(j, null, re(d(de), (k, A) => (p(), E(j, { key: A }, [
              k != d(de).Never && Number.isInteger(k) ? (p(), E("option", {
                key: 0,
                value: k
              }, z(T.$t(A)), 9, Sr)) : B("", !0)
            ], 64))), 128))
          ], 512), [
            [_e, d(o)]
          ])
        ]),
        d(o) != -1 ? (p(), E("label", Dr, [
          Pr,
          me($e, {
            class: "!w-10 text-center",
            modelValue: d(r),
            "onUpdate:modelValue": P[3] || (P[3] = (k) => ne(r) ? r.value = k : null),
            type: "number"
          }, null, 8, ["modelValue"]),
          m("span", Rr, z(T.$t(`s${d(de)[d(o)]}`)), 1)
        ])) : B("", !0)
      ])) : B("", !0),
      d(de)[d(h)] == null ? (p(), We(ar, {
        key: 1,
        type: d(o),
        weekdays: d(u),
        "onUpdate:weekdays": P[4] || (P[4] = (k) => ne(u) ? u.value = k : null),
        weekOrdinal: d(c),
        "onUpdate:weekOrdinal": P[5] || (P[5] = (k) => ne(c) ? c.value = k : null),
        monthDate: d(v),
        "onUpdate:monthDate": P[6] || (P[6] = (k) => ne(v) ? v.value = k : null),
        yearMonths: d(L),
        "onUpdate:yearMonths": P[7] || (P[7] = (k) => ne(L) ? L.value = k : null)
      }, null, 8, ["type", "weekdays", "weekOrdinal", "monthDate", "yearMonths"])) : B("", !0),
      d(o) !== -1 ? (p(), We(ir, {
        key: 2,
        modelValue: d(n).due,
        "onUpdate:modelValue": P[8] || (P[8] = (k) => d(n).due = k)
      }, null, 8, ["modelValue"])) : B("", !0)
    ]));
  }
}), xr = { class: "relative border rounded border-light-3 py-4 px-3" }, wr = { class: "p3-b absolute left-2 -top-3 text-dark-3 bg-light-5" }, At = /* @__PURE__ */ Ce({
  __name: "OuterBlock",
  props: {
    title: {}
  },
  setup(e) {
    return (t, a) => (p(), E("div", xr, [
      m("div", wr, z(t.title), 1),
      na(t.$slots, "default")
    ]));
  }
});
/*!
  * shared v9.5.0
  * (c) 2023 kazuya kawaguchi
  * Released under the MIT License.
  */
const lt = typeof window < "u";
let Re, _t;
if (process.env.NODE_ENV !== "production") {
  const e = lt && window.performance;
  e && e.mark && e.measure && e.clearMarks && // @ts-ignore browser compat
  e.clearMeasures && (Re = (t) => {
    e.mark(t);
  }, _t = (t, a, n) => {
    e.measure(t, a, n), e.clearMarks(a), e.clearMarks(n);
  });
}
const Vr = /\{([0-9a-zA-Z]+)\}/g;
function dn(e, ...t) {
  return t.length === 1 && le(t[0]) && (t = t[0]), (!t || !t.hasOwnProperty) && (t = {}), e.replace(Vr, (a, n) => t.hasOwnProperty(n) ? t[n] : "");
}
const Ze = (e, t = !1) => t ? Symbol.for(e) : Symbol(e), Fr = (e, t, a) => $r({ l: e, k: t, s: a }), $r = (e) => JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027"), Ne = (e) => typeof e == "number" && isFinite(e), Ur = (e) => oa(e) === "[object Date]", Nt = (e) => oa(e) === "[object RegExp]", Ut = (e) => te(e) && Object.keys(e).length === 0, Oe = Object.assign;
let In;
const qe = () => In || (In = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function yn(e) {
  return e.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}
const Br = Object.prototype.hasOwnProperty;
function fn(e, t) {
  return Br.call(e, t);
}
const ve = Array.isArray, pe = (e) => typeof e == "function", V = (e) => typeof e == "string", oe = (e) => typeof e == "boolean", le = (e) => e !== null && typeof e == "object", sa = Object.prototype.toString, oa = (e) => sa.call(e), te = (e) => {
  if (!le(e))
    return !1;
  const t = Object.getPrototypeOf(e);
  return t === null || t.constructor === Object;
}, jr = (e) => e == null ? "" : ve(e) || te(e) && e.toString === sa ? JSON.stringify(e, null, 2) : String(e);
function Gr(e, t = "") {
  return e.reduce((a, n, l) => l === 0 ? a + n : a + t + n, "");
}
const kn = 2;
function Hr(e, t = 0, a = e.length) {
  const n = e.split(/\r?\n/);
  let l = 0;
  const r = [];
  for (let o = 0; o < n.length; o++)
    if (l += n[o].length + 1, l >= t) {
      for (let u = o - kn; u <= o + kn || a > l; u++) {
        if (u < 0 || u >= n.length)
          continue;
        const c = u + 1;
        r.push(`${c}${" ".repeat(3 - String(c).length)}|  ${n[u]}`);
        const v = n[u].length;
        if (u === o) {
          const L = t - (l - v) + 1, y = Math.max(1, a > l ? v - L : a - t);
          r.push("   |  " + " ".repeat(L) + "^".repeat(y));
        } else if (u > o) {
          if (a > l) {
            const L = Math.max(Math.min(a - l, v), 1);
            r.push("   |  " + "^".repeat(L));
          }
          l += v + 1;
        }
      }
      break;
    }
  return r.join(`
`);
}
function mn(e) {
  let t = e;
  return () => ++t;
}
function st(e, t) {
  typeof console < "u" && (console.warn("[intlify] " + e), t && console.warn(t.stack));
}
const Cn = {};
function Wr(e) {
  Cn[e] || (Cn[e] = !0, st(e));
}
function Yr() {
  const e = /* @__PURE__ */ new Map();
  return {
    events: e,
    on(a, n) {
      const l = e.get(a);
      l && l.push(n) || e.set(a, [n]);
    },
    off(a, n) {
      const l = e.get(a);
      l && l.splice(l.indexOf(n) >>> 0, 1);
    },
    emit(a, n) {
      (e.get(a) || []).slice().map((l) => l(n)), (e.get("*") || []).slice().map((l) => l(a, n));
    }
  };
}
/*!
  * message-compiler v9.5.0
  * (c) 2023 kazuya kawaguchi
  * Released under the MIT License.
  */
function Kr(e, t, a) {
  return { line: e, column: t, offset: a };
}
function Kt(e, t, a) {
  const n = { start: e, end: t };
  return a != null && (n.source = a), n;
}
const Xr = /\{([0-9a-zA-Z]+)\}/g;
function qr(e, ...t) {
  return t.length === 1 && Jr(t[0]) && (t = t[0]), (!t || !t.hasOwnProperty) && (t = {}), e.replace(Xr, (a, n) => t.hasOwnProperty(n) ? t[n] : "");
}
const ia = Object.assign, Tn = (e) => typeof e == "string", Jr = (e) => e !== null && typeof e == "object";
function ua(e, t = "") {
  return e.reduce((a, n, l) => l === 0 ? a + n : a + t + n, "");
}
const H = {
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
}, Qr = {
  // tokenizer error messages
  [H.EXPECTED_TOKEN]: "Expected token: '{0}'",
  [H.INVALID_TOKEN_IN_PLACEHOLDER]: "Invalid token in placeholder: '{0}'",
  [H.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER]: "Unterminated single quote in placeholder",
  [H.UNKNOWN_ESCAPE_SEQUENCE]: "Unknown escape sequence: \\{0}",
  [H.INVALID_UNICODE_ESCAPE_SEQUENCE]: "Invalid unicode escape sequence: {0}",
  [H.UNBALANCED_CLOSING_BRACE]: "Unbalanced closing brace",
  [H.UNTERMINATED_CLOSING_BRACE]: "Unterminated closing brace",
  [H.EMPTY_PLACEHOLDER]: "Empty placeholder",
  [H.NOT_ALLOW_NEST_PLACEHOLDER]: "Not allowed nest placeholder",
  [H.INVALID_LINKED_FORMAT]: "Invalid linked format",
  // parser error messages
  [H.MUST_HAVE_MESSAGES_IN_PLURAL]: "Plural must have messages",
  [H.UNEXPECTED_EMPTY_LINKED_MODIFIER]: "Unexpected empty linked modifier",
  [H.UNEXPECTED_EMPTY_LINKED_KEY]: "Unexpected empty linked key",
  [H.UNEXPECTED_LEXICAL_ANALYSIS]: "Unexpected lexical analysis in token: '{0}'",
  // generator error messages
  [H.UNHANDLED_CODEGEN_NODE_TYPE]: "unhandled codegen node type: '{0}'",
  // minimizer error messages
  [H.UNHANDLED_MINIFIER_NODE_TYPE]: "unhandled mimifier node type: '{0}'"
};
function It(e, t, a = {}) {
  const { domain: n, messages: l, args: r } = a, o = qr((l || Qr)[e] || "", ...r || []), u = new SyntaxError(String(o));
  return u.code = e, t && (u.location = t), u.domain = n, u;
}
function Zr(e) {
  throw e;
}
const zr = /<\/?[\w\s="/.':;#-\/]+>/, el = (e) => zr.test(e), Xe = " ", tl = "\r", ye = `
`, nl = String.fromCharCode(8232), al = String.fromCharCode(8233);
function rl(e) {
  const t = e;
  let a = 0, n = 1, l = 1, r = 0;
  const o = (w) => t[w] === tl && t[w + 1] === ye, u = (w) => t[w] === ye, c = (w) => t[w] === al, v = (w) => t[w] === nl, L = (w) => o(w) || u(w) || c(w) || v(w), y = () => a, h = () => n, T = () => l, P = () => r, k = (w) => o(w) || c(w) || v(w) ? ye : t[w], A = () => k(a), f = () => k(a + r);
  function _() {
    return r = 0, L(a) && (n++, l = 0), o(a) && a++, a++, l++, t[a];
  }
  function N() {
    return o(a + r) && r++, r++, t[a + r];
  }
  function b() {
    a = 0, n = 1, l = 1, r = 0;
  }
  function S(w = 0) {
    r = w;
  }
  function O() {
    const w = a + r;
    for (; w !== a; )
      _();
    r = 0;
  }
  return {
    index: y,
    line: h,
    column: T,
    peekOffset: P,
    charAt: k,
    currentChar: A,
    currentPeek: f,
    next: _,
    peek: N,
    reset: b,
    resetPeek: S,
    skipToPeek: O
  };
}
const et = void 0, ll = ".", An = "'", sl = "tokenizer";
function ol(e, t = {}) {
  const a = t.location !== !1, n = rl(e), l = () => n.index(), r = () => Kr(n.line(), n.column(), n.index()), o = r(), u = l(), c = {
    currentType: 14,
    offset: u,
    startLoc: o,
    endLoc: o,
    lastType: 14,
    lastOffset: u,
    lastStartLoc: o,
    lastEndLoc: o,
    braceNest: 0,
    inLinked: !1,
    text: ""
  }, v = () => c, { onError: L } = t;
  function y(i, s, g, ...x) {
    const K = v();
    if (s.column += g, s.offset += g, L) {
      const ae = a ? Kt(K.startLoc, s) : null, je = It(i, ae, {
        domain: sl,
        args: x
      });
      L(je);
    }
  }
  function h(i, s, g) {
    i.endLoc = r(), i.currentType = s;
    const x = { type: s };
    return a && (x.loc = Kt(i.startLoc, i.endLoc)), g != null && (x.value = g), x;
  }
  const T = (i) => h(
    i,
    14
    /* TokenTypes.EOF */
  );
  function P(i, s) {
    return i.currentChar() === s ? (i.next(), s) : (y(H.EXPECTED_TOKEN, r(), 0, s), "");
  }
  function k(i) {
    let s = "";
    for (; i.currentPeek() === Xe || i.currentPeek() === ye; )
      s += i.currentPeek(), i.peek();
    return s;
  }
  function A(i) {
    const s = k(i);
    return i.skipToPeek(), s;
  }
  function f(i) {
    if (i === et)
      return !1;
    const s = i.charCodeAt(0);
    return s >= 97 && s <= 122 || // a-z
    s >= 65 && s <= 90 || // A-Z
    s === 95;
  }
  function _(i) {
    if (i === et)
      return !1;
    const s = i.charCodeAt(0);
    return s >= 48 && s <= 57;
  }
  function N(i, s) {
    const { currentType: g } = s;
    if (g !== 2)
      return !1;
    k(i);
    const x = f(i.currentPeek());
    return i.resetPeek(), x;
  }
  function b(i, s) {
    const { currentType: g } = s;
    if (g !== 2)
      return !1;
    k(i);
    const x = i.currentPeek() === "-" ? i.peek() : i.currentPeek(), K = _(x);
    return i.resetPeek(), K;
  }
  function S(i, s) {
    const { currentType: g } = s;
    if (g !== 2)
      return !1;
    k(i);
    const x = i.currentPeek() === An;
    return i.resetPeek(), x;
  }
  function O(i, s) {
    const { currentType: g } = s;
    if (g !== 8)
      return !1;
    k(i);
    const x = i.currentPeek() === ".";
    return i.resetPeek(), x;
  }
  function w(i, s) {
    const { currentType: g } = s;
    if (g !== 9)
      return !1;
    k(i);
    const x = f(i.currentPeek());
    return i.resetPeek(), x;
  }
  function J(i, s) {
    const { currentType: g } = s;
    if (!(g === 8 || g === 12))
      return !1;
    k(i);
    const x = i.currentPeek() === ":";
    return i.resetPeek(), x;
  }
  function ee(i, s) {
    const { currentType: g } = s;
    if (g !== 10)
      return !1;
    const x = () => {
      const ae = i.currentPeek();
      return ae === "{" ? f(i.peek()) : ae === "@" || ae === "%" || ae === "|" || ae === ":" || ae === "." || ae === Xe || !ae ? !1 : ae === ye ? (i.peek(), x()) : f(ae);
    }, K = x();
    return i.resetPeek(), K;
  }
  function ie(i) {
    k(i);
    const s = i.currentPeek() === "|";
    return i.resetPeek(), s;
  }
  function Le(i) {
    const s = k(i), g = i.currentPeek() === "%" && i.peek() === "{";
    return i.resetPeek(), {
      isModulo: g,
      hasSpace: s.length > 0
    };
  }
  function se(i, s = !0) {
    const g = (K = !1, ae = "", je = !1) => {
      const Ke = i.currentPeek();
      return Ke === "{" ? ae === "%" ? !1 : K : Ke === "@" || !Ke ? ae === "%" ? !0 : K : Ke === "%" ? (i.peek(), g(K, "%", !0)) : Ke === "|" ? ae === "%" || je ? !0 : !(ae === Xe || ae === ye) : Ke === Xe ? (i.peek(), g(!0, Xe, je)) : Ke === ye ? (i.peek(), g(!0, ye, je)) : !0;
    }, x = g();
    return s && i.resetPeek(), x;
  }
  function Ee(i, s) {
    const g = i.currentChar();
    return g === et ? et : s(g) ? (i.next(), g) : null;
  }
  function W(i) {
    return Ee(i, (g) => {
      const x = g.charCodeAt(0);
      return x >= 97 && x <= 122 || // a-z
      x >= 65 && x <= 90 || // A-Z
      x >= 48 && x <= 57 || // 0-9
      x === 95 || // _
      x === 36;
    });
  }
  function Q(i) {
    return Ee(i, (g) => {
      const x = g.charCodeAt(0);
      return x >= 48 && x <= 57;
    });
  }
  function M(i) {
    return Ee(i, (g) => {
      const x = g.charCodeAt(0);
      return x >= 48 && x <= 57 || // 0-9
      x >= 65 && x <= 70 || // A-F
      x >= 97 && x <= 102;
    });
  }
  function Z(i) {
    let s = "", g = "";
    for (; s = Q(i); )
      g += s;
    return g;
  }
  function U(i) {
    A(i);
    const s = i.currentChar();
    return s !== "%" && y(H.EXPECTED_TOKEN, r(), 0, s), i.next(), "%";
  }
  function R(i) {
    let s = "";
    for (; ; ) {
      const g = i.currentChar();
      if (g === "{" || g === "}" || g === "@" || g === "|" || !g)
        break;
      if (g === "%")
        if (se(i))
          s += g, i.next();
        else
          break;
      else if (g === Xe || g === ye)
        if (se(i))
          s += g, i.next();
        else {
          if (ie(i))
            break;
          s += g, i.next();
        }
      else
        s += g, i.next();
    }
    return s;
  }
  function C(i) {
    A(i);
    let s = "", g = "";
    for (; s = W(i); )
      g += s;
    return i.currentChar() === et && y(H.UNTERMINATED_CLOSING_BRACE, r(), 0), g;
  }
  function G(i) {
    A(i);
    let s = "";
    return i.currentChar() === "-" ? (i.next(), s += `-${Z(i)}`) : s += Z(i), i.currentChar() === et && y(H.UNTERMINATED_CLOSING_BRACE, r(), 0), s;
  }
  function fe(i) {
    A(i), P(i, "'");
    let s = "", g = "";
    const x = (ae) => ae !== An && ae !== ye;
    for (; s = Ee(i, x); )
      s === "\\" ? g += he(i) : g += s;
    const K = i.currentChar();
    return K === ye || K === et ? (y(H.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, r(), 0), K === ye && (i.next(), P(i, "'")), g) : (P(i, "'"), g);
  }
  function he(i) {
    const s = i.currentChar();
    switch (s) {
      case "\\":
      case "'":
        return i.next(), `\\${s}`;
      case "u":
        return Me(i, s, 4);
      case "U":
        return Me(i, s, 6);
      default:
        return y(H.UNKNOWN_ESCAPE_SEQUENCE, r(), 0, s), "";
    }
  }
  function Me(i, s, g) {
    P(i, s);
    let x = "";
    for (let K = 0; K < g; K++) {
      const ae = M(i);
      if (!ae) {
        y(H.INVALID_UNICODE_ESCAPE_SEQUENCE, r(), 0, `\\${s}${x}${i.currentChar()}`);
        break;
      }
      x += ae;
    }
    return `\\${s}${x}`;
  }
  function Ye(i) {
    A(i);
    let s = "", g = "";
    const x = (K) => K !== "{" && K !== "}" && K !== Xe && K !== ye;
    for (; s = Ee(i, x); )
      g += s;
    return g;
  }
  function Be(i) {
    let s = "", g = "";
    for (; s = W(i); )
      g += s;
    return g;
  }
  function it(i) {
    const s = (g = !1, x) => {
      const K = i.currentChar();
      return K === "{" || K === "%" || K === "@" || K === "|" || K === "(" || K === ")" || !K || K === Xe ? x : K === ye || K === ll ? (x += K, i.next(), s(g, x)) : (x += K, i.next(), s(!0, x));
    };
    return s(!1, "");
  }
  function ut(i) {
    A(i);
    const s = P(
      i,
      "|"
      /* TokenChars.Pipe */
    );
    return A(i), s;
  }
  function ct(i, s) {
    let g = null;
    switch (i.currentChar()) {
      case "{":
        return s.braceNest >= 1 && y(H.NOT_ALLOW_NEST_PLACEHOLDER, r(), 0), i.next(), g = h(
          s,
          2,
          "{"
          /* TokenChars.BraceLeft */
        ), A(i), s.braceNest++, g;
      case "}":
        return s.braceNest > 0 && s.currentType === 2 && y(H.EMPTY_PLACEHOLDER, r(), 0), i.next(), g = h(
          s,
          3,
          "}"
          /* TokenChars.BraceRight */
        ), s.braceNest--, s.braceNest > 0 && A(i), s.inLinked && s.braceNest === 0 && (s.inLinked = !1), g;
      case "@":
        return s.braceNest > 0 && y(H.UNTERMINATED_CLOSING_BRACE, r(), 0), g = ze(i, s) || T(s), s.braceNest = 0, g;
      default:
        let K = !0, ae = !0, je = !0;
        if (ie(i))
          return s.braceNest > 0 && y(H.UNTERMINATED_CLOSING_BRACE, r(), 0), g = h(s, 1, ut(i)), s.braceNest = 0, s.inLinked = !1, g;
        if (s.braceNest > 0 && (s.currentType === 5 || s.currentType === 6 || s.currentType === 7))
          return y(H.UNTERMINATED_CLOSING_BRACE, r(), 0), s.braceNest = 0, dt(i, s);
        if (K = N(i, s))
          return g = h(s, 5, C(i)), A(i), g;
        if (ae = b(i, s))
          return g = h(s, 6, G(i)), A(i), g;
        if (je = S(i, s))
          return g = h(s, 7, fe(i)), A(i), g;
        if (!K && !ae && !je)
          return g = h(s, 13, Ye(i)), y(H.INVALID_TOKEN_IN_PLACEHOLDER, r(), 0, g.value), A(i), g;
        break;
    }
    return g;
  }
  function ze(i, s) {
    const { currentType: g } = s;
    let x = null;
    const K = i.currentChar();
    switch ((g === 8 || g === 9 || g === 12 || g === 10) && (K === ye || K === Xe) && y(H.INVALID_LINKED_FORMAT, r(), 0), K) {
      case "@":
        return i.next(), x = h(
          s,
          8,
          "@"
          /* TokenChars.LinkedAlias */
        ), s.inLinked = !0, x;
      case ".":
        return A(i), i.next(), h(
          s,
          9,
          "."
          /* TokenChars.LinkedDot */
        );
      case ":":
        return A(i), i.next(), h(
          s,
          10,
          ":"
          /* TokenChars.LinkedDelimiter */
        );
      default:
        return ie(i) ? (x = h(s, 1, ut(i)), s.braceNest = 0, s.inLinked = !1, x) : O(i, s) || J(i, s) ? (A(i), ze(i, s)) : w(i, s) ? (A(i), h(s, 12, Be(i))) : ee(i, s) ? (A(i), K === "{" ? ct(i, s) || x : h(s, 11, it(i))) : (g === 8 && y(H.INVALID_LINKED_FORMAT, r(), 0), s.braceNest = 0, s.inLinked = !1, dt(i, s));
    }
  }
  function dt(i, s) {
    let g = {
      type: 14
      /* TokenTypes.EOF */
    };
    if (s.braceNest > 0)
      return ct(i, s) || T(s);
    if (s.inLinked)
      return ze(i, s) || T(s);
    switch (i.currentChar()) {
      case "{":
        return ct(i, s) || T(s);
      case "}":
        return y(H.UNBALANCED_CLOSING_BRACE, r(), 0), i.next(), h(
          s,
          3,
          "}"
          /* TokenChars.BraceRight */
        );
      case "@":
        return ze(i, s) || T(s);
      default:
        if (ie(i))
          return g = h(s, 1, ut(i)), s.braceNest = 0, s.inLinked = !1, g;
        const { isModulo: K, hasSpace: ae } = Le(i);
        if (K)
          return ae ? h(s, 0, R(i)) : h(s, 4, U(i));
        if (se(i))
          return h(s, 0, R(i));
        break;
    }
    return g;
  }
  function yt() {
    const { currentType: i, offset: s, startLoc: g, endLoc: x } = c;
    return c.lastType = i, c.lastOffset = s, c.lastStartLoc = g, c.lastEndLoc = x, c.offset = l(), c.startLoc = r(), n.currentChar() === et ? h(
      c,
      14
      /* TokenTypes.EOF */
    ) : dt(n, c);
  }
  return {
    nextToken: yt,
    currentOffset: l,
    currentPosition: r,
    context: v
  };
}
const il = "parser", ul = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;
function cl(e, t, a) {
  switch (e) {
    case "\\\\":
      return "\\";
    case "\\'":
      return "'";
    default: {
      const n = parseInt(t || a, 16);
      return n <= 55295 || n >= 57344 ? String.fromCodePoint(n) : "�";
    }
  }
}
function dl(e = {}) {
  const t = e.location !== !1, { onError: a } = e;
  function n(f, _, N, b, ...S) {
    const O = f.currentPosition();
    if (O.offset += b, O.column += b, a) {
      const w = t ? Kt(N, O) : null, J = It(_, w, {
        domain: il,
        args: S
      });
      a(J);
    }
  }
  function l(f, _, N) {
    const b = { type: f };
    return t && (b.start = _, b.end = _, b.loc = { start: N, end: N }), b;
  }
  function r(f, _, N, b) {
    b && (f.type = b), t && (f.end = _, f.loc && (f.loc.end = N));
  }
  function o(f, _) {
    const N = f.context(), b = l(3, N.offset, N.startLoc);
    return b.value = _, r(b, f.currentOffset(), f.currentPosition()), b;
  }
  function u(f, _) {
    const N = f.context(), { lastOffset: b, lastStartLoc: S } = N, O = l(5, b, S);
    return O.index = parseInt(_, 10), f.nextToken(), r(O, f.currentOffset(), f.currentPosition()), O;
  }
  function c(f, _) {
    const N = f.context(), { lastOffset: b, lastStartLoc: S } = N, O = l(4, b, S);
    return O.key = _, f.nextToken(), r(O, f.currentOffset(), f.currentPosition()), O;
  }
  function v(f, _) {
    const N = f.context(), { lastOffset: b, lastStartLoc: S } = N, O = l(9, b, S);
    return O.value = _.replace(ul, cl), f.nextToken(), r(O, f.currentOffset(), f.currentPosition()), O;
  }
  function L(f) {
    const _ = f.nextToken(), N = f.context(), { lastOffset: b, lastStartLoc: S } = N, O = l(8, b, S);
    return _.type !== 12 ? (n(f, H.UNEXPECTED_EMPTY_LINKED_MODIFIER, N.lastStartLoc, 0), O.value = "", r(O, b, S), {
      nextConsumeToken: _,
      node: O
    }) : (_.value == null && n(f, H.UNEXPECTED_LEXICAL_ANALYSIS, N.lastStartLoc, 0, Ge(_)), O.value = _.value || "", r(O, f.currentOffset(), f.currentPosition()), {
      node: O
    });
  }
  function y(f, _) {
    const N = f.context(), b = l(7, N.offset, N.startLoc);
    return b.value = _, r(b, f.currentOffset(), f.currentPosition()), b;
  }
  function h(f) {
    const _ = f.context(), N = l(6, _.offset, _.startLoc);
    let b = f.nextToken();
    if (b.type === 9) {
      const S = L(f);
      N.modifier = S.node, b = S.nextConsumeToken || f.nextToken();
    }
    switch (b.type !== 10 && n(f, H.UNEXPECTED_LEXICAL_ANALYSIS, _.lastStartLoc, 0, Ge(b)), b = f.nextToken(), b.type === 2 && (b = f.nextToken()), b.type) {
      case 11:
        b.value == null && n(f, H.UNEXPECTED_LEXICAL_ANALYSIS, _.lastStartLoc, 0, Ge(b)), N.key = y(f, b.value || "");
        break;
      case 5:
        b.value == null && n(f, H.UNEXPECTED_LEXICAL_ANALYSIS, _.lastStartLoc, 0, Ge(b)), N.key = c(f, b.value || "");
        break;
      case 6:
        b.value == null && n(f, H.UNEXPECTED_LEXICAL_ANALYSIS, _.lastStartLoc, 0, Ge(b)), N.key = u(f, b.value || "");
        break;
      case 7:
        b.value == null && n(f, H.UNEXPECTED_LEXICAL_ANALYSIS, _.lastStartLoc, 0, Ge(b)), N.key = v(f, b.value || "");
        break;
      default:
        n(f, H.UNEXPECTED_EMPTY_LINKED_KEY, _.lastStartLoc, 0);
        const S = f.context(), O = l(7, S.offset, S.startLoc);
        return O.value = "", r(O, S.offset, S.startLoc), N.key = O, r(N, S.offset, S.startLoc), {
          nextConsumeToken: b,
          node: N
        };
    }
    return r(N, f.currentOffset(), f.currentPosition()), {
      node: N
    };
  }
  function T(f) {
    const _ = f.context(), N = _.currentType === 1 ? f.currentOffset() : _.offset, b = _.currentType === 1 ? _.endLoc : _.startLoc, S = l(2, N, b);
    S.items = [];
    let O = null;
    do {
      const ee = O || f.nextToken();
      switch (O = null, ee.type) {
        case 0:
          ee.value == null && n(f, H.UNEXPECTED_LEXICAL_ANALYSIS, _.lastStartLoc, 0, Ge(ee)), S.items.push(o(f, ee.value || ""));
          break;
        case 6:
          ee.value == null && n(f, H.UNEXPECTED_LEXICAL_ANALYSIS, _.lastStartLoc, 0, Ge(ee)), S.items.push(u(f, ee.value || ""));
          break;
        case 5:
          ee.value == null && n(f, H.UNEXPECTED_LEXICAL_ANALYSIS, _.lastStartLoc, 0, Ge(ee)), S.items.push(c(f, ee.value || ""));
          break;
        case 7:
          ee.value == null && n(f, H.UNEXPECTED_LEXICAL_ANALYSIS, _.lastStartLoc, 0, Ge(ee)), S.items.push(v(f, ee.value || ""));
          break;
        case 8:
          const ie = h(f);
          S.items.push(ie.node), O = ie.nextConsumeToken || null;
          break;
      }
    } while (_.currentType !== 14 && _.currentType !== 1);
    const w = _.currentType === 1 ? _.lastOffset : f.currentOffset(), J = _.currentType === 1 ? _.lastEndLoc : f.currentPosition();
    return r(S, w, J), S;
  }
  function P(f, _, N, b) {
    const S = f.context();
    let O = b.items.length === 0;
    const w = l(1, _, N);
    w.cases = [], w.cases.push(b);
    do {
      const J = T(f);
      O || (O = J.items.length === 0), w.cases.push(J);
    } while (S.currentType !== 14);
    return O && n(f, H.MUST_HAVE_MESSAGES_IN_PLURAL, N, 0), r(w, f.currentOffset(), f.currentPosition()), w;
  }
  function k(f) {
    const _ = f.context(), { offset: N, startLoc: b } = _, S = T(f);
    return _.currentType === 14 ? S : P(f, N, b, S);
  }
  function A(f) {
    const _ = ol(f, ia({}, e)), N = _.context(), b = l(0, N.offset, N.startLoc);
    return t && b.loc && (b.loc.source = f), b.body = k(_), e.onCacheKey && (b.cacheKey = e.onCacheKey(f)), N.currentType !== 14 && n(_, H.UNEXPECTED_LEXICAL_ANALYSIS, N.lastStartLoc, 0, f[N.offset] || ""), r(b, _.currentOffset(), _.currentPosition()), b;
  }
  return { parse: A };
}
function Ge(e) {
  if (e.type === 14)
    return "EOF";
  const t = (e.value || "").replace(/\r?\n/gu, "\\n");
  return t.length > 10 ? t.slice(0, 9) + "…" : t;
}
function fl(e, t = {}) {
  const a = {
    ast: e,
    helpers: /* @__PURE__ */ new Set()
  };
  return { context: () => a, helper: (r) => (a.helpers.add(r), r) };
}
function Sn(e, t) {
  for (let a = 0; a < e.length; a++)
    _n(e[a], t);
}
function _n(e, t) {
  switch (e.type) {
    case 1:
      Sn(e.cases, t), t.helper(
        "plural"
        /* HelperNameMap.PLURAL */
      );
      break;
    case 2:
      Sn(e.items, t);
      break;
    case 6:
      _n(e.key, t), t.helper(
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
function ml(e, t = {}) {
  const a = fl(e);
  a.helper(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  ), e.body && _n(e.body, a);
  const n = a.context();
  e.helpers = Array.from(n.helpers);
}
function _l(e) {
  const t = e.body;
  return t.type === 2 ? Dn(t) : t.cases.forEach((a) => Dn(a)), e;
}
function Dn(e) {
  if (e.items.length === 1) {
    const t = e.items[0];
    (t.type === 3 || t.type === 9) && (e.static = t.value, delete t.value);
  } else {
    const t = [];
    for (let a = 0; a < e.items.length; a++) {
      const n = e.items[a];
      if (!(n.type === 3 || n.type === 9) || n.value == null)
        break;
      t.push(n.value);
    }
    if (t.length === e.items.length) {
      e.static = ua(t);
      for (let a = 0; a < e.items.length; a++) {
        const n = e.items[a];
        (n.type === 3 || n.type === 9) && delete n.value;
      }
    }
  }
}
const pl = "minifier";
function gt(e) {
  switch (e.t = e.type, e.type) {
    case 0:
      const t = e;
      gt(t.body), t.b = t.body, delete t.body;
      break;
    case 1:
      const a = e, n = a.cases;
      for (let L = 0; L < n.length; L++)
        gt(n[L]);
      a.c = n, delete a.cases;
      break;
    case 2:
      const l = e, r = l.items;
      for (let L = 0; L < r.length; L++)
        gt(r[L]);
      l.i = r, delete l.items, l.static && (l.s = l.static, delete l.static);
      break;
    case 3:
    case 9:
    case 8:
    case 7:
      const o = e;
      o.value && (o.v = o.value, delete o.value);
      break;
    case 6:
      const u = e;
      gt(u.key), u.k = u.key, delete u.key, u.modifier && (gt(u.modifier), u.m = u.modifier, delete u.modifier);
      break;
    case 5:
      const c = e;
      c.i = c.index, delete c.index;
      break;
    case 4:
      const v = e;
      v.k = v.key, delete v.key;
      break;
    default:
      throw It(H.UNHANDLED_MINIFIER_NODE_TYPE, null, {
        domain: pl,
        args: [e.type]
      });
  }
  delete e.type;
}
const gl = "parser";
function vl(e, t) {
  const { sourceMap: a, filename: n, breakLineCode: l, needIndent: r } = t, o = t.location !== !1, u = {
    filename: n,
    code: "",
    column: 1,
    line: 1,
    offset: 0,
    map: void 0,
    breakLineCode: l,
    needIndent: r,
    indentLevel: 0
  };
  o && e.loc && (u.source = e.loc.source);
  const c = () => u;
  function v(A, f) {
    u.code += A;
  }
  function L(A, f = !0) {
    const _ = f ? l : "";
    v(r ? _ + "  ".repeat(A) : _);
  }
  function y(A = !0) {
    const f = ++u.indentLevel;
    A && L(f);
  }
  function h(A = !0) {
    const f = --u.indentLevel;
    A && L(f);
  }
  function T() {
    L(u.indentLevel);
  }
  return {
    context: c,
    push: v,
    indent: y,
    deindent: h,
    newline: T,
    helper: (A) => `_${A}`,
    needIndent: () => u.needIndent
  };
}
function bl(e, t) {
  const { helper: a } = e;
  e.push(`${a(
    "linked"
    /* HelperNameMap.LINKED */
  )}(`), Ot(e, t.key), t.modifier ? (e.push(", "), Ot(e, t.modifier), e.push(", _type")) : e.push(", undefined, _type"), e.push(")");
}
function El(e, t) {
  const { helper: a, needIndent: n } = e;
  e.push(`${a(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  )}([`), e.indent(n());
  const l = t.items.length;
  for (let r = 0; r < l && (Ot(e, t.items[r]), r !== l - 1); r++)
    e.push(", ");
  e.deindent(n()), e.push("])");
}
function hl(e, t) {
  const { helper: a, needIndent: n } = e;
  if (t.cases.length > 1) {
    e.push(`${a(
      "plural"
      /* HelperNameMap.PLURAL */
    )}([`), e.indent(n());
    const l = t.cases.length;
    for (let r = 0; r < l && (Ot(e, t.cases[r]), r !== l - 1); r++)
      e.push(", ");
    e.deindent(n()), e.push("])");
  }
}
function Nl(e, t) {
  t.body ? Ot(e, t.body) : e.push("null");
}
function Ot(e, t) {
  const { helper: a } = e;
  switch (t.type) {
    case 0:
      Nl(e, t);
      break;
    case 1:
      hl(e, t);
      break;
    case 2:
      El(e, t);
      break;
    case 6:
      bl(e, t);
      break;
    case 8:
      e.push(JSON.stringify(t.value), t);
      break;
    case 7:
      e.push(JSON.stringify(t.value), t);
      break;
    case 5:
      e.push(`${a(
        "interpolate"
        /* HelperNameMap.INTERPOLATE */
      )}(${a(
        "list"
        /* HelperNameMap.LIST */
      )}(${t.index}))`, t);
      break;
    case 4:
      e.push(`${a(
        "interpolate"
        /* HelperNameMap.INTERPOLATE */
      )}(${a(
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
      throw It(H.UNHANDLED_CODEGEN_NODE_TYPE, null, {
        domain: gl,
        args: [t.type]
      });
  }
}
const Ol = (e, t = {}) => {
  const a = Tn(t.mode) ? t.mode : "normal", n = Tn(t.filename) ? t.filename : "message.intl", l = !!t.sourceMap, r = t.breakLineCode != null ? t.breakLineCode : a === "arrow" ? ";" : `
`, o = t.needIndent ? t.needIndent : a !== "arrow", u = e.helpers || [], c = vl(e, {
    mode: a,
    filename: n,
    sourceMap: l,
    breakLineCode: r,
    needIndent: o
  });
  c.push(a === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {"), c.indent(o), u.length > 0 && (c.push(`const { ${ua(u.map((y) => `${y}: _${y}`), ", ")} } = ctx`), c.newline()), c.push("return "), Ot(c, e), c.deindent(o), c.push("}"), delete e.helpers;
  const { code: v, map: L } = c.context();
  return {
    ast: e,
    code: v,
    map: L ? L.toJSON() : void 0
    // eslint-disable-line @typescript-eslint/no-explicit-any
  };
};
function Ll(e, t = {}) {
  const a = ia({}, t), n = !!a.jit, l = !!a.minify, r = a.optimize == null ? !0 : a.optimize, u = dl(a).parse(e);
  return n ? (r && _l(u), l && gt(u), { ast: u, code: "" }) : (ml(u, a), Ol(u, a));
}
/*!
  * core-base v9.5.0
  * (c) 2023 kazuya kawaguchi
  * Released under the MIT License.
  */
function Il() {
  typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (qe().__INTLIFY_PROD_DEVTOOLS__ = !1), typeof __INTLIFY_JIT_COMPILATION__ != "boolean" && (qe().__INTLIFY_JIT_COMPILATION__ = !1), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (qe().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1);
}
const ot = [];
ot[
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
ot[
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
ot[
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
ot[
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
ot[
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
ot[
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
ot[
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
const yl = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function kl(e) {
  return yl.test(e);
}
function Cl(e) {
  const t = e.charCodeAt(0), a = e.charCodeAt(e.length - 1);
  return t === a && (t === 34 || t === 39) ? e.slice(1, -1) : e;
}
function Tl(e) {
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
function Al(e) {
  const t = e.trim();
  return e.charAt(0) === "0" && isNaN(parseInt(e)) ? !1 : kl(t) ? Cl(t) : "*" + t;
}
function Sl(e) {
  const t = [];
  let a = -1, n = 0, l = 0, r, o, u, c, v, L, y;
  const h = [];
  h[
    0
    /* Actions.APPEND */
  ] = () => {
    o === void 0 ? o = u : o += u;
  }, h[
    1
    /* Actions.PUSH */
  ] = () => {
    o !== void 0 && (t.push(o), o = void 0);
  }, h[
    2
    /* Actions.INC_SUB_PATH_DEPTH */
  ] = () => {
    h[
      0
      /* Actions.APPEND */
    ](), l++;
  }, h[
    3
    /* Actions.PUSH_SUB_PATH */
  ] = () => {
    if (l > 0)
      l--, n = 4, h[
        0
        /* Actions.APPEND */
      ]();
    else {
      if (l = 0, o === void 0 || (o = Al(o), o === !1))
        return !1;
      h[
        1
        /* Actions.PUSH */
      ]();
    }
  };
  function T() {
    const P = e[a + 1];
    if (n === 5 && P === "'" || n === 6 && P === '"')
      return a++, u = "\\" + P, h[
        0
        /* Actions.APPEND */
      ](), !0;
  }
  for (; n !== null; )
    if (a++, r = e[a], !(r === "\\" && T())) {
      if (c = Tl(r), y = ot[n], v = y[c] || y.l || 8, v === 8 || (n = v[0], v[1] !== void 0 && (L = h[v[1]], L && (u = r, L() === !1))))
        return;
      if (n === 7)
        return t;
    }
}
const Pn = /* @__PURE__ */ new Map();
function Dl(e, t) {
  return le(e) ? e[t] : null;
}
function Pl(e, t) {
  if (!le(e))
    return null;
  let a = Pn.get(t);
  if (a || (a = Sl(t), a && Pn.set(t, a)), !a)
    return null;
  const n = a.length;
  let l = e, r = 0;
  for (; r < n; ) {
    const o = l[a[r]];
    if (o === void 0)
      return null;
    l = o, r++;
  }
  return l;
}
const Rl = (e) => e, Ml = (e) => "", xl = "text", wl = (e) => e.length === 0 ? "" : Gr(e), Vl = jr;
function Rn(e, t) {
  return e = Math.abs(e), t === 2 ? e ? e > 1 ? 1 : 0 : 1 : e ? Math.min(e, 2) : 0;
}
function Fl(e) {
  const t = Ne(e.pluralIndex) ? e.pluralIndex : -1;
  return e.named && (Ne(e.named.count) || Ne(e.named.n)) ? Ne(e.named.count) ? e.named.count : Ne(e.named.n) ? e.named.n : t : t;
}
function $l(e, t) {
  t.count || (t.count = e), t.n || (t.n = e);
}
function Ul(e = {}) {
  const t = e.locale, a = Fl(e), n = le(e.pluralRules) && V(t) && pe(e.pluralRules[t]) ? e.pluralRules[t] : Rn, l = le(e.pluralRules) && V(t) && pe(e.pluralRules[t]) ? Rn : void 0, r = (f) => f[n(a, f.length, l)], o = e.list || [], u = (f) => o[f], c = e.named || {};
  Ne(e.pluralIndex) && $l(a, c);
  const v = (f) => c[f];
  function L(f) {
    const _ = pe(e.messages) ? e.messages(f) : le(e.messages) ? e.messages[f] : !1;
    return _ || (e.parent ? e.parent.message(f) : Ml);
  }
  const y = (f) => e.modifiers ? e.modifiers[f] : Rl, h = te(e.processor) && pe(e.processor.normalize) ? e.processor.normalize : wl, T = te(e.processor) && pe(e.processor.interpolate) ? e.processor.interpolate : Vl, P = te(e.processor) && V(e.processor.type) ? e.processor.type : xl, A = {
    list: u,
    named: v,
    plural: r,
    linked: (f, ..._) => {
      const [N, b] = _;
      let S = "text", O = "";
      _.length === 1 ? le(N) ? (O = N.modifier || O, S = N.type || S) : V(N) && (O = N || O) : _.length === 2 && (V(N) && (O = N || O), V(b) && (S = b || S));
      const w = L(f)(A), J = (
        // The message in vnode resolved with linked are returned as an array by processor.nomalize
        S === "vnode" && ve(w) && O ? w[0] : w
      );
      return O ? y(O)(J, S) : J;
    },
    message: L,
    type: P,
    interpolate: T,
    normalize: h,
    values: Oe({}, o, c)
  };
  return A;
}
let Dt = null;
function Bl(e) {
  Dt = e;
}
function jl(e, t, a) {
  Dt && Dt.emit("i18n:init", {
    timestamp: Date.now(),
    i18n: e,
    version: t,
    meta: a
  });
}
const Gl = /* @__PURE__ */ Hl(
  "function:translate"
  /* IntlifyDevToolsHooks.FunctionTranslate */
);
function Hl(e) {
  return (t) => Dt && Dt.emit(e, t);
}
const ke = {
  NOT_FOUND_KEY: 1,
  FALLBACK_TO_TRANSLATE: 2,
  CANNOT_FORMAT_NUMBER: 3,
  FALLBACK_TO_NUMBER_FORMAT: 4,
  CANNOT_FORMAT_DATE: 5,
  FALLBACK_TO_DATE_FORMAT: 6,
  EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER: 7,
  __EXTEND_POINT__: 8
}, Wl = {
  [ke.NOT_FOUND_KEY]: "Not found '{key}' key in '{locale}' locale messages.",
  [ke.FALLBACK_TO_TRANSLATE]: "Fall back to translate '{key}' key with '{target}' locale.",
  [ke.CANNOT_FORMAT_NUMBER]: "Cannot format a number value due to not supported Intl.NumberFormat.",
  [ke.FALLBACK_TO_NUMBER_FORMAT]: "Fall back to number format '{key}' key with '{target}' locale.",
  [ke.CANNOT_FORMAT_DATE]: "Cannot format a date value due to not supported Intl.DateTimeFormat.",
  [ke.FALLBACK_TO_DATE_FORMAT]: "Fall back to datetime format '{key}' key with '{target}' locale.",
  [ke.EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER]: "This project is using Custom Message Compiler, which is an experimental feature. It may receive breaking changes or be removed in the future."
};
function pt(e, ...t) {
  return dn(Wl[e], ...t);
}
function pn(e, t) {
  return t.locale != null ? Mn(t.locale) : Mn(e.locale);
}
let Wt;
function Mn(e) {
  return V(e) ? e : Wt != null && e.resolvedOnce ? Wt : Wt = e();
}
function Yl(e, t, a) {
  return [.../* @__PURE__ */ new Set([
    a,
    ...ve(t) ? t : le(t) ? Object.keys(t) : V(t) ? [t] : [a]
  ])];
}
function ca(e, t, a) {
  const n = V(a) ? a : Pt, l = e;
  l.__localeChainCache || (l.__localeChainCache = /* @__PURE__ */ new Map());
  let r = l.__localeChainCache.get(n);
  if (!r) {
    r = [];
    let o = [a];
    for (; ve(o); )
      o = xn(r, o, t);
    const u = ve(t) || !te(t) ? t : t.default ? t.default : null;
    o = V(u) ? [u] : u, ve(o) && xn(r, o, !1), l.__localeChainCache.set(n, r);
  }
  return r;
}
function xn(e, t, a) {
  let n = !0;
  for (let l = 0; l < t.length && oe(n); l++) {
    const r = t[l];
    V(r) && (n = Kl(e, t[l], a));
  }
  return n;
}
function Kl(e, t, a) {
  let n;
  const l = t.split("-");
  do {
    const r = l.join("-");
    n = Xl(e, r, a), l.splice(-1, 1);
  } while (l.length && n === !0);
  return n;
}
function Xl(e, t, a) {
  let n = !1;
  if (!e.includes(t) && (n = !0, t)) {
    n = t[t.length - 1] !== "!";
    const l = t.replace(/!/g, "");
    e.push(l), (ve(a) || te(a)) && a[l] && (n = a[l]);
  }
  return n;
}
const ql = "9.5.0", Bt = -1, Pt = "en-US", Ft = "", wn = (e) => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;
function Jl() {
  return {
    upper: (e, t) => t === "text" && V(e) ? e.toUpperCase() : t === "vnode" && le(e) && "__v_isVNode" in e ? e.children.toUpperCase() : e,
    lower: (e, t) => t === "text" && V(e) ? e.toLowerCase() : t === "vnode" && le(e) && "__v_isVNode" in e ? e.children.toLowerCase() : e,
    capitalize: (e, t) => t === "text" && V(e) ? wn(e) : t === "vnode" && le(e) && "__v_isVNode" in e ? wn(e.children) : e
  };
}
let da;
function Vn(e) {
  da = e;
}
let fa;
function Ql(e) {
  fa = e;
}
let ma;
function Zl(e) {
  ma = e;
}
let _a = null;
const Fn = (e) => {
  _a = e;
}, zl = () => _a;
let pa = null;
const $n = (e) => {
  pa = e;
}, es = () => pa;
let Un = 0;
function ts(e = {}) {
  const t = pe(e.onWarn) ? e.onWarn : st, a = V(e.version) ? e.version : ql, n = V(e.locale) || pe(e.locale) ? e.locale : Pt, l = pe(n) ? Pt : n, r = ve(e.fallbackLocale) || te(e.fallbackLocale) || V(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : l, o = te(e.messages) ? e.messages : { [l]: {} }, u = te(e.datetimeFormats) ? e.datetimeFormats : { [l]: {} }, c = te(e.numberFormats) ? e.numberFormats : { [l]: {} }, v = Oe({}, e.modifiers || {}, Jl()), L = e.pluralRules || {}, y = pe(e.missing) ? e.missing : null, h = oe(e.missingWarn) || Nt(e.missingWarn) ? e.missingWarn : !0, T = oe(e.fallbackWarn) || Nt(e.fallbackWarn) ? e.fallbackWarn : !0, P = !!e.fallbackFormat, k = !!e.unresolving, A = pe(e.postTranslation) ? e.postTranslation : null, f = te(e.processor) ? e.processor : null, _ = oe(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, N = !!e.escapeParameter, b = pe(e.messageCompiler) ? e.messageCompiler : da;
  process.env.NODE_ENV !== "production" && pe(e.messageCompiler) && Wr(pt(ke.EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER));
  const S = pe(e.messageResolver) ? e.messageResolver : fa || Dl, O = pe(e.localeFallbacker) ? e.localeFallbacker : ma || Yl, w = le(e.fallbackContext) ? e.fallbackContext : void 0, J = e, ee = le(J.__datetimeFormatters) ? J.__datetimeFormatters : /* @__PURE__ */ new Map(), ie = le(J.__numberFormatters) ? J.__numberFormatters : /* @__PURE__ */ new Map(), Le = le(J.__meta) ? J.__meta : {};
  Un++;
  const se = {
    version: a,
    cid: Un,
    locale: n,
    fallbackLocale: r,
    messages: o,
    modifiers: v,
    pluralRules: L,
    missing: y,
    missingWarn: h,
    fallbackWarn: T,
    fallbackFormat: P,
    unresolving: k,
    postTranslation: A,
    processor: f,
    warnHtmlMessage: _,
    escapeParameter: N,
    messageCompiler: b,
    messageResolver: S,
    localeFallbacker: O,
    fallbackContext: w,
    onWarn: t,
    __meta: Le
  };
  return se.datetimeFormats = u, se.numberFormats = c, se.__datetimeFormatters = ee, se.__numberFormatters = ie, process.env.NODE_ENV !== "production" && (se.__v_emitter = J.__v_emitter != null ? J.__v_emitter : void 0), (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) && jl(se, a, Le), se;
}
function jt(e, t) {
  return e instanceof RegExp ? e.test(t) : e;
}
function ga(e, t) {
  return e instanceof RegExp ? e.test(t) : e;
}
function gn(e, t, a, n, l) {
  const { missing: r, onWarn: o } = e;
  if (process.env.NODE_ENV !== "production") {
    const u = e.__v_emitter;
    u && u.emit("missing", {
      locale: a,
      key: t,
      type: l,
      groupId: `${l}:${t}`
    });
  }
  if (r !== null) {
    const u = r(e, a, t, l);
    return V(u) ? u : t;
  } else
    return process.env.NODE_ENV !== "production" && ga(n, t) && o(pt(ke.NOT_FOUND_KEY, { key: t, locale: a })), t;
}
function Ct(e, t, a) {
  const n = e;
  n.__localeChainCache = /* @__PURE__ */ new Map(), e.localeFallbacker(e, a, t);
}
function Yt(e) {
  return (a) => ns(a, e);
}
function ns(e, t) {
  const a = t.b || t.body;
  if ((a.t || a.type) === 1) {
    const n = a, l = n.c || n.cases;
    return e.plural(l.reduce((r, o) => [
      ...r,
      Bn(e, o)
    ], []));
  } else
    return Bn(e, a);
}
function Bn(e, t) {
  const a = t.s || t.static;
  if (a)
    return e.type === "text" ? a : e.normalize([a]);
  {
    const n = (t.i || t.items).reduce((l, r) => [...l, Xt(e, r)], []);
    return e.normalize(n);
  }
}
function Xt(e, t) {
  const a = t.t || t.type;
  switch (a) {
    case 3:
      const n = t;
      return n.v || n.value;
    case 9:
      const l = t;
      return l.v || l.value;
    case 4:
      const r = t;
      return e.interpolate(e.named(r.k || r.key));
    case 5:
      const o = t;
      return e.interpolate(e.list(o.i != null ? o.i : o.index));
    case 6:
      const u = t, c = u.m || u.modifier;
      return e.linked(Xt(e, u.k || u.key), c ? Xt(e, c) : void 0, e.type);
    case 7:
      const v = t;
      return v.v || v.value;
    case 8:
      const L = t;
      return L.v || L.value;
    default:
      throw new Error(`unhandled node type on format message part: ${a}`);
  }
}
const va = H.__EXTEND_POINT__, xt = mn(va), Ve = {
  INVALID_ARGUMENT: va,
  INVALID_DATE_ARGUMENT: xt(),
  INVALID_ISO_DATE_ARGUMENT: xt(),
  NOT_SUPPORT_NON_STRING_MESSAGE: xt(),
  __EXTEND_POINT__: xt()
  // 22
};
function mt(e) {
  return It(e, null, process.env.NODE_ENV !== "production" ? { messages: as } : void 0);
}
const as = {
  [Ve.INVALID_ARGUMENT]: "Invalid arguments",
  [Ve.INVALID_DATE_ARGUMENT]: "The date provided is an invalid Date object.Make sure your Date represents a valid date.",
  [Ve.INVALID_ISO_DATE_ARGUMENT]: "The argument provided is not a valid ISO date string",
  [Ve.NOT_SUPPORT_NON_STRING_MESSAGE]: "Not support non-string message"
}, rs = "Detected HTML in '{source}' message. Recommend not using HTML messages to avoid XSS.";
function ba(e, t) {
  t && el(e) && st(dn(rs, { source: e }));
}
const Ea = (e) => e;
let ht = /* @__PURE__ */ Object.create(null);
const Lt = (e) => le(e) && (e.t === 0 || e.type === 0) && ("b" in e || "body" in e);
function ha(e, t = {}) {
  let a = !1;
  const n = t.onError || Zr;
  return t.onError = (l) => {
    a = !0, n(l);
  }, { ...Ll(e, t), detectError: a };
}
const ls = (e, t) => {
  if (!V(e))
    throw mt(Ve.NOT_SUPPORT_NON_STRING_MESSAGE);
  {
    const a = oe(t.warnHtmlMessage) ? t.warnHtmlMessage : !0;
    process.env.NODE_ENV !== "production" && ba(e, a);
    const l = (t.onCacheKey || Ea)(e), r = ht[l];
    if (r)
      return r;
    const { code: o, detectError: u } = ha(e, t), c = new Function(`return ${o}`)();
    return u ? c : ht[l] = c;
  }
};
function ss(e, t) {
  if (__INTLIFY_JIT_COMPILATION__ && !__INTLIFY_DROP_MESSAGE_COMPILER__ && V(e)) {
    const a = oe(t.warnHtmlMessage) ? t.warnHtmlMessage : !0;
    process.env.NODE_ENV !== "production" && ba(e, a);
    const l = (t.onCacheKey || Ea)(e), r = ht[l];
    if (r)
      return r;
    const { ast: o, detectError: u } = ha(e, {
      ...t,
      location: process.env.NODE_ENV !== "production",
      jit: !0
    }), c = Yt(o);
    return u ? c : ht[l] = c;
  } else {
    if (process.env.NODE_ENV !== "production" && !Lt(e))
      return st(`the message that is resolve with key '${t.key}' is not supported for jit compilation`), () => e;
    const a = e.cacheKey;
    if (a) {
      const n = ht[a];
      return n || (ht[a] = Yt(e));
    } else
      return Yt(e);
  }
}
const jn = () => "", Ue = (e) => pe(e);
function Gn(e, ...t) {
  const { fallbackFormat: a, postTranslation: n, unresolving: l, messageCompiler: r, fallbackLocale: o, messages: u } = e, [c, v] = qt(...t), L = oe(v.missingWarn) ? v.missingWarn : e.missingWarn, y = oe(v.fallbackWarn) ? v.fallbackWarn : e.fallbackWarn, h = oe(v.escapeParameter) ? v.escapeParameter : e.escapeParameter, T = !!v.resolvedMessage, P = V(v.default) || oe(v.default) ? oe(v.default) ? r ? c : () => c : v.default : a ? r ? c : () => c : "", k = a || P !== "", A = pn(e, v);
  h && os(v);
  let [f, _, N] = T ? [
    c,
    A,
    u[A] || {}
  ] : Na(e, c, A, o, y, L), b = f, S = c;
  if (!T && !(V(b) || Lt(b) || Ue(b)) && k && (b = P, S = b), !T && (!(V(b) || Lt(b) || Ue(b)) || !V(_)))
    return l ? Bt : c;
  if (process.env.NODE_ENV !== "production" && V(b) && e.messageCompiler == null)
    return st(`The message format compilation is not supported in this build. Because message compiler isn't included. You need to pre-compilation all message format. So translate function return '${c}'.`), c;
  let O = !1;
  const w = () => {
    O = !0;
  }, J = Ue(b) ? b : Oa(e, c, _, b, S, w);
  if (O)
    return b;
  const ee = ds(e, _, N, v), ie = Ul(ee), Le = is(e, J, ie), se = n ? n(Le, c) : Le;
  if (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) {
    const Ee = {
      timestamp: Date.now(),
      key: V(c) ? c : Ue(b) ? b.key : "",
      locale: _ || (Ue(b) ? b.locale : ""),
      format: V(b) ? b : Ue(b) ? b.source : "",
      message: se
    };
    Ee.meta = Oe({}, e.__meta, zl() || {}), Gl(Ee);
  }
  return se;
}
function os(e) {
  ve(e.list) ? e.list = e.list.map((t) => V(t) ? yn(t) : t) : le(e.named) && Object.keys(e.named).forEach((t) => {
    V(e.named[t]) && (e.named[t] = yn(e.named[t]));
  });
}
function Na(e, t, a, n, l, r) {
  const { messages: o, onWarn: u, messageResolver: c, localeFallbacker: v } = e, L = v(e, n, a);
  let y = {}, h, T = null, P = a, k = null;
  const A = "translate";
  for (let f = 0; f < L.length; f++) {
    if (h = k = L[f], process.env.NODE_ENV !== "production" && a !== h && jt(l, t) && u(pt(ke.FALLBACK_TO_TRANSLATE, {
      key: t,
      target: h
    })), process.env.NODE_ENV !== "production" && a !== h) {
      const O = e.__v_emitter;
      O && O.emit("fallback", {
        type: A,
        key: t,
        from: P,
        to: k,
        groupId: `${A}:${t}`
      });
    }
    y = o[h] || {};
    let _ = null, N, b;
    if (process.env.NODE_ENV !== "production" && lt && (_ = window.performance.now(), N = "intlify-message-resolve-start", b = "intlify-message-resolve-end", Re && Re(N)), (T = c(y, t)) === null && (T = y[t]), process.env.NODE_ENV !== "production" && lt) {
      const O = window.performance.now(), w = e.__v_emitter;
      w && _ && T && w.emit("message-resolve", {
        type: "message-resolve",
        key: t,
        message: T,
        time: O - _,
        groupId: `${A}:${t}`
      }), N && b && Re && _t && (Re(b), _t("intlify message resolve", N, b));
    }
    if (V(T) || Lt(T) || Ue(T))
      break;
    const S = gn(
      e,
      // eslint-disable-line @typescript-eslint/no-explicit-any
      t,
      h,
      r,
      A
    );
    S !== t && (T = S), P = k;
  }
  return [T, h, y];
}
function Oa(e, t, a, n, l, r) {
  const { messageCompiler: o, warnHtmlMessage: u } = e;
  if (Ue(n)) {
    const h = n;
    return h.locale = h.locale || a, h.key = h.key || t, h;
  }
  if (o == null) {
    const h = () => n;
    return h.locale = a, h.key = t, h;
  }
  let c = null, v, L;
  process.env.NODE_ENV !== "production" && lt && (c = window.performance.now(), v = "intlify-message-compilation-start", L = "intlify-message-compilation-end", Re && Re(v));
  const y = o(n, us(e, a, l, n, u, r));
  if (process.env.NODE_ENV !== "production" && lt) {
    const h = window.performance.now(), T = e.__v_emitter;
    T && c && T.emit("message-compilation", {
      type: "message-compilation",
      message: n,
      time: h - c,
      groupId: `translate:${t}`
    }), v && L && Re && _t && (Re(L), _t("intlify message compilation", v, L));
  }
  return y.locale = a, y.key = t, y.source = n, y;
}
function is(e, t, a) {
  let n = null, l, r;
  process.env.NODE_ENV !== "production" && lt && (n = window.performance.now(), l = "intlify-message-evaluation-start", r = "intlify-message-evaluation-end", Re && Re(l));
  const o = t(a);
  if (process.env.NODE_ENV !== "production" && lt) {
    const u = window.performance.now(), c = e.__v_emitter;
    c && n && c.emit("message-evaluation", {
      type: "message-evaluation",
      value: o,
      time: u - n,
      groupId: `translate:${t.key}`
    }), l && r && Re && _t && (Re(r), _t("intlify message evaluation", l, r));
  }
  return o;
}
function qt(...e) {
  const [t, a, n] = e, l = {};
  if (!V(t) && !Ne(t) && !Ue(t) && !Lt(t))
    throw mt(Ve.INVALID_ARGUMENT);
  const r = Ne(t) ? String(t) : (Ue(t), t);
  return Ne(a) ? l.plural = a : V(a) ? l.default = a : te(a) && !Ut(a) ? l.named = a : ve(a) && (l.list = a), Ne(n) ? l.plural = n : V(n) ? l.default = n : te(n) && Oe(l, n), [r, l];
}
function us(e, t, a, n, l, r) {
  return {
    locale: t,
    key: a,
    warnHtmlMessage: l,
    onError: (o) => {
      if (r && r(o), process.env.NODE_ENV !== "production") {
        const u = cs(n), c = `Message compilation error: ${o.message}`, v = o.location && u && Hr(u, o.location.start.offset, o.location.end.offset), L = e.__v_emitter;
        L && u && L.emit("compile-error", {
          message: u,
          error: o.message,
          start: o.location && o.location.start.offset,
          end: o.location && o.location.end.offset,
          groupId: `translate:${a}`
        }), console.error(v ? `${c}
${v}` : c);
      } else
        throw o;
    },
    onCacheKey: (o) => Fr(t, a, o)
  };
}
function cs(e) {
  var t;
  if (!V(e)) {
    if ((t = e.loc) != null && t.source)
      return e.loc.source;
  }
}
function ds(e, t, a, n) {
  const { modifiers: l, pluralRules: r, messageResolver: o, fallbackLocale: u, fallbackWarn: c, missingWarn: v, fallbackContext: L } = e, h = {
    locale: t,
    modifiers: l,
    pluralRules: r,
    messages: (T) => {
      let P = o(a, T);
      if (P == null && L) {
        const [, , k] = Na(L, T, t, u, c, v);
        P = o(k, T);
      }
      if (V(P) || Lt(P)) {
        let k = !1;
        const f = Oa(e, T, t, P, T, () => {
          k = !0;
        });
        return k ? jn : f;
      } else
        return Ue(P) ? P : jn;
    }
  };
  return e.processor && (h.processor = e.processor), n.list && (h.list = n.list), n.named && (h.named = n.named), Ne(n.plural) && (h.pluralIndex = n.plural), h;
}
const Hn = typeof Intl < "u", La = {
  dateTimeFormat: Hn && typeof Intl.DateTimeFormat < "u",
  numberFormat: Hn && typeof Intl.NumberFormat < "u"
};
function Wn(e, ...t) {
  const { datetimeFormats: a, unresolving: n, fallbackLocale: l, onWarn: r, localeFallbacker: o } = e, { __datetimeFormatters: u } = e;
  if (process.env.NODE_ENV !== "production" && !La.dateTimeFormat)
    return r(pt(ke.CANNOT_FORMAT_DATE)), Ft;
  const [c, v, L, y] = Jt(...t), h = oe(L.missingWarn) ? L.missingWarn : e.missingWarn, T = oe(L.fallbackWarn) ? L.fallbackWarn : e.fallbackWarn, P = !!L.part, k = pn(e, L), A = o(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    l,
    k
  );
  if (!V(c) || c === "")
    return new Intl.DateTimeFormat(k, y).format(v);
  let f = {}, _, N = null, b = k, S = null;
  const O = "datetime format";
  for (let ee = 0; ee < A.length; ee++) {
    if (_ = S = A[ee], process.env.NODE_ENV !== "production" && k !== _ && jt(T, c) && r(pt(ke.FALLBACK_TO_DATE_FORMAT, {
      key: c,
      target: _
    })), process.env.NODE_ENV !== "production" && k !== _) {
      const ie = e.__v_emitter;
      ie && ie.emit("fallback", {
        type: O,
        key: c,
        from: b,
        to: S,
        groupId: `${O}:${c}`
      });
    }
    if (f = a[_] || {}, N = f[c], te(N))
      break;
    gn(e, c, _, h, O), b = S;
  }
  if (!te(N) || !V(_))
    return n ? Bt : c;
  let w = `${_}__${c}`;
  Ut(y) || (w = `${w}__${JSON.stringify(y)}`);
  let J = u.get(w);
  return J || (J = new Intl.DateTimeFormat(_, Oe({}, N, y)), u.set(w, J)), P ? J.formatToParts(v) : J.format(v);
}
const Ia = [
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
function Jt(...e) {
  const [t, a, n, l] = e, r = {};
  let o = {}, u;
  if (V(t)) {
    const c = t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
    if (!c)
      throw mt(Ve.INVALID_ISO_DATE_ARGUMENT);
    const v = c[3] ? c[3].trim().startsWith("T") ? `${c[1].trim()}${c[3].trim()}` : `${c[1].trim()}T${c[3].trim()}` : c[1].trim();
    u = new Date(v);
    try {
      u.toISOString();
    } catch {
      throw mt(Ve.INVALID_ISO_DATE_ARGUMENT);
    }
  } else if (Ur(t)) {
    if (isNaN(t.getTime()))
      throw mt(Ve.INVALID_DATE_ARGUMENT);
    u = t;
  } else if (Ne(t))
    u = t;
  else
    throw mt(Ve.INVALID_ARGUMENT);
  return V(a) ? r.key = a : te(a) && Object.keys(a).forEach((c) => {
    Ia.includes(c) ? o[c] = a[c] : r[c] = a[c];
  }), V(n) ? r.locale = n : te(n) && (o = n), te(l) && (o = l), [r.key || "", u, r, o];
}
function Yn(e, t, a) {
  const n = e;
  for (const l in a) {
    const r = `${t}__${l}`;
    n.__datetimeFormatters.has(r) && n.__datetimeFormatters.delete(r);
  }
}
function Kn(e, ...t) {
  const { numberFormats: a, unresolving: n, fallbackLocale: l, onWarn: r, localeFallbacker: o } = e, { __numberFormatters: u } = e;
  if (process.env.NODE_ENV !== "production" && !La.numberFormat)
    return r(pt(ke.CANNOT_FORMAT_NUMBER)), Ft;
  const [c, v, L, y] = Qt(...t), h = oe(L.missingWarn) ? L.missingWarn : e.missingWarn, T = oe(L.fallbackWarn) ? L.fallbackWarn : e.fallbackWarn, P = !!L.part, k = pn(e, L), A = o(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    l,
    k
  );
  if (!V(c) || c === "")
    return new Intl.NumberFormat(k, y).format(v);
  let f = {}, _, N = null, b = k, S = null;
  const O = "number format";
  for (let ee = 0; ee < A.length; ee++) {
    if (_ = S = A[ee], process.env.NODE_ENV !== "production" && k !== _ && jt(T, c) && r(pt(ke.FALLBACK_TO_NUMBER_FORMAT, {
      key: c,
      target: _
    })), process.env.NODE_ENV !== "production" && k !== _) {
      const ie = e.__v_emitter;
      ie && ie.emit("fallback", {
        type: O,
        key: c,
        from: b,
        to: S,
        groupId: `${O}:${c}`
      });
    }
    if (f = a[_] || {}, N = f[c], te(N))
      break;
    gn(e, c, _, h, O), b = S;
  }
  if (!te(N) || !V(_))
    return n ? Bt : c;
  let w = `${_}__${c}`;
  Ut(y) || (w = `${w}__${JSON.stringify(y)}`);
  let J = u.get(w);
  return J || (J = new Intl.NumberFormat(_, Oe({}, N, y)), u.set(w, J)), P ? J.formatToParts(v) : J.format(v);
}
const ya = [
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
function Qt(...e) {
  const [t, a, n, l] = e, r = {};
  let o = {};
  if (!Ne(t))
    throw mt(Ve.INVALID_ARGUMENT);
  const u = t;
  return V(a) ? r.key = a : te(a) && Object.keys(a).forEach((c) => {
    ya.includes(c) ? o[c] = a[c] : r[c] = a[c];
  }), V(n) ? r.locale = n : te(n) && (o = n), te(l) && (o = l), [r.key || "", u, r, o];
}
function Xn(e, t, a) {
  const n = e;
  for (const l in a) {
    const r = `${t}__${l}`;
    n.__numberFormatters.has(r) && n.__numberFormatters.delete(r);
  }
}
Il();
/*!
  * vue-i18n v9.5.0
  * (c) 2023 kazuya kawaguchi
  * Released under the MIT License.
  */
const fs = "9.5.0";
function ms() {
  typeof __VUE_I18N_FULL_INSTALL__ != "boolean" && (qe().__VUE_I18N_FULL_INSTALL__ = !0), typeof __VUE_I18N_LEGACY_API__ != "boolean" && (qe().__VUE_I18N_LEGACY_API__ = !0), typeof __INTLIFY_JIT_COMPILATION__ != "boolean" && (qe().__INTLIFY_JIT_COMPILATION__ = !1), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (qe().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1), typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (qe().__INTLIFY_PROD_DEVTOOLS__ = !1);
}
const ka = ke.__EXTEND_POINT__, tt = mn(ka), we = {
  FALLBACK_TO_ROOT: ka,
  NOT_SUPPORTED_PRESERVE: tt(),
  NOT_SUPPORTED_FORMATTER: tt(),
  NOT_SUPPORTED_PRESERVE_DIRECTIVE: tt(),
  NOT_SUPPORTED_GET_CHOICE_INDEX: tt(),
  COMPONENT_NAME_LEGACY_COMPATIBLE: tt(),
  NOT_FOUND_PARENT_SCOPE: tt(),
  IGNORE_OBJ_FLATTEN: tt(),
  NOTICE_DROP_ALLOW_COMPOSITION: tt()
  // 17
}, _s = {
  [we.FALLBACK_TO_ROOT]: "Fall back to {type} '{key}' with root locale.",
  [we.NOT_SUPPORTED_PRESERVE]: "Not supported 'preserve'.",
  [we.NOT_SUPPORTED_FORMATTER]: "Not supported 'formatter'.",
  [we.NOT_SUPPORTED_PRESERVE_DIRECTIVE]: "Not supported 'preserveDirectiveContent'.",
  [we.NOT_SUPPORTED_GET_CHOICE_INDEX]: "Not supported 'getChoiceIndex'.",
  [we.COMPONENT_NAME_LEGACY_COMPATIBLE]: "Component name legacy compatible: '{name}' -> 'i18n'",
  [we.NOT_FOUND_PARENT_SCOPE]: "Not found parent scope. use the global scope.",
  [we.IGNORE_OBJ_FLATTEN]: "Ignore object flatten: '{key}' key has an string value",
  [we.NOTICE_DROP_ALLOW_COMPOSITION]: "'allowComposition' option will be dropped in the next major version. For more information, please see 👉 https://tinyurl.com/2p97mcze"
};
function vn(e, ...t) {
  return dn(_s[e], ...t);
}
const Ca = Ve.__EXTEND_POINT__, Ae = mn(Ca), ce = {
  // composer module errors
  UNEXPECTED_RETURN_TYPE: Ca,
  // legacy module errors
  INVALID_ARGUMENT: Ae(),
  // i18n module errors
  MUST_BE_CALL_SETUP_TOP: Ae(),
  NOT_INSTALLED: Ae(),
  NOT_AVAILABLE_IN_LEGACY_MODE: Ae(),
  // directive module errors
  REQUIRED_VALUE: Ae(),
  INVALID_VALUE: Ae(),
  // vue-devtools errors
  CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN: Ae(),
  NOT_INSTALLED_WITH_PROVIDE: Ae(),
  // unexpected error
  UNEXPECTED_ERROR: Ae(),
  // not compatible legacy vue-i18n constructor
  NOT_COMPATIBLE_LEGACY_VUE_I18N: Ae(),
  // bridge support vue 2.x only
  BRIDGE_SUPPORT_VUE_2_ONLY: Ae(),
  // need to define `i18n` option in `allowComposition: true` and `useScope: 'local' at `useI18n``
  MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION: Ae(),
  // Not available Compostion API in Legacy API mode. Please make sure that the legacy API mode is working properly
  NOT_AVAILABLE_COMPOSITION_IN_LEGACY: Ae(),
  // for enhancement
  __EXTEND_POINT__: Ae()
  // 37
};
function Qe(e, ...t) {
  return It(e, null, process.env.NODE_ENV !== "production" ? { messages: ps, args: t } : void 0);
}
const ps = {
  [ce.UNEXPECTED_RETURN_TYPE]: "Unexpected return type in composer",
  [ce.INVALID_ARGUMENT]: "Invalid argument",
  [ce.MUST_BE_CALL_SETUP_TOP]: "Must be called at the top of a `setup` function",
  [ce.NOT_INSTALLED]: "Need to install with `app.use` function",
  [ce.UNEXPECTED_ERROR]: "Unexpected error",
  [ce.NOT_AVAILABLE_IN_LEGACY_MODE]: "Not available in legacy mode",
  [ce.REQUIRED_VALUE]: "Required in value: {0}",
  [ce.INVALID_VALUE]: "Invalid value",
  [ce.CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN]: "Cannot setup vue-devtools plugin",
  [ce.NOT_INSTALLED_WITH_PROVIDE]: "Need to install with `provide` function",
  [ce.NOT_COMPATIBLE_LEGACY_VUE_I18N]: "Not compatible legacy VueI18n.",
  [ce.BRIDGE_SUPPORT_VUE_2_ONLY]: "vue-i18n-bridge support Vue 2.x only",
  [ce.MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION]: "Must define ‘i18n’ option or custom block in Composition API with using local scope in Legacy API mode",
  [ce.NOT_AVAILABLE_COMPOSITION_IN_LEGACY]: "Not available Compostion API in Legacy API mode. Please make sure that the legacy API mode is working properly"
}, Zt = /* @__PURE__ */ Ze("__translateVNode"), zt = /* @__PURE__ */ Ze("__datetimeParts"), en = /* @__PURE__ */ Ze("__numberParts"), tn = /* @__PURE__ */ Ze("__enableEmitter"), nn = /* @__PURE__ */ Ze("__disableEmitter"), gs = Ze("__setPluralRules"), Ta = /* @__PURE__ */ Ze("__injectWithOption"), an = /* @__PURE__ */ Ze("__dispose");
function rn(e) {
  if (!le(e))
    return e;
  for (const t in e)
    if (fn(e, t))
      if (!t.includes("."))
        le(e[t]) && rn(e[t]);
      else {
        const a = t.split("."), n = a.length - 1;
        let l = e, r = !1;
        for (let o = 0; o < n; o++) {
          if (a[o] in l || (l[a[o]] = {}), !le(l[a[o]])) {
            process.env.NODE_ENV !== "production" && st(vn(we.IGNORE_OBJ_FLATTEN, {
              key: a[o]
            })), r = !0;
            break;
          }
          l = l[a[o]];
        }
        r || (l[a[n]] = e[t], delete e[t]), le(l[a[n]]) && rn(l[a[n]]);
      }
  return e;
}
function bn(e, t) {
  const { messages: a, __i18n: n, messageResolver: l, flatJson: r } = t, o = te(a) ? a : ve(n) ? {} : { [e]: {} };
  if (ve(n) && n.forEach((u) => {
    if ("locale" in u && "resource" in u) {
      const { locale: c, resource: v } = u;
      c ? (o[c] = o[c] || {}, St(v, o[c])) : St(v, o);
    } else
      V(u) && St(JSON.parse(u), o);
  }), l == null && r)
    for (const u in o)
      fn(o, u) && rn(o[u]);
  return o;
}
const wt = (e) => !le(e) || ve(e);
function St(e, t) {
  if (wt(e) || wt(t))
    throw Qe(ce.INVALID_VALUE);
  for (const a in e)
    fn(e, a) && (wt(e[a]) || wt(t[a]) ? t[a] = e[a] : St(e[a], t[a]));
}
function Aa(e) {
  return e.type;
}
function vs(e, t, a) {
  let n = le(t.messages) ? t.messages : {};
  "__i18nGlobal" in a && (n = bn(e.locale.value, {
    messages: n,
    __i18n: a.__i18nGlobal
  }));
  const l = Object.keys(n);
  l.length && l.forEach((r) => {
    e.mergeLocaleMessage(r, n[r]);
  });
  {
    if (le(t.datetimeFormats)) {
      const r = Object.keys(t.datetimeFormats);
      r.length && r.forEach((o) => {
        e.mergeDateTimeFormat(o, t.datetimeFormats[o]);
      });
    }
    if (le(t.numberFormats)) {
      const r = Object.keys(t.numberFormats);
      r.length && r.forEach((o) => {
        e.mergeNumberFormat(o, t.numberFormats[o]);
      });
    }
  }
}
function qn(e) {
  return me(Ua, null, e, 0);
}
const Jn = "__INTLIFY_META__";
let Qn = 0;
function Zn(e) {
  return (t, a, n, l) => e(a, n, ln() || void 0, l);
}
const bs = () => {
  const e = ln();
  let t = null;
  return e && (t = Aa(e)[Jn]) ? { [Jn]: t } : null;
};
function Es(e = {}, t) {
  const { __root: a, __injectWithOption: n } = e, l = a === void 0;
  let r = oe(e.inheritLocale) ? e.inheritLocale : !0;
  const o = q(
    // prettier-ignore
    a && r ? a.locale.value : V(e.locale) ? e.locale : Pt
  ), u = q(
    // prettier-ignore
    a && r ? a.fallbackLocale.value : V(e.fallbackLocale) || ve(e.fallbackLocale) || te(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : o.value
  ), c = q(bn(o.value, e)), v = q(te(e.datetimeFormats) ? e.datetimeFormats : { [o.value]: {} }), L = q(te(e.numberFormats) ? e.numberFormats : { [o.value]: {} });
  let y = a ? a.missingWarn : oe(e.missingWarn) || Nt(e.missingWarn) ? e.missingWarn : !0, h = a ? a.fallbackWarn : oe(e.fallbackWarn) || Nt(e.fallbackWarn) ? e.fallbackWarn : !0, T = a ? a.fallbackRoot : oe(e.fallbackRoot) ? e.fallbackRoot : !0, P = !!e.fallbackFormat, k = pe(e.missing) ? e.missing : null, A = pe(e.missing) ? Zn(e.missing) : null, f = pe(e.postTranslation) ? e.postTranslation : null, _ = a ? a.warnHtmlMessage : oe(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, N = !!e.escapeParameter;
  const b = a ? a.modifiers : te(e.modifiers) ? e.modifiers : {};
  let S = e.pluralRules || a && a.pluralRules, O;
  O = (() => {
    l && $n(null);
    const I = {
      version: fs,
      locale: o.value,
      fallbackLocale: u.value,
      messages: c.value,
      modifiers: b,
      pluralRules: S,
      missing: A === null ? void 0 : A,
      missingWarn: y,
      fallbackWarn: h,
      fallbackFormat: P,
      unresolving: !0,
      postTranslation: f === null ? void 0 : f,
      warnHtmlMessage: _,
      escapeParameter: N,
      messageResolver: e.messageResolver,
      messageCompiler: e.messageCompiler,
      __meta: { framework: "vue" }
    };
    I.datetimeFormats = v.value, I.numberFormats = L.value, I.__datetimeFormatters = te(O) ? O.__datetimeFormatters : void 0, I.__numberFormatters = te(O) ? O.__numberFormatters : void 0, process.env.NODE_ENV !== "production" && (I.__v_emitter = te(O) ? O.__v_emitter : void 0);
    const D = ts(I);
    return l && $n(D), D;
  })(), Ct(O, o.value, u.value);
  function J() {
    return [
      o.value,
      u.value,
      c.value,
      v.value,
      L.value
    ];
  }
  const ee = X({
    get: () => o.value,
    set: (I) => {
      o.value = I, O.locale = o.value;
    }
  }), ie = X({
    get: () => u.value,
    set: (I) => {
      u.value = I, O.fallbackLocale = u.value, Ct(O, o.value, I);
    }
  }), Le = X(() => c.value), se = /* @__PURE__ */ X(() => v.value), Ee = /* @__PURE__ */ X(() => L.value);
  function W() {
    return pe(f) ? f : null;
  }
  function Q(I) {
    f = I, O.postTranslation = I;
  }
  function M() {
    return k;
  }
  function Z(I) {
    I !== null && (A = Zn(I)), k = I, O.missing = A;
  }
  function U(I, D) {
    return I !== "translate" || !D.resolvedMessage;
  }
  const R = (I, D, Te, Ie, Ht, Mt) => {
    J();
    let kt;
    try {
      (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) && Fn(bs()), l || (O.fallbackContext = a ? es() : void 0), kt = I(O);
    } finally {
      (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) && Fn(null), l || (O.fallbackContext = void 0);
    }
    if (Ne(kt) && kt === Bt) {
      const [ft, xa] = D();
      if (process.env.NODE_ENV !== "production" && a && V(ft) && U(Te, xa) && (T && (jt(h, ft) || ga(y, ft)) && st(vn(we.FALLBACK_TO_ROOT, {
        key: ft,
        type: Te
      })), process.env.NODE_ENV !== "production")) {
        const { __v_emitter: hn } = O;
        hn && T && hn.emit("fallback", {
          type: Te,
          key: ft,
          to: "global",
          groupId: `${Te}:${ft}`
        });
      }
      return a && T ? Ie(a) : Ht(ft);
    } else {
      if (Mt(kt))
        return kt;
      throw Qe(ce.UNEXPECTED_RETURN_TYPE);
    }
  };
  function C(...I) {
    return R((D) => Reflect.apply(Gn, null, [D, ...I]), () => qt(...I), "translate", (D) => Reflect.apply(D.t, D, [...I]), (D) => D, (D) => V(D));
  }
  function G(...I) {
    const [D, Te, Ie] = I;
    if (Ie && !le(Ie))
      throw Qe(ce.INVALID_ARGUMENT);
    return C(D, Te, Oe({ resolvedMessage: !0 }, Ie || {}));
  }
  function fe(...I) {
    return R((D) => Reflect.apply(Wn, null, [D, ...I]), () => Jt(...I), "datetime format", (D) => Reflect.apply(D.d, D, [...I]), () => Ft, (D) => V(D));
  }
  function he(...I) {
    return R((D) => Reflect.apply(Kn, null, [D, ...I]), () => Qt(...I), "number format", (D) => Reflect.apply(D.n, D, [...I]), () => Ft, (D) => V(D));
  }
  function Me(I) {
    return I.map((D) => V(D) || Ne(D) || oe(D) ? qn(String(D)) : D);
  }
  const Be = {
    normalize: Me,
    interpolate: (I) => I,
    type: "vnode"
  };
  function it(...I) {
    return R(
      (D) => {
        let Te;
        const Ie = D;
        try {
          Ie.processor = Be, Te = Reflect.apply(Gn, null, [Ie, ...I]);
        } finally {
          Ie.processor = null;
        }
        return Te;
      },
      () => qt(...I),
      "translate",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (D) => D[Zt](...I),
      (D) => [qn(D)],
      (D) => ve(D)
    );
  }
  function ut(...I) {
    return R(
      (D) => Reflect.apply(Kn, null, [D, ...I]),
      () => Qt(...I),
      "number format",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (D) => D[en](...I),
      () => [],
      (D) => V(D) || ve(D)
    );
  }
  function ct(...I) {
    return R(
      (D) => Reflect.apply(Wn, null, [D, ...I]),
      () => Jt(...I),
      "datetime format",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (D) => D[zt](...I),
      () => [],
      (D) => V(D) || ve(D)
    );
  }
  function ze(I) {
    S = I, O.pluralRules = S;
  }
  function dt(I, D) {
    if (!I)
      return !1;
    const Te = V(D) ? D : o.value, Ie = s(Te);
    return O.messageResolver(Ie, I) !== null;
  }
  function yt(I) {
    let D = null;
    const Te = ca(O, u.value, o.value);
    for (let Ie = 0; Ie < Te.length; Ie++) {
      const Ht = c.value[Te[Ie]] || {}, Mt = O.messageResolver(Ht, I);
      if (Mt != null) {
        D = Mt;
        break;
      }
    }
    return D;
  }
  function i(I) {
    const D = yt(I);
    return D ?? (a ? a.tm(I) || {} : {});
  }
  function s(I) {
    return c.value[I] || {};
  }
  function g(I, D) {
    c.value[I] = D, O.messages = c.value;
  }
  function x(I, D) {
    c.value[I] = c.value[I] || {}, St(D, c.value[I]), O.messages = c.value;
  }
  function K(I) {
    return v.value[I] || {};
  }
  function ae(I, D) {
    v.value[I] = D, O.datetimeFormats = v.value, Yn(O, I, D);
  }
  function je(I, D) {
    v.value[I] = Oe(v.value[I] || {}, D), O.datetimeFormats = v.value, Yn(O, I, D);
  }
  function Ke(I) {
    return L.value[I] || {};
  }
  function Ra(I, D) {
    L.value[I] = D, O.numberFormats = L.value, Xn(O, I, D);
  }
  function Ma(I, D) {
    L.value[I] = Oe(L.value[I] || {}, D), O.numberFormats = L.value, Xn(O, I, D);
  }
  Qn++, a && lt && (De(a.locale, (I) => {
    r && (o.value = I, O.locale = I, Ct(O, o.value, u.value));
  }), De(a.fallbackLocale, (I) => {
    r && (u.value = I, O.fallbackLocale = I, Ct(O, o.value, u.value));
  }));
  const ge = {
    id: Qn,
    locale: ee,
    fallbackLocale: ie,
    get inheritLocale() {
      return r;
    },
    set inheritLocale(I) {
      r = I, I && a && (o.value = a.locale.value, u.value = a.fallbackLocale.value, Ct(O, o.value, u.value));
    },
    get availableLocales() {
      return Object.keys(c.value).sort();
    },
    messages: Le,
    get modifiers() {
      return b;
    },
    get pluralRules() {
      return S || {};
    },
    get isGlobal() {
      return l;
    },
    get missingWarn() {
      return y;
    },
    set missingWarn(I) {
      y = I, O.missingWarn = y;
    },
    get fallbackWarn() {
      return h;
    },
    set fallbackWarn(I) {
      h = I, O.fallbackWarn = h;
    },
    get fallbackRoot() {
      return T;
    },
    set fallbackRoot(I) {
      T = I;
    },
    get fallbackFormat() {
      return P;
    },
    set fallbackFormat(I) {
      P = I, O.fallbackFormat = P;
    },
    get warnHtmlMessage() {
      return _;
    },
    set warnHtmlMessage(I) {
      _ = I, O.warnHtmlMessage = I;
    },
    get escapeParameter() {
      return N;
    },
    set escapeParameter(I) {
      N = I, O.escapeParameter = I;
    },
    t: C,
    getLocaleMessage: s,
    setLocaleMessage: g,
    mergeLocaleMessage: x,
    getPostTranslationHandler: W,
    setPostTranslationHandler: Q,
    getMissingHandler: M,
    setMissingHandler: Z,
    [gs]: ze
  };
  return ge.datetimeFormats = se, ge.numberFormats = Ee, ge.rt = G, ge.te = dt, ge.tm = i, ge.d = fe, ge.n = he, ge.getDateTimeFormat = K, ge.setDateTimeFormat = ae, ge.mergeDateTimeFormat = je, ge.getNumberFormat = Ke, ge.setNumberFormat = Ra, ge.mergeNumberFormat = Ma, ge[Ta] = n, ge[Zt] = it, ge[zt] = ct, ge[en] = ut, process.env.NODE_ENV !== "production" && (ge[tn] = (I) => {
    O.__v_emitter = I;
  }, ge[nn] = () => {
    O.__v_emitter = void 0;
  }), ge;
}
const En = {
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
function hs({ slots: e }, t) {
  return t.length === 1 && t[0] === "default" ? (e.default ? e.default() : []).reduce((n, l) => [
    ...n,
    // prettier-ignore
    ...l.type === j ? l.children : [l]
  ], []) : t.reduce((a, n) => {
    const l = e[n];
    return l && (a[n] = l()), a;
  }, {});
}
function Sa(e) {
  return j;
}
Oe({
  keypath: {
    type: String,
    required: !0
  },
  plural: {
    type: [Number, String],
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    validator: (e) => Ne(e) || !isNaN(e)
  }
}, En);
function Ns(e) {
  return ve(e) && !V(e[0]);
}
function Da(e, t, a, n) {
  const { slots: l, attrs: r } = t;
  return () => {
    const o = { part: !0 };
    let u = {};
    e.locale && (o.locale = e.locale), V(e.format) ? o.key = e.format : le(e.format) && (V(e.format.key) && (o.key = e.format.key), u = Object.keys(e.format).reduce((h, T) => a.includes(T) ? Oe({}, h, { [T]: e.format[T] }) : h, {}));
    const c = n(e.value, o, u);
    let v = [o.key];
    ve(c) ? v = c.map((h, T) => {
      const P = l[h.type], k = P ? P({ [h.type]: h.value, index: T, parts: c }) : [h.value];
      return Ns(k) && (k[0].key = `${h.type}-${T}`), k;
    }) : V(c) && (v = [c]);
    const L = Oe({}, r), y = V(e.tag) || le(e.tag) ? e.tag : Sa();
    return aa(y, L, v);
  };
}
Oe({
  value: {
    type: Number,
    required: !0
  },
  format: {
    type: [String, Object]
  }
}, En);
Oe({
  value: {
    type: [Number, Date],
    required: !0
  },
  format: {
    type: [String, Object]
  }
}, En);
function zn(e, t) {
}
const Os = /* @__PURE__ */ Ze("global-vue-i18n");
function Gt(e = {}) {
  const t = ln();
  if (t == null)
    throw Qe(ce.MUST_BE_CALL_SETUP_TOP);
  if (!t.isCE && t.appContext.app != null && !t.appContext.app.__VUE_I18N_SYMBOL__)
    throw Qe(ce.NOT_INSTALLED);
  const a = Ls(t), n = ys(a), l = Aa(t), r = Is(e, l);
  if (__VUE_I18N_LEGACY_API__ && a.mode === "legacy" && !e.__useComponent) {
    if (!a.allowComposition)
      throw Qe(ce.NOT_AVAILABLE_IN_LEGACY_MODE);
    return As(t, r, n, e);
  }
  if (r === "global")
    return vs(n, e, l), n;
  if (r === "parent") {
    let c = ks(a, t, e.__useComponent);
    return c == null && (process.env.NODE_ENV !== "production" && st(vn(we.NOT_FOUND_PARENT_SCOPE)), c = n), c;
  }
  const o = a;
  let u = o.__getInstance(t);
  if (u == null) {
    const c = Oe({}, e);
    "__i18n" in l && (c.__i18n = l.__i18n), n && (c.__root = n), u = Es(c), o.__composerExtend && (u[an] = o.__composerExtend(u)), Ts(o, t, u), o.__setInstance(t, u);
  }
  return u;
}
function Ls(e) {
  {
    const t = Rt(e.isCE ? Os : e.appContext.app.__VUE_I18N_SYMBOL__);
    if (!t)
      throw Qe(e.isCE ? ce.NOT_INSTALLED_WITH_PROVIDE : ce.UNEXPECTED_ERROR);
    return t;
  }
}
function Is(e, t) {
  return Ut(e) ? "__i18n" in t ? "local" : "global" : e.useScope ? e.useScope : "local";
}
function ys(e) {
  return e.mode === "composition" ? e.global : e.global.__composer;
}
function ks(e, t, a = !1) {
  let n = null;
  const l = t.root;
  let r = Cs(t, a);
  for (; r != null; ) {
    const o = e;
    if (e.mode === "composition")
      n = o.__getInstance(r);
    else if (__VUE_I18N_LEGACY_API__) {
      const u = o.__getInstance(r);
      u != null && (n = u.__composer, a && n && !n[Ta] && (n = null));
    }
    if (n != null || l === r)
      break;
    r = r.parent;
  }
  return n;
}
function Cs(e, t = !1) {
  return e == null ? null : t && e.vnode.ctx || e.parent;
}
function Ts(e, t, a) {
  let n = null;
  $t(() => {
    if (process.env.NODE_ENV !== "production" && t.vnode.el) {
      t.vnode.el.__VUE_I18N__ = a, n = Yr();
      const l = a;
      l[tn] && l[tn](n), n.on("*", zn);
    }
  }, t), ta(() => {
    const l = a;
    process.env.NODE_ENV !== "production" && t.vnode.el && t.vnode.el.__VUE_I18N__ && (n && n.off("*", zn), l[nn] && l[nn](), delete t.vnode.el.__VUE_I18N__), e.__deleteInstance(t);
    const r = l[an];
    r && (r(), delete l[an]);
  }, t);
}
function As(e, t, a, n = {}) {
  const l = t === "local", r = Fa(null);
  if (l && e.proxy && !(e.proxy.$options.i18n || e.proxy.$options.__i18n))
    throw Qe(ce.MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION);
  const o = oe(n.inheritLocale) ? n.inheritLocale : !V(n.locale), u = q(
    // prettier-ignore
    !l || o ? a.locale.value : V(n.locale) ? n.locale : Pt
  ), c = q(
    // prettier-ignore
    !l || o ? a.fallbackLocale.value : V(n.fallbackLocale) || ve(n.fallbackLocale) || te(n.fallbackLocale) || n.fallbackLocale === !1 ? n.fallbackLocale : u.value
  ), v = q(bn(u.value, n)), L = q(te(n.datetimeFormats) ? n.datetimeFormats : { [u.value]: {} }), y = q(te(n.numberFormats) ? n.numberFormats : { [u.value]: {} }), h = l ? a.missingWarn : oe(n.missingWarn) || Nt(n.missingWarn) ? n.missingWarn : !0, T = l ? a.fallbackWarn : oe(n.fallbackWarn) || Nt(n.fallbackWarn) ? n.fallbackWarn : !0, P = l ? a.fallbackRoot : oe(n.fallbackRoot) ? n.fallbackRoot : !0, k = !!n.fallbackFormat, A = pe(n.missing) ? n.missing : null, f = pe(n.postTranslation) ? n.postTranslation : null, _ = l ? a.warnHtmlMessage : oe(n.warnHtmlMessage) ? n.warnHtmlMessage : !0, N = !!n.escapeParameter, b = l ? a.modifiers : te(n.modifiers) ? n.modifiers : {}, S = n.pluralRules || l && a.pluralRules;
  function O() {
    return [
      u.value,
      c.value,
      v.value,
      L.value,
      y.value
    ];
  }
  const w = X({
    get: () => r.value ? r.value.locale.value : u.value,
    set: (s) => {
      r.value && (r.value.locale.value = s), u.value = s;
    }
  }), J = X({
    get: () => r.value ? r.value.fallbackLocale.value : c.value,
    set: (s) => {
      r.value && (r.value.fallbackLocale.value = s), c.value = s;
    }
  }), ee = X(() => r.value ? r.value.messages.value : v.value), ie = X(() => L.value), Le = X(() => y.value);
  function se() {
    return r.value ? r.value.getPostTranslationHandler() : f;
  }
  function Ee(s) {
    r.value && r.value.setPostTranslationHandler(s);
  }
  function W() {
    return r.value ? r.value.getMissingHandler() : A;
  }
  function Q(s) {
    r.value && r.value.setMissingHandler(s);
  }
  function M(s) {
    return O(), s();
  }
  function Z(...s) {
    return r.value ? M(() => Reflect.apply(r.value.t, null, [...s])) : M(() => "");
  }
  function U(...s) {
    return r.value ? Reflect.apply(r.value.rt, null, [...s]) : "";
  }
  function R(...s) {
    return r.value ? M(() => Reflect.apply(r.value.d, null, [...s])) : M(() => "");
  }
  function C(...s) {
    return r.value ? M(() => Reflect.apply(r.value.n, null, [...s])) : M(() => "");
  }
  function G(s) {
    return r.value ? r.value.tm(s) : {};
  }
  function fe(s, g) {
    return r.value ? r.value.te(s, g) : !1;
  }
  function he(s) {
    return r.value ? r.value.getLocaleMessage(s) : {};
  }
  function Me(s, g) {
    r.value && (r.value.setLocaleMessage(s, g), v.value[s] = g);
  }
  function Ye(s, g) {
    r.value && r.value.mergeLocaleMessage(s, g);
  }
  function Be(s) {
    return r.value ? r.value.getDateTimeFormat(s) : {};
  }
  function it(s, g) {
    r.value && (r.value.setDateTimeFormat(s, g), L.value[s] = g);
  }
  function ut(s, g) {
    r.value && r.value.mergeDateTimeFormat(s, g);
  }
  function ct(s) {
    return r.value ? r.value.getNumberFormat(s) : {};
  }
  function ze(s, g) {
    r.value && (r.value.setNumberFormat(s, g), y.value[s] = g);
  }
  function dt(s, g) {
    r.value && r.value.mergeNumberFormat(s, g);
  }
  const yt = {
    get id() {
      return r.value ? r.value.id : -1;
    },
    locale: w,
    fallbackLocale: J,
    messages: ee,
    datetimeFormats: ie,
    numberFormats: Le,
    get inheritLocale() {
      return r.value ? r.value.inheritLocale : o;
    },
    set inheritLocale(s) {
      r.value && (r.value.inheritLocale = s);
    },
    get availableLocales() {
      return r.value ? r.value.availableLocales : Object.keys(v.value);
    },
    get modifiers() {
      return r.value ? r.value.modifiers : b;
    },
    get pluralRules() {
      return r.value ? r.value.pluralRules : S;
    },
    get isGlobal() {
      return r.value ? r.value.isGlobal : !1;
    },
    get missingWarn() {
      return r.value ? r.value.missingWarn : h;
    },
    set missingWarn(s) {
      r.value && (r.value.missingWarn = s);
    },
    get fallbackWarn() {
      return r.value ? r.value.fallbackWarn : T;
    },
    set fallbackWarn(s) {
      r.value && (r.value.missingWarn = s);
    },
    get fallbackRoot() {
      return r.value ? r.value.fallbackRoot : P;
    },
    set fallbackRoot(s) {
      r.value && (r.value.fallbackRoot = s);
    },
    get fallbackFormat() {
      return r.value ? r.value.fallbackFormat : k;
    },
    set fallbackFormat(s) {
      r.value && (r.value.fallbackFormat = s);
    },
    get warnHtmlMessage() {
      return r.value ? r.value.warnHtmlMessage : _;
    },
    set warnHtmlMessage(s) {
      r.value && (r.value.warnHtmlMessage = s);
    },
    get escapeParameter() {
      return r.value ? r.value.escapeParameter : N;
    },
    set escapeParameter(s) {
      r.value && (r.value.escapeParameter = s);
    },
    t: Z,
    getPostTranslationHandler: se,
    setPostTranslationHandler: Ee,
    getMissingHandler: W,
    setMissingHandler: Q,
    rt: U,
    d: R,
    n: C,
    tm: G,
    te: fe,
    getLocaleMessage: he,
    setLocaleMessage: Me,
    mergeLocaleMessage: Ye,
    getDateTimeFormat: Be,
    setDateTimeFormat: it,
    mergeDateTimeFormat: ut,
    getNumberFormat: ct,
    setNumberFormat: ze,
    mergeNumberFormat: dt
  };
  function i(s) {
    s.locale.value = u.value, s.fallbackLocale.value = c.value, Object.keys(v.value).forEach((g) => {
      s.mergeLocaleMessage(g, v.value[g]);
    }), Object.keys(L.value).forEach((g) => {
      s.mergeDateTimeFormat(g, L.value[g]);
    }), Object.keys(y.value).forEach((g) => {
      s.mergeNumberFormat(g, y.value[g]);
    }), s.escapeParameter = N, s.fallbackFormat = k, s.fallbackRoot = P, s.fallbackWarn = T, s.missingWarn = h, s.warnHtmlMessage = _;
  }
  return $a(() => {
    if (e.proxy == null || e.proxy.$i18n == null)
      throw Qe(ce.NOT_AVAILABLE_COMPOSITION_IN_LEGACY);
    const s = r.value = e.proxy.$i18n.__composer;
    t === "global" ? (u.value = s.locale.value, c.value = s.fallbackLocale.value, v.value = s.messages.value, L.value = s.datetimeFormats.value, y.value = s.numberFormats.value) : l && i(s);
  }), yt;
}
ms();
__INTLIFY_JIT_COMPILATION__ ? Vn(ss) : Vn(ls);
Ql(Pl);
Zl(ca);
if (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) {
  const e = qe();
  e.__INTLIFY__ = !0, Bl(e.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__);
}
process.env.NODE_ENV;
const Ss = { class: "flex flex-col gap-2" }, Ds = { class: "flex items-center gap-2 relative pt-2" }, Ps = { class: "flex items-center gap-2" }, Rs = /* @__PURE__ */ m("span", { class: "p4-b" }, "平台", -1), Ms = /* @__PURE__ */ m("option", {
  value: "",
  disabled: ""
}, "請選擇", -1), xs = ["value"], ws = {
  key: 0,
  class: "flex items-center gap-2"
}, Vs = /* @__PURE__ */ m("span", { class: "p4-b" }, "層級", -1), Fs = /* @__PURE__ */ m("option", {
  value: "",
  disabled: ""
}, "請選擇", -1), $s = ["value"], Us = {
  key: 1,
  class: "flex items-center gap-2"
}, Bs = /* @__PURE__ */ m("span", { class: "p4-b" }, "目標", -1), js = /* @__PURE__ */ m("option", {
  value: "",
  disabled: ""
}, "請選擇", -1), Gs = ["value"], Hs = {
  key: 0,
  class: "flex flex-col"
}, Ws = /* @__PURE__ */ m("span", { class: "p4-b" }, "指定目標", -1), Ys = { key: 0 }, Ks = {
  key: 0,
  class: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full flex justify-center items-center bg-dark-3 rounded bg-opacity-50 z-[2]"
}, Xs = { class: "relative bg-light-5 rounded-xs shadow-01 w-4/5 p-4 min-h-[300px] h-fit" }, qs = /* @__PURE__ */ m("span", { class: "p1-b flex justify-center mb-1" }, "請選擇目標", -1), Js = { class: "flex flex-col gap-2 mt-2" }, Qs = ["onClick"], Zs = { class: "flex flex-col flex-1" }, zs = { class: "p3-b" }, eo = { class: "p4-r" }, to = {
  key: 2,
  class: "flex flex-col gap-2"
}, no = { class: "flex items-center gap-2" }, ao = /* @__PURE__ */ m("span", { class: "p4-b" }, "執行", -1), ro = /* @__PURE__ */ m("option", {
  value: "",
  disabled: ""
}, "請選擇", -1), lo = ["value"], so = {
  key: 0,
  class: "flex gap-x-2 gap-y-3 flex-wrap"
}, oo = { class: "flex items-center gap-2" }, io = /* @__PURE__ */ m("span", { class: "p4-b" }, "類型", -1), uo = /* @__PURE__ */ m("option", {
  value: "",
  disabled: ""
}, "請選擇", -1), co = ["value"], fo = {
  key: 0,
  class: "flex items-center gap-2"
}, mo = /* @__PURE__ */ m("span", { class: "p4-b" }, "調整", -1), _o = /* @__PURE__ */ m("option", {
  value: "",
  disabled: ""
}, "請選擇", -1), po = ["value"], go = {
  key: 1,
  class: "flex items-center gap-2"
}, vo = { class: "flex items-center gap-2" }, bo = /* @__PURE__ */ m("span", { class: "p4-b" }, "類型", -1), Eo = /* @__PURE__ */ m("option", {
  value: "",
  disabled: ""
}, "請選擇", -1), ho = ["value"], No = {
  key: 0,
  class: "flex items-center gap-2"
}, Oo = /* @__PURE__ */ m("span", { class: "p4-b" }, "調整", -1), Lo = /* @__PURE__ */ m("option", {
  value: "",
  disabled: ""
}, "請選擇", -1), Io = ["value"], yo = {
  key: 1,
  class: "flex items-center gap-2"
}, ko = {
  key: 2,
  class: "flex items-center gap-2 w-full"
}, Co = { class: "flex flex-col gap-2" }, To = { class: "flex items-center gap-2" }, Ao = /* @__PURE__ */ m("label", { for: "maxBudget" }, "設定預算上限", -1), So = {
  key: 0,
  class: "flex gap-2 items-center"
}, Do = /* @__PURE__ */ m("span", null, "元", -1), Po = { class: "flex items-center gap-2" }, Ro = /* @__PURE__ */ m("span", { class: "p4-b" }, "類型", -1), Mo = /* @__PURE__ */ m("option", {
  value: "",
  disabled: ""
}, "請選擇", -1), xo = ["value"], wo = {
  key: 0,
  class: "flex items-center gap-2"
}, Vo = /* @__PURE__ */ m("span", { class: "p4-b" }, "調整", -1), Fo = /* @__PURE__ */ m("option", {
  value: "",
  disabled: ""
}, "請選擇", -1), $o = ["value"], Uo = {
  key: 1,
  class: "flex items-center gap-2"
}, Bo = {
  key: 2,
  class: "flex items-center gap-2 w-full"
}, jo = { class: "flex flex-col gap-2" }, Go = { class: "flex items-center gap-2" }, Ho = /* @__PURE__ */ m("label", {
  for: "maxBudget",
  class: "p3-b"
}, "設定預算下限", -1), Wo = {
  key: 0,
  class: "flex gap-2 items-center"
}, Yo = /* @__PURE__ */ m("span", null, "元", -1), He = "", Ko = /* @__PURE__ */ Ce({
  __name: "EventAction",
  setup(e) {
    const { t } = Gt(), a = Rt("eventData"), n = q(a.value.action ?? {}), l = q(!!Object.keys(n.value).length), r = q(!1);
    De(r, (U) => {
      var R, C, G, fe, he;
      (R = n.value.params) != null && R.limit || (G = (C = n.value) == null ? void 0 : C.params) == null || delete G.limit, U || (he = (fe = n.value) == null ? void 0 : fe.params) == null || delete he.limit;
    }), ea(() => {
      var U, R, C, G, fe;
      ((U = n.value) == null ? void 0 : U.action) == F.SetNewBudget || ((R = n.value) == null ? void 0 : R.action) == F.IncreaseBudget || ((C = n.value) == null ? void 0 : C.action) == F.LowerBudget || delete n.value.params, r.value = !!((fe = (G = n.value) == null ? void 0 : G.params) != null && fe.limit);
    }), De(
      n,
      (U) => {
        a.value.action = U;
      },
      { deep: !0 }
    );
    const o = X(() => {
      var U;
      return ((U = a.value.action) == null ? void 0 : U.client) == be.Google ? xe : Pe;
    }), u = {
      [be.Google]: {
        [xe.Campaign]: {
          SetNewBudget: F.SetNewBudget,
          IncreaseBudget: F.IncreaseBudget,
          LowerBudget: F.LowerBudget,
          OpenProject: F.OpenProject,
          SuspendProject: F.SuspendProject,
          None: F.None
        },
        [xe.AdGroup]: {
          SuspendProject: F.SuspendProject,
          None: F.None
        },
        [xe.AdTag]: {
          SuspendProject: F.SuspendProject,
          None: F.None
        },
        [xe.Ad]: {
          SuspendProject: F.SuspendProject,
          None: F.None
        }
      },
      [be.Facebook]: {
        [Pe.Campaign]: {
          SetNewBudget: F.SetNewBudget,
          IncreaseBudget: F.IncreaseBudget,
          LowerBudget: F.LowerBudget,
          OpenProject: F.OpenProject,
          SuspendProject: F.SuspendProject,
          None: F.None
        },
        [Pe.AdGroup]: {
          SetNewBudget: F.SetNewBudget,
          IncreaseBudget: F.IncreaseBudget,
          LowerBudget: F.LowerBudget,
          OpenProject: F.OpenProject,
          SuspendProject: F.SuspendProject,
          None: F.None
        },
        [Pe.AdTag]: {
          SuspendProject: F.SuspendProject,
          None: F.None
        },
        [Pe.Ad]: {
          SuspendProject: F.SuspendProject,
          None: F.None
        }
      }
    }, c = X(() => {
      var C, G;
      const U = (C = n.value) == null ? void 0 : C.client, R = (G = n.value) == null ? void 0 : G.adLevel;
      if (U && R) {
        const fe = u[U];
        if (fe) {
          const he = fe[R];
          if (he)
            return he;
        }
      }
      return {};
    }), v = {
      [be.Google]: {
        [xe.Campaign]: {
          [F.SetNewBudget]: [$.Value],
          [F.IncreaseBudget]: [$.Percentage, $.Value],
          [F.LowerBudget]: [$.Percentage, $.Value],
          [F.OpenProject]: [$.Percentage, $.Value],
          [F.SuspendProject]: [$.Percentage, $.Value],
          [F.None]: [$.Percentage, $.Value]
        },
        [xe.AdGroup]: {
          [F.SuspendProject]: [$.Percentage, $.Value],
          [F.None]: [$.Percentage, $.Value]
        },
        [xe.AdTag]: {
          [F.SuspendProject]: [$.Percentage, $.Value],
          [F.None]: [$.Percentage, $.Value]
        },
        [xe.Ad]: {
          [F.SuspendProject]: [$.Percentage, $.Value],
          [F.None]: [$.Percentage, $.Value]
        }
      },
      [be.Facebook]: {
        [Pe.Campaign]: {
          [F.SetNewBudget]: [$.Value],
          [F.IncreaseBudget]: [$.Percentage, $.Value],
          [F.LowerBudget]: [$.Percentage, $.Value],
          [F.OpenProject]: [$.Percentage, $.Value],
          [F.SuspendProject]: [$.Percentage, $.Value],
          [F.None]: [$.Percentage, $.Value]
        },
        [Pe.AdGroup]: {
          [F.SetNewBudget]: [$.Value],
          [F.IncreaseBudget]: [$.Percentage, $.Value],
          [F.LowerBudget]: [$.Percentage, $.Value],
          [F.OpenProject]: [$.Percentage, $.Value],
          [F.SuspendProject]: [$.Percentage, $.Value],
          [F.None]: [$.Percentage, $.Value]
        },
        [Pe.AdTag]: {
          [F.SuspendProject]: [$.Percentage, $.Value],
          [F.None]: [$.Percentage, $.Value]
        },
        [Pe.Ad]: {
          [F.SuspendProject]: [$.Percentage, $.Value],
          [F.None]: [$.Percentage, $.Value]
        }
      }
    }, L = X(() => {
      var G, fe, he;
      const U = (G = n.value) == null ? void 0 : G.client, R = (fe = n.value) == null ? void 0 : fe.adLevel, C = (he = n.value) == null ? void 0 : he.action;
      if (U && R && C) {
        const Me = v[U];
        if (Me) {
          const Ye = Me[R];
          if (Ye) {
            const Be = Ye[C];
            if (Be)
              return Be;
          }
        }
      }
      return [$.Percentage, $.Value];
    }), y = X(() => n.value.client ? n.value.client : ""), h = (U) => {
      n.value.client = Number(U.target.value), delete n.value.target;
    }, T = X(() => n.value.adLevel ? n.value.adLevel : ""), P = (U) => {
      n.value.adLevel = Number(U.target.value), delete n.value.action, delete n.value.target;
    }, k = X(() => n.value.targetType ? n.value.targetType : ""), A = (U) => {
      n.value.targetType = Number(U.target.value), delete n.value.action, delete n.value.target;
    }, f = X(() => n.value.action ? n.value.action : ""), _ = (U) => n.value.action = Number(U.target.value), N = X(() => {
      var U;
      return (U = n.value) != null && U.params || (n.value.params = {}), n.value.params.budgetType ? n.value.params.budgetType : "";
    }), b = (U) => n.value.params.budgetType = U.target.value, S = X(() => {
      var U;
      return (U = n.value) != null && U.params || (n.value.params = {}), n.value.params.valueType ? n.value.params.valueType : "";
    }), O = (U) => n.value.params.valueType = U.target.value, w = q(!1), J = (U) => {
      var C;
      (C = n.value) != null && C.target || (n.value.target = []);
      const R = n.value.target.findIndex(
        (G) => G.id === U.id
      );
      R === -1 ? n.value.target.push(U) : n.value.target.splice(R, 1);
    }, ee = q(), ie = async () => {
      ee.value = [
        { id: 1, name: "qwe" },
        { id: 2, name: "asd" },
        { id: 3, name: "zxc" },
        { id: 4, name: "rty" },
        { id: 5, name: "bgfb" }
      ];
    }, Le = X(() => "name"), se = X(() => {
      const U = W.value.toLowerCase();
      return ee.value.filter(
        (R) => R[Le.value].toLowerCase().includes(U)
      );
    }), Ee = async () => {
      await ie(), w.value = !0;
    }, W = q(""), Q = () => {
      n.value.target = se.value;
    }, M = q(!1);
    $t(() => {
      M.value = !0;
    });
    const Z = () => {
      l.value = !1, n.value = {}, Ba(() => {
        delete a.value.action;
      });
    };
    return X(() => {
      const U = y.value, R = n.value.adLevel, C = N.value;
      console.log("object");
      const G = U === be.Google && R === xe.Campaign, fe = U === be.Facebook && R === Pe.Campaign, he = U === be.Facebook && R === Pe.AdGroup, Me = G || fe || he, Ye = C === Et.DailyBudget ? "日預算" : "總預算", Be = `${be[U]}${o.value[R]}`, it = Me ? `若${t(Be)}設定為${Ye}，則不會變更` : "";
      return { show: Me, msg: it };
    }), (U, R) => d(l) ? (p(), We(At, {
      key: 1,
      title: "動作"
    }, {
      default: Je(() => [
        m("div", Ss, [
          m("div", Ds, [
            m("div", {
              class: "cursor-pointer text-dark-4 absolute -top-2.5 -right-1.5 p4-b",
              onClick: Z
            }, " 刪除 "),
            m("label", Ps, [
              Rs,
              ue(m("select", {
                class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
                "onUpdate:modelValue": R[1] || (R[1] = (C) => ne(y) ? y.value = C : null),
                onChange: h,
                required: ""
              }, [
                Ms,
                (p(!0), E(j, null, re(d(be), (C, G) => (p(), E(j, { key: G }, [
                  Number.isInteger(C) ? B("", !0) : (p(), E("option", {
                    key: 0,
                    value: G
                  }, z(C), 9, xs))
                ], 64))), 128))
              ], 544), [
                [_e, d(y)]
              ])
            ]),
            d(y) != He ? (p(), E("label", ws, [
              Vs,
              ue(m("select", {
                class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
                "onUpdate:modelValue": R[2] || (R[2] = (C) => ne(T) ? T.value = C : null),
                onChange: P,
                required: ""
              }, [
                Fs,
                (p(!0), E(j, null, re(d(o), (C, G) => (p(), E(j, { key: G }, [
                  Number.isInteger(C) ? B("", !0) : (p(), E("option", {
                    key: 0,
                    value: G
                  }, z(U.$t(`${d(be)[d(y)]}${C}`)), 9, $s))
                ], 64))), 128))
              ], 544), [
                [_e, d(T)]
              ])
            ])) : B("", !0),
            d(T) != He ? (p(), E("label", Us, [
              Bs,
              ue(m("select", {
                class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
                "onUpdate:modelValue": R[3] || (R[3] = (C) => ne(k) ? k.value = C : null),
                onChange: A,
                required: ""
              }, [
                js,
                (p(!0), E(j, null, re(d(rt), (C, G) => (p(), E(j, { key: G }, [
                  Number.isInteger(C) ? B("", !0) : (p(), E("option", {
                    key: 0,
                    value: G
                  }, z(U.$t(C)), 9, Gs))
                ], 64))), 128))
              ], 544), [
                [_e, d(k)]
              ])
            ])) : B("", !0)
          ]),
          d(k) === d(rt).ForID ? (p(), E("div", Hs, [
            m("label", { class: "flex items-center gap-2" }, [
              Ws,
              m("div", {
                class: "p4-r px-1.5 py-0.5 text-true-blue-2 rounded bg-true-blue-5 flex w-fit cursor-pointer hover:bg-true-blue-4",
                onClick: Ee
              }, " 編輯 ")
            ]),
            d(k) === d(rt).ForID ? (p(), E("div", Ys, [
              (p(!0), E(j, null, re(d(n).target, (C, G) => (p(), E("span", {
                class: "p4-r text-true-blue-3 px-0.5",
                key: C.id
              }, z(C.name) + z(G !== d(n).target.length - 1 ? "," : ""), 1))), 128))
            ])) : B("", !0)
          ])) : B("", !0),
          d(M) ? (p(), We(ra, {
            key: 1,
            to: "#editor-container"
          }, [
            d(w) ? (p(), E("div", Ks, [
              m("div", Xs, [
                m("div", {
                  class: "absolute top-1 right-2 cursor-pointer",
                  onClick: R[4] || (R[4] = (C) => w.value = !1)
                }, " X "),
                qs,
                me($e, {
                  modelValue: d(W),
                  "onUpdate:modelValue": R[5] || (R[5] = (C) => ne(W) ? W.value = C : null)
                }, null, 8, ["modelValue"]),
                m("div", {
                  class: "mt-2 flex w-full justify-end p4-b text-true-blue-3",
                  onClick: Q
                }, " 全選 "),
                m("div", Js, [
                  (p(!0), E(j, null, re(d(se), (C) => {
                    var G;
                    return p(), E("div", {
                      class: "border border-dark-5 rounded py-1 px-3 flex gap-1 hover:border-transparent hover:bg-true-blue-5 cursor-pointer",
                      key: C.id,
                      onClick: (fe) => J(C)
                    }, [
                      m("div", Zs, [
                        m("span", zs, z(C.id), 1),
                        m("span", eo, z(C.name), 1)
                      ]),
                      m("div", {
                        class: la(["rounded h-3 w-3 border", [
                          d(n).target && (G = d(n)) != null && G.target.find((fe) => fe.id === C.id) ? "bg-red-1" : ""
                        ]])
                      }, null, 2)
                    ], 8, Qs);
                  }), 128))
                ])
              ])
            ])) : B("", !0)
          ])) : B("", !0),
          d(k) !== He ? (p(), E("div", to, [
            m("label", no, [
              ao,
              ue(m("select", {
                class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
                "onUpdate:modelValue": R[6] || (R[6] = (C) => ne(f) ? f.value = C : null),
                onChange: _,
                required: ""
              }, [
                ro,
                (p(!0), E(j, null, re(d(c), (C, G) => (p(), E("option", {
                  key: G,
                  value: C
                }, z(U.$t(G)), 9, lo))), 128))
              ], 544), [
                [_e, d(f)]
              ])
            ]),
            d(T) != He ? (p(), E("div", so, [
              d(n).action == d(F).SetNewBudget ? (p(), E(j, { key: 0 }, [
                m("label", oo, [
                  io,
                  ue(m("select", {
                    class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
                    "onUpdate:modelValue": R[7] || (R[7] = (C) => ne(N) ? N.value = C : null),
                    onChange: b,
                    required: ""
                  }, [
                    uo,
                    (p(!0), E(j, null, re(d(Et), (C, G) => (p(), E(j, { key: G }, [
                      Number.isInteger(C) ? B("", !0) : (p(), E("option", {
                        key: 0,
                        value: C
                      }, z(U.$t(C)), 9, co))
                    ], 64))), 128))
                  ], 544), [
                    [_e, d(N)]
                  ])
                ]),
                d(N) != He ? (p(), E("label", fo, [
                  mo,
                  ue(m("select", {
                    class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
                    "onUpdate:modelValue": R[8] || (R[8] = (C) => ne(S) ? S.value = C : null),
                    onChange: O,
                    required: ""
                  }, [
                    _o,
                    (p(!0), E(j, null, re(d(L), (C, G) => (p(), E("option", {
                      key: G,
                      value: C
                    }, z(U.$t(`action${C}`)), 9, po))), 128))
                  ], 544), [
                    [_e, d(S)]
                  ])
                ])) : B("", !0),
                d(S) != He ? (p(), E("label", go, [
                  me($e, {
                    modelValue: d(n).params.value,
                    "onUpdate:modelValue": R[9] || (R[9] = (C) => d(n).params.value = C),
                    type: "number",
                    required: !0
                  }, null, 8, ["modelValue"]),
                  m("span", null, z(d(n).params.valueType === d($).Percentage ? "%" : "元"), 1)
                ])) : B("", !0)
              ], 64)) : d(n).action == d(F).IncreaseBudget ? (p(), E(j, { key: 1 }, [
                m("label", vo, [
                  bo,
                  ue(m("select", {
                    class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
                    "onUpdate:modelValue": R[10] || (R[10] = (C) => ne(N) ? N.value = C : null),
                    onChange: b,
                    required: ""
                  }, [
                    Eo,
                    (p(!0), E(j, null, re(d(Et), (C, G) => (p(), E(j, { key: G }, [
                      Number.isInteger(C) ? B("", !0) : (p(), E("option", {
                        key: 0,
                        value: C
                      }, z(U.$t(C)), 9, ho))
                    ], 64))), 128))
                  ], 544), [
                    [_e, d(N)]
                  ])
                ]),
                d(N) != He ? (p(), E("label", No, [
                  Oo,
                  ue(m("select", {
                    class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
                    "onUpdate:modelValue": R[11] || (R[11] = (C) => ne(S) ? S.value = C : null),
                    onChange: O,
                    required: ""
                  }, [
                    Lo,
                    (p(!0), E(j, null, re(d(L), (C, G) => (p(), E("option", {
                      key: G,
                      value: C
                    }, z(U.$t(`action${C}`)), 9, Io))), 128))
                  ], 544), [
                    [_e, d(S)]
                  ])
                ])) : B("", !0),
                d(S) != He ? (p(), E("label", yo, [
                  me($e, {
                    modelValue: d(n).params.value,
                    "onUpdate:modelValue": R[12] || (R[12] = (C) => d(n).params.value = C),
                    type: "number",
                    required: !0
                  }, null, 8, ["modelValue"]),
                  m("span", null, z(d(n).params.valueType === d($).Percentage ? "%" : "元"), 1)
                ])) : B("", !0),
                d(n).params.valueType === d($).Percentage ? (p(), E("label", ko, [
                  m("div", Co, [
                    m("div", To, [
                      ue(m("input", {
                        type: "checkbox",
                        "onUpdate:modelValue": R[13] || (R[13] = (C) => ne(r) ? r.value = C : null),
                        id: "maxBudget"
                      }, null, 512), [
                        [Vt, d(r)]
                      ]),
                      Ao,
                      d(r) ? (p(), E("div", So, [
                        me($e, {
                          modelValue: d(n).params.limit,
                          "onUpdate:modelValue": R[14] || (R[14] = (C) => d(n).params.limit = C),
                          type: "number",
                          required: !0
                        }, null, 8, ["modelValue"]),
                        Do
                      ])) : B("", !0)
                    ])
                  ])
                ])) : B("", !0)
              ], 64)) : d(n).action == d(F).LowerBudget ? (p(), E(j, { key: 2 }, [
                m("label", Po, [
                  Ro,
                  ue(m("select", {
                    class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
                    "onUpdate:modelValue": R[15] || (R[15] = (C) => ne(N) ? N.value = C : null),
                    onChange: b,
                    required: ""
                  }, [
                    Mo,
                    (p(!0), E(j, null, re(d(Et), (C, G) => (p(), E(j, { key: G }, [
                      Number.isInteger(C) ? B("", !0) : (p(), E("option", {
                        key: 0,
                        value: C
                      }, z(U.$t(C)), 9, xo))
                    ], 64))), 128))
                  ], 544), [
                    [_e, d(N)]
                  ])
                ]),
                d(N) != He ? (p(), E("label", wo, [
                  Vo,
                  ue(m("select", {
                    class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
                    "onUpdate:modelValue": R[16] || (R[16] = (C) => ne(S) ? S.value = C : null),
                    onChange: O
                  }, [
                    Fo,
                    (p(!0), E(j, null, re(d(L), (C, G) => (p(), E("option", {
                      key: G,
                      value: C
                    }, z(U.$t(`action${C}`)), 9, $o))), 128))
                  ], 544), [
                    [_e, d(S)]
                  ])
                ])) : B("", !0),
                d(S) != He ? (p(), E("label", Uo, [
                  me($e, {
                    modelValue: d(n).params.value,
                    "onUpdate:modelValue": R[17] || (R[17] = (C) => d(n).params.value = C),
                    type: "number",
                    required: !0
                  }, null, 8, ["modelValue"]),
                  m("span", null, z(d(n).params.valueType === d($).Percentage ? "%" : "元"), 1)
                ])) : B("", !0),
                d(n).params.valueType === d($).Percentage ? (p(), E("div", Bo, [
                  m("div", jo, [
                    m("div", Go, [
                      ue(m("input", {
                        type: "checkbox",
                        "onUpdate:modelValue": R[18] || (R[18] = (C) => ne(r) ? r.value = C : null),
                        id: "maxBudget"
                      }, null, 512), [
                        [Vt, d(r)]
                      ]),
                      Ho,
                      d(r) ? (p(), E("div", Wo, [
                        me($e, {
                          modelValue: d(n).params.limit,
                          "onUpdate:modelValue": R[19] || (R[19] = (C) => d(n).params.limit = C),
                          type: "number",
                          required: !0
                        }, null, 8, ["modelValue"]),
                        Yo
                      ])) : B("", !0)
                    ])
                  ])
                ])) : B("", !0)
              ], 64)) : B("", !0)
            ])) : B("", !0)
          ])) : B("", !0)
        ])
      ]),
      _: 1
    })) : (p(), E("div", {
      key: 0,
      class: "p3-b text-true-blue-3 flex ml-auto w-fit cursor-pointer hover:text-true-blue-2",
      onClick: R[0] || (R[0] = (C) => l.value = !0)
    }, " + 加入動作 "));
  }
}), Xo = { class: "flex flex-col gap-2 relative pt-2" }, qo = { class: "flex items-center gap-2" }, Jo = { class: "flex items-center gap-2" }, Qo = /* @__PURE__ */ m("span", { class: "p3-b" }, "平台", -1), Zo = /* @__PURE__ */ m("option", {
  value: "",
  disabled: ""
}, "請選擇", -1), zo = ["value"], ei = {
  key: 0,
  class: "flex items-center gap-2"
}, ti = /* @__PURE__ */ m("span", { class: "p3-b" }, "層級", -1), ni = /* @__PURE__ */ m("option", {
  value: "",
  disabled: ""
}, "請選擇", -1), ai = ["value"], ri = {
  key: 1,
  class: "flex items-center gap-2"
}, li = /* @__PURE__ */ m("span", { class: "p4-b" }, "目標", -1), si = /* @__PURE__ */ m("option", {
  value: "",
  disabled: ""
}, "請選擇", -1), oi = ["value"], ii = {
  key: 0,
  class: "flex flex-col"
}, ui = /* @__PURE__ */ m("span", { class: "p4-b" }, "指定目標", -1), ci = { key: 0 }, di = {
  key: 0,
  class: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full flex justify-center items-center bg-dark-3 rounded bg-opacity-50 z-[2]"
}, fi = { class: "relative bg-light-5 rounded-xs shadow-01 w-4/5 p-4 min-h-[300px] h-fit" }, mi = /* @__PURE__ */ m("span", { class: "p1-b flex justify-center mb-1" }, "請選擇目標", -1), _i = { class: "flex flex-col gap-2 mt-2" }, pi = ["onClick"], gi = { class: "flex flex-col flex-1" }, vi = { class: "p3-b" }, bi = { class: "p4-r" }, Ei = {
  key: 2,
  class: "flex items-center gap-1"
}, hi = /* @__PURE__ */ m("span", { class: "p3-b" }, "條件", -1), Ni = /* @__PURE__ */ m("option", {
  value: "",
  disabled: ""
}, "請選擇", -1), Oi = ["value"], Li = {
  key: 3,
  class: "flex gap-2 flex-wrap"
}, Ii = { class: "flex gap-2" }, yi = { class: "flex items-center gap-1" }, ki = /* @__PURE__ */ m("span", { class: "p3-b" }, "運算", -1), Ci = /* @__PURE__ */ m("option", {
  value: "",
  disabled: ""
}, "請選擇", -1), Ti = ["value"], Ai = { key: 0 }, Si = ["onClick"], Di = {
  key: 0,
  class: "flex items-center gap-1"
}, Pi = /* @__PURE__ */ m("option", {
  value: "",
  disabled: ""
}, "請選擇", -1), Ri = ["value"], Mi = {
  key: 1,
  class: "flex items-center gap-1"
}, xi = /* @__PURE__ */ m("option", {
  value: "",
  disabled: ""
}, "請選擇", -1), wi = ["value"], Vi = {
  key: 4,
  class: "flex items-center gap-2"
}, Fi = /* @__PURE__ */ m("label", { for: "comparison" }, "加入比較區間", -1), nt = "", $i = /* @__PURE__ */ Ce({
  __name: "ConditionItem",
  props: {
    modelValue: {},
    index: {}
  },
  emits: ["update:modelValue", "removeItem"],
  setup(e, { emit: t }) {
    const a = e, n = X(() => a.modelValue ?? {}), l = X(() => {
      var W;
      return ((W = n.value) == null ? void 0 : W.client) == be.Google ? vt : bt;
    }), r = X(() => n.value.client ? n.value.client : ""), o = (W) => n.value.client = Number(W.target.value), u = X(() => n.value.adLevel ? n.value.adLevel : ""), c = (W) => {
      n.value.adLevel = Number(W.target.value), y.value != nt && t("update:modelValue", {
        client: r.value,
        adLevel: u.value
      });
    }, v = X(() => n.value.targetType ? n.value.targetType : ""), L = (W) => {
      n.value.targetType = Number(W.target.value), delete n.value.action, delete n.value.target;
    }, y = X(() => n.value.conditionType ? n.value.conditionType : ""), h = (W) => n.value.conditionType = W.target.value, T = X(() => n.value.dateRangeType ? n.value.dateRangeType : ""), P = (W) => {
      n.value.dateRangeType = Number(W.target.value), Number(W.target.value) !== Tt.SpecifiedTime && delete n.value.dateRange;
    }, k = X(() => n.value.operation ? n.value.operation : ""), A = (W) => n.value.operation = W.target.value, f = X(() => n.value.valueType ? n.value.valueType : ""), _ = (W) => n.value.valueType = W.target.value, N = {
      [be.Google]: {
        [vt.Campaign]: {
          Clicks: Y.Clicks,
          Impressions: Y.Impressions,
          Cpc: Y.Cpc,
          Spend: Y.Spend,
          Conversions: Y.Conversions,
          ConversionSpend: Y.ConversionSpend,
          ReturnOnADSpending: Y.ReturnOnADSpending
        },
        [vt.AdGroup]: {
          Clicks: Y.Clicks,
          Impressions: Y.Impressions,
          Cpc: Y.Cpc,
          Spend: Y.Spend,
          Conversions: Y.Conversions,
          ConversionSpend: Y.ConversionSpend,
          ReturnOnADSpending: Y.ReturnOnADSpending
        },
        [vt.Account]: {
          BudgetRemaining: Y.BudgetRemaining,
          Clicks: Y.Clicks,
          Impressions: Y.Impressions,
          Cpc: Y.Cpc,
          Spend: Y.Spend,
          Conversions: Y.Conversions,
          ConversionSpend: Y.ConversionSpend,
          ReturnOnADSpending: Y.ReturnOnADSpending
        }
      },
      [be.Facebook]: {
        [bt.Campaign]: {
          Clicks: Y.Clicks,
          BudgetCap: Y.BudgetCap,
          Impressions: Y.Impressions,
          Cpc: Y.Cpc,
          Spend: Y.Spend,
          Conversions: Y.Conversions,
          ConversionSpend: Y.ConversionSpend,
          ReturnOnADSpending: Y.ReturnOnADSpending
        },
        [bt.AdGroup]: {
          Clicks: Y.Clicks,
          Impressions: Y.Impressions,
          Cpc: Y.Cpc,
          Spend: Y.Spend,
          Conversions: Y.Conversions,
          ConversionSpend: Y.ConversionSpend,
          ReturnOnADSpending: Y.ReturnOnADSpending
        },
        [bt.Account]: {
          BudgetRemaining: Y.BudgetRemaining,
          Clicks: Y.Clicks,
          Impressions: Y.Impressions,
          Cpc: Y.Cpc,
          Spend: Y.Spend,
          Conversions: Y.Conversions,
          ConversionSpend: Y.ConversionSpend,
          ReturnOnADSpending: Y.ReturnOnADSpending
        }
      }
    }, b = X(() => {
      if (r.value && u.value) {
        const W = N[r.value];
        if (W) {
          const Q = W[u.value];
          if (Q)
            return Q;
        }
      }
      return {};
    }), S = q(!1), O = (W) => {
      var M;
      (M = n.value) != null && M.target || (n.value.target = []);
      const Q = n.value.target.findIndex(
        (Z) => Z.id === W.id
      );
      Q === -1 ? n.value.target.push(W) : n.value.target.splice(Q, 1);
    }, w = q(), J = async () => {
      w.value = [
        { id: 1, name: "qwe" },
        { id: 2, name: "asd" },
        { id: 3, name: "zxc" },
        { id: 4, name: "rty" },
        { id: 5, name: "bgfb" }
      ];
    }, ee = X(() => "name"), ie = X(() => {
      const W = se.value.toLowerCase();
      return w.value.filter(
        (Q) => Q[ee.value].toLowerCase().includes(W)
      );
    }), Le = async () => {
      await J(), S.value = !0;
    }, se = q(""), Ee = q(!1);
    return $t(() => {
      Ee.value = !0;
    }), (W, Q) => (p(), We(At, {
      title: "條件" + (W.index + 1)
    }, {
      default: Je(() => [
        m("div", Xo, [
          m("div", {
            class: "cursor-pointer text-dark-4 absolute -top-2.5 -right-1.5 p4-b",
            onClick: Q[0] || (Q[0] = (M) => t("removeItem"))
          }, " 刪除 "),
          m("div", qo, [
            m("label", Jo, [
              Qo,
              ue(m("select", {
                class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
                "onUpdate:modelValue": Q[1] || (Q[1] = (M) => ne(r) ? r.value = M : null),
                onChange: o,
                required: ""
              }, [
                Zo,
                (p(!0), E(j, null, re(d(be), (M, Z) => (p(), E(j, { key: Z }, [
                  Number.isInteger(M) ? B("", !0) : (p(), E("option", {
                    key: 0,
                    value: Z
                  }, z(M), 9, zo))
                ], 64))), 128))
              ], 544), [
                [_e, d(r)]
              ])
            ]),
            d(r) != nt ? (p(), E("label", ei, [
              ti,
              ue(m("select", {
                class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
                "onUpdate:modelValue": Q[2] || (Q[2] = (M) => ne(u) ? u.value = M : null),
                onChange: c,
                required: ""
              }, [
                ni,
                (p(!0), E(j, null, re(d(l), (M, Z) => (p(), E(j, { key: Z }, [
                  Number.isInteger(M) ? B("", !0) : (p(), E("option", {
                    key: 0,
                    value: Z
                  }, z(W.$t(`${d(be)[d(r)]}${M}`)), 9, ai))
                ], 64))), 128))
              ], 544), [
                [_e, d(u)]
              ])
            ])) : B("", !0),
            d(u) != nt ? (p(), E("label", ri, [
              li,
              ue(m("select", {
                class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
                "onUpdate:modelValue": Q[3] || (Q[3] = (M) => ne(v) ? v.value = M : null),
                onChange: L,
                required: ""
              }, [
                si,
                (p(!0), E(j, null, re(d(rt), (M, Z) => (p(), E(j, { key: Z }, [
                  Number.isInteger(M) ? B("", !0) : (p(), E("option", {
                    key: 0,
                    value: Z
                  }, z(W.$t(M)), 9, oi))
                ], 64))), 128))
              ], 544), [
                [_e, d(v)]
              ])
            ])) : B("", !0)
          ]),
          d(v) === d(rt).ForID ? (p(), E("div", ii, [
            m("label", { class: "flex items-center gap-2" }, [
              ui,
              m("div", {
                class: "p4-r px-1.5 py-0.5 text-true-blue-2 rounded bg-true-blue-5 flex w-fit cursor-pointer hover:bg-true-blue-4",
                onClick: Le
              }, " 編輯 ")
            ]),
            d(v) === d(rt).ForID ? (p(), E("div", ci, [
              (p(!0), E(j, null, re(d(n).target, (M, Z) => (p(), E("span", {
                class: "p4-r text-true-blue-3 px-0.5",
                key: M.id
              }, z(M.name) + z(Z !== d(n).target.length - 1 ? "," : ""), 1))), 128))
            ])) : B("", !0)
          ])) : B("", !0),
          d(Ee) ? (p(), We(ra, {
            key: 1,
            to: "#editor-container"
          }, [
            d(S) ? (p(), E("div", di, [
              m("div", fi, [
                m("div", {
                  class: "absolute top-1 right-2 cursor-pointer",
                  onClick: Q[4] || (Q[4] = (M) => S.value = !1)
                }, " X "),
                mi,
                me($e, {
                  modelValue: d(se),
                  "onUpdate:modelValue": Q[5] || (Q[5] = (M) => ne(se) ? se.value = M : null)
                }, null, 8, ["modelValue"]),
                m("div", _i, [
                  (p(!0), E(j, null, re(d(ie), (M) => {
                    var Z;
                    return p(), E("div", {
                      class: "border border-dark-5 rounded py-1 px-3 flex gap-1 hover:border-transparent hover:bg-true-blue-5 cursor-pointer",
                      key: M.id,
                      onClick: (U) => O(M)
                    }, [
                      m("div", gi, [
                        m("span", vi, z(M.id), 1),
                        m("span", bi, z(M.name), 1)
                      ]),
                      m("div", {
                        class: la(["rounded h-3 w-3 border", [
                          d(n).target && (Z = d(n)) != null && Z.target.find((U) => U.id === M.id) ? "bg-red-1" : ""
                        ]])
                      }, null, 2)
                    ], 8, pi);
                  }), 128))
                ])
              ])
            ])) : B("", !0)
          ])) : B("", !0),
          d(v) != nt ? (p(), E("label", Ei, [
            hi,
            ue(m("select", {
              class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
              "onUpdate:modelValue": Q[6] || (Q[6] = (M) => ne(y) ? y.value = M : null),
              onChange: h,
              required: ""
            }, [
              Ni,
              (p(!0), E(j, null, re(d(b), (M, Z) => (p(), E("option", {
                key: Z,
                value: M
              }, z(W.$t(Z)), 9, Oi))), 128))
            ], 544), [
              [_e, d(y)]
            ])
          ])) : B("", !0),
          d(y) != nt ? (p(), E("div", Li, [
            m("div", Ii, [
              m("label", yi, [
                ki,
                ue(m("select", {
                  class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
                  "onUpdate:modelValue": Q[7] || (Q[7] = (M) => ne(T) ? T.value = M : null),
                  onChange: P,
                  required: ""
                }, [
                  Ci,
                  (p(!0), E(j, null, re(d(Tt), (M, Z) => (p(), E(j, { key: Z }, [
                    Number.isInteger(M) ? B("", !0) : (p(), E("option", {
                      key: 0,
                      value: Z
                    }, z(W.$t(M)), 9, Ti))
                  ], 64))), 128))
                ], 544), [
                  [_e, d(T)]
                ])
              ]),
              d(T) == d(Tt).SpecifiedTime ? (p(), E("div", Ai, [
                me(d(sn), {
                  modelValue: d(n).dateRange,
                  "onUpdate:modelValue": Q[8] || (Q[8] = (M) => d(n).dateRange = M),
                  modelModifiers: { range: !0 },
                  mode: "date"
                }, {
                  default: Je(({ togglePopover: M, inputValue: Z }) => [
                    m("button", {
                      class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 transition-all hover:bg-light-3 hover:bg-opacity-50",
                      onClick: M
                    }, z(Z.start && Z.end ? `${Z.start}-${Z.end}` : "請選定執行日期"), 9, Si)
                  ]),
                  _: 1
                }, 8, ["modelValue"])
              ])) : B("", !0)
            ]),
            d(T) != "" ? (p(), E("label", Di, [
              ue(m("select", {
                class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
                "onUpdate:modelValue": Q[9] || (Q[9] = (M) => ne(k) ? k.value = M : null),
                onChange: A,
                required: ""
              }, [
                Pi,
                (p(!0), E(j, null, re(d(on), (M, Z) => (p(), E(j, { key: Z }, [
                  Number.isInteger(M) ? B("", !0) : (p(), E("option", {
                    key: 0,
                    value: M
                  }, z(W.$t(Z)), 9, Ri))
                ], 64))), 128))
              ], 544), [
                [_e, d(k)]
              ])
            ])) : B("", !0),
            d(k) != nt ? (p(), E("label", Mi, [
              ue(m("select", {
                class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
                "onUpdate:modelValue": Q[10] || (Q[10] = (M) => ne(f) ? f.value = M : null),
                onChange: _,
                required: ""
              }, [
                xi,
                (p(!0), E(j, null, re(d($), (M, Z) => (p(), E(j, { key: Z }, [
                  Number.isInteger(M) ? B("", !0) : (p(), E("option", {
                    key: 0,
                    value: M
                  }, z(W.$t(`condition${Z}`)), 9, wi))
                ], 64))), 128))
              ], 544), [
                [_e, d(f)]
              ])
            ])) : B("", !0),
            d(f) != nt ? (p(), We($e, {
              key: 2,
              modelValue: d(n).value,
              "onUpdate:modelValue": Q[11] || (Q[11] = (M) => d(n).value = M),
              type: "number",
              required: !0
            }, null, 8, ["modelValue"])) : B("", !0)
          ])) : B("", !0),
          d(y) != nt ? (p(), E("div", Vi, [
            ue(m("input", {
              type: "checkbox",
              "onUpdate:modelValue": Q[12] || (Q[12] = (M) => W.modelValue.comparison = M),
              id: "comparison"
            }, null, 512), [
              [Vt, W.modelValue.comparison]
            ]),
            Fi
          ])) : B("", !0)
        ])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), Ui = {
  key: 0,
  class: "flex items-center justify-center gap-3"
}, Bi = /* @__PURE__ */ m("div", { class: "h-[1px] flex-1 bg-light-3" }, null, -1), ji = /* @__PURE__ */ m("p", { class: "p4-b to-dark-4" }, "且", -1), Gi = /* @__PURE__ */ m("div", { class: "h-[1px] flex-1 bg-light-3" }, null, -1), Hi = [
  Bi,
  ji,
  Gi
], Wi = {
  key: 0,
  class: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full flex justify-center items-center bg-dark-3 rounded bg-opacity-50 z-[2]"
}, Yi = { class: "relative bg-light-5 rounded-xs shadow-01 w-4/5 p-4" }, Ki = /* @__PURE__ */ m("span", { class: "p1-b flex justify-center mb-1" }, "請選擇條件", -1), Xi = /* @__PURE__ */ ja('<div class="flex flex-col gap-2 mt-2"><div class="border border-dark-5 rounded py-1 px-3 flex gap-1 hover:border-transparent hover:bg-true-blue-5 cursor-pointer"><div class="flex flex-col flex-1"><span class="p3-b">當帳戶剩餘預算 小於指定金額，執行動作</span><span class="p4-r">ex: 帳戶剩餘預算小於 1000 元</span></div><div class="flex justify-center items-center">O</div></div></div>', 1), qi = /* @__PURE__ */ Ce({
  __name: "Condition",
  setup(e) {
    const t = q(!1), a = Rt("eventData"), n = q(a.value.conditions ?? []);
    De(
      n,
      (o) => {
        a.value.conditions = o;
      },
      { deep: !0 }
    );
    const l = () => {
      n.value.push({}), t.value = !1;
    }, r = (o) => {
      n.value.splice(o, 1);
    };
    return (o, u) => (p(), E(j, null, [
      (p(!0), E(j, null, re(d(n), (c, v) => (p(), E(j, { key: v }, [
        me($i, {
          index: v,
          modelValue: d(n)[v],
          "onUpdate:modelValue": (L) => d(n)[v] = L,
          onRemoveItem: (L) => r(v)
        }, null, 8, ["index", "modelValue", "onUpdate:modelValue", "onRemoveItem"]),
        v + 1 !== d(n).length ? (p(), E("div", Ui, Hi)) : B("", !0)
      ], 64))), 128)),
      m("div", {
        class: "p3-b text-true-blue-3 flex ml-auto w-fit cursor-pointer hover:text-true-blue-2",
        onClick: u[0] || (u[0] = (c) => t.value = !d(t))
      }, " + 加入條件 "),
      d(t) ? (p(), E("div", Wi, [
        m("div", Yi, [
          m("div", {
            class: "absolute top-1 right-2 cursor-pointer",
            onClick: u[1] || (u[1] = (c) => t.value = !1)
          }, " X "),
          Ki,
          me($e),
          Xi,
          m("div", {
            class: "border ml-auto mt-2 border-true-blue-3 text-true-blue-3 rounded px-1 w-fit p3-r cursor-pointer hover:text-true-blue-2 hover:border-true-blue-2",
            onClick: l
          }, " 自訂 ")
        ])
      ])) : B("", !0)
    ], 64));
  }
}), Ji = { class: "flex items-center gap-2" }, Qi = /* @__PURE__ */ m("span", { class: "p4-b" }, "以電子郵件寄出結果", -1), Zi = /* @__PURE__ */ m("option", {
  value: "-2",
  disabled: ""
}, "請選擇", -1), zi = ["value"], eu = /* @__PURE__ */ Ce({
  __name: "Notification",
  setup(e) {
    const t = Rt("eventData"), a = q(
      t.value.notification ?? {
        email: -2
      }
    );
    return $t(() => {
      a.value.email === -2 && (a.value.email = 0);
    }), De(
      a,
      (n) => {
        t.value.notification = n;
      },
      { deep: !0 }
    ), (n, l) => (p(), E("div", null, [
      m("label", Ji, [
        Qi,
        ue(m("select", {
          class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
          "onUpdate:modelValue": l[0] || (l[0] = (r) => d(a).email = r)
        }, [
          Zi,
          (p(!0), E(j, null, re(d(un), (r, o) => (p(), E(j, { key: o }, [
            Number.isInteger(r) ? B("", !0) : (p(), E("option", {
              key: 0,
              value: Number(o)
            }, z(n.$t(`mail${r}`)), 9, zi))
          ], 64))), 128))
        ], 512), [
          [_e, d(a).email]
        ])
      ])
    ]));
  }
}), Pa = (e) => (Ha("data-v-227c6f0b"), e = e(), Wa(), e), tu = ["onSubmit"], nu = /* @__PURE__ */ Pa(() => /* @__PURE__ */ m("div", { class: "p1-b" }, "建立自動化規則", -1)), au = /* @__PURE__ */ Pa(() => /* @__PURE__ */ m("span", { class: "p4-b" }, "規則名稱*", -1)), ru = {
  key: 0,
  class: "text-red-1"
}, lu = 100, su = /* @__PURE__ */ Ce({
  __name: "TCEventEditorApp",
  props: {
    data: {}
  },
  emits: ["update:data"],
  setup(e, { expose: t, emit: a }) {
    const n = e, l = X(() => JSON.parse(n.data || "{}")), r = (L) => {
      const y = Object.fromEntries(
        Object.entries(L).filter(([h, T]) => T !== null)
      );
      return JSON.stringify(y, null, 4);
    }, o = q([]), u = (L) => {
      L.preventDefault(), a("update:data", r(l.value));
    }, c = (L) => {
      var y;
      (y = v.value) == null || y.click();
    };
    Nn("eventData", l), Nn("checkDataValid", o);
    const v = q();
    return t({
      saveData: c
    }), (L, y) => n.data ? (p(), E("form", {
      key: 0,
      class: "p-5 rounded border flex flex-col gap-5 relative",
      id: "editor-container",
      onSubmit: Ga(u, ["prevent"])
    }, [
      nu,
      me(At, { title: "基本資料" }, {
        default: Je(() => [
          m("div", null, [
            au,
            me($e, {
              modelValue: d(l).title,
              "onUpdate:modelValue": y[0] || (y[0] = (h) => d(l).title = h),
              maxLength: lu,
              required: !0
            }, null, 8, ["modelValue"])
          ])
        ]),
        _: 1
      }),
      me(At, { title: "執行時間" }, {
        default: Je(() => [
          me(Mr, {
            frequency: d(l).frequency,
            "onUpdate:frequency": y[1] || (y[1] = (h) => d(l).frequency = h),
            interval: d(l).interval,
            "onUpdate:interval": y[2] || (y[2] = (h) => d(l).interval = h)
          }, null, 8, ["frequency", "interval"])
        ]),
        _: 1
      }),
      me(At, { title: "通知" }, {
        default: Je(() => [
          me(eu)
        ]),
        _: 1
      }),
      me(Ko),
      me(qi),
      d(o).length ? (p(), E("span", ru, "資料未填寫完整")) : B("", !0),
      m("button", {
        ref_key: "submitBtn",
        ref: v,
        class: "p-2 px-3 rounded bg-slate-100 hover:bg-sky-500 hover:text-white"
      }, " 保存 ", 512)
    ], 40, tu)) : B("", !0);
  }
});
const pu = /* @__PURE__ */ cn(su, [["__scopeId", "data-v-227c6f0b"]]), ou = { class: "bg-white p-3 rounded-xl flex w-4/5 min-h-[80%] max-h-96" }, iu = { class: "flex flex-col gap-2 py-2 px-4" }, uu = /* @__PURE__ */ m("div", { class: "w-[1px] h-auto bg-dark-4" }, null, -1), cu = /* @__PURE__ */ m("div", { class: "flex-1 h-auto bg-red-1" }, null, -1), gu = /* @__PURE__ */ Ce({
  __name: "QuickSetup",
  setup(e) {
    const t = q(!1), a = () => {
      t.value = !0;
    }, n = q(["選擇平台", "執行動作", "設定條件", "執行時間"]);
    return (l, r) => {
      const o = Ya("vue-final-modal");
      return p(), E("div", null, [
        me(o, {
          modelValue: d(t),
          "onUpdate:modelValue": r[0] || (r[0] = (u) => ne(t) ? t.value = u : null),
          "content-class": "flex h-full w-full justify-center items-center",
          "hide-overlay": !1,
          "esc-to-close": !0,
          "click-to-close": !0
        }, {
          default: Je(() => [
            m("div", ou, [
              m("div", iu, [
                (p(!0), E(j, null, re(d(n), (u, c) => (p(), E("div", {
                  key: u,
                  class: "flex flex-col"
                }, [
                  m("span", null, " Step." + z(c + 1), 1),
                  m("span", null, z(u), 1)
                ]))), 128))
              ]),
              uu,
              cu
            ])
          ]),
          _: 1
        }, 8, ["modelValue"]),
        m("div", { onClick: a }, [
          na(l.$slots, "default")
        ])
      ]);
    };
  }
});
export {
  gu as QuickSetup,
  pu as TCEventEditorApp,
  _u as TCEventItems,
  mu as setApiUrlBase
};
