<script setup lang="ts">
import { FrequencyType } from "../types/event-items";
import SpecifyDate from "./SpecifyDate.vue";
import DuePicker from "./DuePicker.vue";
import TextInput from "./TextInput.vue";
import { DatePicker } from "v-calendar";
import "v-calendar/style.css";
import { i18n } from "../i18n";
const { t } = i18n.global;
interface Props {
  frequency?: FrequencyType;
  interval?: number | string;
}
const props = defineProps<Props>();

const emit = defineEmits(["update:frequency", "update:interval"]);

const eventData = inject("eventData");
const editMode = ref(true);

watch(eventData, () => {
  editMode.value = true;
});
const minInterval = 1;
const interval = ref(props.interval ?? minInterval);
watch(interval, (val) => {
  if (!val) val = minInterval;
  emit("update:interval", val);
});
const frequency = ref(props.frequency);
watch(frequency, (val) => {
  emit("update:frequency", val);
});

const startTime = computed({
  get: () =>
    eventData.value.start ? new Date(eventData.value.start).toISOString() : "",
  set: (value) => {
    eventData.value.start = value;
  },
});

//#region 日期相關參數
const weekdays = computed({
  get: () => eventData.value.weekdays ?? [],
  set: (value) => {
    eventData.value.weekdays = value;
  },
});
const weekOrdinal = computed({
  get: () => eventData.value.weekOrdinal ?? [],
  set: (value) => {
    eventData.value.weekOrdinal = value;
  },
});
const monthDate = computed({
  get: () => eventData.value.monthDate ?? [],
  set: (value) => {
    eventData.value.monthDate = value;
  },
});
const yearMonths = computed({
  get: () => eventData.value.yearMonths ?? [],
  set: (value) => {
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
  if (repeat.value == FrequencyType.Week) {
    return t("每週執行一次");
  }
  if (repeat.value == FrequencyType.Month) {
    return t("每月執行一次");
  }
  if (repeat.value == FrequencyType.Annual) {
    return t("每年執行一次");
  }
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

watch(
  repeat,
  (val) => {
    if (FrequencyType[val]) {
      emit("update:frequency", val);
      emit("update:interval", 1);
      frequency.value = repeat.value;
      eventData.value.weekdays = null;
      eventData.value.weekOrdinal = null;
      eventData.value.monthDate = null;
      eventData.value.yearMonths = null;
    } else {
      frequency.value = 1;
    }
    // 若頻率為自訂
    eventData.value.customInterval = val === 0;
  },
  { immediate: true }
);
</script>

<template>
  <div class="flex flex-col gap-6">
    <div class="flex gap-6">
      <div class="flex flex-col gap-2">
        <div class="flex items-center justify-start gap-2">
          <span class="p3-r text-dark-4">{{ t("開始") }}</span>
          <DatePicker
            v-model="startTime"
            mode="dateTime"
            :min-Date="new Date()"
            is24hr
            hide-time-header
            :time-accuracy="2"
            :timezone="Intl.DateTimeFormat().resolvedOptions().timeZone"
            :popover="false"
          >
            <template #default="{ togglePopover, inputValue }">
              <div
                class="p3-b text-true-blue-3 flex cursor-pointer relative items-center justify-start gap-2 rounded shadow-01 bg-light-5 py-1 px-2 transition-all hover:bg-light-3 hover:bg-opacity-50"
                @click="togglePopover"
              >
                <input
                  :value="inputValue"
                  required
                  class="opacity-0 absolute w-full h-full pointer-events-none"
                />
                {{ inputValue ? inputValue : t("未設定") }}
              </div>
            </template>
          </DatePicker>
        </div>
      </div>

      <label class="flex items-center justify-start gap-2">
        <span class="p3-r text-dark-4">{{ t("執行頻率") }}</span>
        <div class="flex gap-6">
          <div class="flex items-center gap-2">
            <select
              class="p3-b text-true-blue-3 flex cursor-pointer items-center justify-center gap-2 rounded shadow-01 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50"
              v-model="repeat"
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
      <div class="flex items-center empty:hidden">
        <div
          class="flex items-center justify-start gap-2"
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
      <div class="flex gap-2 items-center">
        <span class="p3-r text-dark-4">{{ t("每") }}</span>
        <TextInput
          class="!w-10 text-center text-dark-3"
          :inputClass="'text-true-blue-3'"
          v-model="interval"
          type="number"
        />
        <select
          class="p3-b text-true-blue-3 w-14 flex cursor-pointer items-center justify-center gap-2 rounded shadow-01 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50"
          v-model="frequency"
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
