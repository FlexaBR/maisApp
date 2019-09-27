<template>
  <v-footer
    app
    color="vinho"
    dark
    height="44"
  >
    <v-container>
      <v-layout
        row
        align-center
        class="mt-n3"
      >
        <v-flex
          xs11
          class="font-weight-thin"
        >
          <div>
            Made with
            <v-icon class="red--text ml-n1 mr-1">mdi-heart</v-icon>
            ©Flexa 2019
          </div>
        </v-flex>
        <v-layout
          row
          :class="$vuetify.breakpoint.mdAndUp ? 'ml-12' : 'ml-1'"
        >
          <v-btn
            fab
            x-small
            color="primary"
            title="Go to top"
            @click="$vuetify.goTo(0)"
          >
            <v-icon>keyboard_arrow_up</v-icon>
          </v-btn>

        </v-layout>
      </v-layout>
    </v-container>

  </v-footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>
