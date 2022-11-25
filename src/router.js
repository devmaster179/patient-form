import { createWebHistory, createRouter } from 'vue-router';
import Search from '@/views/search';

const routes = [
	{
		path: '/',
		name: 'Search',
		component: Search,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;