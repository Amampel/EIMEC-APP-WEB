<template>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>

<script setup>
definePageMeta({
    pageTransition: {
        name: 'fade',
        mode: 'out-in'
    }
})
</script>

<style>
.page-enter-active,
.page-leave-active {
    transition: opacity 0.4s ease;
}

.page-enter-from,
.page-leave-to {
    opacity: 0;
}
</style>
