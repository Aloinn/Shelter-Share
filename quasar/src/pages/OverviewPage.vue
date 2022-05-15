<template>
  <q-page class="q-pa-lg">
    <div class="text-h6 row justify-center">
      <q-input
        class="search-input"
        label="Search by Shelter, Location or ..."
        v-model="shelterSearch"
        @change="updateSearchResults"
        rounded
        outlined
      >
        <template v-slot:append>
          <q-icon name="search" class="cursor-pointer" color="primary" />
        </template>
      </q-input>
    </div>
    <div class="row justify-between items-center q-pt-lg q-pb-sm">
      <div class="fn-800 op-80 fn-lg">Available Shelters</div>
      <div class="row items-center q-gutter-x-sm">
        <div>Sort by</div>
        <q-select
          rounded
          outlined
          dense
          class="sort-input"
          v-model="setSort"
          :options="['Volunteer Count', 'Newest']"
        />
      </div>
    </div>
    <div class="row justify-center q-col-gutter-md">
      <div class="col">
        <shelter-list :shelterList="searchResults" />
      </div>
      <div class="col">
        <past-donation-list />
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import ShelterList from 'src/components/ShelterList.vue';
import PastDonationList from 'src/components/PastDonationList.vue';
import { useFirestoreCollection } from '@gcto/firebase-hooks/lib';
import { Shelter } from 'src/components/models';

export default defineComponent({
  setup() {
    const setSort = ref('Volunteer Count');
    const shelterSearch = ref('');
    const shelters = useFirestoreCollection<Shelter>('shelters');
    const shelterLocations = computed(() => [
      ...([...(shelters.data.value?.keys() || [])].map((key: string) => ({
        id: key,
        ...shelters.data.value?.get(key),
      })) || []),
    ]);
    const searchResults = computed(() =>
      shelterLocations.value.filter(
        (item) =>
          item?.name
            ?.toLowerCase()
            .includes(shelterSearch.value.toLowerCase()) ||
          item?.address
            ?.toLowerCase()
            .includes(shelterSearch.value.toLowerCase())
      )
    );
    function updateSearchResults() {
      return 0;
    }
    return {
      setSort,
      shelterSearch,
      shelters,
      shelterLocations,
      searchResults,
      updateSearchResults,
    };
  },
  components: { ShelterList, PastDonationList },
});
</script>

<style lang="scss" scoped>
.search-input {
  width: 550px;
}
.sort-input {
  max-width: 200px;
}
</style>
