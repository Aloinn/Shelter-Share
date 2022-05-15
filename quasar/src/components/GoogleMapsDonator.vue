<template>
  <div class="fit">
    <div class="absolute top q-mx-auto row full-width">
      <div class="row q-mx-auto q-mt-lg">
        <q-input
          outline
          class="bg-white fn-md search border-round q-pa-md i"
          placeholder="Search Shelter"
        >
          <q-icon name="search" size="30px" class="q-my-auto" />
        </q-input>
      </div>
    </div>
    <GoogleMap
      api-key="AIzaSyAkCD51UGRDCEgBqC5ZeBCvSW5eq7gmnYw"
      :styles="googleMapStyle"
      :streetViewControl="false"
      :mapTypeControl="false"
      style="width: 100%; height: 94vh"
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
          icon: 'help-icon.png',
          position: {
            lat: location.lat,
            lng: location.long,
          },
        }"
      />
    </GoogleMap>
  </div>
</template>

<style lang="scss" scoped>
.top {
  z-index: 200;
}
.search {
  min-width: 500px;
}
</style>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue';
import { GoogleMap, Marker, Circle } from 'vue3-google-map';
import { googleMapStyle } from '../lib/google-map-style';
import { useFirebaseUser, useFirestoreCollection } from '@gcto/firebase-hooks';
import { Shelter } from './models';
import { useQuasar } from 'quasar';
import DialogWrapperVue from './ShelterDialog.vue';
import { addDoc, collection, getFirestore } from 'firebase/firestore';

export default defineComponent({
  components: { GoogleMap, Marker },
  setup() {
    const $q = useQuasar();
    const db = getFirestore();
    const user = useFirebaseUser();
    const options = {
      mapTypeControl: false,
    };
    const openDialog = (shelter: Shelter) => {
      $q.dialog({
        component: DialogWrapperVue,
        componentProps: { shelter },
      }).onOk(() => {
        addDoc(collection(db, 'requests'), {
          uid: user.data.value?.uid,
          content: 'Some Items',
          shelter: shelter.id,
        });
      });
    };

    const shelters = useFirestoreCollection<Shelter>('shelters');
    // COMPUTES ARRAY OF FIRESTORE DOCUMENTS WITH DOC ID
    const shelterLocations = computed(() => [
      ...([...(shelters.data.value?.keys() || [])].map((key: string) => ({
        id: key,
        ...shelters.data.value?.get(key),
      })) || []),
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
      shelters,
      googleMapStyle,
      shelterLocations,
      location,
      cc,
      openDialog,
      log,
      options,
    };
  },
});
</script>
