<script setup lang="ts">
import { computed, provide } from "vue";
import { EventItem } from "../types/event-items";
import RepeatFrequency from "./RepeatFrequency.vue";
import EventAction from "./EventAction.vue";
import TextInput from "./TextInput.vue";
import Condition from "./Condition.vue";
import OuterBlock from "./OuterBlock.vue";
import Notification from "./Notification.vue";
interface Props {
  data?: string;
}

const props = defineProps<Props>();

const emit = defineEmits(["update:data"]);

const json = computed((): EventItem => JSON.parse(props.data || `{}`));

const formatData = (data: EventItem) => {
  console.log(data);
  const filteredData = Object.fromEntries(
    Object.entries(data).filter(([key, value]) => value !== null)
  );
  return JSON.stringify(filteredData, null, 4);
};
const save = () => emit("update:data", formatData(json.value));

provide("eventData", json);

const titleMaxLength = 100;
</script>

<template>
  <div
    v-if="props.data"
    class="p-5 rounded-lg border flex flex-col gap-5 relative"
  >
    <div class="p1-b">建立自動化規則</div>
    <OuterBlock :title="'基本資料'">
      <div>
        <span class="p3-b text-dark-3">規則名稱</span>
        <TextInput v-model="json.title" :maxLength="titleMaxLength" />
      </div>
    </OuterBlock>
    <OuterBlock :title="'執行時間'">
      <RepeatFrequency
        v-model:frequency="json.frequency"
        v-model:interval="json.interval"
      />
    </OuterBlock>
    <OuterBlock :title="'動作'">
      <EventAction />
    </OuterBlock>
    <!-- <OuterBlock :title="'系統通知'">
      <Notification />
    </OuterBlock> -->
    <Condition />
    <button
      @click="save"
      class="p-2 px-3 rounded-lg bg-slate-100 hover:bg-sky-500 hover:text-white"
    >
      保存
    </button>
  </div>
</template>

<style scoped>
@import "../style.css";
</style>
