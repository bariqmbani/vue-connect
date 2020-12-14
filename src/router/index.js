import { createRouter, createWebHistory } from 'vue-router'
import store from '../store'
import Welcome from '../views/Welcome.vue'
import Login from '../views/Login.vue'
import Profile from '../views/Profile.vue'
import ProfileEdit from '../views/ProfileEdit.vue'
import JoinConference from '../views/JoinConference.vue'
import JoinMeetingSetting from '../views/JoinMeetingSetting.vue'
import ListMeeting from '../views/ListMeeting.vue'
import JoinWebinar from '../views/JoinWebinar.vue'

const routes = [
	{
		path: '/login',
		name: 'Login',
		component: Login,
	},
	{
		path: '/',
		name: 'Welcome',
		component: Welcome,
		meta: {
			auth: true,
		},
	},
	{
		path: '/profile',
		name: 'Profile',
		component: Profile,
		meta: {
			auth: true,
		},
	},
	{
		path: '/profile/edit',
		name: 'ProfileEdit',
		component: ProfileEdit,
		meta: {
			auth: true,
		},
	},
	{
		path: '/conference/join',
		name: 'JoinConference',
		component: JoinConference,
		meta: {
			auth: true,
		},
	},
	{
		path: '/conference/join/setting',
		name: 'JoinMeetingSetting',
		component: JoinMeetingSetting,
		meta: {
			auth: true,
		},
	},
	{
		path: '/conference/list',
		name: 'ListMeeting',
		component: ListMeeting,
		meta: {
			auth: true,
		},
	},
	{
		path: '/webinar/join',
		name: 'JoinWebinar',
		component: JoinWebinar,
		meta: {
			auth: true,
		},
	},
	{
		path: '/webinar/join/setting',
		name: 'JoinWebinarSetting',
		component: JoinMeetingSetting,
		meta: {
			auth: true,
		},
	},
	{
		path: '/webinar/list',
		name: 'ListWebinar',
		component: ListMeeting,
		meta: {
			auth: true,
		},
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
