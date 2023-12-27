<script setup lang="ts">
export interface Props {
  placeholder?: string;
  modelValue?: string | number;
  type?: string | number;
  maxLength?: number;
  required?: boolean;
  inputClass?: string;
  disabled?: boolean;
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
watchEffect(() => {
  if (props.disabled) emit("update:modelValue", "");
});
</script>

<template>
  <div
    class="flex w-auto items-center justify-center gap-2 rounded shadow-01 bg-light-5 py-1 px-2 hover:bg-light-3 hover:bg-opacity-50 input-outer"
  >
    <input
      :value="modelValue"
      @input="onInput"
      :type="type"
      min="0"
      :class="[inputClass, { 'pointer-events-none': disabled }]"
      class="p3-b w-full border-none outline-none shadow-none placeholder:text-dark-5 text-dark-3"
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
.input-outer {
  &:hover {
    input {
      @apply bg-opacity-0 bg-light-3;
    }
  }
}
</style>
