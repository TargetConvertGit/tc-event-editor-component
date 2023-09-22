<script setup lang="ts">
import { ref } from "vue";
import { TCEventEditorApp } from "./index";

const data = ref(`{
    "title": "每月第一個星期一Google帳戶剩餘預算小於1000元且本季花費大於上一季度，則暫停Google指定廣告活動",
    "start": "2023-07-17T11:00Z",
    "frequency": 4,
    "interval": 2,
    "monthDate": [1],
    "due": "2023-12-31T23:59Z",
    "action": {
        "client": 2,
        "adLevel": 2,
        "action": 3,
        "target": [
            {
                "id": "4493645",
                "name": "廣告活動A"
            },
            {
                "id": "5493789",
                "name": "廣告活動B"
            }
        ],
        "params": {
            "budgetType": "dailyBudget",
            "valueType": "value",
            "value":34,
            "limit":22
        }
    },
    "conditions": [
        {
            "conditionType": "budgetRemaining",
            "operation": "<",
            "valueType": "value",
            "value": 1000,
            "target":[1]
        },
        {
            "conditionType": "spent",
            "dateRange": ["2023-11-16T11:00Z", "2023-11-22T11:00Z"],
            "operation": ">",
            "valueType": "value",
            "value": 0,
            "comparison": true
        }
    ]
}`);
const d = ref("{}");
</script>

<template>
  <h1>TC Event Editor Demo</h1>
  <div class="flex gap-5">
    <div class="flex flex-col space-y-2 w-full">
      <textarea class="form-textarea h-full rounded-lg" v-model="d"></textarea>
    </div>
    <TCEventEditorApp v-model:data="d" class="w-fit min-w-[50%]" />
  </div>
</template>

<style scoped></style>
