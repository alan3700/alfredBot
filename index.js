const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
		GatewayIntentBits.GuildMembers,
	],
});

const token = 'MTExMTI5NDkxMjM1NzQ3ODU1Mg.GiGyTI.q-TF4HOtzwJO7k-ZkNJgo7Cntd9J8ASOZ6sk6w';

client.on('ready', () => {
  console.log('Félicitations, Alfred démarre !');
});

client.on('messageCreate', message => {
  console.log(message)
  if (message.content === '!ping') {
    message.reply('Salut '+ message?.user?.username);
  }
});

client.login(token);
