import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'
const SLOW = 35
const FAST = 0
const store = new Vuex.Store({
    state: {
        // 控制字符速度
        speed: debug ? FAST : SLOW
    },
    mutations: {
        toggleSpeed(state) {
            state.speed = state.speed === SLOW ? FAST : SLOW
        }
    },
    actions: {
        incrementAsync({ commit }) {
            setTimeout(() => {
                commit('toggleSpeed')
            }, 1000)
        }
    },
    getters: {
        getSpeed(state) {
            return state.speed
        }
    }
})

export default store
