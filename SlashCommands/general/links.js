const { Client, CommandInteraction, MessageEmbed } = require("discord.js");

module.exports = {
    name: "links",
    description: "returns links of HURS",
    type: 'CHAT_INPUT',
    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    run: async (client, interaction, args) => {
        const embed = new MessageEmbed()
        .setTitle("Links!")
        .setColor('#31429a')
        .setFooter(`Called By: ${interaction.user.tag}`)
        .addField('Find us here:','https://hullcss.org/links')
        interaction.reply({ embeds: [embed]});
    },
};