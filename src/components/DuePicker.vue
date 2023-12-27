<script setup lang="ts">
import { PhX } from "@phosphor-icons/vue";
import { DatePicker } from "v-calendar";
import "v-calendar/style.css";
import { i18n } from "../i18n";
import { onClickOutside } from "@vueuse/core";
import { cloneDeep } from "lodash";
import moment from "moment";
import "moment-timezone";
const { t } = i18n.global;

export interface Props {
  modelValue: string | null | Date | undefined;
}
const props = withDefaults(defineProps<Props>(), {});

const emit = defineEmits(["update:modelValue"]);
const eventData = inject("eventData");
const initialData = inject("initialData");

const setDeadline = ref(false);

const tempValue = ref(
  props.modelValue ? new Date(props.modelValue).toISOString() : ""
);
const updateStart = (v: Date) => {
  tempValue.value = v.toISOString();
};

const datePickerOpen = ref(false);
watch(datePickerOpen, (val: boolean) => {
  if (!val) {
    emit("update:modelValue", cloneDeep(tempValue.value));
  }
});

const target = ref(null);

onClickOutside(target, () => (datePickerOpen.value = false));

// 轉換顯示文字
function createHourRange(dateTime: string) {
  // 從輸入的日期時間字串中取得日期和時間部分
  let [date, time] = dateTime.split(" ");

  // 從時間部分中取得小時部分
  let hour = time.split(":")[0];
  hour = hour.padStart(2, "0"); // 確保兩位數的小時

  // 建立該小時的開始時間和結束時間字串
  let startHour = `${date} ${hour}:00`;
  let endHour = `${hour}:59`;

  // 回傳該小時的時間範圍
  return `${startHour}-${endHour}`;
}

const listBlock = ref();
// 選擇器位置
const setListBlockStyle = () => {
  nextTick(() => {
    if (!listBlock.value) return;
    const rect = listBlock.value.getBoundingClientRect();
    if (rect.right >= window.innerWidth) {
      listBlock.value.classList.add("list-left");
    } else {
      listBlock.value.classList.add("list-right");
    }
  });
};

// 有數值就自動啟用結束日
watch(
  () => props.modelValue,
  (val: string) => {
    if (val) {
      setDeadline.value = true;
    }
  },
  { immediate: true }
);

// 是否啟用結束日
watch(setDeadline, (value: boolean) => {
  if (!value) {
    emit("update:modelValue", null);
  } else {
    nextTick(() => {
      datePickerOpen.value = true;
      setListBlockStyle();
    });
  }
});
onUnmounted(() => {
  emit("update:modelValue", null);
});
</script>

<template>
  <div class="flex flex-col gap-2">
    <div class="flex items-center gap-1">
      <input type="checkbox" v-model="setDeadline" id="due" class="hidden" />
      <label
        for="due"
        class="p3-b text-true-blue-3 w-fit flex cursor-pointer items-center justify-center gap-2 rounded shadow-01 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50"
        v-if="!setDeadline"
        >{{ t("持續執行") }}</label
      >
      <div class="relative" ref="target" v-else>
        <div
          class="p3-b text-true-blue-3 relative flex cursor-pointer items-center justify-start gap-4 rounded shadow-01 bg-light-5 py-1 px-2 transition-all hover:bg-light-3 hover:bg-opacity-50"
          :class="{ ' !text-dark-5 !p3-r': !tempValue }"
          @click.stop="datePickerOpen = !datePickerOpen"
        >
          <input
            :value="tempValue"
            required
            class="opacity-0 absolute w-[1px] bottom-0 left-1/2 h-[1px] pointer-events-none"
          />
          {{
            tempValue
              ? createHourRange(
                  moment(tempValue)
                    .tz(
                      initialData.timezone ??
                        Intl.DateTimeFormat().resolvedOptions().timeZone
                    )
                    .format("YYYY-MM-DD HH:mm")
                )
              : t("未設定")
          }}
        </div>
        <Transition name="fade" mode="out-in">
          <div
            class="absolute top-[calc(100%+.75rem)] z-10"
            ref="listBlock"
            v-if="datePickerOpen"
          >
            <DatePicker
              v-model="tempValue"
              mode="dateTime"
              :min-Date="
                eventData.start ? new Date(eventData.start) : new Date()
              "
              is24hr
              hide-time-header
              :time-accuracy="initialData.isProd ? 1 : 2"
              :timezone="initialData.timezone"
              @update:modelValue="updateStart"
            />
          </div>
        </Transition>
      </div>

      <PhX
        v-if="setDeadline"
        @click="setDeadline = false"
        weight="bold"
        class="text-dark-4 hover:text-dark-3 p3-b cursor-pointer"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.list-left {
  left: 0;
}
.list-right {
  right: 0;
}
</style>
