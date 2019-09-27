import { set, toggle } from '@/utils/vuex'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  title: undefined,
  drawer: null,
  usuario: null
}

const types = {
  SET_TITLE: 'SET_TITLE'
}

const mutations = {
  [types.SET_TITLE]: (state, { title }) => {
    state.title = title
  },
  setDrawer: set('drawer'),
  toggleDrawer: toggle('drawer'),
  setUsuario(state, usuario) {
    state.usuario = usuario
  }
}

const getters = {
  usuario(state) {
    return state.usuario
  }
}

const actions = {
  setTitle: ({ commit }, payload) => {
    commit(types.SET_TITLE, payload)
  },
  setUsuario({ commit }, usuario) {
    commit('setUsuario', usuario)
  }
}

export default new Vuex.Store({
  actions,
  mutations,
  getters,
  state
})
