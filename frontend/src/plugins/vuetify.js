import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import i18n from '@/i18n'
import '@/sass/overrides.sass'

Vue.use(Vuetify)

const theme = {
  primary1: '#E91E63',
  secondary1: '#9C27b0',
  accent1: '#9C27b0',
  info1: '#00CAE3',
  caribe: '#22f2ff',
  vinho: '#3B125F',
  telha: '#ef9173',
  laranja: '#EF6C00',
  amber: '#FFA000',
  cyan: '#0097A7',

  primary: '#FF8040',
  secondary: '#424242',
  accent: '#82B1FF',
  error: '#FF5252',
  info: '#2196F3',
  success: '#4CAF50',
  warning: '#FFC107'
}

export default new Vuetify({
  lang: {
    t: (key, ...params) => i18n.t(key, params)
  },
  theme: {
    themes: {
      dark: theme,
      light: theme
    }
  }
})
