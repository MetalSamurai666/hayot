<script setup>
    

    defineProps({
        card: Object
    })
</script>

<template>
    <div class="cardHelp">
        <div class="cardHelp__box">
            <NuxtLink :to="`/helpful/${card?.slug}`" class="cardHelp__img">
                <img :src="card?.img">
            </NuxtLink>

            <div class="cardHelp__text">
                <NuxtLink :to="card?.slug" class="cardHelp__title">{{ card?.title }}</NuxtLink>
                <div class="cardHelp__date">{{ card?.date }}</div>
                <div class="cardHelp__info">{{ card?.info }}</div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    @import '@/assets/styles/components/cards/cardHelp.scss';
</style>