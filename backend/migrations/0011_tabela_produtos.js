exports.up = function(knex, Promise) {
    return knex.schema.createTable('produtos', table => {
        table.increments('id').primary()
        table.integer('fabrica_id').unsigned()
        table.foreign('fabrica_id').references('fabricas.id')
        table.boolean('ativo')
            .notNull().defaultTo(true)
        table.string('nomeProd').notNull()
        table.decimal('tabela1', 6, 2).notNull()
        table.decimal('tabela2', 6, 2)
        table.decimal('tabela3', 6, 2)
        table.string('cadasPor')
        table.timestamp('dataCadas')
            .defaultTo(knex.fn.now())
        table.string('atualPor')
        table.dateTime('dataAtual')
            .defaultTo(knex.fn.now())
    }).then(function () {
        return knex('produtos').insert([
            { fabrica_id: 1, nomeProd: 'Produto tst 1', tabela1: 9.99 }
        ])
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('produtos')
};