const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, args) => {
  let user = message.mentions.users.first();
  if(!user) return message.channel.send('**Kime El Hareketi Çekeceğimi Yazmalısın**');
  message.delete();
    if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL())
    .addField('**Eğlence Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.send(ozelmesajuyari); }
    if (message.channel.type !== 'dm') {
      const sunucubilgi = new Discord.MessageEmbed()
  
    .setColor(0xFF0000)
    .setFooter("Nah çıktı!!")
    .setDescription(`<@${message.author.id}>` + ` <@${user.id}> ` + "`a nah çekti!!")
        .setImage("https://cdn.discordapp.com/attachments/838192890898677763/838274340461084682/indir.jpg")
    return message.channel.send(sunucubilgi);
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'nahçek',
  description: 'Polisi Arar (ciddiye almayın)',
  usage: 'nahçek'
};