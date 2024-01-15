<script setup>
    const wrapper = ref({
        img: '/dogs/poster.png',
        title: 'СМИ о приюте Хаёт',
        info: 'Узбекистан: обращение с бездомными животными требует гуманизации',
        subtitle: '9 августа 2023 ・ anhor.uz'
    })

    const media = ref({
        list: [
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
            {
                id: 5,
                url: '/',
                img: 'media1.jpg',
                title: 'Узбекистан: обращение с бездомными животными требует гуманизации',
                date: '24 июля 2021',
            },
            {
                id: 6,
                url: '/',
                img: 'media2.jpg',
                title: 'Здесь мой «хаёт», или собачье дело Ироды Маткаримовой',
                date: '24 июля 2021',
            },
            {
                id: 7,
                url: '/',
                img: 'media3.jpg',
                title: 'Волонтёры приюта «Хаёт» провели в школах «уроки доброты»',
                date: '24 июля 2021',
            },
            {
                id: 8,
                url: '/',
                img: 'media4.jpg',
                title: 'Чем живет первый приют для животных в узбекистане?',
                date: '24 июля 2021',
            },
        ],
        alt: false,
        filter: [
            {
                title: '2019'
            },
            {
                title: '2020'
            },
            {
                title: '2021'
            },
            {
                title: '2022'
            },
            {
                title: '2023'
            },
        ]
    })
</script>

<template>
        <div class="media">
            <Wrapper
                :wrapper="wrapper"
            />
            <MediaList 
                :media="media"
            />
        </div>
</template>

<style>

</style>