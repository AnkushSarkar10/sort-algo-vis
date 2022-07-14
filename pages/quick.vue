<script setup lang="ts">
import { useArrStore } from "~/store";
const arrStore = useArrStore();
const speedDict = {
    0: 60,
    20: 50,
    40: 40,
    60: 30,
    80: 22,
    100: 10
}

onMounted(() => {
    arrStore.$reset();
    arrStore.genNewArr();
    arrStore.sortSpeed = speedDict[arrStore.sliderDefault];
});

const passColors = (index: number) => {
    if (index === arrStore.animationsIndx.quickSwap) {
        return "red";
    } else if (arrStore.animationsIndx.quickDone.includes(index)) {
        return "green";
    } else {
        return "white";
    }
}

const quickSort = () => {
    if (arrStore.sortable) {
        arrStore.stopSort = false;
        arrStore.quickSort();
        arrStore.sortable = false;
    }
}
</script>

<template>
    <div class="flex flex-col items-center">
        <h1>{{ arrStore.array }}</h1>
        <ArrayTable :passColors="passColors"></ArrayTable>
        <div class="flex gap-10 mt-10">
            <button class="btn btn-outline" @click="quickSort">Play</button>
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