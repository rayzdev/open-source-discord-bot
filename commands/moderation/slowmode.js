const Discord = require('discord.js')

module.exports = {
    name: "slowmode",
    description: "sets the slowmode of a channel",
    aliases: [" "],
    timeout: 1,
    category: "moderation",
    usage: "[ command | time | <reason> ]",
    run: async(client, message, args) => {
        if(!message.member.hasPermission("MANAGE_CHANNELS")) {
        return message.channel.send(new Discord.MessageEmbed()
        .setDescription(`You don't have the required permission to use this command: __MANAGE_CHANNELS__`)
        .setColor("RED")
        .setTimestamp()
        .setFooter("developed by rayz#4986", "https://imgur.com/UnVOl7V.png"))
        }

        if (args[0] == "0"){
        await message.channel.setRateLimitPerUser(0)
        return message.channel.send(new Discord.MessageEmbed()
        .setTitle("Success!")
        .setDescription(`The slowmode of this channel has been turned off.`)
        .setColor("GREEN")
        .setTimestamp()
        .setFooter("developed by rayz#4986", "https://imgur.com/UnVOl7V.png"))
        }

        if (!args[0])
        return message.channel.send(new Discord.MessageEmbed()
        .setDescription(`
        **Description:** sets the slowmode of a channel
        **Aliases:** none
        **Category:** moderation
        
        **Usage:**
        .slowmode <duration> (reason)`)
        .setColor("BLUE")
        .setFooter("Usage Syntax: <needed> | (optional)", client.user.displayAvatarURL()))

        if (args[0] > 21600)
        return message.channel.send(new Discord.MessageEmbed()
        .setTitle("Invalid Usage")
        .setDescription(`Number must be between 0 - 21600`)
        .setColor("RED")
        .setTimestamp()
        .setFooter("developed by rayz#4986", "https://imgur.com/UnVOl7V.png"))

        if (isNaN(args[0]))
        return message.channel.send(new Discord.MessageEmbed()
        .setTitle("Invalid Usage")
        .setDescription(`This is not a number.`)
        .setColor("RED")
        .setTimestamp()
        .setFooter("developed by rayz#4986", "https://imgur.com/UnVOl7V.png"))

        let reason = args.slice(1).join(" ")

        if (args[0]){
        message.channel.setRateLimitPerUser(args[0])
        message.channel.send(new Discord.MessageEmbed()
        .setTitle("Success!")
        .setDescription(`The Slowmode of this channel has been set to **${args[0]}**s. Reason: ${reason}`)
        .setColor("GREEN")
        .setTimestamp()
        .setFooter("developed by rayz#4986", "https://imgur.com/UnVOl7V.png"))
        }
    } 
}