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
const expand = ref(true);
</script>

<template>
  <div class="flex items-center flex-col justify-center py-2">
    <div
      class="item flex-1 flex gap-2 w-full items-center relative pr-4"
      @click="target?.children ? (expand = !expand) : null"
    >
      <div class="flex justify-start gap-2 w-full items-center z-[2]">
        <div v-if="target?.children" class="flex-shrink-0 cursor-pointer pl-4">
          <ph-caret-down
            class="text-dark-3 transition-all"
            :size="16"
            :class="{ ' -rotate-90': !expand }"
          />
        </div>
        <div v-else class="w-6"></div>
        <label
          :for="`target-${target.id}`"
          class="flex-1 cursor-pointer flex items-center gap-2"
          :class="[!target?.children ? 'p3-r' : 'p3-r']"
        >
          <div
            class="w-2 h-2 rounded-full flex-shrink-0"
            v-show="target.hasOwnProperty('enabled')"
            :class="[target.enabled ? 'bg-success-green-4' : 'bg-red-4']"
          ></div>
          <span>
            {{ target.name }}
          </span>
        </label>
      </div>
      <Checkbox
        class="rounded data-[state=checked]:bg-true-blue-3 border-true-blue-4 z-[2]"
        :id="`target-${target.id}`"
        v-if="!target?.children"
        :checked="targets.some((ac) => ac === target.id)"
        @update:checked="addTarget(target)"
      />
    </div>
    <div
      class="flex flex-col pl-6 w-full pt-2"
      v-if="target?.children && expand"
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
.item:hover {
  position: relative;
  &::before {
    @apply bg-light-3;
    content: "";
    left: 0;
    right: 0;
    border-radius: 8px;
    opacity: 0.5;
    position: absolute;
    top: -8px;
    bottom: -7px;
    z-index: 1;
  }
}
</style>
