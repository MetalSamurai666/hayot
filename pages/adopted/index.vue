<script setup>
    const bread = ref({
        title: 'Пристроенные собаки'
    })

    const wrapper = ref({
        img: '/dogs/poster.png',
        title: 'Пристроенные собаки',
        info: 'С 2018 года пристроено более 2500 собак'
    })

    const filter = ref({
        list : [
            {
                title: '2018',
            },
            {
                title: '2019',
            },
            {
                title: '2020',
            },
            {
                title: '2021',
            },
            {
                title: '2022',
            },
            {
                title: '2023',
            },
        ]
    })

    const list = ref([
        {
            url: 'slug1',
            img: '/dog1.jpg',
            date: 'Май 2023',
            count: '24',
            text: 'В мае 24 хаётовца отправились в свою новую жизнь. В прошлом месяце было 30 хвостиков. В мае 2022 года для сравнения было 74.',
            list: [
                {
                    img: '/dog1.jpg'
                },
                {
                    img: '/dog2.jpg'
                },
                {
                    img: '/dog3.jpg'
                },
                {
                    img: '/dog1.jpg'
                },
                {
                    img: '/dog2.jpg'
                },
                {
                    img: '/dog3.jpg'
                },
                {
                    img: '/dog1.jpg'
                },
                {
                    img: '/dog2.jpg'
                },
                {
                    img: '/dog3.jpg'
                },
                {
                    img: '/dog1.jpg'
                },
                {
                    img: '/dog2.jpg'
                },
                {
                    img: '/dog3.jpg'
                },
                {
                    img: '/dog1.jpg'
                },
                {
                    img: '/dog2.jpg'
                },
                {
                    img: '/dog3.jpg'
                },
                {
                    img: '/dog1.jpg'
                },
                {
                    img: '/dog2.jpg'
                },
                {
                    img: '/dog3.jpg'
                },
            ]
        },
        {
            url: 'slug1',
            img: '/dog1.jpg',
            date: 'Май 2023',
            count: '24',
            text: 'В мае 24 хаётовца отправились в свою новую жизнь. В прошлом месяце было 30 хвостиков. В мае 2022 года для сравнения было 74.',
            list: [
                {
                    img: '/dog1.jpg'
                },
                {
                    img: '/dog2.jpg'
                },
                {
                    img: '/dog3.jpg'
                },
                {
                    img: '/dog1.jpg'
                },
                {
                    img: '/dog2.jpg'
                },
                {
                    img: '/dog3.jpg'
                },
                {
                    img: '/dog1.jpg'
                },
                {
                    img: '/dog2.jpg'
                },
                {
                    img: '/dog3.jpg'
                },
                {
                    img: '/dog1.jpg'
                },
                {
                    img: '/dog2.jpg'
                },
                {
                    img: '/dog3.jpg'
                },
                {
                    img: '/dog1.jpg'
                },
                {
                    img: '/dog2.jpg'
                },
                {
                    img: '/dog3.jpg'
                },
                {
                    img: '/dog1.jpg'
                },
                {
                    img: '/dog2.jpg'
                },
                {
                    img: '/dog3.jpg'
                },
            ]
        },
        {
            url: 'slug1',
            img: '/dog1.jpg',
            date: 'Май 2023',
            count: '24',
            text: 'В мае 24 хаётовца отправились в свою новую жизнь. В прошлом месяце было 30 хвостиков. В мае 2022 года для сравнения было 74.',
            list: [
                {
                    img: '/dog1.jpg'
                },
                {
                    img: '/dog2.jpg'
                },
                {
                    img: '/dog3.jpg'
                },
                {
                    img: '/dog1.jpg'
                },
                {
                    img: '/dog2.jpg'
                },
                {
                    img: '/dog3.jpg'
                },
                {
                    img: '/dog1.jpg'
                },
                {
                    img: '/dog2.jpg'
                },
                {
                    img: '/dog3.jpg'
                },
                {
                    img: '/dog1.jpg'
                },
                {
                    img: '/dog2.jpg'
                },
                {
                    img: '/dog3.jpg'
                },
                {
                    img: '/dog1.jpg'
                },
                {
                    img: '/dog2.jpg'
                },
                {
                    img: '/dog3.jpg'
                },
                {
                    img: '/dog1.jpg'
                },
                {
                    img: '/dog2.jpg'
                },
                {
                    img: '/dog3.jpg'
                },
            ]
        },
    ])
</script>

<template>
        <div class="adopted">
            <Breadcrumbs
                :bread="bread"
            />
            <Wrapper 
                :wrapper="wrapper"
            />
            <Filter 
                :filter="filter"
            />
            <AdoptedList 
                :list="list"
            />
        </div>
</template>

<style lang="scss">
.adopted{
    background-color: #F2F2F2;
    .wrapper{
        &__box{
            height: auto !important;
            &::after{
                display: none !important;
            }
        }
        &__img{
            display: none !important;
        }
        &__text{
            color: #000 !important;
        }
    }

    @media (max-width: 600px) {
        .breadcrumbs{
            display: none;
        }
        .wrapper{
            &__box{
                height: 400px !important;
                &::after{
                    display: block !important;
                }
            }
            &__img{
                display: flex !important;
            }
            &__text{
                color: #fff !important;
            }
        }
    }
}
</style>