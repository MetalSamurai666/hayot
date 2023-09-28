<script setup>
    defineProps({
        media: Object
    })
</script>

<template>
    <div class="mediaList">
        <div class="container">
            <div class="mediaList__box">
                <ul class="mediaList__filter">
                    <li class="item" v-for="item, index of media?.filter" :key="index">
                        <button class="item__box">
                            {{ item?.title }}
                        </button>
                    </li>
                </ul>

                <ul class="mediaList__list">
                    <li class="item" v-for="item of media?.list" :key="item?.id">
                        <CardsCardMedia
                            :card="item"
                        />
                    </li>
                </ul>

                <div class="mediaList__all" v-if="media?.alt">
                    <NuxtLink to="/">СМИ о Хаёте <span> 75</span></NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@import '@/assets/styles/components/mediaList.scss';
</style>