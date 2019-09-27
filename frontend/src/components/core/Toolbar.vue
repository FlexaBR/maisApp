<template>
  <v-app-bar
    app
    :height="$vuetify.breakpoint.mdAndUp ? 68 : 58"
    elevate-on-scroll
    v-scroll="onScroll"
    color="vinho"
  >
    <v-img
      class="shrink"
      max-width="40%"
      :src="require('@/assets/logoMB.png')"
      width="180"
      to= '/'
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
    </template>
    <v-menu v-else>
      <template v-slot:activator="{ on }">
        <v-btn
          icon
          v-on="on"
          color="white"
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
        },
        {
          'to': '/login',
          'text': 'Entrar'
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
