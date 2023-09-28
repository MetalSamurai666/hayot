<script setup>
    const wrapper = ref({
        img: '/helpful/wrapper.png',
        title: 'Полезно знать',
    })
</script>

<template>
    <NuxtLayout>
        <div class="helpful">
            <Wrapper
                :wrapper="wrapper"
            />
            <HelpList />
        </div>
    </NuxtLayout> 
</template>

<style>

</style>