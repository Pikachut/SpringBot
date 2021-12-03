const { TOKEN } = require('./util/config');
const SpringClient = require('./structures/SpringClient');

let client = new SpringClient({ prefix: '.' });

client.login(TOKEN);