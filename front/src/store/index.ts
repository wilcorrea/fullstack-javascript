import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

/**
 * @interface StoreState
 */
export interface StoreState {
  [key: string]: any
}

/**
 * @interface StoreOptions
 */
export interface StoreOptions {
  state: StoreState,
  mutations: any
}

/**
 * @interface StoreObservable
 */
export interface StoreObservable {
  state: StoreState,
  commit: Function
}

/**
 * Helper to create dynamic stores
 * Useful to reduce boilerplate.. simple and functional
 * Besides the store is standalone and works fine in a lot of places
 * @param {StoreOptions} options
 * @returns {StoreObservable}
 */
export const createStore = (options: StoreOptions): StoreObservable => {
  const { state, mutations } = options
  return {
    state: Vue.observable(state),
    commit (mutation: any, ...args: any) {
      mutations[mutation](state, ...args)
    }
  }
}

/**
 * The root app store!
 * Using createStore to have a simple store to version
 * @type {StoreObservable}
 */
export default createStore({
  // the states of store
  state: {
    version: window.localStorage.getItem('version')
  },
  // the mutations to call with commit
  // ex.: $store.commit('updateVersion')
  mutations: {
    /**
     * @param {StoreState} state
     * @param {string} version
     */
    updateVersion (state: StoreState, version: string) {
      state.version = version
      window.localStorage.setItem('version', version)
    }
  }
})
