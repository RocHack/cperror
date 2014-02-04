var irc = require('irc');

var channels = ['###rochack']
var client = new irc.Client('irc.freenode.net', 'cperror', {
    channels: channels,
});
var complaints = [
	'Listen for 30 seconds and then give yourself a 1 minute break.',
	'Count how many times your professor says "Automata" in a minute',
	'Count how many times your professor says "OK" in 2 minutes',
	'Think about whether attending lectures is better or worse than going to a boring department meeting.',
	'Count how many times your professor says "Good" in a minute',
	'Sometimes you just wanna walk out the door and not be a CS major. But then you realize things could get better.',
	'What would be a good recursive acronym for your class?',
	'Write an NFA to model your attention span in lecture. Then convert that NFA to a DFA.',
	'Recall that the "prerequisites for enjoying this class are curiosity, appreciation for learning diverse elegant things, and the lust for hard work." If this app doesn\'t meet these required specifications, we offer a 100% money-back guarantee.',
	'Don\'t procrastinate on having fun. Procrastination is the grave in which opportunity is buried.',
	'Try to find as many errors/contradictions in the next assignment as you can.',
	'Do you think you could give better lectures? Vote coming soon.',
	'If you think some of these sayings are a bit repetitive, feel free to add diversity to the list by emailing the creator of this bot.',
	'By collecting data over multiple classes, see if you can model the number of words your professor says in a minute using big-Oh notation.',
	'Hope for a fire drill!',
	'Take the last sentence your professor said and modify it to make a more coherent sentence (easy task).',
	'Take the last sentence your professor said and modify it to make a less coherent sentence (medium difficulty).',
	'Identify the next sentence your professor says that can be the subject of "That\'s what she said."',
	'See if you can find a correlation between the length of your professor\'s sentences and how much you understand them.',
	'If you\'re significantly more tired now than when you walked in, consider drinking more coffee beforehand.',
	'Write an essay in which you determine whether the things the person you\'re listening to says can easily be turned into a lullaby.',
	'Look at the clock, and don\'t look at it again for at least 10 seconds.',
	'Hang in there!!!!!',
	'Help extend this command-line application so that it can easily accept inspirational sayings from other students.',
	'Acknowledge that sometimes your professor\'s right. In particular, when they say "this is getting really boring."',
	'If you\'re feeling gutsy, get the whole class to train the professor to stand on the left-hand side of the stage using classical conditioning (i.e. Pavlov conditioning).',
	'If you haven\'t been on Facebook for the last 5 minutes, give yourself a break and check for new status updates.'
];
var inspirations = [
	'STOP COMPLAINING! LIFE IS GOOD!',
	'If you\'re using me, you probably have better things to do...',
	'Trying to get me to say "inspirational" things doesn\'t always work, you know. You can\'t complain about everything.',
	'ACTUALLY LISTEN TO YOUR PROFESSOR FOR ONCE! After all, your professor is probably a lot smarter than you, and knows what he\'s talking about.',
	'If you use me one more time, I\'ll consider banning you from complaining for the rest of the semester.'
];

client.addListener('message', function (from, to, message) {
	console.log(from, to, message);
	// see whether we should respond to the message
	var to_respond = response_type(from, to, message);

	// respond, depending on the type of response we want
	var response = "";
	switch(to_respond) {
		case 0: break;
		case 1:
			response = produce_response(message);
			client.say(to, response);
			break;
		case 2:
			response = produce_positive_response(message);
			client.say(to, response);
			break;
		case 3:
			response = produce_negative_response(message);
			client.say(to, response);
			break;
		case 4:
			response = produce_response(message);
			client.say(from, response);
			break;
		case 5:
			response = produce_positive_response(message);
			client.say(from, response);
			break;
		case 6:
			response = produce_negative_response(message);
			client.say(from, response);
			break;
	}

	console.log(response);
});

// produces a response to a given complaint (only if cperror is said in the message)
var produce_response = function(message) {
	var which_type_of_message = Math.round(Math.random());
	var response = "";
	if(which_type_of_message == 0) {
		response = produce_positive_response(message);
	} else {
		response = produce_negative_response(message);
	}
	return response;
}
// produces a positive response to the given complaint
var produce_positive_response = function(message) {
	return inspirations[Math.floor(Math.random()*(inspirations.length))];
}
// produces a negative response to the given complaint
var produce_negative_response = function(message) {
	return complaints[Math.floor(Math.random()*(complaints.length))];
}

// checks to see whether we should respond to a certain message, and returns an integer representing what type of response
// cperror should give
/*
	RESPONSE TYPES:
		0: no response
		1: general response to the channel
		2: "positive" response to the channel
		3: "negative" response to the channel
		4: general response to a user
		5: "positive" response to a user
		6: "negative" response to a user
*/
var response_type = function(from, to, message) {
	// respond to a user
	if(to==="cperror") {
		return positive_negative_test(message)+1;
	} 
	// respond to the channel
	else if(channels.indexOf(to) != -1) {
		return positive_negative_test(message)+4;
	}
	// do nothing
	else {
		return 0;
	}
}

// determines whether to emit a positive, negative, or either type of message
// returns 0 if general, 1 if positive, or 2 if negative
var positive_negative_test = function(message) {
	return 0; // placeholder
}








