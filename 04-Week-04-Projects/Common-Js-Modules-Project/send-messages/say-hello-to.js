// ./send-messages/say-hello-to.js

const sayMessage = require('../messages/say-message');

function sayHelloTo(name) {
  sayMessage(`Hello ${name}!`)
}

module.exports = sayHelloTo;

sayHelloTo("Woody");
