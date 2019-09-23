const db = require('../../config/db')

module.exports = {
    
    faturas() {
        return db('faturas')
    }
}