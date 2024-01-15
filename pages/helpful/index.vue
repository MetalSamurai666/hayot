<script setup>
    const wrapper = ref({
        img: '/helpful/wrapper.png',
        title: 'Полезно знать',
    })
</script>

<template>
        <div class="helpful">
            <Wrapper
                :wrapper="wrapper"
            />
            <HelpList />
        </div>
</template>

<style>

</style>