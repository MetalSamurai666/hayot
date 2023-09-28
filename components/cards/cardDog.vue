<script setup>
    defineProps({
        card: Object
    })
</script>

<template>
    <div class="cardDog">
        <div class="cardDog__box">
            <div class="cardDog__top">
                <NuxtLink :to="card?.link" class="cardDog__img">
                    <img :src="`${card?.img}`">
                </NuxtLink>
            </div>
            <div class="cardDog__bot">
                <div class="cardDog__head">
                    <NuxtLink :to="card?.slug" 
                        class="cardDog__title">
                            {{ card?.title }}

                            <span><img src="/logo/paw.svg"></span>
                        </NuxtLink>
                    <div :class="card?.gender ? 'cardDog__gender male' : 'cardDog__gender female'"></div>
                </div>
                
                <div class="cardDog__breed">{{ card?.breed }}</div>

                <ul class="cardDog__list">
                    <li class="item">
                        <div class="item__title">
                            {{ card?.gender ? `Мальчик` : `Девочка` }}
                        </div>
                    </li>
                    <li class="item">
                        <div class="item__title">
                            {{ card?.age }} {{ card?.age > '4' ? `лет` : card?.age == '1' ? `год` : `года`}}
                        </div>
                    </li>
                    <li class="item">
                        <div class="item__title">
                            {{ card?.size }}
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@import '@/assets/styles/components/cards/cardDog.scss';
</style>