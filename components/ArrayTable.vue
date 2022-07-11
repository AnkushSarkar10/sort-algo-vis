<script setup lang='ts'>
import { useArrStore } from "~/store";

const arrStore = useArrStore();
const passColors = (index: number) => {
  if (index === arrStore.animationsIndx.swap_1) {
    return "yellow";
  } else if (index === arrStore.animationsIndx.swap_2){
    return "red";
  }else if (arrStore.animationsIndx.done.includes(index)){
    return "green";
  } else {
    return "white";
  }
}

</script>

<template>
  <div class="flex justify-center items-end mt-10">
    <div v-for="(item, index) in arrStore.array" :key="index">
      <ArrayCol :item="item" :col="passColors(index)"></ArrayCol>
    </div>
  </div>
</template>

<script scoped>
</script>