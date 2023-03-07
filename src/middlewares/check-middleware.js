const { auth0 } = require('../config/config')
const { expressjwt: jwt } = require('express-jwt')
const jwksRsa = require('jwks-rsa')



const checkJwt = jwt({
    secret: jwksRsa.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: 'https://dev-712qgwanivs72bgp.us.auth0.com/.well-known/jwks.json'
    }),
    audience: 'http://localhost:4000/',
    issuer: 'https://dev-712qgwanivs72bgp.us.auth0.com/',
    algorithms: ['RS256']
   
})



module.exports = {
    checkJwt
}
