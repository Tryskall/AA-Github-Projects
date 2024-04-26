// File: validation-error.js for ValidationError class

class ValidationError extends Error {
    constructor(message = "Invalid input", ...params) {
        super(message, ...params);
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, ValidationError);
        }
        this.name = "ValidationError"
        this.message = message || 'Invalid input';
    }
}

/**********************************************************/
/************** DO NOT CHANGE THIS CODE *******************/

try {
    module.exports = ValidationError;
} catch {
    module.exports = null;
}
