<script setup lang="ts">
import EventActionTargetItem from "./EventActionTargetItem.vue";
import {
  PhCheck,
  PhCaretCircleDown,
  PhCaretCircleUp,
} from "@phosphor-icons/vue";

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
  <div class="py-1 flex gap-1 items-center flex-col justify-center">
    <div class="border-b border-light-3 flex-1 flex gap-2 pb-2 w-full">
      <div
        class="rounded p-0.5 border border-dark-3"
        v-if="!target?.children"
        @click="addTarget(target)"
      >
        <ph-check
          size="12"
          weight="bold"
          class="opacity-0 text-dark-2"
          :class="{
            ' opacity-100': targets.find((ac) => ac.id === target.id),
          }"
        />
      </div>
      <div class="flex justify-between w-full items-center">
        <span class="p4-r flex-1">{{ target.name }}</span>

        <div
          v-if="target?.children"
          @click="expend = !expend"
          class="flex-shrink-0 cursor-pointer"
        >
          <ph-caret-circle-down :size="14" v-if="expend" />
          <ph-caret-circle-up :size="14" v-else />
        </div>
      </div>
    </div>
    <div
      class="flex flex-col gap-2 pl-4 w-full"
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

<style lang="scss" scoped></style>
