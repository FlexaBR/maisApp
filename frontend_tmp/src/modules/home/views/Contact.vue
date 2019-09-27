<template>

  <section
    id="contact"
    class="py-5"
  >
    <Jumbotron2 />
    <heading class="mt-6 vinho--text">Contate-nos</heading>

    <v-container vinho--text>
      <v-row>
        <v-col
          xs12
          md6
        >
          <v-form>
            <v-container pa-0>
              <v-row>
                <v-col
                  cols="12"
                  class="mb-4 grey--text"
                >
                  Ligue ou envie nosso formulário on-line. Estamos ansiosos para atendê-lo!
                </v-col>
                <v-col
                  cols="12"
                  md="6"
                >
                  <v-text-field
                    outlined
                    label="Primeiro nome*"
                  />
                </v-col>

                <v-col
                  cols="12"
                  md="6"
                >
                  <v-text-field
                    outlined
                    label="Sobrenome*"
                  />
                </v-col>

                <v-col
                  cols="12"
                  md="6"
                >
                  <v-text-field
                    outlined
                    label="e-mail*"
                  />
                </v-col>

                <v-col
                  cols="12"
                  md="6"
                >
                  <v-text-field
                    label="Telefone*"
                    outlined
                  />
                </v-col>

                <v-col cols="12">
                  <v-text-field
                    label="Assunto"
                    outlined
                  />
                </v-col>

                <v-col cols="12">
                  <v-textarea
                    label="Mensagem"
                    outlined
                  />
                </v-col>

                <v-col cols="12">
                  <v-btn
                    :block="$vuetify.breakpoint.xsOnly"
                    color="primary"
                    depressed
                    x-large
                  >
                    Enviar
                  </v-btn>
                </v-col>
              </v-row>
            </v-container>
          </v-form>
        </v-col>

        <v-col
          cols="12"
          md="6"
        >
          <v-container
            fluid
            pa-0
          >
            <v-row>

              <v-col
                cols="12"
                md="6"
                class="pa-0"
              >
                <v-card-title>Informações de Contato</v-card-title>
                <v-card-text>
                  <div>(51) 99621-5710</div>
                  <div>
                    <a href="#">thais@maisrep.com.br</a>
                  </div>
                </v-card-text>
              </v-col>

            </v-row>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
import Heading from './../components/Heading'
import Jumbotron2 from './../components/Jumbotron2'

export default {
  components: {
    Heading,
    Jumbotron2
  }
}
</script>
