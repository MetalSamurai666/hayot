<script setup>
    defineProps({
        card: Object
    })
</script>

<template>
    <div class="cardList">
        <NuxtLink :to="card?.link" class="cardList__box" :style="`background-image: url(${card?.img});`">
            <div class="cardList__title">{{ card?.title }}</div>

            <div class="cardList__take">{{ $t('take_dog') }}</div>
        </NuxtLink>
    </div>
</template>

<style lang="scss">
@import '@/assets/styles/components/cards/cardList.scss';
</style>