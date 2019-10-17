<template>
  <v-container id="register" fluid fill-height tag="section" class="cyan">
    <v-row justify="center" class="mt-12">
      <v-col cols="12">
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
                 

                  <v-text-field
                    color="secondary"
                    label="Primeiro Nome..."
                    prepend-icon="mdi-face"
                    v-model="usuario.nome"
                  />

                  <v-text-field
                    color="secondary"
                    label="Email..."
                    prepend-icon="mdi-email"
                    v-model="usuario.email"
                  />

                  <v-text-field
                    color="secondary"
                    label="Senha..."
                    prepend-icon="mdi-lock-outline"
                    v-model="usuario.senha"
                    type="password"
                  />

                  <v-text-field
                    name="confirmPassword"
                    color="secondary"
                    label="Confirme a senha..."
                    prepend-icon="mdi-lock-outline"
                    type="password"
                  />

                  <pages-btn color="success" @click="registrar">Registrar</pages-btn>
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
import Erros from "../dashboard/comum/Erros"
import gql from "graphql-tag"

export default {
  name: "PagesRegister",

  components: {
    Erros,
    PagesBtn: () => import("./components/Btn"),
    PagesHeading: () => import("./components/Heading")
  },

  data: () => ({
    usuario: {},
    erros: null,
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
  }),

  methods: {
    registrar() {
      this.$api.mutate({
        mutation: gql`
          mutation (
            $nome: String!
            $email: String!
            $senha: String!
            ) {
                registrarUsuario(
                  dados: {
                    nome: $nome
                    email: $email
                    senha: $senha
                  }
                ) {
                    id nome email perfis { nome }
                }
              }
        `,
        variables: {
          nome: this.usuario.nome,
          email: this.usuario.email,
          senha: this.usuario.senha
        }
      })
        .then(resultado => {
          this.usuario = {}
          this.erros = null
          this.$router.push(this.$route.query.redirect || '/analise')
        }).catch(e => {
            this.erros = e
          })
    }
  }
}
</script>

<style lang="sass">
  #register
    .v-list-item__subtitle
      -webkic-line-clamp: initial
      -webkit-box-orient: initial
</style>
