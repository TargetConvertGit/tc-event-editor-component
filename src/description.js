const dt = {
  every: "每",

  frequency: {
    Never: "永不",
    Hour: "小時",
    Day: "天",
    Week: "週",
    Month: "個月",
    Annual: "年",
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
    Weekend: "週末",
  },

  week_ordinal: {
    First: "第一週",
    Second: "第二週",
    Third: "第三週",
    Fourth: "第四週",
    Fifth: "第五週",
    Last: "最後一週",
  },
};

export function getDescription(event) {
  const startDate = event.start;
  const endDate = event.due ? event.due : null;

  if (event.frequency === "Never") return `於 ${startDate} 執行`;

  const frequencyText = dt.frequency[event.frequency];

  const weekdaysText = event.weekdays
    ? event.weekdays.map((day) => dt.weekdays[day]).join("、")
    : "";
  const weekOrdinalText = event.weekOrdinal
    ? event.week_ordinal.map((ord) => dt.week_ordinal[ord]).join("、")
    : "";
  const monthDateText = event.monthDate
    ? `第${event.month_date.join("、")}天`
    : "";
  const yearMonthsText = event.yearMonths
    ? `第${event.year_months.reverse().join("、")}個月`
    : "";
  let description = `從 ${startDate} 開始，${dt.every}${event.interval}${frequencyText}`;

  if (weekOrdinalText || weekdaysText || monthDateText || yearMonthsText) {
    description += "的";
    const parts = [];
    if (weekOrdinalText) {
      parts.push(`${weekOrdinalText}的`);
    }
    if (weekdaysText) {
      parts.push(weekdaysText);
    }
    if (yearMonthsText) {
      parts.push(`${yearMonthsText}的`);
    }
    if (monthDateText) {
      parts.push(monthDateText);
    }
    description += parts.join("");
  }

  description += "各執行一次";

  if (endDate) {
    description += `，並於 ${endDate} 結束循環`;
  }

  return description;
}

// 示例事件物件
const event = {
  start: "2023-09-03 09:04:11",
  frequency: "Day",
  interval: 4,
  weekdays: null,
  week_ordinal: null,
  month_date: null,
  year_months: null,
  due: "2023-12-10 22:41:35",
};

console.log(getDescription(event));
