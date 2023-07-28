<script setup lang="ts">
import { computed } from 'vue';
import { EventItem } from '../types/event-items'
import RepeatFrequency from './RepeatFrequency.vue'

interface Props {
  data?: string
}

const props = defineProps<Props>()

const emit = defineEmits(['update:data'])

const json = computed((): EventItem => JSON.parse(props.data || `{}`))

const save = () => emit('update:data', JSON.stringify(json.value, null, 4))

</script>

<template>
  <div v-if="props.data" class="p-5 rounded-lg border space-y-5">
    <div>TC Event Editor is loaded.</div>
    <pre><code>item title: {{ json.title }}</code></pre>
    <div>
      <label>
        <span>變更標題</span>
        <input 
          type="text" 
          class="form-input w-full"
          v-model="json.title"
        />
      </label>
    </div>
    <RepeatFrequency 
      v-model:frequency="json.frequency"
      v-model:interval="json.interval" />
    <button 
      @click="save"
      class="p-2 px-3 rounded-lg bg-slate-100 hover:bg-sky-500 hover:text-white">保存</button>
  </div>
</template>

<style scoped>
@import '../style.css';
</style>
