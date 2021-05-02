const Discord = require('discord.js')
 
exports.run = async (client ,message, args) =>{


  const embed = new Discord.MessageEmbed()
  .setTitle(" :peach: Twerk Vakti!")
  .setImage("https://media.tenor.com/images/f5a687bf24e4ab3f0a640aecf45ed87c/tenor.gif")
  .setColor(0xFF0000)
 
  message.channel.send(embed)
};
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['ping'],
 permLevel: 0
};
 
exports.help = {
 name: 'twerk',
 description: 'Twerk atarsın',
 usage: 'twerk'
};