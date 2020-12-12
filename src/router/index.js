import { createRouter, createWebHistory } from 'vue-router'
import store from '../store'
import Welcome from '../views/Welcome.vue'
import Login from '../views/Login.vue'

const routes = [
	{
		path: '/',
		name: 'Welcome',
		component: Welcome,
		meta: {
			auth: true,
		},
	},
	{
		path: '/login',
		name: 'Login',
		component: Login,
	},
]

const router = createRouter({
	history: createWebHistory(),
	routes,
})

export default router

router.beforeEach(async (to, from, next) => {
	const user = store.state.User.user

	const isProtectedRoute = to.meta.auth

	if (isProtectedRoute && !user) next({ name: 'Login' })
	else next()
})
