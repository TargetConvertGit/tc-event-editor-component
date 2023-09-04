<script setup lang="ts">
import TextInput from "./TextInput.vue";

const addConditionModal = ref(false);
</script>

<template>
  <div
    class="p3-b text-true-blue-3 flex ml-auto w-fit cursor-pointer hover:text-true-blue-2"
    @click="addConditionModal = true"
  >
    + 加入條件
  </div>
  <div
    class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-light-5 rounded-xs shadow-01 w-4/5 p-2"
    v-if="addConditionModal"
  >
    <span class="p2-b">請選擇條件</span>
    <TextInput />
  </div>
</template>

<style lang="scss" scoped></style>
