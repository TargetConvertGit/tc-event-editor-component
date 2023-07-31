<script setup lang="ts">
import { ref, watch, inject } from "vue";
import { FrequencyType } from "../types/event-items";
import SpecifyDate from "./SpecifyDate.vue";
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
watch(frequency, (val) => emit("update:frequency", val));

const updateSpecifyDate = (value) => {
  console.log(value);
};

const eventData = inject("eventData");
</script>

<template>
  <div class="space-y-3">
    <input type="text" v-model="eventData.title" />
    <div class="flex space-x-1">
      <label class="flex items-center gap-1">
        <span>重複</span>
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
      class="flex flex-col space-y-3"
    >
      <label class="flex items-center gap-1">
        <span>頻率</span>
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
      <label class="flex items-center space-x-1">
        <span>每</span>
        <div
          class="flex w-auto items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-1.5"
        >
          <input
            type="text"
            class="p3-b w-full border-none outline-none shadow-none"
            @keyup="(event: Event) => $emit('update:interval', (event.target as HTMLInputElement).value)"
            :value="props.interval"
          />
        </div>
        <span>{{ FrequencyType[frequency] }}</span>
      </label>

      <SpecifyDate :type="frequency" @update="updateSpecifyDate" />
    </div>
    <div v-if="frequency === 5">月份</div>
  </div>
</template>
