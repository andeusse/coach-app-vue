import { createRouter, createWebHistory } from 'vue-router';

import CoachList from '@/views/CoachList.vue';
import RegisterCoach from '@/views/RegisterCoach.vue';
import CoachDetails from '@/views/CoachDetails.vue';
import CoachContact from '@/views/CoachContact.vue';
import RequestsCoach from '@/views/RequestsCoach.vue';
import NotFound from '@/views/NotFound.vue';

const routes = [
  { path: '/', redirect: '/coaches' },
  { path: '/coaches', component: CoachList },
  {
    path: '/coaches/:id',
    component: CoachDetails,
    props: true,
    children: [{ path: 'contact', component: CoachContact }],
  },
  { path: '/register', component: RegisterCoach },
  { path: '/requests', component: RequestsCoach },
  { path: '/:notFound(.*)', component: NotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
