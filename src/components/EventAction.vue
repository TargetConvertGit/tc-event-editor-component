<script setup lang="ts">
import TextInput from "./TextInput.vue";
import OuterBlock from "./OuterBlock.vue";
import axios from "axios";
import { getApiUrlBase, getToken } from "../apiConfig";
import EventActionTargetItem from "./EventActionTargetItem.vue";
import { PhX, PhTrash, PhNote } from "@phosphor-icons/vue";
import { Label } from "../shadcn/components/ui/label";
import {
  ClientType,
  AdLevelTypeGoogle,
  AdLevelTypeFacebook,
  ActionType,
  BudgetType,
  ValueType,
  EventActionTargetType,
} from "../types/event-items";
import { i18n } from "../i18n";

const { t } = i18n.global;
const eventData = inject("eventData");

// 未選擇
const unSelected = "";

const action = ref(eventData.value.action ?? {});
const actionEnable = ref(Boolean(Object.keys(action.value).length));
// 是否要限定數值
const hasLimitBudget = ref(false);
watch(hasLimitBudget, (val) => {
  if (!action.value.params?.limit) {
    delete action.value?.params?.limit;
  }
  if (!val) {
    delete action.value?.params?.limit;
  }
});

watchEffect(() => {
  if (
    action.value?.action == ActionType.SetNewBudget ||
    action.value?.action == ActionType.IncreaseBudget ||
    action.value?.action == ActionType.LowerBudget
  ) {
  } else {
    //刪除多餘資料
    delete action.value.params;
  }

  // 是否有限制
  hasLimitBudget.value = !isNaN(action.value?.params?.limit);
});

watch(
  action,
  (val) => {
    // 設定資料
    eventData.value.action = val;
  },
  { deep: true }
);

// 可選層級
const adLevelOption = computed(() => {
  if (client.value == ClientType.Google) {
    return AdLevelTypeGoogle;
  }
  return AdLevelTypeFacebook;
});

// 可選執行項
const actionOptionsMap: any = {
  [ClientType.Google]: {
    [AdLevelTypeGoogle.Campaign]: {
      SetNewBudget: ActionType.SetNewBudget,
      IncreaseBudget: ActionType.IncreaseBudget,
      LowerBudget: ActionType.LowerBudget,
      OpenProject: ActionType.OpenProject,
      SuspendProject: ActionType.SuspendProject,
    },
    [AdLevelTypeGoogle.AdGroup]: {
      OpenProject: ActionType.OpenProject,
      SuspendProject: ActionType.SuspendProject,
    },
    [AdLevelTypeGoogle.AdTag]: {
      OpenProject: ActionType.OpenProject,

      SuspendProject: ActionType.SuspendProject,
    },
    // [AdLevelTypeGoogle.Ad]: {
    //   OpenProject: ActionType.OpenProject,

    //   SuspendProject: ActionType.SuspendProject,
    // },
  },
  [ClientType.Facebook]: {
    [AdLevelTypeFacebook.Campaign]: {
      SetNewBudget: ActionType.SetNewBudget,
      IncreaseBudget: ActionType.IncreaseBudget,
      LowerBudget: ActionType.LowerBudget,
      OpenProject: ActionType.OpenProject,
      SuspendProject: ActionType.SuspendProject,
    },
    [AdLevelTypeFacebook.AdGroup]: {
      SetNewBudget: ActionType.SetNewBudget,
      IncreaseBudget: ActionType.IncreaseBudget,
      LowerBudget: ActionType.LowerBudget,
      OpenProject: ActionType.OpenProject,
      SuspendProject: ActionType.SuspendProject,
    },
    [AdLevelTypeFacebook.AdTag]: {
      OpenProject: ActionType.OpenProject,

      SuspendProject: ActionType.SuspendProject,
    },
    [AdLevelTypeFacebook.Ad]: {
      OpenProject: ActionType.OpenProject,

      SuspendProject: ActionType.SuspendProject,
    },
  },
};
// 可選執行項
const actionOption = computed(() => {
  const client = action.value?.client;
  const adLevel = action.value?.adLevel;

  if (client && adLevel) {
    const clientOptions = actionOptionsMap[client];
    if (clientOptions) {
      const adLevelOptions = clientOptions[adLevel];
      if (adLevelOptions) {
        return adLevelOptions;
      }
    }
  }

  return {};
});
// 預算單位
const valueTypeOptionsMap: any = {
  [ClientType.Google]: {
    [AdLevelTypeGoogle.Campaign]: {
      [ActionType.SetNewBudget]: [ValueType.Value],
      [ActionType.IncreaseBudget]: [ValueType.Percentage, ValueType.Value],
      [ActionType.LowerBudget]: [ValueType.Percentage, ValueType.Value],
      [ActionType.OpenProject]: [ValueType.Percentage, ValueType.Value],
      [ActionType.SuspendProject]: [ValueType.Percentage, ValueType.Value],
    },
    [AdLevelTypeGoogle.AdGroup]: {
      [ActionType.SuspendProject]: [ValueType.Percentage, ValueType.Value],
    },
    [AdLevelTypeGoogle.AdTag]: {
      [ActionType.SuspendProject]: [ValueType.Percentage, ValueType.Value],
    },
    // [AdLevelTypeGoogle.Ad]: {
    //   [ActionType.SuspendProject]: [ValueType.Percentage, ValueType.Value],
    // },
  },
  [ClientType.Facebook]: {
    [AdLevelTypeFacebook.Campaign]: {
      [ActionType.SetNewBudget]: [ValueType.Value],
      [ActionType.IncreaseBudget]: [ValueType.Percentage, ValueType.Value],
      [ActionType.LowerBudget]: [ValueType.Percentage, ValueType.Value],
      [ActionType.OpenProject]: [ValueType.Percentage, ValueType.Value],
      [ActionType.SuspendProject]: [ValueType.Percentage, ValueType.Value],
    },
    [AdLevelTypeFacebook.AdGroup]: {
      [ActionType.SetNewBudget]: [ValueType.Value],
      [ActionType.IncreaseBudget]: [ValueType.Percentage, ValueType.Value],
      [ActionType.LowerBudget]: [ValueType.Percentage, ValueType.Value],
      [ActionType.OpenProject]: [ValueType.Percentage, ValueType.Value],
      [ActionType.SuspendProject]: [ValueType.Percentage, ValueType.Value],
    },
    [AdLevelTypeFacebook.AdTag]: {
      [ActionType.SuspendProject]: [ValueType.Percentage, ValueType.Value],
    },
    [AdLevelTypeFacebook.Ad]: {
      [ActionType.SuspendProject]: [ValueType.Percentage, ValueType.Value],
    },
  },
};
// 預算單位
const valueTypeOption = computed(() => {
  const client = action.value?.client;
  const adLevel = action.value?.adLevel;
  const actionValue = action.value?.action;

  if (client && adLevel && actionValue) {
    const clientOptions = valueTypeOptionsMap[client];
    if (clientOptions) {
      const adLevelOptions = clientOptions[adLevel];
      if (adLevelOptions) {
        const actionOptions = adLevelOptions[actionValue];
        if (actionOptions) {
          return actionOptions;
        }
      }
    }
  }

  return [ValueType.Percentage, ValueType.Value]; // 默认值
});

const resetData = {
  target: {
    value: "",
  },
};

// 平台
const client = computed(() => {
  if (action.value.client) return `${action.value.client}`;
  return "";
});
const setClient = (v) => {
  action.value.client = Number(v);
  // 不可跨平台選目標
  delete action.value.target;
  setAdLevel(resetData);
};
// 層級
const adLevel = computed(() => {
  if (action.value.adLevel) return action.value.adLevel;
  return "";
});
const setAdLevel = (v) => {
  action.value.adLevel = Number(v.target.value);
  // 調整階層就預設不執行動作
  delete action.value.action;
  // 不可跨層級選目標
  delete action.value.target;
  setTargetType(resetData);
};
// 目標類型
const targetType = computed(() => {
  if (action.value.targetType) return action.value.targetType;
  return "";
});
const setTargetType = (v) => {
  action.value.targetType = Number(v.target.value);
};
// 執行
const actionValue = computed(() => {
  if (action.value.action) return action.value.action;
  return "";
});
const setActionValue = (v) => {
  action.value.action = Number(v.target.value);
};
// 執行
const paramsBudgetType = computed(() => {
  if (!action.value?.params) action.value.params = {};
  if (action.value.params.budgetType) return action.value.params.budgetType;
  return "";
});
const setParamsBudgetType = (v) => (action.value.params.budgetType = v);
// 類型
const paramsValueType = computed(() => {
  if (!action.value?.params) action.value.params = {};
  if (action.value.params.valueType) return action.value.params.valueType;
  return "";
});
const setParamsValueType = (v) => {
  action.value.params.valueType = v;
};

const addAccountModal = ref(false);
// 新增目標
const addAccount = (account) => {
  if (!action.value?.target) action.value.target = [];

  const existingIndex = action.value.target.findIndex(
    (item) => item === account.id
  );

  if (existingIndex === -1) {
    action.value.target.push(account.id);
  } else {
    action.value.target.splice(existingIndex, 1);
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

const getAccountLoading = ref(false);

const filterAccountList = computed(() => {
  const filterText = accountFilterText.value.trim().toLowerCase();

  const findMatchingItems = (items) => {
    let matchingItems = [];

    for (const item of items) {
      let shouldBreak = false;
      accountFilterTabs.value.forEach((i) => {
        if (i.label == item.type && i.status == item.enabled && !item.enabled) {
          shouldBreak = true;
        }
      });
      if (shouldBreak) continue;
      if (!item.children || item.children.length === 0) {
        matchingItems.push(item);
      }

      if (item.children && item.children.length > 0) {
        const childMatches = findMatchingItems(item.children);
        if (childMatches.length > 0) {
          matchingItems.push({
            id: item.id,
            name: item.name,
            children: childMatches,
            enabled: item.enabled,
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
    }
  }
  function filterData(data, searchText) {
    accountCount.value = 0;

    function countLeafNodes(node) {
      if (!node.children || node.children.length === 0) {
        accountCount.value++;
      } else {
        node.children.forEach((child) => countLeafNodes(child));
      }
    }

    function filterNodes(node, text) {
      const newItem = { ...node };
      const children = newItem.children;

      if (newItem.name.toLowerCase().includes(text)) {
        const filteredChildren = (children || []).filter((child) =>
          child.name.toLowerCase().includes(text)
        );
        if (filteredChildren.length > 0) {
          newItem.children = filteredChildren;
        }
        return newItem;
      } else if (children) {
        const filteredChildren = children
          .map((child) => filterNodes(child, text))
          .filter(Boolean);
        if (filteredChildren.length > 0) {
          newItem.children = filteredChildren;
          return newItem;
        }
      }

      return null;
    }

    const filteredData = data
      .map((node) => filterNodes(node, searchText))
      .filter(Boolean);

    filteredData.forEach((item) => countLeafNodes(item));
    return filteredData;
  }
  return filterData(filteredItems, filterText);
});

const resetSelectedAccount = () => {
  action.value.target = [];
};

// 選擇目標視窗
const showAccountModal = async () => {
  addAccountModal.value = true;
  getAccountLoading.value = true;
  await getAccountList();
  getAccountLoading.value = false;
};
const lockScroll = inject("lockScroll");
watch(addAccountModal, (val) => {
  lockScroll.value = val;
  if (!val) accountFilterText.value = "";
});
// 目標搜尋
const accountFilterText = ref("");
const accountCount = ref();
const selectAllAdsStatus = computed(() => {
  if (!action.value?.target) action.value.target = [];
  return (
    action.value.target.length > 0 &&
    action.value.target.length == accountCount.value
  );
});

// 全選
const selectAllAccount = () => {
  const filteredItems = filterAccountList.value;
  const selectAll = (items) => {
    for (const item of items) {
      if (item.children && item.children.length > 0) {
        selectAll(item.children);
      } else {
        action.value.target.push(item.id);
      }
    }
  };
  if (!action.value?.target) action.value.target = [];
  if (!action.value.target.length) {
    action.value.target = [];
    selectAll(filteredItems);
  } else {
    action.value.target = [];
  }
};

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

const accountModalLoading = ref(false);

const removeAction = () => {
  actionEnable.value = false;
  action.value = {};
  nextTick(() => {
    delete eventData.value.action;
  });
};

// 註解
const budgetTips = computed(() => {
  const clientValue = client.value;
  const adLevelValue = action.value.adLevel;
  const paramsBudgetTypeValue = paramsBudgetType.value;
  if (paramsBudgetTypeValue === "") return { show: false };
  const isGoogleCampaign =
    clientValue === ClientType.Google &&
    adLevelValue === AdLevelTypeGoogle.Campaign;
  const isFacebookCampaign =
    clientValue === ClientType.Facebook &&
    adLevelValue === AdLevelTypeFacebook.Campaign;
  const isFacebookAdGroup =
    clientValue === ClientType.Facebook &&
    adLevelValue === AdLevelTypeFacebook.AdGroup;

  const show = isGoogleCampaign || isFacebookCampaign || isFacebookAdGroup;

  const budgetType =
    paramsBudgetTypeValue === BudgetType.DailyBudget
      ? t("日預算")
      : t("總預算");
  const clientAndAdLevel = `${ClientType[clientValue]}${adLevelOption.value[adLevelValue]}`;
  const msg = show
    ? `${t("若{clientAndAdLevel}設定為{paramsBudgetTypeValue}，則不會變更", {
        clientAndAdLevel: clientAndAdLevel,
        paramsBudgetTypeValue:
          paramsBudgetTypeValue !== unSelected ? budgetType : "",
      })}`
    : "";
  // const msg = show
  //   ? `若${t(clientAndAdLevel)}設定為${
  //       paramsBudgetTypeValue !== unSelected ? budgetType : ""
  //     }，則不會變更`
  //   : "";

  return { show, msg };
});

onMounted(() => {
  accountModalLoading.value = true;
});
</script>

<template>
  <div
    class="p3-b cursor-pointer rounded shadow-01 hover:shadow-02 transition-all bg-light-5 py-1 px-2 text-dark-4 flex items-center justify-center"
    @click="actionEnable = true"
    v-if="!actionEnable"
  >
    + {{ t("加入動作") }}
  </div>

  <!-- 層級不同 可執行項目也不同 還有註解 -->
  <OuterBlock :title="t('動作')" :icon="'PhNavigationArrow'" id="action" v-else>
    <div class="flex flex-col gap-6">
      <div class="flex flex-col gap-6 pt-2">
        <div
          class="cursor-pointer text-dark-4 absolute bottom-4 right-3 hover:text-dark-3 transition-all p3-r"
          @click="removeAction"
        >
          <PhTrash size="18" weight="bold" />
        </div>
        <label class="flex justify-start items-center gap-4">
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
                  :class="[
                    { '!text-dark-5 p3-r': client == unSelected },
                    client === key
                      ? 'text-true-blue-3 drop-shadow-sm p3-b'
                      : 'text-dark-5 ',
                  ]"
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
          <label
            class="flex justify-start items-center gap-4"
            :class="{ 'pointer-events-none': client == unSelected }"
          >
            <span class="p3-r text-dark-4">{{ t("層級") }}</span>
            <select
              class="p3-b text-true-blue-3 min-w-[5rem] w-20 flex cursor-pointer items-center justify-center gap-4 rounded shadow-01 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50"
              :class="[adLevel != unSelected ? '!w-fit' : '!text-dark-5 !p3-r']"
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
          <div class="flex gap-4">
            <label
              class="flex justify-start items-center gap-4"
              :class="{ 'pointer-events-none': adLevel == unSelected }"
            >
              <span class="p3-r text-dark-4">{{ t("項目") }}</span>
              <select
                class="p3-b text-true-blue-3 min-w-[5rem] w-20 flex cursor-pointer items-center justify-center gap-4 rounded shadow-01 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50"
                :class="[
                  targetType != unSelected ? '!w-fit' : '!text-dark-5 !p3-r',
                ]"
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
                    action.target && action.target.length
                      ? ` text-true-blue-3`
                      : 'text-red-2 hover:text-red-1',
                  ]"
                  @click="showAccountModal"
                >
                  {{
                    action.target && action.target.length
                      ? `${t("已選{count}個項目", {
                          count: action.target.length,
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
                  action?.target ? (action?.target.length ? '123' : '') : ''
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
            class="sticky flex flex-col max-h-[95%] bg-light-5 rounded-xs shadow-01 w-4/5 py-4 px-10 h-fit top-[3%]"
          >
            <div class="flex justify-between">
              <span class="p2-b flex justify-center mb-3 text-dark-2 mr-auto">{{
                t("請選擇目標")
              }}</span>
              <Ph-X
                class="text-dark-3 cursor-pointer hover:text-dark-2 absolute top-4 right-4"
                weight="bold"
                @click="addAccountModal = false"
              />
            </div>
            <TextInput
              v-model="accountFilterText"
              :placeholder="t('搜尋')"
              class="w-full mr-auto mb-4"
            />
            <div
              class="flex gap-4 w-full empty:hidden mb-2 items-center"
              v-if="!getAccountLoading && accountFilterTabs.length"
            >
              <span class="p3-r text-dark-4">{{ t("篩選") }}</span>
              <label
                class="p3-r flex cursor-pointer items-center gap-1 rounded-md bg-light-3 px-2 py-0.5 text-dark-4 hover:shadow-01"
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
                <div
                  class="w-2 h-2 rounded-full bg-success-green-4"
                  v-show="!item.status"
                ></div>
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
              class="flex justify-end gap-4 items-center"
              v-if="!getAccountLoading"
            >
              <div
                class="flex w-fit items-center gap-1 justify-end p3-r text-true-blue-3 mr-4 hover:text-true-blue-2"
              >
                <label class="cursor-pointer" @click="selectAllAccount">
                  {{ selectAllAdsStatus ? t("取消全選") : t("全選") }}
                </label>
              </div>
            </div>
            <div
              v-if="getAccountLoading"
              class="h-4 w-4 mt-4 mx-auto animate-spin rounded-full border-2 border-solid border-blue-400 border-t-transparent"
            ></div>
            <template v-else>
              <div class="flex flex-col gap-4 flex-1 overflow-y-auto">
                <div
                  class="flex flex-col items-center justify-center gap-4 mt-4"
                  v-if="!filterAccountList.length"
                >
                  <ph-note :size="48" class="text-dark-4" />
                  <p class="p2-b text-dark-3">{{ t("No Data") }}</p>
                </div>
                <EventActionTargetItem
                  v-else
                  v-for="target in filterAccountList"
                  :key="target.id"
                  :target="target"
                  :targets="action?.target ?? []"
                />
              </div>
            </template>
            <div
              class="mx-auto flex w-fit items-center gap-4 mt-8"
              v-if="!getAccountLoading"
            >
              <div
                class="p3-r flex cursor-pointer items-center gap-1 rounded bg-true-blue-2 border border-transparent px-4 py-1.5 text-light-5 hover:bg-true-blue-3 transition-all"
                @click="addAccountModal = false"
              >
                {{ t("確定") }}
              </div>
            </div>
          </div>
        </div>
      </Teleport>
      <div class="flex flex-col gap-6">
        <label
          class="flex justify-start items-center gap-4"
          :class="{ 'pointer-events-none': targetType == unSelected }"
        >
          <span class="p3-r text-dark-4">{{ t("執行") }}</span>
          <select
            class="p3-b text-true-blue-3 min-w-[5rem] w-20 flex cursor-pointer items-center justify-center gap-4 rounded shadow-01 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50"
            :class="[
              actionValue != unSelected ? '!w-fit' : '!text-dark-5 !p3-r',
            ]"
            v-model="actionValue"
            @change="setActionValue"
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
        <!-- 新預算 -->
        <template
          v-if="
            action.action == ActionType.SetNewBudget ||
            action.action == ActionType.IncreaseBudget ||
            action.action == ActionType.LowerBudget
          "
        >
          <label class="flex justify-start gap-4 items-center">
            <span class="p3-r text-dark-4">{{ t("類型") }}</span>
            <div
              class="shadow-01 flex items-center py-1 px-2 rounded p3-r text-dark-3"
            >
              <div
                class="flex"
                v-for="(value, key, index) in BudgetType"
                :key="key"
              >
                <template v-if="!Number.isInteger(value)">
                  <span
                    class="cursor-pointer hover:drop-shadow-md"
                    :class="[
                      { '!text-dark-5 p3-r': paramsBudgetType == unSelected },
                      paramsBudgetType == BudgetType[key]
                        ? 'text-true-blue-3 drop-shadow-sm p3-b'
                        : 'text-dark-5 ',
                    ]"
                    @click="setParamsBudgetType(BudgetType[key])"
                  >
                    {{ t(value) }}
                  </span>
                  <div
                    class="text-dark-5 mx-1"
                    v-if="
                      index <
                      Object.keys(BudgetType).filter((key) =>
                        isNaN(Number(key))
                      ).length -
                        1
                    "
                  >
                    |
                  </div>
                </template>
              </div>
            </div>

            <span v-if="budgetTips.show" class="p3-r text-dark-4">
              {{ budgetTips.msg }}
            </span>
          </label>

          <div class="flex gap-4 w-full">
            <div class="flex justify-start items-center gap-4">
              <span class="p3-r text-dark-4 flex-shrink-0">{{
                t("調整")
              }}</span>
              <div class="flex gap-10 w-full">
                <div class="flex gap-4 flex-1">
                  <div
                    class="shadow-01 flex items-center py-1 px-2 rounded p3-r text-dark-3"
                  >
                    <div
                      class="flex"
                      v-for="(value, index) in valueTypeOption"
                      :key="value"
                    >
                      <template v-if="!Number.isInteger(value)">
                        <span
                          class="cursor-pointer hover:drop-shadow-md"
                          :class="[
                            {
                              '!text-dark-5 p3-r':
                                paramsValueType == unSelected,
                            },
                            paramsValueType == value
                              ? 'text-true-blue-3 drop-shadow-sm p3-b'
                              : 'text-dark-5 ',
                          ]"
                          @click="setParamsValueType(value)"
                        >
                          {{ t(`action${value}`) }}
                        </span>
                        <div
                          class="text-dark-5 mx-1"
                          v-if="index < valueTypeOption.length - 1"
                        >
                          |
                        </div>
                      </template>
                    </div>
                  </div>
                  <label
                    class="flex items-center gap-1 w-24"
                    v-if="paramsValueType != unSelected"
                  >
                    <TextInput
                      v-model="action.params.value"
                      :inputClass="'text-true-blue-3'"
                      :type="'number'"
                      :required="true"
                    />
                    <span class="p3-r text-dark-4">{{
                      action.params.valueType === ValueType.Percentage
                        ? "%"
                        : t("元")
                    }}</span>
                  </label>
                </div>
              </div>
            </div>
            <div
              class="flex justify-center gap-1 flex-col"
              v-if="
                action.action == ActionType.IncreaseBudget ||
                action.action == ActionType.LowerBudget
              "
            >
              <div class="flex gap-4 items-center">
                <span class="p3-r text-dark-4">{{
                  action.action == ActionType.IncreaseBudget
                    ? t("預算上限")
                    : t("預算下限")
                }}</span>
                <div class="flex items-center gap-1">
                  <div
                    class="p3-b text-true-blue-3 w-fit flex cursor-pointer items-center justify-center gap-4 rounded shadow-01 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50"
                    :class="{ '!text-dark-5 !p3-r': !hasLimitBudget }"
                    @click="hasLimitBudget = true"
                    v-if="!hasLimitBudget"
                  >
                    {{ t("無") }}
                  </div>

                  <div
                    class="flex gap-4 items-center w-28"
                    v-if="hasLimitBudget"
                  >
                    <TextInput
                      v-model="action.params.limit"
                      :inputClass="'text-true-blue-3'"
                      :type="'number'"
                      :required="true"
                    />
                  </div>
                  <PhX
                    v-if="hasLimitBudget"
                    @click="hasLimitBudget = false"
                    weight="bold"
                    class="text-dark-4 hover:text-dark-3 p3-b cursor-pointer"
                  />
                </div>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>
  </OuterBlock>
</template>
