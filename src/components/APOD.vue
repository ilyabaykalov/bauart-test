<template>
	<div class='apod'>
		<h2>APOD</h2>

		<div class='form'>
			<input v-model='date' type='date' placeholder='Date (YYYY-MM-DD)'>
			<label>HD?<input v-model='isHD' type='checkbox'></label>

			<button v-on:click='loading'>send</button>
		</div>

		<p class='error' v-show='this.isError'>{{ errorMessage }}</p>

		<div class='result' v-show='isLoaded'>
			<h2>{{ result.title }}</h2>
			<h3>{{ result.explanation }}</h3>
			<img :src='result.url' alt='' @load='loaded'>
		</div>

		<Preloader class='preloader' v-show='isLoading'/>
	</div>
</template>

<script>
  import Preloader from '@/components/Preloader';

  export default {
    name: 'APOD',
    components: { Preloader },
    data() {
      return {
        apiKey: 'e6XkhwrUrjGJZZZg5bAOUGCAuGOJMQF1kPwgn91q',
        isLoading: false,
        isLoaded: false,
        isError: false,
        date: '',
        isHD: false,
        result: {
          title: '',
          explanation: '',
          url: ''
        },
        errorMessage: ''
      };
    },
    methods: {
      getData() {
        this.axios
            .get(`https://api.nasa.gov/planetary/apod?${ this.date !== '' ? `date=${ this.date }` : '' }&api_key=${ this.apiKey }`)
            .then(res => {
              this.result.title = res.data.title;
              this.result.explanation = res.data.explanation;
              this.result.url = this.isHD ? res.data.hdurl : res.data.url;

              return this.result;
            })
            .then(this.sendDataToServer)
            .catch(err => {
              this.errorMessage = err.message;
              this.isError = true;
              this.isLoading = false;
            });
      },
      sendDataToServer(result) {
        this.axios
            .post('http://localhost:3000/apod', result)
            .then(res => {
              console.log(res.data.jsonPath, res.data.imagePath);
            })
            .catch(err => {
              throw new Error(`Ошибка отправки данных на сервер\n ${ err }`);
            });
      },
      loading() {
        this.isError = false;

        this.isLoading = true;
        this.isLoaded = false;

        this.getData();
      },
      loaded() {
        {
          this.isLoaded = true;
          this.isLoading = false;
        }
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

		.error {
			font-size: 24pt;
			color: red;
		}

		.result {
			margin-top: 30px;

			h3 {
				margin: 30px 100px 20px;
			}
		}
	}
</style>
