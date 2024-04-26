// File: user.js for User class

class User {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.following = new Set();
    }
}

module.exports = {
    User
};
