
const { Client, GatewayIntentBits,VoiceChannel } = require('discord.js');
const ytdl = require('ytdl-core');
const ffmpeg = require('ffmpeg-static');
const dotenv = require('dotenv');

const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
		GatewayIntentBits.GuildMembers,
	],
});

const token = "MTExMTI5NDkxMjM1NzQ3ODU1Mg.GyV5Dr.daFQ6Vwu8dTahfPxtyJ6iaMXictV1hlPiAYdtE"

client.on('ready', () => {
  console.log('Félicitations, Alfred démarre !');
});

client.on('messageCreate', async message => {
  if (message.content.startsWith('!play')) {
    const voiceChannel = message.member.voice.channel;
    if (!voiceChannel) {
      return message.reply('Please join a voice channel first.');
    }

    const videoUrl = message.content.slice(6).trim();
    if (!ytdl.validateURL(videoUrl)) {
      return message.reply('Invalid YouTube URL.');
    }

    const connection = await voiceChannel.join();
    const stream = ytdl(videoUrl, { filter: 'audioonly' });
    const dispatcher = connection.play(stream);

    dispatcher.on('start', () => {
      message.channel.send(`Now playing: ${videoUrl}`);
    });

    dispatcher.on('finish', () => {
      voiceChannel.leave();
    });

    dispatcher.on('error', error => {
      console.error(error);
    });
  }
});
  

client.on('messageCreate', message => {
  if (message.content === '!ping') {
    message.reply('Salut '+ message?.user?.username);
  }
});

client.login(token);

//Bibouxe