<template>
	<div class='chat'>
		<h2>{{ room }}</h2>
		<h3>Ваш ник: {{ name }}</h3>
		<div class='text'>
			<input ref='text' type='text' placeholder='text message' value='hello world'>
			<button @click='sendMsg'>send</button>
		</div>
		<p v-for='({date, name, text}, i) in messages' :key='i'>
			{{ date }} ({{ name }}): {{ text }}
		</p>
	</div>
</template>

<script>
  import client from 'socket.io-client';
  let io;

  import moment from 'moment';

  export default {
    name: 'Chat',
    data() {
      return {
        room: `chatroom #${ this.$route.params.chatRoomId }`,
        name: '',
        messages: []
      };
    },
    mounted() {
      io = client.connect('http://localhost:3000');

      while (!this.name) {
        this.name = prompt('Как Вас зовут?');
      }

      io.emit('userJoined', {
        name: this.name,
        room: this.room
      });

      io.on('message', (message) => {
        this.messages.push({
          name: message.name,
          date: moment(message.date).utc(true).format('DD.MM.YYYY HH:mm'),
          text: message.text
        });
      });
    },
    beforeDestroy() {
      io.disconnect();
    },
    methods: {
      sendMsg() {
        const message = {
          name: this.name,
          room: this.room,
          text: this.$refs.text.value
        };
        io.emit('message', message);
      }
    }
  };
</script>

<style lang='scss'>
	.chat {
		width: 400px;
		margin: auto;

		.name {
			width: 50%;
		}

		.text {
			width: 50%;
			display: flex;
			margin: 5px auto;

			input {
				width: 100%;
				margin-right: 5px;
			}
		}

		p {
			width: 100%
		}
	}
</style>
