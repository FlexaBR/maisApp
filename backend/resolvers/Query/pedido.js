const db = require('../../config/db')

module.exports = {
    
    pedidos() {
        return db('pedidos')
    },
    pedido(_, { filtro }) {
        if(!filtro) return null
        const { id } = filtro
        if(id) {
            return db('pedidos')
                .where({ id })
                .first()
        } else {
            return null
        }
    }
    
}