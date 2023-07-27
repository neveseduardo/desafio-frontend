import { RouterHistory, createRouter } from 'vue-router';

const routes = [
	{
		path: '',
		redirect: '/users',
		component: () => import('@/components/layouts/DefaultLayout.vue'),
		children: [
			{
				path: 'users',
				name: 'Users',
				component: () => import('@/pages/users/User.vue'),
			},
		],
	},
	{
		path: '/:pathMatch(.*)*',
		name: 'NotFound',
		meta: { auth: false },
		component: () => import('@/pages/errors/NotFound.vue'),
	},
];

export default function(history: RouterHistory) {
	return createRouter({
		history,
		routes,
	});
}
