const fs = require("fs");

module.exports = async(client) => {
    const array = [];

    fs.readdirSync(`${process.cwd()}/commands`).forEach((dir) => {
        let files = fs.readdirSync(`${process.cwd()}/commands/${dir}`).filter((file) => file.endsWith(".js"));

        for (let file of files) {
            let cmd = require(`${process.cwd()}/commands/${dir}/${file}`)

            client.commands.set(cmd.name, cmd);
            array.push(cmd);
        }
    })
    client.on("ready", async() => {
        await client.application.commands.set(array)
    })
}
