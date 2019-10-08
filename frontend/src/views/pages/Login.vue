<template>
  <v-container id="login" fill-height tag="section" fluid class="cyan">
    <v-row justify="center">
      <v-slide-y-transition appear>
        <base-material-card color="success" light max-width="100%" width="360" class="px-5 py-3">
          <template v-slot:heading>
            <div class="text-center">
              <h1 class="display-2 font-weight-light">Entrar</h1>
            </div>
          </template>

          <v-card-text class="text-center">
            
            <v-text-field color="secondary" class="mt-8" label="Email..." prepend-icon="mdi-email" />

            <v-text-field
              class="mb-8"
              color="secondary"
              label="Senha..."
              prepend-icon="mdi-lock-outline"
            />

            <pages-btn large color depressed class="v-btn--text success--text">Vamos lá</pages-btn>
          </v-card-text>
        </base-material-card>
      </v-slide-y-transition>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "PagesLogin",
  components: {
    PagesBtn: () => import("./components/Btn")
  }
};
</script>
