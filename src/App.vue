<script setup lang="ts">
import { TCEventEditorApp, setApiUrlBase, setToken } from "./index";
import { i18n } from "./i18n";
import setLang from "./langSetting.js";
const dd = ref(`{
    "start": "2023-12-07T16:00:00.000000Z",
    "title": "在(當天+1天) 00:00 - 00:59 降低日預算$100",
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
        "action": 3,
        "params": {
            "budgetType": "dailyBudget",
            "valueType": "value",
            "value": 100,
            "limit": null
        }
    },
    "conditions": []
}`);
const editor = ref();
setApiUrlBase("https://tc-adsystem-stg.southeastasia.cloudapp.azure.com");
setToken("Bearer 7|IMZYBXtkk2b4DXnscSaexanLbcBbjvd7dP5Djj6Q");

const submit = () => {
  editor?.value.saveData();
};
</script>

<template>
  <div class="bg-dark-1 bg-opacity-70 h-screen w-full py-10">
    <div @click="setLang('zh_TW')">tw</div>
    <div @click="setLang('en_US')">us</div>
    <div class="bg-light-5 rounded w-5/6 h-full flex mx-auto flex-col my-auto">
      <span class="p1-b p-1" @click="submit">建立自動化規則</span>
      <TCEventEditorApp v-model:data="dd" ref="editor" />
    </div>
  </div>
</template>
