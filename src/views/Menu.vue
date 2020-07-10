<template>
	<div id='menu'>
		<h2>Menu</h2>

		<button onclick='document.location="/apod"'>APOD</button>
		<button onclick='document.location="/earth"'>Earth</button>
		<button onclick='document.location="/mars"'>Mars Weather</button>
	</div>
</template>

<style>
	.menu > button {
		height: 30px;
		width: max-content;
		border-radius: 5px;
		margin: 0 5px;
	}

	.menu > button > a {
		text-decoration: none;
		color: #2c3e50;
	}
</style>
