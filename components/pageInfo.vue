<script setup>
    defineProps({
        info: Object
    })
</script>

<template>
    <div class="pageInfo">
        <div class="container">
            <div class="pageInfo__box">
                <div class="pageInfo__top">
                    <div class="pageInfo__text" v-html="info?.text"></div>
                </div>

                <div class="pageInfo__bot">
                    <ul class="pageInfo__list">
                        <li class="item" v-for="item of info?.list" :key="item?._id">
                            <NuxtLink :to="item?.url" class="item__box">
                                <div class="item__title">{{ item?.title }}</div>
                            </NuxtLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@import '@/assets/styles/components/pageInfo.scss';
</style>