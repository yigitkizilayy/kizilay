const Discord = require('discord.js');

exports.run = async(client, message) => {
     
      const vatan = new Discord.MessageEmbed()
    .setAuthor('Mustafa Kemal Atatürkü Anıyoruz.')
    .setColor(3447003)
        .setImage(`https://media1.giphy.com/media/VFenWoKKujt7GQ1eMS/giphy.gif`)
    return message.channel.send(vatan);
    
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
//
exports.help = {
  name: 'atatürk',
  description: '',
  usage: ''
};