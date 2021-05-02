const Discord = require('discord.js')
 
exports.run = async (client ,message, args) =>{

  
  const embed = new Discord.MessageEmbed()
  .setTitle(" :peach: Twerk Vakti!")
  .setImage("https://cdn.discordapp.com/attachments/838192890898677763/838266465630027866/tw.gif")
  .setColor(0xFF0000)
   .setFooter(
      `
${message.author.username} Tarafından İstendi.`,
      message.author.avatarURL
    );
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
 