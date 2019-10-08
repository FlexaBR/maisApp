<template>
  <v-container id="register" fluid fill-height tag="section" class="cyan">
    <v-row justify="center" class="mt-12">
      <v-col cols="9">
        <v-slide-y-transition appear>
          <v-card class="pa-3 pa-md-5 mx-auto" light>
            <pages-heading class="text-center display-3">Registro</pages-heading>

            <v-row>
              <v-col cols="12" md="6">
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

              <v-col cols="12" md="6">
                <div class="text-center">
                  <v-text-field color="secondary" label="Primeiro Nome..." prepend-icon="mdi-face" />

                  <v-text-field color="secondary" label="Email..." prepend-icon="mdi-email" />

                  <v-text-field color="secondary" label="Senha..." prepend-icon="mdi-lock-outline" />

                  <v-text-field
                    class="mb-8"
                    color="secondary"
                    label="Confirmação de senha..."
                    prepend-icon="mdi-lock-outline"
                  />
                  <pages-btn color="success">Registrar</pages-btn>
                </div>
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
  name: "PagesRegister",

  components: {
    PagesBtn: () => import("./components/Btn"),
    PagesHeading: () => import("./components/Heading")
  },

  data: () => ({
    sections: [
      
      {
        icon: "mdi-briefcase-search-outline",
        iconColor: "success",
        title: "Pesquisa de Produtos",
        text: `Consulte produtos e preços.`
      },
      {
        icon: "mdi-clipboard-check-outline",
        iconColor: "primary",
        title: "Orçamentos e Pedidos",
        text: `Monte, avalie e envie rapidamente orçamentos e pedidos.`
      },
      {
        icon: "mdi-calendar-check",
        iconColor: "vinho",
        title: "Programação de Pedido",
        text:
          "Agende uma data aproximada para novos pedidos que lembramos você."
      }
    ]
  })
};
</script>

<style lang="sass">
  #register
    .v-list-item__subtitle
      -webkic-line-clamp: initial
      -webkit-box-orient: initial
</style>
