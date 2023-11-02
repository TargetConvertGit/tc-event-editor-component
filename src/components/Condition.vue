<script setup lang="ts">
import TextInput from "./TextInput.vue";
import { PhCaretCircleRight } from "@phosphor-icons/vue";
import axios from "axios";
import { getApiUrlBase, getToken } from "../apiConfig";

import ConditionItem from "./ConditionItem.vue";

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

// 新增條件
const addCondition = () => {
  conditions.value.push({});
  addConditionModal.value = false;
};
// 刪除條件
const removeItem = (index: number) => {
  conditions.value.splice(index, 1);
};
const demoConditionFilterText = ref("");
const allDemoCondition = ref([]);
const filterItem = computed(() => "title");
const getDemoCondition = async () => {
  const res = await axios({
    method: "get",
    url: `${getApiUrlBase()}/heybear/api/automation/template`,
    data: { type: 2 },
    withCredentials: true,
    headers: {
      Authorization: getToken(),
    },
  });
  allDemoCondition.value = res.data.data;
};
const demoCondition = computed(() => {
  const filterText = demoConditionFilterText.value.toLowerCase();
  return allDemoCondition.value.filter((acc) =>
    acc[filterItem.value].toLowerCase().includes(filterText)
  );
});
const getDemoConditionLoading = ref(false);
const showConditionModal = async () => {
  addConditionModal.value = true;
  getDemoConditionLoading.value = true;
  await getDemoCondition();
  getDemoConditionLoading.value = false;
};
</script>

<template>
  <template v-for="(condition, index) in conditions" :key="index">
    <ConditionItem
      :index="index"
      v-model="conditions[index]"
      @removeItem="removeItem(index)"
    />
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
    @click="showConditionModal"
  >
    + 加入條件
  </div>
  <div
    class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full flex justify-center items-center bg-dark-3 rounded bg-opacity-50 z-[2]"
    v-if="addConditionModal"
  >
    <div class="relative bg-light-5 rounded-xs shadow-01 w-4/5 p-4">
      <span class="p1-b flex justify-center mb-1">請選擇條件</span>
      <TextInput
        :placeholder="'輸入關鍵字搜尋 ex: 轉換數'"
        v-model="demoConditionFilterText"
      />
      <div class="flex flex-col gap-2 mt-2">
        <div
          class="border border-dark-5 rounded items-center py-1 px-3 flex gap-1 hover:bg-true-blue-5 cursor-pointer"
          v-for="condition in demoCondition"
          :key="condition.id"
        >
          <div class="flex flex-col flex-1">
            <span class="p3-b">{{ condition.title }}</span>
            <span class="p4-r text-dark-4">{{ condition.description }}</span>
          </div>
          <ph-caret-circle-right :size="18" class="text-dark-3" weight="bold" />
        </div>
      </div>
      <div
        class="border ml-auto mt-2 border-true-blue-3 text-true-blue-3 rounded px-1 w-fit p3-r cursor-pointer hover:text-true-blue-2 hover:border-true-blue-2"
        @click="addCondition"
      >
        自訂
      </div>
      <div class="flex gap-3 items-center justify-center mt-4">
        <div
          class="p3-b flex cursor-pointer items-center gap-1 rounded bg-true-blue-2 px-1.5 py-0.5 text-light-5 hover:bg-true-blue-1"
          @click="addConditionModal = false"
        >
          確定
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
