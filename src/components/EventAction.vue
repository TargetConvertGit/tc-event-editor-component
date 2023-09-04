<script setup lang="ts">
import { ref, watch, inject } from "vue";
import Checkbox from "./checkbox.vue";
import TextInput from "./TextInput.vue";

import {
  EventAction,
  ClientType,
  AdLevelType,
  AdLevelTypeGoogle,
  AdLevelTypeFacebook,
  ActionType,
  EventActionParamBudget,
  BudgetType,
  ValueType,
} from "../types/event-items";

interface Props {}

const props = defineProps<Props>();

const emit = defineEmits([]);

const eventData = inject("eventData");

const adLevel = computed(() => {
  if (eventData.value.action["client"] == ClientType.Google) {
    return AdLevelTypeGoogle;
  }

  return AdLevelTypeFacebook;
});

const action = ref(eventData.value.action);

watchEffect(() => {
  if (action.value.action == ActionType.SetNewBudget) {
    if (action.value.params) return;
    action.value.params = {
      budgetType: BudgetType.TotalBudget,
      valueType: ValueType.Percentage,
      value: 0,
    } as EventActionParamBudget;
  }
  if (action.value.params.limit) {
    hasLimitBudget.value = true;
  }
});
watch(
  action,
  (val) => {
    eventData.value.action = val;
  },
  { deep: true }
);

const hasLimitBudget = ref(false);
watch(hasLimitBudget, (val) => {
  if (!action.value.params?.limit) {
    action.value.params.limit = null;
  }
  if (!val) {
    action.value.params.limit = null;
  }
});
</script>

<template>
  <div class="flex flex-col gap-6">
    <div class="flex space-x-1">
      <label class="flex items-center gap-1">
        <span class="p3-b">平台</span>
        <select
          class="p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50"
          v-model="eventData.action.client"
        >
          <template v-for="(value, key) in ClientType" :key="key">
            <option v-if="!Number.isInteger(value)" :value="key">
              {{ value }}
            </option>
          </template>
        </select>
      </label>
      <label class="flex items-center gap-1">
        <span class="p3-b">層級</span>
        <select
          class="p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50"
          v-model="eventData.action.adLevel"
        >
          <template v-for="(value, key) in adLevel" :key="key">
            <option v-if="!Number.isInteger(value)" :value="key">
              {{ value }}
            </option>
          </template>
        </select>
      </label>
      <label class="flex items-center gap-1">
        <span class="p3-b">目標</span>
        <!-- <select
          class="p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50"
          v-model="a"
        >
          <template v-for="(value, key) in ClientType" :key="key">
            <option v-if="!Number.isInteger(value)" :value="value">
              {{ value }}
            </option>
          </template>
        </select> -->
      </label>
    </div>
    <div class="flex flex-col gap-3">
      <label class="flex items-center gap-1">
        <span class="p3-b">執行</span>
        <select
          class="p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50"
          v-model="action.action"
        >
          <template v-for="(value, key) in ActionType" :key="key">
            <option v-if="!Number.isInteger(value)" :value="key">
              {{ value }}
            </option>
          </template>
        </select>
      </label>
      <div class="flex gap-x-1 gap-y-3 flex-wrap">
        <template v-if="action.action == ActionType.SetNewBudget">
          <label class="flex items-center gap-1">
            <span class="p3-b">類型</span>
            <select
              class="p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50"
              v-model="action.params.budgetType"
            >
              <template v-for="(value, key) in BudgetType" :key="key">
                <option v-if="!Number.isInteger(value)" :value="value">
                  {{ value }}
                </option>
              </template>
            </select>
          </label>
          <label class="flex items-center gap-1">
            <span class="p3-b">調整</span>
            <select
              class="p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50"
              v-model="action.params.valueType"
            >
              <template v-for="(value, key) in ValueType" :key="key">
                <option v-if="!Number.isInteger(value)" :value="value">
                  {{ value }}
                </option>
              </template>
            </select>
          </label>
          <label class="flex items-center gap-1">
            <div
              class="flex w-auto items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-1.5"
            >
              <input
                type="text"
                class="p3-b w-4 text-center border-none outline-none shadow-none"
                v-model="action.params.value"
              />
            </div>
            <span>{{
              action.params.valueType === ValueType.Percentage ? "%" : "元"
            }}</span>
          </label>
        </template>
        <template v-else-if="action.action == ActionType.IncreaseBudget">
          <label class="flex items-center gap-1">
            <span class="p3-b">類型</span>
            <select
              class="p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50"
              v-model="action.params.budgetType"
            >
              <template v-for="(value, key) in BudgetType" :key="key">
                <option v-if="!Number.isInteger(value)" :value="value">
                  {{ value }}
                </option>
              </template>
            </select>
          </label>
          <label class="flex items-center gap-1">
            <span class="p3-b">調整</span>
            <select
              class="p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50"
              v-model="action.params.valueType"
            >
              <template v-for="(value, key) in ValueType" :key="key">
                <option v-if="!Number.isInteger(value)" :value="value">
                  {{ value }}
                </option>
              </template>
            </select>
          </label>
          <label class="flex items-center gap-1">
            <div
              class="flex w-auto items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-1.5"
            >
              <input
                type="text"
                class="p3-b w-4 text-center border-none outline-none shadow-none"
                v-model="action.params.value"
              />
            </div>
            <span>{{
              action.params.valueType === ValueType.Percentage ? "%" : "元"
            }}</span>
          </label>
          <label
            class="flex items-center gap-1 w-full"
            v-if="action.params.valueType === ValueType.Percentage"
          >
            <div class="flex flex-col gap-2">
              <div class="flex items-center gap-1">
                <input
                  type="checkbox"
                  v-model="hasLimitBudget"
                  id="maxBudget"
                />
                <label for="maxBudget">設定預算上限</label>
                <div class="flex gap-1 items-center" v-if="hasLimitBudget">
                  <TextInput v-model="action.params.limit" />
                  <span>元</span>
                </div>
              </div>
            </div>
          </label>
        </template>
        <template v-else-if="action.action == ActionType.LowerBudget">
          <label class="flex items-center gap-1">
            <span class="p3-b">類型</span>
            <select
              class="p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50"
              v-model="action.params.budgetType"
            >
              <template v-for="(value, key) in BudgetType" :key="key">
                <option v-if="!Number.isInteger(value)" :value="value">
                  {{ value }}
                </option>
              </template>
            </select>
          </label>
          <label class="flex items-center gap-1">
            <span class="p3-b">調整</span>
            <select
              class="p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50"
              v-model="action.params.valueType"
            >
              <template v-for="(value, key) in ValueType" :key="key">
                <option v-if="!Number.isInteger(value)" :value="value">
                  {{ value }}
                </option>
              </template>
            </select>
          </label>
          <label class="flex items-center gap-1">
            <div
              class="flex w-auto items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-1.5"
            >
              <input
                type="text"
                class="p3-b w-4 text-center border-none outline-none shadow-none"
                v-model="action.params.value"
              />
            </div>
            <span>{{
              action.params.valueType === ValueType.Percentage ? "%" : "元"
            }}</span>
          </label>
          <label
            class="flex items-center gap-1 w-full"
            v-if="action.params.valueType === ValueType.Percentage"
          >
            <div class="flex flex-col gap-2">
              <div class="flex items-center gap-1">
                <input
                  type="checkbox"
                  v-model="hasLimitBudget"
                  id="maxBudget"
                />
                <label for="maxBudget">設定預算下限</label>
                <div class="flex gap-1 items-center" v-if="hasLimitBudget">
                  <TextInput v-model="action.params.limit" />
                  <span>元</span>
                </div>
              </div>
            </div>
          </label>
        </template>
      </div>
    </div>
  </div>
</template>
