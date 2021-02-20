const Discord = require('discord.js');

module.exports = {
    name: "ban",
    description: "bans a user",
    aliases: ["b"],
    timeout: 1,
    category: "moderation",
    usage: "[ command | @user | <reason> ]",
    run: async(client, message, args) => {
        if (!message.member.hasPermission('BAN_MEMBERS')) {
        return message.channel.send(new  Discord.MessageEmbed()
        .setDescription(`You don't have permission to ban members.`)
        .setColor("RED")
        .setTimestamp()
        .setFooter("developed by rayz#4986", "https://imgur.com/UnVOl7V.png"))    
        }

        if (!args[0]) {
        return message.channel.send(new Discord.MessageEmbed()
        .setDescription(`
        **Description:** bans a user
        **Aliases:** b
        **Category:** moderation
                
        **Usage:**
        .ban <user> (reason)`)
        .setColor("BLUE")
        .setTimestamp()
        .setFooter("Usage Syntax: <needed> | (optional)", client.user.displayAvatarURL()))
        }

        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        let logchannel = message.guild.channels.cache.get("811046711140941844")
        let reason = args.slice(1).join(" ")

        try {
        await member.ban();
        await message.channel.send(new Discord.MessageEmbed()
        .setTitle("Success!")
        .setDescription(`${member} has been banned`)
        .setColor("GREEN")
        .setTimestamp()
        .setFooter("developed by rayz#4986", "https://imgur.com/UnVOl7V.png"))
        logchannel.send(new Discord.MessageEmbed()
        .setDescription(`${member} was banned by: <@${message.author.id}>
        
        **Reason**: ${reason}`)
        .setColor("BLUE")
        .setTimestamp()
        .setFooter("logged"))
        } catch (e) {
            return message.channel.send(new Discord.MessageEmbed()
            .setTitle("Error!")
            .setColor("RED")
            .setDescription("Something went wrong, please try again.")
            .setTimestamp()
            .setFooter("developed by rayz#4986", "https://imgur.com/UnVOl7V.png"))
            
        }

    }
}