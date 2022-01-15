<template>
	<student-contact
		v-for="student in students"
		v-bind:key="student"
		v-bind:student="student"
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
};
</script>

<style scoped></style>
