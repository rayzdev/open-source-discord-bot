const Discord = require('discord.js')

module.exports = {
    name: "nuke",
    description: "deletes all message in a channel",
    aliases: ["nukechannel"],
    timeout: 1,
    category: "moderation",
    usage: "[ command ]",
    run: async(client, message, args) => {
        if (!message.member.hasPermission('MANAGE_CHANNELS')) {
            return message.channel.send(new Discord.MessageEmbed()
            .setDescription("You don't have permission to nuke channels.")
            .setColor("RED")
            .setTimestamp()
            .setFooter("developed by rayz#4986", "https://imgur.com/UnVOl7V.png"))
        }

        let clearchannel = message.channel
        var position = clearchannel.position; 
        newChannel = await clearchannel.clone()
        newChannel.setPosition(position)
        clearchannel.delete()

        newChannel.send(new Discord.MessageEmbed()
        .setTitle("Nuked!")
        .setDescription("This channel has been nuked.")
        .setColor("GREEN")
        .setTimestamp()
        .setFooter("developed by rayz#4986", "https://imgur.com/UnVOl7V.png"))
    }
}