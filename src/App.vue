<template>
	<div id='app'>
		<h1><a href='/'>BauArt Test</a></h1>
		<hr>
		<router-view/>
	</div>
</template>

<style>
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 60px;
	}

	h1 > a {
		text-decoration: none;
		color: #2c3e50
	}

	hr {
		width: 400px;
	}
</style>
