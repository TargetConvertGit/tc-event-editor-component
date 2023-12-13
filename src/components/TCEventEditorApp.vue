<script setup lang="ts">
import { EventItem } from "../types/event-items";
import RepeatFrequency from "./RepeatFrequency.vue";
import EventAction from "./EventAction.vue";
import TextInput from "./TextInput.vue";
import Condition from "./Condition.vue";
import OuterBlock from "./OuterBlock.vue";
import Notification from "./Notification.vue";
import { i18n } from "../i18n";
import { setToken } from "../apiConfig";
import setLang from "../langSetting.js";
import { setTimezone } from "../timezone";

const { t } = i18n.global;
interface Props {
  data?: string;
}

const props = defineProps<Props>();

const emit = defineEmits(["update:data"]);

const json = computed((): EventItem => JSON.parse(props.data || `{}`));

const formatData = (data: EventItem) => {
  // 剔除 value==null 的key,視情況修改
  const filteredData = Object.fromEntries(
    Object.entries(data).filter(([key, value]) => value !== null)
  );
  return JSON.stringify(filteredData, null, 4);
};
interface FieldCheckRule {
  name: string;
  type?: "string" | "number" | "boolean" | "array"; // 可以根据需要添加更多类型
  child?: FieldCheckRule[]; // 用于处理多层嵌套字段
}

const checkData = (
  data: EventItem,
  rules: FieldCheckRule[]
): { checkedData: EventItem; errors: string[] } => {
  const checkedData: EventItem | {} = {};
  const errors: string[] = [];

  for (const rule of rules) {
    const { name, type, child } = rule;
    const fieldValue = data[name];

    if (
      data.hasOwnProperty(name) &&
      fieldValue !== null &&
      fieldValue !== undefined
    ) {
      if (child) {
        // 如果存在子规则，递归检查子规则
        const { checkedData: nestedData, errors: nestedErrors } = checkData(
          fieldValue,
          child
        );

        if (nestedErrors.length === 0) {
          checkedData[name] = nestedData;
        } else {
          errors.push(...nestedErrors.map((errorField) => `${name}`));
        }
      } else {
        if (type === "string" && fieldValue === "") {
          // 如果字段为字符串类型且为空字符串，则将字段名称添加到errors数组
          errors.push(name);
        } else if (type === "array" && fieldValue.length == 0) {
          errors.push(name);
        } else {
          checkedData[name] = fieldValue;
        }
      }
    } else {
      // 如果字段不存在或其值为null或undefined，将字段名称添加到errors数组
      errors.push(name);
    }
  }

  return { checkedData, errors };
};

const checkDataValid = ref([]);
const save = (e) => {
  e.preventDefault();
  emit("update:data", formatData(json.value));
};

const saveData = () => {
  const editor = document.getElementById("editor-container");
  if (!editor) return;
  for (const el of editor.querySelectorAll("[required]")) {
    if (el.getAttribute("required") !== null) {
      if (!el.reportValidity()) {
        throw new Error("未填寫完畢");
      }
    }
  }
  submitBtn.value?.click();
};
provide("eventData", json);
provide("checkDataValid", checkDataValid);

const titleMaxLength = 100;

const submitBtn = ref();

const lockScroll = ref(false);
provide("lockScroll", lockScroll);

const getToken = async () => {
  return "Bearer 7|IMZYBXtkk2b4DXnscSaexanLbcBbjvd7dP5Djj6Q";
};
const getLocale = async () => {
  return "zh_TW";
};
const getTimezone = async () => {
  return "Asia/Taipei";
};
const init = async () => {
  const token = await getToken();
  setToken(token);
  const locale = await getLocale();
  setLang(locale);
  const timezone = await getTimezone();
  setTimezone(timezone);
};
init();
defineExpose({
  saveData,
});
</script>

<template>
  <div
    :class="[lockScroll ? 'overflow-y-hidden' : 'overflow-y-auto ']"
    v-if="props.data"
    id="editor-container-outer"
  >
    <form
      class="flex flex-col gap-5 relative p-5 h-fit text-dark-1 min-h-full w-full"
      id="editor-container"
      @submit.prevent="save"
    >
      <OuterBlock :title="t('規則名稱')" :icon="'PhNotepad'" id="name">
        <div class="space-y-1">
          <TextInput
            v-model="json.title"
            :inputClass="'text-true-blue-3'"
            :maxLength="titleMaxLength"
            :placeholder="t('ex: 廣告開啟規則')"
            :required="true"
          />
        </div>
      </OuterBlock>
      <OuterBlock :title="t('執行時間')" :icon="'PhCalendarCheck'" id="time">
        <RepeatFrequency
          v-model:frequency="json.frequency"
          v-model:interval="json.interval"
        />
      </OuterBlock>
      <OuterBlock :title="t('通知')" :icon="'PhBellRinging'" id="notification">
        <Notification />
      </OuterBlock>
      <EventAction />
      <!-- <Condition /> -->
      <span v-if="checkDataValid.length" class="text-red-1">{{
        t("資料未填寫完整")
      }}</span>
      <button
        ref="submitBtn"
        class="p-2 px-3 rounded bg-slate-100 hover:bg-sky-500 hover:text-white hidden"
      >
        {{ t("保存") }}
      </button>
    </form>
  </div>
</template>
<style lang="scss" scoped>
#editor-container-outer {
  @apply flex-1 h-full scroll-smooth;
}
</style>
