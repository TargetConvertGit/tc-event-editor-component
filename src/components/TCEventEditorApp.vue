<script setup lang="ts">
import { computed } from 'vue';
import { EventItem } from '../types/event-items'

interface Props {
  data?: string
}

const props = defineProps<Props>()

const emit = defineEmits(['updateItem'])

const json = computed((): EventItem => JSON.parse(props.data || `{}`))

const changeTitle = (event: Event) => {
  if(event.target) {
    json.value.title = (event.target as HTMLInputElement).value
    emit('updateItem', JSON.stringify(json.value, null, 4))
  }
}
</script>

<template>
  <div v-if="props.data" class="p-5 rounded-lg border space-y-5">
    <div>TC Event Editor is loaded.</div>
    <pre><code>item title: {{ json.title }}</code></pre>
    <div>變更內容</div>
    <input 
      type="text" 
      class="form-input w-full"
      @keyup="changeTitle"
      :value="json.title"
    />
  </div>
</template>

<style scoped>
</style>
