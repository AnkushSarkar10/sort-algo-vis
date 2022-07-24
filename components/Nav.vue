<script setup>
const navItemsClass = "hover:btn-primary mx-2";
const activeClass = "btn bg-base-200 text-primary font-semibold mt-1";

const route = useRoute();

</script>

<template>
    <div class="navbar bg-base-100">
        <div class="flex-1">
            <NuxtLink class="ml-4 px-4 py-2 text-primary text-xl hover:btn-primary rounded-lg" href="/">Home</NuxtLink>
        </div>
        <div class="flex-none">
            <ul class="menu menu-horizontal p-0 tabs">
                <li><NuxtLink a :class="[route.name == 'buble' ? activeClass : '' ,navItemsClass]" href="/buble">Buble Sort</NuxtLink></li>
                <li><NuxtLink :class="[route.name == 'merge'  ? activeClass : '' ,navItemsClass]" href="/merge">Merge Sort</NuxtLink></li>
                <li><NuxtLink :class="[route.name == 'quick'  ? activeClass : '' ,navItemsClass]" href="/quick">Quick Sort</NuxtLink></li>
                <li><NuxtLink :class="[route.name == 'insertion'  ? activeClass : '' ,navItemsClass]" href="/insertion">Insertion Sort</NuxtLink></li>
                <li><NuxtLink :class="[route.name == 'selection'  ? activeClass : '' ,navItemsClass]" href="/selection">Selection Sort</NuxtLink></li>
            </ul>
        </div>
    </div>
</template>

<style scoped>
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.navbar {
    animation: fadeIn 0.5s linear;
}
</style>