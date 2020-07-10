<template>
	<div>
		<div id='apod'>
			<h2>{{ msg }}</h2>

			<input v-model='latitude' type='text' placeholder='Latitude'>
			<input v-model='longitude' type='text' placeholder='Longitude'>
			<input v-model='dim' type='text' placeholder='Width and height of image in degrees'>
			<input v-model='date' type='text' placeholder='Date (YYYY-MM-DD)'>

			<button v-on:click='getData()'>send</button>

		</div>
		<div id='result'>
			<img :src='result.url' alt='картиночка'>
		</div>
	</div>
</template>

<script>
  import axios from 'axios';

  export default {
    name: 'APOD',
    props: {
      msg: String
    },
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

<style scoped>
	#apod {
		display: flex;
		flex-direction: column;
		width: 150px;
		margin: auto;
		justify-content: center;
	}

	#result {
		margin-top: 30px;
	}

	#result > h3 {
		margin: 50px 100px 20px;
	}
</style>
