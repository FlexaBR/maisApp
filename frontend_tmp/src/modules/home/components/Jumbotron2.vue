<template>
  <v-sheet
    :height="$vuetify.breakpoint.smAndUp ? '56vh' : '48vh'"
    tile
    class="mt-n12"
  >
    <v-img
      src="/static/home/budd/budd9.jpg"
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
            <h1
              :class="$vuetify.breakpoint.smAndUp ? 'display-3' : 'display-1'"
              class="mb-2 mt-8"
            >Contato</h1>
            <div class="title font-weight-light">Faça contato, facilite suas compras e aumente os resultados de sua loja!</div>
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
