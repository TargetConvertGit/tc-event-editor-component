<script setup lang="ts">
import { Ref, ref } from 'vue';
import { TCEventEditorApp, TCEventItems } from './index'

const data = ref(JSON.stringify(JSON.parse(`{
    "title": "每月第一個星期一Google帳戶剩餘預算小於1000元且本季花費大於上一季度，則暫停Google指定廣告活動",
    "start": "2023-07-17T11:00Z",
    "frequency": 4,
    "interval": 1,
    "weekdays": [1],
    "weekOrdinal": [1],
    "due": "2023-12-31T23:59Z",
    "action": {
        "client": 1,
        "adLevel": 2,
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
        "action": 5
    },
    "conditions": [
        {
            "conditionType": "budgetRemaining",
            "operation": "<",
            "valueType": "value",
            "value": 1000
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
}`), null, 4))
const json: Ref<TCEventItems.EventItem> = ref(JSON.parse(data.value))
const updateItem = (item: TCEventItems.EventItem) => data.value = JSON.stringify(item, null, 4)
const updateData = () => {
    try {
        json.value = JSON.parse(data.value)
    }
    catch(error) {
        alert(error)
    }
}
</script>

<template>
    <h1>TC Event Editor Demo</h1>
    <div class="grid grid-cols-2 gap-5">
        <TCEventEditorApp :item="json" @update-item="updateItem" />
        <div class="flex flex-col space-y-2">
            <textarea class="form-textarea h-96 rounded-lg" v-model="data"></textarea>
            <div class="text-center">
                <button 
                    class="p-2 px-3 w-full rounded-lg bg-slate-100 hover:bg-slate-300"
                    @click="updateData"
                >更新內容</button>
            </div>
        </div>
    </div>
</template>

<style scoped>
</style>
