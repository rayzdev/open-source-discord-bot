const Discord = require('discord.js')
const math =  require('mathjs');

module.exports = {
    name: "calculate",
    description: "does math for you",
    aliases: ["calc", "cal"],
    timeout: 1,
    category: "utility",
    usage: "[ command | number +/*/- number]",
    run: async(client, message,args) => {
        if (!args[0]) return message.channel.send(new Discord.MessageEmbed()
        .setTitle("Invalid Usage")
        .setDescription("Please provide a mathematical question.")
        .setColor("RED")
        .setTimestamp()
        .setFooter("developed by rayz#4986", "https://imgur.com/UnVOl7V.png"));

        let resp;

        try {
            resp = math.evaluate(args.join(" "))
        } catch (e) {
            return message.channel.send(new Discord.MessageEmbed()
            .setTitle("Error!")
            .setDescription("Please provide a valid question")
            .setColor("RED")
            .setTimestamp()
            .setFooter("developed by rayz#4986", "https://imgur.com/UnVOl7V.png"))
        }

        message.channel.send(new Discord.MessageEmbed()
        .setTitle("Calculator")
        .addField("Question:", `\`\`\`css\n${args.join(' ')}\`\`\``)
        .addField("Answer:", `\`\`\`css\n${resp}\`\`\``)
        .setColor("GREEN")
        .setTimestamp()
        .setFooter("developed by rayz#4986", "https://imgur.com/UnVOl7V.png"))
    }
}