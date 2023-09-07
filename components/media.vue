<script setup>
    const list = ref([
        {
            id: 1,
            url: '/',
            img: 'media1.jpg',
            title: 'Узбекистан: обращение с бездомными животными требует гуманизации',
            date: '24 июля 2021',
        },
        {
            id: 2,
            url: '/',
            img: 'media2.jpg',
            title: 'Здесь мой «хаёт», или собачье дело Ироды Маткаримовой',
            date: '24 июля 2021',
        },
        {
            id: 3,
            url: '/',
            img: 'media3.jpg',
            title: 'Волонтёры приюта «Хаёт» провели в школах «уроки доброты»',
            date: '24 июля 2021',
        },
        {
            id: 4,
            url: '/',
            img: 'media4.jpg',
            title: 'Чем живет первый приют для животных в узбекистане?',
            date: '24 июля 2021',
        },
    ])
</script>

<template>
    <div class="media">
        <div class="container-m">
            <div class="media__box">
                <ul class="media__list">
                    <li class="item" v-for="item of list" :key="item?.id">
                        <div class="item__box">
                            <nuxtLink :to="item?.url" class="item__img">
                                <img :src="`/media/${item?.img}`">
                            </nuxtLink>

                            <div class="item__text">
                                <div class="item__date">{{ item?.date }}</div>
                                <nuxtLink :to="item?.url" class="item__title">{{ item?.title }}</nuxtLink>
                            </div>
                        </div>
                    </li>
                </ul>

                <div class="media__all">
                    <NuxtLink to="/">СМИ о Хаёте <span> 75</span></NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@import '@/assets/styles/components/media.scss';
</style>