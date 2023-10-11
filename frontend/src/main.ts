import { createApp } from 'vue';
import { createPinia } from 'pinia';
import withUUID from 'vue-uuid';

import App from './App.vue';
import router from './router/router';
import BaseCard from './components/ui/BaseCard.vue';
import BaseButton from './components/ui/BaseButton.vue';
import BaseBadge from './components/ui/BaseBadge.vue';
import BaseMessage from './components/ui/BaseMessage.vue';

const pinia = createPinia();
const app = withUUID(createApp(App));

app.use(pinia);
app.use(router);

app.component('base-card', BaseCard);
app.component('base-button', BaseButton);
app.component('base-badge', BaseBadge);
app.component('base-message', BaseMessage);

app.mount('#app');
