<script setup> 
    const list = ref([
        {
            title: 'Запонить форму на сайте',
            info: 'Заполните заявку на упсыновление. Мы проверим, соответствует ли ваш образ жизни и место жительства собаки нашим требованиям и потребностям собаки.'
        },
        {
            title: 'Мы договоримся о встрече',
            info: 'Мы назначим встречу в приюте с куратором или основателем приюта, чтобы вы познакомились с собакой, пообщались с ней. Мы рекомендуем съездить в приют несколько раз перед тем как забрать собаку.'
        },
        {
            title: 'Идеальное пристройство ',
            info: 'Если вы идеально подходите друг другу, мы согласуем день, в который вы сможете забрать собачку домой.'
        },
        {
            title: 'Поддержка первое время',
            info: 'Куратор собаки будет поддерживать с вами связь, чтобы быть в курсе, как дела у вас с собакой. Если вам нужен будет совет или помощь, он всегда связи в телеграме или по указанному номеру телефона. Рекомендации по дрессуре, лечению, скидки в клиниках — всё с нас. Ознакомьтесь также с разделом Полезно знать.'
        },
    ])
</script>

<template>
    <div class="process">
        <div class="container">
            <div class="process__box">
                <div class="process__head">
                    <div class="process__title">Как работает наш процесс упсыновления</div>
                    <div class="process__info">Мы очень рады, что вас заинтересовал Бартелиан. Если вам кажется, что вы смогли бы вместе ужиться, вот алгоритм пристройства собаки (упсыновления):</div>
                </div>
                <div class="process__body">
                    <ul class="process__list">
                        <li class="item" v-for="item, index of list" :key="index">
                            <div class="item__box">
                                <div class="item__left">
                                    <div class="item__index">{{ index+1 }}</div>
                                </div>
                                <div class="item__right">
                                    <div class="item__title">{{ item?.title }}</div>
                                    <div class="item__info">{{ item?.info }}</div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>


<style lang="scss">
@import '@/assets/styles/components/process.scss';
</style>