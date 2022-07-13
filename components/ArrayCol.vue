<script setup lang='ts'>

const props = defineProps({
  item: {
    type: Number,
    required: true
  },
  index: {
    type: Number,
    required: true
  },
  passColors : {
    type: Function,
    require: true
  }
});

</script>

<template>
  <div :style="{ height: props.item.toString() + 'px', 'background-color': props.passColors(props.index) }"
    class="w-1 mx-0.5 bg-white">
  </div>
</template>

<style scoped>
</style>