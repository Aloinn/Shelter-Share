<template>
  <q-page>
    <google-maps-donator />
  </q-page>
</template>

<script lang="ts">
import GoogleMapsDonator from 'src/components/GoogleMapsDonator.vue';
import { defineComponent } from 'vue';
export default defineComponent({
  components: { GoogleMapsDonator },
  setup() {
    return {};
  },
});
</script>
