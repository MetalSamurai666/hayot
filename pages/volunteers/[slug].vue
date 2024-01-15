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

</script>

<template>
        <div class="vol">
            <Wrapper
                :wrapper="wrapper"
            />
        </div>
</template>

<style>

</style>