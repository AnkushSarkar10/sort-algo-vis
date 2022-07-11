<script setup lang="ts">
import { useArrStore } from "~/store";
const arrStore = useArrStore();

onMounted(() => {
    arrStore.randomiseArr();
})

const doBubleSort = () => {
    if (arrStore.sortable) arrStore.bubleSort(arrStore.array);
}
</script>

<template>
    <div class="flex flex-col items-center">
        <h1>{{ arrStore.array }}</h1>
        <ArrayTable></ArrayTable>
        <div class="flex gap-10 mt-10">
            <button class="btn btn-outline" @click="doBubleSort">Sort</button>
            <button class="btn btn-outline" @click="arrStore.randomiseArr()">Randomize</button>
        </div>
    </div>
</template>

<script scoped>
</script>