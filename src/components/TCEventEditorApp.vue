<script setup lang="ts">
import { EventItem } from "../types/event-items";
import RepeatFrequency from "./RepeatFrequency.vue";
import EventAction from "./EventAction.vue";
import TextInput from "./TextInput.vue";
import Condition from "./Condition.vue";
import OuterBlock from "./OuterBlock.vue";
import Notification from "./Notification.vue";
import { getDescription } from "../description.js";
import { PhCube } from "@phosphor-icons/vue";
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
  const checkedData: EventItem = {};
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

const rules: FieldCheckRule[] = [
  { name: "title", type: "string" },
  {
    name: "start",
    type: "string",
  },
  { name: "frequency", type: "number" },
  { name: "interval", type: "number" },
  {
    name: "notification",
    child: [{ name: "email", type: "number" }],
  },
  // {
  //   name: "action",
  //   child: [
  //     { name: "client", type: "number" },
  //     { name: "adLevel", type: "number" },
  //     { name: "targetType", type: "number" },
  //     { name: "action", type: "number" },
  //   ],
  // },
  // {
  //   name: "conditions",
  //   child: [
  //     { name: "client", type: "number" },
  //     { name: "adLevel", type: "number" },
  //     { name: "action", type: "number" },
  //     { name: "target", type: "array" },
  //   ],
  // },
];

// const save = () => emit("update:data", formatData(checkData(json.value)));
const checkDataValid = ref([]);
const save = (e) => {
  e.preventDefault();
  // const { checkedData, errors } = checkData(json.value, rules);
  // checkDataValid.value = errors;
  // console.log(errors);
  emit("update:data", formatData(json.value));

  // console.log(getDescription(json.value));
};

const saveData = (e) => {
  submitBtn.value?.click();
};
provide("eventData", json);
provide("checkDataValid", checkDataValid);

const titleMaxLength = 100;

const submitBtn = ref();

defineExpose({
  saveData,
});
</script>

<template>
  <form
    v-if="props.data"
    class="p-5 rounded border flex flex-col gap-5 relative"
    id="editor-container"
    @submit.prevent="save"
  >
    <div class="p1-b">建立自動化規則<PhCube /></div>
    <OuterBlock :title="'基本資料'">
      <div>
        <span class="p4-b">規則名稱*</span>
        <TextInput
          v-model="json.title"
          :maxLength="titleMaxLength"
          :required="true"
        />
      </div>
    </OuterBlock>
    <OuterBlock :title="'執行時間'">
      <RepeatFrequency
        v-model:frequency="json.frequency"
        v-model:interval="json.interval"
      />
    </OuterBlock>
    <OuterBlock :title="'通知'">
      <Notification />
    </OuterBlock>
    <EventAction />

    <Condition />

    <span v-if="checkDataValid.length" class="text-red-1">資料未填寫完整</span>
    <button
      ref="submitBtn"
      class="p-2 px-3 rounded bg-slate-100 hover:bg-sky-500 hover:text-white"
    >
      保存
    </button>
  </form>
</template>

<style scoped>
@import "../style.css";
</style>
