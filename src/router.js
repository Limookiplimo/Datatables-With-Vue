import { createRouter, createWebHistory } from 'vue-router';
import Incidents from './components/Incidents.vue';

const routes = [
  { path: '/incidents', name: 'Incidents', component: Incidents},
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

