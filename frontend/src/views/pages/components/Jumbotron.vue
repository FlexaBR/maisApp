<template>
  <v-sheet
    :height="$vuetify.breakpoint.smAndUp ? '62vh' : '78vh'"
    color="white"
    tile
  >
    <v-img
      :class="{
        'v-image--sm': this.$vuetify.breakpoint.smAndDown,
        'v-image--md': this.$vuetify.breakpoint.mdAndDown
      }"
      src="@/assets/home/budd/index_1.jpg"
      gradient="to top, rgba(0, 0, 0, .0), rgba(0, 0, 0, .4)"
      height="100%"
    >
      <v-container
        fill-height
        white--text
      >
        <v-slide-x-transition appear>
          <v-col
            align="center"
            justify="center"
          >
            <div
              :class="$vuetify.breakpoint.smAndUp ? 'display-4' : 'display-3'"
              class="mb-2"
            >Bom é Comprar Certo e Vender Bem</div>
            <div :class="$vuetify.breakpoint.smAndUp ? 'display-1 font-weight-light' : 'display-1 font-weight-light'">Mais Representações a sua assessoria no Rio Grande do Sul para as compras de sua loja.</div>
          </v-col>
        </v-slide-x-transition>
      </v-container>
    </v-img>
  </v-sheet>
</template>

<script>
  export default {
  }
</script>
