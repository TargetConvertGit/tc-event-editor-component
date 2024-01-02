<template>
  <div
    class="flex w-auto items-center justify-center gap-2 rounded shadow-01 bg-light-5 py-1 px-2 hover:bg-light-3 hover:bg-opacity-50 input-outer"
  >
    <input
      :value="formattedNumber"
      @input="formatInput"
      type="text"
      :class="[inputClass, { 'pointer-events-none !text-dark-5': disabled }]"
      class="p3-b w-full border-none outline-none shadow-none placeholder:text-dark-5 text-dark-3"
      :placeholder="placeholder"
      :maxLength="maxLength"
      :required="required"
      ref="input"
    />
  </div>
</template>

<script setup lang="ts">
export interface Props {
  placeholder?: string;
  modelValue?: string | number;
  maxLength?: number;
  required?: boolean;
  inputClass?: string;
  disabled?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: 0,
});
const emit = defineEmits(["update:modelValue"]);
const input = ref<HTMLInputElement | null>(null);
const formattedNumber = ref(formatValue(props.modelValue));

watch(
  () => props.modelValue,
  (newValue: string) => {
    formattedNumber.value = formatValue(newValue);
  }
);

const formatInput = (event: Event) => {
  const inputVal = (event.target as HTMLInputElement).value;
  const parsedValue = parseInput(inputVal);
  emit("update:modelValue", parsedValue);
  if (input.value) input.value.value = parsedValue; // Apply the processed value directly to the input field
};

function formatValue(value: number | string): string {
  const formattedVal = Number(value).toLocaleString("en-US");
  return formattedVal;
}

function parseInput(input: string): string {
  // Keep only numbers and a decimal point
  let parsedValue = input.replace(/[^\d.]/g, "");

  // Restrict to two decimal places
  const decimalSplit = parsedValue.split(".");
  if (decimalSplit.length > 1) {
    parsedValue = `${decimalSplit[0]}.${decimalSplit[1].slice(0, 2)}`;
  }

  return parsedValue;
}
</script>

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
