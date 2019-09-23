const db = require('../../config/db')

module.exports = {
    faturas(pedido) {
        return db('faturas')
            .join(
                'pedidos',
                'pedidos.id',
                'faturas.pedido_id'
            )
            .where({ pedido_id: pedido.id })
    }
}