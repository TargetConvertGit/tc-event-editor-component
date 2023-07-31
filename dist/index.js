import { defineComponent as h, openBlock as o, createElementBlock as d, toDisplayString as b, ref as I, watch as N, inject as G, withDirectives as S, createElementVNode as e, unref as _, vModelText as Q, Fragment as g, renderList as E, createCommentVNode as f, vModelSelect as w, createVNode as p, computed as X, provide as Z, pushScopeId as O, popScopeId as A } from "vue";
function St(t) {
}
class D {
  // 取得列舉索引
  getEnumKey(s, u) {
    return s[u];
  }
  // 從字串解析事件本身
  parseItem(s) {
    return JSON.parse(s);
  }
  getCurrent() {
    return (/* @__PURE__ */ new Date()).toISOString();
  }
}
var V = /* @__PURE__ */ ((t) => (t[t.Google = 1] = "Google", t[t.Facebook = 2] = "Facebook", t))(V || {}), B = /* @__PURE__ */ ((t) => (t[t.Campaign = 1] = "Campaign", t[t.AdGroup = 2] = "AdGroup", t[t.Ad = 3] = "Ad", t[t.AdTag = 4] = "AdTag", t))(B || {}), j = /* @__PURE__ */ ((t) => (t[t.Campaign = 1] = "Campaign", t[t.AdGroup = 2] = "AdGroup", t[t.Ad = 3] = "Ad", t[t.AdTag = 4] = "AdTag", t))(j || {}), v = /* @__PURE__ */ ((t) => (t[t.Never = -1] = "Never", t[t.Hour = 1] = "Hour", t[t.Day = 2] = "Day", t[t.Week = 3] = "Week", t[t.Month = 4] = "Month", t[t.Annual = 5] = "Annual", t))(v || {}), J = /* @__PURE__ */ ((t) => (t[t.Monday = 1] = "Monday", t[t.Tuesday = 2] = "Tuesday", t[t.Wednesday = 3] = "Wednesday", t[t.Thursday = 4] = "Thursday", t[t.Friday = 5] = "Friday", t[t.Saturday = 6] = "Saturday", t[t.Sunday = 7] = "Sunday", t[t.Weekday = -1] = "Weekday", t[t.Weekend = -2] = "Weekend", t))(J || {}), $ = /* @__PURE__ */ ((t) => (t[t.First = 1] = "First", t[t.Second = 2] = "Second", t[t.Third = 3] = "Third", t[t.Fourth = 4] = "Fourth", t[t.Fifth = 5] = "Fifth", t[t.Last = -1] = "Last", t))($ || {}), U = /* @__PURE__ */ ((t) => (t[t.January = 1] = "January", t[t.February = 2] = "February", t[t.March = 3] = "March", t[t.April = 4] = "April", t[t.May = 5] = "May", t[t.June = 6] = "June", t[t.July = 7] = "July", t[t.August = 8] = "August", t[t.September = 9] = "September", t[t.October = 10] = "October", t[t.November = 11] = "November", t[t.December = 12] = "December", t))(U || {}), C = /* @__PURE__ */ ((t) => (t[t.SetNewBudget = 1] = "SetNewBudget", t[t.IncreaseBudget = 2] = "IncreaseBudget", t[t.LowerBudget = 3] = "LowerBudget", t[t.OpenProject = 4] = "OpenProject", t[t.SuspendProject = 5] = "SuspendProject", t[t.None = -1] = "None", t))(C || {}), P = /* @__PURE__ */ ((t) => (t.DailyBudget = "dailyBudget", t.TotalBudget = "totalBudget", t))(P || {}), Y = /* @__PURE__ */ ((t) => (t.Value = "value", t.Percentage = "percentage", t))(Y || {}), q = /* @__PURE__ */ ((t) => (t.BudgetRemaining = "budgetRemaining", t.Impressions = "impressions", t.Spent = "spent", t.Conversions = "conversions", t.ReturnOnADSpending = "roas", t.Clicks = "clicks", t))(q || {}), H = /* @__PURE__ */ ((t) => (t[t.Today = 1] = "Today", t[t.Yesterday = 2] = "Yesterday", t[t.Last3Days = 3] = "Last3Days", t[t.Last7Days = 4] = "Last7Days", t[t.ThisMonth = 5] = "ThisMonth", t[t.LastMonth = 6] = "LastMonth", t[t.ThisSeason = 7] = "ThisSeason", t[t.LastSeason = 8] = "LastSeason", t[t.ThisYear = 9] = "ThisYear", t[t.LastYear = 10] = "LastYear", t[t.SpecifiedTime = -1] = "SpecifiedTime", t))(H || {}), L = /* @__PURE__ */ ((t) => (t.MoreThan = ">", t.GreaterOrEqualTo = ">=", t.Equal = "==", t.LessThan = "<", t.LessThanOrEqualTo = "<=", t))(L || {});
const pt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ActionType: C,
  AdLevelTypeFacebook: j,
  AdLevelTypeGoogle: B,
  BudgetType: P,
  ClientType: V,
  ConditionType: q,
  DateRangeType: H,
  EventHelper: D,
  FrequencyType: v,
  MonthType: U,
  OperationType: L,
  ValueType: Y,
  WeekOrdinalWordsType: $,
  WeekdaysType: J
}, Symbol.toStringTag, { value: "Module" })), F = /* @__PURE__ */ h({
  __name: "SpecifyDate",
  props: {
    type: {},
    modelValue: {}
  },
  setup(t) {
    const s = t;
    return (u, r) => (o(), d("div", null, b(s.type), 1));
  }
}), M = { class: "space-y-3" }, k = { class: "flex space-x-1" }, R = { class: "flex items-center gap-1" }, W = /* @__PURE__ */ e("span", null, "重複", -1), y = ["value"], T = /* @__PURE__ */ e("option", { value: 0 }, "自訂", -1), tt = {
  key: 0,
  class: "flex flex-col space-y-3"
}, rt = { class: "flex items-center gap-1" }, et = /* @__PURE__ */ e("span", null, "頻率", -1), st = ["value"], ut = { class: "flex items-center space-x-1" }, nt = /* @__PURE__ */ e("span", null, "每", -1), at = { class: "flex w-auto items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-1.5" }, lt = ["value"], ot = { key: 1 }, dt = /* @__PURE__ */ h({
  __name: "RepeatFrequency",
  props: {
    frequency: {},
    interval: {}
  },
  emits: ["update:frequency", "update:interval"],
  setup(t, { emit: s }) {
    const u = t, r = I(0);
    u.interval == 1 && (r.value = u.frequency), N(r, (n) => {
      v[n] && (s("update:frequency", n), s("update:interval", 1), l.value = r.value);
    });
    const l = I(u.frequency);
    N(l, (n) => s("update:frequency", n));
    const x = (n) => {
      console.log(n);
    }, i = G("eventData");
    return (n, c) => (o(), d("div", M, [
      S(e("input", {
        type: "text",
        "onUpdate:modelValue": c[0] || (c[0] = (a) => _(i).title = a)
      }, null, 512), [
        [Q, _(i).title]
      ]),
      e("div", k, [
        e("label", R, [
          W,
          S(e("select", {
            class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
            "onUpdate:modelValue": c[1] || (c[1] = (a) => r.value = a)
          }, [
            (o(!0), d(g, null, E(_(v), (a, m) => (o(), d(g, { key: m }, [
              Number.isInteger(a) ? (o(), d("option", {
                key: 0,
                value: a
              }, b(m), 9, y)) : f("", !0)
            ], 64))), 128)),
            T
          ], 512), [
            [w, r.value]
          ])
        ])
      ]),
      _(v)[r.value] == null ? (o(), d("div", tt, [
        e("label", rt, [
          et,
          S(e("select", {
            class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
            "onUpdate:modelValue": c[2] || (c[2] = (a) => l.value = a)
          }, [
            (o(!0), d(g, null, E(_(v), (a, m) => (o(), d(g, { key: m }, [
              a != _(v).Never && Number.isInteger(a) ? (o(), d("option", {
                key: 0,
                value: a
              }, b(m), 9, st)) : f("", !0)
            ], 64))), 128))
          ], 512), [
            [w, l.value]
          ])
        ]),
        e("label", ut, [
          nt,
          e("div", at, [
            e("input", {
              type: "text",
              class: "p3-b w-full border-none outline-none shadow-none",
              onKeyup: c[3] || (c[3] = (a) => n.$emit("update:interval", a.target.value)),
              value: u.interval
            }, null, 40, lt)
          ]),
          e("span", null, b(_(v)[l.value]), 1)
        ]),
        p(F, {
          type: l.value,
          onUpdate: x
        }, null, 8, ["type"])
      ])) : f("", !0),
      l.value === 5 ? (o(), d("div", ot, "月份")) : f("", !0)
    ]));
  }
}), it = { class: "flex w-auto items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-1.5" }, ct = ["value", "placeholder"], vt = /* @__PURE__ */ h({
  __name: "TextInput",
  props: {
    placeholder: {},
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(t, { emit: s }) {
    function u(r) {
      s("update:modelValue", r.target.value);
    }
    return (r, l) => (o(), d("div", it, [
      e("input", {
        value: r.modelValue,
        onInput: u,
        type: "text",
        class: "p3-b w-full border-none outline-none shadow-none",
        placeholder: r.placeholder
      }, null, 40, ct)
    ]));
  }
});
const K = (t, s) => {
  const u = t.__vccOpts || t;
  for (const [r, l] of s)
    u[r] = l;
  return u;
}, _t = /* @__PURE__ */ K(vt, [["__scopeId", "data-v-fa54c283"]]), z = (t) => (O("data-v-4c91826f"), t = t(), A(), t), mt = {
  key: 0,
  class: "p-5 rounded-lg border space-y-5"
}, ft = /* @__PURE__ */ z(() => /* @__PURE__ */ e("div", null, "TC Event Editor is loaded.", -1)), bt = /* @__PURE__ */ z(() => /* @__PURE__ */ e("span", null, "變更標題", -1)), gt = /* @__PURE__ */ h({
  __name: "TCEventEditorApp",
  props: {
    data: {}
  },
  emits: ["update:data"],
  setup(t, { emit: s }) {
    const u = t, r = X(() => JSON.parse(u.data || "{}")), l = () => s("update:data", JSON.stringify(r.value, null, 4));
    return Z("eventData", r), (x, i) => u.data ? (o(), d("div", mt, [
      ft,
      e("span", null, "item title: " + b(r.value.title), 1),
      e("div", null, [
        e("label", null, [
          bt,
          p(_t, {
            modelValue: r.value.title,
            "onUpdate:modelValue": i[0] || (i[0] = (n) => r.value.title = n)
          }, null, 8, ["modelValue"])
        ])
      ]),
      p(dt, {
        frequency: r.value.frequency,
        "onUpdate:frequency": i[1] || (i[1] = (n) => r.value.frequency = n),
        interval: r.value.interval,
        "onUpdate:interval": i[2] || (i[2] = (n) => r.value.interval = n)
      }, null, 8, ["frequency", "interval"]),
      e("button", {
        onClick: l,
        class: "p-2 px-3 rounded-lg bg-slate-100 hover:bg-sky-500 hover:text-white"
      }, " 保存 ")
    ])) : f("", !0);
  }
});
const xt = /* @__PURE__ */ K(gt, [["__scopeId", "data-v-4c91826f"]]);
export {
  xt as TCEventEditorApp,
  pt as TCEventItems,
  St as setApiUrlBase
};
