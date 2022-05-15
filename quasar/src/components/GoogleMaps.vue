<template>
  <GoogleMap
    api-key="AIzaSyAkCD51UGRDCEgBqC5ZeBCvSW5eq7gmnYw"
    :styles="googleMapStyle"
    style="width: 100%; height: 100vh"
    :center="location"
    :zoom="15"
  >
    <!-- <Marker :options="{ position: location }" /> -->
    <Circle :options="cc" @click="log" />
  </GoogleMap>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { GoogleMap, Circle } from 'vue3-google-map';
import { googleMapStyle } from './../lib/google-map-style';

export default defineComponent({
  components: { GoogleMap, Circle },
  setup() {
    const location = ref({ lat: 43.65549, lng: -79.37428 });
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        location.value = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
      });
    }

    const log = () => {
      console.log('T');
    };

    // useFirestoreCollection

    const cc = {
      center: location.value,
      radius: 200,
      strokeColor: '#FF0000',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#FF0000',
      fillOpacity: 0.35,
      clickable: true,
    };
    return {
      googleMapStyle,
      location,
      cc,
      log,
    };
  },
});
</script>
