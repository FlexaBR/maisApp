<template>

  <v-list-tile>
    <v-list-tile-content>
      <v-list-tile-title>{{ pedido.oc }}</v-list-tile-title>
      <v-list-tile-sub-title>{{ pedido.cliente.razaoSocial }}</v-list-tile-sub-title>
    </v-list-tile-content>
    <v-list-tile-action>
      <span :class="situacaoColor(pedido.situacao)">{{ pedido.situacao }}</span>
      <span>{{ formatCurrency(pedido.total) }}</span>
    </v-list-tile-action>
  </v-list-tile>
</template>

<script>

import formatCurrencyMixin from '@/mixins/format-currency'

export default {
  name: 'PedidosListItem',
  mixins: [
    formatCurrencyMixin
  ],
  props: {
    pedido: Object
  },
  methods: {
    situacaoColor (situacao) {
      return situacao === 3
        ? 'error--text text--lighten-1'
        : 'primary--text text--lighten-1'
    }
  }
}

</script>
