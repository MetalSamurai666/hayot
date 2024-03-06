<script>
export default {
  data() {
    return {
      isHidden: false,
      lastScrollTop: 0,
    };
  },
  methods: {
    handleScroll() {
      const st = window.pageYOffset || document.documentElement.scrollTop;
      this.isHidden = st > this.lastScrollTop && st > 50; // Adjust the threshold as needed
      this.lastScrollTop = st <= 0 ? 0 : st;
    },
  },
};
</script>

<template>
  <div>
    <Header :class="{ 'hidden': isHidden }" />
    <Search />
    <Menu />
    <slot @scroll="handleScroll"/>

    <Footer />
  </div>
</template>

<style>
</style>