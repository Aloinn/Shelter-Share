<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="header" elevated>
      <q-toolbar>
        <q-toolbar-title>
          <q-btn icon="handshake" to="#/" flat />
        </q-toolbar-title>
        <q-btn label="Home" to="#/" flat></q-btn>
        <q-btn label="About" to="#about" flat></q-btn>
        <q-btn label="How It Works" to="#howitworks" flat></q-btn>
        <q-btn label="Team" to="#team" flat></q-btn>
        <auth-button></auth-button>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import AuthButton from 'src/components/auth/AuthButton.vue';

export default defineComponent({
  name: 'MainLayout',
  components: { AuthButton },
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
.header {
  background-color: $secondary-light;
  color: $text-dark;
}
</style>
