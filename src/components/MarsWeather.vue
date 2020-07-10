<template>
	<div>
		<h2>Mars Weather</h2>

		<table class='data-table'>
			<thead class='head'>
			<tr>
				<th colspan='2'>Time</th>
				<th colspan='3'>Air Temperature</th>
				<th colspan='4'>Wind Speed</th>
				<th colspan='3'>Pressure</th>
			</tr>
			</thead>
			<tbody>
			<tr>
				<th class='date'>Date</th>
				<th class='sol'>Sol</th>
				<td class='max'>Max</td>
				<td class='avg'>Avg</td>
				<td class='min'>Min</td>
				<td class='max'>Max</td>
				<td class='avg'>Avg</td>
				<td class='min'>Min</td>
				<td class='dir'>Direction<br><span style='font-size:x-small'>(most common)</span></td>
				<td class='max'>Max</td>
				<td class='avg'>Avg</td>
				<td class='min'>Min</td>
			</tr>
			<tr v-for='(item, i) in result' :key='i'>
				<th class='date'>{{ item.date }}</th>
				<th class='sol'>{{ item.solar }}</th>
				<td class='max'>{{ item.airTemperature.max }}</td>
				<td class='avg'>{{ item.airTemperature.avg }}</td>
				<td class='min'>{{ item.airTemperature.min }}</td>
				<td class='max'>{{ item.windSpeed.max }}</td>
				<td class='avg'>{{ item.windSpeed.avg }}</td>
				<td class='min'>{{ item.windSpeed.min }}</td>
				<td class='dir'>{{ item.windSpeed.direction }}</td>
				<td class='max'>{{ item.pressure.max }}</td>
				<td class='avg'>{{ item.pressure.avg }}</td>
				<td class='min'>{{ item.pressure.min }}</td>
			</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
  import axios from 'axios';
  import moment from 'moment';

  export default {
    name: 'APOD',
    data() {
      return {
        apiKey: 'e6XkhwrUrjGJZZZg5bAOUGCAuGOJMQF1kPwgn91q',
        result: [{
          date: '',
          solar: '',
          airTemperature: {
            max: '',
            avg: '',
            min: ''
          },
          windSpeed: {
            max: '',
            avg: '',
            min: '',
            direction: ''
          },
          pressure: {
            max: '',
            avg: '',
            min: ''
          }
        }]
      };
    },
    mounted() {
      axios
          .get('https://api.nasa.gov/insight_weather/?ver=1.0&feedtype=json&api_key=e6XkhwrUrjGJZZZg5bAOUGCAuGOJMQF1kPwgn91q')
          .then(res => this.parseResponse(res))
          .then(parsedRes => {
            this.result = parsedRes;
          })
          .catch(console.error);
    },

    methods: {
      parseResponse(res) {
        let data = res.data;
        let parsedData = [];

        if (data) {
          let solKeys = data['sol_keys'];
          solKeys.forEach(solar => {
            let date = moment(data[solar]['Last_UTC']).utc().format('MMMM D, Y');

            let airTemperature = {};
            airTemperature.max = data[solar].AT.mx.toFixed(2);
            airTemperature.avg = data[solar].AT.av.toFixed(2);
            airTemperature.min = data[solar].AT.mn.toFixed(2);

            let windSpeed = {};
            windSpeed.max = data[solar].HWS.mx.toFixed(2);
            windSpeed.avg = data[solar].HWS.av.toFixed(2);
            windSpeed.min = data[solar].HWS.mn.toFixed(2);
            windSpeed.direction = data[solar].WD.most_common.compass_point;

            let pressure = {};
            pressure.max = data[solar].PRE.mx.toFixed(2);
            pressure.avg = data[solar].PRE.av.toFixed(2);
            pressure.min = data[solar].PRE.mn.toFixed(2);

            parsedData.push({ date, solar, airTemperature, windSpeed, pressure });
          });
        }
        return parsedData;
      }
    }
  };

</script>

<style lang='scss'>
	.data-table {
		width: 70%;
		margin: auto;

		.head, .date {
			background-color: rgba(226, 219, 79, 0.31);
		}

		.sol, .dir {
			background-color: rgba(226, 219, 79, 0.45);
		}

		.min {
			background-color: rgba(226, 219, 79, 0.62);
		}

		.avg {
			background-color: rgba(226, 219, 79, 0.71);
		}

		.max {
			background-color: rgba(226, 219, 79, 0.73);
		}
	}
</style>
