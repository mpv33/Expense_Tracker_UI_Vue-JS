import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    expList: []
  },
  mutations: {
    setAll (state, payload) {
      state.expList = payload
    }
  },
  actions: {
    getAll ({ commit }) {
      const config = {
        baseURL: 'http://localhost:8000',
        url: '/',
        method: 'get'
      }
      axios(config).then(e => commit('setAll', e.data))
        .catch(e => alert(e))
    },
    saveNewExp ({ dispatch }, payload) {
      const config = {
        baseURL: 'http://localhost:8000',
        url: '/expenses',
        method: 'post',
        data: {
          amount: payload.amount,
          title: payload.title,
          note: payload.note,
          date: String(payload.date)
        }
      }
      axios(config).then(() => dispatch('getAll'))
        .catch(e => alert(e))
    },
    updateExp ({ dispatch }, payload) {
      const config = {
        baseURL: 'http://localhost:8000',
        url: `/expenses/${payload.id}`,
        method: 'put',
        data: {
          amount: payload.amount,
          title: payload.title,
          note: payload.note,
          date: String(payload.date)
        }
      }
      axios(config).then(() => dispatch('getAll'))
        .catch(e => alert(e))
    },
    deleteExp ({ dispatch }, payload) {
      const config = {
        baseURL: 'http://localhost:8000',
        url: `/delete/${payload._id}`,
        method: 'delete'
      }
      axios(config).then(() => dispatch('getAll'))
        .catch(e => alert(e))
    }
  }
})
