Vue.createApp({
	data() {
		return {
			taskList: [],
			taskInput: '',
			joshuaKenan: 'Kenan Cinchess',
			vueLink: 'https://google.com',
		};
	},
	methods: {
		addTask() {
			if (/\S/.test(this.taskInput)) {
				this.taskList.push(this.taskInput);
			}
			this.taskInput = '';
		},
		deleteTask(task) {
			this.taskList.splice(this.taskList.indexOf(task), 1);
		},
	},
}).mount('#app');
