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
                                <li class="subItem text" style="margin-top: 15px;">
                                    <div class="subItem__box">
                                        <label class="subItem__label">
                                            <input type="text" placeholder="Ваш мобильный телефон">
                                            <!-- <div class="subItem__back">1000</div> -->
                                        </label>
                                    </div>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
                
                <div class="donateInfo__bot">

                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@import '@/assets/styles/components/donateInfo.scss';
</style>