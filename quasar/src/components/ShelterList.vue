<template>
  <div>
    <div class="text-h6">All Shelters</div>
    <q-card
      class="shelter-card row"
      v-for="(shelter, index) in shelters.data.value"
      :key="index"
    >
      <q-card-section class="text-h6"> {{ shelter[1].name }}</q-card-section>
      <q-card-section>
        <div>
          {{ shelter[1].address }}
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script lang="ts">
import { useFirestoreCollection } from '@gcto/firebase-hooks/lib';
import { defineComponent } from 'vue';
import { Shelter } from './models';

export default defineComponent({
  setup() {
    const shelters = useFirestoreCollection<Shelter>('shelters');

    return {
      shelters,
    };
  },
});
</script>

<style lang="scss" scoped>
.shelter-card {
  max-width: 400px;
}
</style>
