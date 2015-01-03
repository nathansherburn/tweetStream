tweetStream
===========
A live tweet stream for ENG1003. Whenever the phrase "ENG1003" is mentioned on Twitter, this server will broadcast the tweet (including the author, time, content etc.) as a JSON object to all websites or apps listening in via socket.io.


Setup Instructions:
-------------------
1. Install [node.js](https://www.nodejs.org)
2. Open a terminal at the root directory and type `npm install` to install all dependencies
3. After the dependencies have been installed, type `node tweetStream.js` to run the server
4. Open `index.html` (from the 'Example' folder) in your browser to see an example student website

The student website can be made more or less complicated as desired - i.e a scrolling list of incomming tweets can be implemented.


Note: Much of this code has been adapted from that shown on the socket.io [homepage](http://socket.io/)
