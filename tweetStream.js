
// Server
///////////////////////////////////////////////////////////////////////////////
var io = require('socket.io')(8080);
var cfg = require('./config');
var tw = require('node-tweet-stream')(cfg);

// Define word to track
tw.track('javascript');

// Define what to do on tweet event
tw.on('tweet', function(tweet) {
	io.emit('tweet', tweet);
});

