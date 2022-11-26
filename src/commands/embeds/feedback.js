const {
	MessageEmbed,
	MessageActionRow,
	MessageButton,
	Permissions,
} = require('discord.js');

module.exports = {
	name: 'feedback',
	aliases: [''],
	/**
	 *
	 * @param {Client} client
	 * @param {Message} message
	 * @param {String[]} args
	 */
	run: async (client, message) => {
		if (
			!message.member.permissions.has(
				Permissions.FLAGS.BAN_MEMBERS,
				Permissions.FLAGS.ADMINISTRATOR
			)
		)
			return message.channel.send(
				"You don't have permission to use that command."
			);

		const embed = new MessageEmbed()
			.setColor('#31429a')
			.setFooter({ text: `Called By: ${message.author.tag}` })
			.setTimestamp()
			.setTitle('Anonymous Feedback!')
			.setDescription(
				`Press the button below to get access to leave feedback!`
			)

		const row = new MessageActionRow()
			.addComponents(
				new MessageButton()
					.setCustomId('feedbackButton')
					.setLabel('Feedback Form')
					.setStyle('PRIMARY')
			);
		message.channel.send({ embeds: [embed], components: [row] });
	},
};
