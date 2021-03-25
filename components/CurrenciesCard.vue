<template>
  <div class="currencies__item">
    <div class="currencies__head">
      <span class="currencies__icon">
        <img src="@/assets/img/currensy-icon.png" alt="Иконка">
      </span>
      <span class="currencies__name">{{ currency.title }}</span>
    </div>
    <span class="currencies__value">{{ currency.balance }} {{ currency.slug }}</span>
    <ul class="currencies__buttons currencies-buttons">
      <li class="currencies-buttons__item">
        <a class="currencies-buttons__btn" href="#">{{ $t('receive') }}</a>
      </li>
      <li class="currencies-buttons__item">
        <a class="currencies-buttons__btn currencies-buttons__btn--white" href="#">{{ $t('send') }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['currency']
}
</script>
