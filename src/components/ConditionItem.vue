<script setup lang="ts">
import TextInput from "./TextInput.vue";
import OuterBlock from "./OuterBlock.vue";
import Checkbox from "./checkbox.vue";
import { DatePicker } from "v-calendar";
import "v-calendar/style.css";
import {
  EventCondition,
  ConditionType,
  DateRangeType,
  OperationType,
  ValueType,
  ClientType,
  ConditionAdLevelTypeFacebook,
  ConditionAdLevelTypeGoogle,
  ConditionAdLevelType,
} from "../types/event-items";

interface Condition extends EventCondition {
  adLevel: ConditionAdLevelType;
  client: ClientType;
}

interface Props {
  condition: Condition;
  index: number | string;
}

const props = defineProps<Props>();
const data = ref({
  client: ClientType.Google,
});
const emit = defineEmits();
const adLevel = computed(() => {
  if (data?.["client"] == ClientType.Google) {
    return ConditionAdLevelTypeGoogle;
  }

  return ConditionAdLevelTypeFacebook;
});
</script>

<template>
  <OuterBlock :title="'條件' + (index + 1)">
    <div class="flex flex-col gap-2">
      <div class="flex items-center gap-2">
        <label class="flex items-center gap-2">
          <span class="p3-b">平台</span>
          <select
            class="p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50"
            v-model="condition.client"
          >
            <option value="" disabled>請選擇</option>
            <template v-for="(value, key) in ClientType" :key="key">
              <option v-if="!Number.isInteger(value)" :value="key">
                {{ value }}
              </option>
            </template>
          </select>
        </label>
        <label class="flex items-center gap-2">
          <span class="p3-b">層級</span>
          <select
            class="p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50"
            v-model="condition.adLevel"
          >
            <option value="-1" disabled>請選擇</option>
            <template v-for="(value, key) in adLevel" :key="key">
              <option v-if="!Number.isInteger(value)" :value="key">
                {{ value }}
              </option>
            </template>
          </select>
        </label>
        <label class="flex items-center gap-2">
          <span class="p3-b">目標</span>
          <div>選擇廣告帳戶</div>
        </label>
      </div>
      <label class="flex items-center gap-1">
        <span class="p3-b">條件</span>
        <select
          class="p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50"
          v-model="condition.conditionType"
        >
          <option value="-1" disabled>請選擇</option>
          <template v-for="(value, key) in ConditionType" :key="key">
            <option v-if="!Number.isInteger(value)" :value="value">
              {{ value }}
            </option>
          </template>
        </select>
      </label>
      <div class="flex gap-2 flex-wrap" v-if="condition.conditionType != -1">
        <div class="flex gap-2">
          <label class="flex items-center gap-1">
            <span class="p3-b">運算</span>
            <select
              class="p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50"
              v-model="condition.dateRangeType"
            >
              <option value="-1" disabled>請選擇</option>
              <template v-for="(value, key) in DateRangeType" :key="key">
                <option v-if="!Number.isInteger(value)" :value="key">
                  {{ value }}
                </option>
              </template>
            </select>
          </label>
          <div v-if="condition.dateRangeType == DateRangeType.SpecifiedTime">
            <DatePicker v-model.range="condition.dateRange" mode="date">
              <template #default="{ togglePopover, inputValue }">
                <button
                  class="p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 transition-all hover:bg-light-3 hover:bg-opacity-50"
                  @click="togglePopover"
                >
                  {{
                    inputValue.start && inputValue.end
                      ? `${inputValue.start}-${inputValue.end}`
                      : "請選定執行日期"
                  }}
                </button>
              </template>
            </DatePicker>
          </div>
        </div>

        <label class="flex items-center gap-1">
          <select
            class="p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50"
            v-model="condition.operation"
          >
            <option value="-1" disabled>請選擇</option>
            <template v-for="(value, key) in OperationType" :key="key">
              <option v-if="!Number.isInteger(value)" :value="value">
                {{ value }}
              </option>
            </template>
          </select>
        </label>
        <label class="flex items-center gap-1">
          <select
            class="p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50"
            v-model="condition.valueType"
          >
            <option value="-1" disabled>請選擇</option>
            <template v-for="(value, key) in ValueType" :key="key">
              <option v-if="!Number.isInteger(value)" :value="value">
                {{ value }}
              </option>
            </template>
          </select>
        </label>
        <div
          class="flex w-auto items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-1.5"
        >
          <input
            type="number"
            class="p3-b w-4 text-center border-none outline-none shadow-none"
            v-model="condition.value"
          />
        </div>
      </div>
    </div>
  </OuterBlock>
</template>

<style lang="scss" scoped></style>
