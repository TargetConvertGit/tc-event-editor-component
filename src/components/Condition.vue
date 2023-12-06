<script setup lang="ts">
import TextInput from "./TextInput.vue";
import axios from "axios";
import { getApiUrlBase, getToken } from "../apiConfig";
import { PhX } from "@phosphor-icons/vue";

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

const toBottom = () => {
  const editor = document.getElementById("editor-container-outer");
  if (!editor) return;
  nextTick(() => {
    setTimeout(() => {
      editor.scrollTop = editor.scrollHeight;
    }, 200);
  });
};

// 新增條件
const addCondition = () => {
  conditions.value.push({});
  addConditionModal.value = false;
  toBottom();
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
  toBottom();
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
      <p class="p3-b to-dark-4">且</p>
      <div class="h-[1px] flex-1 bg-light-3"></div>
    </div>
  </template>

  <div
    class="p3-b cursor-pointer rounded shadow-01 hover:shadow-02 transition-all bg-light-5 py-1 px-2 text-dark-4 flex items-center justify-center"
    @click="showConditionModal"
    id="condition"
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
      <div class="flex justify-between">
        <span class="p2-b flex justify-center mb-3 text-dark-2 mr-auto"
          >請選擇條件</span
        >
        <Ph-X
          class="text-dark-3 cursor-pointer hover:text-dark-2"
          weight="bold"
          @click="addConditionModal = false"
        />
      </div>
      <TextInput
        class="max-w-xs min-w-[200px] mx-auto w-full"
        :placeholder="'輸入關鍵字搜尋 ex: 轉換數'"
        v-model="demoConditionFilterText"
      />
      <div
        class="h-4 mt-4 w-4 mx-auto animate-spin rounded-full border-2 border-solid border-blue-400 border-t-transparent"
        v-if="getDemoConditionLoading"
      ></div>
      <template v-else>
        <div
          class="flex flex-col gap-2.5 mt-8 overflow-y-auto flex-1 px-1 py-0.5"
        >
          <div
            class="shadow-01 rounded items-center py-1 px-3 flex gap-1 hover:bg-true-blue-5 cursor-pointer"
            v-for="condition in demoCondition"
            :key="condition.id"
            @click="selectDemoCondition(condition.id)"
          >
            <div class="flex flex-col flex-1 gap-1.5">
              <span class="p3-b text-dark-3">{{ condition.title }}</span>
              <span class="p3-r text-dark-5">{{ condition.description }}</span>
            </div>
          </div>
        </div>
      </template>
      <div
        class="border ml-auto mt-2 border-true-blue-3 text-true-blue-3 rounded px-1 w-fit p3-b cursor-pointer hover:text-true-blue-2 hover:border-true-blue-2"
        @click="addCondition"
        v-if="!getDemoConditionLoading"
      >
        自訂
      </div>
      <div
        class="mx-auto flex w-fit items-center gap-4 mt-4"
        v-if="!getDemoConditionLoading"
      >
        <div
          class="p3-b flex cursor-pointer items-center gap-1 rounded border bg-light-5 border-dark-5 px-2 py-1 text-dark-4 hover:text-light-5 hover:bg-dark-5"
          @click="addConditionModal = false"
        >
          取消
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
