const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
 message.channel.send({embed: {
		  file:"https://media.tenor.com/images/6c277aa2bc6a70e39d62351b400feaba/tenor.gif",
          color: 0xD97634,
		  description: "**:peach: twerk vakti !**"
            }});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['p'],
  permLevel: 0
};

exports.help = {
  name: 'twerk',
  description: 'kedileri gösterir.',
  usage: 'twerk'
};
