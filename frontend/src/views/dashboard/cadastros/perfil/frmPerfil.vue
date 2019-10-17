<template>
  <v-container
    id="perfil"
    fluid
    tag="section"
  >
    <v-row>
      <v-col cols="12">
        <base-material-card
          color="success"
          inline
          title="Perfis"
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
    name: 'Perfil',
    components: { Lista, Consulta, Novo, Alterar, Excluir }
}
</script>