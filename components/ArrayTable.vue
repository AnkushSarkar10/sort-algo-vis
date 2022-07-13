<script setup lang='ts'>
import { useArrStore } from "~/store";

const arrStore = useArrStore();
const props = defineProps({
  passColors : {
    type: Function,
    require: true
  }
});

</script>

<template>
  <div class="flex justify-center items-end mt-10">
    <div v-for="(item, index) in arrStore.array" :key="index">
      <ArrayCol :item="item" :index="index" :passColors="props.passColors"></ArrayCol>
    </div>
  </div>
</template>

<style scoped>
</style>