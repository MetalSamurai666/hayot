<script setup>
    defineProps({
        card: Object
    })
</script>

<template>
    <div class="cardMedia">
        <div class="cardMedia__box">
            <nuxtLink :to="card?.url" class="cardMedia__img">
                <img :src="`/media/${card?.img}`">
            </nuxtLink>

            <div class="cardMedia__text">
                <div class="cardMedia__date">{{ card?.date }}</div>
                <nuxtLink :to="card?.url" class="cardMedia__title">{{ card?.title }}</nuxtLink>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@import '@/assets/styles/components/cards/cardMedia.scss';
</style>