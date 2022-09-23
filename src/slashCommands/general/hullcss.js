const { Client, CommandInteraction, MessageEmbed } = require("discord.js");

module.exports = {
    name: "hullcss",
    description: "returns computer science society discord link",
    type: 'CHAT_INPUT',
    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    run: async (client, interaction, args) => {
        const embed = new MessageEmbed()
        .setTitle("Hull Computer Science Society")
        .setColor('GREEN')
        .setFooter({ text: `Called By: ${interaction.user.tag}`})
        .setDescription('HullCSS set up with the aim of providing engaging events for students with an interest in Computer Science. They want to make life outside of your course as fun and interesting as possible, organising both social and technical events for you.')
        .addField('You can join them from below!','https://hullcss.org/discord')
        interaction.reply({ embeds: [embed]});
    },
};