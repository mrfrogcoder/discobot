// const { Client, MessageAttachment } = require('discord.js');

// // Create an instance of a Discord client
// const client = new Client();

// // On déclare le préfixe
// var prefix = '?';

// client.on('message', message => {
//   // Le robot lui répondra pong si il envoi ping
//   if (message.content === 'ping') {
//     // le robot répond pong !
//     message.channel.send('Pong !');
//   }
//   if (message.content === '!rip') {
//     // Create the attachment using MessageAttachment
//     const attachment = new MessageAttachment('https://i.imgur.com/w3duR07.png');
//     // Send the attachment in the message channel
//     message.channel.send(attachment);
//   }

//   // Le robot lui répondra ceci si un utilisateur fait ?help
//   if (message.content.startsWith(prefix + 'help')) {
//     message.channel.send("Vous avez fait `?help` pour avoir l'aide.");
//   }
//   if (message.content == 'mp') {
//     message.author.send('voici un message privé !');
//   }
// });
// client.login(process.env.BOT_TOKEY);
// Extract the required classes from the discord.js module
const { Client, Attachment, RichEmbed } = require('discord.js');

// Create an instance of a Discord client
const client = new Client();

/**
 * The ready event is vital, it means that only _after_ this will your bot start reacting to information
 * received from Discord
 */
client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', message => {
  // If the message is '!rip'
  if (message.content === '!rip') {
    // Create the attachment using Attachment
    const attachment = new Attachment('https://i.imgur.com/w3duR07.png');
    // Send the attachment in the message channel
    message.channel.send(attachment);
  }

  if (message.content === 'how to embed') {
    // We can create embeds using the MessageEmbed constructor
    // Read more about all that you can do with the constructor
    // over at https://discord.js.org/#/docs/main/stable/class/RichEmbed
    const embed = new RichEmbed()
      // Set the title of the field
      .setTitle('A slick little embed')
      // Set the color of the embed
      .setColor(0xff0000)
      // Set the main content of the embed
      .setDescription('Hello, this is a slick embed!');
    // Send the embed to the same channel as the message
    message.channel.send(embed);
  }

  if (message.content === '!memes') {
    // Get the buffer from the 'memes.txt', assuming that the file exists
    const buffer = fs.readFileSync('./memes.txt');

    /**
     * Create the attachment using Attachment,
     * overwritting the default file name to 'memes.txt'
     * Read more about it over at
     * http://discord.js.org/#/docs/main/stable/class/Attachment
     */
    const attachment = new Attachment(buffer, 'memes.txt');
    // Send the attachment in the message channel with a content
    message.channel.send(`${message.author}, here are your memes!`, attachment);
  }
});

// Log our bot in using the token from https://discordapp.com/developers/applications/me
client.login(process.env.BOT_TOKEY);
