<script setup lang="ts">
export interface Props {
  title: string;
}
const props = withDefaults(defineProps<Props>(), {});
</script>

<template>
  <div class="relative border border-light-3 py-4 px-3">
    <div class="p3-b absolute left-2 -top-3">
      {{ title }}
    </div>
    <slot />
  </div>
</template>

<style lang="scss" scoped></style>
