const RPC = require('discord-rpc');

const clientId = process.env.CLIENT_ID;
const accessToken = process.env.ACCESS_TOKEN;
const channelId = process.env.CHANNEL_ID;

const client = new RPC.Client({ transport: 'ipc' });

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

// connect and authenticate
client.connect(clientId).then(() => {
  client.authenticate(accessToken);
});
