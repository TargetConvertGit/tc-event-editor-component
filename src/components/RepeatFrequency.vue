<script setup lang="ts">
// import { ref, watch, inject } from "vue";
import { FrequencyType } from "../types/event-items";
import SpecifyDate from "./SpecifyDate.vue";
import DuePicker from "./DuePicker.vue";
interface Props {
  frequency: FrequencyType;
  interval: number | string;
}

const props = defineProps<Props>();

const emit = defineEmits(["update:frequency", "update:interval"]);

const repeat = ref(0);
if (props.interval == 1) repeat.value = props.frequency;
watch(repeat, (val) => {
  if (FrequencyType[val]) {
    emit("update:frequency", val);
    emit("update:interval", 1);
    frequency.value = repeat.value;
  }
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

const eventData = inject("eventData");
</script>

<template>
  <div class="space-y-3">
    <div class="flex space-x-1">
      <label class="flex items-center gap-1">
        <span class="p3-b">重複</span>
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
    </div>
    <div
      v-if="FrequencyType[repeat] == undefined"
      class="flex items-center gap-2"
    >
      <label class="flex items-center gap-1">
        <span class="p3-b">頻率</span>
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
      <label class="flex items-center gap-1">
        <span>每</span>
        <div
          class="flex w-auto items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-1.5"
        >
          <input
            type="text"
            class="p3-b w-4 text-center border-none outline-none shadow-none"
            @keyup="
              (event: Event) =>
                $emit(
                  'update:interval',
                  (event.target as HTMLInputElement).value
                )
            "
            :value="props.interval"
          />
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
