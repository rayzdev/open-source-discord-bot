const Discord = require('discord.js')

module.exports = {
    name: "avatar",
    description: "shows the avatar of the mentioned user",
    aliases: ["av", "pfp", "profilepic", "icon"],
    timeout: 1,
    category: "info",
    usage: "[ command | @user ]",
    run: async(client, message, args) => {
        const user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

        message.channel.send(new Discord.MessageEmbed()
        .setTitle(`${user.user.username}'s avatar`)
        .setImage(user.user.avatarURL({ dynamic: true, format: 'png', size: 1024 }))
        .setColor("BLACK")
        .setTimestamp()
        .setFooter("developed by rayz#4986", "https://imgur.com/UnVOl7V.png"))
    }
}