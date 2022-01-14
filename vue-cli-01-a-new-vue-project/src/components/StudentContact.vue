<template>
	<section>
		<div>
			<h1>Students</h1>
			<button @click="toggleVisibility">Show Students</button>
			<div v-if="detailsVisibility">
				<ul v-for="student in students" v-bind:key="student">
					<li v-for="attribute in student" v-bind:key="attribute">
						{{ attribute }}
					</li>
				</ul>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	data() {
		return {
			detailsVisibility: false,
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
	methods: {
		toggleVisibility() {
			this.detailsVisibility = !this.detailsVisibility;
			console.log(this.detailsVisibility);
		},
	},
};
</script>

<style scoped></style>
