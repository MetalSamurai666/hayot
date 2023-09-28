<script setup>
    const bread = ref({
        title: 'Пристроенные собаки'
    })

    const heading = ref({
        title: 'Пристроенные собаки',
        info: 'С 2018 года пристроено более 2500 собак'
    })

    const list = ref({
        title: 'У нас 6000+ прекрасных собак и 16 осликов, которые ждут своего нового дома. Может, одна из них ваша?',
        filter: [
            {
                title: '#приветиздома'
            },
            {
                title: 'Август 2023'
            },
        ]
    })
</script>

<template>
    <NuxtLayout>
        <div class="adoptedSingle">
            <Breadcrumbs
                :bread="bread"
            />
            <Heading 
                :heading="heading"
            />
            <CardList 
                :list="list"
            />
        </div>
    </NuxtLayout>
</template>

<style>

</style>