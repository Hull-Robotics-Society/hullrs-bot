const client = require('../index');
const discord = require('discord.js');

client.on('interactionCreate', async (interaction) => {
	// Slash Command Handling
	if (interaction.isCommand()) {
		const cmd = client.slashCommands.get(interaction.commandName);
		if (!cmd)
			return interaction.followUp({ content: 'An error has occurred ' });

		const args = [];

		for (let option of interaction.options.data) {
			if (option.type === 'SUB_COMMAND') {
				if (option.name) args.push(option.name);
				option.options?.forEach((x) => {
					if (x.value) args.push(x.value);
				});
			} else if (option.value) args.push(option.value);
		}
		interaction.member = interaction.guild.members.cache.get(
			interaction.user.id
		);

		cmd.run(client, interaction, args);
	}

	if (interaction.isButton()) {
		if (interaction.customId == 'Foundation') {
			interaction.member.roles.add('937383484211724319'); // Add Foundation
			interaction.member.roles.remove('912413297771442216'); // RM Freshers
			interaction.member.roles.remove('912414716666728508'); // RM Second Year
			interaction.member.roles.remove('912414905032929302'); // RM Bachelors
			interaction.member.roles.remove('937383563798663258'); // RM Masters
			interaction.member.roles.remove('995270561712324659'); // RM Graduate
			interaction.member.roles.remove('1003951789634244679'); // RM PhD
			await interaction.reply({
				content: 'Roles have been updated',
				ephemeral: true,
			});
		}
		if (interaction.customId == 'Freshers') {
			interaction.member.roles.add('912413297771442216'); // Add Freshers
			interaction.member.roles.remove('937383484211724319'); // RM Foundation
			interaction.member.roles.remove('912414716666728508'); // RM Second Year
			interaction.member.roles.remove('912414905032929302'); // RM Bachelors
			interaction.member.roles.remove('937383563798663258'); // RM Masters
			interaction.member.roles.remove('995270561712324659'); // RM Graduate
			interaction.member.roles.remove('1003951789634244679'); // RM PhD
			await interaction.reply({
				content: 'Roles have been updated',
				ephemeral: true,
			});
		}
		if (interaction.customId == 'SecondYear') {
			interaction.member.roles.add('912414716666728508'); // Add Second Year
			interaction.member.roles.remove('937383484211724319'); // RM Foundation
			interaction.member.roles.remove('912413297771442216'); // RM Freshers
			interaction.member.roles.remove('912414905032929302'); // RM Bachelors
			interaction.member.roles.remove('937383563798663258'); // RM Masters
			interaction.member.roles.remove('995270561712324659'); // RM Graduate
			interaction.member.roles.remove('1003951789634244679'); // RM PhD
			await interaction.reply({
				content: 'Roles have been updated',
				ephemeral: true,
			});
		}
		if (interaction.customId == 'Bachelors') {
			interaction.member.roles.add('912414905032929302'); // Add Bachelors
			interaction.member.roles.remove('937383484211724319'); // RM Foundation
			interaction.member.roles.remove('912413297771442216'); // RM Freshers
			interaction.member.roles.remove('912414716666728508'); // RM Second Year
			interaction.member.roles.remove('937383563798663258'); // RM Masters
			interaction.member.roles.remove('995270561712324659'); // RM Graduate
			interaction.member.roles.remove('1003951789634244679'); // RM PhD
			await interaction.reply({
				content: 'Roles have been updated',
				ephemeral: true,
			});
		}
		if (interaction.customId == 'Masters') {
			interaction.member.roles.add('937383563798663258'); // Add Masters
			interaction.member.roles.remove('937383484211724319'); // RM Foundation
			interaction.member.roles.remove('912413297771442216'); // RM Freshers
			interaction.member.roles.remove('912414716666728508'); // RM Second Year
			interaction.member.roles.remove('912414905032929302'); // RM Bachelors
			interaction.member.roles.remove('995270561712324659'); // RM Graduate
			interaction.member.roles.remove('1003951789634244679'); // RM PhD
			await interaction.reply({
				content: 'Roles have been updated',
				ephemeral: true,
			});
		}
		if (interaction.customId == 'PhD') {
			interaction.member.roles.add('1003951789634244679'); // Add PhD
			interaction.member.roles.remove('937383484211724319'); // RM Foundation
			interaction.member.roles.remove('912413297771442216'); // RM Freshers
			interaction.member.roles.remove('912414716666728508'); // RM Second Year
			interaction.member.roles.remove('912414905032929302'); // RM Bachelors
			interaction.member.roles.remove('937383563798663258'); // RM Masters
			interaction.member.roles.remove('995270561712324659'); // RM PhD
			await interaction.reply({
				content: 'Roles have been updated',
				ephemeral: true,
			});
		}
		if (interaction.customId == 'Graduate') {
			interaction.member.roles.add('995270561712324659'); // Add Graduate
			interaction.member.roles.remove('937383484211724319'); // RM Foundation
			interaction.member.roles.remove('912413297771442216'); // RM Freshers
			interaction.member.roles.remove('912414716666728508'); // RM Second Year
			interaction.member.roles.remove('912414905032929302'); // RM Bachelors
			interaction.member.roles.remove('937383563798663258'); // RM Masters
			interaction.member.roles.remove('1003951789634244679'); // RM PhD
			await interaction.reply({
				content: 'Roles have been updated',
				ephemeral: true,
			});
		}

		if (interaction.customId == 'HeHim') {
			if (interaction.member.roles.cache.has('937380855402336276')) {
				interaction.member.roles.remove('937380855402336276');
				await interaction.reply({
					content: 'Roles have been removed',
					ephemeral: true,
				});
			} else {
				interaction.member.roles.add('937380855402336276');
				await interaction.reply({
					content: 'Roles have been added',
					ephemeral: true,
				});
			}
		}

		if (interaction.customId == 'TheyThem') {
			if (interaction.member.roles.cache.has('937381021022842911')) {
				interaction.member.roles.remove('937381021022842911');
				await interaction.reply({
					content: 'Roles have been removed',
					ephemeral: true,
				});
			} else {
				interaction.member.roles.add('937381021022842911');
				await interaction.reply({
					content: 'Roles have been added',
					ephemeral: true,
				});
			}
		}

		if (interaction.customId == 'SheHer') {
			if (interaction.member.roles.cache.has('937380980765888512')) {
				interaction.member.roles.remove('937380980765888512');
				await interaction.reply({
					content: 'Roles have been removed',
					ephemeral: true,
				});
			} else {
				interaction.member.roles.add('937380980765888512');
				await interaction.reply({
					content: 'Roles have been added',
					ephemeral: true,
				});
			}
		}

		if (interaction.customId == 'Ask') {
			if (interaction.member.roles.cache.has('937381232629674064')) {
				interaction.member.roles.remove('937381232629674064');
				await interaction.reply({
					content: 'Roles have been removed',
					ephemeral: true,
				});
			} else {
				interaction.member.roles.add('937381232629674064');
				await interaction.reply({
					content: 'Roles have been added',
					ephemeral: true,
				});
			}
		}

		if (interaction.customId == 'Any') {
			if (interaction.member.roles.cache.has('937381134269022270')) {
				interaction.member.roles.remove('937381134269022270');
				await interaction.reply({
					content: 'Roles have been removed',
					ephemeral: true,
				});
			} else {
				interaction.member.roles.cache.add('937381134269022270');
				await interaction.reply({
					content: 'Roles have been added',
					ephemeral: true,
				});
			}
		}

		if (interaction.customId == 'projectSuggest') {
			const modal = new discord.Modal()
				.setCustomId('modal-projectRequest')
				.setTitle('Project Request');
			const projectName = new discord.TextInputComponent()
				.setLabel('Project Name')
				.setStyle('SHORT')
				.setCustomId('projectName')
				.setPlaceholder(`A big robot`);
			const projectDescription = new discord.TextInputComponent()
				.setLabel('Project Description')
				.setStyle('PARAGRAPH')
				.setCustomId('projectDescription')
				.setPlaceholder(`Its a super cool project`);
			const projectReason = new discord.TextInputComponent()
				.setLabel('How would students benefit from this project?')
				.setStyle('PARAGRAPH')
				.setCustomId('projectReason')
				.setPlaceholder(`Its a super cool project`);
			const projectOtherInfo = new discord.TextInputComponent()
				.setLabel('Other information you would like to share')
				.setStyle('PARAGRAPH')
				.setCustomId('projectOtherInfo');
			const firstActionRow = new discord.MessageActionRow().addComponents(
				projectName
			);
			const secondActionRow = new discord.MessageActionRow().addComponents(
				projectDescription
			);
			const thirdActionRow = new discord.MessageActionRow().addComponents(
				projectReason
			);
			const fourthActionRow = new discord.MessageActionRow().addComponents(
				projectOtherInfo
			);
			modal.addComponents(
				firstActionRow,
				secondActionRow,
				thirdActionRow,
				fourthActionRow
			);
			await interaction.showModal(modal);
		}

		if (interaction.customId == 'paidModal') {
			if (interaction.member.roles.cache.has(`744923016751743038`)) {
				await interaction.deferReply({ ephemeral: true });
				interaction.followUp({
					content: 'You already have the paid member role.',
					ephemeral: true,
				});
			} else {
				const modal = new discord.Modal()
					.setCustomId('modal-paidmember')
					.setTitle('Paid Member Discord Access');
				const studentName = new discord.TextInputComponent()
					.setLabel('Student Name')
					.setStyle('SHORT')
					.setCustomId('studentName')
					.setPlaceholder(`Joe Blogs`);
				const studentNumber = new discord.TextInputComponent()
					.setLabel('Student Number')
					.setStyle('SHORT')
					.setCustomId('studentNumber')
					.setPlaceholder(`202001234`);
				const firstActionRow = new discord.MessageActionRow().addComponents(
					studentName
				);
				const secondActionRow = new discord.MessageActionRow().addComponents(
					studentNumber
				);
				modal.addComponents(firstActionRow, secondActionRow);
				await interaction.showModal(modal);
			}
		}

		if (interaction.customId == 'feedbackButton') {
			const modal = new discord.Modal()
				.setCustomId('modal-feedback')
				.setTitle('Anonymous Feedback');
			const positive = new discord.TextInputComponent()
				.setLabel('Positive')
				.setStyle('PARAGRAPH')
				.setCustomId('Positive')
				.setPlaceholder(`I really like this society`);
			const negative = new discord.TextInputComponent()
				.setLabel('Improvements')
				.setStyle('PARAGRAPH')
				.setCustomId('Improvements')
				.setPlaceholder(`This could be improved`);
			const firstActionRow = new discord.MessageActionRow().addComponents(
				positive
			);
			const secondActionRow = new discord.MessageActionRow().addComponents(
				negative
			);
			modal.addComponents(firstActionRow, secondActionRow);
			await interaction.showModal(modal);
		}

		if (interaction.customId == 'deleteMessage') {
			await interaction.message.delete();
			await interaction.reply({
				content: 'Message has been deleted',
				ephemeral: true,
			});
		}
	}

	if (interaction.isModalSubmit()) {
		if (interaction.customId === 'modal-projectRequest') {
			const botOutput = client.channels.cache.get('1016687156728709130');
			const embed = new discord.MessageEmbed()
				.setTitle('New Project Request')
				.setColor('PURPLE')
				.addField(
					'Project ',
					`${interaction.fields.getTextInputValue('projectName')}`
				)
				.addField(
					'Project Description',
					`${interaction.fields.getTextInputValue('projectDescription')}`
				)
				.addField(
					'Project Reasoning',
					`${interaction.fields.getTextInputValue('projectReason')}`
				)
				.addField(
					'Any Other Info',
					`${interaction.fields.getTextInputValue('projectOtherInfo')}`
				)
				.setFooter({ text: `Requested by ${interaction.user.tag}` });
			botOutput.send({ embeds: [embed] });
			await interaction.deferReply({ ephemeral: true });
			interaction.followUp({
				content: 'Your request has been sent to execs!',
				ephemeral: true,
			});
		}

		if (interaction.customId === 'modal-paidmember') {
			const botOutput = client.channels.cache.get('1016687156728709130');
			const embed = new discord.MessageEmbed()
				.setTitle('New Paid Member Request')
				.setColor('YELLOW')
				.addField('Discord Tag', `${interaction.user} <- Click to add role.`)
				.addField('Discord Discriminator', `${interaction.user.tag}`)
				.addField(
					'Student Name',
					`${interaction.fields.getTextInputValue('studentName')}`
				)
				.addField(
					'Student Number',
					`${interaction.fields.getTextInputValue('studentNumber')}`
				)
				.setDescription('https://hulluniunion.com/');
			const row = new discord.MessageActionRow().addComponents(
				new discord.MessageButton()
					.setCustomId('deleteMessage')
					.setEmoji('')
					.setLabel('Delete Message')
					.setStyle('DANGER')
			);
			botOutput.send({ embeds: [embed], components: [row] });
			await interaction.deferReply({ ephemeral: true });
			interaction.followUp({
				content: 'Your request has been sent to execs!',
				ephemeral: true,
			});
		}

		if (interaction.customId === 'modal-feedback') {
			const botOutput = client.channels.cache.get('1045995322658271294');
			const embed = new discord.MessageEmbed()
				.setTitle('New Feedback')
				.setColor('YELLOW')
				.addField(
					'Positive Feedback ',
					`${interaction.fields.getTextInputValue('Positive')}`
				)
				.addField(
					'Improvements that could be made',
					`${interaction.fields.getTextInputValue('Improvements')}`
				);
			botOutput.send({ embeds: [embed] });
			await interaction.deferReply({ ephemeral: true });
			interaction.followUp({
				content:
					'Your feedback has been sent to execs! They cannot see who sent it!',
				ephemeral: true,
			});
		}
	}
});
