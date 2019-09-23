exports.up = function(knex, Promise) {
    return knex.schema.createTable('faturas', table => {
        table.increments('id').primary()
        table.integer('pedido_id').unsigned()
        table.foreign('pedido_id').references('pedidos.id')
        table.boolean('cancelado')
            .notNull().defaultTo(false)
        table.string('nf')    
        table.dateTime('dataFatu')
        table.decimal('valFatu', 6, 2)
        table.string('cadasPor')
        table.timestamp('dataCadas')
            .defaultTo(knex.fn.now())
        table.string('atualPor')
        table.dateTime('dataAtual')
            .defaultTo(knex.fn.now())
    }).then(function () {
        return knex('faturas').insert([
            { pedido_id: 1, nf: 'nf 1 tst'}
        ])
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('faturas')
};