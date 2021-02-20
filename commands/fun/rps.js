const Discord = require('discord.js');

module.exports = {
    name: "rps",
    description: "starts a game of rock, paper, scissors",
    aliases: ["rock-paper-scissors"],
    timeout: 1,
    category: "fun",
    usage: "[ command | choice ]",
    run: async(client, message, args) => {
        const rps = ['scissors', 'rock', 'paper'];
        const res = ['Scissors :scissors:', 'Rock :rock:', 'Paper :newspaper:'];
        let userChoice;
        if (args.length) userChoice = args[0].toLowerCase();
        if (!rps.includes(userChoice)) 
            return message.channel.send(new Discord.MessageEmbed()
            .setTitle("Invalid Usage")
            .setDescription(`You need to provide your choice. Example: .rps paper`)
            .setColor("RED")
            .setTimestamp()
            .setFooter("developed by rayz#4986", "https://imgur.com/UnVOl7V.png"));
        userChoice = rps.indexOf(userChoice);
        const botChoice = Math.floor(Math.random() * 3);
        let result;
        if (userChoice === botChoice) result = 'It\'s a draw!';
        else if (botChoice > userChoice || botChoice === 0 && userChoice === 2) result = `**The Bot** wins!`;
        else result = `**${message.member.displayName}** wins!`;
        message.channel.send(new Discord.MessageEmbed()
        .setTitle("RPS")
        .setColor("BLACK")
        .addFields({
            name: "Your Choice:",
            value: res[userChoice]
        }, {
            name: "Bot's Choice:",
            value: res[botChoice]
        }, {
            name:  "Result:",
            value: result
        },)
        .setTimestamp()
        .setFooter("developed by rayz#4986", "https://imgur.com/UnVOl7V.png"))
    }
}