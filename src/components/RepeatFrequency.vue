<script setup lang="ts">
// import { ref, watch, inject } from "vue";
import { FrequencyType } from "../types/event-items";
import SpecifyDate from "./SpecifyDate.vue";
import DuePicker from "./DuePicker.vue";
import { DatePicker } from "v-calendar";
import "v-calendar/style.css";
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

const interval = ref(props.interval);
watch(interval, (val) => {
  emit("update:interval", val);
});
const frequency = ref(props.frequency);
watch(frequency, (val) => {
  emit("update:frequency", val);
});

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

const repeat = ref(-1);
if (props.interval == 1) repeat.value = props.frequency;
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
    }
  },
  { immediate: true }
);

const repeatLabel = computed(() => {
  if (repeat.value == FrequencyType.Never) {
    return "只執行一次";
  }
  if (repeat.value == FrequencyType.Hour) {
    return "每小時執行一次";
  }
  if (repeat.value == FrequencyType.Day) {
    return "每日執行一次";
  }
  if (repeat.value == FrequencyType.Week) {
    return "每週執行一次";
  }
  if (repeat.value == FrequencyType.Month) {
    return "每月執行一次";
  }
  if (repeat.value == FrequencyType.Annual) {
    return "每年執行一次";
  }
  const label = {
    1: "小時",
    2: "日",
    3: "週",
    4: "月",
    5: "年",
  };
  if (repeat.value == 0) {
    return `每${interval.value ?? ""}${label[frequency.value] ?? ""}執行一次`;
  }
  return "";
});
</script>

<template>
  <div v-if="!editMode" class="flex gap-2 items-center">
    <span>
      於{{ eventData.start }}開始,每隔{{ eventData.interval
      }}{{ eventData.frequency }}再次執行
    </span>
    <div
      class="bg-true-blue-5 text-true-blue-2 flex-shrink-0 h-fit p3-r rounded w-fit px-2 cursor-pointer flex justify-center items-center"
      @click="editMode = true"
    >
      編輯
    </div>
  </div>
  <div v-else class="flex flex-col gap-3">
    <div class="flex items-center justify-center gap-3 my-2">
      <p class="p4-b to-dark-4">日期時間</p>
      <div class="h-[1px] flex-1 bg-light-3"></div>
    </div>
    <div class="flex flex-col gap-2">
      <div class="flex gap-2 items-center">
        <span class="p3-r">開始</span>
        <DatePicker
          v-model="eventData.start"
          mode="dateTime"
          :timezone="'UTC'"
          :min-Date="new Date()"
        >
          <template #default="{ togglePopover, inputValue }">
            <button
              class="p3-b flex w-fit cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 transition-all hover:bg-light-3 hover:bg-opacity-50"
              @click="togglePopover"
            >
              {{ inputValue ? inputValue : "請選定執行日期" }}
            </button>
          </template>
        </DatePicker>
      </div>
    </div>
    <div class="flex items-center justify-center gap-3 w-full my-2">
      <p class="p4-b to-dark-4">重複頻率</p>
      <div class="h-[1px] flex-1 bg-light-3"></div>
    </div>
    <div class="flex space-x-2 items-center">
      <label class="flex items-center gap-2">
        <span class="p3-r">重複</span>
        <select
          class="p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50"
          v-model="repeat"
        >
          <template v-for="(value, key) in FrequencyType" :key="key">
            <option v-if="Number.isInteger(value)" :value="value">
              {{ key }}
            </option>
          </template>
          <option :value="0">自訂</option>
        </select>
      </label>
      <span class="p4-b">{{ repeatLabel }}</span>
    </div>
    <div
      v-if="FrequencyType[repeat] == undefined"
      class="flex items-center gap-2"
    >
      <label class="flex items-center gap-2">
        <span class="p3-r">頻率</span>
        <select
          class="p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50"
          v-model="frequency"
        >
          <template v-for="(value, key) in FrequencyType" :key="key">
            <option
              v-if="value != FrequencyType.Never && Number.isInteger(value)"
              :value="value"
            >
              {{ key }}
            </option>
          </template>
        </select>
      </label>
      <label class="flex items-center gap-2">
        <span>每</span>
        <div
          class="flex w-auto items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-1.5"
        >
          <input
            type="number"
            class="p3-b w-4 text-center border-none outline-none shadow-none"
            v-model="interval"
          />
          <!-- @keyup="
              (event: Event) =>
                $emit(
                  'update:interval',
                  (event.target as HTMLInputElement).value
                )
            "
            :value="props.interval" -->
        </div>
        <span>{{ FrequencyType[frequency] }}</span>
      </label>
    </div>
    <template v-if="FrequencyType[repeat] == undefined">
      <SpecifyDate
        :type="frequency"
        v-model:weekdays="weekdays"
        v-model:weekOrdinal="weekOrdinal"
        v-model:monthDate="monthDate"
        v-model:yearMonths="yearMonths"
      />
    </template>

    <DuePicker v-model="eventData.due" v-if="frequency !== -1" />
  </div>
</template>
