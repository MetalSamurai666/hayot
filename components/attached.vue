<script setup>
    import cardList from "./cards/cardList.vue"

    const list = ref([
        {
            id: 1,
            link: '/',
            title: "Buddy",
            img: "https://images.dog.ceo/breeds/bulldog-english/murphy.jpg",
            slug: "buddy-dog"
        },
        {
            id: 2,
            link: '/',
            title: "Charlie",
            img: "https://images.dog.ceo/breeds/schnauzer-giant/n02097130_5750.jpg",
            slug: "charlie-dog"
        },
        {
            id: 3,
            link: '/',
            title: "Lucy",
            img: "https://images.dog.ceo/breeds/setter-irish/n02100877_602.jpg",
            slug: "lucy-dog"
        },
        {
            id: 4,
            link: '/',
            title: "Cooper",
            img: "https://images.dog.ceo/breeds/schipperke/n02104365_6755.jpg",
            slug: "cooper-dog"
        },
        {
            id: 5,
            link: '/',
            title: "Bailey",
            img: "https://images.dog.ceo/breeds/bluetick/n02088632_2145.jpg",
            slug: "bailey-dog"
        },
        {
            id: 6,
            link: '/',
            title: "Max",
            img: "https://images.dog.ceo/breeds/redbone/n02090379_4324.jpg",
            slug: "max-dog"
        },
        {
            id: 7,
            link: '/',
            title: "Luna",
            img: "https://images.dog.ceo/breeds/hound-blood/n02088466_8156.jpg",
            slug: "luna-dog"
        },
        {
            id: 8,
            link: '/',
            title: "Rocky",
            img: "https://images.dog.ceo/breeds/mastiff-tibetan/n02108551_3814.jpg",
            slug: "rocky-dog"
        },
        {
            id: 9,
            link: '/',
            title: "Molly",
            img: "https://images.dog.ceo/breeds/hound-afghan/n02088094_4143.jpg",
            slug: "molly-dog"
        },
        {
            id: 10,
            link: '/',
            title: "Duke",
            img: "https://images.dog.ceo/breeds/terrier-welsh/lucy.jpg",
            slug: "duke-dog"
        },
        {
            id: 11,
            link: '/',
            title: "Zoe",
            img: "https://images.dog.ceo/breeds/labrador/n02099712_3185.jpg",
            slug: "zoe-dog"
        },
        {
            id: 12,
            link: '/',
            title: "Oliver",
            img: "https://images.dog.ceo/breeds/cotondetulear/100_2397.jpg",
            slug: "oliver-dog"
        }
    ])
</script>

<template>
    <div class="attached">
        <div class="container">
            <div class="attached__box">
                <div class="attached__title" v-html="$t('attached_number')"></div>
                
                <ul class="attached__list">
                    <li class="item" v-for="item of list" :key="item?.id">
                        <card-list
                            :card="item"
                        />
                    </li>
                </ul>

                <div class="attached__reports">
                    <NuxtLink to="/">Отчёты о пристройствах</NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@import '@/assets/styles/components/attached.scss';
</style>