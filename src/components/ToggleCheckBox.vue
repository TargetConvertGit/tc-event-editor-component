<script setup lang="ts">
interface Props {
  value: any;
  label?: string;
  options: Object;
  disabled?: boolean;
  unSelected?: "" | -1;
}
const props = withDefaults(defineProps<Props>(), {
  disabled: false,
  unSelected: "",
});
const emit = defineEmits(["updateValue"]);
watchEffect(() => {
  if (props.disabled) emit("updateValue", props.unSelected);
});
</script>

<template>
  <div class="flex justify-start items-center gap-4">
    <div class="w-fit" v-if="label">
      <span class="p3-r text-dark-4">{{ label }}</span>
    </div>

    <div
      class="relative shadow-01 flex items-center py-1 px-2 rounded p3-r text-dark-3"
      :class="{ 'pointer-events-none': disabled }"
    >
      <div class="flex" v-for="(v, key, index) in options" :key="key">
        <span
          class="cursor-pointer hover:drop-shadow-md"
          :class="[
            { '!text-dark-5 p3-r': value == unSelected },
            value === v
              ? 'text-true-blue-3 drop-shadow-sm p3-b'
              : 'text-dark-5 ',
          ]"
          @click="emit('updateValue', v)"
        >
          <slot name="default" :option="key">
            {{ key }}
          </slot>
        </span>
        <div
          class="text-dark-5 mx-1"
          v-if="index < Object.keys(options).length - 1"
        >
          |
        </div>
      </div>
      <input
        type="text"
        class="opacity-0 absolute w-[1px] bottom-0 left-1/2 h-[1px] pointer-events-none"
        required
        :value="value"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
