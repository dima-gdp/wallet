import {API_BASE_URL} from "~/config";

export const state = () => ({
  token: null
})

export const mutations = {
  setToken(state, token) {
    state.token = token
  },
}

export const actions = {
  async login({commit}, {password, email}) {
    try {
      const getToken = await this.$axios.$post(`${API_BASE_URL}/api/auth/login`, {
        password,
        email
      })
      const token = getToken.access_token
     commit('setToken', token)
    } catch (e) {
      console.log('ошибка', e)
    }
  },
  async register(context, {name, password, email}){
    try {
      const post = await this.$axios.$post(`${API_BASE_URL}/api/auth/register`, {
        name,
        password,
        email
      })
    } catch (e) {
      console.log('ошибка', e)
    }
  }
}
export const getters = {
  hasToken(state){
    return !!state.token
  }
}
