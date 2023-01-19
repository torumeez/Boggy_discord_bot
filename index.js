const Discord = require('discord.js');
const ytdl = require('ytdl-core');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === '!play') {
    
    if (msg.member.voice.channel) {
      
      msg.member.voice.channel.join()
        .then(connection => {
          
          const stream = ytdl('https://www.youtube.com/watch?v=dQw4w9WgXcQ', { filter: 'audioonly' });
          const dispatcher = connection.play(stream);
        })
        .catch(console.error);
    } else {
      msg.reply('You need to join a voice channel first!');
    }
  }
});

client.login('MTA2NDk2MzYyMzI1ODE2NTM0OQ.GgwtFL.pWASznll64E9OQ5KG_zbX6ocUWUBk0xjLDw8DM');

