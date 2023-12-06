<script setup lang="ts">
import { PhCaretDown } from "@phosphor-icons/vue";
export interface Props {
  id?: string;
  title: string;
  icon?: string;
}
const props = withDefaults(defineProps<Props>(), {});

const pIcon = defineAsyncComponent(() =>
  import("@phosphor-icons/vue").then((module) => module[props.icon])
);
const expand = ref(false);
onMounted(() => {
  expand.value = true;
});
function enter(element) {
  const width = getComputedStyle(element).width;

  element.style.width = width;
  element.style.position = "absolute";
  element.style.visibility = "hidden";

  element.style.height = "auto";

  const height = getComputedStyle(element).height;

  element.style.width = null;
  element.style.position = null;
  element.style.visibility = null;
  element.style.height = 0;

  getComputedStyle(element).height;

  requestAnimationFrame(() => {
    element.style.height = height;
    element.style.paddingTop = "24px";
  });
}
function afterEnter(element) {
  element.style.height = "auto";
}
function leave(element) {
  const height = getComputedStyle(element).height;

  element.style.height = height;

  getComputedStyle(element).height;

  requestAnimationFrame(() => {
    element.style.height = 0;
    element.style.paddingTop = "0";
  });
}
</script>

<template>
  <div
    class="relative border rounded-xs border-light-1 py-4 px-3 shadow-01 flex flex-col w-full"
    :id="id"
  >
    <div
      class="flex items-center justify-between bg-light-5 z-[2]"
      :class="{ ' cursor-pointer': !expand }"
      @click="expand = !expand"
    >
      <div class="p2-b text-dark-2 bg-light-5 flex gap-1 items-center">
        <component :is="pIcon" weight="bold" /> {{ title }}
      </div>
      <PhCaretDown
        weight="bold"
        class="transition-all hover:drop-shadow-md cursor-pointer hover:text-dark-3"
        :class="{ '-rotate-90': !expand }"
      />
    </div>
    <Transition
      name="expand"
      @enter="enter"
      @after-enter="afterEnter"
      @leave="leave"
    >
      <slot v-if="expand" />
    </Transition>
  </div>
</template>

<style lang="scss">
.expand-enter-active,
.expand-leave-active {
  transition:
    height 0.25s ease-in-out,
    padding 0.25s ease-in-out;
  overflow: hidden;
}

.expand-enter,
.expand-leave-to {
  height: 0;
  padding-top: 0;
  padding-bottom: 0;
}

.expand-enter-to,
.expand-leave {
  padding-top: 24px;
  padding-bottom: 24px;
}
</style>
