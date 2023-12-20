module.exports = {
    name: 'say', 
    category: 'Fun',
    run: (client, message, args) => {
        if (message.deletable) message.delete();
        message.channel.send(args.join(' '));
    }
}