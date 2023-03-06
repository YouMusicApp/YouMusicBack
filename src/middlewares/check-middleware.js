const { expressjwt: jwt } = require('express-jwt')
const jwksRsa = require('jwks-rsa')
const { getConfig } = require('../config/config')

const checkJwt = () => jwt({
    secret: jwksRsa.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: `${getConfig().auth0.issuer}.well-known/jwks.json`
    }),

    audience: getConfig().auth0.audience,
    issuer: getConfig().auth0.issuer,
    algorithms: ['RS256']
})

module.exports = {
    checkJwt
}
