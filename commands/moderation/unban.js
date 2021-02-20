const Discord = require('discord.js')

module.exports = {
    name: "unban",
    description: "unbans a user from the guild",
    aliases: ["ub"],
    timeout: 1,
    category: "moderation",
    usage: "[ command | userID ]",
    run: async(client, message, args) => {
        if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(new Discord.MessageEmbed()
        .setDescription(`You don't have permission to unban members.`)
        .setColor("RED")
        .setTimestamp()
        .setFooter("developed by rayz#4986", "https://imgur.com/UnVOl7V.png"))

        const userID = args[0]
        if(!userID) return message.channel.send(new Discord.MessageEmbed()
        .setTitle("Invalid Usage")
        .setDescription(`Please provide a userID.`)
        .setColor("RED")
        .setTimestamp()
        .setFooter("developed by rayz#4986", "https://imgur.com/UnVOl7V.png"))

        message.guild.fetchBans().then(bans => {
            if(bans.size == 0) return 
            let bannedUser = bans.find(b => b.user.id == userID)

            if(bannedUser) {
                const embed = new Discord.MessageEmbed()
                .setTitle("User Unbanned")
                .setDescription(`<@${userID}> has been unbanned.`)
                .addField("Unbanned By:", message.author)
                .addField("UserID:", userID)
                .setColor("GREEN")
                .setTimestamp()
                .setFooter("developed by rayz#4986", "https://imgur.com/UnVOl7V.png")
                message.channel.send(embed).then(message.guild.members.unban(bannedUser.user))

            } else {
                message.channel.send(new Discord.MessageEmbed()
                .setTitle("Error!")
                .setDescription(`The userID is either invalid or this user is not banned.`)
                .setColor("RED")
                .setTimestamp()
                .setFooter("developed by rayz#4986", "https://imgur.com/UnVOl7V.png"))
            } 
        })

    }    
}