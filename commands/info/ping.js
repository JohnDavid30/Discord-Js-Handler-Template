const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "ping",
    developersCmd: false,
    description: "Description Goes Here.",
    userpermissions: ["USE_APPLICATION_COMMANDS", "VIEW_CHANNEL"],
    botpermissions: ["SEND_MESSAGES", "VIEW_CHANNEL"],
    run: async(client, interaction) => {
        const reloadembed = new MessageEmbed()
          
        .setTitle(`${client.user.tag}: Ping `)
        .addField(`Client ping:`, `${client.ws.ping}`);
        interaction.reply({ embeds: [reloadembed]})
    },
}; 
