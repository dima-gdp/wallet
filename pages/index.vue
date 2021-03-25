<template>
  <section class="hero">
    <div class="hero__container container">
      <h1 class="visually-hidden">Кошелек</h1>
      <div class="hero__balance balance">
        <span class="balance__title">{{ $t('balance') }}</span>
        <span class="balance__value">{{ balance }}$</span>
      </div>
      <ul class="hero__currencies currencies">
        <div class="currencies__column" v-for="c in currencies" :key="c.id">
          <CurrenciesCard :currency="c"/>
        </div>
      </ul>
    </div>
  </section>
</template>

<script>
import CurrenciesCard from '~/components/CurrenciesCard'

export default {
  middleware: ['auth'],
  components: {
    CurrenciesCard
  },
  async fetch({store}){
    if(!store.state.dataCurrencies){
      await store.dispatch('fetchCurrencies')
    }
  },
  computed: {
    currencies(){
      return this.$store.getters.currenciesList
    },
    balance(){
      return this.$store.getters.balance
    },
  },
}
</script>

<style>
</style>
