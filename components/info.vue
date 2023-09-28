<script setup>
    defineProps({
        info: Object
    })
</script>

<template>
    <div class="info">
        <div class="container">
            <div class="info__box">
                <div class="info__top">
                    <div class="info__passport">
                        <div class="info__passport__left">
                            <ul class="info__passport__list">
                                <li class="item">
                                    <div class="item__box">
                                        <div class="item__left">
                                            <div class="item__img">
                                                <img src="/logo/dog.svg">
                                            </div>
                                        </div>
                                        <div class="item__right">
                                            <div class="item__title">Порода</div>
                                            <div class="item__info">{{ info?.breed }}</div>
                                        </div>
                                    </div>
                                </li>
                                <li class="item">
                                    <div class="item__box">
                                        <div class="item__left">
                                            <div class="item__img">
                                                <img src="/logo/paw.svg">
                                            </div>
                                        </div>
                                        <div class="item__right">
                                            <div class="item__title">Номер</div>
                                            <div class="item__info">{{ info?.id }}</div>
                                        </div>
                                    </div>
                                </li>
                                <li class="item">
                                    <div class="item__box">
                                        <div class="item__left">
                                            <div class="item__img">
                                                <img src="/logo/cake.svg">
                                            </div>
                                        </div>
                                        <div class="item__right">
                                            <div class="item__title">Возраст</div>
                                            <div class="item__info">{{ info?.age }} {{ info?.age < 5 && info?.age > 1 ? 'года' : info?.age == 1 ? 'год' : 'лет' }}</div>
                                        </div>
                                    </div>
                                </li>
                                <li class="item">
                                    <div class="item__box">
                                        <div class="item__left">
                                            <div class="item__img">
                                                <img src="/logo/sex.svg">
                                            </div>
                                        </div>
                                        <div class="item__right">
                                            <div class="item__title">Пол</div>
                                            <div class="item__info">{{ info?.sex }}</div>
                                        </div>
                                    </div>
                                </li>
                                <li class="item big">
                                    <div class="item__box">
                                        <div class="item__left">
                                            <div class="item__img">
                                                <img src="/logo/location.svg">
                                            </div>
                                        </div>
                                        <div class="item__right">
                                            <div class="item__title">Где находится</div>
                                            <div class="item__info">{{ info?.location }}</div>
                                        </div>
                                    </div>
                                </li>
                                <li class="item big">
                                    <div class="item__box">
                                        <div class="item__left">
                                            <div class="item__img">
                                                <img src="/logo/house.svg">
                                            </div>
                                        </div>
                                        <div class="item__right">
                                            <div class="item__title">Может жить с:</div>
                                            <div class="item__info">{{ info?.live }}</div>
                                        </div>
                                    </div>
                                </li>
                                <li class="item big">
                                    <div class="item__box">
                                        <div class="item__left">
                                            <div class="item__img">
                                                <img src="/logo/ruler.svg">
                                            </div>
                                        </div>
                                        <div class="item__right">
                                            <div class="item__title">Размер</div>
                                            <div class="item__info">{{ info?.size }}</div>
                                        </div>
                                        <div class="item__extra">
                                            <div class="item__question">Как определяется размер</div>
                                            <div class="item__answer">Как-то так.</div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="info__passport__right">
                            <div class="info__passport__curator curator">
                                <div class="curator__box">
                                    <div class="curator__title">Понравился Бартелиан?</div>
                                    <div class="curator__img">
                                        <img :src="info?.curator?.img">
                                    </div>
                                    <div class="curator__name">{{ info?.curator?.name }}</div>
                                    <div class="curator__contact">
                                        <a :href="info?.curator?.url">Напишите куратору</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="info__mid">
                    <div class="info__text" v-html="info?.text"></div>
                </div>
                <div class="info__bot">
                    <div class="info__gallery">
                        <ul class="info__gallery__list first">
                            <li class="item" v-for="item, index of info?.gallery?.slice(0, 3)" :key="index">
                                <div class="item__box">
                                    <div class="item__img">
                                        <img :src="item?.url">
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <ul class="info__gallery__list second">
                            <li class="item" v-for="item, index of info?.gallery?.slice(3, 6)" :key="index">
                                <div class="item__box">
                                    <div class="item__img">
                                        <img :src="item?.url">
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <ul class="info__gallery__list third">
                            <li class="item" v-for="item, index of info?.gallery?.slice(6, 9)" :key="index">
                                <div class="item__box">
                                    <div class="item__img">
                                        <img :src="item?.url">
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@import '@/assets/styles/components/info.scss';
</style>