<script setup>
    const router = useRouter()
    
    defineProps({
        bread: Object
    })
</script>

<template>
    <div class="breadcrumbs">
        <div class="container">
            <div class="breadcrumbs__box">
                <ul class="breadcrumbs__list">
                    <li class="item">
                        <div class="item__box">
                            <NuxtLink to="/" class="item__link">Главная</NuxtLink>
                        </div>
                    </li>

                    <li class="item">
                        <div class="item__box">
                            <NuxtLink :to="`/${router?.currentRoute?.value?.fullPath?.split('/')?.[1]}`" class="item__link">
                                {{ bread?.title }}
                            </NuxtLink>
                        </div>
                    </li>
                    
                    <li class="item" v-if="`/${router?.currentRoute?.value?.fullPath?.split('/')?.[1]}` != `${router?.currentRoute?.value?.fullPath}`">
                        <div class="item__box">
                            <NuxtLink :to="`${router?.currentRoute?.value?.fullPath}`" class="item__link">
                                {{ bread?.title }}
                            </NuxtLink>
                        </div>
                    </li>

                    <!-- <li class="item" v-for="item, index of router?.currentRoute?.value?.params" :key="index">
                        <div class="item__box">
                            <NuxtLink :to="`/${item}`" class="item__link">
                                {{ item }}
                            </NuxtLink>
                        </div>
                    </li> -->

                    <!-- <pre>{{ router.currentRoute }}</pre> -->
                </ul>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@import '@/assets/styles/components/breadcrumbs.scss';
</style>