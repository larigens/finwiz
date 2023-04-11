const jwt = require('jsonwebtoken');
require("dotenv").config(); // To use environment variables.

// Set token secret and expiration date
const secret = process.env.JWT_SECRET;
const expiration = '2h';

// Authentication using JSON Web Tokens (JWTs).
module.exports = {
    // function for our authenticated routes
    authMiddleware: function ({ req }) {
        // allows token to be sent via req.body, req.query, or headers
        let token = req.body.token || req.query.token || req.headers.authorization;
        // ["Bearer", "<tokenvalue>"]
        if (req.headers.authorization) {
            token = token.split(' ').pop().trim();
        }
        if (!token) {
            return req;
        }
        // verify token and get user data out of it
        try {
            const { data } = jwt.verify(token, secret, { maxAge: expiration });
            req.user = data;
        } catch (err) {
            console.log('Invalid token:', err.message);
        }
        // return the request object so it can be passed to the resolver as `context`
        return req;
    },

    signToken: function ({ username, email, _id, role }) { // Takes in an object with user data.
        const payload = { username, email, _id, role };
        return jwt.sign({ data: payload }, secret, { expiresIn: expiration }); // Returns a new JWT that includes that data in the payload. 
    },
    // The function uses the jwt.sign method from the jsonwebtoken library to create the token with a data property that includes the user data object, 
    // a secret key (defined in the module), and an expiration time (also defined in the module).
};