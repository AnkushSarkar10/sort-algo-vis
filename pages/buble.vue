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
  } else if (index === arrStore.animationsIndx.bubleSwap_2){
    return "red";
  }else if ((arrStore.arrLen - 1 - arrStore.animationsIndx.bubleDone) < index){
    return "green";
  } else {
    return "white";
  }
}

</script>

<template>
    <div class="flex flex-col items-center">
        <h1>{{ arrStore.array }}</h1>
        <ArrayTable :passColors="passColors"></ArrayTable>
        <div class="flex gap-10 mt-10">
            <button class="btn btn-outline" @click="arrStore.bubleSort()">Play</button>
            <button class="btn btn-outline" @click="arrStore.pauseSort()">Pause</button>
            <button class="btn btn-outline" @click="arrStore.randomiseArr()">Randomize</button>
        </div>
        <div class="w-screen">
            <SpeedSlider :speedDict="speedDict"></SpeedSlider>
        </div>
    </div>
</template>

<style scoped>
</style>