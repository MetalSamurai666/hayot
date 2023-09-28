<script setup>
    import cardDog from './cards/cardDog.vue';

    defineProps({
        list: Object
    })

    const items = [
        {
            id: 1,
            link: '/dogs/buddy',
            title: "Buddy",
            img: "https://images.dog.ceo/breeds/bulldog-english/murphy.jpg",
            breed: 'Без породы',
            gender: true,
            age: '8',
            size: 'Крупная',
            slug: "buddy-dog"
        },
        {
            id: 2,
            link: '/',
            title: "Charlie",
            img: "https://images.dog.ceo/breeds/schnauzer-giant/n02097130_5750.jpg",
            breed: 'Без породы',
            gender: true,
            age: '8',
            size: 'Средняя',
            slug: "charlie-dog"
        },
        {
            id: 3,
            link: '/',
            title: "Lucy",
            img: "https://images.dog.ceo/breeds/setter-irish/n02100877_602.jpg",
            breed: 'Без породы',
            gender: false,
            age: '8',
            size: 'Маленькая',
            slug: "lucy-dog"
        },
        {
            id: 4,
            link: '/',
            title: "Cooper",
            img: "https://images.dog.ceo/breeds/schipperke/n02104365_6755.jpg",
            breed: 'Без породы',
            gender: true,
            age: '8',
            size: 'Крупная',
            slug: "cooper-dog"
        },
        {
            id: 5,
            link: '/',
            title: "Bailey",
            img: "https://images.dog.ceo/breeds/bluetick/n02088632_2145.jpg",
            breed: 'Без породы',
            gender: true,
            age: '8',
            size: 'Маленькая',
            slug: "bailey-dog"
        },
        {
            id: 6,
            link: '/',
            title: "Max",
            img: "https://images.dog.ceo/breeds/redbone/n02090379_4324.jpg",
            breed: 'Без породы',
            gender: true,
            age: '8',
            size: 'Крупная',
            slug: "max-dog"
        },
        {
            id: 7,
            link: '/',
            title: "Luna",
            img: "https://images.dog.ceo/breeds/hound-blood/n02088466_8156.jpg",
            breed: 'Без породы',
            gender: false,
            age: '8',
            size: 'Крупная',
            slug: "luna-dog"
        },
        {
            id: 8,
            link: '/',
            title: "Rocky",
            img: "https://images.dog.ceo/breeds/mastiff-tibetan/n02108551_3814.jpg",
            breed: 'Без породы',
            gender: true,
            age: '8',
            size: 'Крупная',
            slug: "rocky-dog"
        },
        {
            id: 9,
            link: '/',
            title: "Molly",
            img: "https://images.dog.ceo/breeds/hound-afghan/n02088094_4143.jpg",
            breed: 'Без породы',
            gender: false,
            age: '4',
            size: 'Крупная',
            slug: "molly-dog"
        },
        {
            id: 10,
            link: '/',
            title: "Duke",
            img: "https://images.dog.ceo/breeds/terrier-welsh/lucy.jpg",
            breed: 'Без породы',
            gender: true,
            age: '8',
            size: 'Крупная',
            slug: "duke-dog"
        },
        {
            id: 11,
            link: '/',
            title: "Zoe",
            img: "https://images.dog.ceo/breeds/labrador/n02099712_3185.jpg",
            breed: 'Без породы',
            gender: false,
            age: '8',
            size: 'Крупная',
            slug: "zoe-dog"
        },
        {
            id: 12,
            link: '/',
            title: "Oliver",
            img: "https://images.dog.ceo/breeds/cotondetulear/100_2397.jpg",
            breed: 'Без породы',
            gender: true,
            age: '8',
            size: 'Крупная',
            slug: "oliver-dog",
        }
    ];

    const numbers = [350, 375, 400, 425];

    function getRandomNumber() {
        const randomIndex = Math.floor(Math.random() * numbers.length);
        
        const randomNumber = numbers[randomIndex];
        
        return randomNumber;
    }
</script>

<template>
    <div class="dogsList">
        <div class="container">
            <div class="dogsList__box">
                <div class="dogsList__head">
                    <div class="dogsList__title">{{ list?.title }}</div>

                    <ul class="dogsList__btns">
                        <li class="item filter">
                            <button>
                                <div class="item__img">
                                    <img src="/logo/filter.svg">
                                </div>
                                <span class="item__title">Фильтры</span>
                            </button>
                        </li>
                        <li class="item date">
                            <button>
                                <div class="item__img">
                                    <img src="/logo/calendar.svg">
                                </div>
                                <span class="item__title">По дате</span>
                            </button>
                        </li>
                    </ul>
                </div>

                <div class="dogsList__masonry">
                    <masonry-wall :items="items" :ssr-columns="1" :column-width="250" :gap="15">
                        <template #default="{ item }" >
                            <div :style="{ height: `${getRandomNumber()}px` }" class="dogsList__item">
                                <card-dog
                                    :card="item"
                                />
                            </div>
                        </template>
                    </masonry-wall>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@import '@/assets/styles/components/dogsList.scss';
</style>