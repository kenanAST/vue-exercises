app = Vue.createApp({
	data() {
		return {
			length: null,
			width: null,
			td: [],
		};
	},
	methods: {
		// createTable() {
		// 	this.length = parseInt(this.length);
		// 	this.width = parseInt(this.width);
		// 	this.displayTable = true;
		// },
	},
});

app.mount('#multiplicationTable');
