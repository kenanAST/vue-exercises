<template>
	<add-student @create-student="createStudent"></add-student>
	<student-contact
		v-for="student in students"
		:key="student"
		:student="student"
		@toggle-favorite="toggleFavoriteStatus"
	></student-contact>
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
		createStudent(student) {
			this.students.push(student);
		},

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
