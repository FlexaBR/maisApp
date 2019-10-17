<template>
  <v-container id="register" fluid fill-height tag="section" class="cyan">
    <v-row justify="center" class="mt-12">
      <v-col cols="12">
        <v-slide-y-transition appear>
          <v-card class="pa-3 pa-md-5 mx-auto" light>
            <pages-heading class="text-center display-3">Obrigado pelo Registro!</pages-heading>

            <v-row>
              <v-col cols="12" md="12">
                <v-row no-gutters>
                  <v-col v-for="(section, i) in sections" :key="i" cols="12">
                    <v-list-item three-line>
                      <v-list-item-icon class="mr-4 mt-5 mt-md-4">
                        <v-icon
                          :large="$vuetify.breakpoint.mdAndUp"
                          :color="section.iconColor"
                          v-text="section.icon"
                        />
                      </v-list-item-icon>

                      <v-list-item-content>
                        <v-list-item-title
                          class="font-weight-light mb-4 mt-3"
                          v-text="section.title"
                        />

                        <v-list-item-subtitle v-text="section.text" />
                      </v-list-item-content>
                    </v-list-item>
                  </v-col>
                </v-row>
              </v-col>

            </v-row>
          </v-card>
        </v-slide-y-transition>
      </v-col>
    </v-row>
  </v-container>
  
</template>

<script>

export default {
  name: "Analise",

  components: {
    PagesHeading: () => import("./components/Heading")
  },

  data: () => ({
    sections: [
      {
        icon: "mdi-clipboard-check-outline",
        iconColor: "primary",
        title: "Adequação de Perfil",
        text: `Faremos uma breve análise para adequar seu perfil ao +APP e em seguida lhe enviaremos um e-mail com todas as instruções.`
      }
    ]
  })
}
</script>

<style lang="sass">
  #register
    .v-list-item__subtitle
      -webkic-line-clamp: initial
      -webkit-box-orient: initial
</style>
