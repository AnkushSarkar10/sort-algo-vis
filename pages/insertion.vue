<script setup lang="ts">
import { useArrStore } from "~/store";
const arrStore = useArrStore();
const speedDict = {
  0: 70,
  20: 40,
  40: 25,
  60: 15,
  80: 8,
  100: 1
}

onMounted(() => {
  arrStore.$reset();
  arrStore.genNewArr();
  arrStore.sortSpeed = speedDict[arrStore.sliderDefault];
});

const passColors = (index: number) => {
  if (index === arrStore.animationsIndx.insertSwap) {
    return "red";
  } else if (arrStore.animationsIndx.insertDone.includes(index)) {
    return "green";
  } else {
    return "white";
  }
}

const insertonSort = () => {
  if (arrStore.sortable) {
    arrStore.stopSort = false;
    arrStore.insertionSort();
    arrStore.sortable = false;
  }
}

</script>

<template>
  <NuxtLayout name="sort" :speedDict="speedDict" :passColors="passColors" :sortFunc="insertonSort"></NuxtLayout>
</template>

 
<style scoped>
</style>