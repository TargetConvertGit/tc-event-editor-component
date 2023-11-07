<script setup lang="ts">
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

watch(setDeadline, (value) => {
  if (!value) {
    emit("update:modelValue", null);
  }
});
onUnmounted(() => {
  emit("update:modelValue", null);
});
</script>

<template>
  <div class="flex flex-col gap-2">
    <div class="flex items-center gap-1">
      <input type="checkbox" v-model="setDeadline" id="due" />
      <label for="due" class="p4-b text-dark-2">指定結束日期</label>
      <DatePicker
        v-if="setDeadline"
        v-model="localModelValue"
        mode="dateTime"
        :timezone="Intl.DateTimeFormat().resolvedOptions().timeZone"
        :min-Date="new Date()"
        is24hr
      >
        <template #default="{ togglePopover, inputValue }">
          <div
            class="p4-b text-dark-3 flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 transition-all hover:bg-light-3 hover:bg-opacity-50"
            @click="togglePopover"
          >
            {{ inputValue ? inputValue : "未設定" }}
          </div>
        </template>
      </DatePicker>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
