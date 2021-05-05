const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const eğlence = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor(" Kızılay v12 sürümüyle sizlerle")
.setTitle(" ➤Kızılay Moderasyon komutları" )
 .setTimestamp()
.setDescription(" **k.ping** : Botun pingini gösterir   **k!forceban** : Kişiyi ani banlar. \n  **k!ban** : Kişiyi banlar.  **k!unban** : Kişinin banını kaldırır. \n **k!id** : İdnize bakarsınız.  **k!küfür** : Küfür engeli açar. \n **k!is** : Botun bilgi menüsünü gösterir.  **k!sa-as** : Sa-as mnüsünü açar. \n **k!kick** : Kişiyi kickler.  **k!sunucubilgi** : Sunucunun bilgisini gösterir. \n **k!sil** : Belirtilen miktarda mesajı siler.  **k!profil** : Profilinizi gösterir. \n **k!token** : Botun tokenini gösterir.  **k!yetkilerim** : Yetkilerinizi gösterir. \n **k!link** : Link engeli açar.   **k!üyedurum** : Üyelerin durumunu gösterir. \n **k!afk** :AFK olursunuz.  **k!davet** : Botun davet linkini gösterir.")
.setImage("https://cdn.discordapp.com/attachments/838192890898677763/838248685560660018/kmod.png")
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