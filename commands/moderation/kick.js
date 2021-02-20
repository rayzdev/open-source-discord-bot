const Discord = require('discord.js');

module.exports = {
    name: "kick",
    description: "kicks a user",
    aliases: ["k"],
    timeout: 1,
    category: "moderation",
    usage: "[ command | @user | <reason> ]",
    run: async(client, message, args) => {
        if (!message.member.hasPermission('KICK_MEMBERS')) {
        return message.channel.send(new  Discord.MessageEmbed()
        .setDescription(`You don't have permission to kick members.`)
        .setColor("RED")
        .setTimestamp()
        .setFooter("developed by rayz#4986", "https://imgur.com/UnVOl7V.png"))    
        }

        if (!args[0]) {
        return message.channel.send(new Discord.MessageEmbed()
        .setDescription(`
        **Description:** kicks a user
        **Aliases:** k
        **Category:** moderation
            
        **Usage:**
        .kick <user> (reason)`)
        .setColor("BLUE")
        .setTimestamp()
        .setFooter("Usage Syntax: <needed> | (optional)", client.user.displayAvatarURL()))
        }

        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        let logchannel = message.guild.channels.cache.get("811046711140941844")
        let reason = args.slice(1).join(" ")

        try {
        await member.kick();
        await message.channel.send(new Discord.MessageEmbed()
        .setTitle("Success!")
        .setDescription(`${member} has been kicked`)
        .setColor("GREEN")
        .setTimestamp()
        .setFooter("developed by rayz#4986", "https://imgur.com/UnVOl7V.png"))
        logchannel.send(new Discord.MessageEmbed()
        .setDescription(`${member} was kicked by: <@${message.author.id}>
        
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