const { connectToWhatsApp } = require('./auth');
const setupCommands = require('./commands');
const config = require('./config');

connectToWhatsApp().then((sock) => {
  setupCommands(sock);
});
