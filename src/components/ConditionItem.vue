<script setup lang="ts">
import TextInput from "./TextInput.vue";
import OuterBlock from "./OuterBlock.vue";
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
  EventActionTargetType,
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

const emit = defineEmits(["update:modelValue", "removeItem"]);

const condition = computed(() => props.modelValue ?? {});

// 未選擇
const unSelected = "";

// 層級可選項
const adLevelOption = computed(() => {
  if (condition.value?.["client"] == ClientType.Google) {
    return ConditionAdLevelTypeGoogle;
  }

  return ConditionAdLevelTypeFacebook;
});

// 平台
const client = computed(() => {
  if (condition.value.client) return condition.value.client;
  return "";
});
const setClient = (v) => (condition.value.client = Number(v.target.value));
// 層級
const adLevel = computed(() => {
  if (condition.value.adLevel) return condition.value.adLevel;
  return "";
});
const setAdLevel = (v) => {
  condition.value.adLevel = Number(v.target.value);
  if (conditionType.value != unSelected) {
    emit("update:modelValue", {
      client: client.value,
      adLevel: adLevel.value,
    });
  }
};
// 目標類型
const targetType = computed(() => {
  if (condition.value.targetType) return condition.value.targetType;
  return "";
});
const setTargetType = (v) => {
  condition.value.targetType = Number(v.target.value);
  // 調整階層就預設不執行動作
  delete condition.value.action;
  // 不可跨平台選目標
  delete condition.value.target;
};
// 條件
const conditionType = computed(() => {
  if (condition.value.conditionType) return condition.value.conditionType;
  return "";
});
const setConditionType = (v) =>
  (condition.value.conditionType = v.target.value);
// 運算
const dateRangeType = computed(() => {
  if (condition.value.dateRangeType) return condition.value.dateRangeType;
  return "";
});
const setDateRangeType = (v) => {
  condition.value.dateRangeType = Number(v.target.value);
  if (Number(v.target.value) !== DateRangeType.SpecifiedTime) {
    delete condition.value.dateRange;
  }
};
// 數值條件
const operation = computed(() => {
  if (condition.value.operation) return condition.value.operation;
  return "";
});
const setOperation = (v) => (condition.value.operation = v.target.value);
// 數值
const valueType = computed(() => {
  if (condition.value.valueType) return condition.value.valueType;
  return "";
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
      ReturnOnADSpending: ConditionType.ReturnOnADSpending,
    },
    [ConditionAdLevelTypeGoogle.AdGroup]: {
      Clicks: ConditionType.Clicks,
      Impressions: ConditionType.Impressions,
      Cpc: ConditionType.Cpc,
      Spend: ConditionType.Spend,
      Conversions: ConditionType.Conversions,
      ConversionSpend: ConditionType.ConversionSpend,
      ReturnOnADSpending: ConditionType.ReturnOnADSpending,
    },
    [ConditionAdLevelTypeGoogle.Account]: {
      BudgetRemaining: ConditionType.BudgetRemaining,
      Clicks: ConditionType.Clicks,
      Impressions: ConditionType.Impressions,
      Cpc: ConditionType.Cpc,
      Spend: ConditionType.Spend,
      Conversions: ConditionType.Conversions,
      ConversionSpend: ConditionType.ConversionSpend,
      ReturnOnADSpending: ConditionType.ReturnOnADSpending,
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
      ReturnOnADSpending: ConditionType.ReturnOnADSpending,
    },
    [ConditionAdLevelTypeFacebook.AdGroup]: {
      Clicks: ConditionType.Clicks,
      Impressions: ConditionType.Impressions,
      Cpc: ConditionType.Cpc,
      Spend: ConditionType.Spend,
      Conversions: ConditionType.Conversions,
      ConversionSpend: ConditionType.ConversionSpend,
      ReturnOnADSpending: ConditionType.ReturnOnADSpending,
    },
    [ConditionAdLevelTypeFacebook.Account]: {
      BudgetRemaining: ConditionType.BudgetRemaining,
      Clicks: ConditionType.Clicks,
      Impressions: ConditionType.Impressions,
      Cpc: ConditionType.Cpc,
      Spend: ConditionType.Spend,
      Conversions: ConditionType.Conversions,
      ConversionSpend: ConditionType.ConversionSpend,
      ReturnOnADSpending: ConditionType.ReturnOnADSpending,
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

const addAccountModal = ref(false);
// 新增目標
const addAccount = (account) => {
  if (!condition.value?.target) condition.value.target = [];

  const existingIndex = condition.value.target.findIndex(
    (item) => item.id === account.id
  );

  if (existingIndex === -1) {
    condition.value.target.push(account);
  } else {
    condition.value.target.splice(existingIndex, 1);
  }
};

// 目標列表
const allAccountList = ref();
const getAccountList = async () => {
  allAccountList.value = [
    { id: 1, name: "qwe" },
    { id: 2, name: "asd" },
    { id: 3, name: "zxc" },
    { id: 4, name: "rty" },
    { id: 5, name: "bgfb" },
  ];
};
const filterItem = computed(() => "name");
const accountList = computed(() => {
  const filterText = accountFilterText.value.toLowerCase();

  return allAccountList.value.filter((acc) =>
    acc[filterItem.value].toLowerCase().includes(filterText)
  );
});

// 選擇目標視窗
const showAccountModal = async () => {
  await getAccountList();
  addAccountModal.value = true;
};

// 目標搜尋
const accountFilterText = ref("");

const accountModalLoading = ref(false);
onMounted(() => {
  accountModalLoading.value = true;
});
</script>

<template>
  <OuterBlock :title="'條件' + (index + 1)">
    <div class="flex flex-col gap-2 relative pt-2">
      <div
        class="cursor-pointer text-dark-4 absolute -top-2.5 -right-1.5 p4-b"
        @click="emit('removeItem')"
      >
        刪除
      </div>

      <div class="flex items-center gap-2">
        <label class="flex items-center gap-2">
          <span class="p3-b">平台</span>
          <select
            class="p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50"
            v-model="client"
            @change="setClient"
            required
          >
            <option value="" disabled>請選擇</option>
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
            required
          >
            <option value="" disabled>請選擇</option>
            <template v-for="(value, key) in adLevelOption" :key="key">
              <option v-if="!Number.isInteger(value)" :value="key">
                {{ $t(`${ClientType[client]}${value}`) }}
              </option>
            </template>
          </select>
        </label>
        <label class="flex items-center gap-2" v-if="adLevel != unSelected">
          <span class="p4-b">目標</span>
          <select
            class="p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50"
            v-model="targetType"
            @change="setTargetType"
            required
          >
            <option value="" disabled>請選擇</option>
            <template v-for="(value, key) in EventActionTargetType" :key="key">
              <option v-if="!Number.isInteger(value)" :value="key">
                {{ $t(value) }}
              </option>
            </template>
          </select>
        </label>
      </div>
      <div
        class="flex flex-col"
        v-if="targetType === EventActionTargetType.ForID"
      >
        <label class="flex items-center gap-2">
          <span class="p4-b">指定目標</span>
          <div
            class="p4-r px-1.5 py-0.5 text-true-blue-2 rounded bg-true-blue-5 flex w-fit cursor-pointer hover:bg-true-blue-4"
            @click="showAccountModal"
          >
            編輯
          </div>
        </label>
        <div v-if="targetType === EventActionTargetType.ForID">
          <span
            class="p4-r text-true-blue-3 px-0.5"
            v-for="(acc, i) in condition.target"
            :key="acc.id"
            >{{ acc.name
            }}{{ i !== condition.target.length - 1 ? "," : "" }}</span
          >
        </div>
      </div>
      <!-- 選擇帳號彈窗 -->
      <Teleport to="#editor-container" v-if="accountModalLoading">
        <div
          class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full flex justify-center items-center bg-dark-3 rounded bg-opacity-50 z-[2]"
          v-if="addAccountModal"
        >
          <div
            class="relative bg-light-5 rounded-xs shadow-01 w-4/5 p-4 min-h-[300px] h-fit"
          >
            <div
              class="absolute top-1 right-2 cursor-pointer"
              @click="addAccountModal = false"
            >
              X
            </div>
            <span class="p1-b flex justify-center mb-1">請選擇目標</span>
            <TextInput v-model="accountFilterText" />
            <div class="flex flex-col gap-2 mt-2">
              <div
                class="border border-dark-5 rounded py-1 px-3 flex gap-1 hover:border-transparent hover:bg-true-blue-5 cursor-pointer"
                v-for="account in accountList"
                :key="account.id"
                @click="addAccount(account)"
              >
                <div class="flex flex-col flex-1">
                  <span class="p3-b">{{ account.id }}</span>
                  <span class="p4-r">{{ account.name }}</span>
                </div>
                <div
                  class="rounded h-3 w-3 border"
                  :class="[
                    condition.target
                      ? condition?.target.find((ac) => ac.id === account.id)
                        ? 'bg-red-1'
                        : ''
                      : '',
                  ]"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </Teleport>
      <label class="flex items-center gap-1" v-if="targetType != unSelected">
        <span class="p3-b">條件</span>
        <select
          class="p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50"
          v-model="conditionType"
          @change="setConditionType"
          required
        >
          <option value="" disabled>請選擇</option>
          <template v-for="(value, key) in actionOption" :key="key">
            <option :value="value">
              {{ $t(key) }}
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
              required
            >
              <option value="" disabled>請選擇</option>
              <template v-for="(value, key) in DateRangeType" :key="key">
                <option v-if="!Number.isInteger(value)" :value="key">
                  {{ $t(value) }}
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
        <label class="flex items-center gap-1" v-if="dateRangeType != ''">
          <select
            class="p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50"
            v-model="operation"
            @change="setOperation"
            required
          >
            <option value="" disabled>請選擇</option>
            <template v-for="(value, key) in OperationType" :key="key">
              <option v-if="!Number.isInteger(value)" :value="value">
                {{ $t(key) }}
              </option>
            </template>
          </select>
        </label>
        <label class="flex items-center gap-1" v-if="operation != unSelected">
          <select
            class="p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50"
            v-model="valueType"
            @change="setValueType"
            required
          >
            <option value="" disabled>請選擇</option>
            <template v-for="(value, key) in ValueType" :key="key">
              <option v-if="!Number.isInteger(value)" :value="value">
                {{ $t(`condition${key}`) }}
              </option>
            </template>
          </select>
        </label>
        <TextInput
          v-model="condition.value"
          :type="'number'"
          v-if="valueType != unSelected"
          :required="true"
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
