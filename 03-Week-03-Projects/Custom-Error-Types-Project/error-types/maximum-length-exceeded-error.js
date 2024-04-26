// File: maximum-length-exceeded-error.js for MaximumLengthExceededError class

const ValidationError = require('./validation-error');

class MaximumLengthExceededError extends ValidationError {
    constructor(excessLength, ...params) {
        super( ...params);
        this.excessLength = excessLength;
        if (excessLength) {
            this.message = `Maximum length exceeded by ${excessLength}`;
        } else {
            this.message = `Maximum length exceeded`;
        }
        this.name = "MaximumLengthExceededError";
    }
}

/*****************************************************************/
/***************** DO NOT EDIT CODE BELOW THIS LINE **************/

try {
    module.exports = MaximumLengthExceededError;
} catch {
    module.exports = null;
}
