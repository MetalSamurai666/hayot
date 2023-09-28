<script setup>
    defineProps({
        filter: Object
    })
</script>

<template>
    <div class="filter">
        <div class="container">
            <div class="filter__box">
                <div class="filter__left">
                    <ul class="filter__list">
                        <li class="item" v-for="item, index of filter?.list" :key="index">
                            <button class="item__btn">
                                <div class="item__title">{{ item?.title }}</div>
                            </button>
                        </li>
                    </ul>
                </div>
                <div class="filter__mid">
                    <ul class="filter__btns">
                        <li class="item">
                            <button class="item__btn">     
                                <div class="item__img">
                                    <img src="/logo/sort.svg">
                                </div>
                            </button>
                        </li>
                        <li class="item">
                            <button class="item__btn">
                                <div class="item__img">
                                    <img src="/logo/filt.svg">
                                </div>
                            </button>
                        </li>
                    </ul>
                </div>
                <!-- <div class="filter__right">
                    <div class="filter__search">
                        <div class="filter__search__btn">
                            <img src="/logo/search.svg">
                        </div>
                        <div class="filter__search__input">
                            <input type="text">
                        </div>
                    </div>
                </div> -->
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    @import "@/assets/styles/components/filter.scss";
</style>