import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import pt from 'vuetify/es5/locale/pt'

import 'roboto-fontface/css/roboto/roboto-fontface.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.use(Vuetify)

export default new Vuetify({
  lang: {
    locales: { pt },
    current: 'pt'
  },
  icons: {
    iconfont: 'md'
  },
  theme: {
    themes: {
      light: {
        vinho: '#3B125F',
        vrde: '#6BAFBA',
        fundo: '#fcf8ff',
        cinza: '#d9d9d9',
        azul: '#228eff',
        azulbb: '#a6deff',
        azulesc: '#2f3b7e',
        secondary: '#8B5FBF',
        accent: '#BF653F',
        error: '#722530',
        warning: '#A37513',
        info: '#396893',
        success: '#4caf50'
      }
    }
  }
})
