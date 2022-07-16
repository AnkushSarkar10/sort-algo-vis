<script setup lang="ts">
const btnClass = "btn btn-ghost btn-xs mx-1 sm:btn-sm md:btn-md lg:btn-lg hover:btn-primary hover:mx-3 hover:animate-pulse-fast";
// const h2Class = "text-primary text-lg text-center mb-0.5";

</script>

<template>
  <div class="flex justify-center items-center">
    <div class="typewriter mt-32">

      <h1 class="text-5xl text-primary mb-14 p-2">Sorting Algorithm Visualiser</h1>
      <h2 id="subtitle1" class="text-2xl text-center mb-4">"In computer science, a sorting algorithm is an algorithm that
        puts
        elements of a list into an order"</h2>
      <h2 id="subtitle2" class="text-primary text-xl text-center font-semibold">Select the algorithm you would like to visualize !
      </h2>

      <div id="butdiv" class="mt-16 text-center flex flex-wrap">
        <button :class="btnClass" @click="$router.push('buble')">Bubble Sort</button>
        <button :class="btnClass" @click="$router.push('merge')">Merge Sort</button>
        <button :class="btnClass" @click="$router.push('quick')">Quick Sort</button>
        <button :class="btnClass" @click="$router.push('insertion')">Insertion Sort</button>
        <button :class="btnClass" @click="$router.push('selection')">Selection Sort</button>
      </div>
    </div>

  </div>
</template>

<style scoped>
@keyframes fadein {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@keyframes butt {
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

#subtitle1 {
  font-family: 'Edu NSW ACT Foundation', cursive;
  color: #FAF9F6;
  animation: fadein ease-in-out 1.5s;
}
#subtitle2 {
  animation: fadein ease-in-out 1.5s;
}
#butdiv {
  animation: butt ease-in-out 2s;
}
.typewriter h1 {
  font-family: monospace;
  white-space: nowrap;
  overflow: hidden;
  letter-spacing: .12em;
  animation:
    typing 2.0s steps(28, end),
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
    border-color: #dca54c;
  }
}
</style>