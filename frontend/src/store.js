import { set, toggle } from '@/utils/vuex'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    usuario: null,
    barColor: 'rgba(0, 0, 0, .8), rgba(0, 0, 0, .8)',
    barImage: 'https://demos.creative-tim.com/material-dashboard-pro/assets/img/sidebar-1.jpg',
    drawer: null
  },
  mutations: {
    setUsuario(state, usuario) {
      state.usuario = usuario
    },
    SET_BAR_IMAGE (state, payload) {
      state.barImage = payload
    },
    // SET_DRAWER (state, payload) {
    //  state.drawer = payload
    // },
    SET_SCRIM (state, payload) {
      state.barColor = payload
    },
    setDrawer: set('drawer'),
    toggleDrawer: toggle('drawer')
  },
  getters: {
    usuario(state) {
      return state.usuario
    }
  },
  actions: {
    setUsuario({ commit }, usuario) {
      if(usuario && usuario.token) {
        localStorage.setItem('token', usuario.token)
      } else {
          localStorage.removeItem('token')
        }
        commit('setUsuario', usuario)
    }
  }
})
