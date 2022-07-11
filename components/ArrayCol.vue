<script setup lang='ts'>
import { useArrStore } from "~/store";
import { storeToRefs } from 'pinia';

const arrStore = useArrStore();
const props = defineProps({
  item: {
    type: Number,
    required: true
  },
  col: {
    type: String,
    required: true
  }
});
</script>

<template>
  <div :style="{ height: props.item.toString() + 'px', 'background-color': props.col }"
    class="w-1 mx-0.5 bg-white">
  </div>
</template>

<script scoped>
</script>