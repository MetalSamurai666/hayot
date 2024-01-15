<script setup>
    const welcome = ref({
        alt: true,
        slides: [
            {
                id: 1,
                url: '/slide1',
                img: 'welcome/single.png',
                title: 'Бартелиан',
                info: 'Возраст 3 года, кастрирован, суперспокойный, бывшедомашний в приюте с мая 2023'
            },
            {
                id: 2,
                url: '/slide2',
                img: 'welcome/single.png',
                title: 'Бартелиан',
                info: 'Возраст 3 года, кастрирован, суперспокойный, бывшедомашний в приюте с мая 2023'
            },
        ]
    })

    const info = ref({
        name: 'Бартелиан',
        breed: 'Дворянин',
        id: 156787,
        age: 5,
        sex: 'Мальчик',
        location: 'На передержке в Чирчике',
        live: 'С собаками, с кошками, c детьми',
        size: 'Средний',
        text: 'От внимательного Бартелиана не ускользнет даже малейшая деталь. Парнишка предпочитает бдить пристально и дотошно, чтобы не пропустить ничего интересного. Кто куда пошел, с кем и чем занят – наблюдательный Бартик, как его называет, основательница приюта Ирода Маткаримова запросто ответит на все эти вопросы и с удовольствием составит компанию. Однако в омут с головой пёсик не кидается: сначала оценит обстановку, а уж потом ворвётся в безудержное веселье :)',
        gallery: [
            {
                url: '/dog1.jpg'
            },
            {
                url: '/dog2.jpg'
            },
            {
                url: '/dog3.jpg'
            },
            {
                url: '/dog2.jpg'
            },
            {
                url: '/dog1.jpg'
            },
            {
                url: '/dog3.jpg'
            },
            {
                url: '/dog3.jpg'
            },
            {
                url: '/dog1.jpg'
            },
            {
                url: '/dog2.jpg'
            },
        ],
        curator: {
            name: 'Наталья Сорокина',
            img: '/curator.jpg',
            url: '/'
        }
    })
</script>

<template>
        <div class="dogSingle">
            <Welcome 
                :welcome="welcome"
            />
            <Info 
                :info="info"
            />
            <Process />
            <Useful />
            <Comments />
        </div>
</template>


<style lang="scss">

</style>