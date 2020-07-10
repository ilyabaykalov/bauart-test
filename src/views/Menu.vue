<template>
	<div class='menu'>
		<h2>Menu</h2>

		<button>
			<router-link to='/apod'>APOD</router-link>
		</button>
		<button>
			<router-link to='/earth'>Earth</router-link>
		</button>
		<button>
			<router-link to='/mars'>Mars Weather</router-link>
		</button>
	</div>
</template>

<style lang='scss'>
	.menu {
		button {
			height: 30px;
			width: max-content;
			border-radius: 5px;
			margin: 0 5px;

			a {
				text-decoration: none;
				color: #2c3e50;
			}
		}
	}
</style>
