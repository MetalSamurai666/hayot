<script setup>

const wrapper = ref({
    img: '/dogs/poster.png',
    title: 'Питомцы приюта Хаёт',
    info: 'Сейчас в приюте 6000+ собак. Собак привозят из Ташкента и Ташобласти'
})
</script>

<template>
    <NuxtLayout>
        <div class="dogs body">
            <Wrapper
                :wrapper="wrapper"
            />
            <List />
        </div>
    </NuxtLayout>
</template>

<style>

</style>