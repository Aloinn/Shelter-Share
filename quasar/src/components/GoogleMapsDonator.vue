<template>
  <div>
    {{ shelterLocations }}
    {{ location }}
  </div>
  <GoogleMap
    api-key="AIzaSyAkCD51UGRDCEgBqC5ZeBCvSW5eq7gmnYw"
    :styles="googleMapStyle"
    style="width: 100%; height: 50vh"
    :center="location"
    :zoom="14"
  >
    <Marker
      :key="i"
      v-for="(location, i) in shelterLocations"
      @click="
        () => {
          openDialog(location);
          log();
        }
      "
      label="TEST"
      :options="{
        name: 'TEST',

        position: {
          lat: location.lat,
          lng: location.long,
        },
      }"
    />
    <!-- ICON IS CHANGABLE -->
    <Marker
      :options="{
        icon: 'favicon-16x16.png',
        position: location,

        size: '30',
        color: '#efefef',
      }"
    />

    <Circle :options="cc" @click="log" />
  </GoogleMap>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue';
import { GoogleMap, Marker, Circle } from 'vue3-google-map';
import { googleMapStyle } from '../lib/google-map-style';
import { useFirestoreCollection } from '@gcto/firebase-hooks';
import { Shelter } from './models';
import { useQuasar } from 'quasar';
import DialogWrapperVue from './ShelterDialog.vue';
import { addDoc, collection, getFirestore } from 'firebase/firestore';

export default defineComponent({
  components: { GoogleMap, Marker, Circle },
  setup() {
    const $q = useQuasar();
    const db = getFirestore();
    const openDialog = (shelter: Shelter) => {
      $q.dialog({
        component: DialogWrapperVue,
        componentProps: { shelter },
      }).onOk(() => {
        addDoc(collection(db, 'requests'), {
          test: 'asf',
        });
      });
    };

    const shelters = useFirestoreCollection<Shelter>('shelters');
    const shelterLocations = computed(() => [
      ...(shelters.data.value?.values() || []),
    ]);
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
      shelterLocations,
      location,
      cc,
      openDialog,
      log,
    };
  },
});
</script>
