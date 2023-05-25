
import TOKEN from "./.env"
const { Client, GatewayIntentBits } = require('discord.js');
const dotenv = require('dotenv');

const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
		GatewayIntentBits.GuildMembers,
	],
});

const token = process.env.TOKEN;

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
