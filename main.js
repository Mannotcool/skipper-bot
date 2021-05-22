const Discord = require('discord.js')
const client = new Discord.Client()
const { nword } = require('./config.json')
const { nword2 } = require('./config.json')
const { token } = require('./config.json')

client.on('guildCreate', guild => {
    guild.systemChannel.send(`Hello, thanks for inviting me to your server. From this point on, any racial slurs that are detected will automaticly be deleted (if I have permissions to delete messages for that role). Thanks, skipper.`)
})



client.on('ready', async () => {
    console.log('Bot has logged in.')
    client.user.setActivity("Patroling for racists.");
})

client.on('message', message => {
    var scannednword = message.content.replace(/[^0-9a-z]/gi, '').toLowerCase();
    
    if (scannednword === nword || scannednword === nword2 && message.member.id !== client.user.id ) {
        message.delete();
        message.reply( {files: ["./" + "obama" + ".jpeg"] } );
        
    }
})

// Bot Login
client.login(token)