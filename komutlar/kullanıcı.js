const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const kullanıcı = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor("Kızılay Beta bot ")
.setTitle(" ➤Kızılay Beta Kullanıcı Komutları ")
 .setTimestamp()
.setDescription(" **k.avatar** = Avatarınıza bakarsınız.  \n  **k.yetkilerim** = Yetkilerini görürsün. \n  **k.profil** = Profilini görürsün.  \n **k.sunucuresmi** = Sunucu resmini gösterir.  \n  **k.ping** = Botun Pingine Bakarsın. \n **k.id** = Birisinin id'sine Bakarsın. \n  **k.davet** = Beni Sunucuna Ekle.  \n  **k.botbilgi** = Bot istatistiklerini görürsünüz.  ")
.setImage("https://cdn.discordapp.com/attachments/790999702765961258/791798016583008297/wp2490739.png")
message.channel.send(kullanıcı)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: [],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'kullanıcı',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'!kullanıcı'
}