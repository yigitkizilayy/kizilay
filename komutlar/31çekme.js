const Discord = require('discord.js')
 
exports.run = async (client ,message, args) =>{
  if (message.author.id !== "802904082414043186") return message.reply(':no_entry: Sadece sahibim atabilir.');
  const embed = new Discord.MessageEmbed()
  .setTitle(" :banana: 31 Vakti!")
  .setImage("https://cdn.discordapp.com/attachments/838192890898677763/838439045389746226/giphy.gif")
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
 name: '31',
 description: 'Twerk atarsın',
 usage: '31'
};
 
 