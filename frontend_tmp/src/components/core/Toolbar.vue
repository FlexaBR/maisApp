<template>
  <v-app-bar
    app
    :height="$vuetify.breakpoint.mdAndUp ? 68 : 58"
    elevate-on-scroll
    v-scroll="onScroll"
    :color="!isScrolling ? 'rgba(47, 59, 126, .2)' : 'rgba(47, 59, 126, .7)'"
  >
    <v-img
      class="shrink"
      max-width="40%"
      :src="!isScrolling ? require('@/assets/logoM.png') : require('@/assets/logoMB.png')"
      width="180"
    />
    <v-spacer />
    <template v-if="$vuetify.breakpoint.mdAndUp">
      <v-btn
        v-for="(item, i) in items"
        :key="i"
        :to="item.to"
        class="text-capitalize subtitle-1 mx-1"
        text
        dark
      >
        <span v-text="item.text" />
      </v-btn>
      <v-btn
        class="text-capitalize subtitle-1 mx-1"
        text
        to="/login"
        dark
      >
        <v-icon class="mr-1">
          mdi-account-circle
        </v-icon>Entrar
      </v-btn>
    </template>
    <v-menu v-else>
      <template v-slot:activator="{ on }">
        <v-btn
          icon
          v-on="on"
          color="vinho"
        >
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </template>
      <v-card
        color="vinho"
        dark
      >
        <v-list color="transparent">
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
            :to="item.to"
          >
            <v-list-item-title v-text="item.text" />
          </v-list-item>
          <v-btn
            text
            to="/login"
            dark
          >
            <v-icon>
              mdi-account-circle
            </v-icon>
          </v-btn>
        </v-list>
      </v-card>
    </v-menu>
  </v-app-bar>
</template>

<script>
// Utilities
import { mapMutations } from 'vuex'

export default {
  data: () => ({
    isScrolling: false
  }),

  computed: {
    items () {
      return [
        {
          'to': '/',
          'text': 'Home'
        },
        {
          'to': '/contact',
          'text': 'Contato'
        }
      ]
    }
  },

  methods: {
    ...mapMutations(['toggleDrawer']),
    onScroll () {
      this.isScrolling = (window.pageYOffset ||
        document.documentElement.scrollTop || 0) > 25
    }
  }
}
</script>
