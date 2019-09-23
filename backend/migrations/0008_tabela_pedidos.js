exports.up = function(knex, Promise) {
    return knex.schema.createTable('pedidos', table => {
        table.increments('id').primary()
        table.integer('cliente_id').unsigned()
        table.foreign('cliente_id').references('clientes.id')
        table.integer('fabrica_id').unsigned()
        table.foreign('fabrica_id').references('fabricas.id')
        table.integer('preposto_id').unsigned()
        table.foreign('preposto_id').references('prepostos.id')
        table.integer('situacao').notNull()
            .defaultTo(1)
        table.dateTime('dataOrca')
            .defaultTo(knex.fn.now())
        table.decimal('total', 6, 2)
        table.decimal('desconto', 6, 2)
        table.string('cadasPor')
        table.timestamp('dataCadas')
            .defaultTo(knex.fn.now())
        table.string('atualPor')
        table.dateTime('dataAtual')
            .defaultTo(knex.fn.now())
    }).then(function () {
        return knex('pedidos').insert([
            { cliente_id: 1, fabrica_id: 1, preposto_id: 1, atualPor: 'Ricardo' }
        ])
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('pedidos')
};