const Discord = require("discord.js");
const client = news Discord.Client();

var prefix = "test%"

client.on("ready", () => {
  console.log("I'm ready.")
});

client.on("message", function(message) {
  if (message.author.equals(client.user)) return;
  if (!message.content.startsWith(prefix)) return;
  
  if (message.content.startsWith(prefix + "test")) {
    message.reply("Test is ok.");
  }
});

client.login(config.token);
