<template>
  <div>
    <h1>Lançamentos Pedidos</h1>
    <PedidosList />
  </div>
</template>

<script>

import PedidosList from './../components/PedidosList.vue'

export default {
  name: 'PedidosHome',
  components: {
    PedidosList
  }
}
</script>
