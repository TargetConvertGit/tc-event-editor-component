<script setup lang="ts">
import { ref, watch } from 'vue';
import { FrequencyType } from '../types/event-items';

interface Props {
    frequency: FrequencyType,
    interval: Number
}

const props = defineProps<Props>()

const emit = defineEmits(['update:frequency', 'update:interval'])

const repeat = ref(props.frequency)
// repeat.value = (() => props.frequency)()
watch(repeat, (val) => {
    if(FrequencyType[val])
        emit('update:frequency', val)
})

const frequency = ref(props.frequency)
watch(frequency, (val) => emit('update:frequency', val))
</script>

<template>
    <div class="space-y-3">
      <div class="flex space-x-1">
        <label class="flex items-center gap-1">
          <span>重複</span>
          <select class="form-select" v-model="repeat">
            <template v-for="(value, key) in FrequencyType" :key="key">
              <option v-if="Number.isInteger(value)" :value="value">{{ key }}</option>
            </template>
            <option :value="0">自訂</option>
          </select>
        </label>
      </div>
      <div v-if="FrequencyType[repeat] == undefined" class="flex flex-col space-y-3">
        <label class="flex items-center gap-1">
          <span>頻率</span>
          <select class="form-select" v-model="frequency">
            <template v-for="(value, key) in FrequencyType" :key="key">
              <option v-if="value != FrequencyType.Never && Number.isInteger(value)" :value="value">{{ key }}</option>
            </template>
          </select>
        </label>
        <label class="flex items-center space-x-1">
            <span>every</span>
            <input 
            type="text" 
            class="form-input w-full"
            @keyup="(event: Event) => $emit('update:interval', (event.target as HTMLInputElement).value)"
            :value="props.interval"
            />
            <span>{{ FrequencyType[frequency] }}</span>
        </label>
      </div>
    </div>
</template>