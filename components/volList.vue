<script setup>
    defineProps({
        vol: Object
    })
</script>

<template>
    <div class="volList">
        <div class="container">
            <div class="volList__box">
                <div class="volList__head">
                    <div class="volList__info">{{ vol?.info }}</div>
                </div>

                <ul class="volList__list">
                    <div class="item"
                        v-for="item of vol?.list"
                        :key="item?._id"
                    >
                        <CardsCardVol
                            :card="item"
                        />
                    </div>
                </ul>

                <div class="volList__more">
                    <NuxtLink to="/">Еще волонтёры <span>54</span></NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@import '@/assets/styles/components/volList.scss';
</style>