const dotenv = require('dotenv')
const logger = require('loglevel')


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
            uri: process.env.MONGODB_URL
        },
        auth0: {
            client_origin: process.env.APP_ORIGIN,
            audience: process.env.AUTH0_AUDIENCE,
            issuer: process.env.AUTH0_ISSUER
        },
        cloudinary: {
            cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
            api_key: process.env.CLOUDINARY_API_KEY,
            api_secret: process.env.CLOUDINARY_API_SECRET
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