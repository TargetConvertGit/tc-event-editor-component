<script setup lang="ts">
import Checkbox from "./checkbox.vue";
import {
  FrequencyType,
  MonthType,
  WeekOrdinalWordsType,
  WeekdaysType,
} from "../types/event-items";
import { getDescription } from "../description";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../shadcn/components/ui/popover";

export interface Props {
  type: number;
  weekdays?: WeekdaysType[];
  weekOrdinal?: WeekOrdinalWordsType[];
  monthDate?: number[];
  yearMonths?: MonthType[];
}
const props = withDefaults(defineProps<Props>(), {});

const emit = defineEmits([
  "update:weekdays",
  "update:weekOrdinal",
  "update:monthDate",
  "update:yearMonths",
]);

const monthDateOrigin = ref(props.monthDate);
const weekOrdinalOrigin = ref(props.weekOrdinal);
const weekdaysOrigin = ref(props.weekdays);
const yearMonthsOrigin = ref(props.yearMonths);

const check = (optionId: number, key: any, hasValue = false) => {
  if (hasValue) {
    if (key.findIndex((item: number) => item === optionId) === -1) {
      key.push(optionId);
    } else {
      key.splice(key.indexOf(optionId), 1);
    }
    key.sort((a: number, b: number) => a - b);
    return;
  }

  if (key.value.findIndex((item: number) => item === optionId) === -1) {
    key.value.push(optionId);
  } else {
    key.value.splice(key.value.indexOf(optionId), 1);
  }
  key.value.sort((a: number, b: number) => a - b);
};

const timeLabel = ref("");
const eventData = inject("eventData");

watchEffect(() => {
  emit(
    "update:monthDate",
    monthDateOrigin.value.length ? monthDateOrigin.value : null
  );
  emit(
    "update:weekOrdinal",
    weekOrdinalOrigin.value.length ? weekOrdinalOrigin.value : null
  );
  emit(
    "update:weekdays",
    weekdaysOrigin.value.length ? weekdaysOrigin.value : null
  );
  emit(
    "update:yearMonths",
    yearMonthsOrigin.value.length ? yearMonthsOrigin.value : null
  );
  timeLabel.value = getDescription(eventData.value, true);
});
//指定每週星期幾
const weekdaysOptions = ref([
  { name: "星期日", id: WeekdaysType.Sunday },
  { name: "星期一", id: WeekdaysType.Monday },
  { name: "星期二", id: WeekdaysType.Tuesday },
  { name: "星期三", id: WeekdaysType.Wednesday },
  { name: "星期四", id: WeekdaysType.Thursday },
  { name: "星期五", id: WeekdaysType.Friday },
  { name: "星期六", id: WeekdaysType.Saturday },
  { name: "平日", id: WeekdaysType.Weekday },
  { name: "週末", id: WeekdaysType.Weekend },
]);

//指定每月第幾週
const weekOrdinal = ref([
  { name: "第一週", id: WeekOrdinalWordsType.First },
  { name: "第二週", id: WeekOrdinalWordsType.Second },
  { name: "第三週", id: WeekOrdinalWordsType.Third },
  { name: "第四週", id: WeekOrdinalWordsType.Fourth },
  { name: "第五週", id: WeekOrdinalWordsType.Fifth },
  { name: "最後一週", id: WeekOrdinalWordsType.Last },
]);
// 每個月第幾天(1 - 31), -1表示最後一天
const monthDate = ref([
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
  { name: "最後一天", id: -1 },
]);
// 每年的第幾個月
const yearMonths = ref([
  {
    name: "一月",
    id: MonthType.January,
  },
  {
    name: "二月",
    id: MonthType.February,
  },
  {
    name: "三月",
    id: MonthType.March,
  },
  {
    name: "四月",
    id: MonthType.April,
  },
  {
    name: "五月",
    id: MonthType.May,
  },
  {
    name: "六月",
    id: MonthType.June,
  },
  {
    name: "七月",
    id: MonthType.July,
  },
  {
    name: "八月",
    id: MonthType.August,
  },
  {
    name: "九月",
    id: MonthType.September,
  },
  {
    name: "十月",
    id: MonthType.October,
  },
  {
    name: "十一月",
    id: MonthType.November,
  },
  {
    name: "十二月",
    id: MonthType.December,
  },
]);

// 選擇類型
const options = computed(() => {
  // 週
  if (props.type === FrequencyType.Week) {
    return [
      {
        key: weekdaysOrigin,
        label: "weekdaysOrigin",
        options: weekdaysOptions.value,
      },
    ];
  }
  // 月
  if (props.type === FrequencyType.Month) {
    if (selectType.value.id === 0) {
      return [
        {
          key: weekOrdinalOrigin,
          label: "weekOrdinalOrigin",

          options: weekOrdinal.value,
        },
        {
          key: weekdaysOrigin,
          label: "weekdaysOrigin",
          options: weekdaysOptions.value,
        },
      ];
    }
    if (selectType.value.id === 1) {
      return [
        {
          key: monthDateOrigin,
          label: "monthDateOrigin",
          options: monthDate.value,
        },
      ];
    }
  }
  // 年
  if (props.type === FrequencyType.Annual) {
    if (selectType.value.id === 0) {
      return [
        {
          key: weekOrdinalOrigin,
          label: "weekOrdinalOrigin",

          options: weekOrdinal.value,
        },
        {
          key: weekdaysOrigin,
          label: "weekdaysOrigin",

          options: weekdaysOptions.value,
        },
      ];
    }
    if (selectType.value.id === 1) {
      return [
        {
          key: monthDateOrigin,
          label: "monthDateOrigin",

          options: monthDate.value,
        },
      ];
    }
  }
});

// 有一種以上日期類型時顯示 ex: 月為單位時,可以選週期或是指定日期
const showTypeSelector = computed(() => {
  if (props.type === FrequencyType.Month) return true;
  if (props.type === FrequencyType.Annual) return true;

  monthDateOrigin.value = [];
  weekOrdinalOrigin.value = [];
  weekdaysOrigin.value = [];
  yearMonthsOrigin.value = [];
  return false;
});

enum SpecifyDateType {
  "Week",
  "Date",
}

// 選擇日期類型
const specifyDateType = ref([
  { name: "星期", id: SpecifyDateType.Week },
  { name: "日期", id: SpecifyDateType.Date },
]);
const selectType = ref(specifyDateType.value[0]);
watch(selectType, (val: { name: string; id: SpecifyDateType }) => {
  if (val.id === SpecifyDateType.Week) {
    monthDateOrigin.value = [];
    return;
  }
  if (val.id === SpecifyDateType.Date) {
    weekOrdinalOrigin.value = [];
    weekdaysOrigin.value = [];
    return;
  }
});
watch(
  () => props.type,
  (val: FrequencyType) => {
    if (val === FrequencyType.Month || val === FrequencyType.Annual) {
      if (val != FrequencyType.Annual) {
        yearMonthsOrigin.value = [];
      }
      if (monthDate.value && monthDate.value.length > 0) {
        selectType.value = specifyDateType.value[1];
      } else {
        selectType.value = specifyDateType.value[0];
      }
    }
  },
  { immediate: true }
);

onBeforeUnmount(() => {
  monthDateOrigin.value = [];
  weekOrdinalOrigin.value = [];
  weekdaysOrigin.value = [];
  yearMonthsOrigin.value = [];
});

const showUnselectedLabel = computed(() => {
  if (props.type === FrequencyType.Week) {
    return Boolean(weekdaysOrigin.value.length);
  }
  if (props.type === FrequencyType.Month) {
    if (selectType.value.id == SpecifyDateType.Week) {
      return (
        Boolean(weekOrdinalOrigin.value.length) ||
        Boolean(weekdaysOrigin.value.length)
      );
    }
    if (selectType.value.id == SpecifyDateType.Date) {
      return Boolean(monthDateOrigin.value.length);
    }
  }

  if (props.type === FrequencyType.Annual) {
    if (selectType.value.id == SpecifyDateType.Week) {
      return (
        Boolean(yearMonthsOrigin.value.length) ||
        Boolean(weekOrdinalOrigin.value.length) ||
        Boolean(weekdaysOrigin.value.length)
      );
    }
    if (selectType.value.id == SpecifyDateType.Date) {
      return (
        Boolean(yearMonthsOrigin.value.length) ||
        Boolean(monthDateOrigin.value.length)
      );
    }
  }
});
</script>
<template>
  <div
    v-if="type === FrequencyType.Annual || options"
    class="flex items-center gap-2 relative"
  >
    <span class="p3-r text-dark-4">指定時段</span>
    <Popover>
      <PopoverTrigger>
        <div class="flex gap-6">
          <span
            class="p3-b text-true-blue-3 flex cursor-pointer items-center justify-center gap-2 rounded shadow-01 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50"
            >{{ showUnselectedLabel ? timeLabel : "未設定" }}</span
          >
          <template> </template>
        </div>
      </PopoverTrigger>
      <PopoverContent
        class="shadow-none border-none p-0 w-96"
        align="start"
        side="bottom"
      >
        <div class="shadow-01 bg-light-5 z-[2] p-2 rounded flex flex-col gap-2">
          <div
            class="p3-b text-true-blue-3 w-fit flex cursor-pointer items-center justify-center gap-2 rounded shadow-01 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50"
          >
            月份
          </div>
          <div class="border-t p-2" v-if="type === FrequencyType.Annual">
            <div class="flex gap-1.5 flex-wrap">
              <Checkbox
                v-for="opt in yearMonths"
                :key="opt.id"
                :checked="yearMonthsOrigin?.includes(opt.id)"
                @update:checked="check(opt.id, yearMonthsOrigin, true)"
                :fieldId="opt.name"
                :label="opt.name"
              />
            </div>
          </div>
          <div
            class="shadow-01 flex w-fit items-center py-1 px-2 rounded p3-r text-dark-3"
            v-if="showTypeSelector"
          >
            <div
              class="flex items-center"
              v-for="(value, index) in specifyDateType"
              :key="value"
            >
              <template v-if="!Number.isInteger(value)">
                <span
                  class="cursor-pointer hover:drop-shadow-md"
                  :class="[
                    selectType.id == value.id
                      ? 'text-true-blue-3 drop-shadow-sm p3-b'
                      : 'p3-r',
                  ]"
                  @click="selectType = value"
                >
                  {{ value.name }}
                </span>
                <div
                  class="text-dark-5 mx-1"
                  v-if="
                    index <
                    Object.keys(selectType).filter((value) =>
                      isNaN(Number(value))
                    ).length -
                      1
                  "
                >
                  |
                </div>
              </template>
            </div>
          </div>
          <div class="flex gap-4 flex-wrap p-2 border-t" v-if="options">
            <div
              class="flex gap-1 flex-wrap"
              v-for="option in options"
              :key="option"
            >
              <Checkbox
                v-for="opt in option.options"
                :key="opt.id"
                :checked="option.key.value?.includes(opt.id)"
                @update:checked="check(opt.id, option.key)"
                :fieldId="opt.name"
                :label="opt.name"
              />
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  </div>
</template>
