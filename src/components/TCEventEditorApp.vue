<script setup lang="ts">
import {
  EventItem,
  ClientType,
  AdLevelTypeGoogle,
  AdLevelTypeFacebook,
  ActionType,
} from "../types/event-items";
import RepeatFrequency from "./RepeatFrequency.vue";
import EventAction from "./EventAction.vue";
import TextInput from "./TextInput.vue";
import Condition from "./Condition.vue";
import OuterBlock from "./OuterBlock.vue";
import Notification from "./Notification.vue";
import { i18n } from "../i18n";

const { t } = i18n.global;
interface Props {
  initial: {
    apiUrl: string;
    token: string;
    locale: string;
    timezone: string;
    isProd?: boolean;
  };
  data: string;
}

const props = withDefaults(defineProps<Props>(), {
  initial: {
    isProd: false,
  },
});
const emit = defineEmits(["update:data"]);

// 基本設定
provide("initialData", props.initial);
watch(
  props.initial,
  (val: any) => {
    i18n.global.locale.value = val.locale;
  },
  { deep: true, immediate: true }
);

const json = ref(JSON.parse(props.data || {}));
watch(
  () => props.data,
  (val: string) => {
    if (val) json.value = JSON.parse(val);
  },
  { deep: true, immediate: true }
);
provide("eventData", json);

const formatData = (data: EventItem) => {
  // 剔除 value==null 的key,視情況修改
  const filteredData = Object.fromEntries(
    Object.entries(data).filter(([_, value]) => value !== null)
  );
  return JSON.stringify(filteredData, null, 4);
};

// 實際儲存
const save = (e: Event) => {
  e.preventDefault();
  emit("update:data", formatData(json.value));
};

const submitBtn = ref();
// 檢測是否有未填寫欄位
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
  checkValidItem();
  if (showErrorModal.value) {
    throw new Error("未填寫完畢");
  }
  submitBtn.value?.click();
};

const showErrorModal = ref(false);
// 動作或條件需至少一個
const checkValidItem = () => {
  const action = json.value.action;
  const conditions = json.value.conditions;
  showErrorModal.value =
    action.action == ActionType.None && !conditions?.length;
  toBottom();
  setTimeout(() => {
    showErrorModal.value = false;
  }, 3000);
};

defineExpose({
  saveData,
});

// 防止滾動
const lockScroll = ref(false);
provide("lockScroll", lockScroll);

// 規則名稱字數限制
const titleMaxLength = 100;

const hideCondition = computed(() => {
  const action = json.value?.action;
  if (!action) return false;
  return (
    (action.client == ClientType.Google &&
      action.adLevel == AdLevelTypeGoogle.AdTag) ||
    (action.client == ClientType.Facebook &&
      action.adLevel == AdLevelTypeFacebook.AdTag)
  );
});

const toBottom = () => {
  const editor = document.getElementById("editor-container-outer");
  if (!editor) return;
  nextTick(() => {
    setTimeout(() => {
      editor.scrollTop = editor.scrollHeight;
    }, 200);
  });
};
provide("toBottom", toBottom);
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

      <div class="flex flex-col gap-5">
        <EventAction v-model:showErrorModal="showErrorModal" />
        <Condition v-if="!hideCondition" />
      </div>
      <OuterBlock :title="t('通知')" :icon="'PhBellRinging'" id="notification">
        <Notification />
      </OuterBlock>
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
