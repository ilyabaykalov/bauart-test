<template>
	<div>
		<div id='apod'>
			<h2>{{ msg }}</h2>

			<label>Date*<input v-model='date' type='text' placeholder='Date (YYYY-MM-DD)'></label>
			<label>HD?<input v-model='isHD' type='checkbox'></label>

			<button v-on:click='getData()'>send</button>

		</div>
		<div id='result'>
			<h2>{{ result.title }}</h2>
			<h3>{{ result.explanation }}</h3>
			<img :src='result.url' :alt='result.title'>
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
        isHD: false,
        result: {
          title: '',
          explanation: '',
          url: ''
        }
      };
    },
    methods: {
      getData() {
        axios
            .get(`https://api.nasa.gov/planetary/apod?date=${ this.date }&api_key=${ this.apiKey }`)
            .then(res => this.showResponse(res));
      },
      showResponse(res) {
        this.result.title = res.data.title;
        this.result.explanation = res.data.explanation;
        this.result.url = this.isHD ? res.data.hdurl : res.data.url;
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
