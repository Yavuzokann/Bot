const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');

var prefix = ayarlar.prefix;

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (!msg.content.startsWith(prefix)) {
    return;
  }
  if (msg.content.toLowerCase() === prefix + 'ping') {
    msg.reply('Pong! **' + client.ping + '** ms');
  }
});

/** Karşılık mesajı. */
client.on('message', msg => {
  if (msg.content === 'sa') {
    msg.reply('Aleyküm Selam, Hoş Geldiniz!');
  }
  if (msg.content === 'Sa') {
    msg.reply('Aleyküm Selam, Hoş Geldiniz!');
  }
  if (msg.content === 'SA') {
    msg.reply('Aleyküm Selam, Hoş Geldiniz!');
  }
  if (msg.content === 'Sea') {
    msg.reply('Aleyküm Selam, Hoş Geldiniz!');
  }
});

client.login('NTY1MjYxMzY5MzY1MjMzNjc0.XLgz0w.xOyWotJBB_Q1xko7kn2h4hCInAg');
