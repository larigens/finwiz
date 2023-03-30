const jwt = require('jsonwebtoken');
require("dotenv").config(); // To use environment variables.

const secret = process.env.JWT_SECRET;
const expiration = '2h';

// Authentication using JSON Web Tokens (JWTs).
module.exports = {
    authMiddleware: function ({ req }) {
        // Allows token to be sent via req.body, req.query, or headers
        let token = req.body.token || req.query.token || req.headers.authorization;

        // We split the token string into an array and return actual token
        if (req.headers.authorization) {
            token = token.split(' ').pop().trim();
        }
        // Checks if the token is included in the request body, query parameters, or authorization headers. 
        if (!token) {
            return req; // Returns the original request object.
        }

        // If token can be verified, add the decoded user's data to the request so it can be accessed in the resolver.
        try {
            const { data } = jwt.verify(token, secret, { maxAge: expiration });
            req.user = data;
        } catch {
            console.log('Invalid token');
        }

        // Return the request object so it can be passed to the resolver as `context`
        return req;
    },
    signToken: function ({ email, username, _id, role }) { // Takes in an object with user data.
        const payload = { email, username, _id, role };
        return jwt.sign({ data: payload }, secret, { expiresIn: expiration }); // Returns a new JWT that includes that data in the payload. 
    },
    // The function uses the jwt.sign method from the jsonwebtoken library to create the token with a data property that includes the user data object, 
    // a secret key (defined in the module), and an expiration time (also defined in the module).
};