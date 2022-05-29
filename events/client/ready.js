const config = require("../../botconfig/config.json");
const { green, white, cyanBright,  } = require("colors");
module.exports = async (client) => {
    

    //Game
    let statuses = ['/help', `${client.guilds.cache.size} servers, for a total of ${client.guilds.cache.reduce((a, g) => a + g.memberCount, 0)} users`];
    setInterval(function() {
  		let status = statuses[Math.floor(Math.random()*statuses.length)];
  		client.user.setActivity(status, {type: "LISTENING"});
  	}, 10000)
        console.log(white("[") + green("ONLINE") + white("] ") + green(`Logged to the client ${client.user.username}\n-> Ready on ${client.guilds.cache.size} servers for a total of ${client.users.cache.size} users`));
    
};