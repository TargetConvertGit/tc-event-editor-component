<script setup lang="ts">
import { TCEventEditorApp, setApiUrlBase } from "./index";

const dd = ref(`{
  "id": 22,
  "start": "2023-12-19T08:12:00.000000Z",
  "title": "12/19 16:12 FB開啟指定廣告",
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
  "lastTimeAt": "2023-12-19T08:12:01.000000Z",
  "action": {
    "client": 2,
    "adLevel": 4,
    "targetType": 2,
    "target": [
      "23857428423890410",
      "23857428359540410",
      "23857428248610410",
      "23857679280700410",
      "23857428181060410",
      "23857427053220410",
      "23857426837250410"
    ],
    "action": 4,
    "params": null
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
    <div @click="timezone = 'Asia/Taipei'">Asia/Taipei</div>
    <div @click="timezone = 'Asia/Tokyo'">Asia/Tokyo</div>
    <div class="bg-light-5 rounded w-5/6 h-full flex mx-auto flex-col my-auto">
      <span class="p1-b p-1" @click="submit">建立自動化規則</span>
      <TCEventEditorApp v-model:data="dd" ref="editor" :initial="init" />
    </div>
  </div>
</template>
