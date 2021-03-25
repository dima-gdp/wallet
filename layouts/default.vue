<template>
  <div class="wrapper">
    <header class="header">
      <div class="header__container container">
        <div class="header__flex">
          <a href="/" class="header__logo">
            <img src="@/assets/svg/logo.svg" alt="Логотип">
          </a>
          <div class="header__menu" :class="{'header__menu--active': isOpenMenu}">
            <nav class="header__nav nav">
              <ul>
                <li>
                  <NuxtLink to="/">{{ $t('wallets') }}</NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/login">{{ $t('login') }}</NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/registration">{{ $t('registration') }}</NuxtLink>
                </li>
              </ul>
            </nav>
            <ul class="header__locales locales">
              <li class="locales__item">
                <nuxt-link class="locales__btn locales__btn--current" :to="switchLocalePath('ru')">ru</nuxt-link>
              </li>
              <li class="locales__item">
                <nuxt-link class="locales__btn" :to="switchLocalePath('en')">en</nuxt-link>
              </li>
            </ul>
          </div>
          <button
            class="header__burger burger"
            :class="{'burger--active': isOpenMenu}"
            @click="isOpenMenu = !isOpenMenu">
            <span></span>
          </button>
        </div>
      </div>
    </header>

    <div class="main">
      <Nuxt />
    </div>

    <footer class="footer">
    </footer>

  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpenMenu: false
    }
  },
}
</script>

<style>
</style>
