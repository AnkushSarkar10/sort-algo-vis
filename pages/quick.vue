<script setup lang="ts">
import { useArrStore } from "~/store";
const arrStore = useArrStore();
const speedDict = {
    0: 70,
    20: 60,
    40: 50,
    60: 40,
    80: 30, 
    100: 15
}

onMounted(() => {
    arrStore.$reset();
    arrStore.genNewArr();
    arrStore.sortSpeed = speedDict[arrStore.sliderDefault];
});

const passColors = (index: number) => {
    if (index === arrStore.animationsIndx.quickSwap) {
        return "#ff6f6f";
    } else if (arrStore.animationsIndx.quickDone.includes(index)) {
        return "#87d039";
    } else {
        return "#ffffff";
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
<NuxtLayout name="sort" :speedDict="speedDict" :passColors="passColors" :sortFunc="quickSort"></NuxtLayout>
</template>
 
<style scoped>
</style>