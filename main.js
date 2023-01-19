const Discord = require('discord.js');
const client = new Discord.Client();
const ytdl = require('ytdl-core');

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', async message => {
    if (message.content === '!play') {
        if (!message.member.voice.channel) return message.channel.send('You need to be in a voice channel to play music!');
        const connection = await message.member.voice.channel.join();
        const stream = ytdl(args[1], { filter: 'audioonly' });
        const dispatcher = connection.play(stream);

        dispatcher.on('start', () => {
            console.log('Music started!');
        });

        dispatcher.on('finish', () => {
            console.log('Music finished!');
            connection.disconnect();
        });
    }
});

client.login('your_token_here');
