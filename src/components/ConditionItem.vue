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
  modelValue: Condition;
  index: number | string;
}

const props = defineProps<Props>();

const unSelected = -1;

const data = ref({
  client: ClientType.Google,
});
const emit = defineEmits(["update:modelValue"]);
const adLevelOption = computed(() => {
  if (data?.["client"] == ClientType.Google) {
    return ConditionAdLevelTypeGoogle;
  }

  return ConditionAdLevelTypeFacebook;
});

const condition = computed(() => props.modelValue ?? {});

// 平台
const client = computed(() => {
  if (condition.value.client) return condition.value.client;
  return -1;
});
const setClient = (v) => (condition.value.client = v.target.value);
// 層級
const adLevel = computed(() => {
  if (condition.value.adLevel) return condition.value.adLevel;
  return -1;
});
const setAdLevel = (v) => {
  condition.value.adLevel = v.target.value;
  if (conditionType.value != unSelected) {
    emit("update:modelValue", {
      client: client.value,
      adLevel: adLevel.value,
    });
  }
};
// 條件
const conditionType = computed(() => {
  if (condition.value.conditionType) return condition.value.conditionType;
  return -1;
});
const setConditionType = (v) =>
  (condition.value.conditionType = v.target.value);
// 運算
const dateRangeType = computed(() => {
  if (condition.value.dateRangeType) return condition.value.dateRangeType;
  return 0;
});
const setDateRangeType = (v) =>
  (condition.value.dateRangeType = v.target.value);
// 數值條件
const operation = computed(() => {
  if (condition.value.operation) return condition.value.operation;
  return -1;
});
const setOperation = (v) => (condition.value.operation = v.target.value);
// 數值
const valueType = computed(() => {
  if (condition.value.valueType) return condition.value.valueType;
  return -1;
});
const setValueType = (v) => (condition.value.valueType = v.target.value);

// 可選執行項
const actionOptionsMap: any = {
  [ClientType.Google]: {
    [ConditionAdLevelTypeGoogle.Campaign]: {
      Clicks: ConditionType.Clicks,
      Impressions: ConditionType.Impressions,
      Cpc: ConditionType.Cpc,
      Spend: ConditionType.Spend,
      Conversions: ConditionType.Conversions,
      ConversionSpend: ConditionType.ConversionSpend,
      Roas: ConditionType.ReturnOnADSpending,
    },
    [ConditionAdLevelTypeGoogle.AdGroup]: {
      Clicks: ConditionType.Clicks,
      Impressions: ConditionType.Impressions,
      Cpc: ConditionType.Cpc,
      Spend: ConditionType.Spend,
      Conversions: ConditionType.Conversions,
      ConversionSpend: ConditionType.ConversionSpend,
      Roas: ConditionType.ReturnOnADSpending,
    },
    [ConditionAdLevelTypeGoogle.Account]: {
      BudgetRemaining: ConditionType.BudgetRemaining,
      Clicks: ConditionType.Clicks,
      Impressions: ConditionType.Impressions,
      Cpc: ConditionType.Cpc,
      Spend: ConditionType.Spend,
      Conversions: ConditionType.Conversions,
      ConversionSpend: ConditionType.ConversionSpend,
      Roas: ConditionType.ReturnOnADSpending,
    },
  },
  [ClientType.Facebook]: {
    [ConditionAdLevelTypeFacebook.Campaign]: {
      Clicks: ConditionType.Clicks,
      BudgetCap: ConditionType.BudgetCap,
      Impressions: ConditionType.Impressions,
      Cpc: ConditionType.Cpc,
      Spend: ConditionType.Spend,
      Conversions: ConditionType.Conversions,
      ConversionSpend: ConditionType.ConversionSpend,
      Roas: ConditionType.ReturnOnADSpending,
    },
    [ConditionAdLevelTypeFacebook.AdGroup]: {
      Clicks: ConditionType.Clicks,
      Impressions: ConditionType.Impressions,
      Cpc: ConditionType.Cpc,
      Spend: ConditionType.Spend,
      Conversions: ConditionType.Conversions,
      ConversionSpend: ConditionType.ConversionSpend,
      Roas: ConditionType.ReturnOnADSpending,
    },
    [ConditionAdLevelTypeFacebook.Account]: {
      BudgetRemaining: ConditionType.BudgetRemaining,
      Clicks: ConditionType.Clicks,
      Impressions: ConditionType.Impressions,
      Cpc: ConditionType.Cpc,
      Spend: ConditionType.Spend,
      Conversions: ConditionType.Conversions,
      ConversionSpend: ConditionType.ConversionSpend,
      Roas: ConditionType.ReturnOnADSpending,
    },
  },
};
// 可選執行項

const actionOption = computed(() => {
  if (client.value && adLevel.value) {
    const clientOptions = actionOptionsMap[client.value];
    if (clientOptions) {
      const adLevelOptions = clientOptions[adLevel.value];
      if (adLevelOptions) {
        return adLevelOptions;
      }
    }
  }

  return {};
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
            v-model="client"
            @change="setClient"
          >
            <option value="-1" disabled>請選擇</option>
            <template v-for="(value, key) in ClientType" :key="key">
              <option v-if="!Number.isInteger(value)" :value="key">
                {{ value }}
              </option>
            </template>
          </select>
        </label>
        <label class="flex items-center gap-2" v-if="client != unSelected">
          <span class="p3-b">層級</span>
          <select
            class="p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50"
            v-model="adLevel"
            @change="setAdLevel"
          >
            <option value="-1" disabled>請選擇</option>
            <template v-for="(value, key) in adLevelOption" :key="key">
              <option v-if="!Number.isInteger(value)" :value="key">
                {{ value }}
              </option>
            </template>
          </select>
        </label>
        <label class="flex items-center gap-2" v-if="adLevel != unSelected">
          <span class="p3-b">目標</span>
          <div>選擇廣告帳戶</div>
        </label>
      </div>
      <label class="flex items-center gap-1" v-if="adLevel != unSelected">
        <span class="p3-b">條件</span>
        <select
          class="p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50"
          v-model="conditionType"
          @change="setConditionType"
        >
          <option value="-1" disabled>請選擇</option>
          <template v-for="(value, key) in actionOption" :key="key">
            <option :value="value">
              {{ key }}
            </option>
          </template>
        </select>
      </label>
      <div class="flex gap-2 flex-wrap" v-if="conditionType != unSelected">
        <div class="flex gap-2">
          <label class="flex items-center gap-1">
            <span class="p3-b">運算</span>
            <select
              class="p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50"
              v-model="dateRangeType"
              @change="setDateRangeType"
            >
              <option value="0" disabled>請選擇</option>
              <template v-for="(value, key) in DateRangeType" :key="key">
                <option v-if="!Number.isInteger(value)" :value="key">
                  {{ value }}
                </option>
              </template>
            </select>
          </label>
          <div v-if="dateRangeType == DateRangeType.SpecifiedTime">
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
        <label class="flex items-center gap-1" v-if="dateRangeType != 0">
          <select
            class="p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50"
            v-model="operation"
            @change="setOperation"
          >
            <option value="-1" disabled>請選擇</option>
            <template v-for="(value, key) in OperationType" :key="key">
              <option v-if="!Number.isInteger(value)" :value="value">
                {{ value }}
              </option>
            </template>
          </select>
        </label>
        <label class="flex items-center gap-1" v-if="operation != unSelected">
          <select
            class="p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50"
            v-model="valueType"
            @change="setValueType"
          >
            <option value="-1" disabled>請選擇</option>
            <template v-for="(value, key) in ValueType" :key="key">
              <option v-if="!Number.isInteger(value)" :value="value">
                {{ value }}
              </option>
            </template>
          </select>
        </label>
        <TextInput
          v-model="condition.value"
          :type="'number'"
          v-if="valueType != unSelected"
        />
      </div>
      <div class="flex items-center gap-2" v-if="conditionType != unSelected">
        <input
          type="checkbox"
          v-model="modelValue.comparison"
          id="comparison"
        />
        <label for="comparison">加入比較區間</label>
      </div>
    </div>
  </OuterBlock>
</template>

<style lang="scss" scoped></style>
