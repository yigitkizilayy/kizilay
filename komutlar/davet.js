const Discord = require('discord.js')
 
exports.run = async (client ,message, args) =>{

  
  const embed = new Discord.MessageEmbed()
  .setTitle("Davet Linkim!")
  .setImage("https://media.giphy.com/media/Azm6adiPlNG0RHONrF/giphy.gif")
  .setColor(0xFF0000)
  .setDescription(`https://discord.com/oauth2/authorize?client_id=837858580799422485&scope=bot&permissions=8`)
  .setFooter("2021 Kızılay Eğlence ve Moderasyon Botu ®")
  message.channel.send(embed)
};
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['ping'],
 permLevel: 0
};
 
exports.help = {
 name: 'davet',
 description: 'Botun Pingine Bakarsın',
 usage: 'davet'
};
 