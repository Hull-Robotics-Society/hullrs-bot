const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");

module.exports = {
  name: "projectembed",
  aliases: [""],
  /**
   *
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */

  run: async (client, message) => {
    const embed = new MessageEmbed()
      .setTitle("Project Request!")
      .setDescription(
        `Have an awesome project idea? Fill in the form below to pitch it to the execs!`
      )
      .setColor("#31429a")
      .setFooter(`Called By: ${message.author.tag}`)
      .setTimestamp();

    const row = new MessageActionRow()
      .addComponents(
        new MessageButton()
          .setCustomId("currentProjects")
          .setLabel("See Current Projects")
          .setStyle("PRIMARY")
      )
      .addComponents(
        new MessageButton()
          .setCustomId("projectSuggest")
          .setLabel("Suggest a Project")
          .setStyle("SUCCESS")
      );

    message.channel.send({ embeds: [embed], components: [row] });
  },
};
