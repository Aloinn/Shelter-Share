<template>
  <q-page class="row items-center justify-evenly">
    <google-maps-donator />
  </q-page>
</template>

<script lang="ts">
import GoogleMapsDonator from 'src/components/GoogleMapsDonator.vue';
import { defineComponent } from 'vue';
import GoogleMaps from '../components/GoogleMaps.vue';

export default defineComponent({
  components: { GoogleMapsDonator },
  setup() {
    return {};
  },
});
</script>
