module.exports = {
    development: {
        db: 'mongodb://localhost/api-review-tp'
    },

    production: {
        db: process.env.MONGO_STRING_CONNECTION
    }
}