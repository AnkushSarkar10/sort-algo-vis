<script setup lang="ts">
import { useArrStore } from "~/store";
const arrStore = useArrStore();
const speedDict = {
    0: 70,
    20: 60,
    40: 50,
    60: 40,
    80: 35,
    100: 15
}

onMounted(() => {
    arrStore.$reset();
    arrStore.genNewArr();
    arrStore.sortSpeed = speedDict[arrStore.sliderDefault];
});

const passColors = (index: number) => {
  if (index === arrStore.animationsIndx.selectionSwap_1) {
    return "#66c6ff";
  } else if (index === arrStore.animationsIndx.selectionSwap_2){
    return "#ff6f6f";
  // }else if (arrStore.animationsIndx.selectionDone != null && arrStore.animationsIndx.selectionDone >= index){
   }else if (arrStore.animationsIndx.selectionDone.includes(index)){
    return "#87d039";
  } else {
    return "#ffffff";
  }
}

const selectionSort = () => {
    if (arrStore.sortable) {
        arrStore.stopSort = false;
        arrStore.selectionSort();
        arrStore.sortable = false;
    }
}
</script>

<template>
<NuxtLayout name="sort" :speedDict="speedDict" :passColors="passColors" :sortFunc="selectionSort"></NuxtLayout>
</template>
 
<style scoped>
</style>