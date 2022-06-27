const discord = require("discord.js");

module.exports = {
    name: "links",
    aliases: [''],
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {
        const embed = new discord.MessageEmbed()
        .setTitle("Links!")
        .setColor('#31429a')
        .setFooter(`Called By: ${message.author.tag}`)
        .addField('Find us here:','https://www.linktr.ee/HU_RS')
        message.channel.send({ embeds: [embed] });


    },
};

