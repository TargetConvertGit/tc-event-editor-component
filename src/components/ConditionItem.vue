<script setup lang="ts">
import TextInput from "./TextInput.vue";
import OuterBlock from "./OuterBlock.vue";
import { DatePicker } from "v-calendar";
import "v-calendar/style.css";
import axios from "axios";
import { getApiUrlBase, getToken } from "../apiConfig";
import EventActionTargetItem from "./EventActionTargetItem.vue";
import { PhX } from "@phosphor-icons/vue";

import {
  EventCondition,
  ConditionType,
  DateRangeType,
  OperationType,
  ValueType,
  ClientType,
  ConditionAdLevelTypeFacebook,
  ConditionAdLevelTypeGoogle,
  EventActionTargetType,
} from "../types/event-items";
import { i18n } from "../i18n";

const { t } = i18n.global;

interface Props {
  modelValue: EventCondition;
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

const resetData = {
  target: {
    value: "",
  },
};

// 平台
const client = computed(() => {
  if (condition.value.client) return condition.value.client;
  return "";
});
const setClient = (v) => {
  condition.value.client = Number(v.target.value);
  // 不可跨平台選目標
  delete condition.value.target;
  setAdLevel(resetData);
};
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
  // 調整階層就預設不執行動作
  delete condition.value.action;
  // 不可跨層級選目標
  delete condition.value.target;
  setTargetType(resetData);
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
  if (condition.value.targetType === EventActionTargetType.ForID) {
    condition.value.target = [];
  }
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
    condition.value.target.push({
      id: account.id,
      name: account.name,
    });
  } else {
    condition.value.target.splice(existingIndex, 1);
  }
};
provide("addTarget", addAccount);

// 目標列表
const allAccountList = ref();
const getAccountList = async () => {
  const targets = await axios({
    method: "get",
    url: `${getApiUrlBase()}/heybear/api/automation/platform-target?client=${
      client.value
    }&adLevel=${adLevel.value}`,
    withCredentials: true,
    headers: {
      Authorization: getToken(),
    },
  });
  allAccountList.value = targets.data.data;
};
const filterAccountList = computed(() => {
  const filterText = accountFilterText.value.trim().toLowerCase();

  const isMatching = (item) => item.name.toLowerCase().includes(filterText);

  const findMatchingItems = (items) => {
    let matchingItems = [];

    for (const item of items) {
      if (isMatching(item) && (!item.children || item.children.length === 0)) {
        matchingItems.push(item);
      }

      if (item.children && item.children.length > 0) {
        const childMatches = findMatchingItems(item.children);
        if (childMatches.length > 0) {
          matchingItems.push({
            id: item.id,
            name: item.name,
            children: childMatches,
          });
        }
      }
    }

    return matchingItems;
  };

  const filteredItems = [];
  for (const account of allAccountList.value) {
    if (account.children) {
      const matchingItems = findMatchingItems(account.children);
      if (matchingItems.length > 0) {
        filteredItems.push({
          id: account.id,
          name: account.name,
          children: matchingItems,
        });
      }
    } else {
      filteredItems.push({
        id: account.id,
        name: account.name,
      });
    }
  }

  return filteredItems;
});

const getAccountLoading = ref(false);
// 全選
const selectAllAccount = () => {
  const filteredItems = filterAccountList.value;
  const selectAll = (items) => {
    for (const item of items) {
      if (item.children && item.children.length > 0) {
        selectAll(item.children);
      } else {
        condition.value.target.push(item);
      }
    }
  };

  if (!condition.value.target.length) {
    condition.value.target = [];
    selectAll(filteredItems);
  } else {
    condition.value.target = [];
  }
};
// 選擇目標視窗
const showAccountModal = async () => {
  addAccountModal.value = true;
  getAccountLoading.value = true;
  await getAccountList();
  getAccountLoading.value = false;
};
// 目標搜尋
const accountFilterText = ref("");

const accountModalLoading = ref(false);
onMounted(() => {
  accountModalLoading.value = true;
});

function calculatePreviousTimeRange(timeRange) {
  const startTime = new Date(timeRange.start);
  const endTime = new Date(timeRange.end);

  const newEndTime = new Date(startTime - 1);

  const newStartTime = new Date(newEndTime - (endTime - startTime));

  const formatOptions = { year: "numeric", month: "2-digit", day: "2-digit" };
  const newStartTimeFormatted = newStartTime.toLocaleDateString(
    "zh-TW",
    formatOptions
  );
  const newEndTimeFormatted = newEndTime.toLocaleDateString(
    "zh-TW",
    formatOptions
  );

  // 组合成所需格式
  const formattedRange = `${newStartTimeFormatted}-${newEndTimeFormatted}`;

  return formattedRange;
}

// 比較區間顯示文字
const comparisonDateLabel = computed(() => {
  if (!props.modelValue.comparison) return "";
  if (dateRangeType.value === -1)
    return condition.value.dateRange
      ? `與${calculatePreviousTimeRange(condition.value.dateRange)}相比`
      : "";
  const dateRangeTypeLabel = {
    [DateRangeType.Today]: "與作天相比",
    [DateRangeType.Yesterday]: "與前一天相比",
    [DateRangeType.Last3Days]: "與前3天相比",
    [DateRangeType.Last7Days]: "與前7天相比",
    [DateRangeType.ThisMonth]: "與上個月相比",
  };
  return dateRangeTypeLabel[dateRangeType.value];
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

      <div class="flex items-center gap-2 flex-wrap">
        <label class="flex items-center gap-2">
          <span class="p4-b">平台</span>
          <select
            class="p4-b text-dark-3 flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50"
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
          <span class="p4-b">層級</span>
          <select
            class="p4-b text-dark-3 flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50"
            v-model="adLevel"
            @change="setAdLevel"
            required
          >
            <option value="" disabled>請選擇</option>
            <template v-for="(value, key) in adLevelOption" :key="key">
              <option v-if="!Number.isInteger(value)" :value="key">
                {{ t(`${ClientType[client]}${value}`) }}
              </option>
            </template>
          </select>
        </label>
        <label class="flex items-center gap-2" v-if="adLevel != unSelected">
          <span class="p4-b">目標</span>
          <select
            class="p4-b text-dark-3 flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50"
            v-model="targetType"
            @change="setTargetType"
            required
          >
            <option value="" disabled>請選擇</option>
            <template v-for="(value, key) in EventActionTargetType" :key="key">
              <option v-if="!Number.isInteger(value)" :value="key">
                {{ t(value) }}
              </option>
            </template>
          </select>
        </label>
      </div>
      <div
        class="flex flex-col my-2"
        v-if="targetType === EventActionTargetType.ForID"
      >
        <label class="flex items-center gap-2 relative">
          <span class="p4-b">指定目標</span>
          <div
            class="p4-r px-1.5 z-[2] py-0.5 text-true-blue-2 rounded bg-true-blue-5 flex w-fit cursor-pointer hover:bg-true-blue-4"
            @click="showAccountModal"
          >
            編輯
          </div>
          <input
            type="text"
            class="opacity-0 absolute left-0 top-0"
            required
            :value="
              condition?.target ? (condition?.target.length ? '123' : '') : ''
            "
          />
        </label>
        <div v-if="targetType === EventActionTargetType.ForID">
          <span class="p4-r text-true-blue-3 px-0.5">{{
            condition.target && condition.target.length
              ? `已選${condition.target.length}個目標`
              : "尚未選擇目標"
          }}</span>
        </div>
      </div>
      <!-- 選擇帳號彈窗 -->
      <Teleport to="#editor-container" v-if="accountModalLoading">
        <div
          class="absolute top-0 left-0 pt-4 right-0 bottom-0 w-full h-full flex justify-center bg-dark-3 bg-opacity-50 z-[2]"
          v-if="addAccountModal"
        >
          <div
            class="sticky flex flex-col max-h-[80%] bg-light-5 rounded-xs shadow-01 w-4/5 p-4 h-fit top-4"
          >
            <ph-x
              class="absolute top-1 right-1 cursor-pointer text-dark-2 hover:text-dark-1"
              @click="addAccountModal = false"
              size="18"
              weight="bold"
            />
            <span class="p2-b flex justify-center mb-3 text-dark-2"
              >請選擇目標</span
            >

            <TextInput :placeholder="'搜尋'" v-model="accountFilterText" />
            <div
              class="mt-2 flex w-fit ml-auto justify-end p4-b text-true-blue-3 cursor-pointer"
              @click="selectAllAccount"
            >
              全選
            </div>
            <div
              class="h-4 w-4 mx-auto animate-spin rounded-full border-2 border-solid border-blue-400 border-t-transparent"
              v-if="getAccountLoading"
            ></div>
            <template v-else>
              <div class="flex flex-col gap-2 mt-4 flex-1 overflow-y-auto">
                <EventActionTargetItem
                  v-for="target in filterAccountList"
                  :key="target.id"
                  :target="target"
                  :targets="condition?.target"
                />
              </div>
            </template>
          </div>
        </div>
      </Teleport>
      <label class="flex items-center gap-1" v-if="targetType != unSelected">
        <span class="p4-b">條件</span>
        <select
          class="p4-b text-dark-3 flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50"
          v-model="conditionType"
          @change="setConditionType"
          required
        >
          <option value="" disabled>請選擇</option>
          <template v-for="(value, key) in actionOption" :key="key">
            <option :value="value">
              {{ t(key) }}
            </option>
          </template>
        </select>
      </label>
      <div class="flex gap-2 flex-wrap" v-if="conditionType != unSelected">
        <div class="flex gap-2 flex-wrap">
          <label class="flex items-center gap-1">
            <span class="p4-b">運算</span>
            <select
              class="p4-b text-dark-3 flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50"
              v-model="dateRangeType"
              @change="setDateRangeType"
              required
            >
              <option value="" disabled>請選擇</option>
              <template v-for="(value, key) in DateRangeType" :key="key">
                <option v-if="!Number.isInteger(value)" :value="key">
                  {{ t(value) }}
                </option>
              </template>
            </select>
          </label>
          <div class="flex gap-2">
            <div v-if="dateRangeType == DateRangeType.SpecifiedTime">
              <DatePicker
                v-model.range="condition.dateRange"
                :timezone="Intl.DateTimeFormat().resolvedOptions().timeZone"
              >
                <template #default="{ togglePopover, inputValue }">
                  <div
                    class="p4-b text-dark-3 flex relative cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 transition-all hover:bg-light-3 hover:bg-opacity-50"
                    @click="togglePopover"
                  >
                    <input
                      :value="inputValue.end"
                      required
                      class="opacity-0 absolute w-full h-full pointer-events-none"
                    />

                    {{
                      inputValue.start && inputValue.end
                        ? `${inputValue.start}-${inputValue.end}`
                        : "請選定區間"
                    }}
                  </div>
                </template>
              </DatePicker>
            </div>
            <div
              class="p4-b text-dark-3 flex items-center justify-center"
              v-if="modelValue.comparison && comparisonDateLabel !== ''"
            >
              {{ comparisonDateLabel }}
            </div>
          </div>
        </div>
        <label class="flex items-center gap-1" v-if="dateRangeType != ''">
          <select
            class="p4-b text-dark-3 flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50"
            v-model="operation"
            @change="setOperation"
            required
          >
            <option value="" disabled>請選擇</option>
            <template v-for="(value, key) in OperationType" :key="key">
              <option v-if="!Number.isInteger(value)" :value="value">
                {{ t(key) }}
              </option>
            </template>
          </select>
        </label>
        <label class="flex items-center gap-1" v-if="operation != unSelected">
          <select
            class="p4-b text-dark-3 flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50"
            v-model="valueType"
            @change="setValueType"
            required
          >
            <option value="" disabled>請選擇</option>
            <template v-for="(value, key) in ValueType" :key="key">
              <option v-if="!Number.isInteger(value)" :value="value">
                {{ t(`condition${key}`) }}
              </option>
            </template>
          </select>
        </label>
        <div class="flex gap-1 items-center" v-if="valueType != unSelected">
          <TextInput
            v-model="condition.value"
            :inputClass="'p4-r'"
            :type="'number'"
            :required="true"
          />
          <span class="p4-b">{{
            condition.valueType === ValueType.Percentage ? "%" : "元"
          }}</span>
        </div>
      </div>
      <div class="flex items-center gap-2" v-if="dateRangeType != unSelected">
        <input
          type="checkbox"
          v-model="modelValue.comparison"
          id="comparison"
        />
        <label class="p4-b" for="comparison">加入比較區間</label>
      </div>
    </div>
  </OuterBlock>
</template>

<style lang="scss" scoped></style>
