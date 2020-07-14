<template>
	<div class='chart'>
		<canvas ref='canvas'></canvas>
		<div class='inputs'>
			<!--			<label for='realtime'>realtime<input id='realtime' type='checkbox'></label>-->

			<select ref='month' name='months'>
				<option value='0'>January</option>
				<option value='1'>March</option>
				<option value='2'>May</option>
				<option value='3'>July</option>
				<option value='4'>September</option>
				<option value='5'>November</option>
			</select>
			<input @input='sendData' ref='data' type='text' placeholder='input data'>
		</div>
	</div>
</template>

<script>
  import { Line } from 'vue-chartjs';

  export default {
    name: 'Chart',
    extends: Line,
    data() {
      return {
        chartData: {
          labels: ['January', 'March', 'May', 'July', 'September', 'November'],
          datasets: [
            {
              label: 'Какие-то данные',
              backgroundColor: '#956ed7',
              data: [53, 31, 40, 80, 92, 51]
            }
          ]
        }
      };
    },
    mounted() {
      this.renderChart(this.chartData);
    },
    methods: {
      sendData() {
        const selectedMonth = +this.$refs.month.value;
        this.chartData.datasets[0].data[selectedMonth] = +this.$refs.data.value;

        this.renderChart(this.chartData);
      }
    }
  };
</script>

<style lang='scss'>
	.chart {
		width: 50vw;
		margin: auto;

		canvas {
			width: 50%;
		}

		.inputs {
			margin-top: 15px;

			:nth-child(n) {
				margin: 5px;
			}
		}
	}
</style>
