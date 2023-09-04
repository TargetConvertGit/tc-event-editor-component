<script setup lang="ts">
export interface Props {
  placeholder?: string;
  modelValue?: string | number;
}
const props = withDefaults(defineProps<Props>(), {});

const emit = defineEmits(["update:modelValue"]);
function onInput(e: any) {
  emit("update:modelValue", e.target.value);
}
</script>

<template>
  <div
    class="flex w-auto items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-1.5"
  >
    <input
      :value="modelValue"
      @input="onInput"
      type="text"
      class="p3-b w-full border-none outline-none shadow-none"
      :placeholder="placeholder"
    />
  </div>
</template>

<style lang="scss" scoped>
input {
  text-align: inherit;
}
</style>
