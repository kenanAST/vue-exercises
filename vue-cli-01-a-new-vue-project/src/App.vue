<template>
	<student-contact
		v-for="student in students"
		v-bind:key="student"
		v-bind:student="student"
		@toggle-favorite="toggleFavoriteStatus"
	></student-contact>
	<h1></h1>
</template>

<script>
export default {
	data() {
		return {
			students: [
				{
					firstName: 'Joshua Kenan',
					lastName: 'Cinches',
					age: 20,
					email: 'kenanjoshua3454@gmail.com',
					isfavorite: true,
				},
				{
					firstName: 'Trisha Mae',
					lastName: 'Juntado',
					age: 21,
					email: 'trishamae.juntado@g.msuiit.edu.ph',
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
