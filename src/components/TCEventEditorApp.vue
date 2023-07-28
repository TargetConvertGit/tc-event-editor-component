<script setup lang="ts">
import { EventItem } from '../types/event-items'

interface Props {
  item: EventItem
}

const props = defineProps<Props>()

const emit = defineEmits(['updateItem'])

const changeTitle = (event: Event) => {
  if(event.target) {
    props.item.title = (event.target as HTMLInputElement).value
    emit('updateItem', props.item)
  }
}
</script>

<template>
  <div class="p-5 rounded-lg border space-y-5">
    <div>TC Event Editor is loaded.</div>
    <pre><code>item title: {{ props.item.title }}</code></pre>
    <div>變更內容</div>
    <input 
      type="text" 
      class="form-input w-full"
      @keyup="changeTitle"
      :value="props.item.title"
    />
  </div>
</template>

<style scoped>
</style>
