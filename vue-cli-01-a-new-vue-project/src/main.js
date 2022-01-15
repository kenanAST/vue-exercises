import { createApp } from 'vue';
import App from './App.vue';
import StudentContact from './components/StudentContact.vue';
import AddStudent from './components/NewStudent.vue';
const app = createApp(App);
app.component('add-student', AddStudent);
app.component('student-contact', StudentContact);
app.mount('#app');
