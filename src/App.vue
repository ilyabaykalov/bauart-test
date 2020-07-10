<template>
	<div id='app'>
		<h1>BauArt Test</h1>
		<APOD msg='APOD'/>
	</div>
</template>

<script>
  import APOD from './components/APOD';

  export default {
    name: 'App',
    components: {
      APOD
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
