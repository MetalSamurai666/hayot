<script setup>
    import { Splide, SplideSlide } from '@splidejs/vue-splide';

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

                <ul class="mediaList__list" v-if="!media?.alt">
                    <li class="item" v-for="item of media?.list" :key="item?.id">
                        <CardsCardMedia
                            :card="item"
                        />
                    </li>
                </ul>

                <div class="mediaList__slider" v-if="media?.alt">
                    
                    <Splide 
                        class="splide slideMedia"
                        :options="{
                            fixedWidth: '22%',
                            gap: 20,
                            rewind: true,
                            // perPage: 4.1,
                            // perMove: 2,
                            // waitForTransition: true,
                            // wheelSleep: true,
                            // wheel: true,
                            pagination: false,
                            classes: {
                                arrows: 'splide__arrows slideMedia__arrows',
                                arrow : 'splide__arrow slideMedia__arrow',
                                prev  : 'splide__arrow--prev slideMedia__prev',
                                next  : 'splide__arrow--next slideMedia__next',
                                pagination: 'splide__pagination slideMedia__pagination',
                                page      : 'splide__pagination__page slideMedia__page',
                            },
                            breakpoints: {
                                600: {
                                    fixedWidth: '90%',
                                    pagination: true,
                                    arrows: false
                                }
                            }
                        }" 
                    >
                        <!-- <div class="splide__arrows slideMedia__arrows">
                            <button class="splide__arrow slideMedia__arrow splide__arrow--prev slideMedia__prev">
                                <img src="/logo/arrowLeft.svg">
                            </button>
                            <button class="splide__arrow slideMedia__arrow splide__arrow--next slideMedia__next">
                                <img src="/logo/arrowLeft.svg" style="transform: rotate(180deg)">
                            </button>
                        </div> -->
                        <SplideSlide class="splide__slide slideWrap__slide"
                            v-for="item of media?.list" :key="item?.id"
                        >
                            <CardsCardMedia
                                :card="item"
                            />
                        </SplideSlide>
                    </Splide>
                </div>

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