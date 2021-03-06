import { createApp } from 'vue';
import Bizic from 'bizic';
import { withRootProvider } from 'bizic-vue';
import App from './App.vue';
import routerFactory from './router';
import store from './stores';
import service from './services';

const bizic = new Bizic();
bizic.use(store);
bizic.use(service);

const AppWithProvider = withRootProvider(App, bizic);
const app = createApp(AppWithProvider);
app.use(routerFactory());
app.mount('#app');
