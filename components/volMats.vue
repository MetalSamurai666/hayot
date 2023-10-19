<script setup>
    const list = ref([
        {
            url: '/',
            title: 'Фотографии собак (Я.Диск)'
        },
        {
            url: '/',
            title: 'Визуальные материалы (Фигма )'
        },
        {
            url: '/',
            title: 'Рассылки (Телеграм)'
        },
        {
            url: '/',
            title: 'Материалы для монтажа (Я.Диск)'
        },
    ])
</script>

<template>
    <div class="volMats">
        <div class="container">
            <div class="volMats__box">
                <div class="volMats__head">
                    <div class="volMats__title">Материалы для волонтёров</div>
                </div>

                <div class="volMats__body">
                    <ul class="volMats__list">
                        <li class="item" v-for="item, index of list" :key="index">
                            <a :href="item?.url" class="item__box">
                                <div class="item__left">
                                    <div class="item__title">{{ item?.title }}</div>
                                </div>
                                <div class="item__right">
                                    <div class="item__arrow">
                                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.96538 2.52087L0.580095 2.52103C0.580095 2.52103 0.580095 3.09498 0.580095 1.37298C0.580095 0.225094 0.580095 -0.348694 0.580095 0.225094H13.91C13.91 0.799039 13.9064 0.68425 13.9064 1.37298V13.9998C13.9064 13.9998 14.489 14 12.7473 13.9998C11.0116 14 11.5912 14 11.5881 13.9998V4.12792L1.73868 14C1.15912 13.4261 1.10252 13.37 0.57956 12.8521C0.0565978 12.3342 0.57956 12.8521 0 12.2782L9.96538 2.52087Z" fill="#B3B3B3"/>
                                        </svg>
                                    </div>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@import '@/assets/styles/components/volMats.scss';
</style>