tweetStream
===========
A live tweet stream for ENG1003. Whenever the phrase "ENG1003" is mentioned on Twitter, this server will broadcast the tweet (including the author, time, content etc.) as a JSON object to all websites or apps listening in via socket.io.


Setup Instructions:
-------------------
0. Create an app over at Twitter's [Application Manager](https://apps.twitter.com/) to receive your API tokens etc. (approx 30sec)
1. Install [node.js](https://www.nodejs.org)
2. Clone this repository, point a terminal to its root directory and type `npm install` to install all dependencies
3. Open `example-config.js` and fill in the fields with your Twitter details then rename the file `config.js`
3. Back in terminal (at the root of the repository), type `node tweetStream.js` to run the server
4. Open `index.html` (from the 'Example' folder) in your browser to see an example student website listening in to the server

The student website can be made more or less complicated as desired - i.e a scrolling list of incomming tweets can be implemented.

Note: Much of this code has been adapted from that shown on the socket.io [homepage](http://socket.io/)
