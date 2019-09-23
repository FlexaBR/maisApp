exports.up = function(knex, Promise) {
    return knex.schema.createTable('perfis', table => {
        table.increments('id').primary()
        table.string('nome').notNull().unique()
    }).then(function () {
        return knex('perfis').insert([
            { nome: 'Admin' },
            { nome: 'Geral' },
            { nome: 'Diretor' },
            { nome: 'Preposto' },
            { nome: 'Cliente' }
        ])
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('perfis')
  };