<template>
  <router-view />
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "App",
  methods: mapActions(["setUsuario"]),
  created() {
    this.setUsuario(null);
  }
};
</script>
