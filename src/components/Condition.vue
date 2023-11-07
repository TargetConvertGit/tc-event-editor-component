<script setup lang="ts">
import TextInput from "./TextInput.vue";
import { PhX } from "@phosphor-icons/vue";
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
// 範例條件
const selectDemoCondition = async (id: number) => {
  const res = await axios({
    method: "get",
    url: `${getApiUrlBase()}/heybear/api/automation/ad-events/template/${id}`,
    withCredentials: true,
    headers: {
      Authorization: getToken(),
    },
  });
  conditions.value.push(res.data.data);
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
    params: { type: 2 },
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
    class="absolute top-0 left-0 pt-4 right-0 bottom-0 w-full h-full flex justify-center bg-dark-3 bg-opacity-50 z-[2]"
    v-if="addConditionModal"
  >
    <div
      class="sticky flex flex-col max-h-[90%] bg-light-5 rounded-xs shadow-01 w-4/5 p-4 h-fit top-4"
    >
      <ph-x
        class="absolute top-1 right-1 cursor-pointer text-dark-2 hover:text-dark-1"
        @click="addConditionModal = false"
        size="18"
        weight="bold"
      />

      <span class="p2-b flex justify-center mb-3 text-dark-2">請選擇條件</span>
      <TextInput
        :placeholder="'輸入關鍵字搜尋 ex: 轉換數'"
        v-model="demoConditionFilterText"
      />
      <div
        class="h-4 w-4 mx-auto animate-spin rounded-full border-2 border-solid border-blue-400 border-t-transparent"
        v-if="getDemoConditionLoading"
      ></div>
      <template v-else>
        <div class="flex flex-col gap-2 mt-4 overflow-y-auto flex-1">
          <div
            class="border border-light-1 rounded items-center py-1 px-3 flex gap-1 hover:bg-true-blue-5 cursor-pointer"
            v-for="condition in demoCondition"
            :key="condition.id"
            @click="selectDemoCondition(condition.id)"
          >
            <div class="flex flex-col flex-1 gap-1">
              <span class="p4-b">{{ condition.title }}</span>
              <span class="p4-r text-dark-4">{{ condition.description }}</span>
            </div>
          </div>
        </div>
      </template>
      <div
        class="border ml-auto mt-2 border-true-blue-3 text-true-blue-3 rounded px-1 w-fit p3-b cursor-pointer hover:text-true-blue-2 hover:border-true-blue-2"
        @click="addCondition"
      >
        自訂
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
