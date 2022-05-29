
const Discord = require("discord.js");
module.exports = (client, interaction) => {
	if (interaction.isCommand()) {

            const command = client.commands.get(interaction.commandName);
            if (!client.commands.has(interaction.commandName) || !command) {
                return;
            }

            if (command.developersCmd) {
               let role = config.developersId;
                if (!role.includes(message.author.id)) {
                  return;
               }; 
            };

            if (command.userpermissions) {
                if (!interaction.member.permissions.has(command.userpermissions || [])) {
                    return;
                }
            };

            if (command.botpermissions) {
                if (!interaction.guild.me.permissions.has(command.botpermissions || [])) {
                    return;
                }
            }

           command.run(client, interaction)

        }
}