const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');

module.exports = {
	name: 'welcome',
	aliases: [''],
	/**
	 *
	 * @param {Client} client
	 * @param {Message} message
	 * @param {String[]} args
	 */
	run: async (client, message) => {
		const welcome = new MessageEmbed()
			.setColor('#31429a')
			.setFooter(`Called By: ${message.author.tag}`)
			.setTimestamp()
			.setTitle('Welcome!')
			.setDescription(
				`We are the Robotics Society, a society where you can gain skills in building actual robot, or get help with your assignments or exams, and we know that people like us don’t do much but we also run social nights where we go out to do stuff.`
			)
			.addField(
				'Exec Members',
				`President - <@720360699053998242>.\r\nVice President - <@219827174180388864>.\r\nTreasurer - <@619168812083838979>.\r\nSecretary - <@660971490111651840>\r\nMedia Officer - <@626884131812540416>.\r\n Health and Safety Officer - <@311175662817902594>.\r\nProject Manager - <@256765136365289482>.\r\n\r\n\r\n`
			)
			.addField('Rules', ' https://github.com/UniOfHullRoboticsSociety/conduct')
			.addField('Our Links', ` https://www.linktr.ee/HU_RS`)
			.addField(
				'Roles',
				'Please message <@219827174180388864> to receive the <@&744923016751743038> role.\r\nSelect your year below.'
			);

		const years = new MessageActionRow()
			.addComponents(
				new MessageButton()
					.setCustomId('Foundation')
					.setLabel('Foundation')
					.setStyle('PRIMARY')
			)
			.addComponents(
				new MessageButton()
					.setCustomId('Freshers')
					.setLabel('Freshers')
					.setStyle('PRIMARY')
			)
			.addComponents(
				new MessageButton()
					.setCustomId('SecondYear')
					.setLabel('Second Year')
					.setStyle('PRIMARY')
			)
			.addComponents(
				new MessageButton()
					.setCustomId('Bachelors')
					.setLabel('Bachelors')
					.setStyle('PRIMARY')
			)
			.addComponents(
				new MessageButton()
					.setCustomId('Masters')
					.setLabel('Masters')
					.setStyle('PRIMARY')
			);

		const yearsCont = new MessageActionRow()
			.addComponents(
				new MessageButton()
					.setCustomId('PhD')
					.setLabel('PhD')
					.setStyle('PRIMARY')
			)

			.addComponents(
				new MessageButton()
					.setCustomId('Graduate')
					.setLabel('Graduate')
					.setStyle('PRIMARY')
			);

		message.channel.send({
			embeds: [welcome],
			components: [years, yearsCont],
		});
	},
};
