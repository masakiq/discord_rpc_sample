const RPC = require('discord-rpc');

const clientId = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;
const channelId = process.env.CHANNEL_ID;
const scopes = ['rpc', 'identify'];
const rpcToken = true;
const redirectUri = process.env.REDIRECT_URI;

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
  // authorize で '404: Not Found' となる
  client.authorize({scopes, clientSecret, rpcToken, redirectUri}).then((accessToken) => {
    client.authenticate(accessToken);
  });
});
