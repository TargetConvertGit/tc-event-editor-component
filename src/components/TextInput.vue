<script setup lang="ts">
export interface Props {
  placeholder?: string;
  modelValue?: string | number;
  type?: string | number;
  maxLength?: number;
  required?: boolean;
  inputClass?: string;
}
const props = withDefaults(defineProps<Props>(), {
  type: "string",
});

const emit = defineEmits(["update:modelValue"]);
function onInput(e: any) {
  if (props.type === "number" && !e.target.value) e.target.value = 0;
  emit(
    "update:modelValue",
    props.type == "number" ? Number(e.target.value) : e.target.value
  );
}
</script>

<template>
  <div
    class="flex w-auto items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-1.5"
  >
    <input
      :value="modelValue"
      @input="onInput"
      :type="type"
      :class="inputClass"
      class="p3-r w-full border-none outline-none shadow-none placeholder:text-dark-5"
      :placeholder="placeholder"
      :maxLength="maxLength"
      :required="required"
    />
  </div>
</template>

<style lang="scss" scoped>
input {
  text-align: inherit;
  &::placeholder {
    font-weight: 400;
  }
}
</style>
