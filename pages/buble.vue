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
    return "yellow";
  } else if (index === arrStore.animationsIndx.bubleSwap_2) {
    return "red";
  } else if ((arrStore.arrLen - 1 - arrStore.animationsIndx.bubleDone) < index) {
    return "green";
  } else {
    return "white";
  }
}

</script>

<template>
  <div class="flex flex-col items-center">
    <div class="w-screen">
      <SpeedSlider :speedDict="speedDict"></SpeedSlider>
    </div>
    <ArrayTable :passColors="passColors"></ArrayTable>
    <div class="flex gap-10 mt-10">
      <button class="btn btn-outline" @click="arrStore.bubleSort()"><font-awesome-icon icon="fa-solid fa-play" class="mr-2"/>Play</button>
      <button class="btn btn-outline" @click="arrStore.pauseSort()"><font-awesome-icon icon="fa-solid fa-pause" class="mr-2"/>Pause</button>
      <button class="btn btn-outline" @click="arrStore.randomiseArr()"><font-awesome-icon icon="fa-solid fa-shuffle" class="mr-2"/>Randomize</button>
    </div>
  </div>
</template>

<style scoped>
</style>