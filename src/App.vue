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

    ]
}`);
const d = ref(`{
      "id": 1,
      "title": "Dignissimos repellat hic omnis aliquid et.",
      "start": "2023-09-25 13:28:18",
      "frequency": 3,
      "interval": 4,
      "weekdays": [
        -1,
        -2
      ],
      "week_ordinal": 5,
      "month_date": 5,
      "year_months": 1,
      "due": null,
      "except": [],
      "deleted_at": null,
      "created_at": "2023-09-25T10:13:30.000000Z",
      "updated_at": "2023-09-25T10:13:30.000000Z",
      "action": {
        "id": 1,
        "event_id": 1,
        "client": 1,
        "adLevel": 3,
        "target": null,
        "action": 5,
        "params": [],
        "created_at": "2023-09-25T10:13:30.000000Z",
        "updated_at": "2023-09-25T10:13:30.000000Z"

      },
      "conditions": [
        {
          "id": 1,
          "event_id": 1,
          "target": [],
          "conditionType": "eum",
          "operation": "==",
          "valueType": "value",
          "value": "70.87",
          "dateRangeType": "Today",
          "dateRange": [],
          "comparison": 1,
          "created_at": "2023-09-25T10:13:30.000000Z",
          "updated_at": "2023-09-25T10:13:30.000000Z"
        }
      ]
    }`);

const dd = ref(`{
}`);
const showModal = ref(false);
const editor = ref();
</script>

<template>
  <h1 @click="editor.saveData">TC Event Editor Demo</h1>
  <div class="flex gap-5">
    <div class="flex flex-col space-y-2 w-full">
      <textarea
        class="form-textarea h-full rounded border p-5"
        v-model="dd"
      ></textarea>
    </div>
    <TCEventEditorApp
      v-model:data="dd"
      class="w-fit min-w-[50%]"
      ref="editor"
    />
  </div>
</template>

<style scoped></style>
