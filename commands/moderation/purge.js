const Discord = require('discord.js')

module.exports = {
    name: "purge",
    description: "purges up to 100 messages in a channel",
    aliases: [" "],
    timeout: 1,
    category: "moderation",
    usage: "[ command | number from 1 to 100 ]",
    run: async(client, message, args) => {
        message.delete()
        if(!message.member.hasPermission("MANAGE_MESSAGE")) {
            return message.channel.send(new Discord.MessageEmbed()
            .setDescription(`You don't have permission to purge messages.`)
            .setColor("RED")
            .setTimestamp()
            .setFooter("developed by rayz#4986", "https://imgur.com/UnVOl7V.png"))
        }

        if(!args[0]) {
            return message.channel.send(new Discord.MessageEmbed()
            .setDescription(`
            **Description:** purges up to 100 messages in a channel
            **Aliases:** none
            **Category:** moderation
            
            **Usage:**
            .purge <amount>`)
            .setColor("BLUE")
            .setTimestamp()
            .setFooter("Usage Syntax: <needed> | (optional)", client.user.displayAvatarURL()))
        }

        if(isNaN(args[0])) {
            return message.channel.send(new Discord.MessageEmbed()
            .setTitle("Invalid Usage")
            .setDescription(`This is not a number.`)
            .setColor("RED")
            .setTimestamp()
            .setFooter("developed by rayz#4986", "https://imgur.com/UnVOl7V.png"))
        }

        if(args[0] > 100 || args[0] < 1) {
            return message.channel.send(new Discord.MessageEmbed()
            .setTitle("Invalid Usage")
            .setDescription(`Number must be between 1 and 100.`)
            .setColor("RED")
            .setTimestamp()
            .setFooter("developed by rayz#4986", "https://imgur.com/UnVOl7V.png"))
        }

        let deleteAmount;

        if(parseInt(args[0]) > 100 ) {
            deleteAmount = 100;
        } else {
            deleteAmount = parseInt(args[0]);
        }

        await message.channel.bulkDelete(deleteAmount, true);

        await message.channel.send(new Discord.MessageEmbed()
        .setTitle("Success!")
        .setDescription(`Successfully deleted **${deleteAmount}** messages.`)
        .setColor("GREEN")
        .setTimestamp()
        .setFooter("developed by rayz#4986", "https://imgur.com/UnVOl7V.png"))
    }
}