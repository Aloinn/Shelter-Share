<template>
  <div class="q-gutter-y-lg">
    <q-card
      flat
      bordered
      class="shelter-card row border-round"
      v-for="(shelter, index) in shelterList"
      :key="index"
    >
      <q-img :src="shelter.img" class="shelter-image">
        <q-card-section class="fit">
          <div class="fn-lg op-80 fn-800">
            {{ shelter.name }}
          </div>
          <q-separator />
          <div class="row items-center q-my-xs">
            <q-icon name="near_me" size="1.2rem" />
            <div class="text-caption fn-sm q-mx-sm fn-600 fn-60">
              {{ shelter.address }}
            </div>
          </div>
          <div class="row items-center q-mt-xs">
            <q-icon name="volunteer_activism" size="1.2rem" />
            <div class="text-caption fn-sm q-ml-xs col-1">
              {{ shelter.volunteerCount }}
            </div>
            <q-icon name="link" size="1.2rem" />
            <div class="text-caption fn-sm q-ml-xs col-1">
              <a :href="shelter.url" class="fn-link text-primary">Website</a>
            </div>
          </div>
        </q-card-section>
      </q-img>
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
  max-height: 350px;
}
.shelter-image {
  border-radius: 18px;

  height: 160px;
}
a {
  text-decoration: none;
}
</style>
