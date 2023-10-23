<template>
  <nav-bar-vue v-show="!isMobile" @mobile-view="handleMobile" />
  <hamburger-menu-vue v-show="isMobile" />
  <router-view />
</template>

<script>
import HamburgerMenuVue from "./components/HamburgerMenu.vue";
import NavBarVue from "./components/NavBar.vue";
export default {
  components: { NavBarVue, HamburgerMenuVue },
  data() {
    return {
      isMobile: false,
    };
  },
  methods: {
    handleMobile(isMobile) {
      if (isMobile) {
        this.isMobile = true;
      } else {
        this.isMobile = false;
      }
    },
  },
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Montserrat", sans-serif;
}
</style>
