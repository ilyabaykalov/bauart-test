<template>
	<div class='earth'>
		<h2>Earth</h2>

		<div class='form'>
			<input v-model='latitude' type='text' placeholder='Latitude'>
			<input v-model='longitude' type='text' placeholder='Longitude'>
			<input v-model='dim' type='text' placeholder='Width and height of image in degrees'>
			<input v-model='date' type='text' placeholder='Date (YYYY-MM-DD)'>

			<button v-on:click='getData()'>send</button>
		</div>
		<div class='result'>
			<img :src='result.url' alt=''>
		</div>
	</div>
</template>

<script>
  import axios from 'axios';

  export default {
    name: 'APOD',
    data() {
      return {
        apiKey: 'e6XkhwrUrjGJZZZg5bAOUGCAuGOJMQF1kPwgn91q',
        date: '',
        latitude: '',
        longitude: '',
        dim: '',
        result: {
          url: ''
        }
      };
    },
    methods: {
      getData() {
        axios
            .get(`https://api.nasa.gov/planetary/earth/assets?lon=${ this.longitude }&lat=${ this.latitude }&dim=${ this.dim }&date=${ this.date }&api_key=${ this.apiKey }`)
            .then(res => this.result.url = res.data.url)
            .catch(console.error);
      }
    }
  };

</script>

<style lang='scss'>
	.earth {
		display: flex;
		flex-direction: column;

		.form {
			display: flex;
			flex-direction: column;
			width: 150px;
			margin: auto;
			padding: 5px;
		}

		input {
			margin-top: 5px;
		}

		button {
			height: 30px;
			width: 100%;
			border-radius: 5px;
			margin-top: 10px;
		}

		.result {
			display: flex;
			flex-direction: column;

			img {
				width: 60vh;
				margin: auto;
			}
		}
	}
</style>
