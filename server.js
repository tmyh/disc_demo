// dummy server
var http = require('http');
var server = http.createServer();

server.on('request', function(req, res) {
    res.writeHead(200, {'Content-Type' : 'text/plain'});
    res.end();
});
server.listen(8080);


const Discord = require('discord.js');
const client = new Discord.Client();

const Sake = require('./sake.js');


client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
	if (message.content === '!ping') {
		message.channel.send('Pong.');
	}
	if(message.content.indexOf("酒")>=0)
  	{
    		message.channel.send(Sake.getSakeInfoR());
  	}

});

client.login(process.env.DISC_TOKEN);
