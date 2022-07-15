<script setup>

</script>

<template>
    <div>
        <Nav></Nav>
        <slot></slot>
    </div>  
</template>

<style>
html {
    -webkit-user-select: none; /* Safari */        
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* IE10+/Edge */
    user-select: none; /* Standard */
}
</style>