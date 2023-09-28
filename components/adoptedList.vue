<script setup>
    defineProps({
        list: Array
    })
</script>

<template>
    <div class="adoptedList">
        <div class="container">
            <div class="adoptedList__box">
                <ul class="adoptedList__list">
                    <li class="item" v-for="item, index of list" :key="index">
                        <CardsCardBig 
                            :card="item"
                        />
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import '@/assets/styles/components/adoptedList.scss';
</style>