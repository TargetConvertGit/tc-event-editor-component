<script setup lang="ts">
const showModal = ref(false);
const qwe = () => {
  showModal.value = true;
};
</script>

<template>
  <div>
    <vue-final-modal
      v-model="showModal"
      content-class="flex h-full w-full justify-center items-center"
      :hide-overlay="false"
      :esc-to-close="true"
      :click-to-close="true"
    >
      <div class="bg-white p-3">Modal Content Here</div>
    </vue-final-modal>
    <div @click="qwe">
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
