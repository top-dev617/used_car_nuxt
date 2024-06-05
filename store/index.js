import Vuex from 'vuex'

const createStore = () => {
    return new Vuex.Store({
        state: () => ({
            cars: []
        }),
        mutations: {
            setCars(state, cars) {
                state.cars = cars
            }
        },
        actions: {
            async fetchCars({ commit }) {
                const cars = await fetch('/api/cars').then(res => res.json())
                commit('setCars', cars)
            }
        }
    })
}

export default createStore
