const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');

module.exports = {
	name: 'pronouns',
	aliases: [''],
	/**
	 *
	 * @param {Client} client
	 * @param {Message} message
	 * @param {String[]} args
	 */

	run: async (client, message) => {
		const pronounsEmbed = new MessageEmbed()
			.setColor('#31429a')
			.setFooter(`Called By: ${message.author.tag}`)
			.setTimestamp()
			.setTitle('Pronoun Roles!')
			.setDescription(`Select your pronouns from below!`);

		const pronouns = new MessageActionRow()
			.addComponents(
				new MessageButton()
					.setCustomId('HeHim')
					.setLabel('He / Him')
					.setStyle('PRIMARY')
			)
			.addComponents(
				new MessageButton()
					.setCustomId('SheHer')
					.setLabel('She / Her')
					.setStyle('PRIMARY')
			)
			.addComponents(
				new MessageButton()
					.setCustomId('TheyThem')
					.setLabel('They / Them')
					.setStyle('PRIMARY')
			)
			.addComponents(
				new MessageButton()
					.setCustomId('Ask')
					.setLabel('Ask My Pronouns')
					.setStyle('PRIMARY')
			)
			.addComponents(
				new MessageButton()
					.setCustomId('Any')
					.setLabel('Any Pronouns')
					.setStyle('PRIMARY')
			);

		message.channel.send({
			embeds: [pronounsEmbed],
			components: [pronouns],
		});
	},
};
