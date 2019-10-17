<template>
  <v-app-bar
    absolute
    color="transparent"
    flat
    height="85"
  >
    <v-container>
      <v-row align="center">
        <v-img
          class="shrink ml-n3"
          max-width="40%"
          :src="require('@/assets/logoMB.png')"
          width="180"
        />

        <v-spacer />
        <v-toolbar-items v-if="$vuetify.breakpoint.mdAndUp">
          <v-btn
            v-for="(item, i) in items"
            :key="i"
            :to="item.to"
            min-height="48"
            text
          >
            <v-icon
              left
              size="20"
              v-text="item.icon"
            />
            <span v-text="item.text" />
          </v-btn>
        </v-toolbar-items>
        <v-app-bar-nav-icon
          v-else
          aria-label="Open Navigation Drawer"
          @click="toggleDrawer"
        />

      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script>
// Utilities
  import { mapMutations } from 'vuex'

  export default {
    name: 'PagesCoreAppBar',

    data: () => ({
      items: [
        {
          icon: 'mdi-home',
          text: 'Home',
          to: '/home'
        },
        {
          icon: 'mdi-account-multiple-plus',
          text: 'Registro',
          to: '/register'
        },
        {
          icon: 'mdi-fingerprint',
          text: 'Entrar',
          to: '/login'
        }
      ]
    }),

    computed: {
      title () {
        return this.titles[this.$route.path]
      }
    },

    methods: {
      ...mapMutations(['toggleDrawer'])
    }

  }
</script>
