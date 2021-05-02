const Discord = require('discord.js');
const db = require('quick.db')
module.exports.run = async (bot, message, args, member, client, level) => {
  const dogrulandi = bot.emojis.find(emoji => emoji.name === ":heavy_check_mark:");
  if (!message.member.hasPermission("ADMINISTRATOR"))
  if (!message.member.hasPermission("MANAGE_ROLES"))
  if (!message.member.roles.find('name', '🍷')) return message.channel.send('Bu komutu sadece <@&666717951038193699> kullanabilir.');
  let user = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if (!user) return message.reply("Kardeş kime vercem rolü? Etiketlesene");
  user.addRole('666658680506417152')
const ky = new Discord.RichEmbed()
        .setDescription(`${user}, <@&666658680506417152> rolü başarıyla verildi.`)
        message.channel.send(ky)
        message.react(dogrulandi)
  
} 
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["vip-ver"],
    permLevel: 0
}
exports.help = {
    name: 'vip',
    description: 'vip',
    usage: 'vip'
}