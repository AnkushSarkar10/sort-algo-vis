<script setup lang="ts">
import { useArrStore } from "~/store";
const arrStore = useArrStore();
const speedDict = {
    0: 100,
    20: 75,
    40: 5,
    60: 35,
    80: 25,
    100: 15
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
    <div class="flex flex-col items-center">
        <h1>{{ arrStore.array }}</h1>
        <ArrayTable :passColors="passColors"></ArrayTable>
        <div class="flex gap-10 mt-10">
            <button class="btn btn-outline" @click="insertonSort">Play</button>
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