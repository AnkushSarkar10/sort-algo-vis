<script setup lang='ts'>
import { useArrStore } from "~/store";
const arrStore = useArrStore();

const props = defineProps({
    speedDict: {
        type: Object,
        required: true
    }
});

const sliderVal = ref(arrStore.sliderDefault);

watch(sliderVal, (currentValue) => {
    arrStore.sortSpeed = props.speedDict[currentValue];
});

</script>

<template>
    <div class="mt-14 mx-10 md:mx-32 lg:mx-52 xl:mx-96">
        <div class="flex justify-between my-4 text-xl font-medium text-primary">
            <h1 class="ml-2">Speed</h1> <h1 class="text-lg font-semibold">{{ sliderVal }}</h1>
        </div>
        <input type="range" min="0" max="100" v-model="sliderVal" class="range range-xs mb-8" step="20" />
    </div>
</template>

<style scoped>

</style>