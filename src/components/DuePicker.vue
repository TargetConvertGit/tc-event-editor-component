<script setup lang="ts">
import { PhX } from "@phosphor-icons/vue";
import { DatePicker } from "v-calendar";
import "v-calendar/style.css";
export interface Props {
  modelValue: string | null | Date | undefined;
}
const props = withDefaults(defineProps<Props>(), {});

const emit = defineEmits(["update:modelValue"]);

const localModelValue = computed({
  get: () => (props.modelValue ? new Date(props.modelValue).toISOString() : ""),
  set: (value) => emit("update:modelValue", value),
});

const setDeadline = ref(false);

watch(
  () => props.modelValue,
  (val) => {
    if (val) {
      setDeadline.value = true;
    }
  },
  { immediate: true }
);
const date = ref();
watch(setDeadline, (value) => {
  if (!value) {
    emit("update:modelValue", null);
  } else {
    nextTick(() => {
      date.value.click();
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
        >持續執行</label
      >
      <DatePicker
        v-if="setDeadline"
        v-model="localModelValue"
        mode="dateTime"
        :timezone="Intl.DateTimeFormat().resolvedOptions().timeZone"
        :min-Date="new Date()"
        :time-accuracy="2"
        is24hr
        hide-time-header
      >
        <template #default="{ togglePopover, inputValue }">
          <div
            ref="date"
            class="p3-b text-true-blue-3 flex cursor-pointer items-center justify-center gap-2 rounded shadow-01 bg-light-5 py-1 px-2 transition-all hover:bg-light-3 hover:bg-opacity-50"
            @click="togglePopover"
          >
            {{ inputValue ? inputValue : "未設定" }}
          </div>
        </template>
      </DatePicker>
      <PhX
        v-if="setDeadline"
        @click="setDeadline = false"
        weight="bold"
        class="text-dark-4 hover:text-dark-3 p3-b cursor-pointer"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
