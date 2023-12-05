<script setup lang="ts">
import EventActionTargetItem from "./EventActionTargetItem.vue";
import { PhCaretDown, PhCaretUp } from "@phosphor-icons/vue";
import { Checkbox } from "../shadcn/components/ui/checkbox";

export interface Props {
  target: {
    id: string;
    name: string;
    children?: any;
  };
  targets: any;
}

const addTarget = inject("addTarget");
const props = withDefaults(defineProps<Props>(), {});
const expend = ref(true);
</script>

<template>
  <div class="flex items-center flex-col justify-center py-2">
    <div
      class="item flex-1 flex gap-2 w-full items-center relative"
      @click="target?.children ? (expend = !expend) : null"
    >
      <Checkbox
        class="rounded data-[state=checked]:bg-true-blue-3 border-true-blue-5"
        :id="`target-${target.id}`"
        v-if="!target?.children"
        :checked="targets.some((ac) => ac === target.id)"
        @update:checked="addTarget(target)"
      />
      <div class="flex justify-start gap-2 w-full items-center">
        <div v-if="target?.children" class="flex-shrink-0 cursor-pointer">
          <ph-caret-down class="text-dark-3" :size="16" v-if="expend" />
          <ph-caret-up class="text-dark-4" :size="16" v-else />
        </div>
        <label
          :for="`target-${target.id}`"
          class="flex-1 cursor-pointer flex items-center gap-1"
          :class="[!target?.children ? 'p3-r' : 'p3-b']"
        >
          <div
            v-if="!target?.children"
            class="w-2 h-2 rounded-full"
            :class="[target.enabled ? 'bg-success-green-3' : 'bg-red-3']"
          ></div>
          <span :class="[expend ? 'text-dark-3' : 'text-dark-4']">
            {{ target.name }}
          </span>
        </label>
      </div>
    </div>
    <div
      class="flex flex-col pl-6 w-full pt-2"
      v-if="target?.children && expend"
    >
      <EventActionTargetItem
        v-for="ta in target.children"
        :target="ta"
        :targets="targets"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.item::after {
  content: "";

  @apply absolute -bottom-2 h-[1px] w-full bg-light-4;
}
</style>
