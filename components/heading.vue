<script setup>
    defineProps({
        heading: Object
    })
</script>

<template>
    <div class="heading">
        <div class="container">
            <div class="heading__box">
                <div class="heading__title">{{ heading?.title }}</div>
                <div class="heading__info">{{ heading?.info }}</div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    @import '@/assets/styles/components/heading.scss';
</style>