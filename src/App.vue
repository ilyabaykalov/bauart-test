<template>
	<div id='app'>
		<h1>BauArt Test</h1>
		<Earth msg='Earth'/>
	</div>
</template>

<script>
  import Earth from './components/Earth';

  export default {
    name: 'App',
    components: {
      Earth
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
