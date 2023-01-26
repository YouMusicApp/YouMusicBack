const dotenv = require('dotenv')
const logger = require('loglevel')

//REPASAR, LOGGER NO INSTALADO

dotenv.config()

logger.enableAll()

const ENV = process.env.NODE_ENV || 'development'

const CONFIG = {
    development: {
        app: {
            PORT: process.env.PORT || 4000
        },
        logger: {
            warn: logger.warn,
            info: logger.info,
            error: logger.error,
            trace: logger.trace,
            debug: logger.debug
        },
        db: {
            uri: process.env.MONGODB_URI_CLUSTER
        },
        auth0: {
            client_origin: process.env.APP_ORIGIN,
            audience: process.env.AUTH0_AUDIENCE,
            issuer: process.env.AUTH0_ISSUER
        }
    },
    production: {
        app: {
            PORT: process.env.PORT || 4000
        },
        logger: {
            warn: logger.warn,
            info: logger.info,
            error: logger.error,
            trace: logger.trace,
            debug: logger.debug
        },
        db: {
            url: 'http://localhost:4000'
        }
    }
}

module.exports = CONFIG[ENV]