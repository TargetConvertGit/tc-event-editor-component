<script setup lang="ts">
import TextInput from "./TextInput.vue";
import NumberInput from "./NumberInput.vue";
import OuterBlock from "./OuterBlock.vue";
import axios from "axios";
import { enumToObj, arrayToObj } from "../lib";
import EventActionTargetItem from "./EventActionTargetItem.vue";
import {
  PhX,
  PhTrash,
  PhNote,
  PhArrowsClockwise,
  PhPlusCircle,
} from "@phosphor-icons/vue";
import { Label } from "../shadcn/components/ui/label";
import { watchDebounced } from "@vueuse/core";
import { Tooltip } from "floating-vue";
import "floating-vue/dist/style.css";
import {
  ClientType,
  AdLevelTypeGoogle,
  AdLevelTypeFacebook,
  ActionType,
  BudgetType,
  ValueType,
  EventActionTargetType,
} from "../types/event-items";
import { DynamicScroller, DynamicScrollerItem } from "vue-virtual-scroller";
import "vue-virtual-scroller/dist/vue-virtual-scroller.css";
import { i18n } from "../i18n";
import ToggleCheckBox from "./ToggleCheckBox.vue";
import Select from "./Select.vue";

interface Props {
  showErrorModal: boolean;
}
const props = defineProps<Props>();

const showErrorModal = computed(() => props.showErrorModal);
const { t } = i18n.global;
const eventData = inject("eventData");
const initialData = inject("initialData");

// 未選擇
const unSelected = "";

const action = ref(eventData.value.action ?? {});
// 是否要限定數值
const hasLimitBudget = ref(false);
watch(hasLimitBudget, (val: boolean) => {
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

  if (!action.value?.pipeline) action.value.pipeline = true;
});

watch(
  action,
  (val: any) => {
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
    [AdLevelTypeGoogle.AssetGroup]: {
      OpenProject: ActionType.OpenProject,
      SuspendProject: ActionType.SuspendProject,
    },
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
    [AdLevelTypeGoogle.AssetGroup]: {
      [ActionType.SuspendProject]: [ValueType.Percentage, ValueType.Value],
    },
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

  return [ValueType.Percentage, ValueType.Value]; // 默認
});

// 平台
const client = computed(() => {
  if (action.value.client) return `${action.value.client}`;
  return "";
});
const setClient = (v: number) => {
  action.value.client = v;
  // 不可跨平台選目標
  delete action.value.target;
  setAdLevel("");
};
// 層級
const adLevel = computed(() => {
  if (action.value.adLevel) return action.value.adLevel;
  return "";
});
const setAdLevel = (v: number | string) => {
  action.value.adLevel = v;
  // 調整階層就預設不執行動作
  setActionValue(-1);
  // delete action.value.action;
  // 不可跨層級選目標
  delete action.value.target;
  // setTargetType("");
};
// 目標類型
const targetType = computed(() => {
  if (action.value.targetType) return action.value.targetType;
  return "";
});
const setTargetType = (v: number | string) => {
  action.value.targetType = v;
};
// 執行
const actionValue = computed(() => {
  if (action.value.action) return action.value.action;
  return -1;
});
const setActionValue = (v: number | string) => {
  action.value.action = v;
};
// 執行
const paramsBudgetType = computed(() => {
  if (!action.value?.params) action.value.params = {};
  if (action.value.params.budgetType) return action.value.params.budgetType;
  return "";
});
const setParamsBudgetType = (v: string) => (action.value.params.budgetType = v);
// 類型
const paramsValueType = computed(() => {
  if (!action.value?.params) action.value.params = {};
  if (action.value.params.valueType) return action.value.params.valueType;
  return "";
});
const setParamsValueType = (v: string) => {
  action.value.params.valueType = v;
  action.value.params.value = "";
};

// 預算選項註解
const budgetTips = computed(() => {
  const clientValue = client.value;
  const adLevelValue = action.value.adLevel;
  const paramsBudgetTypeValue = paramsBudgetType.value;
  if (paramsBudgetTypeValue === "") return { show: false };
  const isGoogleCampaign =
    clientValue == ClientType.Google &&
    adLevelValue == AdLevelTypeGoogle.Campaign;
  const isFacebookCampaign =
    clientValue == ClientType.Facebook &&
    adLevelValue == AdLevelTypeFacebook.Campaign;
  const isFacebookAdGroup =
    clientValue == ClientType.Facebook &&
    adLevelValue == AdLevelTypeFacebook.AdGroup;

  const show = isGoogleCampaign || isFacebookCampaign || isFacebookAdGroup;
  const budgetType =
    paramsBudgetTypeValue === BudgetType.DailyBudget
      ? t("總預算")
      : t("日預算");
  const clientAndAdLevel = `${ClientType[clientValue]}${adLevelOption.value[adLevelValue]}`;
  const msg = show
    ? `${t(
        `註：若{clientAndAdLevel}設定為{paramsBudgetTypeValue}，則不會變更`,
        {
          clientAndAdLevel: t(clientAndAdLevel),
          paramsBudgetTypeValue:
            paramsBudgetTypeValue !== unSelected ? budgetType : "",
        }
      )}`
    : "";

  return { show, msg };
});

const addAccountModal = ref(false);
// 新增目標
const addAccount = (account: any) => {
  if (!action.value?.target) action.value.target = [];

  const existingIndex = action.value.target.findIndex(
    (item: any) => item === account.id
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
const getAccountLoading = ref(false);

const getAccountList = async (noCache = false) => {
  getAccountLoading.value = true;

  const targets = await axios({
    method: "get",
    url: `${initialData.apiUrl}/heybear/api/automation/platform-target?client=${
      client.value
    }&adLevel=${adLevel.value}${noCache ? "&noCache=true" : ""}`,
    withCredentials: true,
    headers: {
      Authorization: initialData.token,
    },
  });
  allAccountList.value = targets.data.data;

  accountFilterTabs.value = calculateHierarchyLevels(allAccountList.value);
  getAccountLoading.value = false;
};

const filterAccountList = ref([]);

const resetSelectedAccount = () => {
  action.value.target = [];
};

// 選擇目標視窗
const showAccountModal = async () => {
  addAccountModal.value = true;
  await getAccountList();
};
const lockScroll = inject("lockScroll");
watch(addAccountModal, (val: boolean) => {
  lockScroll.value = val;
  if (!val) accountFilterText.value = "";
});

// 目標搜尋
const accountFilterText = ref("");
const accountCount = ref(0);
const selectAllAdsStatus = computed(() => {
  if (!action.value?.target) action.value.target = [];
  return (
    action.value.target.length > 0 &&
    action.value.target.length == accountCount.value
  );
});

// 全選目標
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

// 移除目標;
const removeAction = () => {
  showActionBlock.value = false;
  // actionEnable.value = false;
  // action.value = {};
  // nextTick(() => {
  //   delete eventData.value.action;
  // });
};

const accountFilterTabs = ref([]);

// 標依選擇 顯示據籤
function calculateHierarchyLevels(data: any) {
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
  return hierarchyLevels.filter((level) => level);
}

const accountModalLoading = ref(false);

// 依據標籤 搜尋字設定顯示目標
const setList = () => {
  const filterText = accountFilterText.value.trim().toLowerCase();
  accountCount.value = 0;

  function findMatchingItems(items): any {
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
        accountCount.value++;

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
  }

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
  filterAccountList.value = filterText
    ? filterData(filteredItems, filterText)
    : filteredItems;
};

// 更新列表
const refresh = ref(false);

const targetComponent = ref();

// 目標標籤
watch(
  () => [allAccountList, accountFilterTabs],
  () => {
    if (targetComponent.value) {
      const h = targetComponent.value.offsetHeight;
      targetComponent.value.style = `min-height:${h}px`;
    }
    refresh.value = true;
    setList();
    nextTick(() => {
      if (targetComponent.value) {
        targetComponent.value.style = `height:fit-content`;
      }
      refresh.value = false;
    });
  },
  { deep: true }
);
// 目標關鍵字
watchDebounced(
  () => accountFilterText,
  () => {
    if (targetComponent.value) {
      const h = targetComponent.value.offsetHeight;
      targetComponent.value.style = `min-height:${h}px`;
    }
    refresh.value = true;
    setList();
    nextTick(() => {
      if (targetComponent.value) {
        targetComponent.value.style = `height:fit-content`;
      }
      refresh.value = false;
    });
  },
  { deep: true, debounce: 500 }
);
// 是否顯示設定預算區塊
const showSettingBudget = computed(
  () =>
    action.value.action == ActionType.SetNewBudget ||
    action.value.action == ActionType.IncreaseBudget ||
    action.value.action == ActionType.LowerBudget
);
// 是否顯示預算上限區塊
const showSettingLimit = computed(
  () =>
    action.value.action == ActionType.IncreaseBudget ||
    action.value.action == ActionType.LowerBudget
);
onMounted(() => {
  accountModalLoading.value = true;
});

// 顯示執行動作區塊
const showActionBlock = ref(
  action.value.action && action.value.action != -1 ? true : false
);
watch(
  showActionBlock,
  (val: boolean) => {
    if (!val) setActionValue(-1);
  },
  { immediate: true }
);
// 是否有設定目標了
const targetSettingComplete = computed(() => {
  if (targetType.value == unSelected) return false;

  return true;
});
</script>

<template>
  <OuterBlock :title="t('目標對象')" :icon="'PhTarget'" id="actionTarget">
    <div class="flex flex-col gap-6">
      <div class="flex flex-col gap-6 pt-2">
        <!-- 選擇平台 -->
        <ToggleCheckBox
          :value="client"
          :label="t('平台')"
          :options="enumToObj(ClientType)"
          @updateValue="setClient"
        />
        <div class="flex gap-6">
          <!-- 選擇層級 -->
          <Select
            :value="adLevel"
            :label="t('層級')"
            :options="enumToObj(adLevelOption)"
            :disabled="client == unSelected"
            @updateValue="setAdLevel"
          >
            <template #default="{ option }">
              {{ t(`${ClientType[client]}${option}`) }}
            </template>
          </Select>
          <!-- 選擇目標對象 -->
          <div class="flex gap-4">
            <Select
              :value="targetType"
              :label="t('項目')"
              :options="enumToObj(EventActionTargetType)"
              :disabled="adLevel == unSelected"
              @updateValue="setTargetType"
            >
              <template #default="{ option }">
                {{ t(option) }}
              </template>
            </Select>
            <div
              v-if="targetType == EventActionTargetType.ForID"
              class="flex relative"
            >
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
            class="sticky flex flex-col max-h-[95%] bg-light-5 rounded-xs shadow-01 w-4/5 py-4 px-10 h-fit top-[3%] transition-all"
            ref="targetComponent"
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
            <div class="flex gap-2 mb-4 w-full">
              <TextInput
                v-model="accountFilterText"
                :placeholder="t('搜尋')"
                class="w-full"
              />
              <Tooltip :triggers="['hover']" :placement="'bottom-end'">
                <div
                  class="flex w-fit shadow-01 h-full bg-light-5 py-1 px-2 cursor-pointer hover:bg-light-3 hover:bg-opacity-50 items-center justify-center gap-3 rounded transition-all hover:shadow-01"
                  @click="getAccountList(true)"
                >
                  <ph-arrows-clockwise weight="bold" />
                </div>
                <template #popper>
                  <div class="flex flex-col">
                    <span class="text-light-5 p3-r text-xs">{{
                      t("立即更新")
                    }}</span>
                  </div>
                </template>
              </Tooltip>
            </div>
            <div
              class="flex gap-4 w-full empty:hidden mb-2 items-center"
              v-if="!getAccountLoading && accountFilterTabs.length"
            >
              <span class="p3-r text-dark-4 flex-shrink-0 self-start">{{
                t("篩選")
              }}</span>
              <div class="flex items-center gap-4 flex-wrap">
                <label
                  class="p3-r flex cursor-pointer items-center gap-1 rounded-md bg-light-3 px-2 py-0.5 text-dark-4 hover:shadow-01"
                  :class="{ ' !text-dark-3 !bg-light-2': !item.status }"
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
              <div
                class="flex flex-col gap-4 flex-1"
                v-if="!filterAccountList.length"
              >
                <div
                  class="flex flex-col items-center justify-center gap-4 mt-4"
                >
                  <ph-note :size="48" class="text-dark-4" />
                  <p class="p2-b text-dark-3">{{ t("No Data") }}</p>
                </div>
              </div>
              <div class="relative flex-1 overflow-auto" v-else>
                <Transition name="hide" mode="out-in">
                  <DynamicScroller
                    :items="filterAccountList"
                    :min-item-size="28"
                    class="scroller"
                    v-if="!refresh"
                  >
                    <template #default="{ item, index, active }">
                      <DynamicScrollerItem
                        :item="item"
                        :active="active"
                        :size-dependencies="[item.children]"
                        :data-index="index"
                        :data-active="active"
                        :watchData="true"
                      >
                        <EventActionTargetItem
                          :target="item"
                          :targets="action?.target ?? []"
                        />
                      </DynamicScrollerItem>
                    </template>
                  </DynamicScroller>
                </Transition>
              </div>
            </template>
            <div
              class="mx-auto flex items-center justify-between gap-4 mt-8 border-t w-full pt-4"
              v-if="!getAccountLoading"
            >
              <div
                class="p3-r flex cursor-pointer items-center gap-1 text-dark-3 hover:text-dark-2 underline transition-all"
                @click="addAccountModal = false"
              >
                {{ t("取消") }}
              </div>
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
    </div>
  </OuterBlock>
  <div>
    <Tooltip
      :triggers="['hover']"
      :placement="'top'"
      v-model:shown="showErrorModal"
      class="empty:hidden"
      :disabled="!showErrorModal"
    >
      <div class="absolute"></div>
      <template #popper>
        <div>
          <span class="p3-r text-light-5">
            {{ t("請設置一個動作或條件") }}
          </span>
        </div>
      </template>
    </Tooltip>
    <Tooltip
      :triggers="['hover']"
      :placement="'top'"
      class="empty:hidden"
      :disabled="targetSettingComplete"
    >
      <div
        class="p3-b cursor-pointer rounded shadow-01 hover:shadow-02 transition-all bg-light-5 py-1 px-2 text-dark-4 flex items-center justify-center gap-1"
        @click="!targetSettingComplete ? null : (showActionBlock = true)"
        v-if="!showActionBlock"
      >
        <ph-plus-circle weight="bold" />
        {{ t("加入動作") }}
      </div>
      <template #popper>
        <div>
          <span class="p3-r text-light-5">
            {{ t("請先設定目標對象") }}
          </span>
        </div>
      </template>
    </Tooltip>
  </div>

  <!-- 層級不同 可執行項目也不同 還有註解 -->
  <OuterBlock
    :title="t('動作')"
    :icon="'PhNavigationArrow'"
    id="action"
    v-if="showActionBlock"
  >
    <div class="flex flex-col gap-6">
      <div
        class="cursor-pointer text-dark-4 absolute bottom-4 right-3 hover:text-dark-3 transition-all p3-r"
        @click="removeAction"
      >
        <PhTrash size="18" weight="bold" />
      </div>
      <!-- 執行動作 -->
      <div class="flex flex-col gap-6">
        <div class="flex justify-start items-center gap-4">
          <Tooltip
            :triggers="['hover']"
            :placement="'right'"
            :disabled="targetSettingComplete"
          >
            <Select
              :value="actionValue"
              :label="t('執行')"
              :options="actionOption"
              :disabled="!targetSettingComplete"
              :unSelected="-1"
              @updateValue="setActionValue"
            >
              <template #default="{ option }">
                {{ t(option) }}
              </template>
            </Select>
            <template #popper>
              <div class="flex flex-col">
                <span class="text-light-5 p3-r text-xs">{{
                  t("請先設定目標對象")
                }}</span>
              </div>
            </template>
          </Tooltip>

          <span
            class="text-dark-4 p3-r"
            v-if="
              client == ClientType.Google &&
              adLevel != AdLevelTypeGoogle.AssetGroup &&
              (actionValue == ActionType.OpenProject ||
                actionValue == ActionType.SuspendProject)
            "
            >{{ t("註：影片廣告活動不支援狀態變更") }}</span
          >
        </div>

        <!-- 新預算 -->
        <template v-if="showSettingBudget">
          <div class="flex justify-start gap-4 items-center">
            <ToggleCheckBox
              class="flex-shrink-0"
              :value="paramsBudgetType"
              :label="t('類型')"
              :options="BudgetType"
              @updateValue="setParamsBudgetType"
            >
              <template #default="{ option }">{{ t(option) }}</template>
            </ToggleCheckBox>

            <span v-if="budgetTips.show" class="p3-r text-dark-4">
              {{ budgetTips.msg }}
            </span>
          </div>

          <div class="flex gap-4 w-full">
            <!-- 設定預算 -->
            <div class="flex justify-start items-center gap-4">
              <ToggleCheckBox
                :value="paramsValueType"
                :label="t('調整')"
                :options="arrayToObj(valueTypeOption)"
                @updateValue="setParamsValueType"
              >
                <template #default="{ option }">{{
                  t(`action${option}`)
                }}</template>
              </ToggleCheckBox>
              <label
                class="flex items-center gap-1 w-28"
                v-if="paramsValueType != unSelected"
              >
                <NumberInput
                  v-model="action.params.value"
                  :precision="2"
                  :required="true"
                />
                <span class="p3-r text-dark-4">{{
                  action.params.valueType === ValueType.Percentage
                    ? "%"
                    : t("元")
                }}</span>
              </label>
            </div>
            <!-- 設定上限 -->
            <div
              class="flex justify-center gap-1 flex-col"
              v-if="showSettingLimit"
            >
              <div class="flex gap-4 items-center">
                <span class="p3-r text-dark-4">{{
                  action.action == ActionType.IncreaseBudget
                    ? t("預算上限")
                    : t("預算下限")
                }}</span>
                <div class="flex items-center gap-1">
                  <template v-if="hasLimitBudget">
                    <div class="flex gap-1 items-center flex-1">
                      <NumberInput
                        v-model="action.params.limit"
                        :precision="2"
                        :required="true"
                      />
                      <span class="p3-r text-dark-4">{{ t("元") }}</span>
                    </div>
                    <PhX
                      @click="hasLimitBudget = false"
                      weight="bold"
                      class="text-dark-4 hover:text-dark-3 p3-b cursor-pointer"
                    />
                  </template>
                  <div
                    class="p3-b text-true-blue-3 w-fit flex cursor-pointer items-center justify-center gap-4 rounded shadow-01 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50"
                    @click="hasLimitBudget = true"
                    v-else
                  >
                    {{ t("無") }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>
  </OuterBlock>
</template>
