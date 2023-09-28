<script setup>
    const wrapper = ref({
        img: '/helpful/wrapper2.png',
        title: 'Если вы нашли собаку/кошку',
        info: '12 марта 2023'
    })

    const article = ref({
        author: {
            img: '/helpful/author.png',
            name: 'Ирина Васильева',
            info: 'Волонтёр приюта Хаёт со стажем в зоозащите 12 лет'
        },
        text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur magni ex aliquid ea vel, in explicabo deserunt nisi qui quasi. Magnam, amet. Aperiam, inventore, ullam dolore eveniet perspiciatis quia laboriosam harum autem vero iste distinctio enim eum voluptas aliquam veniam repellat eaque id possimus iusto velit! Tempora, ab fuga debitis exercitationem, iste ratione illo dignissimos magni sint eaque, amet omnis cum ducimus consequatur beatae mollitia doloremque quae? Odit veritatis voluptate excepturi animi officiis odio, repudiandae itaque sequi tempora quia, architecto dolor asperiores soluta ea quae ipsa labore, laboriosam voluptatem voluptates reiciendis at enim consequuntur! Saepe autem enim accusantium odio nostrum sunt. Optio cupiditate fugit aut eius exercitationem sunt, quia praesentium, corrupti dicta voluptatem debitis distinctio quis ab quo itaque neque?'
    })
</script>

<template>
    <NuxtLayout>
        <div class="helpSingle">
            <Wrapper
                :wrapper="wrapper"
            />
            <HelpArticle
                :article="article"
            />
            
        </div>
    </NuxtLayout>
</template>

<style lang="scss">

</style>