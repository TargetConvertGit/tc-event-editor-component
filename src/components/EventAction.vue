<script setup lang="ts">
import TextInput from "./TextInput.vue";
import OuterBlock from "./OuterBlock.vue";
import axios from "axios";
import { getApiUrlBase, getToken } from "../apiConfig";
import EventActionTargetItem from "./EventActionTargetItem.vue";

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
  hasLimitBudget.value = Boolean(action.value?.params?.limit);
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
  if (eventData.value.action?.["client"] == ClientType.Google) {
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
    [AdLevelTypeGoogle.Ad]: {
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
    [AdLevelTypeGoogle.Ad]: {
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

  return [ValueType.Percentage, ValueType.Value]; // 默认值
});

const resetData = {
  target: {
    value: "",
  },
};

// 平台
const client = computed(() => {
  if (action.value.client) return action.value.client;
  return "";
});
const setClient = (v) => {
  action.value.client = Number(v.target.value);
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
  // 調整階層就預設不執行動作
  // delete action.value.action;
  // 不可跨平台選目標
  // delete action.value.target;
  // if (action.value.targetType === EventActionTargetType.ForID) {
  //   action.value.target = [];
  // }
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
const setParamsBudgetType = (v) =>
  (action.value.params.budgetType = v.target.value);
// 類型
const paramsValueType = computed(() => {
  if (!action.value?.params) action.value.params = {};
  if (action.value.params.valueType) return action.value.params.valueType;
  return "";
});
const setParamsValueType = (v) =>
  (action.value.params.valueType = v.target.value);

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
  // console.log(targets.data.data);
  for (const item of targets.data.data) {
    console.log(item);
  }
  allAccountList.value = targets.data.data;
};

const getAccountLoading = ref(false);

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

// 選擇目標視窗
const showAccountModal = async () => {
  addAccountModal.value = true;
  getAccountLoading.value = true;
  await getAccountList();
  getAccountLoading.value = false;
};
watch(addAccountModal, (val) => {
  if (!val) accountFilterText.value = "";
});
// 目標搜尋
const accountFilterText = ref("");
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
  if (!action.value.target.length) {
    action.value.target = [];
    selectAll(filteredItems);
  } else {
    action.value.target = [];
  }
};

const accountModalLoading = ref(false);
onMounted(() => {
  accountModalLoading.value = true;
});

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
    paramsBudgetTypeValue === BudgetType.DailyBudget ? "日預算" : "總預算";
  const clientAndAdLevel = `${ClientType[clientValue]}${adLevelOption.value[adLevelValue]}`;
  const msg = show
    ? `若${t(clientAndAdLevel)}設定為${
        paramsBudgetTypeValue !== unSelected ? budgetType : ""
      }，則不會變更`
    : "";

  return { show, msg };
});
</script>

<template>
  <div
    class="p3-b text-true-blue-3 flex ml-auto w-fit cursor-pointer hover:text-true-blue-2"
    @click="actionEnable = true"
    v-if="!actionEnable"
  >
    + 加入動作
  </div>
  <!-- 層級不同 可執行項目也不同 還有註解 -->
  <OuterBlock :title="'動作'" v-else>
    <div class="flex flex-col gap-2">
      <div class="flex items-center gap-2 relative pt-2">
        <div
          class="cursor-pointer text-dark-4 absolute -top-2.5 -right-1.5 p4-b"
          @click="removeAction"
        >
          刪除
        </div>
        <label class="flex items-center gap-2">
          <span class="p4-b">平台</span>
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
          <span class="p4-b">層級</span>
          <select
            class="p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50"
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
            class="p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50"
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
            class="p4-r px-1.5 py-0.5 text-true-blue-2 rounded bg-true-blue-5 flex w-fit cursor-pointer hover:bg-true-blue-4 z-[2]"
            @click="showAccountModal"
          >
            編輯
          </div>
          <input
            v-if="action?.target"
            type="text"
            class="opacity-0 absolute left-0 top-0"
            required
            :value="action?.target.length ? '123' : ''"
          />
        </label>
        <div v-if="targetType === EventActionTargetType.ForID">
          <span class="p4-r text-true-blue-3 px-0.5">{{
            action.target && action.target.length
              ? `已選${action.target.length}個目標`
              : "尚未選擇目標"
          }}</span>
        </div>
      </div>
      <!-- 選擇帳號彈窗 -->
      <Teleport to="#editor-container" v-if="accountModalLoading">
        <div
          class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full flex justify-center bg-dark-3 rounded bg-opacity-50 z-[2]"
          v-if="addAccountModal"
        >
          <div
            class="relative bg-light-5 rounded-xs shadow-01 w-4/5 p-4 h-fit top-4 max-h-[90%] flex flex-col"
          >
            <span class="p1-b flex justify-center mb-1">請選擇目標</span>
            <TextInput v-model="accountFilterText" />
            <div
              class="mt-2 flex w-fit ml-auto justify-end p4-b text-true-blue-3 cursor-pointer"
              @click="selectAllAccount"
            >
              全選
            </div>
            <div v-if="getAccountLoading">loading...</div>
            <template v-else>
              <div class="flex flex-col gap-2 mt-2 flex-1 overflow-y-auto">
                <EventActionTargetItem
                  v-for="target in filterAccountList"
                  :key="target.id"
                  :target="target"
                  :targets="action?.target ?? []"
                />
              </div>
              <div class="flex gap-3 items-center justify-center mt-4">
                <div
                  class="p3-b flex cursor-pointer items-center gap-1 rounded bg-true-blue-2 px-1.5 py-0.5 text-light-5 hover:bg-true-blue-1"
                  @click="addAccountModal = false"
                >
                  確定
                </div>
              </div>
            </template>
          </div>
        </div>
      </Teleport>
      <div class="flex flex-col gap-2" v-if="targetType !== unSelected">
        <label class="flex items-center gap-2">
          <span class="p4-b">執行</span>
          <select
            class="p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50"
            v-model="actionValue"
            @change="setActionValue"
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
        <div
          class="flex gap-x-2 gap-y-3 flex-wrap"
          v-if="adLevel != unSelected"
        >
          <!-- 新預算 -->
          <template
            v-if="
              action.action == ActionType.SetNewBudget ||
              action.action == ActionType.IncreaseBudget ||
              action.action == ActionType.LowerBudget
            "
          >
            <label class="flex items-center gap-2">
              <span class="p4-b">類型</span>
              <select
                class="p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50"
                v-model="paramsBudgetType"
                @change="setParamsBudgetType"
                required
              >
                <option value="" disabled>請選擇</option>
                <template v-for="(value, key) in BudgetType" :key="key">
                  <option v-if="!Number.isInteger(value)" :value="value">
                    {{ t(value) }}
                  </option>
                </template>
              </select>
              <span v-if="budgetTips.show" class="p4-r">
                {{ budgetTips.msg }}
              </span>
            </label>

            <label
              class="flex items-center gap-2"
              v-if="paramsBudgetType != unSelected"
            >
              <span class="p4-b">調整</span>
              <select
                class="p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50"
                v-model="paramsValueType"
                @change="setParamsValueType"
                required
              >
                <option value="" disabled>請選擇</option>
                <template v-for="(value, key) in valueTypeOption" :key="key">
                  <option :value="value">
                    {{ t(`action${value}`) }}
                  </option>
                </template>
              </select>
            </label>

            <label
              class="flex items-center gap-2"
              v-if="paramsValueType != unSelected"
            >
              <TextInput
                v-model="action.params.value"
                :type="'number'"
                :required="true"
              />
              <span>{{
                action.params.valueType === ValueType.Percentage ? "%" : "元"
              }}</span>
            </label>
            <template
              v-if="
                action.action == ActionType.IncreaseBudget ||
                action.action == ActionType.LowerBudget
              "
            >
              <label
                class="flex items-center gap-2 w-full"
                v-if="action.params.valueType === ValueType.Percentage"
              >
                <div class="flex flex-col gap-2">
                  <div class="flex items-center gap-2">
                    <input
                      type="checkbox"
                      v-model="hasLimitBudget"
                      id="maxBudget"
                    />
                    <label for="maxBudget">設定預算上限</label>
                    <div class="flex gap-2 items-center" v-if="hasLimitBudget">
                      <TextInput
                        v-model="action.params.limit"
                        :type="'number'"
                        :required="true"
                      />
                      <span>元</span>
                    </div>
                  </div>
                </div>
              </label>
            </template>
          </template>
        </div>
      </div>
    </div>
  </OuterBlock>
</template>
