<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="header" elevated>
      <q-toolbar>
        <q-toolbar-title>
          <q-btn icon="handshake" to="#/" flat />
        </q-toolbar-title>
        <q-btn label="Home" flat></q-btn>
        <q-btn label="About" flat></q-btn>
        <q-btn label="How It Works" flat></q-btn>
        <q-btn label="Team" flat></q-btn>
        <q-btn label="Shelter Signup" flat></q-btn>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MainLayout',

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
