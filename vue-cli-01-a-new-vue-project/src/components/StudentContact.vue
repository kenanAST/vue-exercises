<template>
	<section>
		<div>
			<h1>Students</h1>
			<ul v-for="student in students" v-bind:key="student">
				<li v-for="attribute in student" v-bind:key="attribute">
					{{ attribute }}
				</li>
			</ul>
		</div>
	</section>
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
				},
				{
					firstName: 'Trisha Mae',
					lastName: 'Juntado',
					age: 21,
					email: 'trishamae.juntado@g.msuiit.edu.ph',
				},
			],
		};
	},
};
</script>

<style scoped></style>
