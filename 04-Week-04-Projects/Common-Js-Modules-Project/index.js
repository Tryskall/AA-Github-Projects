const helloMessage = require('./messages/hello-message');
const sayMessage = require('./messages/say-message');
const sayHelloTo = require('./send-messages/say-hello-to');
const giveMessageToMrsPotato = require('./send-messages/give-message-to-mrs-potato');


const msg1 = "You are looking very spudly today!";
const msg2 = "There's a good deal on mattresses tomorrow.";
const msg3 = "Do you like to do things in unnecessarily complicated ways?";

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

sayHelloTo("Mr. Potato");
giveMessageToMrsPotato(msg1);
giveMessageToMrsPotato(msg2);
giveMessageToMrsPotato(msg3);
