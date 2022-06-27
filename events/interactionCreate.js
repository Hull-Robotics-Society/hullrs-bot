
const client = require("../index");

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
            await interaction.reply({ content: 'Roles have been updated', ephemeral: true});
        }
        if(interaction.customId == "Freshers"){
            interaction.member.roles.add("912413297771442216") // Add Freshers
            interaction.member.roles.remove("937383484211724319") // RM Foundation
            interaction.member.roles.remove("912414716666728508") // RM Second Year
            interaction.member.roles.remove("912414905032929302") // RM Bachelors
            interaction.member.roles.remove("937383563798663258") // RM Masters
            await interaction.reply({ content: 'Roles have been updated', ephemeral: true});
        }
        if(interaction.customId == "SecondYear"){
            interaction.member.roles.add("912414716666728508") // Add Second Year
            interaction.member.roles.remove("937383484211724319") // RM Foundation
            interaction.member.roles.remove("912413297771442216") // RM Freshers
            interaction.member.roles.remove("912414905032929302") // RM Bachelors
            interaction.member.roles.remove("937383563798663258") // RM Masters
            await interaction.reply({ content: 'Roles have been updated', ephemeral: true});
        }
        if(interaction.customId == "Bachelors"){
            interaction.member.roles.add("912414905032929302") // Add Bachelors
            interaction.member.roles.remove("937383484211724319") // RM Foundation
            interaction.member.roles.remove("912413297771442216") // RM Freshers
            interaction.member.roles.remove("912414716666728508") // RM Second Year
            interaction.member.roles.remove("937383563798663258") // RM Masters
            await interaction.reply({ content: 'Roles have been updated', ephemeral: true});
        }
        if(interaction.customId == "Masters"){
            interaction.member.roles.add("937383563798663258") // Add Masters
            interaction.member.roles.remove("937383484211724319") // RM Foundation
            interaction.member.roles.remove("912413297771442216") // RM Freshers
            interaction.member.roles.remove("912414716666728508") // RM Second Year
            interaction.member.roles.remove("912414905032929302") // RM Bachelors
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
    }


    if(interaction.isSelectMenu()) 
    {

    }

});