// ———————————————[Client Requirement]———————————————
const Discord = require("discord.js");
const client = new Discord.Client({
  //fetchAllMembers: false,
  //restTimeOffset: 0,
  //restWsBridgetimeout: 100,
  shards: "auto",
  failIfNotExists: false,
  allowedMentions: {
    parse: [],
    repliedUser: false,
  },
  partials: ["MESSAGE", "CHANNEL", "REACTION", "GUILD_MEMBER", "USER"],
  intents: [
    Discord.Intents.FLAGS.GUILDS,
    Discord.Intents.FLAGS.GUILD_MEMBERS,
    //Discord.Intents.FLAGS.GUILD_BANS,
    Discord.Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS,
    //Discord.Intents.FLAGS.GUILD_INTEGRATIONS,
    //Discord.Intents.FLAGS.GUILD_WEBHOOKS,
    //Discord.Intents.FLAGS.GUILD_INVITES,
    Discord.Intents.FLAGS.GUILD_VOICE_STATES,
    //Discord.Intents.FLAGS.GUILD_PRESENCES,
    Discord.Intents.FLAGS.GUILD_MESSAGES,
    Discord.Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
    //Discord.Intents.FLAGS.GUILD_MESSAGE_TYPING,
    //Discord.Intents.FLAGS.DIRECT_MESSAGES,
    //Discord.Intents.FLAGS.DIRECT_MESSAGE_REACTIONS,
    //Discord.Intents.FLAGS.DIRECT_MESSAGE_TYPING
  ],
  
});
const config = require("./botconfig/config.json");
// ———————————————[Client Export]———————————————
client.commands = new Discord.Collection();
client.cooldowns = new Discord.Collection();
client.slashCommands = new Discord.Collection();
client.categories = require("fs").readdirSync(`./commands`);
client.commands = new Discord.Collection();
// Structure Intialization
["commands", "events"]
  .filter(Boolean)
  .forEach((h) => {
    require(`./handlers/${h}`)(client);
  });
// ———————————————[Client Login]———————————————
client.login(process.env.token);
