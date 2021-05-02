const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = async (client, message) => {
const davet = new Discord.RichEmbed()
.setColor("RANDOM")
.setAuthor("» " + client.user.username + ' | Davet Linkleri')
.setDescription(`[Botu Sunucuna Eklemek İçin Tıkla!](https://discord.com/oauth2/authorize?client_id=837858580799422485&permissions=0&scope=bot) \n[Botun Destek Sunucusuna Gelmek İçin Tıkla](https://discord.gg/JwSQzDn)`)
message.channel.send(davet)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['linkler'],
  permLevel: `Yetki gerekmiyor.`
};

exports.help = {
  name: 'davet',
  category: 'bot',
  description: 'Botun davet linklerini gösterir.',
  usage: 'r?davet'
};