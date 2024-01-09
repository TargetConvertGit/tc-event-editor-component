<template>
  <div
    class="number-input relative w-full rounded shadow-01 bg-light-5 hover:bg-light-3 hover:bg-opacity-50 border-none flex justify-center items-center"
    :class="[inputClass, { disabled, textCenter }]"
  >
    <input
      :value="localModalValue"
      required
      class="opacity-0 absolute w-[1px] bottom-0 left-1/2 h-[1px] pointer-events-none"
    />
    <InputNumber
      v-model:value="localModalValue"
      :controls="false"
      :bordered="false"
      :min="min"
      :precision="precision"
      :formatter="(value) => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')"
      :parser="(value) => value.replace(/\$\s?|(,*)/g, '')"
    />
  </div>
</template>

<script setup lang="ts">
import { InputNumber } from "ant-design-vue";

export interface Props {
  placeholder?: string;
  modelValue?: string | number;
  maxLength?: number;
  required?: boolean;
  inputClass?: string;
  disabled?: boolean;
  textCenter?: boolean;
  precision?: number;
  min?: number;
}

const localModalValue = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit("update:modelValue", value);
  },
});

const props = withDefaults(defineProps<Props>(), {
  min: 1,
  modelValue: "",
  precision: 0,
});
const emit = defineEmits(["update:modelValue"]);
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
.number-input {
  ::v-deep(.ant-input-number-input) {
    @apply text-true-blue-3 font-inherit p3-b;
  }
  &.textCenter {
    ::v-deep(.ant-input-number-input) {
      @apply text-center;
    }
  }
  &.disabled {
    @apply pointer-events-none;
    ::v-deep(.ant-input-number-input) {
      @apply text-dark-5;
    }
  }
}
</style>
