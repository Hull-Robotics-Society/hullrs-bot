const discord = require('discord.js');

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
		const pronounsEmbed = new discord.MessageEmbed()
			.setColor('#31429a')
			.setFooter(`Called By: ${message.author.tag}`)
			.setTimestamp()
			.setTitle('Pronoun Roles!')
			.setDescription(`Select your pronouns from below!`);

		const pronouns = new discord.MessageActionRow()
			.addComponents(
				new discord.MessageButton()
					.setCustomId('HeHim')
					.setLabel('He / Him')
					.setStyle('PRIMARY')
			)
			.addComponents(
				new discord.MessageButton()
					.setCustomId('SheHer')
					.setLabel('She / Her')
					.setStyle('PRIMARY')
			)
			.addComponents(
				new discord.MessageButton()
					.setCustomId('TheyThem')
					.setLabel('They / Them')
					.setStyle('PRIMARY')
			)
			.addComponents(
				new discord.MessageButton()
					.setCustomId('Ask')
					.setLabel('Ask My Pronouns')
					.setStyle('PRIMARY')
			)
			.addComponents(
				new discord.MessageButton()
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
