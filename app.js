const { Client, MessageAttachment } = require('discord.js');

// Create an instance of a Discord client
const client = new Client();

// On déclare le préfixe
var prefix = '?';

client.on('message', message => {
  // Le robot lui répondra pong si il envoi ping
  if (message.content === 'ping') {
    // le robot répond pong !
    message.channel.send('Pong !');
  }
  if (message.content === '!rip') {
    // Create the attachment using MessageAttachment
    const attachment = new MessageAttachment('https://i.imgur.com/w3duR07.png');
    // Send the attachment in the message channel
    message.channel.send(attachment);
  }

  // Le robot lui répondra ceci si un utilisateur fait ?help
  if (message.content.startsWith(prefix + 'help')) {
    message.channel.send("Vous avez fait `?help` pour avoir l'aide.");
  }
  if (message.content == 'mp') {
    message.author.send('voici un message privé !');
  }
});
client.login(process.env.BOT_TOKEY);
