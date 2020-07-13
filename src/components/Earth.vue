<template>
	<div class='earth'>
		<h2>Earth</h2>

		<div class='form'>
			<input v-model='latitude' type='text' placeholder='Latitude'>
			<input v-model='longitude' type='text' placeholder='Longitude'>
			<input v-model='dim' type='text' placeholder='Width and height of image in degrees'>
			<input v-model='date' type='date' placeholder='Date (YYYY-MM-DD)'>

			<button v-on:click='getData()'>send</button>
		</div>

		<p class='error' v-show='this.isError'>{{ errorMessage }}</p>

		<div class='result' v-show='isLoaded'>
			<img :src='result.url' alt='' @load='loaded'>
		</div>

		<Preloader v-show='isLoading'/>
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
        latitude: '',
        longitude: '',
        dim: '',
        result: {
          url: ''
        },
        errorMessage: ''
      };
    },
    methods: {
      getData() {
        this.isLoading = true;
        this.isLoaded = false;
        this.axios
            .get(`https://api.nasa.gov/planetary/earth/assets?lon=${ this.longitude }&lat=${ this.latitude }${ this.dim !== '' ? `&dim=${ this.dim }` : '' }&date=${ this.date }&api_key=${ this.apiKey }`)
            .then(res => {
              this.result.url = res.data.url;

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
            .post('http://localhost:3000/earth', result)
            .then(res => {
              console.log(res.data.jsonPath);
            })
            .catch(err => {
              throw new Error(`Ошибка отправки данных на сервер\n ${ err }`);
            });
      },
      loaded() {
        this.isLoaded = true;
        this.isLoading = false;
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

		.error {
			font-size: 24pt;
			color: red;
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
