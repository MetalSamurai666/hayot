<script setup>
    defineProps({
        card: Object
    })
</script>

<template>
    <div :class="card?.mass == 'https://anhor.uz' ? 'cardMedia anhor' 
    : card?.mass == 'https://podrobno.uz' ? 'cardMedia podrobno' 
    : card?.mass == 'https://afisha.uz' ? 'cardMedia afisha' 
    : card?.mass == 'https://darakchi.uz' ? 'cardMedia darakchi' 
    : 'cardMedia'">
        <div class="cardMedia__box">
            <nuxtLink :to="card?.url" class="cardMedia__img">
                <img :src="`/media/${card?.img}`">
            </nuxtLink>

            <div class="cardMedia__text">
                <div class="cardMedia__date">{{ card?.date }}</div>
                <nuxtLink :to="card?.url" class="cardMedia__title">{{ card?.title }}</nuxtLink>

                <a :href="card?.mass" class="cardMedia__src">
                    <img :src="`/${card?.mass_img}`">
                </a>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@import '@/assets/styles/components/cards/cardMedia.scss';
</style>