import { defineComponent as N, computed as B, openBlock as I, createElementBlock as J, createElementVNode as u, toDisplayString as L, createCommentVNode as h } from "vue";
class j {
  // 取得列舉索引
  getEnumKey(t, s) {
    return t[s];
  }
  // 從字串解析事件本身
  parseItem(t) {
    return JSON.parse(t);
  }
  getCurrent() {
    return (/* @__PURE__ */ new Date()).toISOString();
  }
}
var l = /* @__PURE__ */ ((r) => (r[r.Google = 1] = "Google", r[r.Facebook = 2] = "Facebook", r))(l || {}), m = /* @__PURE__ */ ((r) => (r[r.Campaign = 1] = "Campaign", r[r.AdGroup = 2] = "AdGroup", r[r.Ad = 3] = "Ad", r[r.AdTag = 4] = "AdTag", r))(m || {}), c = /* @__PURE__ */ ((r) => (r[r.Hour = 1] = "Hour", r[r.Day = 2] = "Day", r[r.Week = 3] = "Week", r[r.Month = 4] = "Month", r[r.Annual = 5] = "Annual", r[r.Never = -1] = "Never", r))(c || {}), i = /* @__PURE__ */ ((r) => (r[r.Monday = 1] = "Monday", r[r.Tuesday = 2] = "Tuesday", r[r.Wednesday = 3] = "Wednesday", r[r.Thursday = 4] = "Thursday", r[r.Friday = 5] = "Friday", r[r.Saturday = 6] = "Saturday", r[r.Sunday = 7] = "Sunday", r[r.Weekday = -1] = "Weekday", r[r.Weekend = -2] = "Weekend", r))(i || {}), v = /* @__PURE__ */ ((r) => (r[r.First = 1] = "First", r[r.Second = 2] = "Second", r[r.Third = 3] = "Third", r[r.Fourth = 4] = "Fourth", r[r.Fifth = 5] = "Fifth", r[r.Last = -1] = "Last", r))(v || {}), S = /* @__PURE__ */ ((r) => (r[r.January = 1] = "January", r[r.February = 2] = "February", r[r.March = 3] = "March", r[r.April = 4] = "April", r[r.May = 5] = "May", r[r.June = 6] = "June", r[r.July = 7] = "July", r[r.August = 8] = "August", r[r.September = 9] = "September", r[r.October = 10] = "October", r[r.November = 11] = "November", r[r.December = 12] = "December", r))(S || {}), d = /* @__PURE__ */ ((r) => (r[r.SetNewBudget = 1] = "SetNewBudget", r[r.IncreaseBudget = 2] = "IncreaseBudget", r[r.LowerBudget = 3] = "LowerBudget", r[r.OpenProject = 4] = "OpenProject", r[r.SuspendProject = 5] = "SuspendProject", r[r.None = -1] = "None", r))(d || {}), n = /* @__PURE__ */ ((r) => (r.DailyBudget = "dailyBudget", r.TotalBudget = "totalBudget", r))(n || {}), _ = /* @__PURE__ */ ((r) => (r.Value = "value", r.Percentage = "percentage", r))(_ || {}), b = /* @__PURE__ */ ((r) => (r.BudgetRemaining = "budgetRemaining", r.Impressions = "impressions", r.Spent = "spent", r.Conversions = "conversions", r.ReturnOnADSpending = "roas", r.Clicks = "clicks", r))(b || {}), g = /* @__PURE__ */ ((r) => (r[r.Today = 1] = "Today", r[r.Yesterday = 2] = "Yesterday", r[r.Last3Days = 3] = "Last3Days", r[r.Last7Days = 4] = "Last7Days", r[r.ThisMonth = 5] = "ThisMonth", r[r.LastMonth = 6] = "LastMonth", r[r.ThisSeason = 7] = "ThisSeason", r[r.LastSeason = 8] = "LastSeason", r[r.ThisYear = 9] = "ThisYear", r[r.LastYear = 10] = "LastYear", r[r.SpecifiedTime = -1] = "SpecifiedTime", r))(g || {}), E = /* @__PURE__ */ ((r) => (r.MoreThan = ">", r.GreaterOrEqualTo = ">=", r.Equal = "==", r.LessThan = "<", r.LessThanOrEqualTo = "<=", r))(E || {});
const H = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ActionType: d,
  AdLevelType: m,
  BudgetType: n,
  ClientType: l,
  ConditionType: b,
  DateRangeType: g,
  EventHelper: j,
  FrequencyType: c,
  MonthType: S,
  OperationType: E,
  ValueType: _,
  WeekOrdinalWordsType: v,
  WeekdaysType: i
}, Symbol.toStringTag, { value: "Module" })), w = {
  key: 0,
  class: "p-5 rounded-lg border space-y-5"
}, P = /* @__PURE__ */ u("div", null, "TC Event Editor is loaded.", -1), Y = /* @__PURE__ */ u("div", null, "變更內容", -1), G = ["value"], K = /* @__PURE__ */ N({
  __name: "TCEventEditorApp",
  props: {
    data: {}
  },
  emits: ["updateItem"],
  setup(r, { emit: t }) {
    const s = r, a = B(() => JSON.parse(s.data || "{}")), f = (o) => {
      o.target && (a.value.title = o.target.value, t("updateItem", JSON.stringify(a.value, null, 4)));
    };
    return (o, x) => s.data ? (I(), J("div", w, [
      P,
      u("pre", null, [
        u("code", null, "item title: " + L(a.value.title), 1)
      ]),
      Y,
      u("input", {
        type: "text",
        class: "form-input w-full",
        onKeyup: f,
        value: a.value.title
      }, null, 40, G)
    ])) : h("", !0);
  }
});
export {
  K as TCEventEditorApp,
  H as TCEventItems
};
