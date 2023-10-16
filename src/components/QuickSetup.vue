<script setup lang="ts">
const showModal = ref(false);
const qwe = () => {
  showModal.value = true;
};

const steps = ref(["選擇平台", "執行動作", "設定條件", "執行時間"]);
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
      <div class="bg-white p-3 rounded-xl flex w-4/5 min-h-[80%] max-h-96">
        <!-- step -->
        <div class="flex flex-col gap-2 py-2 px-4">
          <div v-for="(step, i) in steps" :key="step" class="flex flex-col">
            <span> Step.{{ i + 1 }} </span>
            <span>
              {{ step }}
            </span>
          </div>
        </div>
        <div class="w-[1px] h-auto bg-dark-4"></div>
        <div class="flex-1 h-auto bg-red-1"></div>
      </div>
    </vue-final-modal>
    <div @click="qwe">
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
