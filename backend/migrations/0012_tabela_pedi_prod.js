exports.up = function(knex, Promise) {
    return knex.schema.createTable('pedi_prod', table => {
        table.increments('id').primary()
        table.integer('pedido_id').unsigned().notNull()
        table.foreign('pedido_id').references('pedidos.id')
        table.integer('produto_id').unsigned().notNull()
        table.foreign('produto_id').references('produtos.id')
        table.boolean('cancelado')
            .notNull().defaultTo(false)
        table.string('detalhes')
        table.integer('quantidade').unsigned().notNull()
        table.decimal('preco', 6, 2)
        table.decimal('subT', 6, 2)
        table.string('cadasPor')
        table.timestamp('dataCadas')
            .defaultTo(knex.fn.now())
        table.string('atualPor')
        table.dateTime('dataAtual')
            .defaultTo(knex.fn.now())
    }).then(function () {
        return knex('pedi_prod').insert([
            { pedido_id: 1, produto_id: 1, detalhes: 'Vermelho', quantidade: 5 }
        ])
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('pedi_prod')
};