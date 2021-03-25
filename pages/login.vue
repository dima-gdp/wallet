<template>
  <section class="auth">

    <div class="auth__container container">
      <div class="auth__subcontainer">
        <h1 class="auth__title">{{ $t('login') }}</h1>
        <form class="auth__form form-auth" @submit.prevent="handlerSubmit">
          <div class="form-auth__inputs">
            <span class="form-auth__input-wrapper">
									<input type="email" placeholder="Email" v-model="email" :class="{invalid: $v.email.$error}">
								</span>
            <span class="form-auth__input-wrapper">
									<input type="password" :placeholder="$t('password')" v-model="password" :class="{invalid: $v.password.$error}">
								</span>
          </div>
          <button class="form-auth__submit" type="submit">
            <v-wait for="login">
              <template slot="waiting">
                <preloader></preloader>
              </template>
              {{ $t('login') }}
            </v-wait>
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
import {email, required, minLength} from 'vuelidate/lib/validators'

export default {
  middleware: ['redirect'],
  data() {
    return {
      email: '',
      password: '',
    }
  },
  validations: {
    email: {email, required},
    password: {required, minLength: minLength(6)},
  },
  methods: {
    async handlerSubmit() {
      if (this.$v.$invalid) {
        this.$v.$touch()
        return
      }
      this.$wait.start('login');
      await this.$store.dispatch('auth/login', {email: this.email, password: this.password})
      this.$wait.end('login');
    }
  },
  async created() {
  },
}
</script>
