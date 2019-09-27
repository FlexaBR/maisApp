import apollo from '@/plugins/apollo'

import PedidosQuery from './../graphql/Pedidos.gql'

const pedidos = async variables => {
  const response = await apollo.query({
    query: PedidosQuery,
    variables
  })
  return response.data.pedidos
}

export default {
  pedidos
}
