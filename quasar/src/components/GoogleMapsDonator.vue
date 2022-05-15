<template>
  <div class="fit">
    <div class="absolute top q-mx-auto row full-width">
      <div class="column search q-mx-auto q-mt-lg">
        {{ selectedShelter }}
        <q-input
          outline
          v-model="search"
          class="bg-white fn-md search border-round q-pa-md i"
          placeholder="Search Shelter"
        >
          <q-icon name="search" size="30px" class="q-my-auto" />
        </q-input>
        <div class="column">
          <div
            class="bg-blur q-mt-md border-round clickable"
            v-for="result in searchResults"
            :key="result.name"
          >
            <q-img
              class="border-round"
              height="140px"
              :src="result.img"
              @click="() => updateLocation(result)"
            >
              <div class="fit col column">
                <div class="op-80 fn-md fn-800">{{ result.name }}</div>
                <div class="op-60 fn-sm fn-800">{{ result.address }}</div>

                <div>
                  <a
                    class="fn-link text-primary fn-800 op-60"
                    :href="result.url"
                    >{{ result.url }}</a
                  >
                </div>
              </div>
            </q-img>
            <!-- <div class="row fit q-col-gutter-x-sm">
              <div class="col-4">
                <div class="fit">
                  <q-img
                    class="border-round"
                    height="100px"
                    :src="result.img"
                  />
                </div>
              </div>
              <div class="col column q-mt-sm">
                <div class="op-80 fn-md fn-800">{{ result.name }}</div>
                <div class="op-60 fn-sm fn-800">{{ result.address }}</div>
                <q-space />
                <a class="fn-link text-primary fn-600 op-60" href="">{{
                  result.url
                }}</a>
              </div>
            </div> -->
          </div>
        </div>
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
          }
        "
        :options="{
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
  width: 500px;
}
</style>

<script lang="ts">
import { computed, defineComponent, ref, watch } from 'vue';
import { GoogleMap, Marker } from 'vue3-google-map';
import { googleMapStyle } from '../lib/google-map-style';
import { useFirebaseUser, useFirestoreCollection } from '@gcto/firebase-hooks';
import { Shelter } from './models';
import { useQuasar } from 'quasar';
import DialogWrapperVue from './ShelterDialog.vue';
import { addDoc, collection, getFirestore } from 'firebase/firestore';

export default defineComponent({
  components: { GoogleMap, Marker },
  setup() {
    const selectedShelter = ref('');
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

    const search = ref('');
    watch(search, () => {
      if (selectedShelter.value != '' && search.value != '')
        selectedShelter.value = '';
    });
    const searchResults = computed(() =>
      search.value == ''
        ? []
        : shelterLocations.value.filter(
            (item) =>
              item?.name?.toLowerCase().includes(search.value.toLowerCase()) ||
              item?.address?.toLowerCase().includes(search.value.toLowerCase())
          )
    );

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

    const updateLocation = (_location: {
      lat: number;
      long: number;
      id: string;
    }) => {
      location.value = { lat: _location.lat, lng: _location.long };
      search.value = '';
      selectedShelter.value = _location.id;
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
      search,
      searchResults,
      shelters,
      googleMapStyle,
      shelterLocations,
      location,
      cc,
      openDialog,
      log,
      options,
      updateLocation,
      selectedShelter,
    };
  },
});
</script>
