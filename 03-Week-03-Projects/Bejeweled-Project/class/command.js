// File: command.js for Command class E5S syntax

function Command(key, description, action) {
    this.key = key;
    this.description = description;
    this.action = action;
}

Command.prototype.execute = function () {
    this.action();
};

  module.exports = Command;
