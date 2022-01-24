<template>
	<div>
		<slot></slot>
	</div>
</template>

<script>
export default {};
</script>

<style scoped>
div {
	margin: 2rem auto;
	max-width: 30rem;
	border-radius: 12px;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
	padding: 1rem;
}

section div {
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.badge--admin {
	background-color: #810036;
	color: white;
}

.badge--author {
	background-color: #002c8a;
	color: white;
}
</style>
