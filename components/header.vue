<script setup>
    import { storeToRefs } from "pinia";
    import { useMainStore } from "~/store/main";
    import { useSearchStore } from "~/store/search";
    
    const mainStore = useMainStore()
    const searchStore = useSearchStore()
    const { cats }  = storeToRefs(mainStore)

    const { locale, locales, setLocale } = useI18n()

    const availableLocales = computed(() => {
        return (locales.value).filter(i => i.code !== locale.value)
    })

    /* Header transition on scroll */
    var scrollTrigger = 20;
    if (window.innerWidth > 500) {
        window.onscroll = function() {
            if (window.scrollY > scrollTrigger || window.pageYOffset > scrollTrigger) {
                document.querySelector('header').classList.add('alt');
            } else {
                document.querySelector('header').classList.remove('alt');
            }
        }
    } else {
        window.onscroll = function() {
            if (window.scrollY > scrollTrigger || window.pageYOffset > scrollTrigger) {
                document.querySelector('header').classList.add('mobile-alt');
            } else {
                document.querySelector('header').classList.remove('mobile-alt');
            }
        };
    }
    
    function openSearch() {
        searchStore.searchChange()
    }
</script>

<template>
    <header class="header">
        <div class="header__box">
            <div class="header__left">
                <div class="header__logo">
                    <NuxtLink to="/">
                        <img src="/logo.png">
                    </NuxtLink>
                </div>
            </div>

            <div class="header__mid">
                <ul class="header__nav">
                    <li class="item" v-for="item of cats" :key="item?.id">
                        <NuxtLink :to="item?.url" class="item__link">
                            <span>{{ item?.title }}</span>
                        </NuxtLink>
                    </li>
                </ul>
            </div>
            
            <div class="header__right">
                <div class="header__search">
                    <div class="search-box">
                        <!-- <input type="text" class="search-box-input" placeholder="Что ищете?"> -->
                        <button class="search-box-btn" @click="openSearch">
                            <div class="search-box-icon">
                                <img src="/logo/search.svg">
                            </div>
                        </button>
                    </div>
                </div>

                <div class="header__lang">
                    <!-- <div class="item">{{ locale }}</div> -->
                    <!-- <ul class="header__lang__list">
                        <div class="item"></div>
                    </ul> -->
                    <a
                        class="item"
                        href="#"
                        v-for="locale in availableLocales"
                        :key="locale.code"
                        @click.prevent.stop="setLocale(locale.code)"
                    >
                        {{ locale.name }}
                    </a>
                </div>
                
                <div class="header__donate">
                    <NuxtLink to="/">{{ $t('support') }}</NuxtLink>
                </div>
            </div>
        </div>
    </header>
</template>

<style langs="scss">
@import '@/assets/styles/components/header.scss';
</style>