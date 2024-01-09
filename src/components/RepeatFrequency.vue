<script setup lang="ts">
import { FrequencyType } from "../types/event-items";
import SpecifyDate from "./SpecifyDate.vue";
import DuePicker from "./DuePicker.vue";
import NumberInput from "./NumberInput.vue";
import { DatePicker } from "v-calendar";
import Select from "./Select.vue";
import "v-calendar/style.css";
import { i18n } from "../i18n";
import { onClickOutside } from "@vueuse/core";
import { cloneDeep } from "lodash";
import moment from "moment";
import "moment-timezone";
const { t } = i18n.global;
interface Props {
  frequency?: FrequencyType;
  interval?: number | string;
}
const props = defineProps<Props>();
const initialData = inject("initialData");
const emit = defineEmits(["update:frequency", "update:interval"]);

const eventData = inject("eventData");

const minInterval = 1;
const interval = ref(props.interval ?? minInterval);
watch(interval, (val: number) => {
  if (!val) val = minInterval;
  emit("update:interval", val);
});
const frequency = ref(props.frequency);
watch(frequency, (val: number) => {
  emit("update:frequency", val);
});

//#region 日期相關參數
const weekdays = computed({
  get: () => eventData.value.weekdays ?? [],
  set: (value: number[]) => {
    eventData.value.weekdays = value;
  },
});
const weekOrdinal = computed({
  get: () => eventData.value.weekOrdinal ?? [],
  set: (value: number[]) => {
    eventData.value.weekOrdinal = value;
  },
});
const monthDate = computed({
  get: () => eventData.value.monthDate ?? [],
  set: (value: number[]) => {
    eventData.value.monthDate = value;
  },
});
const yearMonths = computed({
  get: () => eventData.value.yearMonths ?? [],
  set: (value: number[]) => {
    eventData.value.yearMonths = value;
  },
});
//#endregion

// 顯示文字
const repeatLabel = computed(() => {
  if (repeat.value == FrequencyType.Never) {
    return t("只執行一次");
  }
  if (repeat.value == FrequencyType.Hour) {
    return t("每小時執行一次");
  }
  if (repeat.value == FrequencyType.Day) {
    return t("每日執行一次");
  }
  // if (repeat.value == FrequencyType.Week) {
  //   return t("每週執行一次");
  // }
  // if (repeat.value == FrequencyType.Month) {
  //   return t("每月執行一次");
  // }
  // if (repeat.value == FrequencyType.Annual) {
  //   return t("每年執行一次");
  // }
  const label = {
    1: t("小時"),
    2: t("日"),
    3: t("週"),
    4: t("月"),
    5: t("年"),
  };
  const date = {
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
  };

  if (repeat.value == 0) {
    return `${t("每")}${interval.value ?? ""}${label[frequency.value] ?? ""}${
      date[frequency.value] ?? ""
    }${t("執行一次")}`;
  }
  return "";
});

const repeat = ref(
  props.interval == undefined ? -1 : props.interval !== 1 ? 0 : props.frequency
);

function createHourRange(dateTime: string) {
  // 從輸入的日期時間字串中取得日期和時間部分
  let [date, time] = dateTime.split(" ");

  // 從時間部分中取得小時部分
  let hour = time.split(":")[0];
  hour = hour.padStart(2, "0"); // 確保兩位數的小時

  // 建立該小時的開始時間和結束時間字串
  let startHour = `${date} ${hour}:00`;
  let endHour = `${hour}:59`;

  // 回傳該小時的時間範圍
  return `${startHour}-${endHour}`;
}

watch(
  repeat,
  (val: number) => {
    if (FrequencyType[val]) {
      emit("update:frequency", val);
      emit("update:interval", 1);
      frequency.value = repeat.value;
      eventData.value.weekdays = null;
      eventData.value.weekOrdinal = null;
      eventData.value.monthDate = null;
      eventData.value.yearMonths = null;
    } else {
      // frequency.value = 1;
    }
    // 若頻率為自訂
    eventData.value.customInterval = val === 0;
  },
  { immediate: true }
);

const tempStartValue = ref(
  eventData.value.start ? new Date(eventData.value.start).toISOString() : ""
);
const updateStart = (v: Date) => {
  tempStartValue.value = v.toISOString();
};

const datePickerOpen = ref(false);
watch(datePickerOpen, (val: boolean) => {
  if (!val) {
    eventData.value.start = cloneDeep(tempStartValue.value);
  }
});

const target = ref(null);

onClickOutside(target, () => (datePickerOpen.value = false));
</script>

<template>
  <div class="flex flex-col gap-6">
    <div class="flex gap-6 flex-wrap items-center">
      <label class="flex items-center justify-start gap-4">
        <span class="p3-r text-dark-4">{{ t("執行頻率") }}</span>
        <div class="flex gap-6">
          <div class="flex items-center gap-4">
            <select
              class="p3-b text-true-blue-3 flex cursor-pointer items-center justify-center gap-4 rounded shadow-01 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50"
              v-model="repeat"
              required
            >
              <template v-for="(value, key) in FrequencyType" :key="key">
                <option v-if="Number.isInteger(value)" :value="value">
                  {{ t(key) }}
                </option>
              </template>
              <option :value="0">{{ t("自訂") }}</option>
            </select>
          </div>
        </div>
      </label>
      <div class="flex flex-col gap-4">
        <div class="flex items-center justify-start gap-4">
          <span class="p3-r text-dark-4">{{ t("開始") }}</span>
          <div class="relative" ref="target">
            <div
              class="p3-b text-true-blue-3 relative flex cursor-pointer items-center justify-start gap-4 rounded shadow-01 bg-light-5 py-1 px-2 transition-all hover:bg-light-3 hover:bg-opacity-50"
              :class="{ ' !text-dark-5 !p3-r': !tempStartValue }"
              @click.stop="datePickerOpen = !datePickerOpen"
            >
              <input
                :value="tempStartValue"
                required
                class="opacity-0 absolute w-[1px] bottom-0 left-1/2 h-[1px] pointer-events-none"
              />
              {{
                tempStartValue
                  ? createHourRange(
                      moment(tempStartValue)
                        .tz(
                          initialData.timezone ??
                            Intl.DateTimeFormat().resolvedOptions().timeZone
                        )
                        .format("YYYY-MM-DD HH:mm")
                    )
                  : t("未設定")
              }}
            </div>
            <Transition name="fade" mode="out-in">
              <div
                class="absolute top-[calc(100%+.75rem)] left-0 z-10"
                v-if="datePickerOpen"
              >
                <DatePicker
                  v-model="tempStartValue"
                  mode="dateTime"
                  :min-Date="new Date()"
                  is24hr
                  hide-time-header
                  :time-accuracy="initialData.isProd ? 1 : 2"
                  :timezone="initialData.timezone"
                  @update:modelValue="updateStart"
                />
              </div>
            </Transition>
          </div>
        </div>
      </div>

      <div class="flex items-center empty:hidden">
        <div
          class="flex items-center justify-start gap-4"
          v-if="frequency !== -1"
        >
          <span class="p3-r text-dark-4">{{ t("結束") }}</span>
          <DuePicker v-model="eventData.due" />
        </div>
      </div>
    </div>
    <div
      class="flex justify-center flex-col gap-6"
      v-if="FrequencyType[repeat] == undefined"
    >
      <div class="flex gap-4 items-center">
        <span class="p3-r text-dark-4">{{ t("每") }}</span>

        <NumberInput
          class="!w-12 text-dark-3"
          :inputClass="'!text-true-blue-3 !text-center'"
          :textCenter="true"
          :required="true"
          v-model="interval"
        />
        <div class="relative">
          <input
            type="text"
            class="opacity-0 absolute left-1/2 w-[1px] h-[1px] bottom-0"
            :value="frequency == -1 ? '' : frequency"
            required
          />
          <select
            class="p3-b text-true-blue-3 w-auto flex cursor-pointer items-center justify-center gap-4 rounded shadow-01 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50"
            v-model="frequency"
            required
            :class="[frequency != -1 ? '!w-fit' : '!text-dark-5 !p3-r']"
          >
            <option value="-1" disabled>{{ t("未設定") }}</option>
            <template v-for="(value, key) in FrequencyType" :key="key">
              <option
                v-if="value != FrequencyType.Never && Number.isInteger(value)"
                :value="value"
              >
                {{ t(`repeat${key}`) }}
              </option>
            </template>
          </select>
        </div>

        <span
          class="p3-b text-dark-3"
          v-if="
            frequency == FrequencyType.Hour || frequency == FrequencyType.Day
          "
          >{{ repeatLabel }}</span
        >
        <SpecifyDate
          class="ml-4"
          v-if="FrequencyType[repeat] == undefined"
          :type="frequency"
          v-model:weekdays="weekdays"
          v-model:weekOrdinal="weekOrdinal"
          v-model:monthDate="monthDate"
          v-model:yearMonths="yearMonths"
        />
      </div>
    </div>
  </div>
</template>
