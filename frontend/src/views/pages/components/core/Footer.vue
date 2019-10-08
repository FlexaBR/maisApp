<template>
    <v-footer id="pages-core-footer" absolute color="transparent" light>
      <v-container>
        <v-row align="center" no-gutters>
          <v-btn
            v-for="(link, i) in links"
            :key="i"
            :to="link.to"
            min-height="38"
            text
            class="hidden-sm-and-down"
          >
            <span v-text="link.text" />
          </v-btn>

          <v-spacer class="hidden-sm-and-down" />

          <v-col cols="12" md="auto">
            <div class="body-1 font-weight-light pt-6 pt-md-0 text-center">&copy; 2019 by Flexa</div>
          </v-col>
        </v-row>
      </v-container>
    </v-footer>
  
</template>

<script>
export default {
  name: "PagesCoreFooter",

  data: () => ({
    links: [
      {
        to: "/home",
        text: "Home"
      },
      {
        to: "/register",
        text: "Registro"
      },
      {
        to: "/login",
        text: "Entrar"
      }
    ]
  })
};
</script>

<style lang="sass">
  #pages-core-footer
    a
      color: #263238
      font-size: .825rem
      font-weight: 500
      text-decoration: none
      text-transform: uppercase
</style>
