import Vue from 'vue'
import Vuex from 'vuex'
import common from './common'
import user from './user'
import song from './song'

Vue.use(Vuex)

const store = new Vuex.Store({
    state:{

    },
    modules: {
      common,
      user,
      song,
    }
})

export default store;
