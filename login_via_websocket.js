const RPC = require('discord-rpc');

const clientId = '{client_id}';

RPC.register(clientId);
const client = new RPC.Client({ transport: 'websocket' });

client.on('SPEAKING_START', (args) => {
  console.log('SPEAKING_START');
  console.log(args);
});

client.on('SPEAKING_STOP', (args) => {
  console.log('SPEAKING_STOP');
  console.log(args);
});

client.on('ready', () => {
  console.log('Logged in as', client.application.name);
  console.log('Authed for user', client.user.username);

  client.selectVoiceChannel(channelId);

  client.subscribe('SPEAKING_START', { channel_id: channelId }, (voice_status) => {
    console.log(voice_status);
  });

  client.subscribe('SPEAKING_STOP', { channel_id: channelId }, (voice_status) => {
    console.log(voice_status);
  });
});

// Log in to RPC with client id
client.login({ clientId });
