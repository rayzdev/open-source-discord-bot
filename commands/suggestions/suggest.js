const Discord = require('discord.js')

module.exports = {
    name: "suggest",
    description: "sends a suggestion to the suggestions channel",
    aliases: [" "],
    timeout: 1,
    category: "suggestions",
    usage: "[ command | your suggestion ]",
    run: async(client, message, args) => {
        message.delete()
        if(!args.length) {
            return message.channel.send(new Discord.MessageEmbed()
            .setTitle("Invalid Usage")
            .setDescription(`You must add a suggestion.`)
            .setColor("RED")
            .setTimestamp()
            .setFooter("developed by rayz#4986", "https://imgur.com/UnVOl7V.png"))
        }

        let channel = message.guild.channels.cache.find((x) => (x.name === "suggestion" || x.name === "suggestions" || x.name === "suggests"))
        if(!channel) {
            return message.channel.send(new Discord.MessageEmbed()
            .setTitle("Error!")
            .setDescription(`There must be a channel named "suggestions"`)
            .setColor("RED")
            .setTimestamp()
            .setFooter("developed by rayz#4986", "https://imgur.com/UnVOl7V.png"))
        }

        let suggestionMessage = args.join(" ")
        let suggestionEmbed = new Discord.MessageEmbed()
        .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
        .setDescription(`**Suggestion:** ${suggestionMessage}`)
        .setColor("ORANGE")
        .addField("Status:", 'pending')
        .setTimestamp()

        channel.send(suggestionEmbed).then(m => {
            m.react("✅")
            m.react("❌")
        })

        message.reply("your suggestion has been sent to the suggestions channel.").then(m => m.delete({ timeout: 5000 }));
    }
}