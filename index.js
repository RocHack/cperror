var irc = require('irc');
var client = new irc.Client('irc.freenode.net', 'cperror', {
    channels: ['###rochack'],
});
var complaints = [
	''
];

client.addListener('message', function (from, to, message) {
	console.log(from, to, message);
	if(message.indexOf('cperror') != -1) {
		var response = produce_response(message);
    	client.say('###rochack', response);
	}
});

// produces a response to a given complaint (only if cperror is said in the message)
var produce_response = function(message) {

}
