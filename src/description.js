import {
  FrequencyType,
  WeekdaysType,
  WeekOrdinalWordsType,
} from "./types/event-items";

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

  weekOrdinal: {
    First: "第一週",
    Second: "第二週",
    Third: "第三週",
    Fourth: "第四週",
    Fifth: "第五週",
    Last: "最後一週",
  },
};

export function getDescription(event) {
  const startDate = new Date(event.start).toLocaleString("zh-TW", {
    hour12: false,
  });
  const endDate = event.due
    ? new Date(event.due).toLocaleString("zh-TW", { hour12: false })
    : null;
  if (event.frequency === FrequencyType.Never) return `於 ${startDate} 起`;

  const frequencyText = dt.frequency[FrequencyType[event.frequency]];

  const weekdaysText = event.weekdays
    ? event.weekdays.map((day) => dt.weekdays[WeekdaysType[day]]).join("、")
    : "";
  const weekOrdinalText = event.weekOrdinal
    ? event.weekOrdinal
        .map((ord) => dt.weekOrdinal[WeekOrdinalWordsType[ord]])
        .join("、")
    : "";
  const monthDateText = event.monthDate
    ? `第${event.monthDate.join("、")}號`.replace("-1", "最後一天")
    : "";
  const yearMonthsText = event.yearMonths
    ? `第${event.yearMonths.reverse().join("、")}個月`
    : "";
  // let description = `${dt.every}${event.interval}${frequencyText}`;
  let description = `於 ${startDate} 起，${dt.every}${event.interval}${frequencyText}`;
  if (weekOrdinalText || weekdaysText || monthDateText || yearMonthsText) {
    description += "的";
    const parts = [];
    if (yearMonthsText) {
      parts.push(`${yearMonthsText}的`);
    }
    if (monthDateText) {
      parts.push(monthDateText);
    }
    if (weekOrdinalText) {
      parts.push(`${weekOrdinalText}的`);
    }
    if (weekdaysText) {
      parts.push(weekdaysText);
    }

    description += parts.join("");
  }

  if (endDate) {
    description += `，並於 ${endDate} 結束循環`;
  }

  return description;
}
