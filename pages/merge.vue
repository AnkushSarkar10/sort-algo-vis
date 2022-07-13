<script setup lang="ts">
import { useArrStore } from "~/store";
const arrStore = useArrStore();
const speedDict = {
    0: 100,
    20: 75,
    40: 50,
    60: 30,
    80: 20,
    100: 10
}

onMounted(() => {
    arrStore.$reset();
    arrStore.genNewArr();
    arrStore.sortSpeed = speedDict[arrStore.sliderDefault];
});

const passColors = (index: number) => {
    if (index === arrStore.animationsIndx.mergeSwap) {
        return "yellow";
    } else if (arrStore.animationsIndx.mergeDone.includes(index)) {
        return "green";
    } else {
        return "white";
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
    <div class="flex flex-col items-center">
        <h1>{{ arrStore.array }}</h1>
        <ArrayTable :passColors="passColors"></ArrayTable>
        <div class="flex gap-10 mt-10">
            <!-- <button class="btn btn-outline" @click="arrStore.mergeSort(arrStore.array,0,arrStore.arrLen-1)">Play</button> -->
            <button class="btn btn-outline" @click="mergeSort">Play</button>
            <button class="btn btn-outline" @click="arrStore.pauseSort()">Pause</button>
            <button class="btn btn-outline" @click="arrStore.randomiseArr()">Randomize</button>
        </div>
        <div class="w-screen">
            <SpeedSlider :speedDict="speedDict"></SpeedSlider>
        </div>
    </div>
</template>
 
<script scoped>
</script>