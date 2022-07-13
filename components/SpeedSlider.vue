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
    <div class="mt-10 mx-10 md:mx-32 lg:mx-52 xl:mx-96">
        <h1 class="my-5 text-xl">Speed</h1>
        <input type="range" min="0" max="100" v-model="sliderVal" class="range" step="20" />
    </div>
</template>