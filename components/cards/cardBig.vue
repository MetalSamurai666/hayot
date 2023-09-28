<script setup>
    const router = useRouter()

    defineProps({
        card: Object
    })
</script>

<template>
    <div class="cardBig">
        <div class="cardBig__box">
            <div class="cardBig__left">
                <div class="cardBig__img">
                    <img :src="`${card?.img}`">
                </div>
            </div>

            <div class="cardBig__right">
                <div class="cardBig__date">{{ card?.date }}</div>

                <div class="cardBig__count">{{ card?.count }} {{ card?.count?.slice(-1) > 4 ? `собак` : card?.count == 1 ? `собака` : `собаки`}}</div>

                <div class="cardBig__text">{{ card?.text }}</div>

                <ul class="cardBig__list">
                    <li class="item" v-for="item, index of card?.list" :key="index">
                        <div class="item__box">
                            <div class="item__img">
                                <img :src="item?.img">
                            </div>
                        </div>
                    </li>
                </ul>

                <div class="cardBig__more">
                    <NuxtLink :to="`${router.currentRoute.value.fullPath}/${card?.url}`">
                        Перейти
                    </NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@import '@/assets/styles/components/cards/cardBig.scss';
</style>