<script setup lang="ts">
import { emailType, EmailNotify } from "../types/event-items";
import { i18n } from "../i18n";

const { t } = i18n.global;
const eventData = inject("eventData");
const notification = ref(
  eventData.value.notify ?? {
    email: EmailNotify.All,
  }
);

watch(
  notification,
  (val: number) => {
    eventData.value.notify = val;
  },
  { deep: true, immediate: true }
);
</script>

<template>
  <div>
    <label class="flex items-center gap-2">
      <span class="p4-b">以電子郵件寄出結果</span>
      <select
        class="p4-b text-dark-3 flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50"
        v-model="notification.email"
      >
        <option value="" disabled>請選擇</option>
        <template v-for="(value, key) in emailType" :key="key">
          <option v-if="!Number.isInteger(value)" :value="Number(key)">
            {{ t(`mail${value}`) }}
          </option>
        </template>
      </select>
    </label>
  </div>
</template>

<style lang="scss" scoped></style>
