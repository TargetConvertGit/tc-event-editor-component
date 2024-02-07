<script setup lang="ts">
import NumberInput from "./NumberInput.vue";
import OuterBlock from "./OuterBlock.vue";
import { DatePicker } from "v-calendar";
import "v-calendar/style.css";

import { PhX, PhTrash } from "@phosphor-icons/vue";
import { Label } from "../shadcn/components/ui/label";
import Select from "./Select.vue";
import ToggleCheckBox from "./ToggleCheckBox.vue";
import { enumToObj } from "../lib";
import { Tooltip } from "floating-vue";
import "floating-vue/dist/style.css";
import {
  EventCondition,
  ConditionType,
  DateRangeType,
  OperationType,
  ValueType,
  ClientType,
  ConditionAdLevelTypeFacebook,
  ConditionAdLevelTypeGoogle,
  ActionType,
} from "../types/event-items";
import { i18n } from "../i18n";

const { t } = i18n.global;
const initialData = inject("initialData");
const eventData = inject("eventData");

interface Props {
  modelValue: EventCondition;
  index: number | string;
}

const props = defineProps<Props>();

const emit = defineEmits(["update:modelValue", "removeItem"]);

const condition = computed(() => props.modelValue ?? {});

// 未選擇
const unSelected = "";

// 條件
const conditionType = computed(() => {
  if (condition.value.conditionType) return condition.value.conditionType;
  return "";
});
const setConditionType = (v) => {
  condition.value.conditionType = v;
  condition.value.value = "";
};
// 運算
const dateRangeType = computed(() => {
  if (condition.value.dateRangeType) return condition.value.dateRangeType;
  return "";
});
const setDateRangeType = (v) => {
  condition.value.dateRangeType = Number(v);
  if (Number(v) !== DateRangeType.SpecifiedTime) {
    delete condition.value.dateRange;
  }
};
// 數值條件
const operation = computed(() => {
  if (condition.value.operation) return condition.value.operation;
  return "";
});
const setOperation = (v) => {
  condition.value.operation = v;
  condition.value.value = "";
};
// 數值
const valueType = computed(() => {
  if (condition.value.valueType) return condition.value.valueType;
  return "";
});
const setValueType = (v) => {
  condition.value.valueType = v;
  if (!condition.value.valueType) condition.value.value = "";
};
const valueTypeOption = computed(() => {
  if (props.modelValue.comparison) return ValueType;
  return {
    Value: ValueType.Value,
  };
});
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
    [ConditionAdLevelTypeGoogle.AssetGroup]: {
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
    [ConditionAdLevelTypeFacebook.Ad]: {
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

const operationOptions = computed(() => {
  if (props.modelValue.comparison)
    return {
      MoreThan: OperationType.MoreThan,
      GreaterOrEqualTo: OperationType.GreaterOrEqualTo,
      LessThan: OperationType.LessThan,
      LessThanOrEqualTo: OperationType.LessThanOrEqualTo,
    };
  return OperationType;
});

const targetAction = ref();
const targetClient = ref();
const targetAdLevel = ref();
const targetType = ref();
const targets = ref();
watchEffect(() => {
  targetAction.value = eventData.value?.action?.action;
  targetClient.value = eventData.value?.action?.client;
  targetAdLevel.value = eventData.value?.action?.adLevel;
  targetType.value = eventData.value?.action?.targetType;
  targets.value = eventData.value?.action?.target;
  // 自動帶入動作的目標對象
  condition.value.client = targetClient.value;
  condition.value.adLevel = targetAdLevel.value;
  condition.value.targetType = targetType.value;
  condition.value.targets = targets.value;
});

// 可選執行項
const actionOption = computed(() => {
  if (targetClient.value && targetAdLevel.value) {
    const clientOptions = actionOptionsMap[targetClient.value];
    if (clientOptions) {
      const adLevelOptions = clientOptions[targetAdLevel.value];
      if (adLevelOptions) {
        return adLevelOptions;
      }
    }
  }

  return {};
});

function calculatePreviousTimeRange(timeRange) {
  const startTime: any = new Date(timeRange.start);
  const endTime: any = new Date(timeRange.end);

  const newEndTime: any = new Date(startTime - 1);

  const newStartTime = new Date(newEndTime - (endTime - startTime));

  const formatOptions: any = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  };
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

// 是否有設定目標了
const targetSettingComplete = computed(() => {
  if (targetType.value == unSelected) return false;
  return true;
});

// 根據填入百分比,顯示試算文字
const valueTip = computed(() => {
  if (!condition.value.value || operation.value == OperationType.Equal)
    return false;
  if (valueType.value == ValueType.Percentage)
    return t("conditionValueTip", {
      operation: operation.value,
      value: Number(
        100 *
          (operation.value == OperationType.LessThan
            ? 1 - condition.value.value / 100
            : 1 + condition.value.value / 100)
      ).toFixed(0),
    });

  // t(`假設數值 = 100，當數值 ${operation.value} ${Number(
  //   100 *
  //     (operation.value == OperationType.LessThan
  //       ? 1 - condition.value.value / 100
  //       : 1 + condition.value.value / 100)
  // ).toFixed(0)} 即符合條件`);
  return false;
});
</script>

<template>
  <OuterBlock
    :title="t('條件 {count}', { count: index + 1 })"
    :icon="'PhCheckSquare'"
  >
    <div class="flex flex-col gap-6">
      <div
        class="cursor-pointer text-dark-4 absolute bottom-4 right-3 hover:text-dark-3 p3-r transition-all"
        @click="emit('removeItem')"
      >
        <PhTrash size="18" weight="bold" />
      </div>
      <div class="w-fit">
        <Tooltip
          :triggers="['click']"
          :placement="'right'"
          :disabled="targetSettingComplete"
        >
          <Select
            :value="conditionType"
            :label="t('條件')"
            :options="actionOption"
            :disabled="!targetSettingComplete"
            @updateValue="setConditionType"
          >
            <template #default="{ option }">
              {{ t(`${ClientType[targetClient]}${option}`) }}
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
      </div>

      <div class="flex flex-col gap-6">
        <div class="flex gap-2">
          <Select
            :value="dateRangeType"
            :label="t('區間')"
            :options="enumToObj(DateRangeType)"
            :disabled="!conditionType"
            @updateValue="setDateRangeType"
          >
            <template #default="{ option }">
              {{ t(option) }}
            </template>
          </Select>

          <div class="flex gap-2 empty:hidden">
            <div v-if="dateRangeType == DateRangeType.SpecifiedTime">
              <DatePicker
                :locale="initialData.locale"
                v-model.range="condition.dateRange"
                :timezone="initialData.timezone"
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
            <template v-if="dateRangeType != DateRangeType.AllTime">
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
                  v-if="!modelValue.comparison && dateRangeType != unSelected"
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
            </template>
          </div>
        </div>
        <div class="flex justify-start gap-2 items-center">
          <Select
            :value="operation"
            :label="t('運算')"
            :options="operationOptions"
            :disabled="!dateRangeType"
            @updateValue="setOperation"
          >
            <template #default="{ option }">
              {{ t(option) }}
            </template>
          </Select>
          <ToggleCheckBox
            :value="valueType"
            :options="valueTypeOption"
            :disabled="!operation"
            @updateValue="setValueType"
          >
            <template #default="{ option }">{{
              t(`condition${option}`)
            }}</template>
          </ToggleCheckBox>
          <div class="flex gap-1 items-center w-24" v-if="operation">
            <NumberInput
              v-model="condition.value"
              :inputClass="'text-true-blue-3'"
              :precision="2"
              :required="true"
              :max="
                operation == OperationType.LessThan ||
                operation == OperationType.LessThanOrEqualTo
                  ? 100
                  : null
              "
              :disabled="!valueType"
            />
            <span class="p3-r text-dark-4" v-if="valueType != unSelected">{{
              condition.valueType === ValueType.Percentage
                ? "%"
                : conditionType != ConditionType.Clicks &&
                  conditionType != ConditionType.Impressions &&
                  conditionType != ConditionType.Conversions &&
                  conditionType != ConditionType.ReturnOnADSpending
                ? t("元")
                : ""
            }}</span>
          </div>
          <div
            class="ml-4 flex p4-r text-dark-4 top-[calc(100%+4px)]"
            v-if="valueTip"
          >
            {{ valueTip }}
          </div>
        </div>

        <span class="text-dark-4 p3-r" v-if="targetAction != ActionType.None">{{
          t("註：僅有符合條件的目標對象，才會執行動作。")
        }}</span>
      </div>
    </div>
  </OuterBlock>
</template>

<style lang="scss" scoped></style>
