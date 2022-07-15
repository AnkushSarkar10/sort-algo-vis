<script setup lang="ts">
const btnClass = "btn btn-outline mx-3";
const h2Class = "text-lg text-center";

</script>

<template>
  <div class="flex justify-center items-center">
    <div class="typewriter mt-32">
      <h1 class="text-5xl mb-10">Sorting Algorithm Visualiser</h1>
      <h2 :class="h2Class">A sorting algorithm is used to arrange elements of an array in a specific
        order.</h2>
      <h2 :class="h2Class">Here, we have some of the most well known sorting algorithms.</h2>
      <h2 :class="h2Class">Select the algorithm you would like to visualize !</h2>
      <div class="mt-10 text-center">
        <button :class="btnClass">Bubble Sort</button>
        <button :class="btnClass">Merge Sort</button>
        <button :class="btnClass">Quick Sort</button>
        <button :class="btnClass">Insertion Sort</button>
        <button :class="btnClass">Selection Sort</button>
      </div>
    </div>

  </div>
</template>

<style scoped>

h2 {
  margin-bottom: 15px;
}
.typewriter h1 {
  font-family: monospace;
  white-space: nowrap;
  letter-spacing: .12em;
  animation:
    typing 1.0s steps(28, end),
    blink-caret .5s step-end infinite;
}

@keyframes typing {
  from {
    width: 0;
  }

  to {
    width: 100%;
  }
}

@keyframes blink-caret {

  from,
  to {
    border-right: .15em solid;
    border-color: transparent
  }

  50% {
    border-right: .15em solid;
    border-color: white
  }
}
</style>