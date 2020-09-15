import Vue from 'vue'
import Vuex from 'vuex'
import { http } from './services/http-common'
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

const estado = {
    token: null
}

const mutations = {
    DEFINIR_USUARIO_LOGADO(state, { token }) {
        state.token = token;
    },

    DESLOGAR_USUARIO(state) {
        state.token = null;
    }
}

const actions = {
    efetuarLogin({ commit }, usuario) {
        return new Promise((resolve, reject) => {
            http.post('/autenticacao', usuario, {
                headers: {
                    'Content-Type': 'application/json'
                  }
            }).then(response => {
                commit('DEFINIR_USUARIO_LOGADO', {
                    token: response.data.token
                })
                resolve(response.data)
            }).catch(erro => {
                reject(erro);
            });
        });
    }
}

const getters = {
    isLogado: state => Boolean(state.token)
}

export default new Vuex.Store({
  state: estado,
  plugins: [ createPersistedState({
    key: 'token',
    getState: () => {
      if (localStorage.getItem('token')) {
        Object.assign(estado, JSON.parse(localStorage.getItem('token')));
      }
    },
})],
  mutations,
  actions: actions,
  modules: {
  },
  getters
})
