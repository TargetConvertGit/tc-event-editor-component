<script setup lang="ts">
import TextInput from "./TextInput.vue";
import OuterBlock from "./OuterBlock.vue";
import { DatePicker } from "v-calendar";
import "v-calendar/style.css";
import axios from "axios";
import { getApiUrlBase, getToken } from "../apiConfig";
import EventActionTargetItem from "./EventActionTargetItem.vue";
import { PhX, PhTrash } from "@phosphor-icons/vue";
import { Label } from "../shadcn/components/ui/label";
import { Checkbox } from "../shadcn/components/ui/checkbox";

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
  condition.value.client = v;
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
const lockScroll = inject("lockScroll");
watch(addAccountModal, (val) => {
  lockScroll.value = val;
  if (!val) accountFilterText.value = "";
});
// 新增目標
const addAccount = (account) => {
  if (!condition.value?.target) condition.value.target = [];

  const existingIndex = condition.value.target.findIndex(
    (item) => item === account.id
  );

  if (existingIndex === -1) {
    condition.value.target.push(account.id);
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
  accountFilterTabs.value = calculateHierarchyLevels(allAccountList.value);
};
const filterAccountList = computed(() => {
  const filterText = accountFilterText.value.trim().toLowerCase();
  accountCount.value = 0;

  const isMatching = (item) => item.name.toLowerCase().includes(filterText);

  const findMatchingItems = (items) => {
    let matchingItems = [];

    for (const item of items) {
      let shouldBreak = false;
      accountFilterTabs.value.forEach((i) => {
        if (i.label == item.type && i.status == item.enabled && !item.enabled) {
          shouldBreak = true;
        }
      });

      if (
        isMatching(item) &&
        (!item.children || item.children.length === 0) &&
        !shouldBreak
      ) {
        matchingItems.push(item);
        accountCount.value++;
      }

      if (item.children && item.children.length > 0) {
        const childMatches = findMatchingItems(item.children);
        if (childMatches.length > 0) {
          matchingItems.push({
            id: item.id,
            name: item.name,
            children: childMatches,
          });
        } else {
          if (shouldBreak) {
            continue;
          }
        }
      } else {
        if (shouldBreak) {
          continue;
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
          type: account.type,
          children: matchingItems,
        });
      }
    } else {
      filteredItems.push({
        id: account.id,
        name: account.name,
        type: account.type,
      });
      accountCount.value++;
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
        condition.value.target.push(item.id);
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
const resetSelectedAccount = () => {
  condition.value.target = [];
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
const accountCount = ref();

const selectAllAdsStatus = computed(() => {
  if (!condition.value?.target) condition.value.target = [];
  return condition.value.target.length == accountCount.value;
});
const accountModalLoading = ref(false);
onMounted(() => {
  accountModalLoading.value = true;
});

const accountFilterTabs = ref([]);

function calculateHierarchyLevels(data) {
  const hierarchyLevels = [];

  function calculateLevelsRecursive(node, level) {
    if (node.type !== 1 && node.type !== 5) {
      if (!hierarchyLevels[level - 1]) {
        hierarchyLevels[level - 1] = {
          label: node.type,
          status: false,
        };
      }

      hierarchyLevels[level - 1].status = true;
    }

    if (node.children && node.children.length > 0) {
      for (const childNode of node.children) {
        calculateLevelsRecursive(childNode, level + 1);
      }
    }
  }

  data.forEach((node) => {
    calculateLevelsRecursive(node, 1);
  });

  return hierarchyLevels.filter((level) => level !== undefined);
}

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

const uniqueId = ref(Math.random().toString(16).slice(2));

// 比較區間顯示文字
const comparisonDateLabel = computed(() => {
  if (!props.modelValue.comparison) return "";
  if (dateRangeType.value === -1)
    return condition.value.dateRange
      ? `${calculatePreviousTimeRange(condition.value.dateRange)}`
      : "";
  const dateRangeTypeLabel = {
    [DateRangeType.Today]: t("與作天相比"),
    [DateRangeType.Yesterday]: t("與前一天相比"),
    [DateRangeType.Last3Days]: t("與前3天相比"),
    [DateRangeType.Last7Days]: t("與前7天相比"),
    [DateRangeType.ThisMonth]: t("與上個月相比"),
  };
  return dateRangeTypeLabel[dateRangeType.value];
});
</script>

<template>
  <OuterBlock
    :title="t('條件 {count}', { count: index + 1 })"
    :icon="'PhCheckSquare'"
  >
    <div class="flex flex-col gap-6">
      <div class="flex flex-col gap-6 pt-2">
        <div
          class="cursor-pointer text-dark-4 absolute bottom-4 right-3 hover:text-dark-3 p3-r transition-all"
          @click="emit('removeItem')"
        >
          <PhTrash size="18" weight="bold" />
        </div>
        <label class="flex justify-start items-center gap-2">
          <div class="relative w-fit">
            <span class="p3-r text-dark-4">{{ t("平台") }}</span>
            <input
              type="text"
              class="opacity-0 absolute left-0 top-0 pointer-events-none"
              required
              :value="client"
            />
          </div>
          <div
            class="shadow-01 flex items-center py-1 px-2 rounded p3-r text-dark-3"
          >
            <div
              class="flex"
              v-for="(value, key, index) in ClientType"
              :key="key"
            >
              <template v-if="!Number.isInteger(value)">
                <span
                  class="cursor-pointer hover:drop-shadow-md"
                  :class="{
                    'text-true-blue-3 drop-shadow-sm p3-b': client == key,
                  }"
                  @click="setClient(key)"
                >
                  {{ value }}
                </span>
                <div
                  class="text-dark-5 mx-1"
                  v-if="
                    index <
                    Object.keys(ClientType).filter((key) => isNaN(Number(key)))
                      .length -
                      1
                  "
                >
                  |
                </div>
              </template>
            </div>
          </div>
        </label>
        <div class="flex gap-6">
          <label class="flex justify-start items-center gap-2">
            <span class="p3-r text-dark-4">{{ t("層級") }}</span>
            <select
              class="p3-b text-true-blue-3 w-fit flex cursor-pointer items-center justify-center gap-2 rounded shadow-01 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50"
              v-model="adLevel"
              @change="setAdLevel"
              required
            >
              <option value="" disabled>{{ t("請選擇") }}</option>
              <template v-for="(value, key) in adLevelOption" :key="key">
                <option
                  v-if="!Number.isInteger(value) && client != unSelected"
                  :value="key"
                >
                  {{ t(`${ClientType[client]}${value}`) }}
                </option>
              </template>
            </select>
          </label>
          <div class="flex gap-2">
            <label class="flex justify-start items-center gap-2">
              <span class="p3-r text-dark-4">{{ t("項目") }}</span>
              <select
                class="p3-b text-true-blue-3 w-fit flex cursor-pointer items-center justify-center gap-2 rounded shadow-01 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50"
                v-model="targetType"
                @change="setTargetType"
                required
              >
                <option value="" disabled>{{ t("請選擇") }}</option>

                <template
                  v-for="(value, key) in EventActionTargetType"
                  :key="key"
                >
                  <option v-if="!Number.isInteger(value)" :value="key">
                    {{ t(value) }}
                  </option>
                </template>
              </select>
            </label>
            <div
              v-if="targetType === EventActionTargetType.ForID"
              class="flex relative"
            >
              <template v-if="targetType === EventActionTargetType.ForID">
                <span
                  class="p3-b w-fit flex cursor-pointer items-center justify-center z-[2]"
                  :class="[
                    condition.target && condition.target.length
                      ? ` text-true-blue-3`
                      : 'text-red-2',
                  ]"
                  @click="showAccountModal"
                >
                  {{
                    condition.target && condition.target.length
                      ? `${t("已選${count}個項目", {
                          count: condition.target.length,
                        })}`
                      : t("未選擇")
                  }}
                </span>
              </template>
              <input
                type="text"
                class="opacity-0 absolute left-0 top-0"
                required
                :value="
                  condition?.target
                    ? condition?.target.length
                      ? '123'
                      : ''
                    : ''
                "
              />
            </div>
          </div>
        </div>
      </div>
      <!-- 選擇帳號彈窗 -->
      <Teleport to="#editor-container-outer" v-if="accountModalLoading">
        <div
          class="sticky top-0 left-0 pt-4 right-0 items-start bottom-0 w-full h-full flex justify-center bg-dark-3 bg-opacity-50 z-[2]"
          v-if="addAccountModal"
        >
          <div
            class="sticky flex flex-col max-h-[95%] bg-light-5 rounded-xs shadow-01 w-4/5 p-4 h-fit top-[3%]"
          >
            <div class="flex justify-between">
              <span class="p2-b flex justify-center mb-3 text-dark-2 mr-auto">
                {{ t("請選擇目標") }}
              </span>
              <Ph-X
                class="text-dark-3 cursor-pointer hover:text-dark-2"
                weight="bold"
                @click="addAccountModal = false"
              />
            </div>
            <TextInput
              v-model="accountFilterText"
              :placeholder="t('搜尋')"
              class="max-w-xs min-w-[200px] mx-auto w-full mb-4"
            />
            <div
              class="flex gap-2 mx-auto items-center empty:hidden mb-8"
              v-if="!getAccountLoading && accountFilterTabs.length"
            >
              <span class="p3-r text-dark-3">{{ t("篩選") }}</span>
              <label
                class="p3-r flex cursor-pointer items-center gap-1 rounded bg-light-5 px-1.5 py-0.5 text-dark-3 border"
                :class="{
                  'bg-true-blue-3 border-true-blue-3 text-light-5':
                    !item.status,
                }"
                v-for="item in accountFilterTabs"
                :key="item.label"
                :for="item.label"
              >
                <input
                  type="checkbox"
                  v-model="item.status"
                  :id="item.label"
                  class="hidden"
                  @change="resetSelectedAccount"
                />
                {{
                  t(
                    `${ClientType[client]}${item.status ? "On" : "Off"}${
                      item.label
                    }`
                  )
                }}
              </label>
            </div>
            <div
              class="flex justify-between items-center"
              v-if="!getAccountLoading"
            >
              <div class="flex items-center gap-2">
                <div class="flex items-center gap-1">
                  <div
                    class="w-1.5 h-1.5 rounded-full bg-success-green-3"
                  ></div>
                  <span class="p4-r">{{ t("啟用中") }}</span>
                </div>
                <div class="flex items-center gap-1">
                  <div class="w-1.5 h-1.5 rounded-full bg-red-3"></div>
                  <span class="p4-r">{{ t("暫停中") }}</span>
                </div>
              </div>
              <div
                class="flex w-fit items-center gap-1 justify-end p3-r text-true-blue-3 cursor-pointer"
              >
                <Checkbox
                  class="rounded data-[state=checked]:bg-true-blue-3 border-true-blue-5"
                  id="selectAllAdsStatus"
                  :checked="selectAllAdsStatus"
                  @update:checked="selectAllAccount"
                />
                <label for="selectAllAdsStatus"> {{ t("全選") }} </label>
              </div>
            </div>

            <div
              v-if="getAccountLoading"
              class="h-4 w-4 mt-4 mx-auto animate-spin rounded-full border-2 border-solid border-blue-400 border-t-transparent"
            ></div>
            <template v-else>
              <div class="flex flex-col gap-2 flex-1 overflow-y-auto">
                <EventActionTargetItem
                  v-for="target in filterAccountList"
                  :key="target.id"
                  :target="target"
                  :targets="condition?.target ?? []"
                />
              </div>
            </template>
            <div
              class="mx-auto flex w-fit items-center gap-4 mt-4"
              v-if="!getAccountLoading"
            >
              <div
                class="p3-b flex cursor-pointer items-center gap-1 rounded bg-true-blue-2 border border-transparent px-2 py-1 text-light-5 hover:bg-true-blue-3"
                @click="addAccountModal = false"
              >
                {{ t("確定") }}
              </div>
            </div>
          </div>
        </div>
      </Teleport>

      <label class="flex justify-start gap-2 items-center">
        <span class="p3-r text-dark-4">{{ t("條件") }}</span>
        <select
          class="p3-b text-true-blue-3 flex cursor-pointer items-center justify-center gap-2 rounded shadow-01 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50"
          v-model="conditionType"
          @change="setConditionType"
          required
        >
          <option value="" disabled>{{ t("請選擇") }}</option>
          <template v-for="(value, key) in actionOption" :key="key">
            <option :value="value">
              {{ t(key) }}
            </option>
          </template>
        </select>
      </label>
      <div class="flex flex-col gap-6">
        <div class="flex gap-2">
          <label class="flex justify-start gap-2 items-center">
            <span class="p3-r text-dark-4">{{ t("區間") }}</span>
            <select
              class="p3-b text-true-blue-3 flex cursor-pointer items-center justify-center gap-2 rounded shadow-01 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50"
              v-model="dateRangeType"
              @change="setDateRangeType"
              required
            >
              <option value="" disabled>{{ t("請選擇") }}</option>
              <template v-for="(value, key) in DateRangeType" :key="key">
                <option v-if="!Number.isInteger(value)" :value="key">
                  {{ t(value) }}
                </option>
              </template>
            </select>
          </label>

          <div class="flex gap-2 empty:hidden">
            <div v-if="dateRangeType == DateRangeType.SpecifiedTime">
              <DatePicker
                v-model.range="condition.dateRange"
                :timezone="Intl.DateTimeFormat().resolvedOptions().timeZone"
              >
                <template #default="{ togglePopover, inputValue }">
                  <div
                    class="p3-b text-true-blue-3 flex relative cursor-pointer items-center justify-center gap-2 rounded shadow-01 bg-light-5 py-1 px-2 transition-all hover:bg-light-3 hover:bg-opacity-50"
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
                        : t("請選定區間")
                    }}
                  </div>
                </template>
              </DatePicker>
            </div>
            <div class="flex items-center gap-2 empty:hidden">
              <input
                type="checkbox"
                v-model="modelValue.comparison"
                class="hidden"
                :id="`comparison-${uniqueId}`"
              />
              <label
                class="p3-b text-dark-3 w-fit flex cursor-pointer items-center justify-center gap-2 rounded bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50"
                :for="`comparison-${uniqueId}`"
                v-if="!modelValue.comparison"
                >{{ t("加入比較區間") }}</label
              >
              <span class="p3-b text-dark-3" v-if="modelValue.comparison">
                vs
              </span>
            </div>
            <div class="flex items-center gap-1">
              <div
                class="p3-b rounded shadow-01 bg-light-5 py-1 px-2 text-true-blue-3 flex items-center justify-center"
                v-if="modelValue.comparison && comparisonDateLabel !== ''"
              >
                {{ comparisonDateLabel }}
              </div>
              <PhX
                v-if="modelValue.comparison"
                @click="modelValue.comparison = false"
                weight="bold"
                class="text-dark-4 hover:text-dark-3 p3-b cursor-pointer"
              />
            </div>
          </div>
        </div>
        <div class="flex justify-start gap-2 items-center">
          <span class="p3-r text-dark-4">{{ t("運算") }}</span>
          <label class="flex items-center gap-2">
            <select
              class="p3-b text-true-blue-3 flex cursor-pointer items-center justify-center gap-2 rounded shadow-01 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50"
              v-model="operation"
              @change="setOperation"
              required
            >
              <option value="" disabled>{{ t("請選擇") }}</option>
              <template v-for="(value, key) in OperationType" :key="key">
                <option v-if="!Number.isInteger(value)" :value="value">
                  {{ t(key) }}
                </option>
              </template>
            </select>
          </label>
          <label class="flex items-center gap-1">
            <select
              class="p3-b text-true-blue-3 flex cursor-pointer items-center justify-center gap-2 rounded shadow-01 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50"
              v-model="valueType"
              @change="setValueType"
              required
            >
              <option value="" disabled>{{ t("請選擇") }}</option>
              <template v-for="(value, key) in ValueType" :key="key">
                <option v-if="!Number.isInteger(value)" :value="value">
                  {{ t(`condition${key}`) }}
                </option>
              </template>
            </select>
          </label>
          <div class="flex gap-1 items-center w-24">
            <TextInput
              v-model="condition.value"
              :inputClass="'text-true-blue-3'"
              :type="'number'"
              :required="true"
            />
            <span class="p3-r text-dark-4" v-if="valueType != unSelected">{{
              condition.valueType === ValueType.Percentage ? "%" : t("元")
            }}</span>
          </div>
        </div>
      </div>
    </div>
  </OuterBlock>
</template>

<style lang="scss" scoped></style>
