<script setup lang="ts">
export interface Props {
  label: string;
  checked: boolean;
  fieldId: string;
}
const props = withDefaults(defineProps<Props>(), {});
const emit = defineEmits(["update:checked"]);
</script>

<template>
  <div class="flex">
    <input
      @input="(event) => $emit('update:checked', event.target.checked)"
      type="checkbox"
      :checked="checked"
      :id="fieldId"
      class="hidden"
    />
    <label
      :for="fieldId"
      class="p4-b text-dark-3 cursor-pointer rounded border hover:bg-light-4 border-dark-5 px-1 py-0.5 flex justify-center items-center text-dark-2 min-w-[1.75rem] min-h-[1.75rem]"
    >
      {{ label }}
    </label>
  </div>
</template>

<style lang="scss" scoped>
input:checked ~ label {
  @apply border-transparent bg-true-blue-3 text-light-5;
}
</style>
