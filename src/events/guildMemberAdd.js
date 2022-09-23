const client = require("../index");

client.on("guildMemberAdd", async (guildMember) => {
  const guild = client.guilds.cache.get("744914400065880114");
  const welcomeChannel = client.channels.cache.get("744914400774848554");
  if (guild == guildMember.guild.id) {
    welcomeChannel.send({
      content: `👋 Welcome! **${guildMember.user}** has just joined the server! Grab some roles from <#937085914180628490> and let us know who you are within <#912413511664173056>`,
    });
  }
});
