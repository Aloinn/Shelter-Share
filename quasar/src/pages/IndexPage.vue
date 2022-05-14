<template>
  <q-page class="row items-center justify-evenly">
    <google-maps-donator />
    <auth-button />
  </q-page>
</template>

<script lang="ts">
import GoogleMapsDonator from 'src/components/GoogleMapsDonator.vue';
import { defineComponent } from 'vue';
import GoogleMaps from '../components/GoogleMaps.vue';
import AuthButton from '../components/auth/AuthButton.vue';
export default defineComponent({
  components: { GoogleMapsDonator, AuthButton },
  setup() {
    return {};
  },
});
</script>
