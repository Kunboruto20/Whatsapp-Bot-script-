const { default: makeWASocket, useMultiFileAuthState } = require('@whiskeysockets/baileys');

async function connectToWhatsApp() {
  const { state, saveCreds } = await useMultiFileAuthState('auth');
  const sock = makeWASocket({ auth: state });

  sock.ev.on('creds.update', saveCreds);
  return sock;
}

module.exports = { connectToWhatsApp };
