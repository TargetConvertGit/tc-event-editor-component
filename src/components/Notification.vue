<script setup lang="ts">
import { EmailNotify, ActionType } from "../types/event-items";
import { i18n } from "../i18n";
import Select from "./Select.vue";
import { enumToObj } from "../lib";

const { t } = i18n.global;
const eventData = inject("eventData");
const notification = ref(
  eventData.value.notify ?? {
    email: "",
  }
);
const setNotificationEmail = (v: number) => {
  notification.value.email = v;
};

watch(
  notification,
  (val: number) => {
    eventData.value.notify = val;
  },
  { deep: true, immediate: true }
);

// 依據條件顯示選項
const notificationItem = ref(enumToObj(EmailNotify));
watchEffect(() => {
  const action = eventData.value.action;
  const conditions = eventData.value.conditions;
  const items = enumToObj(EmailNotify);
  if (action.action == ActionType.None) {
    delete items["Error"];
    delete items["All"];
  }
  if (!conditions?.length) {
    delete items["ConditionMet"];
  }
  notificationItem.value = items;
  // 沒有該值就清空
  if (!Object.values(items).find((i) => i == notification.value.email))
    notification.value.email = "";
});
</script>

<template>
  <Select
    :value="notification.email"
    :label="t('以電子郵件寄出結果')"
    :options="notificationItem"
    @updateValue="setNotificationEmail"
  >
    <template #default="{ option }">
      {{ t(`mail${option}`) }}
    </template>
  </Select>
</template>

<style lang="scss" scoped></style>
