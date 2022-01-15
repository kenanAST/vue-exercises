<template>
	<form @submit.prevent="addStudent">
		<input
			type="text"
			v-model="students.firstName"
			placeholder="Enter First Name"
		/><br />
		<input
			type="text"
			v-model="students.lastName"
			placeholder="Enter Last Name"
		/><br />
		<input
			type="number"
			v-model="students.age"
			placeholder="Enter age"
		/><br />
		<input
			type="email"
			v-model="students.email"
			placeholder="Enter email"
		/><br />
		<button>Add Student</button>
	</form>
</template>

<script>
export default {
	emits: ['create-student'],
	data() {
		return {
			students: {
				firstName: '',
				lastName: '',
				age: '',
				email: '',
				isfavorite: true,
			},
		};
	},
	methods: {
		clearForm() {
			(this.students.firstName = ''),
				(this.students.lastName = ''),
				(this.students.age = ''),
				(this.students.email = '');
		},
		addStudent() {
			alert('brrt');
			this.$emit('create-student', this.students);
			this.clearForm();
		},
	},
};
</script>
