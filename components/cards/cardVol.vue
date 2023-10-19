<script setup>
    defineProps({
        card: Object
    })
</script>

<template>
    <div class="cardVol">
        <div class="cardVol__box">
            <NuxtLink class="cardVol__img" :to="card?.url">
                <img :src="card?.img" >
            </NuxtLink>

            <div class="cardVol__text">
                <NuxtLink class="cardVol__title" :to="card?.url">
                    {{ card?.title }}
                </NuxtLink>
                <div class="cardVol__info">
                    {{ card?.info }}
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@import '@/assets/styles/components/cards/cardVol.scss';
</style>