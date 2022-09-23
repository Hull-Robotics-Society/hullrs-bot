
const client = require("../index");
const discord = require('discord.js')

client.on("interactionCreate", async (interaction) => {
    // Slash Command Handling
    if (interaction.isCommand()) {

        const cmd = client.slashCommands.get(interaction.commandName);
        if (!cmd)
            return interaction.followUp({ content: "An error has occured " });

        const args = [];

        for (let option of interaction.options.data) {
            if (option.type === "SUB_COMMAND") {
                if (option.name) args.push(option.name);
                option.options?.forEach((x) => {
                    if (x.value) args.push(x.value);
                });
            } else if (option.value) args.push(option.value);
        }
        interaction.member = interaction.guild.members.cache.get(interaction.user.id);

        cmd.run(client, interaction, args);
    }

    // Context Menu Handling
    if (interaction.isContextMenu()) 
    {
    }

    if (interaction.isButton()) 
    {
        if(interaction.customId == "Foundation"){
            interaction.member.roles.add("937383484211724319") // Add Foundation
            interaction.member.roles.remove("912413297771442216") // RM Freshers
            interaction.member.roles.remove("912414716666728508") // RM Second Year
            interaction.member.roles.remove("912414905032929302") // RM Bachelors
            interaction.member.roles.remove("937383563798663258") // RM Masters
            interaction.member.roles.remove("995270561712324659") // RM Graduate
            interaction.member.roles.remove("1003951789634244679") // RM PhD
            await interaction.reply({ content: 'Roles have been updated', ephemeral: true});
        }
        if(interaction.customId == "Freshers"){
            interaction.member.roles.add("912413297771442216") // Add Freshers
            interaction.member.roles.remove("937383484211724319") // RM Foundation
            interaction.member.roles.remove("912414716666728508") // RM Second Year
            interaction.member.roles.remove("912414905032929302") // RM Bachelors
            interaction.member.roles.remove("937383563798663258") // RM Masters
            interaction.member.roles.remove("995270561712324659") // RM Graduate
            interaction.member.roles.remove("1003951789634244679") // RM PhD
            await interaction.reply({ content: 'Roles have been updated', ephemeral: true});
        }
        if(interaction.customId == "SecondYear"){
            interaction.member.roles.add("912414716666728508") // Add Second Year
            interaction.member.roles.remove("937383484211724319") // RM Foundation
            interaction.member.roles.remove("912413297771442216") // RM Freshers
            interaction.member.roles.remove("912414905032929302") // RM Bachelors
            interaction.member.roles.remove("937383563798663258") // RM Masters
            interaction.member.roles.remove("995270561712324659") // RM Graduate
            interaction.member.roles.remove("1003951789634244679") // RM PhD
            await interaction.reply({ content: 'Roles have been updated', ephemeral: true});
        }
        if(interaction.customId == "Bachelors"){
            interaction.member.roles.add("912414905032929302") // Add Bachelors
            interaction.member.roles.remove("937383484211724319") // RM Foundation
            interaction.member.roles.remove("912413297771442216") // RM Freshers
            interaction.member.roles.remove("912414716666728508") // RM Second Year
            interaction.member.roles.remove("937383563798663258") // RM Masters
            interaction.member.roles.remove("995270561712324659") // RM Graduate
            interaction.member.roles.remove("1003951789634244679") // RM PhD
            await interaction.reply({ content: 'Roles have been updated', ephemeral: true});
        }
        if(interaction.customId == "Masters"){
            interaction.member.roles.add("937383563798663258") // Add Masters
            interaction.member.roles.remove("937383484211724319") // RM Foundation
            interaction.member.roles.remove("912413297771442216") // RM Freshers
            interaction.member.roles.remove("912414716666728508") // RM Second Year
            interaction.member.roles.remove("912414905032929302") // RM Bachelors
            interaction.member.roles.remove("995270561712324659") // RM Graduate
            interaction.member.roles.remove("1003951789634244679") // RM PhD
            await interaction.reply({ content: 'Roles have been updated', ephemeral: true});
        }
        if(interaction.customId == "PhD"){
            interaction.member.roles.add("1003951789634244679") // Add PhD
            interaction.member.roles.remove("937383484211724319") // RM Foundation
            interaction.member.roles.remove("912413297771442216") // RM Freshers
            interaction.member.roles.remove("912414716666728508") // RM Second Year
            interaction.member.roles.remove("912414905032929302") // RM Bachelors
            interaction.member.roles.remove("937383563798663258") // RM Masters
            interaction.member.roles.remove("995270561712324659") // RM PhD
            await interaction.reply({ content: 'Roles have been updated', ephemeral: true});
        }
        if(interaction.customId == "Graduate"){
            interaction.member.roles.add("995270561712324659") // Add Graduate
            interaction.member.roles.remove("937383484211724319") // RM Foundation
            interaction.member.roles.remove("912413297771442216") // RM Freshers
            interaction.member.roles.remove("912414716666728508") // RM Second Year
            interaction.member.roles.remove("912414905032929302") // RM Bachelors
            interaction.member.roles.remove("937383563798663258") // RM Masters
            interaction.member.roles.remove("1003951789634244679") // RM PhD
            await interaction.reply({ content: 'Roles have been updated', ephemeral: true});
        }

        if(interaction.customId == "HeHim"){
            if(interaction.member.roles.cache.has("937380855402336276"))
            {
                interaction.member.roles.remove("937380855402336276")
            }
            else
            {
                interaction.member.roles.add("937380855402336276")
            }
            await interaction.reply({ content: 'Roles have been updated', ephemeral: true});
        }

        if(interaction.customId == "TheyThem"){
            if(interaction.member.roles.cache.has("937381021022842911"))
            {
                interaction.member.roles.remove("937381021022842911")
            }
            else
            {
                interaction.member.roles.add("937381021022842911")
            }
            await interaction.reply({ content: 'Roles have been updated', ephemeral: true});
        }

        if(interaction.customId == "SheHer"){
            if(interaction.member.roles.cache.has("937380980765888512"))
            {
                interaction.member.roles.remove("937380980765888512")
            }
            else
            {
                interaction.member.roles.add("937380980765888512")
            }
            await interaction.reply({ content: 'Roles have been updated', ephemeral: true});
        }

        if(interaction.customId == "Ask"){
            if(interaction.member.roles.cache.has("937381232629674064"))
            {
                interaction.member.roles.remove("937381232629674064")
            }
            else
            {
                interaction.member.roles.add("937381232629674064")
            }
            await interaction.reply({ content: 'Roles have been updated', ephemeral: true});
        }

        if(interaction.customId == "Any"){
            if(interaction.member.roles.cache.has("937381134269022270"))
            {
                interaction.member.roles.remove("937381134269022270")
            }
            else
            {
                interaction.member.roles.cache.add("937381134269022270")
            }
            await interaction.reply({ content: 'Roles have been updated', ephemeral: true});
        }

        if(interaction.customId == "projectSuggest")
        {
            const modal = new discord.Modal()
                .setCustomId('modal-projectrequest')
                .setTitle('Poject Request')
            const projectname = new discord.TextInputComponent()                        
                .setLabel("Project Name")
                .setStyle("SHORT")
                .setCustomId("projectname")
                .setPlaceholder(`A big robot`)
            const projectdescription = new discord.TextInputComponent()                        
                .setLabel("Project Description")
                .setStyle("PARAGRAPH")
                .setCustomId("projectdescription")
                .setPlaceholder(`Its a super cool project`)
            const projectreason = new discord.TextInputComponent()                        
                .setLabel("How would students benefit from this project?")
                .setStyle("PARAGRAPH")
                .setCustomId("projectreason")
                .setPlaceholder(`Its a super cool project`)
            const projectotherinfo = new discord.TextInputComponent()                        
                .setLabel("Other information you would like to share")
                .setStyle("PARAGRAPH")
                .setCustomId("projectotherinfo")
            const firstActionRow = new discord.MessageActionRow().addComponents(projectname);
            const secondActionRow = new discord.MessageActionRow().addComponents(projectdescription);   
            const thirdActionRow = new discord.MessageActionRow().addComponents(projectreason);   
            const fourthActionRow = new discord.MessageActionRow().addComponents(projectotherinfo);   
            modal.addComponents(firstActionRow, secondActionRow, thirdActionRow, fourthActionRow);
            await interaction.showModal(modal);   
        }

        if(interaction.customId == "paidModal")
        {
            if(interaction.member.roles.cache.has(`744923016751743038`))
            {
                await interaction.deferReply({ ephemeral: true })
                interaction.followUp({ content: 'You already have the paid member role.', ephemeral: true })

            } 
            else{
                const modal = new discord.Modal()
                    .setCustomId('modal-paidmember')
                    .setTitle('Paid Member Discord Access')
                const studentname = new discord.TextInputComponent()                        
                    .setLabel("Student Name")
                    .setStyle("SHORT")
                    .setCustomId("studentname")
                    .setPlaceholder(`Joe Bloggs`)
                const studentnumber = new discord.TextInputComponent()                        
                    .setLabel("Student Number")
                    .setStyle("SHORT")
                    .setCustomId("studentnumber")
                    .setPlaceholder(`202001234`)
                const firstActionRow = new discord.MessageActionRow().addComponents(studentname);
                const secondActionRow = new discord.MessageActionRow().addComponents(studentnumber);   
                modal.addComponents(firstActionRow, secondActionRow);
                await interaction.showModal(modal);   
                }
        }

        if(interaction.customId == "deletemessage")
        {
            await interaction.message.delete();
            await interaction.reply({ content: 'Message has been deleted', ephemeral: true});
        }
    }


    if(interaction.isSelectMenu()) 
    {

    }


    if(interaction.isModalSubmit())
    {
        if(interaction.customId === 'modal-projectrequest')
        {
            const botOutput = client.channels.cache.get('1016687156728709130')
            const embed = new discord.MessageEmbed()
                .setTitle("New Project Request")
                .setColor('PURPLE')
                .addField('Project ', `${ interaction.fields.getTextInputValue("projectname")}`)
                .addField('Project Description',`${ interaction.fields.getTextInputValue("projectdescription")}`)
                .addField('Project Reasoning',`${ interaction.fields.getTextInputValue("projectreason")}`)
                .addField('Any Other Info',`${ interaction.fields.getTextInputValue("projectotherinfo")}`)
                .setFooter({ text: `Requested by ${interaction.user.tag}`})
            botOutput.send({embeds: [embed] });
            await interaction.deferReply({ ephemeral: true })
            interaction.followUp({ content: 'Your request has been sent to execs!', ephemeral: true })
        }

        if(interaction.customId === 'modal-paidmember'){
            const botOutput = client.channels.cache.get('1016687156728709130')
            const embed = new discord.MessageEmbed()
                .setTitle("New Paid Member Request")
                .setColor('YELLOW')
                .addField('Discord Tag', `${ interaction.user} <- Click to add role.`)
                .addField('Discord Discriminator', `${interaction.user.tag}`)
                .addField('Student Name', `${ interaction.fields.getTextInputValue("studentname")}`)
                .addField('Student Number',`${ interaction.fields.getTextInputValue("studentnumber")}`)
                .setDescription('https://hulluniunion.com/')
            const row = new discord.MessageActionRow()
            .addComponents(
                new discord.MessageButton()
                    .setCustomId('deletemessage')
                    .setEmoji('')
                    .setLabel('Delete Message')
                    .setStyle('DANGER')
            )
            botOutput.send({embeds: [embed], components: [row] });
            await interaction.deferReply({ ephemeral: true })
            interaction.followUp({ content: 'Your request has been sent to execs!', ephemeral: true })
        }  


    }
});