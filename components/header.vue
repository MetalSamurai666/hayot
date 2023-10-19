<script setup>
    import { storeToRefs } from "pinia";
    import { useMainStore } from "~/store/main";
    import { useMenuStore } from '@/store/menu';
    import { useSearchStore } from "~/store/search";
    
    const mainStore = useMainStore()
    const menuStore = useMenuStore()
    const searchStore = useSearchStore()
    const { cats }  = storeToRefs(mainStore)

    const { locale, locales, setLocale } = useI18n()

    const availableLocales = computed(() => {
        return (locales.value).filter(i => i.code !== locale.value)
    })

    const currentLocale = computed(() => {
        return (locales.value).filter(i => i.code == locale.value)[0]
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

    function openMenu() {
        menuStore.menuChange()
    }
    
    function openSearch() {
        searchStore.searchChange()
    }


    const langState = ref(false)
    function openLang() {
        console.log('opening lang///')
        langState.value = !langState.value
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

                <div 
                    :class="langState ? 'header__omen active' : 'header__omen'"
                >
                    <div class="header__omen__box">
                        <div class="header__omen__current" @click="openLang">
                            {{ currentLocale?.name }}
                        </div>

                        <ul class="header__omen__list">
                            <li class="item" 
                                v-for="locale in availableLocales"
                                :key="locale.code"
                                
                            >
                                <button @click="setLocale(locale.code), openLang()">
                                    {{ locale.name }}
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
                
                <div class="header__donate">
                    <NuxtLink to="/donate">{{ $t('support') }}</NuxtLink>
                </div>

                
            </div>

            <div class="header__menu">
                <button @click="openMenu">
                    <img src="/logo/menu.svg">
                </button>
            </div>
        </div>
    </header>
</template>

<style langs="scss">
@import '@/assets/styles/components/header.scss';
</style>