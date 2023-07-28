import { defineComponent as h, ref as g, watch as x, openBlock as o, createElementBlock as i, createElementVNode as r, withDirectives as b, Fragment as f, renderList as N, unref as _, toDisplayString as m, createCommentVNode as S, vModelSelect as E, computed as U, vModelText as $, createVNode as F, pushScopeId as H, popScopeId as K } from "vue";
class z {
  // 取得列舉索引
  getEnumKey(l, e) {
    return l[e];
  }
  // 從字串解析事件本身
  parseItem(l) {
    return JSON.parse(l);
  }
  getCurrent() {
    return (/* @__PURE__ */ new Date()).toISOString();
  }
}
var I = /* @__PURE__ */ ((t) => (t[t.Google = 1] = "Google", t[t.Facebook = 2] = "Facebook", t))(I || {}), B = /* @__PURE__ */ ((t) => (t[t.Campaign = 1] = "Campaign", t[t.AdGroup = 2] = "AdGroup", t[t.Ad = 3] = "Ad", t[t.AdTag = 4] = "AdTag", t))(B || {}), c = /* @__PURE__ */ ((t) => (t[t.Never = -1] = "Never", t[t.Hour = 1] = "Hour", t[t.Day = 2] = "Day", t[t.Week = 3] = "Week", t[t.Month = 4] = "Month", t[t.Annual = 5] = "Annual", t))(c || {}), w = /* @__PURE__ */ ((t) => (t[t.Monday = 1] = "Monday", t[t.Tuesday = 2] = "Tuesday", t[t.Wednesday = 3] = "Wednesday", t[t.Thursday = 4] = "Thursday", t[t.Friday = 5] = "Friday", t[t.Saturday = 6] = "Saturday", t[t.Sunday = 7] = "Sunday", t[t.Weekday = -1] = "Weekday", t[t.Weekend = -2] = "Weekend", t))(w || {}), L = /* @__PURE__ */ ((t) => (t[t.First = 1] = "First", t[t.Second = 2] = "Second", t[t.Third = 3] = "Third", t[t.Fourth = 4] = "Fourth", t[t.Fifth = 5] = "Fifth", t[t.Last = -1] = "Last", t))(L || {}), J = /* @__PURE__ */ ((t) => (t[t.January = 1] = "January", t[t.February = 2] = "February", t[t.March = 3] = "March", t[t.April = 4] = "April", t[t.May = 5] = "May", t[t.June = 6] = "June", t[t.July = 7] = "July", t[t.August = 8] = "August", t[t.September = 9] = "September", t[t.October = 10] = "October", t[t.November = 11] = "November", t[t.December = 12] = "December", t))(J || {}), j = /* @__PURE__ */ ((t) => (t[t.SetNewBudget = 1] = "SetNewBudget", t[t.IncreaseBudget = 2] = "IncreaseBudget", t[t.LowerBudget = 3] = "LowerBudget", t[t.OpenProject = 4] = "OpenProject", t[t.SuspendProject = 5] = "SuspendProject", t[t.None = -1] = "None", t))(j || {}), P = /* @__PURE__ */ ((t) => (t.DailyBudget = "dailyBudget", t.TotalBudget = "totalBudget", t))(P || {}), V = /* @__PURE__ */ ((t) => (t.Value = "value", t.Percentage = "percentage", t))(V || {}), Y = /* @__PURE__ */ ((t) => (t.BudgetRemaining = "budgetRemaining", t.Impressions = "impressions", t.Spent = "spent", t.Conversions = "conversions", t.ReturnOnADSpending = "roas", t.Clicks = "clicks", t))(Y || {}), q = /* @__PURE__ */ ((t) => (t[t.Today = 1] = "Today", t[t.Yesterday = 2] = "Yesterday", t[t.Last3Days = 3] = "Last3Days", t[t.Last7Days = 4] = "Last7Days", t[t.ThisMonth = 5] = "ThisMonth", t[t.LastMonth = 6] = "LastMonth", t[t.ThisSeason = 7] = "ThisSeason", t[t.LastSeason = 8] = "LastSeason", t[t.ThisYear = 9] = "ThisYear", t[t.LastYear = 10] = "LastYear", t[t.SpecifiedTime = -1] = "SpecifiedTime", t))(q || {}), C = /* @__PURE__ */ ((t) => (t.MoreThan = ">", t.GreaterOrEqualTo = ">=", t.Equal = "==", t.LessThan = "<", t.LessThanOrEqualTo = "<=", t))(C || {});
const nt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ActionType: j,
  AdLevelType: B,
  BudgetType: P,
  ClientType: I,
  ConditionType: Y,
  DateRangeType: q,
  EventHelper: z,
  FrequencyType: c,
  MonthType: J,
  OperationType: C,
  ValueType: V,
  WeekOrdinalWordsType: L,
  WeekdaysType: w
}, Symbol.toStringTag, { value: "Module" })), Q = { class: "space-y-3" }, X = { class: "flex space-x-1" }, Z = { class: "flex items-center gap-1" }, O = /* @__PURE__ */ r("span", null, "重複", -1), A = ["value"], M = /* @__PURE__ */ r("option", { value: 0 }, "自訂", -1), D = {
  key: 0,
  class: "flex flex-col space-y-3"
}, k = { class: "flex items-center gap-1" }, R = /* @__PURE__ */ r("span", null, "頻率", -1), p = ["value"], W = { class: "flex items-center space-x-1" }, y = /* @__PURE__ */ r("span", null, "every", -1), T = ["value"], tt = /* @__PURE__ */ h({
  __name: "RepeatFrequency",
  props: {
    frequency: {},
    interval: {}
  },
  emits: ["update:frequency", "update:interval"],
  setup(t, { emit: l }) {
    const e = t, u = g(0);
    e.interval == 1 && (u.value = e.frequency), x(u, (d) => {
      c[d] && (l("update:frequency", d), l("update:interval", 1), n.value = u.value);
    });
    const n = g(e.frequency);
    return x(n, (d) => l("update:frequency", d)), (d, a) => (o(), i("div", Q, [
      r("div", X, [
        r("label", Z, [
          O,
          b(r("select", {
            class: "form-select",
            "onUpdate:modelValue": a[0] || (a[0] = (s) => u.value = s)
          }, [
            (o(!0), i(f, null, N(_(c), (s, v) => (o(), i(f, { key: v }, [
              Number.isInteger(s) ? (o(), i("option", {
                key: 0,
                value: s
              }, m(v), 9, A)) : S("", !0)
            ], 64))), 128)),
            M
          ], 512), [
            [E, u.value]
          ])
        ])
      ]),
      _(c)[u.value] == null ? (o(), i("div", D, [
        r("label", k, [
          R,
          b(r("select", {
            class: "form-select",
            "onUpdate:modelValue": a[1] || (a[1] = (s) => n.value = s)
          }, [
            (o(!0), i(f, null, N(_(c), (s, v) => (o(), i(f, { key: v }, [
              s != _(c).Never && Number.isInteger(s) ? (o(), i("option", {
                key: 0,
                value: s
              }, m(v), 9, p)) : S("", !0)
            ], 64))), 128))
          ], 512), [
            [E, n.value]
          ])
        ]),
        r("label", W, [
          y,
          r("input", {
            type: "text",
            class: "form-input w-full",
            onKeyup: a[2] || (a[2] = (s) => d.$emit("update:interval", s.target.value)),
            value: e.interval
          }, null, 40, T),
          r("span", null, m(_(c)[n.value]), 1)
        ])
      ])) : S("", !0)
    ]));
  }
}), G = (t) => (H("data-v-f94af63a"), t = t(), K(), t), rt = {
  key: 0,
  class: "p-5 rounded-lg border space-y-5"
}, st = /* @__PURE__ */ G(() => /* @__PURE__ */ r("div", null, "TC Event Editor is loaded.", -1)), ut = /* @__PURE__ */ G(() => /* @__PURE__ */ r("span", null, "變更標題", -1)), at = /* @__PURE__ */ h({
  __name: "TCEventEditorApp",
  props: {
    data: {}
  },
  emits: ["update:data"],
  setup(t, { emit: l }) {
    const e = t, u = U(() => JSON.parse(e.data || "{}")), n = () => l("update:data", JSON.stringify(u.value, null, 4));
    return (d, a) => e.data ? (o(), i("div", rt, [
      st,
      r("pre", null, [
        r("code", null, "item title: " + m(u.value.title), 1)
      ]),
      r("div", null, [
        r("label", null, [
          ut,
          b(r("input", {
            type: "text",
            class: "form-input w-full",
            "onUpdate:modelValue": a[0] || (a[0] = (s) => u.value.title = s)
          }, null, 512), [
            [$, u.value.title]
          ])
        ])
      ]),
      F(tt, {
        frequency: u.value.frequency,
        "onUpdate:frequency": a[1] || (a[1] = (s) => u.value.frequency = s),
        interval: u.value.interval,
        "onUpdate:interval": a[2] || (a[2] = (s) => u.value.interval = s)
      }, null, 8, ["frequency", "interval"]),
      r("button", {
        onClick: n,
        class: "p-2 px-3 rounded-lg bg-slate-100 hover:bg-sky-500 hover:text-white"
      }, "保存")
    ])) : S("", !0);
  }
});
const et = (t, l) => {
  const e = t.__vccOpts || t;
  for (const [u, n] of l)
    e[u] = n;
  return e;
}, ot = /* @__PURE__ */ et(at, [["__scopeId", "data-v-f94af63a"]]);
export {
  ot as TCEventEditorApp,
  nt as TCEventItems
};
