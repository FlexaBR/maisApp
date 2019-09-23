const usuario = require('./usuario')
const perfil = require('./perfil')
const pedido = require('./pedido')
const fatura = require('./fatura')

 module.exports = {
    ...usuario,
    ...perfil,
    ...pedido,
    ...fatura
 }