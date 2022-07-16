<script setup>
const navItemsClass = "hover:btn-primary mx-2";
</script>

<template>
    <div class="navbar bg-base-100">
        <div class="flex-1">
            <a class="ml-4 px-4 py-2 text-primary text-xl hover:btn-primary rounded-lg" href="/">Home</a>
        </div>
        <div class="flex-none">
            <ul class="menu menu-horizontal p-0">
                <li><a :class="navItemsClass" href="/buble">Buble Sort</a></li>
                <li><a :class="navItemsClass" href="/merge">Merge Sort</a></li>
                <li><a :class="navItemsClass" href="/quick">Quick Sort</a></li>
                <li><a :class="navItemsClass" href="/insertion">Insertion Sort</a></li>
                <li><a :class="navItemsClass" href="/selection">Selection Sort</a></li>
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