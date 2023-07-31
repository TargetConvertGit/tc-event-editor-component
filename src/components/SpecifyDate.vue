<script setup lang="ts">
export interface Props {
  type: string | number;
  modelValue?: string | number;
}
const props = withDefaults(defineProps<Props>(), {});
</script>

<template>
  <div>{{ props.type }}</div>
</template>

<style lang="scss" scoped></style>
