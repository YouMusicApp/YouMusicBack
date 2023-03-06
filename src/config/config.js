let config = null

const getConfig = () => {
    if (!config) {
        config = {
            mongodb_url: process.env.MONGODB_URL,
            port: process.env.PORT,
            app_origin: process.env.APP_ORIGIN,
            cloudinary: {
                cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
                api_key: process.env.CLOUDINARY_API_KEY,
                api_secret: process.env.CLOUDINARY_API_SECRET
            },
            auth0: {
                audience: process.env.AUTH0_AUDIENCE,
                issuer: process.env.AUTH0_ISSUER
            }
        }
    }
    return config
}

module.exports = {
    getConfig
}