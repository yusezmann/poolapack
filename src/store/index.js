import { createStore } from 'vuex'
import axios from 'axios'

const store = createStore({
    state: {
        count: 0 ,
        products: '',
        isLoggedIn:''
    },
    mutations: {
        increment(state) {
            state.count++
        },
        decrement(state) {
            state.count--
        },
        setDtProduct(state, payload) {
            state.products = payload
        },
        setLoggedIn(state,payload) {
            state.isLoggedIn = payload
        }
    },
    actions: {
        async getProduct({commit}) {
            await axios
                .get('http://localhost:3000/arrayOfProducts')
                .then((res) => {
                    const product = res.data
                    commit('setDtProduct', product)
                })
        },
        
    },
    grtters: {
        
    },
    modules: {
    },
})

export default store
