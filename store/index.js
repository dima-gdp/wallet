import {API_BASE_URL} from "~/config";

export const state = () => ({
  dataCurrencies: null
})

export const mutations = {
  updateCurrencies(state, dataCurrencies){
    state.dataCurrencies = dataCurrencies
  }
}

export const actions = {
  async fetchCurrencies({state, commit}) {
    try {
      const dataCurrencies = await this.$axios.$get(`${API_BASE_URL}/api/wallet/`, {
        headers: {
          Authorization: `Bearer ${state.auth.token}`,
        }
      })
      console.log(dataCurrencies)
      commit('updateCurrencies', dataCurrencies)
    } catch (e) {
      console.log('ошибка')
    }
  },
}
export const getters = {
  currenciesList(state){
    return state.dataCurrencies.wallets.map(el => {
      return  {
        title: el.title,
        slug: el.slug,
        balance: el.balance,
        id: el.id
      }
    })
  },
  balance(state){
    return state.dataCurrencies.balance
  }
}

