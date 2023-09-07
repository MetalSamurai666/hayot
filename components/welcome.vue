<script setup>
    import { Splide, SplideSlide } from '@splidejs/vue-splide';

    const slides = ref([
        {
            id: 1,
            url: '/slide1',
            img: 'welcome/slide1.jpg',
            title: 'Приют для собак «Хаёт»',
            info: 'Дарим шанс на жизнь! Спасаем, лечим, содержим, пристраиваем животных, наш принцип No Kill'
        },
        {
            id: 2,
            url: '/slide2',
            img: 'welcome/slide1.jpg',
            title: 'Приют для собак «Хаёт»',
            info: 'Дарим шанс на жизнь! Спасаем, лечим, содержим, пристраиваем животных, наш принцип No Kill'
        },
    ])
    
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
    <div class="welcome">
        <div class="welcome__top">
            <div class="welcome__slider">
                <Splide 
                    class="splide slideWrap"
                    :options="{
                        cover: true,
                        autoplay: true,
                        interval: 3000,
                        height: 'calc(100vh - 70px)',
                        classes: {
                            arrows: 'splide__arrows slideWrap__arrows',
                            arrow : 'splide__arrow slideWrap__arrow',
                            prev  : 'splide__arrow--prev slideWrap__prev',
                            next  : 'splide__arrow--next slideWrap__next',
                            pagination: 'splide__pagination slideWrap__pagination',
                            page      : 'splide__pagination__page slideWrap__page',
                        }
                    }" 
                >
                    <SplideSlide class="splide__slide slideWrap__slide"
                        v-for="item of slides" :key="item?.id"
                    >
                        <img :src="`/${item?.img}`" class="slideWrap__img">

                        <div class="slideWrap__box welcome__container">
                            <div class="slideWrap__title">{{ item?.title }}</div>

                            <div class="slideWrap__info">{{ item?.info }}</div>
                        </div>
                    </SplideSlide>
                </Splide>
            </div>
        </div>

        <div class="welcome__bot">
            <div class="welcome__container">
                <ul class="welcome__list">
                    <li class="item" v-for="item of list" :key="item?.id">
                        <div class="item__box">
                            <NuxtLink :to="item?.url" class="item__left">
                                <div class="item__img">
                                    <img :src="`/${item?.img}`">
                                </div>
                            </NuxtLink>
                            <div class="item__right">
                                <div class="item__date">{{ item?.date }}</div>

                                <NuxtLink :to="item?.url" class="item__title">{{ item?.title }}</NuxtLink>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@import '@/assets/styles/components/welcome.scss';
</style>