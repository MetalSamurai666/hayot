<script setup>
    const list = ref([
        {
            title: 'Возьми собаку',
            url: '/',
            list: [
                {
                    title: 'Спасёныши с улиц',
                    url: '/'
                },
                {
                    title: 'Как взять собаку',
                    url: '/'
                },
                {
                    title: 'Памятка владельцу собаки из приюта',
                    url: '/'
                },
            ]
        },
        {
            title: 'СМИ о приюте',
            url: '/',
            list: [
                {
                    title: 'www.podrobno.uz (2021)',
                    url: '/'
                },
                {
                    title: 'www.afisha.uz (2021)',
                    url: '/'
                },
                {
                    title: 'zen.yandex.ru (2021)',
                    url: '/'
                },
                {
                    title: 'www.nuz.uz (2020)',
                    url: '/'
                },
                {
                    title: 'www.darakchi.uz (2019)',
                    url: '/'
                },
                {
                    title: 'www.anhor.uz (2019)',
                    url: '/'
                },
                {
                    title: 'www.afisha.uz (2019)',
                    url: '/'
                },
                {
                    title: 'Все статьи (75)',
                    url: '/'
                },
            ]
        },
        {
            title: 'Стань волонтёром',
            url: '/',
            list: [
                {
                    title: 'Как стать волонтером в приюте',
                    url: '/'
                },
                {
                    title: 'Поездки в Хаёт',
                    url: '/'
                },
                {
                    title: 'Материалы',
                    url: '/'
                },
                {
                    title: 'Способы помогать',
                    url: '/'
                },
            ]
        },
        {
            title: 'Уроки доброты',
            url: '/',
            list: [
                {
                    title: '2023',
                    url: '/'
                },
                {
                    title: '2022',
                    url: '/'
                },
                {
                    title: '2021',
                    url: '/'
                },
                {
                    title: '2020',
                    url: '/'
                },
                {
                    title: '2019',
                    url: '/'
                },
            ]
        },
        {
            title: 'Полезно знать',
            url: '/',
            list: [
                {
                    title: 'Если вы нашли собаку/кошку',
                    url: '/'
                },
                {
                    title: 'Как найти семью бездомному животному',
                    url: '/'
                },
                {
                    title: 'Как взять собаку или кошку из приюта',
                    url: '/'
                },
                {
                    title: 'Почему стерилизация и кастрация – это полезно',
                    url: '/'
                },
                {
                    title: 'Лекция зоопсихолога: базовый курс',
                    url: '/'
                },
                {
                    title: 'Видеолекции специалистов',
                    url: '/'
                },
                {
                    title: 'Цикл статей «Содержание и уход»',
                    url: '/'
                },
                {
                    title: 'Привет из дома',
                    url: '/'
                },
            ]
        },
        {
            title: 'О приюте',
            url: '/',
            list: [
            { 
                title: 'Отзывы', 
                url: '/' 
            },
            { 
                title: 'Реквизиты', 
                url: '/' 
            },
            { 
                title: 'Проекты', 
                url: '/' 
            },
            { 
                title: 'Документы', 
                url: '/' 
            },
            { 
                title: 'Наша цель', 
                url: '/' 
            },
            { 
                title: 'Нам помогают', 
                url: '/' 
            },
            { 
                title: 'Учредители', 
                url: '/' 
            },
            { 
                title: 'Вишлист приюта', 
                url: '/' 
            },
            { 
                title: 'СМИ о приюте', 
                url: '/' 
            },
            { 
                title: 'Где находится Хаёт', 
                url: '/' 
            },
            { 
                title: 'Вакансии', 
                url: '/' 
            },
            { 
                title: 'Работники приюта', 
                url: '/' 
            },
            { 
                title: 'Материалы', 
                url: '/' 
            },
            { 
                title: 'День из жизни', 
                url: '/' 
            }
            ]
        },
    ])
</script>

<template>
    <footer class="footer">
        <div class="container-m">
            <div class="footer__box">
                <div class="footer__top">
                    <div class="footer__top__left">
                        <div class="footer__top__info">
                            <p>Приют Хаёт в пригороде Ташкента создан в 2018 году Иродой Маткаримовой и сейчас в нем содержится больше 6000 собак.</p>
                        </div>
                    </div>
                    <div class="footer__top__mid">
                        <div class="footer__top__map">
                            <img src="/footer/map.png">
                        </div>
                        <div class="footer__top__geo">
                            <div class="footer__top__address">
                                Адреc: Кибрайский район Поселок «Зафарабад» (бывш. поселок «Майский»), Ташкент 111200, Узбекистан. Режим работы: 9–17, без выходных.
                            </div>
                            <div class="footer__top__location">
                                <a href="#">Локация приюта Хаёт в телеграме</a>
                            </div>
                        </div>
                    </div>
                    <div class="footer__top__right">
                        <ul class="footer__top__contacts">
                            <li class="item">
                                <a href="tel:+998 90 357-44-77">+998 90 357-44-77</a>
                            </li>
                            <li class="item alt">
                                <a href="mailto:info@hayotislife.com">info@hayotislife.com</a>
                            </li>
                        </ul>
                        <div class="footer__top__review">
                            <NuxtLink to="/">Оставить отзыв</NuxtLink>
                        </div>
                        <ul class="footer__top__socials">
                            <li class="item">
                                <a href="#" class="item__img">
                                    <img src="/logo/socials/facebook.svg">
                                </a>
                            </li>
                            <li class="item">
                                <a href="#" class="item__img">
                                    <img src="/logo/socials/instagram.svg">
                                </a>
                            </li>
                            <li class="item">
                                <a href="#" class="item__img">
                                    <img src="/logo/socials/ok.svg">
                                </a>
                            </li>
                            <li class="item">
                                <a href="#" class="item__img">
                                    <img src="/logo/socials/telegram.svg">
                                </a>
                            </li>
                            <li class="item">
                                <a href="#" class="item__img">
                                    <img src="/logo/socials/twitter.svg">
                                </a>
                            </li>
                            <li class="item">
                                <a href="#" class="item__img">
                                    <img src="/logo/socials/youtube.svg">
                                </a>
                            </li>
                            <li class="item">
                                <a href="#" class="item__img">
                                    <img src="/logo/socials/vk.svg">
                                </a>
                            </li>
                            <li class="item">
                                <a href="#" class="item__img">
                                    <img src="/logo/socials/tiktok.svg">
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="footer__mid">
                    <ul class="footer__mid__list vert">
                        <li class="item" v-for="item, index of list?.slice(0, 2)" :key="index">
                            <NuxtLink :to="item?.url" class="item__title">{{ item?.title }}</NuxtLink>

                            <ul class="item__list">
                                <li class="item__subItem" v-for="subItem, index of item?.list" :key="index">
                                    <NuxtLink :to="subItem?.url">{{ subItem?.title }}</NuxtLink>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <ul class="footer__mid__list hor">
                        <li class="item" v-for="item, index of list?.slice(2)" :key="index">
                            <NuxtLink :to="item?.url" class="item__title">{{ item?.title }}</NuxtLink>

                            <ul class="item__list">
                                <li class="item__subItem" v-for="subItem, index of item?.list" :key="index">
                                    <NuxtLink :to="subItem?.url">{{ subItem?.title }}</NuxtLink>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div class="footer__bot">
                    <div class="footer__bot__info">
                        <p>© 2018–2023 ННО «Общество по спасению бездомных животных» (приют «Хаёт») <a href="#">ИНН 303077391</a>. Все права защищены. Любое использование материалов сайта допускается только с нашего согласия. Учредитель: ННО «Хаёт QQXXQJ». Адрес учредителя: Ташкент. Электронный адрес: <a href="mailto:helpdogs@hayotislife.uz">helpdogs@hayotislife.uz</a></p>
                    </div>

                    <div class="footer__bot__final">
                        <ul class="footer__bot__policy">
                            <li class="item">
                                <NuxtLink to="/">Политика конфиденциальности</NuxtLink>
                            </li>
                            <li class="item">
                                <NuxtLink to="/">Условия использования</NuxtLink>
                            </li>
                            <li class="item">
                                <NuxtLink to="/">Карта сайта</NuxtLink>
                            </li>
                        </ul>

                        <div class="footer__bot__admin">
                            <a href="#">
                                <img src="/footer/lock.svg">
                                <span>Зайти в админку</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<style lang="scss">
@import '@/assets/styles/components/footer.scss';
</style>