<script setup lang="ts">
import { TCEventEditorApp, setApiUrlBase } from "./index";

const dd = ref(`{
  "start": "2023-12-28T16:00:00.000000Z",
  "title": "在明天 00:00 - 00:59 開啟指定廣告活動",
  "active": 1,
  "customInterval": 0,
  "frequency": -1,
  "interval": 1,
  "weekdays": null,
  "weekOrdinal": null,
  "monthDate": null,
  "yearMonths": null,
  "due": null,
  "except": null,
  "notify": {
    "email": 3,
    "line": 0
  },
  "lastTimeAt": null,
  "action": {
    "client": 1,
    "adLevel": 2,
    "targetType": 2,
    "target": [],
    "action": 4,
    "params": null,
    "pipeline": 0
  },
  "conditions": []
}`);
const editor = ref();
setApiUrlBase("https://tc-adsystem-stg.southeastasia.cloudapp.azure.com");

const submit = () => {
  editor?.value.saveData();
};
const token = ref("Bearer 118|Ferl16ncLAUXJC9jr1x1v6Be0qDMRm0GdHMTfOfV");
const timezone = ref("Asia/Tokyo");
const locale = ref("zh-TW");
const init = ref({
  apiUrl: "https://tc-adsystem-stg.southeastasia.cloudapp.azure.com",
  token: token,
  locale: locale,
  timezone: timezone,
  isProd: false,
});
</script>

<template>
  <div class="bg-dark-1 bg-opacity-70 h-screen w-full py-10">
    {{ dd }}
    <div @click="timezone = 'Asia/Taipei'">Asia/Taipei</div>
    <div @click="timezone = 'Asia/Tokyo'">Asia/Tokyo</div>
    <div
      class="bg-light-5 rounded w-5/6 h-full flex mx-auto flex-col my-auto font-jura"
    >
      <span class="p1-b p-1" @click="submit">建立自動化規則</span>
      <TCEventEditorApp v-model:data="dd" ref="editor" :initial="init" />
    </div>
  </div>
</template>
