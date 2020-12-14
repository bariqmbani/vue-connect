export const UserModule = {
	namespaced: true,

	state: {
		user: localStorage.getItem('user'),
	},

	// Mutations are functions that effect the STATE.
	mutations: {
		SET_USER(state, user) {
			localStorage.setItem('user', JSON.stringify({ id: 1 }))
			state.user = user
		},
		CLEAR_USER(state) {
			localStorage.removeItem('user')
			state.user = null
		},
	},

	// Actions are functions that you call throughout your application that call mutations.
	actions: {
		setUser({ commit }, user) {
			commit('SET_USER', user)
		},
		clearUser({ commit }) {
			commit('CLEAR_USER')
		},
	},
}
