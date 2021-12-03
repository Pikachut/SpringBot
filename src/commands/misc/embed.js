const { Command } = require('discord-akairo');
const { MessageEmbed } = require('discord.js');

class EmbedCommand extends Command {
    constructor() {
        super('embed', {
            aliases: ['embed']
        });
    }

    exec(message) {
        const embed = new MessageEmbed()
           .setColor('#dac147')
           .setDescription("Test")
           .addFields({
               name: 'Titre Champ 1' , value: 'Valeur Champ 1'
           })

           return message.channel.send({ embed: [ embed ] });
    }
}

module.exports = EmbedCommand;