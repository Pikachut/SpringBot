const { embed } = require('../util/functions');
const { AkairoClient, CommandHandler, ListenerHandler } = require('discord-akairo');

module.exports = class SpringClient extends AkairoClient {
    constructor(config ={}) {
        super(
          { ownerID: '814254095312748566' },
          {
              allowedMentions: {
                  parse: ['roles', 'everyone', 'users'],
                  repliedUsers : false
              },
              partials: ['CHANNEL', 'GUILD_MEMBER', 'MESSAGE', 'REACTION', 'USER' ],
              presence: {
                  status: 'dnd',
                  activities: [
                      {
                          name: 'Joue a .help',
                          type: 'PLAYING',
                      }
                  ]
              },
              intents: 581
          }
        );

        this.commandHandler = new CommandHandler(this, {
            allowMention: true,
            prefix: config.prefix,
            defaultCooldown: 2000,
            directory: './src/commands/'
        });

        this.listenersHandler = new ListenerHandler(this, {
            directory: './src/listners/'
        });

        // this.functions.embed()
        this.functions = {
            embed: embed
        }

        this.commandHandler.loadAll();
        this.commandHandler.useListenerHandler(this.listenerHandler);
        this.listenersHandler.loadAll();
    }
}