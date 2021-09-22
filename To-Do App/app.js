Vue.createApp({
	data() {
		return {
			taskList: [],
			taskInput: '',
		};
	},
	methods: {
		addTask() {
			this.taskList.push(this.taskInput);
			this.taskInput = '';
		},
		deleteTask(task) {
			this.taskList.splice(this.taskList.indexOf(task), 1);
		},
	},
}).mount('#app');
