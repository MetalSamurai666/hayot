<script setup>
</script>

<template>
    <div class="donateInfo">
        <div class="container">
            <div class="donateInfo__box">
                <div class="donateInfo__top">
                    <div class="donateInfo__title">В августе через сайт задонатили <span>1 250 325 сум</span></div>

                    <NuxtLink class="donateInfo__archive" to="/">Архив</NuxtLink>
                </div>

                <div class="donateInfo__mid">
                    <ul class="donateInfo__list">
                        <li class="item">
                            <div class="item__title">Тип пожертвования</div>
                            
                            <ul class="item__list">
                                <li class="subItem w50">
                                    <div class="subItem__box">
                                        <label class="subItem__label">
                                            <input type="radio" name="type" checked="checked">
                                            <div class="subItem__back">Ежемесячно</div>
                                        </label>
                                    </div>
                                </li>
                                <li class="subItem w50">
                                    <div class="subItem__box">
                                        <label class="subItem__label">
                                            <input type="radio" name="type">
                                            <div class="subItem__back">Разово</div>
                                        </label>
                                    </div>
                                </li>
                            </ul>
                        </li>

                        <li class="item">
                            <div class="item__title">Валюта</div>
                            
                            <ul class="item__list">
                                <li class="subItem w25">
                                    <div class="subItem__box">
                                        <label class="subItem__label">
                                            <input type="radio" name="currency" checked="checked">
                                            <div class="subItem__back">Сумы</div>
                                        </label>
                                    </div>
                                </li>
                                <li class="subItem w25">
                                    <div class="subItem__box">
                                        <label class="subItem__label">
                                            <input type="radio" name="currency">
                                            <div class="subItem__back">Рубли</div>
                                        </label>
                                    </div>
                                </li>
                                <li class="subItem w25">
                                    <div class="subItem__box">
                                        <label class="subItem__label">
                                            <input type="radio" name="currency" checked="checked">
                                            <div class="subItem__back">Доллары</div>
                                        </label>
                                    </div>
                                </li>
                                <li class="subItem w25">
                                    <div class="subItem__box">
                                        <label class="subItem__label">
                                            <input type="radio" name="currency">
                                            <div class="subItem__back">Евро</div>
                                        </label>
                                    </div>
                                </li>
                            </ul>
                        </li>

                        <li class="item">
                            <div class="item__title">Сумма пожертвования</div>
                            
                            <ul class="item__list">
                                <li class="subItem w16">
                                    <div class="subItem__box">
                                        <label class="subItem__label">
                                            <input type="radio" name="amount" checked="checked">
                                            <div class="subItem__back">100</div>
                                        </label>
                                    </div>
                                </li>
                                <li class="subItem w16">
                                    <div class="subItem__box">
                                        <label class="subItem__label">
                                            <input type="radio" name="amount">
                                            <div class="subItem__back">300</div>
                                        </label>
                                    </div>
                                </li>
                                <li class="subItem w16">
                                    <div class="subItem__box">
                                        <label class="subItem__label">
                                            <input type="radio" name="amount" checked="checked">
                                            <div class="subItem__back">500</div>
                                        </label>
                                    </div>
                                </li>
                                <li class="subItem w16">
                                    <div class="subItem__box">
                                        <label class="subItem__label">
                                            <input type="radio" name="amount">
                                            <div class="subItem__back">1000</div>
                                        </label>
                                    </div>
                                </li>
                                <li class="subItem w33 text">
                                    <div class="subItem__box">
                                        <label class="subItem__label">
                                            <input type="text" placeholder="Введите сумму">
                                            <!-- <div class="subItem__back">1000</div> -->
                                        </label>
                                    </div>
                                </li>
                            </ul>
                        </li>

                        <li class="item">
                            <div class="item__title">Способ оплаты</div>
                            
                            <ul class="item__list">
                                <li class="subItem w50">
                                    <div class="subItem__box">
                                        <label class="subItem__label">
                                            <input type="radio" name="payment" checked="checked">
                                            <div class="subItem__back">Банковская карта (₽ | € | $ | ₴ | com)</div>
                                        </label>
                                    </div>
                                </li>
                                <li class="subItem w50">
                                    <div class="subItem__box">
                                        <label class="subItem__label">
                                            <input type="radio" name="payment">
                                            <div class="subItem__back">Перевод на расчётный счёт <br> (сум, ₽, €, $)</div>
                                        </label>
                                    </div>
                                </li>
                            </ul>
                        </li>

                        <li class="item">
                            <div class="item__title">Личные данные</div>
                            
                            <ul class="item__list">
                                <li class="subItem w50 text">
                                    <div class="subItem__box">
                                        <label class="subItem__label">
                                            <input type="text" placeholder="Ваш e-mail">
                                            <!-- <div class="subItem__back">1000</div> -->
                                        </label>
                                    </div>
                                </li>
                                <li class="subItem w50 text">
                                    <div class="subItem__box">
                                        <label class="subItem__label">
                                            <input type="text" placeholder="Ваши имя и фамилия">
                                            <!-- <div class="subItem__back">1000</div> -->
                                        </label>
                                    </div>
                                </li>
                                <li class="subItem text last">
                                    <div class="subItem__box">
                                        <label class="subItem__label">
                                            <input type="text" placeholder="Ваш мобильный телефон">
                                            <!-- <div class="subItem__back">1000</div> -->
                                        </label>
                                    </div>
                                </li>
                            </ul>
                        </li>

                        <li class="item">
                            <div class="item__title">Личные данные</div>
                            
                            <ul class="item__list">
                                <li class="subItem checkbox">
                                    <div class="subItem__box">
                                        <label class="subItem__label">
                                            <input type="checkbox" checked="checked">
                                            <div class="subItem__check">
                                                <span></span>
                                            </div>
                                            <div class="subItem__title">Соглашаюсь с <NuxtLink to="/">офертой</NuxtLink></div>
                                        </label>
                                    </div>
                                </li>
                                <li class="subItem checkbox">
                                    <div class="subItem__box">
                                        <label class="subItem__label">
                                            <input type="checkbox">
                                            <div class="subItem__check">
                                                <span></span>
                                            </div>
                                            <div class="subItem__title">Соглашаюсь на обработку моих <NuxtLink to="/">персональных данных</NuxtLink></div>
                                        </label>
                                    </div>
                                </li>
                            </ul>
                        </li>
                    </ul>

                    <div class="donateInfo__btn">
                        <button>Пожертвовать</button>
                    </div>
                </div>
                <!-- ======================================================= -->
                <!-- Cards -->
                <!-- ======================================================= -->
                <div class="donateInfo__bot">
                    <ul class="donateInfo__cards">
                        <li class="item uzum">
                            <a href="https://uzumbank.uz" target="_blank" class="item__box">
                                <div class="item__img">
                                    <img src="/payment/uzum.webp">
                                </div>

                                <div class="item__title">
                                    Как перевести средства приюту Хаёт с приложении Uzum Bank
                                </div>

                                <div class="item__info">
                                    uzumbank.uz
                                </div>
                            </a>
                        </li>
                        <li class="item click">
                            <a href="https://click.uz" target="_blank" class="item__box">
                                <div class="item__img">
                                    <img src="/payment/click.png">
                                </div>

                                <div class="item__title">
                                    Регулярные платежи приюту Хаёт с Click
                                </div>

                                <div class="item__info">
                                    click.uz
                                </div>
                            </a>
                        </li>
                        <li class="item payme">
                            <a href="https://payme.uz" target="_blank" class="item__box">
                                <div class="item__img">
                                    <img src="/payment/payme.png">
                                </div>

                                <div class="item__title">
                                    Пожертвование Хаёту в Payme
                                </div>

                                <div class="item__info">
                                    payme.uz
                                </div>
                            </a>
                        </li>
                        <li class="item paynet">
                            <a href="https://paynet.uz" target="_blank" class="item__box">
                                <div class="item__img">
                                    <img src="/payment/paynet.png">
                                </div>

                                <div class="item__title">
                                    Как перевести средства приюту Хаёт в терминале Paynet
                                </div>

                                <div class="item__info">
                                    paynet.uz
                                </div>
                            </a>
                        </li>
                        <li class="item paysend">
                            <a href="https://paysend.com" target="_blank" class="item__box">
                                <div class="item__img">
                                    <img src="/payment/paysend.png">
                                </div>

                                <div class="item__title">
                                    Как перевести средства приюту Хаёт из любой точки мира через Paysend
                                </div>

                                <div class="item__info">
                                    paysend.com
                                </div>
                            </a>
                        </li>
                        <li class="item kapital">
                            <a href="https://kapitalbank.uz" target="_blank" class="item__box">
                                <div class="item__img">
                                    <img src="/payment/kapitalbank.png">
                                </div>

                                <div class="item__title">
                                    Как перевести средства приюту Хаёт в терминале Капиталбанка
                                </div>

                                <div class="item__info">
                                    kapitalbank.uz
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@import '@/assets/styles/components/donateInfo.scss';
</style>