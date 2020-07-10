<template>
	<div id='earth'>
		<h2>Earth</h2>

		<input v-model='latitude' type='text' placeholder='Latitude'>
		<input v-model='longitude' type='text' placeholder='Longitude'>
		<input v-model='dim' type='text' placeholder='Width and height of image in degrees'>
		<input v-model='date' type='text' placeholder='Date (YYYY-MM-DD)'>

		<button v-on:click='getData()'>send</button>

		<div id='result'>
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
            .then(res => this.showResponse(res));
      },
      showResponse(res) {
        this.result.url = res.data.url;
      }
    }
  };

</script>

<style>
	#earth {
		display: flex;
		flex-direction: column;
		width: 150px;
		margin: auto;
		justify-content: center;
		padding: 5px;
	}

	#result {
		margin-top: 30px;
	}

	#result > h3 {
		margin: 50px 100px 20px;
	}

	#earth > input {
		margin-top: 5px;
	}

	#earth > button {
		height: 30px;
		width: 100%;
		border-radius: 5px;
		margin-top: 10px;
	}
</style>
