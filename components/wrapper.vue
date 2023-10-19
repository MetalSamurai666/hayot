<script setup>
    defineProps({
        wrapper: Object 
    })
</script>

<template>
    <div class="wrapper">
        <div class="wrapper__box" :style="`background-image: url(${wrapper?.img})`">
            <div class="wrapper__text">
                <div class="wrapper__subtitle">{{ wrapper?.subtitle }}</div>
                <div class="wrapper__title">{{ wrapper?.title }}</div>
                <div class="wrapper__info">{{ wrapper?.info }}</div>
                <div class="wrapper__btn" v-if="wrapper?.btn">
                    <NuxtLink :to="wrapper?.btn?.url">{{ wrapper?.btn?.title }}</NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@import '@/assets/styles/components/wrapper.scss';
</style>