import { createApp } from 'vue';
import App from './App.vue';
import StudentContact from './components/StudentContact.vue';
const app = createApp(App);
app.component('student-contact', StudentContact);
app.mount('#app');
