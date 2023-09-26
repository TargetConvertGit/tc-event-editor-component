<script setup lang="ts">
import TextInput from "./TextInput.vue";
import {
  ClientType,
  AdLevelTypeGoogle,
  AdLevelTypeFacebook,
  ActionType,
  BudgetType,
  ValueType,
} from "../types/event-items";

const eventData = inject("eventData");

// 未選擇
const unSelected = -1;

const action = ref(eventData.value.action ?? {});

// 是否要限定數值
const hasLimitBudget = ref(false);
watch(hasLimitBudget, (val) => {
  if (!action.value.params?.limit) {
    delete action.value.params.limit;
  }
  if (!val) {
    delete action.value.params.limit;
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
      None: ActionType.None,
    },
    [AdLevelTypeGoogle.AdGroup]: {
      SuspendProject: ActionType.SuspendProject,
      None: ActionType.None,
    },
    [AdLevelTypeGoogle.AdTag]: {
      SuspendProject: ActionType.SuspendProject,
      None: ActionType.None,
    },
    [AdLevelTypeGoogle.Ad]: {
      SuspendProject: ActionType.SuspendProject,
      None: ActionType.None,
    },
  },
  [ClientType.Facebook]: {
    [AdLevelTypeFacebook.Campaign]: {
      SetNewBudget: ActionType.SetNewBudget,
      IncreaseBudget: ActionType.IncreaseBudget,
      LowerBudget: ActionType.LowerBudget,
      OpenProject: ActionType.OpenProject,
      SuspendProject: ActionType.SuspendProject,
      None: ActionType.None,
    },
    [AdLevelTypeFacebook.AdGroup]: {
      SetNewBudget: ActionType.SetNewBudget,
      IncreaseBudget: ActionType.IncreaseBudget,
      LowerBudget: ActionType.LowerBudget,
      OpenProject: ActionType.OpenProject,
      SuspendProject: ActionType.SuspendProject,
      None: ActionType.None,
    },
    [AdLevelTypeFacebook.AdTag]: {
      SuspendProject: ActionType.SuspendProject,
      None: ActionType.None,
    },
    [AdLevelTypeFacebook.Ad]: {
      SuspendProject: ActionType.SuspendProject,
      None: ActionType.None,
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
      [ActionType.None]: [ValueType.Percentage, ValueType.Value],
    },
    [AdLevelTypeGoogle.AdGroup]: {
      [ActionType.SuspendProject]: [ValueType.Percentage, ValueType.Value],
      [ActionType.None]: [ValueType.Percentage, ValueType.Value],
    },
    [AdLevelTypeGoogle.AdTag]: {
      [ActionType.SuspendProject]: [ValueType.Percentage, ValueType.Value],
      [ActionType.None]: [ValueType.Percentage, ValueType.Value],
    },
    [AdLevelTypeGoogle.Ad]: {
      [ActionType.SuspendProject]: [ValueType.Percentage, ValueType.Value],
      [ActionType.None]: [ValueType.Percentage, ValueType.Value],
    },
  },
  [ClientType.Facebook]: {
    [AdLevelTypeFacebook.Campaign]: {
      [ActionType.SetNewBudget]: [ValueType.Value],
      [ActionType.IncreaseBudget]: [ValueType.Percentage, ValueType.Value],
      [ActionType.LowerBudget]: [ValueType.Percentage, ValueType.Value],
      [ActionType.OpenProject]: [ValueType.Percentage, ValueType.Value],
      [ActionType.SuspendProject]: [ValueType.Percentage, ValueType.Value],
      [ActionType.None]: [ValueType.Percentage, ValueType.Value],
    },
    [AdLevelTypeFacebook.AdGroup]: {
      [ActionType.SetNewBudget]: [ValueType.Value],
      [ActionType.IncreaseBudget]: [ValueType.Percentage, ValueType.Value],
      [ActionType.LowerBudget]: [ValueType.Percentage, ValueType.Value],
      [ActionType.OpenProject]: [ValueType.Percentage, ValueType.Value],
      [ActionType.SuspendProject]: [ValueType.Percentage, ValueType.Value],
      [ActionType.None]: [ValueType.Percentage, ValueType.Value],
    },
    [AdLevelTypeFacebook.AdTag]: {
      [ActionType.SuspendProject]: [ValueType.Percentage, ValueType.Value],
      [ActionType.None]: [ValueType.Percentage, ValueType.Value],
    },
    [AdLevelTypeFacebook.Ad]: {
      [ActionType.SuspendProject]: [ValueType.Percentage, ValueType.Value],
      [ActionType.None]: [ValueType.Percentage, ValueType.Value],
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

// 平台
const client = computed(() => {
  if (action.value.client) return action.value.client;
  return -1;
});
const setClient = (v) => (action.value.client = Number(v.target.value));
// 層級
const adLevel = computed(() => {
  if (action.value.adLevel) return action.value.adLevel;
  return -1;
});
const setAdLevel = (v) => {
  action.value.adLevel = Number(v.target.value);
  // 調整階層就預設不執行動作
  action.value.action = ActionType.None;
};
// 執行
const actionValue = computed(() => {
  if (action.value.action) return action.value.action;
  return -1;
});
const setActionValue = (v) => (action.value.action = Number(v.target.value));
// 執行
const paramsBudgetType = computed(() => {
  if (!action.value?.params) action.value.params = {};
  if (action.value.params.budgetType) return action.value.params.budgetType;
  return -1;
});
const setParamsBudgetType = (v) =>
  (action.value.params.budgetType = v.target.value);
// 類型
const paramsValueType = computed(() => {
  if (!action.value?.params) action.value.params = {};
  if (action.value.params.valueType) return action.value.params.valueType;
  return -1;
});
const setParamsValueType = (v) =>
  (action.value.params.valueType = v.target.value);
</script>

<template>
  <!-- 層級不同 可執行項目也不同 還有註解 -->
  <div class="flex flex-col gap-6">
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
    <div class="flex flex-col gap-3" v-if="adLevel != unSelected">
      <label class="flex items-center gap-2">
        <span class="p3-b">執行</span>
        <select
          class="p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50"
          v-model="actionValue"
          @change="setActionValue"
        >
          <template v-for="(value, key) in actionOption" :key="key">
            <option :value="value">
              {{ key }}
            </option>
          </template>
        </select>
      </label>
      <div class="flex gap-x-2 gap-y-3 flex-wrap" v-if="adLevel != unSelected">
        <!-- 新預算 -->
        <template v-if="action.action == ActionType.SetNewBudget">
          <label class="flex items-center gap-2">
            <span class="p3-b">類型</span>
            <select
              class="p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50"
              v-model="paramsBudgetType"
              @change="setParamsBudgetType"
            >
              <option value="-1" disabled>請選擇</option>
              <template v-for="(value, key) in BudgetType" :key="key">
                <option v-if="!Number.isInteger(value)" :value="value">
                  {{ value }}
                </option>
              </template>
            </select>
          </label>
          <label
            class="flex items-center gap-2"
            v-if="paramsBudgetType != unSelected"
          >
            <span class="p3-b">調整</span>
            <select
              class="p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50"
              v-model="paramsValueType"
              @change="setParamsValueType"
            >
              <option value="-1" disabled>請選擇</option>
              <template v-for="(value, key) in valueTypeOption" :key="key">
                <option :value="value">
                  {{ value }}
                </option>
              </template>
            </select>
          </label>
          <label
            class="flex items-center gap-2"
            v-if="paramsValueType != unSelected"
          >
            <TextInput v-model="action.params.value" :type="'number'" />
            <span>{{
              action.params.valueType === ValueType.Percentage ? "%" : "元"
            }}</span>
          </label>
        </template>
        <!-- 提升預算 -->
        <template v-else-if="action.action == ActionType.IncreaseBudget">
          <label class="flex items-center gap-2">
            <span class="p3-b">類型</span>
            <select
              class="p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50"
              v-model="paramsBudgetType"
              @change="setParamsBudgetType"
            >
              <option value="-1" disabled>請選擇</option>
              <template v-for="(value, key) in BudgetType" :key="key">
                <option v-if="!Number.isInteger(value)" :value="value">
                  {{ value }}
                </option>
              </template>
            </select>
          </label>
          <label
            class="flex items-center gap-2"
            v-if="paramsBudgetType != unSelected"
          >
            <span class="p3-b">調整</span>
            <select
              class="p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50"
              v-model="paramsValueType"
              @change="setParamsValueType"
            >
              <option value="-1" disabled>請選擇</option>
              <template v-for="(value, key) in valueTypeOption" :key="key">
                <option :value="value">
                  {{ value }}
                </option>
              </template>
            </select>
          </label>
          <label
            class="flex items-center gap-2"
            v-if="paramsValueType != unSelected"
          >
            <TextInput v-model="action.params.value" :type="'number'" />
            <span>{{
              action.params.valueType === ValueType.Percentage ? "%" : "元"
            }}</span>
          </label>
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
                  <TextInput v-model="action.params.limit" :type="'number'" />
                  <span>元</span>
                </div>
              </div>
            </div>
          </label>
        </template>
        <!-- 降低預算 -->
        <template v-else-if="action.action == ActionType.LowerBudget">
          <label class="flex items-center gap-2">
            <span class="p3-b">類型</span>
            <select
              class="p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50"
              v-model="paramsBudgetType"
              @change="setParamsBudgetType"
            >
              <option value="-1" disabled>請選擇</option>
              <template v-for="(value, key) in BudgetType" :key="key">
                <option v-if="!Number.isInteger(value)" :value="value">
                  {{ value }}
                </option>
              </template>
            </select>
          </label>
          <label
            class="flex items-center gap-2"
            v-if="paramsBudgetType != unSelected"
          >
            <span class="p3-b">調整</span>
            <select
              class="p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50"
              v-model="paramsValueType"
              @change="setParamsValueType"
            >
              <option value="-1" disabled>請選擇</option>
              <template v-for="(value, key) in valueTypeOption" :key="key">
                <option :value="value">
                  {{ value }}
                </option>
              </template>
            </select>
          </label>
          <label
            class="flex items-center gap-2"
            v-if="paramsValueType != unSelected"
          >
            <TextInput v-model="action.params.value" :type="'number'" />
            <span>{{
              action.params.valueType === ValueType.Percentage ? "%" : "元"
            }}</span>
          </label>
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
                <label for="maxBudget">設定預算下限</label>
                <div class="flex gap-2 items-center" v-if="hasLimitBudget">
                  <TextInput v-model="action.params.limit" :type="'number'" />
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
