const { auth0 } = require('../config/config')
const { expressjwt: jwt } = require('express-jwt')
const jwksRsa = require('jwks-rsa')

const checkJwt = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: 'https://dev-712qgwanivs72bgp.us.auth0.com/.well-known/jwks.json' /* `${auth0.issuer}.well-known/jwks.json` */
  }),

  audience: auth0.audience,
  issuer: 'https://dev-712qgwanivs72bgp.us.auth0.com/'/* auth0.issuer */,
  algorithms: ['RS256']
})

module.exports = checkJwt;
