const Discord = require('discord.js')
const figlet = require('figlet')

module.exports = {
    name: "ascii",
    description: "converts text to ascii",
    aliases: ["asciify"],
    timeout: 1,
    category: "fun",
    usage: "[ command | text ]",
    run: async(client, message, args) => {
        if(!args[0]) return message.channel.send(new Discord.MessageEmbed()
        .setTitle("Invalid Usage")
        .setDescription(`You need to provide some text.`)
        .setColor("RED")
        .setTimestamp()
        .setFooter("developed by rayz#4986", "https://imgur.com/UnVOl7V.png"))

        msg = args.join(" ")

        figlet.text(msg, function (err, data) {
            if (err) {
                message.channel.send(new Discord.MessageEmbed()
                .setTitle("Error!")
                .setDescription(`Something went wrong, please try again.`)
                .setColor("RED")
                .setTimestamp()
                .setFooter("developed by rayz#4986", "https://imgur.com/UnVOl7V.png"))
            }

            if(data.lenght > 2000) return message.channel.send(new Discord.MessageEmbed()
            .setTitle("Invalid Usage")
            .setDescription(`Please provide a text shorter than 2000 characters.`)
            .setColor("RED")
            .setTimestamp()
            .setFooter("developed by rayz#4986", "https://imgur.com/UnVOl7V.png"))

            message.channel.send('```' + data + '```')
        })
    }
}