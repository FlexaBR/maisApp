<template>
  <v-sheet
    :height="$vuetify.breakpoint.smAndUp ? '58vh' : '100vh'"
    tile
    class="mt-n12"
  >
    <v-img
      src="/static/home/budd/index_1.jpg"
      height="100%"
    >
      <v-container
        fill-height
        vinho--text
      >
        <v-slide-x-transition appear>
          <v-col
            align="center"
            justify="center"
          >
            <h1
              :class="$vuetify.breakpoint.smAndUp ? 'display-3' : 'display-2'"
              class="mb-2"
            >Bom é Comprar Bem</h1>
            <div class="title font-weight-light">Mais Representações a melhor assessoria para as compras de sua loja no Rio Grande do Sul.</div>
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
