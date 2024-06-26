<script setup lang="ts">
import TextInput from "./TextInput.vue";
import axios from "axios";
import { PhX, PhPlusCircle } from "@phosphor-icons/vue";
import ConditionItem from "./ConditionItem.vue";
import { i18n } from "../i18n";
import { Tooltip } from "floating-vue";
import "floating-vue/dist/style.css";
const { t } = i18n.global;
const eventData = inject("eventData");
const conditions = ref(eventData.value.conditions ?? []);
const addConditionModal = ref(false);
const initialData = inject("initialData");

watch(
  conditions,
  (val: any) => {
    eventData.value.conditions = val;
  },
  { deep: true }
);
const toBottom = inject("toBottom");

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
    url: `${initialData.apiUrl}/heybear/api/automation/ad-events/template/${id}`,
    withCredentials: true,
    headers: {
      Authorization: initialData.token,
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
    url: `${initialData.apiUrl}/heybear/api/automation/template`,
    params: { type: 2 },
    withCredentials: true,
    headers: {
      Authorization: initialData.token,
    },
  });
  allDemoCondition.value = res.data.data;
};
const demoCondition = computed(() => {
  const filterText = demoConditionFilterText.value.toLowerCase();
  return allDemoCondition.value.filter(
    (acc) =>
      acc[filterItem.value].toLowerCase().includes(filterText) &&
      acc["platform"] == targetClient.value
  );
});
const getDemoConditionLoading = ref(false);
const showConditionModal = async () => {
  addConditionModal.value = true;
  getDemoConditionLoading.value = true;
  await getDemoCondition();
  getDemoConditionLoading.value = false;
};

const targetClient = ref();
const targetType = ref();
watchEffect(() => {
  targetClient.value = eventData.value?.action?.client;
  targetType.value = eventData.value?.action?.targetType;
});

const lockScroll = inject("lockScroll");
watch(addConditionModal, (val: boolean) => {
  lockScroll.value = val;
  if (!val) demoConditionFilterText.value = "";
});

const unSelected = "";
// 是否有設定目標了
const targetSettingComplete = computed(() => {
  if (targetType.value == unSelected) return false;

  return true;
});

const conditionModalLoading = ref(false);

onMounted(() => {
  conditionModalLoading.value = true;
});
onUnmounted(() => {
  eventData.value.conditions = [];
});
</script>

<template>
  <template v-for="(_, index) in conditions" :key="index">
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
      <p class="p3-b to-dark-4">{{ t("且") }}</p>
      <div class="h-[1px] flex-1 bg-light-3"></div>
    </div>
  </template>
  <Tooltip
    :triggers="['hover']"
    :placement="'top'"
    class="empty:hidden"
    :disabled="targetSettingComplete"
  >
    <div
      class="p3-b cursor-pointer rounded shadow-01 hover:shadow-02 transition-all bg-light-5 py-1 px-2 text-dark-4 flex items-center justify-center gap-1"
      @click="!targetSettingComplete ? null : showConditionModal()"
      id="condition"
    >
      <ph-plus-circle weight="bold" />
      {{ t("加入條件") }}
    </div>
    <template #popper>
      <div>
        <span class="p3-r text-light-5">
          {{ t("請先設定目標對象") }}
        </span>
      </div>
    </template>
  </Tooltip>

  <Teleport to="#editor-container-outer" v-if="conditionModalLoading">
    <div
      class="sticky top-0 left-0 pt-4 right-0 items-start bottom-0 w-full h-full flex justify-center bg-dark-3 bg-opacity-50 z-[2]"
      v-if="addConditionModal"
    >
      <div
        class="sticky flex flex-col max-h-[95%] bg-light-5 rounded-xs shadow-01 w-4/5 py-4 px-10 h-fit top-[3%] transition-all"
      >
        <div class="flex justify-between">
          <span class="p2-b flex justify-center mb-3 text-dark-2 mr-auto">{{
            t("請選擇條件")
          }}</span>
          <Ph-X
            class="text-dark-3 cursor-pointer hover:text-dark-2"
            weight="bold"
            @click="addConditionModal = false"
          />
        </div>
        <TextInput
          class="w-full"
          :placeholder="t('輸入關鍵字搜尋')"
          v-model="demoConditionFilterText"
        />

        <div
          class="h-4 mt-4 w-4 mx-auto animate-spin rounded-full border-2 border-solid border-blue-400 border-t-transparent"
          v-if="getDemoConditionLoading"
        ></div>
        <template v-else>
          <div
            class="flex flex-wrap gap-3 mt-8 rounded overflow-y-auto flex-1 px-1 py-1"
          >
            <div
              class="border flex items-center gap-1 border-true-blue-3 text-true-blue-3 rounded-full px-3 py-1 w-fit p3-b cursor-pointer hover:text-true-blue-2 hover:border-true-blue-2"
              @click="addCondition"
              v-if="!getDemoConditionLoading"
            >
              <ph-plus-circle size="18" />
              {{ t("自訂條件") }}
            </div>
            <div
              class="rounded-full shadow-01 items-center py-1 px-3 flex gap-1 hover:bg-true-blue-5 cursor-pointer"
              v-for="condition in demoCondition"
              :key="condition.id"
              @click="selectDemoCondition(condition.id)"
            >
              <div class="flex flex-col flex-1 gap-1.5">
                <span class="p3-b text-dark-3">{{ condition.title }}</span>
                <!-- <span class="p3-r text-dark-5">{{
                  condition.description
                }}</span> -->
              </div>
            </div>
          </div>
        </template>

        <div
          class="mx-auto flex items-center justify-between gap-4 mt-8 border-t w-full pt-4"
          v-if="!getDemoConditionLoading"
        >
          <div
            class="p3-r flex cursor-pointer items-center gap-1 text-dark-3 hover:text-dark-2 underline transition-all"
            @click="addConditionModal = false"
          >
            {{ t("取消") }}
          </div>
          <div
            class="p3-r flex cursor-pointer items-center gap-1 rounded bg-true-blue-2 border border-transparent px-4 py-1.5 text-light-5 hover:bg-true-blue-3 transition-all"
            @click="addConditionModal = false"
          >
            {{ t("確定") }}
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>
