export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Кошелек',
    htmlAttrs: {
      lang: 'ru'
    },
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: ''}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/scss/styles.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/vuelidate.js',
    '~/plugins/preloader.js',
  ],
  loading: {
    color: 'DodgerBlue',
  },


  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    ['vue-wait/nuxt', {useVuex: true}],
    [
      'nuxt-i18n',
      {
        locales: [
          {
            code: "ru",
            name: "Russian"
          },
          {
            code: "en",
            name: "English"
          }
        ],
        defaultLocale: 'ru',
        vueI18n: {
          fallbackLocale: 'ru',
          messages: {
            ru: {
              login: 'Войти',
              wallets: 'Кошельки',
              registration: 'Регистрация',
              password: 'Пароль',
              name: 'Имя',
              balance: 'Общий баланс',
              receive: 'Получить',
              send: 'Отправить'
            },
            en: {
              login: 'Sign in',
              wallets: 'Wallets',
              registration: 'Sign up',
              password: 'Password',
              name: 'Name',
              balance: 'Balance',
              receive: 'Receive',
              send: 'Send'
            },
          }
        },
      }
    ]
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
}
