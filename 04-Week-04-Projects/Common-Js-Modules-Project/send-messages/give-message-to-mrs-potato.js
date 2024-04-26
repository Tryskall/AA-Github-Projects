// ./send-messages/give-message-to-mrs-potato.js

const sayHelloTo = require('../send-messages/say-hello-to.js')

function giveMessageToMrsPotato(message) {
  sayHelloTo("Mrs. Potato");
  console.log(`(Psst... ${message})`)
}

module.exports = giveMessageToMrsPotato;

giveMessageToMrsPotato("Hi Buzz");
