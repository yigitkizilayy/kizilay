const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const eğlence = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor(" Kızılay v12 sürümüyle sizlerle")
.setTitle(" ➤Kızılay Moderasyon komutları" )
 .setTimestamp()
.setDescription(" **k.ping** : Botun pingini gösterir \n  **k.forceban** \n  **k.ban** \n **k.unban** \n **m!id** \n **m!küfür** \n **m!is** \n **m!sa-as** \n **m!kick** \n **m!sunucubilgi** \n **m!sil** \n **m!profil** \n **m!token** \n **m!yetkilerim** \n **m!link** \n  **m!üyedurum**\n **m!afk** \n **m!davet** ")
.setImage("https://im7.ezgif.com/tmp/ezgif-7-2484e616a2d9.gif")
message.channel.send(eğlence)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: [],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'moderasyon',
  category: 'moderasyon',
  description: 'Yardım Menüsü.',
   usage:'moderasyon'
}