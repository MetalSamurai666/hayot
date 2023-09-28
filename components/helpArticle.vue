<script setup>
    defineProps({
        article: Object
    })
</script>

<template>
    <div class="helpArticle">
        <div class="container">
            <div class="helpArticle__box">
                <div class="helpArticle__top">
                    <div class="helpArticle__author ">
                        <div class="helpArticle__author__box">
                            <div class="helpArticle__author__left">
                                <div class="helpArticle__author__img">
                                    <img :src="article?.author?.img">
                                </div>
                            </div>
                            <div class="helpArticle__author__right">
                                <div class="helpArticle__author__name">{{ article?.author?.name }}</div>
                                <div class="helpArticle__author__info">{{ article?.author?.info }}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="helpArticle__mid">
                    <div class="helpArticle__text" v-html="article?.text"></div>
                </div>
                <!-- <div class="helpArticle__bot"></div> -->
            </div>  
        </div>
    </div>
</template>

<style lang="scss">
@import '@/assets/styles/components/helpArticle.scss';
</style>