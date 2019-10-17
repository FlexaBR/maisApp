<template>
  <v-container
    id="usuario"
    fluid
    tag="section"
  >
    <v-row>
      <v-col cols="12">
        <base-material-card
          color="success"
          inline
          title="Usuários"
          class="px-5 py-3"
        >

          <v-tabs color="grey lighten-3"
            slider-color="blue">
            <v-tab ripple>
                Lista
            </v-tab>

            <v-tab ripple>
                Consulta
            </v-tab>

            <v-tab ripple>
                Novo
            </v-tab>

            <v-tab ripple>
                Alterar
            </v-tab>
            
            <v-tab ripple>
                Excluir
            </v-tab>

            <v-tab-item>
                <Lista />
            </v-tab-item>

            <v-tab-item>
                <Consulta />
            </v-tab-item>

            <v-tab-item>
                <Novo />
            </v-tab-item>
            
            <v-tab-item>
                <Alterar />
            </v-tab-item>
            
            <v-tab-item>
                <Excluir />
            </v-tab-item>
          </v-tabs>


          <v-subheader class="display-1 mt-3">
            Text fields
          </v-subheader>

          <v-form class="pt-1">
            <v-text-field
              label="With help"
              outlined
              class="ml-4"
            />
          </v-form>
          <v-subheader class="display-1 mt-3">
            Textareas
          </v-subheader>

          <v-row class="ml-1">
            <v-col
              cols="12"
              md="6"
            >
              <v-textarea
                name="input-7-1"
                label="Default style"
                value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
                hint="Hint text"
              />
            </v-col>
          </v-row>
        </base-material-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Lista from './Lista'
import Consulta from './Consulta'
import Novo from './Novo'
import Alterar from './Alterar'
import Excluir from './Excluir'

  export default {
    name: 'Usuario',
    components: { Lista, Consulta, Novo, Alterar, Excluir }
}
</script>