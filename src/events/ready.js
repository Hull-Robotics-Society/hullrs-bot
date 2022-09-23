const client = require("../index");

client.on("ready", () => {
  console.log("HURS is online");
  client.user.setActivity(`Slash Commands`, { type: "WATCHING" });

  setInterval(() => {
    const memberCount =
      client.guilds.cache.get("744914400065880114").memberCount;
    const channel = client.channels.cache.get("937366584735981569");
    channel.setName(`Members: ${memberCount.toLocaleString()}`);
  }, 600000);
});
