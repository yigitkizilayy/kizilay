const Discord = require('discord.js')
 
exports.run = async (client ,message, args) =>{

  
  const embed = new Discord.MessageEmbed()
  .setTitle("adamdır")
.setImage("")
  .setColor(0xFF0000)
message.delete()
  message.channel.send(embed)
};
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['ping'],
 permLevel: 0
};
 
exports.help = {
 name: 'samet',
 description: 'samet',
 usage: 'samet'
};
 