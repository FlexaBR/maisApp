<template>
  <v-container id="contato" tag="section">
    <base-card color="rgba(0, 151, 167, 0.9)" class="pa-3 mt-n6 mb-6">
      <v-container grid-list-xl pa-0>
        <v-layout wrap>
          <v-flex xs12 md6 offset-md1>
            <base-subheading>Contato</base-subheading>
            <v-list class="transparent mt-n6 ml-n3">
              <v-list-item>
                <v-list-item-avatar color="primary">
                  <v-icon class="elevation-4" dark>mdi-email-outline</v-icon>
                </v-list-item-avatar>
                <v-list-item-title> Email: thais@maisrep.com.br</v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-avatar color="primary">
                  <v-icon class="elevation-4" dark>mdi-phone</v-icon>
                </v-list-item-avatar>
                <v-list-item-title> Celular: (51) 99621-5710</v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-avatar color="primary">
                  <v-icon class="elevation-4" dark>mdi-phone</v-icon>
                </v-list-item-avatar>
                <v-list-item-title> Telefone: (51) 3933-6761</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-flex>
        </v-layout>
      </v-container>
    </base-card>
  </v-container>
</template>