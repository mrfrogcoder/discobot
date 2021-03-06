var Discord = require('discord.io');
var logger = require('winston');

// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(logger.transports.Console, {
  colorize: true
});
logger.level = 'debug';

// Initialize Discord Bot
var bot = new Discord.Client({
  token: process.env.BOT_TOKEY,
  autorun: true
});

bot.on('ready', function(evt) {
  logger.info('Connected');
  logger.info('Logged in as: ');
  logger.info(bot.username + ' - (' + bot.id + ')');
});

bot.on('message', function(user, userID, channelID, message, evt) {
  // Our bot needs to know if it needs to execute a command
  // for this script it will listen for messages that will start with `!`
  if (message.substring(0, 1) == '!') {
    var args = message.substring(1).split(' ');
    var cmd = args[0];

    args = args.splice(1);

    switch (cmd) {
      // !ping
      case 'ping':
        bot.sendMessage({ to: userID, message: 'Pong!' });
        break;
      case 'shiny':
        bot.sendMessage({ to: channelID, message: 'Shiny Alden you like? :p' });
        break;
      case 'xcoord':
        bot.sendMessage({
          to: channelID,
          message:
            '14.650817, 121.07525, Globe Store UP TOWN, Quezon City, Metro Manila, Philippine\n14.653978, 121.032959, Globe Store Trinoma, Quezon City, Metro Manila, Philippine\n14.650817, 121.07525, Globe Store UP TOWN, Quezon City, Metro Manila, Philippine\n14.653978, 121.032959, Globe Store Trinoma, Quezon City, Metro Manila, Philippine\n'
        });
        break;

      default:
        bot.sendMessage({ to: channelID, message: 'Unknown command.' });
    }
  }
});
