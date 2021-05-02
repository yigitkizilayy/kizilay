const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const eğlence = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor(" Kızılay v12 sürümüyle sizlerle")
.setTitle(" ➤Kızılay Moderasyon komutları" )
 .setTimestamp()
.setDescription(" **k.ping** : Botun pingini gösterir \n  **k.forceban** \n  **k.ban** \n **k.unban** \n **k.id** \n **k.küfür** \n **k.is** \n **k.sa-as** \n **k.kick** \n **k.sunucubilgi** \n **k.sil** \n **k.profil** \n **k.token** \n **k.yetkilerim** \n **k.link** \n  **k.üyedurum**\n **k.afk** \n **k.davet** ")
.setImage("")
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