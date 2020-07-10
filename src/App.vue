<template>
	<div id='app'>
		<h1>BauArt Test</h1>
		<MarsWeather msg='MarsWeather'/>
	</div>
</template>

<script>
  import MarsWeather from './components/MarsWeather';

  export default {
    name: 'App',
    components: {
      MarsWeather
    }
  };
</script>

<style>
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 60px;
	}
</style>
