<script setup>
    const list = ref([
        {
            url: '/',
            title: 'Частые вопросы',
            img: '/useful/dog.png'
        },
        {
            url: '/',
            title: 'При отказе от собаки',
            img: '/useful/hand.png'
        },
        {
            url: '/',
            title: 'Как усыновить собаку',
            img: '/useful/collar.png'
        },
        {
            url: '/',
            title: 'Поддержка хозяев',
            img: '/useful/faq.png'
        },
        {
            url: '/',
            title: 'Воспитание собаки',
            img: '/useful/home.png'
        },

    ])
</script>

<template>
    <div class="useful">
        <div class="container">
            <div class="useful__box">
                <ul class="useful__list">
                    <li class="item" v-for="item, index of list" :key="index">
                        <NuxtLink to="/" class="item__link">
                            <div class="item__box">
                                <div class="item__img">
                                    <img :src="item?.img">
                                </div>

                                <div class="item__title">{{ item?.title }}</div>
                            </div>
                        </NuxtLink>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@import '@/assets/styles/components/useful.scss';
</style>