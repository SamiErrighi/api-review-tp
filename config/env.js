module.exports = {
    development: {
        db: 'mongodb://localhost/api-review-tp'
    },

    production: {
        db: process.MONGO_STRING_CONNECTION
    }
}