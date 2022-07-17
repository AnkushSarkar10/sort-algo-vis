<script setup lang='ts'>
const props = defineProps({
    algoName: {
        type: String,
        required: true
    }
})
</script>

<template>
    <div class="modall">
        <input type="checkbox" id="my-modal-4" class="modal-toggle" />
        <label for="my-modal-4" class="modal cursor-pointer">
            <label class="modal-box relative bg-base-200" for="">
                <h3 class="text-lg font-bold">{{ props.algoName }}</h3>
                <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for
                    free!
                </p>
            </label>
        </label>
    </div>
</template>

<style scoped>
.modall {
    z-index: 99999;
}
</style>