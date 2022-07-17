<script setup>
</script>
<template>
    <div>
        <Nav></Nav>
        <slot></slot>
    </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Edu+NSW+ACT+Foundation&family=Noto+Sans&display=swap');

html, body {
    -webkit-user-select: none;
    /* Safari */
    -moz-user-select: none;
    /* Firefox */
    -ms-user-select: none;
    /* IE10+/Edge */
    user-select: none;
    /* Standard */
    /* font-family: 'Open Sans', sans-serif; */
    font-family: 'Noto Sans', sans-serif;
    margin: 0;
    height: 100%;
    overflow: hidden
}
</style>