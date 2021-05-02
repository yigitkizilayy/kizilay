const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const eğlence = new Discord.MessageEmbed()
.setColor(0xFF0000)
.setAuthor(" Kızılay v12 sürümüyle sizlerle")
.setTitle(" Kızılay logo menüsü komutları" )
 .setTimestamp()
.setDescription(" **k!altın** \n **k!anime** \n **k!arrow** \n **k!banner**   \n **k!green** \n  **k!habbo** \n **k!kalın** \n  **k!neonmavi** \ ")
.setImage("https://cdn.discordapp.com/attachments/838192890898677763/838248673807826964/klogo.png")
message.channel.send(eğlence)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: [],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'logomenü',
  category: 'logomenü',
  description: 'Yardım Menüsü.',
   usage:'logomenü'
}