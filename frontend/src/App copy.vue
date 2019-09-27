<template>
  <v-app>
    <Toolbar />
    <router-view />
    <Footer />
  </v-app>
</template>

<script>
import Footer from './components/core/Footer'
import Toolbar from './components/core/Toolbar'

export default {
  name: 'App',
  components: {
    Footer,
    Toolbar
  },
  computed: {
    attrs () {
      return {
        key: this.$route.path,
        style: {
          minHeight: 'calc(100vh - ' + this.$vuetify.application.top + 'px'
        }
      }
    }
  }
}
</script>

<style lang="sass">
  section
    padding-top: 64px
    padding-bottom: 64px

    @media screen and (max-width: 640px)
      padding-top: 16px
      padding-bottom: 16px

  // Remove once fixed
  // https://github.com/vuetifyjs/vuetify/issues/8327
  .theme--dark.v-list-item
    color: #FFFFFF
</style>
