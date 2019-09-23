exports.up = function(knex, Promise) {
    return knex.schema.createTable('fabricas', table => {
        table.increments('id').primary()
        table.integer('cidade_id').unsigned()
        table.foreign('cidade_id').references('cidades.id')
        table.string('situacao').notNull()
            .defaultTo('ATIVA')
        table.string('razaoSocial').notNull()
        table.string('cadasPor')
        table.timestamp('dataCadas')
            .defaultTo(knex.fn.now())
        table.string('atualPor')
        table.dateTime('dataAtual')
            .defaultTo(knex.fn.now())
    }).then(function () {
        return knex('fabricas').insert([
            { cidade_id: 10, razaoSocial: 'Fabrica Teste 1' }
        ])
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('fabricas')
};