<script setup>
    const list = ref([
        {
            id: 1,
            url: '/',
            img: 'welcome/dog.png',
            title: 'Пристроили Бакса. Пса благополучно встретили в Москве.',
            date: '11 июля'
        },
        {
            id: 2,
            url: '/',
            img: 'welcome/dog2.png',
            title: 'Очередной спасёныш. Собака с Янгибазара. Сбор на лечение.',
            date: '14 июля'
        },
        {
            id: 3,
            url: '/',
            img: 'welcome/dog3.png',
            title: 'Узбекистан: обращение с бездомными животными требует гуманизации',
            date: '24 июля'
        },
    ])
</script>

<template>
    <div class="actual">
        <div class="container">
            <div class="actual__box">
                <ul class="actual__list">
                    <li class="item" v-for="item of list" :key="item?.id">
                        <NuxtLink :to="item?.url" class="item__box">
                            <NuxtLink :to="item?.url" class="item__left">
                                <div class="item__img">
                                    <img :src="`/${item?.img}`">
                                </div>
                            </NuxtLink>
                            <div class="item__right">
                                <div class="item__date">{{ item?.date }}</div>

                                <NuxtLink :to="item?.url" class="item__title">{{ item?.title }}</NuxtLink>
                            </div>
                            <div class="item__arrow">
                                <img src="/logo/arrowRight.svg">
                            </div>
                        </NuxtLink>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@import '@/assets/styles/components/actual.scss';
</style>