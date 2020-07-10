<template>
	<div class='apod'>
		<h2>APOD</h2>

		<div class='form'>
			<input v-model='date' type='text' placeholder='Date (YYYY-MM-DD)'>
			<label>HD?<input v-model='isHD' type='checkbox'></label>

			<button v-on:click='getData'>send</button>
		</div>

		<div class='result'>
			<h2>{{ result.title }}</h2>
			<h3>{{ result.explanation }}</h3>
			<img :src='result.url' alt=''>
		</div>
	</div>
</template>

<script>
  export default {
    name: 'APOD',
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
        this.axios
            .get(`https://api.nasa.gov/planetary/apod?date=${ this.date }&api_key=${ this.apiKey }`)
            .then(this.showResponse)
            .catch(console.error);
      },
      showResponse(res) {
        this.result.title = res.data.title;
        this.result.explanation = res.data.explanation;
        this.result.url = this.isHD ? res.data.hdurl : res.data.url;
      }
    }
  };
</script>

<style lang='scss'>
	.apod {
		.form {
			width: 150px;
			display: flex;
			flex-direction: column;
			margin: auto;
		}

		input {
			margin-top: 5px;
		}

		button {
			height: 30px;
			width: 100%;
			margin-top: 10px;
			border-radius: 5px;
		}

		.result {
			margin-top: 30px;

			h3 {
				margin: 30px 100px 20px;
			}
		}
	}
</style>
