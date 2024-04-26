// ./messages/say-message.js

const helloMessage = require('../messages/hello-message');

function sayMessage(message) {
  console.log(`"${message}"`)
}

module.exports = sayMessage;

sayMessage(helloMessage);
