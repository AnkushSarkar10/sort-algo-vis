<script setup lang="ts">
import { useArrStore } from "~/store";
const arrStore = useArrStore();
const speedDict = {
  0: 60,
  20: 30,
  40: 20,
  60: 10,
  80: 5,
  100: 1
}

onMounted(() => {
  arrStore.$reset();
  arrStore.genNewArr();
  arrStore.sortSpeed = speedDict[arrStore.sliderDefault];
});


const passColors = (index: number) => {
  if (index === arrStore.animationsIndx.bubleSwap_1) {
    return "#66c6ff";
  } else if (index === arrStore.animationsIndx.bubleSwap_2) {
    return "#ff6f6f";
  } else if ((arrStore.arrLen - 1 - arrStore.animationsIndx.bubleDone) < index) {
    return "#87d039";
  } else {
    return "#ffffff";
  }
}

const bubleSort = () => {
    if (arrStore.sortable) {
        arrStore.stopSort = false;
        arrStore.bubleSort();
        arrStore.sortable = false;
    }
}

</script>

<template>
  <NuxtLayout name="sort" :speedDict="speedDict" :passColors="passColors" :sortFunc="bubleSort"></NuxtLayout>
</template>

<style>
</style>