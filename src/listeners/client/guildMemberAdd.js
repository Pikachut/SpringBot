const { Listener } = require('discord-akairo');

class GuildMemberAdd extends Listener {
    constructor() {
        super('guildMemberAdd', {
            emitter: 'client',
            event: 'guildMemberAdd'
        });
    }

    exec(member) {
        console.log(`Bienvenue parmis nous ${member.user.username}!`);
    }
}

module.exports = GuildMemberAddListener;