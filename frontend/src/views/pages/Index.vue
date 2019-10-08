<template>
  <v-app>
    <pages-core-app-bar />
    <pages-core-drawer />
    <v-content class="white">
      <router-view />
    </v-content>
    </v-app>
</template>

<script>
export default {
  name: "PagesIndex",

  components: {
    PagesCoreAppBar: () => import("./components/core/AppBar"),
    PagesCoreDrawer: () => import("./components/core/Drawer")
  },

  created() {
    this.$vuetify.theme.dark = true;
  },

  beforeDestroy() {
    this.$vuetify.theme.dark = false;
  }
};
</script>
