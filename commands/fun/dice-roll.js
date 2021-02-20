const Discord = require('discord.js')

module.exports = {
    name: "dice-roll",
    description: "rolls a number from 1 - 6",
    aliases: [" "],
    timeout: 1,
    category: "fun",
    usage: "[ command ]",
    run: async(client, message, args) => {
        let responses = [
            "1",
            "2",
            "3",
            "4",
            "5",
            "6"
        ]

        let response = responses[Math.floor(Math.random() * responses.length)]

        message.channel.send(new Discord.MessageEmbed()
        .setTitle("🎲 Roll")
        .setDescription(`You rolled a ${response}`)
        .setColor("BLUE")
        .setTimestamp()
        .setFooter("developed by rayz#4986", "https://imgur.com/UnVOl7V.png"))
    }
}