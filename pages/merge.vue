<script setup lang="ts">
import { useArrStore } from "~/store";
const arrStore = useArrStore();
const speedDict = {
  0: 100,
  20: 75,
  40: 54,
  60: 45,
  80: 25,
  100: 15
}

onMounted(() => {
  arrStore.$reset();
  arrStore.genNewArr();
  arrStore.sortSpeed = speedDict[arrStore.sliderDefault];
});

const passColors = (index: number) => {
  if (index === arrStore.animationsIndx.mergeSwap) {
    return "#e2d562";
  } else if (arrStore.animationsIndx.mergeDone.includes(index)) {
    return "#87d039";
  } else {
    return "#ffffff";
  }
}

const mergeSort = () => {
  if (arrStore.sortable) {
    arrStore.stopSort = false;
    arrStore.mergeSort();
    arrStore.sortable = false;
  }
}
</script>

<template>
  <NuxtLayout name="sort" :speedDict="speedDict" :passColors="passColors" :sortFunc="mergeSort"></NuxtLayout>
</template>

<script scoped>
</script>