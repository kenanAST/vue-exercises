<template>
	<section>
		<div class="student-card">
			<h3>
				{{ student.firstName }} {{ student.lastName }}
				{{ student.isfavorite ? 'Favorite' : '' }}
			</h3>
			<button @click="toggleFavorite">Toggle Favorite</button>
			<button @click="toggleVisibility">Show details</button>
			<div v-if="detailsVisibility">
				<ul>
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
	// props: ['firstName', 'lastName', 'age', 'email'],
	props: {
		student: Object,
	},

	// emits: ['toggle-favorite'],

	emits: ['toggle-favorite'],

	data() {
		return {
			detailsVisibility: false,
		};
	},
	methods: {
		toggleVisibility() {
			this.detailsVisibility = !this.detailsVisibility;
			console.log(this.detailsVisibility);
		},
		toggleFavorite() {
			this.$emit('toggle-favorite', this.student.firstName);
		},
	},
};
</script>

<style>
li {
	text-align: left;
}
.student-card {
	margin: 20px;
	padding: 20px;
	text-align: center;
	background-color: beige;
	max-width: 25%;
}
body {
	background-color: white;
}
</style>
