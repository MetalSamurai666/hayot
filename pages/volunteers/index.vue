<script setup>
    const wrapper = ref({
        img: '/volunteers/wrapper.jpg',
        title: 'Волонтёры приюта Хаёт',
        info: 'Без волонтёров у приюта нет будущего',
        btn: {
            title: '172 способа помочь приюту',
            url: '/'
        }
    })

    const vol = ref({
        info: 'Волонтеры — добровольцы, которые регулярно помогают приюту Хаёт информационно (ведение и развитие соцсетей, агитация в офлайне) и физически (помощь по хозяйству в приюте, помощь в проведении акций), материально, а также организуют сбор средств, привлекают других волонтёров, организуют и менеджерят разные процессы и и много другого.',
        list: [
            {
                _id: 1,
                url: '/volunteers/vol1',
                img: '/volunteers/vol1.jpg',
                title: 'Ирода Маткаримова',
                info: 'Основатель и руководитель приюта'
            },
            {
                _id: 2,
                url: '/',
                img: '/volunteers/vol2.jpg',
                title: 'Ольга Вревская',
                info: 'Куратор уроков доброты'
            },
            {
                _id: 3,
                url: '/',
                img: '/volunteers/vol3.jpg',
                title: 'Олеся Чернова',
                info: 'Куратор травмированных собак'
            },
            {
                _id: 4,
                url: '/',
                img: '/volunteers/vol4.jpg',
                title: 'Рената Исраилова',
                info: 'Волонтёр приюта Хаёт'
            },
            {
                _id: 5,
                url: '/',
                img: '/volunteers/vol5.jpg',
                title: 'Рада Петрова',
                info: 'Волонтёр приюта Хаёт'
            },
        ]
    })
</script>

<template>
    <NuxtLayout>
        <div class="volunteers">
            <Wrapper
                :wrapper="wrapper"
            />
            <VolList
                :vol="vol"
            />
            <VolStart/>
            <VolHelp/>
            <VolZones/>
            <VolMats/>
        </div>
    </NuxtLayout>
</template>

<style>

</style>