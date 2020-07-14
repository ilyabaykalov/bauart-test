<template>
	<div class='menu'>
		<h2>Menu</h2>
		<div class='buttons'>
			<button>
				<router-link to='/apod'>APOD</router-link>
			</button>
			<button>
				<router-link to='/earth'>Earth</router-link>
			</button>
			<button>
				<router-link to='/mars'>Mars Weather</router-link>
			</button>
			<div class='chats'>
				<button>
					<router-link :to="{ name: 'chat', params: { chatRoomId: 1 }}">Chatroom #1</router-link>
				</button>
				<button>
					<router-link :to="{ name: 'chat', params: { chatRoomId: 2 }}">Chatroom #2</router-link>
				</button>
				<button>
					<router-link :to="{ name: 'chat', params: { chatRoomId: 3 }}">Chatroom #3</router-link>
				</button>
			</div>
			<button>
				<router-link to='/chart'>Chart</router-link>
			</button>
		</div>
	</div>
</template>

<style lang='scss'>
	.menu {
		.buttons {
			display: flex;
			justify-content: center;
		}

		.chats{
			display: flex;
			flex-direction: column;

			button{
				margin-bottom: 5px;
			}
		}

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
