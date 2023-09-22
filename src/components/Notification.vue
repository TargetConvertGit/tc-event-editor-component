<script setup lang="ts">
import { emailType } from "../types/event-items";
const email = ref();
const eventData = inject("eventData");
const notification = ref(
  eventData.value.notification ?? {
    email: emailType.None,
  }
);

watch(
  notification,
  (val) => {
    eventData.value.notification = val;
  },
  { deep: true }
);
</script>

<template>
  <div>
    <label class="flex items-center gap-2">
      <span class="p3-r">Email</span>
      <select
        class="p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50"
        v-model="notification.email"
      >
        <template v-for="(value, key) in emailType" :key="key">
          <option v-if="!Number.isInteger(value)" :value="key">
            {{ value }}
          </option>
        </template>
      </select>
    </label>
  </div>
</template>

<style lang="scss" scoped></style>
