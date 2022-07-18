<script setup lang="ts">
import { useArrStore } from "~/store";
const arrStore = useArrStore();
const props = defineProps({
    speedDict: {
        type: Object
    },
    passColors: {
        type: Function
    },
    sortFunc: {
        type: Function
    }
})

onMounted(() => {
    console.log("mounted");
});


const algoName = ref("")
const algoLink = ref("") 
switch (props.sortFunc.name) {
    case "bubleSort":
        algoName.value = "Buble Sort";
        algoLink.value = "https://www.geeksforgeeks.org/bubble-sort/";
        break;
    case "mergeSort":
        algoName.value = "Merge Sort";
        algoLink.value = "https://www.geeksforgeeks.org/merge-sort/";
        break;
    case "insertonSort":
        algoName.value = "Insertion Sort";
        algoLink.value = "https://www.geeksforgeeks.org/insertion-sort/";
        break;
    case "quickSort":
        algoName.value = "Quick Sort";
        algoLink.value = "https://www.geeksforgeeks.org/quick-sort/";
        break;
    case "selectionSort":
        algoName.value = "Selection Sort";
        algoLink.value = "https://www.geeksforgeeks.org/selection-sort/";
        break;
}
</script>

<template>
    <div class="flex flex-col items-center">
        <div class="w-screen">
            <SpeedSlider id="slider" :speedDict="props.speedDict"></SpeedSlider>
        </div>
        <ArrayTable id="arr" :passColors="props.passColors"></ArrayTable>
        <div id="butdiv" class="flex flex-col justify-center items-center">
            <div class="flex gap-10 mt-20 flex-wrap justify-center">
                <button class="btn btn-outline hover:btn-secondary" @click="props.sortFunc()">
                    <font-awesome-icon icon="fa-solid fa-play" class="mr-2" />Play
                </button>
                <button class="btn btn-outline hover:btn-secondary" @click="arrStore.pauseSort()">
                    <font-awesome-icon icon="fa-solid fa-pause" class="mr-2" />Pause
                </button>
                <button class="btn btn-outline hover:btn-secondary" @click="arrStore.randomiseArr()">
                    <font-awesome-icon icon="fa-solid fa-shuffle" class="mr-2" />Randomize
                </button>
            </div>
            <a class="mt-12 text-sm underline hover:cursor-pointer hover:text-primary" :href="algoLink" target="_blank">Learn More</a>
        </div>
    </div>
</template>

<style>
@keyframes sortFadein {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}

@keyframes sortButt {
    0% {
        position: relative;
        opacity: 0;
        top: 150px;
    }

    75% {
        opacity: 1;
    }

    100% {
        position: relative;
        top: 0px;
    }
}

@keyframes sortSlider {
    0% {
        position: relative;
        opacity: 0;
        bottom: 50px;
    }

    100% {
        position: relative;
        opacity: 1;
        bottom: 0px;
    }
}


#butdiv {
    animation: sortButt ease-in-out 1.5s;
}

#arr {
    animation: sortFadein ease-in 1s;
}

#slider {
    animation: sortSlider ease-in 1s;
}
</style>