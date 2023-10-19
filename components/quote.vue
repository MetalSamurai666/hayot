<script setup>
</script>

<template>
    <div class="quote">
        <div class="quote__box">
            <div class="quote__left">
                <div class="quote__img">
                    <img src="/quote/image.jpg">
                </div>
                <div class="quote__gradient"></div>
            </div>

            <div class="quote__right">
                <div class="quote__top">
                    <div class="quote__title">
                        <div class="quote__name">Ирода Маткаримова</div>
                        <div class="quote__cat">Основатель и руководитель приюта Хаёт</div>
                    </div>
                </div>
                
                <div class="quote__mid">
                    <div class="quote__logo top">
                        <img src="/logo/quote.svg">
                    </div>

                    <div class="quote__logo bot">
                        <img src="/logo/quote.svg">
                    </div>
                    <div class="quote__info">
                        <p>Друзья, вот уже больше 10 лет я посвятила зоозащите, 3 года из которых отдано приюту Хаёт. Это наше общее детище, место, с которого начинается новая история Узбекистана, страны с гуманным толерантным  отношением к животным. Совместные усилия в любом деле — залог успешного исхода. Помогайте нам, вместе мы воплотим мечту о стране, где животных любят и относятся к ним по-человечески.</p>
                    </div>
                </div>

                <div class="quote__bot">
                    <div class="quote__btn">
                        <NuxtLink to="/">Поддержать Хаёт</NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@import '@/assets/styles/components/quote.scss';
</style>