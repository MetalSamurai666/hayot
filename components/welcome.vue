<script setup>
    import { Splide, SplideSlide } from '@splidejs/vue-splide';

    defineProps({
        welcome: Object
    })
</script>

<template>
    <div :class="welcome?.alt ? 'welcome alt' : 'welcome'">
        <div class="welcome__top">
            <div class="welcome__slider">
                <Splide 
                    class="splide slideWrap"
                    :options="{
                        cover: true,
                        autoplay: true,
                        interval: 3000,
                        // height: 'calc(100vh - 70px)',
                        classes: {
                            arrows: 'splide__arrows slideWrap__arrows',
                            arrow : 'splide__arrow slideWrap__arrow',
                            prev  : 'splide__arrow--prev slideWrap__prev',
                            next  : 'splide__arrow--next slideWrap__next',
                            pagination: 'splide__pagination slideWrap__pagination',
                            page      : 'splide__pagination__page slideWrap__page',
                        },
                        breakpoints: {
                            1024: {
                                // height: 'calc(100vh - 50px)',
                            },
                            600: {
                                height: 450,
                                pagination: false,
                                arrows: false
                            }
                        }
                    }" 
                >
                    <SplideSlide class="splide__slide slideWrap__slide"
                        v-for="item of welcome?.slides" :key="item?.id"
                    >
                        <img :src="`/${item?.img}`" class="slideWrap__img">

                        <div class="slideWrap__box welcome__container">
                            <div class="slideWrap__title">{{ item?.title }}</div>

                            <div class="slideWrap__info">{{ item?.info }}</div>
                        </div>

                        <div class="slideWrap__gradient"></div>
                    </SplideSlide>
                </Splide>
            </div>
        </div>

        <!-- <div class="welcome__bot">
            <div class="welcome__container">
                
            </div>
        </div> -->
    </div>
</template>

<style lang="scss">
@import '@/assets/styles/components/welcome.scss';
</style>