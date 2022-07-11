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

// const isChangeing = ref(false);

// onMounted(() => {
//   if (arrStore.indexsToCol != undefined) {
//     console.log(arrStore.indexsToCol);
//     if (props.index == arrStore.indexsToCol[0] || props.index == arrStore.indexsToCol[1]) {
//       isChangeing.value = true;
//     }
//   }
// })
</script>

<template>
  <div :style="{ height: props.item.toString() + 'px', 'background-color': props.col }"
    class="w-5 mx-1 bg-white">
  </div>
</template>

<script scoped>
</script>