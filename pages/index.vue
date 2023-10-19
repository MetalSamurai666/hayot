<script setup>
    const welcome = ref({
        alt: false,
        slides: [
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
        ]
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
                img: 'media2.jpg',
                title: 'Чем живет первый приют для животных в узбекистане?',
                date: '24 июля 2021',
            },
            {
                id: 6,
                url: '/',
                img: 'media3.jpg',
                title: 'Чем живет первый приют для животных в узбекистане?',
                date: '24 июля 2021',
            },
            {
                id: 7,
                url: '/',
                img: 'media1.jpg',
                title: 'Чем живет первый приют для животных в узбекистане?',
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
        alt: true
    })
</script>   

<template>
    <NuxtLayout>
        <div class="home body">
            <Welcome 
                :welcome="welcome"
            />
            <Actual />
            <Maintenance />
            <Attached />
            <Volunteer />
            <Video />
            <MediaList 
                :media="media"
            />
            <Support />
            <Sponsors />
            <Quote />
        </div>
    </NuxtLayout>
</template>

<style lang="scss">
</style>
