<script setup lang="ts">
import { i18n } from "../i18n";

interface Props {
  value: any;
  label: string;
  options: Object;
  disabled?: boolean;
  unSelected?: "" | -1;
}
const { t } = i18n.global;

const props = withDefaults(defineProps<Props>(), {
  disabled: false,
  unSelected: "",
});

const emit = defineEmits(["updateValue"]);

const tmpValue = computed({
  get: () => props.value,
  set: (v: string | number) => {
    emit("updateValue", v);
    return v;
  },
});
watchEffect(() => {
  if (props.disabled) emit("updateValue", props.unSelected);
});
</script>

<template>
  <label class="flex justify-start items-center gap-4">
    <span class="p3-r text-dark-4">{{ label }}</span>

    <div class="relative">
      <input
        class="opacity-0 absolute w-[1px] bottom-0 left-1/2 h-[1px] pointer-events-none"
        type="text"
        v-if="unSelected != ''"
        required
        :value="tmpValue != unSelected ? '123' : ''"
      />
      <select
        class="p3-b text-true-blue-3 min-w-[5rem] w-20 flex cursor-pointer items-center justify-center gap-4 rounded shadow-01 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50"
        :class="[
          value != unSelected ? '!w-fit' : '!text-dark-5 !p3-r',
          { 'pointer-events-none': disabled },
        ]"
        v-model="tmpValue"
        required
      >
        <option :value="unSelected" disabled>{{ t("請選擇") }}</option>
        <template v-for="(v, key) in options" :key="key">
          <option v-if="!disabled" :value="v">
            <slot name="default" :option="key" />
          </option>
        </template>
        <slot name="customOption" />
      </select>
    </div>
  </label>
</template>

<style lang="scss" scoped></style>
