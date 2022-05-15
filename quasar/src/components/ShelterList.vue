<template>
  <div class="q-pa-lg q-gutter-y-lg">
    <q-card
      class="shelter-card row"
      v-for="(shelter, index) in shelterList.data.value"
      :key="index"
    >
      <q-card-section class="col-4">
        <q-img class="shelter-image" :src="shelter[1].img" />
      </q-card-section>
      <q-card-section class="col-8">
        <div class="fn-lg">
          {{ shelter[1].name }}
        </div>
        <q-separator />
        <div class="row items-center q-my-sm">
          <q-icon name="near_me" size="1.2rem" />
          <div class="text-caption fn-sm q-mx-sm">
            {{ shelter[1].address }}
          </div>
        </div>
        <div class="row items-center q-mt-xs">
          <q-icon name="volunteer_activism" size="1.2rem" />
          <div class="text-caption fn-sm q-ml-xs col-1">
            {{ shelter[1].volunteerCount }}
          </div>
          <q-icon name="link" size="1.2rem" />
          <div class="text-caption fn-sm q-ml-xs col-1">
            <a :href="shelter[1].url">Website</a>
          </div>
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: ['shelterList'],
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
.shelter-card {
  max-width: 600px;
}
.shelter-image {
  border-radius: 18px;
  max-width: 160px;
  height: 160px;
}
a {
  text-decoration: none;
}
</style>
