const Discord = require('discord.js')

module.exports = {
    name: "accept-suggestion",
    description: "accepts a suggestion",
    aliases: [" "],
    timeout: 1,
    category: "suggestions",
    usage: "[ command | suggestion-message id | <message> ]",
    run: async(client, message, args) => {
        message.delete()
        if(!message.member.hasPermission("MANAGE_MESSAGES"))
        return message.channel.send(new Discord.MessageEmbed()
        .setDescription(`You don't have permission to accept suggestions.`)
        .setColor("RED")
        .setTimestamp()
        .setFooter("developed by rayz#4986", "https://imgur.com/UnVOl7V.png"))

        const messageID = args[0]
        const acceptMessage = args.slice(1).join(" ")

        if(!messageID) return message.channel.send(new Discord.MessageEmbed()
        .setTitle("Invalid Usage")
        .setDescription(`You need to provide a message id`)
        .setColor("RED")
        .setTimestamp()
        .setFooter("developed by rayz#4986", "https://imgur.com/UnVOl7V.png"))

        try {
            const suggestionChannel = message.guild.channels.cache.find((x) => (x.name === "suggestion" || x.name === "suggestions"));
            const suggestedEmbed = await suggestionChannel.messages.fetch(messageID);
            const data = suggestedEmbed.embeds[0];
            const acceptEmbed = new Discord.MessageEmbed()
            .setAuthor(data.author.name, data.author.iconURL)
            .setDescription(data.description)
            .setColor("GREEN")
            .addField("Status: (accepted)", acceptMessage)

            suggestedEmbed.edit(acceptEmbed)

        } catch (err) {
            message.channel.send(new Discord.MessageEmbed()
            .setTitle("Error!")
            .setDescription(`This messageID does not exist.`)
            .setColor("RED")
            .setTimestamp()
            .setFooter("developed by rayz#4986", "https://imgur.com/UnVOl7V.png")).then(m => m.delete({ timeout: 5000 }));
        }
    }
}