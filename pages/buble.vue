<script setup lang="ts">
import { useArrStore } from "~/store";
const arrStore = useArrStore();

onMounted(() => {
    arrStore.genNewArr();
    // arrStore.$onAction(
    // ({ name, args, store, after, onError }) => {
    //     console.log(name.toString() === "randomiseArr");
    // })

})

// const timeout = (ms: number) => {
//     return new Promise((resolve) => setTimeout(resolve, ms));
// }

// const bubleSort = (arr: Array<number>) => {
//     arrStore.sortable = false;
//     for (let i = 0; i < arrStore.arrLen; i++) {
//         for (let j = 0; j < arrStore.arrLen - i - 1; j++) {
//             console.log("happenin");
//             if (arr[j] > arr[j + 1]) {
//                 arrStore.animationsIndx.swap_1 = j;
//                 arrStore.animationsIndx.swap_2 = j + 1;
//                 let temp = arr[j];
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = temp;
//                 timeout(arrStore.sortSpeed);
//                 arrStore.animationsIndx.swap_1 = null;
//                 arrStore.animationsIndx.swap_2 = null;
//             }
//         }
//         arrStore.animationsIndx.done.push(arrStore.arrLen - 1 - i);
//     }
//     arrStore.sortable = true;
// }


const genNewArrAndStopSort = () => {
    // arrStore.stopSort = true;
    // arrStore.sortable = true;
    arrStore.randomiseArr();
}

</script>

<template>
    <div class="flex flex-col items-center">
        <h1>{{ arrStore.array }}</h1>
        <ArrayTable></ArrayTable>
        <div class="flex gap-10 mt-10">
            <button class="btn btn-outline" @click="arrStore.bubleSort()">Sort</button>
            <button class="btn btn-outline" @click="arrStore.randomiseArr()">Randomize</button>
        </div>
    </div>
</template>

<script scoped>
</script>