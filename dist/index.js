import { defineComponent as h, ref as g, watch as N, openBlock as a, createElementBlock as e, createElementVNode as r, withDirectives as b, Fragment as f, renderList as x, unref as m, toDisplayString as _, createCommentVNode as S, vModelSelect as E, computed as U, vModelText as $, createVNode as C } from "vue";
class F {
  // 取得列舉索引
  getEnumKey(n, o) {
    return n[o];
  }
  // 從字串解析事件本身
  parseItem(n) {
    return JSON.parse(n);
  }
  getCurrent() {
    return (/* @__PURE__ */ new Date()).toISOString();
  }
}
var B = /* @__PURE__ */ ((t) => (t[t.Google = 1] = "Google", t[t.Facebook = 2] = "Facebook", t))(B || {}), I = /* @__PURE__ */ ((t) => (t[t.Campaign = 1] = "Campaign", t[t.AdGroup = 2] = "AdGroup", t[t.Ad = 3] = "Ad", t[t.AdTag = 4] = "AdTag", t))(I || {}), i = /* @__PURE__ */ ((t) => (t[t.Never = -1] = "Never", t[t.Hour = 1] = "Hour", t[t.Day = 2] = "Day", t[t.Week = 3] = "Week", t[t.Month = 4] = "Month", t[t.Annual = 5] = "Annual", t))(i || {}), w = /* @__PURE__ */ ((t) => (t[t.Monday = 1] = "Monday", t[t.Tuesday = 2] = "Tuesday", t[t.Wednesday = 3] = "Wednesday", t[t.Thursday = 4] = "Thursday", t[t.Friday = 5] = "Friday", t[t.Saturday = 6] = "Saturday", t[t.Sunday = 7] = "Sunday", t[t.Weekday = -1] = "Weekday", t[t.Weekend = -2] = "Weekend", t))(w || {}), L = /* @__PURE__ */ ((t) => (t[t.First = 1] = "First", t[t.Second = 2] = "Second", t[t.Third = 3] = "Third", t[t.Fourth = 4] = "Fourth", t[t.Fifth = 5] = "Fifth", t[t.Last = -1] = "Last", t))(L || {}), J = /* @__PURE__ */ ((t) => (t[t.January = 1] = "January", t[t.February = 2] = "February", t[t.March = 3] = "March", t[t.April = 4] = "April", t[t.May = 5] = "May", t[t.June = 6] = "June", t[t.July = 7] = "July", t[t.August = 8] = "August", t[t.September = 9] = "September", t[t.October = 10] = "October", t[t.November = 11] = "November", t[t.December = 12] = "December", t))(J || {}), j = /* @__PURE__ */ ((t) => (t[t.SetNewBudget = 1] = "SetNewBudget", t[t.IncreaseBudget = 2] = "IncreaseBudget", t[t.LowerBudget = 3] = "LowerBudget", t[t.OpenProject = 4] = "OpenProject", t[t.SuspendProject = 5] = "SuspendProject", t[t.None = -1] = "None", t))(j || {}), P = /* @__PURE__ */ ((t) => (t.DailyBudget = "dailyBudget", t.TotalBudget = "totalBudget", t))(P || {}), V = /* @__PURE__ */ ((t) => (t.Value = "value", t.Percentage = "percentage", t))(V || {}), Y = /* @__PURE__ */ ((t) => (t.BudgetRemaining = "budgetRemaining", t.Impressions = "impressions", t.Spent = "spent", t.Conversions = "conversions", t.ReturnOnADSpending = "roas", t.Clicks = "clicks", t))(Y || {}), q = /* @__PURE__ */ ((t) => (t[t.Today = 1] = "Today", t[t.Yesterday = 2] = "Yesterday", t[t.Last3Days = 3] = "Last3Days", t[t.Last7Days = 4] = "Last7Days", t[t.ThisMonth = 5] = "ThisMonth", t[t.LastMonth = 6] = "LastMonth", t[t.ThisSeason = 7] = "ThisSeason", t[t.LastSeason = 8] = "LastSeason", t[t.ThisYear = 9] = "ThisYear", t[t.LastYear = 10] = "LastYear", t[t.SpecifiedTime = -1] = "SpecifiedTime", t))(q || {}), G = /* @__PURE__ */ ((t) => (t.MoreThan = ">", t.GreaterOrEqualTo = ">=", t.Equal = "==", t.LessThan = "<", t.LessThanOrEqualTo = "<=", t))(G || {});
const st = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ActionType: j,
  AdLevelType: I,
  BudgetType: P,
  ClientType: B,
  ConditionType: Y,
  DateRangeType: q,
  EventHelper: F,
  FrequencyType: i,
  MonthType: J,
  OperationType: G,
  ValueType: V,
  WeekOrdinalWordsType: L,
  WeekdaysType: w
}, Symbol.toStringTag, { value: "Module" })), H = { class: "space-y-3" }, K = { class: "flex space-x-1" }, z = { class: "flex items-center gap-1" }, Q = /* @__PURE__ */ r("span", null, "重複", -1), X = ["value"], Z = /* @__PURE__ */ r("option", { value: 0 }, "自訂", -1), O = {
  key: 0,
  class: "flex flex-col space-y-3"
}, A = { class: "flex items-center gap-1" }, M = /* @__PURE__ */ r("span", null, "頻率", -1), D = ["value"], k = { class: "flex items-center space-x-1" }, R = /* @__PURE__ */ r("span", null, "every", -1), W = ["value"], p = /* @__PURE__ */ h({
  __name: "RepeatFrequency",
  props: {
    frequency: {},
    interval: {}
  },
  emits: ["update:frequency", "update:interval"],
  setup(t, { emit: n }) {
    const o = t, u = g(o.frequency);
    N(u, (c) => {
      i[c] && n("update:frequency", c);
    });
    const d = g(o.frequency);
    return N(d, (c) => n("update:frequency", c)), (c, l) => (a(), e("div", H, [
      r("div", K, [
        r("label", z, [
          Q,
          b(r("select", {
            class: "form-select",
            "onUpdate:modelValue": l[0] || (l[0] = (s) => u.value = s)
          }, [
            (a(!0), e(f, null, x(m(i), (s, v) => (a(), e(f, { key: v }, [
              Number.isInteger(s) ? (a(), e("option", {
                key: 0,
                value: s
              }, _(v), 9, X)) : S("", !0)
            ], 64))), 128)),
            Z
          ], 512), [
            [E, u.value]
          ])
        ])
      ]),
      m(i)[u.value] == null ? (a(), e("div", O, [
        r("label", A, [
          M,
          b(r("select", {
            class: "form-select",
            "onUpdate:modelValue": l[1] || (l[1] = (s) => d.value = s)
          }, [
            (a(!0), e(f, null, x(m(i), (s, v) => (a(), e(f, { key: v }, [
              s != m(i).Never && Number.isInteger(s) ? (a(), e("option", {
                key: 0,
                value: s
              }, _(v), 9, D)) : S("", !0)
            ], 64))), 128))
          ], 512), [
            [E, d.value]
          ])
        ]),
        r("label", k, [
          R,
          r("input", {
            type: "text",
            class: "form-input w-full",
            onKeyup: l[2] || (l[2] = (s) => c.$emit("update:interval", s.target.value)),
            value: o.interval
          }, null, 40, W),
          r("span", null, _(m(i)[d.value]), 1)
        ])
      ])) : S("", !0)
    ]));
  }
}), y = {
  key: 0,
  class: "p-5 rounded-lg border space-y-5"
}, T = /* @__PURE__ */ r("div", null, "TC Event Editor is loaded.", -1), tt = /* @__PURE__ */ r("span", null, "變更標題", -1), ut = /* @__PURE__ */ h({
  __name: "TCEventEditorApp",
  props: {
    data: {}
  },
  emits: ["updateItem"],
  setup(t, { emit: n }) {
    const o = t, u = U(() => JSON.parse(o.data || "{}")), d = () => n("updateItem", JSON.stringify(u.value, null, 4));
    return (c, l) => o.data ? (a(), e("div", y, [
      T,
      r("pre", null, [
        r("code", null, "item title: " + _(u.value.title), 1)
      ]),
      r("div", null, [
        r("label", null, [
          tt,
          b(r("input", {
            type: "text",
            class: "form-input w-full",
            "onUpdate:modelValue": l[0] || (l[0] = (s) => u.value.title = s)
          }, null, 512), [
            [$, u.value.title]
          ])
        ])
      ]),
      C(p, {
        frequency: u.value.frequency,
        "onUpdate:frequency": l[1] || (l[1] = (s) => u.value.frequency = s),
        interval: u.value.interval,
        "onUpdate:interval": l[2] || (l[2] = (s) => u.value.interval = s)
      }, null, 8, ["frequency", "interval"]),
      r("button", {
        onClick: d,
        class: "p-2 px-3 rounded-lg bg-slate-100 hover:bg-sky-500 hover:text-white"
      }, "保存")
    ])) : S("", !0);
  }
});
export {
  ut as TCEventEditorApp,
  st as TCEventItems
};