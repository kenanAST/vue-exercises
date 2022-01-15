<template>
	<student-contact
		v-for="student in students"
		v-bind:key="student"
		v-bind:student="student"
		@toggle-favorite="toggleFavoriteStatus"
	></student-contact>
	<input type="number" v-model="length" />
	<input type="text" v-model="length" />
	<h1>{{ length }}</h1>
</template>

<script>
export default {
	data() {
		return {
			length: 25,
			width: 10,
			students: [
				{
					firstName: 'Joshua Kenan',
					lastName: 'Cinches',
					age: 20,
					email: 'kenanjoshua3454@gmail.com',
					isfavorite: true,
				},
				{
					firstName: 'Kenan Joshua',
					lastName: 'Sanchoez',
					age: 21,
					email: 'test@g.msuiit.edu.ph',
					isfavorite: false,
				},
			],
		};
	},
	methods: {
		toggleFavoriteStatus(name) {
			const identifiedStudent = this.students.find(
				(student) => student.firstName === name
			);
			identifiedStudent.isfavorite = !identifiedStudent.isfavorite;
		},
	},
};
</script>

<style scoped></style>
