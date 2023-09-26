<script setup lang="ts">
import TextInput from "./TextInput.vue";
import OuterBlock from "./OuterBlock.vue";
import Checkbox from "./checkbox.vue";
import ConditionItem from "./ConditionItem.vue";
import {
  EventCondition,
  ConditionType,
  DateRangeType,
  OperationType,
  ValueType,
  ClientType,
} from "../types/event-items";

const addConditionModal = ref(false);

const eventData = inject("eventData");
const conditions = ref(eventData.value.conditions ?? []);
watch(
  conditions,
  (val) => {
    eventData.value.conditions = val;
  },
  { deep: true }
);

const addCondition = () => {
  conditions.value.push({});
  addConditionModal.value = false;
};
</script>

<template>
  <template v-for="(condition, index) in conditions" :key="index">
    <ConditionItem :index="index" v-model="conditions[index]" />
    <div
      class="flex items-center justify-center gap-3"
      v-if="index + 1 !== conditions.length"
    >
      <div class="h-[1px] flex-1 bg-light-3"></div>
      <p class="p4-b to-dark-4">且</p>
      <div class="h-[1px] flex-1 bg-light-3"></div>
    </div>
  </template>

  <div
    class="p3-b text-true-blue-3 flex ml-auto w-fit cursor-pointer hover:text-true-blue-2"
    @click="addConditionModal = !addConditionModal"
  >
    + 加入條件
  </div>
  <div
    class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-light-5 rounded-xs shadow-01 w-4/5 p-4 min-h-[50%]"
    v-if="addConditionModal"
  >
    <span class="p1-b flex justify-center mb-1">請選擇條件</span>
    <TextInput />
    <div class="flex flex-col gap-2 mt-2">
      <div
        class="border border-dark-5 rounded py-1 px-3 flex gap-1 hover:border-transparent hover:bg-true-blue-5 cursor-pointer"
      >
        <div class="flex flex-col flex-1">
          <span class="p3-b">當帳戶剩餘預算 小於指定金額，執行動作</span>
          <span class="p4-r">ex: 帳戶剩餘預算小於 1000 元</span>
        </div>
        <div class="flex justify-center items-center">O</div>
      </div>
    </div>
    <div
      class="border ml-auto mt-2 border-true-blue-3 text-true-blue-3 rounded px-1 w-fit p3-r cursor-pointer hover:text-true-blue-2 hover:border-true-blue-2"
      @click="addCondition"
    >
      自訂
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
