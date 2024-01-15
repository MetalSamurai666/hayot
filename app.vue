<script setup>
</script>

<template>
  <NuxtLayout>
    <meta name="theme-color" content="#F37500"/>
    <NuxtPage />
  </NuxtLayout>
</template>

<style lang="scss">
@import '@/assets/styles/main.scss';
.page-enter-active,
.page-leave-active {
  transition: all .2s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>