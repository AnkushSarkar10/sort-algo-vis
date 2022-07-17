<script setup>
const navItemsClass = "hover:btn-primary mx-2";
const activeClass = "btn bg-base-200 text-primary font-semibold";
const route = useRoute();
console.log(route.name);
// switch (route.name) {
//   case "buble"
// }

</script>

<template>
    <div class="navbar bg-base-100">
        <div class="flex-1">
            <a class="ml-4 px-4 py-2 text-primary text-xl hover:btn-primary rounded-lg" href="/">Home</a>
        </div>
        <div class="flex-none">
            <ul class="menu menu-horizontal p-0">
                <li><a :class="[route.name == 'buble' ? activeClass : '' ,navItemsClass]" href="/buble">Buble Sort</a></li>
                <li><a :class="[route.name == 'merge'  ? activeClass : '' ,navItemsClass]" href="/merge">Merge Sort</a></li>
                <li><a :class="[route.name == 'quick'  ? activeClass : '' ,navItemsClass]" href="/quick">Quick Sort</a></li>
                <li><a :class="[route.name == 'insertion'  ? activeClass : '' ,navItemsClass]" href="/insertion">Insertion Sort</a></li>
                <li><a :class="[route.name == 'selection'  ? activeClass : '' ,navItemsClass]" href="/selection">Selection Sort</a></li>
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