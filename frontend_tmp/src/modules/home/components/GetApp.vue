<template>
  <v-alert
    class="mt-n5"
    color="vinho"
    dark
    dense
    tile
    height="56"
  >
    <v-container
      py-0
      mt-n2
    >
      <v-row
        align="center"
        justify="center"
      >
        <v-col class="grow hidden-sm-and-down">
          <h2 class="title font-weight-light">
            Facilite suas consultas, orçamentos e pedidos.
          </h2>
        </v-col>
        <v-col class="shrink">
          <v-btn
            outlined
            to="/login"
          >
            APP +Rep
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-alert>
</template>
