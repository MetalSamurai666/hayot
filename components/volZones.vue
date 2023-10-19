<script setup>
    const list = ref([
        {
            url: '/',
            title: 'Куратор адресных сборов',
            info: 'Сборы на теневую сетку, на больных собак, на казаны, на шланги и другое, нередко на доставку вещей и дров. Удалённая занятость.',
            status: 'closed'
        },
        {
            url: '/',
            title: 'Куратор адресных сборов',
            info: 'Сборы на теневую сетку, на больных собак, на казаны, на шланги и другое, нередко на доставку вещей и дров. Удалённая занятость.',
            status: 'almost'
        },
        {
            url: '/',
            title: 'Куратор адресных сборов',
            info: 'Сборы на теневую сетку, на больных собак, на казаны, на шланги и другое, нередко на доставку вещей и дров. Удалённая занятость.',
            status: 'open'
        },
    ])
</script>

<template>
    <div class="volZones">
        <div class="container">
            <div class="volZones__box">
                <div class="volZones__top">
                    <div class="volZones__title">Зоны ответственности волонтёров</div>
                </div>
                <div class="volZones__mid">
                    <ul class="volZones__filter">
                        <li class="item green">
                            <button class="item__box">Все</button>
                        </li>
                        <li class="item green">
                            <button class="item__box">Закрыта</button>
                        </li>
                        <li class="item yellow">
                            <button class="item__box">Закрыта частично</button>
                        </li>
                        <li class="item red">
                            <button class="item__box">Не закрыта</button>
                        </li>
                    </ul>
                </div>
                <div class="volZones__bot">
                    <ul class="volZones__list">
                        <li :class="`item ${item?.status}`" v-for="item, index of list" :key="index">
                            <div class="item__box">
                                <div class="item__title">{{ item?.title }}</div>

                                <div class="item__info">{{ item?.info }}</div>

                                <NuxtLink class="item__more" :to="item?.url">Узнать детали</NuxtLink>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>


<style lang="scss">
@import '@/assets/styles/components/volZones.scss';
</style>