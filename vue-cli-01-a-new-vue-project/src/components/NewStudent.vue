<template>
	<form @submit.prevent="addStudent">
		<input
			type="text"
			v-model="student.firstName"
			placeholder="Enter First Name"
		/><br />
		<input
			type="text"
			v-model="student.lastName"
			placeholder="Enter Last Name"
		/><br />
		<input
			type="number"
			v-model="student.age"
			placeholder="Enter age"
		/><br />
		<input
			type="email"
			v-model="student.email"
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
			student: {
				firstName: '',
				lastName: '',
				age: 0,
				email: '',
			},
		};
	},
	methods: {
		addStudent() {
			this.$emit('create-student', this.student);
		},
	},
};
</script>
