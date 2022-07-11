<script setup lang='ts'>
import { useArrStore } from "~/store";

const arrStore = useArrStore();
// const props = defineProps({
//   array: {
//     type: Array,
//     required: true
//   }
// });

// const custCol = reactive({
//   "background-color": "white"
// });
// watch(props.array, (currentValue, oldValue) => {
//   custCol["background-color"] = "red";
// })

const checkIfNeedAnimation = (index: number) => {
  if(arrStore.animationsIndx[0] === index || arrStore.animationsIndx[1] === index) {
    console.log("ok");
    return true;
  } return false;
}

</script>

<template>
  <div class="flex justify-center items-end mt-10">
    <div v-for="(item, index) in arrStore.array" :key="index">
      <ArrayCol v-if="checkIfNeedAnimation(index)" :item="item" :col="'red'"></ArrayCol>
      <ArrayCol v-else="" :item="item" :col="'white'"></ArrayCol>
    </div>
  </div>
</template>

<script scoped>
</script>